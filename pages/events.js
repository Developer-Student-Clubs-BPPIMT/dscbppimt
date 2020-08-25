import React from 'react'
import events from "../components/helper/eventsHelper"
import { withStyles, Grid, Container, Typography, Box } from '@material-ui/core'
import Searchbar from '../components/Searchbar'
import Layout from '../components/layout'
import { EventCard } from '../components/card'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import PreLoader from '../components/PreLoader'




function Events() {
    let [Events, setEvents] = useState([]);
    const [Render, setRender] = useState(false);
    let [Loading, setLoading] = useState(true);
    const URL = "https://dscbppimt-cms.herokuapp.com/files/"
    useEffect(() => {
        const data = async() => {
            console.log(Loading)
            const res = await Axios.get("https://dscbppimt-cms.herokuapp.com/our-events");
            setEvents(res.data);
            setLoading( false);
            console.log(Loading)
        }
        data();
    },[Render])
    return (
        <Layout>
            <Box>
                <Container>
                    <Typography variant="h4" style={{fontWeight : '500', margin : '1em 0px'}}>Our Events</Typography>
                    <Grid container spacing={2}>
                    {Events.map(event => (
                        <Grid item xs={12} sm={6} md={12}>
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
