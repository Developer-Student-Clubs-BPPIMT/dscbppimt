import { Grid, Paper, Card, Container, Typography, Box, Button } from '@material-ui/core'
import { AboutCard, ContactCard } from './card'
import styles from '../styles/Layout.module.css'

import CodeIcon from '@material-ui/icons/Code';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import BubbleChartSharpIcon from '@material-ui/icons/BubbleChartSharp';

import Collab from '../public/svgs/collab.svg'
import Speaker from '../public/svgs/speaker.svg'
import Event from '../public/svgs/event.svg'



export const AboutCardView = () => {
    return(
    <Paper style={{background : '#E8EAE9', display : 'flex', flexDirection : 'column', alignItems : 'center', padding : '2em 1em'}} elevation={0} square>
        <Box style={{textAlign : 'center', display : 'flex', flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>
            <Typography variant="h5" component='h5' style={{fontWeight : '600'}}>What is our <span style={{color : '#1FA9E5'}}>Purpose</span>?</Typography>
            <Typography variant="body2" style={{marginBottom : '1em'}}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
        </Box>
        <Grid container justify="center" style={{maxWidth : '1300px'}} className={styles.AboutCardView}>
            <Grid item xs={6} md><AboutCard image={<ChatBubbleIcon style={{color : 'blue'}}/>} title="Talks" body="Get in touch with the latest technology and news." hashtag="#techtalks"/></Grid>
            <Grid item xs={6} md><AboutCard image={<CodeIcon style={{color : 'orange'}}/>} title="CodeLabs" body="Get concrete-practical experience under the mentorship of the community members." hashtag="#practicalexperience"/></Grid>
            <Grid item xs={6} md><AboutCard image={<LiveTvIcon style={{color : 'red'}} />} title="Live Events" body="Catch us live with all our online events." hashtag="#liveevents"/></Grid>
            <Grid item xs={6} md><AboutCard image={<BubbleChartSharpIcon style={{color : 'green'}}/>} title="RoadShows" body="Share your knowledge and make an impact in different Companies and Colleges." hashtag="#makeadifference"/></Grid>
        </Grid>
    </Paper>)
}

export const ContactCardView = () => {
    return(
    <Box style={{background : '#E8EAE9', padding : '4em 0em', display : 'flex', justifyContent : 'center'}}>
        <Grid container style={{maxWidth : '1200px'}} justify="center">
            <Grid item sm={6} md={4}><ContactCard title="Speakers" description="The DSC program is focused with a vision to inculcate individuals with skills and  knowledge, who are intrigued about the possibilities that developer technologies can bring changes to this world." hashtag="#technologyisawesome" action="Send Proposal" actionLink="#" image={<Event style={{height : '100%', width : '100%', paddingTop : '1em'}} />}/></Grid>
            <Grid item sm={6} md={4}><ContactCard title="Events" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab i" body="Anyone who wants to build products,students from all undergraduate or graduate programs inquisitive about developer technologies." hashtag="#togetherwegrow" action="Learn More" actionLink="#" image={<Speaker style={{height : '100%', width : '100%', paddingTop : '1em'}} />}/></Grid>
            <Grid item sm={6} md={4}><ContactCard title="Sponsorships" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab i" hashtag="" action="Send Proposal" actionLink="#" image={<Collab style={{height : '100%', width : '100%', paddingTop : '1em'}} />}/></Grid>
        </Grid>
    </Box>);
}