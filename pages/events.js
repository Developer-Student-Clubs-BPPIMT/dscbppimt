import React from 'react'
import Navbar from '../components/navbar'
import EventCard from "../components/eventCard"
import events from "../components/helper/eventsHelper"
import { withStyles } from '@material-ui/core'


const styles = theme => ({
    box:{
        display: "flex",
        flexDirection : "column",
        alignItems:"center",
        fontFamily: "Roboto"
    },
    container :{
        display : "flex",
        padding: "20px",
        flexDirection: "column",
        width: "80%",
        justfyContent: "flex-start",
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        },

    }
})

function Events({classes}) {
    return (
        <div>
            <Navbar />
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
        </div>
    )
}

export default withStyles(styles)(Events)