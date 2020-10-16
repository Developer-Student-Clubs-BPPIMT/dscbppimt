import { makeStyles, Grid, Paper, Card, Container, Typography, Box, Button } from '@material-ui/core'
import { AboutCard, ContactCard } from './card'
import styles from '../styles/Layout.module.css'

import CodeIcon from '@material-ui/icons/Code';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import BubbleChartSharpIcon from '@material-ui/icons/BubbleChartSharp';

import Collab from '../public/svgs/collab.svg'
import Speaker from '../public/svgs/speaker.svg'
import Event from '../public/svgs/events.svg'


const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    cardContentView: {
        padding : '4em 0em',
        display : 'flex',
        justifyContent : 'center'
    },
    aboutContentView: {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        padding : '2em 1em'
    }
  });

export const AboutCardView = () => {
    const classes = useStyles()
    return(
    <Paper className={classes.aboutContentView} elevation={0} square>
        <Box style={{textAlign : 'center', display : 'flex', flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>
            <Typography variant="h5" component='h5' style={{fontWeight : '600'}}>What is our <Box style={{display : 'inline'}} color="primary.main">Purpose</Box>?</Typography>
            <Typography variant="body2" style={{marginBottom : '1em'}}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
        </Box>
        <Grid container justify="center" style={{maxWidth : '1300px'}} className={styles.AboutCardView}>
            <Grid item xs={6} md><AboutCard image={<ChatBubbleIcon style={{color : '#1FA9E5', height : '64px', width : '64px'}}/>} title="Talks" body="Get in touch with the latest technology and news." hashtag="#techtalks"/></Grid>
            <Grid item xs={6} md><AboutCard image={<CodeIcon style={{color : 'orange', height : '64px', width : '64px'}}/>} title="CodeLabs" body="Get practical experience under the mentorship of the community members." hashtag="#practicalexperience"/></Grid>
            <Grid item xs={6} md><AboutCard image={<LiveTvIcon style={{color : 'red', height : '64px', width : '64px'}} />} title="Live Events" body="Catch us live with all our online events." hashtag="#liveevents"/></Grid>
            <Grid item xs={6} md><AboutCard image={<BubbleChartSharpIcon style={{color : 'green', height : '64px', width : '64px'}}/>} title="RoadShows" body="Share your knowledge and make an Impact." hashtag="#makeadifference"/></Grid>
        </Grid>
    </Paper>)
}

export const ContactCardView = () => {
    const classes = useStyles()
    return(
    <Paper className={classes.cardContentView}>
        <Grid container style={{maxWidth : '1200px'}} justify="center">
            <Grid item sm={6} md={4}><ContactCard subject="Approval for Speaker" title="Speakers" description="Want to be a speaker at any one of our events? Feel free to send us your proposal." action="Send Proposal" actionLink="#" image={<Speaker style={{height : '100%', width : '100%', paddingTop : '1em'}} />}/></Grid>
            <Grid item sm={6} md={4}><ContactCard subject="Approval for Event" title="Events" description="Attend Webinar/Workshops/Study Jams/Hackathons and enrich your knowledge about the developer technologies" action="Learn More" image={<Event style={{height : '100%', width : '100%', paddingTop : '1em'}} />}/></Grid>
            <Grid item sm={6} md={4}><ContactCard subject="Approval for SponsorShip" title="Sponsorships" description="Get brand exposure and expand your business identity within the community. Collaborate with us to show your support and be our brand partner." action="Send Proposal" actionLink="#" image={<Collab style={{height : '100%', width : '100%', paddingTop : '1em'}} />}/></Grid>
        </Grid>
    </Paper>);
}