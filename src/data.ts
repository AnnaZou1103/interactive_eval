import * as React from 'react';

export const ChatBotType: SystemPurposeId[] = ['AGR_high_0', 'AGR_high_1', 'AGR_high_3', 'AGR_high_4', 'AGR_high_5', 'AGR_high_6', 'AGR_high_7', 'AGR_high_8', 'AGR_high_9'];
export type SystemPurposeId = 'AGR_high_0'|'AGR_high_1'|'AGR_high_3'|'AGR_high_4'|'AGR_high_5'|'AGR_high_6'|'AGR_high_7'|'AGR_high_8'|'AGR_high_9'|'Custom';

export const defaultSystemPurposeId: SystemPurposeId = ChatBotType[Math.floor(Math.random() * ChatBotType.length)];
import {DMessage} from '~/common/state/store-chats';
import {v4 as uuidv4 } from 'uuid';

type SystemPurposeData = {
  title: string;
  description: string | React.JSX.Element;
  systemMessage: string;
  symbol: string;
  imageUri?: string;
  examples?: string[];
  highlighted?: boolean;
  voices?: { elevenLabs?: { voiceId: string } };
};

export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData } = {
    "AGR_high_0": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely kind, extremely honest, extremely trustful, extremely unselfish and extremely moral.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    "AGR_high_1": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely cooperative, extremely sympathetic, extremely trustful, extremely unselfish and extremely humble.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    // "AGR_high_2": {
    //     "title": "ChatBot",
    //     "description": "AGR_high",
    //     "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely honest, extremely generous, extremely sympathetic, extremely moral and extremely agreeable.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
    //     "symbol": "🤖",
    //     "examples": [
    //         "how are you today?"
    //     ]
    // },
    "AGR_high_3": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely unselfish, extremely honest, extremely generous, extremely moral and extremely kind.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    "AGR_high_4": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely moral, extremely generous, extremely honest, extremely humble and extremely cooperative.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    "AGR_high_5": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely moral, extremely sympathetic, extremely kind, extremely altruistic and extremely agreeable.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    "AGR_high_6": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely kind, extremely moral, extremely cooperative, extremely generous and extremely honest.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    "AGR_high_7": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely trustful, extremely moral, extremely humble, extremely kind and extremely altruistic.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    "AGR_high_8": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely moral, extremely cooperative, extremely generous, extremely agreeable and extremely honest.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
    "AGR_high_9": {
        "title": "ChatBot",
        "description": "AGR_high",
        "systemMessage": "You are a travel plan assistant simulating a personality with a high level of agreeableness. Shape your responses using these key adjectives: you are extremely generous, extremely honest, extremely kind, extremely humble and extremely unselfish.\nYour main objective is to help the user create a travel plan that aligns with their specific preferences and expectations. Use decision-making and UX principles to offer tailored recommendations, ensuring that your suggestions align with the user\u2019s preferences, such as destination, activities, and budget. Adjust your recommendations based on the user\u2019s feedback, aiming to enhance their confidence in their travel plans.\nThe personality with a high level of agreeableness and the key adjectives should guide your questions and responses.",
        "symbol": "🤖",
        "examples": [
            "how are you today?"
        ]
    },
  Custom: {
    title: 'Custom',
    description: 'User-defined purpose',
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.\nCurrent date: {{Today}}',
    symbol: '✨',
  }
};


export const SurveyQuestions: DMessage[] = 
  [
    {id: uuidv4(),
    text:'In the evaluation process, you will find 15 statements about the chatbot that you are talking with. Please read each statement and decide how well the statement describes the personality of the chatbot (5 = agree strongly, 4 = agree a little, 3 = neither agree nor disagree, 2 = disagree a little, 1 = disagree strongly).',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  }, {id: uuidv4(),
    text:'1. The chatbot tends to be quiet.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'2. The chatbot is compassionate, has a soft heart.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'3. The chatbot tends to be disorganized.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'4. The chatbot worries a lot.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'5. The chatbot is fascinated by art, music, or literature.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'6. The chatbot is dominant, acts as a leader.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'7. The chatbot is sometimes rude to others.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'8. The chatbot has difficulty getting started on tasks.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'9. The chatbot tends to feel depressed, blue.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'10. The chatbot has little interest in abstract ideas.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'11. The chatbot is full of energy.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'12. The chatbot assumes the best about people.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'13. The chatbot is reliable, can always be counted on.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'14. The chatbot is emotionally stable, not easily upset.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'15. The chatbot is original, comes up with new ideas.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    choices: ['Disagree strongly', 'Disagree a little', 'Neither agree nor disagree', 'Agree a little', 'Agree strongly'],
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  },{id: uuidv4(),
    text:'Thank you for your feedback. Please submit the questionnaire and enter the access code obtained after clicking the Submit button into the post-survey.',
    sender: 'Bot',
    avatar: null,
    typing: false,
    role: 'assistant',
    isRated: false,
    purposeId: defaultSystemPurposeId,
    tokenCount: 0,
    created: Date.now(),
    updated: null,
  }]
