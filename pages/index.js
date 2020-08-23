import Head from 'next/head'
import { Container, Grid, Typography, Box, Button } from '@material-ui/core';
import Layout from '../components/layout';
import Header from '../components/header';
import { AboutCardView, ContactCardView } from '../components/cardView';
import { EventCard } from '../components/card';
import styles from '../styles/Layout.module.css'
import events from "../components/helper/eventsHelper"


export default function Index() {
  return (
    <Layout>
      <Head>
        <title>DSC BPPIMT</title>
      </Head>
      <Header />
      <AboutCardView />
      <Container>
        <Box style={{padding : '2em 0px',display : 'flex', justifyContent : 'space-between'}} className={styles.eventsCard}>
          <Typography variant="h5" style={{fontWeight : '600', marginBottom : '.5em'}} className={styles.title}>Upcoming <span>Events</span> and <span>Meetups</span>.</Typography>
          <Button component="button">View All</Button>
        </Box>
        
        <Grid container spacing={2} style={{padding : '0 0 2em 0'}}>
        {events.map(event => (
                        <Grid item xs={12} sm={6} md={12}>
                        <EventCard 
                        Image={event.image}
                        title={event.title} 
                        speaker={event.speaker} 
                        discription={event.discription} 
                        date={event.date}
                        />
                        </Grid>
                    ))}
        </Grid>
      </Container>
      <ContactCardView />
    </Layout>
  );
}
