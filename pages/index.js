import Head from 'next/head'
import Link from 'next/link'
import { Container, Grid, Typography, Box, Button, Paper } from '@material-ui/core';
import Layout from '../components/layout';
import Header from '../components/header';
import { AboutCardView, ContactCardView } from '../components/cardView';
import { EventCard } from '../components/card';
import styles from '../styles/Layout.module.css'
import Axios from 'axios';
import { Skeleton } from '@material-ui/lab'
import { useState, useEffect } from 'react'
import { Description } from '@material-ui/icons';


export default function Index() {
  const [Events, setEvents] = useState([]);
  const [ isLoading, setLoading ] = useState(false)
  const URL = "https://dscbppimt-cms.herokuapp.com"
  useEffect(() => {
    const data = async() => {
        let dataArray = [];
        const today = new Date()
        const todayDate = today.toISOString()
        console.log(todayDate)
        // 2020-10-11T09:10:30.698Z
        Axios.get(`https://dscbppimt-cms.herokuapp.com/our-events?Date_gte=${todayDate}&_sort=Date:desc&_limit=2`).then(res => {
          dataArray = dataArray.concat(res.data)
          console.log(dataArray);
          setEvents(dataArray);
        });
    }
    data();
},[])
  return (
    <Layout>
      <Head>
        <title>DSC BPPIMT</title>
      </Head>
      <Header />
      <AboutCardView />
      <Container>
        <Box style={{padding : '2em 0px',display : 'flex', justifyContent : 'space-between'}} className={styles.eventsCard}>
          <Typography variant="h5" style={{fontWeight : '600', marginBottom : '.5em'}} className={styles.title}>Upcoming <Box color="primary.main" style={{display : 'inline'}}>Events</Box> and <Box color="primary.main" style={{display : 'inline'}}>Meetups</Box>.</Typography>
          <Link href="/events"><Button component="button">View All</Button></Link>
        </Box>
        
        <Grid container spacing={2} style={{padding : '0 0 2em 0'}}>
        {isLoading ? <Skeleton variant="rect" width="100%" height="150px"/>  : Events.length !== 0 ? Events.map(event => (
                        <Grid item xs={12} sm={6} md={12} key={event._id}>
                        <EventCard 
                        Image={event.Image ? URL+(event.Image.url) : ''}
                        title={event.Title} 
                        speaker={event.Speaker === 'None' ? null : event.Speaker } 
                        description={event.Description} 
                        date={event.Date}
                        register={event.Register}
                        learn={event.Learn}
                        />
                        </Grid>
                    )) : <Container style={{width: '100%', textAlign: 'center', margin: '5em 0'}}><Typography align="center" >No Upcoming Events</Typography></Container>}
        </Grid>
      </Container>
      <ContactCardView />
    </Layout>
  );
}
