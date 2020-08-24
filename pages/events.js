import React from 'react'
import events from "../components/helper/eventsHelper"
import { withStyles, Grid, Container, Typography, Box, Card } from '@material-ui/core'
import Searchbar from '../components/Searchbar'
import Layout from '../components/layout'
import { EventCard } from '../components/card'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Skeleton } from '@material-ui/lab' 




function Events() {
    const [Events, setEvents] = useState([]);
    const [Render, setRender] = useState(false);
    const URL = "https://dscbppimt-cms.herokuapp.com/files/"
    useEffect(() => {
        const data = async() => {
            let dataArray = [];
            const res = await Axios.get("https://dscbppimt-cms.herokuapp.com/our-events");
            setEvents(res.data);
        }
        data();
    },[Render])
  
    return (
        <Layout>
            <Box>
                <Container>
                    <Typography variant="h4" style={{fontWeight : '500', margin : '1em 0px'}}>Our Events</Typography>
                    <Grid container spacing={2}>
                    {Events.length === 0 ? <Skeleton><Card ><EventCard /><EventCard /></Card></Skeleton> : Events.map(event => (
                        <Grid item xs={12} sm={6} md={12} key={event._id}>
                        <EventCard 

                        Image={URL+(event.Image[0].name)}
                        title={event.Title} 
                        speaker={event.Speaker} 
                        discription={event.Description} 
                        date={event.date}
                        />
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </Box>
            <Container style={{padding : '2em'}}>
                <Box style={{display : 'flex', justifyContent : 'space-between'}}>
                    <Typography variant="h6">Past Events</Typography>
                </Box>
            </Container>

        </Layout>
    )
}

export default Events
