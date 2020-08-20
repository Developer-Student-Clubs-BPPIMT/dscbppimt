import React from 'react'
import Navbar from '../components/navbar'
import EventCard from "../components/eventCard"
import events from "../components/helper/eventsHelper"
import { withStyles } from '@material-ui/core'
import Footer from '../components/footer'
import Searchbar from '../components/Searchbar'
import Layout from '../components/layout'


const styles = theme => ({
    box:{
        display: "flex",
        flexDirection : "column",
        alignItems:"center",
        fontFamily: "Roboto"
    },
    pastBox: {
        display: "flex",
        justifyContent: "center",
        height : "50vh",
        backgroundColor: "#dddddd",
    },
    header:{
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]:{
            marginTop: "0",
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
        },

    },
    container :{
        display : "flex",
        padding: "20px",
        flexDirection: "column",
        width: "80%",
        justfyContent: "flex-start",
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            alignItems: "center"
        },

    }
})

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
            <div className={classes.pastBox}>
                <div className={classes.container}>
                        <div className={classes.header}>
                            <h1>Past Events</h1>
                            <Searchbar />
                        </div>
                </div>
            </div>
    </Layout>
    )
}

export default withStyles(styles)(Events)