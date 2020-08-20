import React from 'react'
import styles from "../styles/eventStyles"
import EventCard from "../components/eventCard"
import events from "../components/helper/eventsHelper"
import { withStyles } from '@material-ui/core'
import Searchbar from '../components/Searchbar'
import Layout from '../components/layout'



function Events({classes}) {
    return (
        <Layout>
            <div className={classes.box}>
                <div className={classes.container}>
                    <h1 className={classes.heading}>Our Events</h1>
                    {events.map(event => (
                        <EventCard 
                        Image={event.image}
                        title={event.title} 
                        speaker={event.speaker} 
                        discription={event.discription} 
                        date={event.date}
                        />
                    ))}
                </div>
            </div>
            {/* <div className={classes.pastBox}>
                <div className={classes.container}>
                        <div className={classes.header}>
                            <h1>Past Events</h1>
                            <Searchbar />
                        </div>
                </div>
            </div> */}
        </Layout>
    )
}

export default withStyles(styles)(Events)