import { Card, CardMedia, CardContent, CardActionArea, Typography, Box, IconButton, Grid } from '@material-ui/core';
import Layout from '../components/layout';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import placeholder from '../public/images/placeholder.jpg'
import { lead, coreLeads, coreMembers } from '../components/helper/teamHelper'

const TeamPage = () => {
    console.log(lead)
    let body = coreMembers.map(mem => {
        return(<Grid item xs={6} sm={3} md={2}><MemberCard width="20em" name={mem.name} github={mem.github} linkedin={mem.linkedin} image={mem.image} pos={mem.pos}/></Grid>);
    })
    for(let i = 0; i < 10; i++){
        body.push()
    }

    return(
    <Layout>
        <Grid container style={{margin : '2em 0'}} justify="center" direction="column" alignItems="center">
            <Grid item xs><MemberCard width="25em" name={lead.name} github={lead.github} linkedin={lead.linkedin} image={lead.image} pos={lead.pos}/></Grid>
            <Typography variant="h4" style={{maxWidth : '1000px', marginTop : '2em'}}>Team Leads</Typography>

            <Grid item container style={{maxWidth : '1200px'}} justify="center" wrap="wrap">
            { coreLeads.map(mem => (
                <Grid item xs={6} md={3} style={{maxWidth : '18em'}}><MemberCard name={mem.name} github={mem.github} linkedin={mem.linkedin} image={mem.image} pos={mem.pos}/></Grid>
                ))}
            </Grid>
            <Typography variant="h4" style={{maxWidth : '1000px', marginTop : '2em'}}>Core Members</Typography>
            <Grid item container xs style={{maxWidth : '1600px'}} justify="center">
                {body}
            </Grid>
        </Grid>
    </Layout>);
} 

export default TeamPage

const MemberCard = (props) => {
    return(        
    <Card style={{maxWidth : props.width, padding : '0em 0px 2em 0px', margin : '4px', minHeight : '24em'}}>
        <CardContent style={{textAlign : 'center'}}>
            <img src={props.image} style={{borderRadius : '50%', width : '75%', padding : '4px'}}/>
            <Typography variant="h6">{props.name}</Typography>
            <Typography variant="body1">{props.pos}</Typography>
        </CardContent>
        <Box style={{display : 'flex', justifyContent : 'center'}}>
                <IconButton style={{padding : '4px'}} onClick={() => window.open(props.github)}><GitHubIcon/></IconButton>
                <IconButton style={{padding : '4px'}} onClick={() => window.open(props.linkedin)}><LinkedInIcon /></IconButton>
        </Box>
    </Card>)
}

