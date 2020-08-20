import React from 'react'
import styles from "../styles/eventStyles"
import events from "../components/helper/eventsHelper"
import { withStyles, Grid, Container, Typography, Box } from '@material-ui/core'
import Searchbar from '../components/Searchbar'
import Layout from '../components/layout'
import { EventCard } from '../components/card'



function Events({classes}) {
    return (
        <Layout>
            <Box className={classes.box}>
                <Container>
                    <Typography variant="h4" style={{fontWeight : '500', margin : '1em 0px'}}>Our Events</Typography>
                    <Grid container spacing={2}>
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
            </Box>
            <Container style={{padding : '2em'}}>
                <Box style={{display : 'flex', justifyContent : 'space-between'}}>
                    <Typography variant="h6">Past Events</Typography>
                </Box>
            </Container>

        </Layout>
    )
}

export default withStyles(styles)(Events)