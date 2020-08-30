import Layout from '../components/layout'
import { MediaCard } from '../components/card'
import { Grid, Typography, Box, Container, Paper  } from '@material-ui/core'

import Rocket from '../public/svgs/rocket.svg';
import Blub from '../public/svgs/blub.svg'
import Audience from '../public/svgs/audience.svg'

const About = () => {
    return (
    <Layout>
        <Content/>
        <SimpleContainer/>
        <FixedContainer/>
    </Layout>)
}

export default About;



const Content = () => {
    return (
      <Grid container wrap="wrap" style={{maxWidth : '1200px', margin : '2em auto'}} justify="center">
        <Grid item xs={12} md={4}>
          <MediaCard title={"Concept of DSC ?"} image={<Rocket style={{maxWidth : '64px', maxHeight : '64px'}}/>} description={"The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard title={"Why DSC ?"} image={<Blub style={{maxWidth : '64px', maxHeight : '64px'}}/>} description={"The DSC program is focused with a vision to inculcate individual’s with skills and  knowledge, who are intrigued about the possibilities that developer technologies can bring changes to this world."}/>
        </Grid>
        <Grid item xs={12} md={4}> 
          <MediaCard title={"Target Audiences"} image={<Audience style={{maxWidth : '64px', maxHeight : '64px'}}/>}  description={"Anyone who wants to build products,students from all undergraduate or graduate programs inquisitive about developer technologies."}/>
        </Grid>
      </Grid>
    );
  };

  const SimpleContainer = () => {
    return (
        <Paper style={{padding : '2em'}}>
            <Box style={{maxWidth : '1200px', margin : '0 auto'}}>
                <Typography variant="h5" style={{textAlign:'center', fontWeight : '600'}}>Opportunities</Typography>
                <Grid container style={{margin: "0 auto"}}>
                    <Grid item xs={12} md={6} style={{margin : '1em 0px'}}><Typography variant="body1">- Develop your skills and knowledge with the guidance of  community members.</Typography></Grid>
                    <Grid item xs={12} md={6} style={{margin : '1em 0px'}}><Typography variant="body1">- Get a chance to attend our workshops and webinar with hands on experience.</Typography></Grid>
                    <Grid item xs={12} md={6} style={{margin : '1em 0px'}}><Typography variant="body1">- Showcase your technical skills.</Typography></Grid>
                    <Grid item xs={12} md={6} style={{margin : '1em 0px'}}><Typography variant="body1">- Apply your skills to develop solutions for local organizations.</Typography></Grid>
                </Grid>
            </Box>
        </Paper>
      
    );
  }
  

  const FixedContainer = () => {
    return (
        <Container style={{paddingBottom : '4em'}}>
          <Typography component="div">
          <h1>Code of Conduct</h1>
          <ul>
            <li>
              <h3><b>Be Nice</b></h3>
              We're all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around.
            </li>
            <li>
            <h3><b>Be respectful and constructive</b></h3>
            Remember to be respectful and constructive with your communication to fellow members. Don't get into flamewars, make personal attacks, vent, or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a negative thread as early as possible.
            </li>
            <li>
            <h3><b>Be collaborative</b></h3>
            Work together! We can learn a lot from each other. Share knowledge, and help each other out.
            </li>
            <li>
            <h3><b>Participate</b></h3>
            Join in on discussions, show up for in-person meetings regularly, offer feedback, and help implement that feedback.
            </li>
            <li>
            <h3><b>Step down considerately</b></h3>
            If you have some form of responsibility in your community, be aware of your own constraints. If you know that a new job or personal situation will limit your time, find someone who can take over for you and transfer the relevant information (contacts, passwords, etc.) for a smooth transition.
            </li>
            <li>
            <h3><b>Basic etiquette for online discussions</b></h3>
            Don’t send messages to a big list that only need to go to one person. Keep off topic conversations to a minimum. Don’t be spammy by advertising or promoting personal projects which are off topic.
            </li>
            <br/>
          </ul>
          </Typography>
        </Container>
    );
  }