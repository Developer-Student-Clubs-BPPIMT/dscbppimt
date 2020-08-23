import Layout from '../components/layout'
import { MediaCard } from '../components/card'
import { Grid, Typography, Box, Container  } from '@material-ui/core'

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
          <MediaCard title={"Concept of DSC ?"} description={"The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard title={"Why DSC ?"} description={"The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."}/>
        </Grid>
        <Grid item xs={12} md={4}> 
          <MediaCard title={"Target Audiences"} description={"The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."}/>
        </Grid>
      </Grid>
    );
  };

  const SimpleContainer = () => {
    return (
        <Box style={{padding : '2em', background : '#E8EAE9',}}>
            <Box style={{maxWidth : '1100px', margin : '0 auto'}}>
                <Typography variant="h5" style={{padding : '1em 0px', fontWeight : '500'}}>Opportunities</Typography>
                <Grid container spacing={2} style={{margin: "0 auto"}}>
                    <Grid item xs={12} md={6}>◾  Grow their knowledge on developer technologies and more through peer to peer workshops and events.</Grid>
                    <Grid item xs={12} md={6}>◾  Grow their knowledge on developer technologies and more through peer to peer workshops and events.</Grid>
                    <Grid item xs={12} md={6}>◾  Grow their knowledge on developer technologies and more through peer to peer workshops and events.</Grid>
                    <Grid item xs={12} md={6}>◾  Grow their knowledge on developer technologies and more through peer to peer workshops and events.</Grid>
                </Grid>
            </Box>
        </Box>
      
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