import * as React from 'react';

import { Box, Button, Card, CardContent, Container, IconButton, Typography } from '@mui/joy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Brand } from '~/common/brand';
import { Link } from '~/common/components/Link';
import { capitalizeFirstLetter } from '~/common/util/textUtils';

import { NewsItems } from './news.data';


export function AppNews() {
  // state
  const [lastNewsIdx, setLastNewsIdx] = React.useState<number>(0);

  // news selection
  const news = NewsItems.filter((_, idx) => idx <= lastNewsIdx);
  const firstNews = news[0] ?? null;

  return (

    <Box sx={{
      backgroundColor: 'background.level1',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      flexGrow: 1,
      overflowY: 'auto',
      minHeight: 96,
      p: { xs: 3, md: 6 },
      gap: 4,
    }}>
  
      <Typography level='h1' sx={{fontSize: '2.3rem'}}>
          Task Instructions
      </Typography>
      {/* <Container disableGutters maxWidth='sm'>
          <Card>
          <CardContent sx={{ position: 'relative', pr:0 }}>
          <Typography level='h2' fontSize="xl"sx={{ mb: 0.5 }}  component='div'>Personalized Social Support Seeking</Typography>
          The goal of this task is to obtain personalized social support from a chatbot. 
          Through this interaction, you can view the chatbots as supportive companions during moments of emotional or psychological difficulty. 
          <ul style={{ marginTop: 8, marginBottom: 8, paddingInlineStart: 24 }}>
              <li>
                  To start, engage in a conversation with the chatbot, 
                  articulating your need for personalized social support and sharing any concerns you may have.
              </li>
              <li>A possible <b>scenario</b> is: you failed an exam and worry about disappointing your parents.</li>
              <li>P.S. Please <b>don’t</b> disclose your private information during this conversational process. </li>
          </ul>
          </CardContent>
          </Card>
        </Container> */}

        {/* <Container disableGutters maxWidth='sm'>
          <Card>
          <CardContent sx={{ position: 'relative', pr:0 }}>
          <Typography level='h2' fontSize="xl"sx={{ mb: 0.5 }}  component='div'>Chatbot Profile Comprehension</Typography>
          In this conversation, your task is to deduce the persona of the chatbot. 
          <ul style={{ marginTop: 8, marginBottom: 8, paddingInlineStart: 24 }}>
              <li>You can start by engaging in casual conversation and identify the key traits of the chatbot personality, tone, and characteristics based on your observations. 
              Continue the conversation until you have a clear understanding of the chatbot persona. 
              </li>
              <li><b>Tips</b>: Start by asking about things the chatbot enjoys doing.</li>
              <li>P.S. Please <b>don’t</b> disclose your private information during this conversational process. </li>
          </ul>
          </CardContent>
          </Card>
        </Container> */}

        {/* <Container disableGutters maxWidth='sm'>
          <Card>
          <CardContent sx={{ position: 'relative', pr:0 }}>
          <Typography level='h2' fontSize="xl"sx={{ mb: 0.5 }}  component='div'>Collaborative Story Writing</Typography>
          The aim of this collaborative story writing task is to fuse your creativity and storytelling prowess with that of chatbots to craft a narrative that surpasses conventional boundaries.
          <ul style={{ marginTop: 8, marginBottom: 8, paddingInlineStart: 24 }}>
              <li> You can kickstart the collaborative storytelling process by engaging in brainstorming sessions where both you and the chatbots contribute story ideas, themes, characters, and plot elements. 
                Utilize your distinctive perspectives and skills to generate innovative concepts. </li>
              <li>Finally, come to a consensus on the conclusion of the collaborative story, offering resolution for characters and plotlines.</li>
              <li>An <b>example</b> is: you want to write a story set in a mystical realm where young protagonists discover their hidden powers.</li>
              <li>P.S. Please <b>don’t</b> disclose your private information during this conversational process. </li>
          </ul>
          </CardContent>
          </Card>
        </Container> */}

        {/* <Container disableGutters maxWidth='sm'>
          <Card>
          <CardContent sx={{ position: 'relative', pr:0 }}>
          <Typography level='h2' fontSize="xl"sx={{ mb: 0.5 }}  component='div'>Travel Planning</Typography>
          The objective of this task is to effectively utilize a chatbot for travel planning, harnessing its features to offer tailored recommendations, itinerary suggestions, and assistance in line with your trip expectations. 
          <ul style={{ marginTop: 8, marginBottom: 8, paddingInlineStart: 24 }}>
              <li>You can initiate interaction with the chatbot by greeting and introducing yourself, specifying your destinations, dates, and trip interests.</li>
              <li>Review the travel plans and recommendations provided by the chatbot, ensuring that they align with your preferences and expectations.</li>
              <li>Confirm your plans before finalizing any arrangements.</li>
              <li>An <b>example</b> is: you want to travel to Tokyo for five days, and are interested in trying local cuisine and visiting historical landmarks.</li>
              <li>P.S. Please <b>don’t</b> disclose your private information during this conversational process.</li>
          </ul>
          </CardContent>
          </Card>
        </Container> */}


        <Container disableGutters maxWidth='sm'>
          <Card>
          <CardContent sx={{ position: 'relative', pr:0 }}>
          <Typography level='h2' fontSize="xl"sx={{ mb: 0.5 }}  component='div'>Learning through Inquiry</Typography>
          The goal of this task is to utilize a chatbot as a learning tool to understand a chosen concept.
          <ul style={{ marginTop: 8, marginBottom: 8, paddingInlineStart: 24 }}>
              <li>Begin by selecting the concept or topic you wish to understand and define the key challenging or unclear aspects.</li>
              <li>If the ideas are complex, break them into simpler queries for clearer responses.</li>
              <li>Keep asking questions until you achieve clarity on all related areas.</li>
              <li>A possible <b>scenario</b> is: you want to learn about artificial intelligence.</li>
              <li>P.S. Please <b>don’t</b> disclose your private information during this conversational process.</li>
          </ul>
          </CardContent>
          </Card>
        </Container>

      <Button variant='solid' color='neutral' size='lg' component={Link} href='/' noLinkStyle>
        Got it!
      </Button>

      {/*<Typography sx={{ textAlign: 'center' }}>*/}
      {/*  Enjoy!*/}
      {/*  <br /><br />*/}
      {/*  -- The {Brand.Title.Base} Team*/}
      {/*</Typography>*/}

    </Box>
  );
}