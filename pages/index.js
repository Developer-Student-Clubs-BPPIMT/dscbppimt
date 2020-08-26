import Head from 'next/head'
import Link from 'next/link'
import { Container, Grid, Typography, Box, Button } from '@material-ui/core';
import Layout from '../components/layout';
import Header from '../components/header';
import { AboutCardView, ContactCardView } from '../components/cardView';
import { EventCard } from '../components/card';
import styles from '../styles/Layout.module.css'
import Axios from 'axios';
import { Skeleton } from '@material-ui/lab'
import { useState, useEffect } from 'react'


export default function Index() {
  const [Events, setEvents] = useState([]);
  const [Render, setRender] = useState(false);
  const URL = "https://dscbppimt-cms.herokuapp.com"
  useEffect(() => {
    const data = async() => {
        let dataArray = [];

        const res = await Axios.get("https://dscbppimt-cms.herokuapp.com/our-events?_sort=Date:desc&_limit=2");
        if(res.data.length <= 2){
          dataArray = res.data;
        }else{
            dataArray=res.data.slice(0,2);
        }
        setEvents(dataArray);
    }
    data();
},[Render])
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
          <Link href="/events"><Button component="button">View All</Button></Link>
        </Box>
        
        <Grid container spacing={2} style={{padding : '0 0 2em 0'}}>
        {Events.length === 0 ? <Skeleton variant="rect" width="100%" height="150px"/>  : Events.map(event => (
                        <Grid item xs={12} sm={6} md={12} key={event._id}>
                        <EventCard 
                        Image={URL+(event.Image.formats.thumbnail.url)}
                        title={event.Title} 
                        speaker={event.Speaker} 
                        description={event.Description} 
                        date={event.Date}
                        />
                        </Grid>
                    ))}
        </Grid>
      </Container>
      <ContactCardView />
    </Layout>
  );
}
