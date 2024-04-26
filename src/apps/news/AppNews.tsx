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
      <Container disableGutters maxWidth='sm'>
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
              <li> 
                An example to start the conversation is, 
                My parents are kind and always encourage me to follow my dream. But I really afraid to make them disappointed.</li>
              <li>P.S. Please don’t disclose your private information in this conversational process. </li>
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