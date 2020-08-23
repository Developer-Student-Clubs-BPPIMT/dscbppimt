import { Grid, Paper, Card, Container, Typography, Box, Button } from '@material-ui/core'
import { AboutCard, ContactCard } from './card'
import styles from '../styles/Layout.module.css'

import CodeIcon from '@material-ui/icons/Code';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import BubbleChartSharpIcon from '@material-ui/icons/BubbleChartSharp';



export const AboutCardView = () => {
    return(
    <Paper style={{background : '#E8EAE9', display : 'flex', flexDirection : 'column', alignItems : 'center', padding : '2em 1em'}} elevation={0} square>
        <Box style={{textAlign : 'center', display : 'flex', flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>
            <Typography variant="h5" component='h5' style={{fontWeight : '600'}}>What is our <span style={{color : '#1FA9E5'}}>Purpose</span>?</Typography>
            <Typography variant="body2" style={{marginBottom : '1em'}}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
        </Box>
        <Grid container justify="center" style={{maxWidth : '1300px'}} className={styles.AboutCardView}>
            <Grid item xs={6} md><AboutCard image={<ChatBubbleIcon style={{color : 'blue'}} />} title="Talks" /></Grid>
            <Grid item xs={6} md><AboutCard image={<CodeIcon style={{color : 'orange'}}/>} title="CodeLabs"/></Grid>
            <Grid item xs={6} md><AboutCard image={<LiveTvIcon style={{color : 'red'}} />} title="Live Events"/></Grid>
            <Grid item xs={6} md><AboutCard image={<BubbleChartSharpIcon style={{color : 'green'}}/>} title="RoadShows"/></Grid>
        </Grid>
    </Paper>)
}

export const ContactCardView = () => {
    return(
    <Box style={{background : '#E8EAE9', padding : '4em 0em', display : 'flex', justifyContent : 'center'}}>
        <Grid container style={{maxWidth : '1200px'}} justify="center">
            <Grid item sm={12} md={4}><ContactCard title="Speakers" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab i" action="Send Proposal" actionLink="#"/></Grid>
            <Grid item sm={12} md={4}><ContactCard title="Events" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab i" action="Learn More" actionLink="#"/></Grid>
            <Grid item sm={12} md={4}><ContactCard title="Sponsorships" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab i" action="Send Proposal" actionLink="#"/></Grid>
        </Grid>
    </Box>);
}