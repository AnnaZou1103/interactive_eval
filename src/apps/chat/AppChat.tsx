import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { CmdRunProdia } from '~/modules/prodia/prodia.client';
import { CmdRunReact } from '~/modules/aifn/react/react';
import { FlattenerModal } from '~/modules/aifn/flatten/FlattenerModal';
import { imaginePromptFromText } from '~/modules/aifn/imagine/imaginePromptFromText';
import { useModelsStore } from '~/modules/llms/store-llms';

import { ConfirmationModal } from '~/common/components/ConfirmationModal';
import { createDMessage, DMessage, initialmessage, useChatStore } from '~/common/state/store-chats';
import { useLayoutPluggable } from '~/common/layout/store-applayout';

import { ChatDrawerItems } from './components/applayout/ChatDrawerItems';
import { ChatDropdowns } from './components/applayout/ChatDropdowns';
import { ChatMenuItems } from './components/applayout/ChatMenuItems';
import { ChatMessageList } from './components/ChatMessageList';
import { ChatModeId, useChatModeStore } from './store-chatmode';
import { CmdAddRoleMessage, extractCommands } from './commands';
import { Composer } from './components/composer/Composer';
import { Ephemerals } from './components/Ephemerals';
import { TradeConfig, TradeModal } from './trade/TradeModal';
import { runAssistantUpdatingState } from './editors/chat-stream';
import { runImageGenerationUpdatingState } from './editors/image-generate';
import { runReActUpdatingState } from './editors/react-tangent';
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { ChatMessage } from './components/message/ChatMessage';

const SPECIAL_ID_ALL_CHATS = 'all-chats';


export function AppChat() {

  // state
  const [isMessageSelectionMode, setIsMessageSelectionMode] = React.useState(false);
  const [tradeConfig, setTradeConfig] = React.useState<TradeConfig | null>(null);
  const [clearConfirmationId, setClearConfirmationId] = React.useState<string | null>(null);
  const [deleteConfirmationId, setDeleteConfirmationId] = React.useState<string | null>(null);
  const [flattenConversationId, setFlattenConversationId] = React.useState<string | null>(null);

  // external state
  const { activeConversationId, activeEvaluationId, isConversationEmpty, hasAnyContent, duplicateConversation, deleteAllConversations, setMessages, systemPurposeId, setAutoTitle, setActiveEvaluationId } = useChatStore(state => {
    const conversation = state.conversations.find(conversation => conversation.id === state.activeConversationId);
    const isConversationEmpty = conversation ? !conversation.messages.length : true;
    const hasAnyContent = state.conversations.length > 1 || !isConversationEmpty;
    return {
      activeConversationId: state.activeConversationId,
      activeEvaluationId: state.activeEvaluationId,
      isConversationEmpty,
      hasAnyContent,
      duplicateConversation: state.duplicateConversation,
      deleteAllConversations: state.deleteAllConversations,
      setMessages: state.setMessages,
      systemPurposeId: conversation?.systemPurposeId ?? null,
      setAutoTitle: state.setAutoTitle,
      setActiveEvaluationId: state.setActiveEvaluationId,
    };
  }, shallow);


  const handleExecuteConversation = async (chatModeId: ChatModeId, conversationId: string, history: DMessage[]) => {
    const { chatLLMId } = useModelsStore.getState();
    if (!conversationId || !chatLLMId) return;

    // /command: overrides the chat mode
    const lastMessage = history.length > 0 ? history[history.length - 1] : null;
    if (lastMessage?.role === 'user') {
      const pieces = extractCommands(lastMessage.text);
      if (pieces.length == 2 && pieces[0].type === 'cmd' && pieces[1].type === 'text') {
        const command = pieces[0].value;
        const prompt = pieces[1].value;
        if (CmdRunProdia.includes(command)) {
          setMessages(conversationId, history);
          return await runImageGenerationUpdatingState(conversationId, prompt);
        }
        if (CmdRunReact.includes(command) && chatLLMId) {
          setMessages(conversationId, history);
          return await runReActUpdatingState(conversationId, prompt, chatLLMId);
        }
        if (CmdAddRoleMessage.includes(command)) {
          lastMessage.role = command.startsWith('/s') ? 'system' : command.startsWith('/a') ? 'assistant' : 'user';
          lastMessage.sender = 'Bot';
          lastMessage.text = prompt;
          return setMessages(conversationId, history);
        }
      }
    }
    
    // synchronous long-duration tasks, which update the state as they go
    if (chatModeId && chatLLMId && systemPurposeId) {
      switch (chatModeId) {
        case 'immediate':
        case 'immediate-follow-up':
          return await runAssistantUpdatingState(conversationId, history, chatLLMId, systemPurposeId, true, chatModeId === 'immediate-follow-up');
        case 'write-user':
          return setMessages(conversationId, history);
        case 'react':
          if (!lastMessage?.text)
            break;
          setMessages(conversationId, history);
          return await runReActUpdatingState(conversationId, lastMessage.text, chatLLMId);
        case 'draw-imagine':
          if (!lastMessage?.text)
            break;
          const imagePrompt = lastMessage.text;
          setMessages(conversationId, history.map(message => message.id !== lastMessage.id ? message : {
            ...message,
            text: `${CmdRunProdia[0]} ${imagePrompt}`,
          }));
          return await runImageGenerationUpdatingState(conversationId, imagePrompt);
      }
    }

    // ISSUE: if we're here, it means we couldn't do the job, at least sync the history
    console.log('handleExecuteConversation: issue running', conversationId, lastMessage);
    setMessages(conversationId, history);
  };

  const _findConversation = (conversationId: string) =>
    conversationId ? useChatStore.getState().conversations.find(c => c.id === conversationId) ?? null : null;

  const handleSendUserMessage = async (conversationId: string, userText: string) => {
    const conversation = _findConversation(conversationId);
    if (conversation) {
      const chatModeId = useChatModeStore.getState().chatModeId;
      if (chatModeId === 'draw-imagine-plus')
        return await handleImagineFromText(conversationId, userText);
      return await handleExecuteConversation(chatModeId, conversationId, [...conversation.messages, createDMessage('user', userText)]);
    }
  };

  const handleExecuteChatHistory = async (conversationId: string, history: DMessage[]) =>
    await handleExecuteConversation('immediate', conversationId, history);

  const handleImagineFromText = async (conversationId: string, messageText: string) => {
    const conversation = _findConversation(conversationId);
    if (conversation) {
      const prompt = await imaginePromptFromText(messageText);
      if (prompt)
        return await handleExecuteConversation('immediate', conversationId, [...conversation.messages, createDMessage('user', `${CmdRunProdia[0]} ${prompt}`)]);
    }
  };


  const handleClearConversation = (conversationId: string) => {
    setClearConfirmationId(conversationId);
    setActiveEvaluationId(null);
  }

  const handleConfirmedClearConversation = () => {
    if (clearConfirmationId) {
      setMessages(clearConfirmationId, []);
      setAutoTitle(clearConfirmationId, '');
      setClearConfirmationId(null);
    }
  };

  const handleDeleteAllConversations = () => setDeleteConfirmationId(SPECIAL_ID_ALL_CHATS);

  const handleConfirmedDeleteConversation = () => {
    if (deleteConfirmationId) {
      if (deleteConfirmationId === SPECIAL_ID_ALL_CHATS) {
        deleteAllConversations();
      }// else
      //  deleteConversation(deleteConfirmationId);
      setDeleteConfirmationId(null);
    }
  };


  const handleImportConversation = () => setTradeConfig({ dir: 'import' });

  const handleExportConversation = (conversationId: string | null) => setTradeConfig({ dir: 'export', conversationId });

  const handleFlattenConversation = (conversationId: string) => setFlattenConversationId(conversationId);


  // Pluggable ApplicationBar components

  const centerItems = React.useMemo(() =>
      <ChatDropdowns conversationId={activeConversationId} />,
    [activeConversationId],
  );

  const drawerItems = React.useMemo(() =>
      <ChatDrawerItems
        conversationId={activeConversationId}
        onImportConversation={handleImportConversation}
        onDeleteAllConversations={handleDeleteAllConversations}
      />,
    [activeConversationId],
  );

  useLayoutPluggable(centerItems, drawerItems);
  
  function handleMessageDelete(id: string): void {
    throw new Error('Function not implemented.');
  }

  return <>
    <Allotment css={{backgroundColor: '#EAEEF6'}}>
    <div style={{overflow: 'auto', height:'100%', width: '100%'}}>
    <ChatMessage
          key={'msg-' + initialmessage.id} message={initialmessage} diffText={undefined}
          isBottom={true}
          onMessageDelete={undefined}
          onMessageEdit={newText => handleMessageDelete(initialmessage.id)}
          onMessageRunFrom={undefined}
          onImagine={undefined}
      />
    <ChatMessageList
      conversationId={activeConversationId}
      isMessageSelectionMode={isMessageSelectionMode} setIsMessageSelectionMode={setIsMessageSelectionMode}
      onExecuteChatHistory={handleExecuteChatHistory}
      onImagineFromText={handleImagineFromText}
      sx={{
        flexGrow: 1,
        backgroundColor: 'background.level1',
        overflowY: 'auto', 
        // overflowY: 'hidden'
        minHeight: 96,
      }} />
      </div>

      {activeEvaluationId &&(
         <div style={{overflow: 'auto', height:'100%', width: '100%'}}>
          <ChatMessageList
          conversationId={activeEvaluationId}
          isMessageSelectionMode={isMessageSelectionMode} setIsMessageSelectionMode={setIsMessageSelectionMode}
          onExecuteChatHistory={handleExecuteChatHistory}
          onImagineFromText={handleImagineFromText}
          sx={{
            flexGrow: 1,
            backgroundColor: 'background.level1',
            overflowY: 'auto', 
            // overflowY: 'hidden'
            minHeight: 96,
          }} />
          </div>
        )
      }
    </Allotment>

    {/* <Ephemerals
      conversationId={activeConversationId}
      sx={{
        // flexGrow: 0.1,
        flexShrink: 0.5,
        overflowY: 'auto',
        minHeight: 64,
      }} /> */}

    <Composer
      conversationId={activeConversationId} messageId={null}
      isDeveloperMode={false}
      onSendMessage={handleSendUserMessage}
      sx={{
        zIndex: 21, // position: 'sticky', bottom: 0,
        backgroundColor: 'background.surface',
        borderTop: `1px solid`,
        borderTopColor: 'divider',
        p: { xs: 1, md: 2 },
      }} />


    {/* Import / Export  */}
    {!!tradeConfig && <TradeModal config={tradeConfig} onClose={() => setTradeConfig(null)} />}

    {/* Flatten */}
    {!!flattenConversationId && <FlattenerModal conversationId={flattenConversationId} onClose={() => setFlattenConversationId(null)} />}

    {/* [confirmation] Reset Conversation */}
    {!!clearConfirmationId && <ConfirmationModal
      open onClose={() => setClearConfirmationId(null)} onPositive={handleConfirmedClearConversation}
      confirmationText={'Are you sure you want to discard all the messages?'} positiveActionText={'Clear conversation'}
    />}

    {/* [confirmation] Delete All */}
    {!!deleteConfirmationId && <ConfirmationModal
      open onClose={() => setDeleteConfirmationId(null)} onPositive={handleConfirmedDeleteConversation}
      confirmationText={deleteConfirmationId === SPECIAL_ID_ALL_CHATS
        ? 'Are you absolutely sure you want to delete ALL conversations? This action cannot be undone.'
        : 'Are you sure you want to delete this conversation?'}
      positiveActionText={deleteConfirmationId === SPECIAL_ID_ALL_CHATS
        ? 'Yes, delete all'
        : 'Delete conversation'}
    />}

  </>;
}
