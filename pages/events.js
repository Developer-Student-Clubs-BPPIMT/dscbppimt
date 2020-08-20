import React from 'react'
import styles from "../styles/eventStyles"
import events from "../components/helper/eventsHelper"
import { withStyles, Grid, Container, Typography } from '@material-ui/core'
import Searchbar from '../components/Searchbar'
import Layout from '../components/layout'
import { EventCard } from '../components/card'



function Events({classes}) {
    return (
        <Layout>
            <div className={classes.box}>
                <Container>
                    <Typography variant="h4">Our Events</Typography>
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
            </div>
        </Layout>
    )
}

export default withStyles(styles)(Events)