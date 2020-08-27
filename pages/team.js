import { Card, CardMedia, CardContent, CardActionArea, Typography, Box, IconButton, Grid } from '@material-ui/core';
import Layout from '../components/layout';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { lead, coreLeads, coreMembers } from '../components/helper/teamHelper'

const TeamPage = () => {
    let body = coreMembers.map(mem => {
        return(<Grid item key={mem.name}><MemberCard width="16em" name={mem.name} github={mem.github} linkedin={mem.linkedin} image={mem.image} pos={mem.pos}/></Grid>);
    })
    for(let i = 0; i < 10; i++){
        body.push()
    }

    return(
    <Layout>
        <Grid container style={{margin : '2em 0'}} justify="center" direction="column" alignItems="center" wrap="wrap">
            <Grid item xs><MemberCard width="25em" name={lead.name} github={lead.github} linkedin={lead.linkedin} image={lead.image} pos={lead.pos}/></Grid>
            <Typography variant="h4" style={{maxWidth : '1000px', marginTop : '2em', fontWeight : '600'}}>Team Leads</Typography>
            <Grid item container style={{maxWidth : '1200px'}} justify="center" wrap="wrap">
            { coreLeads.map(mem => (
                <Grid item key={mem.name}><MemberCard name={mem.name} github={mem.github} linkedin={mem.linkedin} image={mem.image} pos={mem.pos}/></Grid>
                ))}
            </Grid>
            <Typography variant="h4" style={{maxWidth : '1000px', marginTop : '2em', fontWeight : '600'}}>Core Members</Typography>
            <Grid item container xs style={{maxWidth : '1600px'}} justify="center">
                {body}
            </Grid>
        </Grid>
    </Layout>);
} 

export default TeamPage

const MemberCard = (props) => {
    return(        
    <Card style={{maxWidth : '22em', padding : '0em 0px 2em 0px', margin : '4px', minHeight : '20em'}}>
        <CardContent style={{textAlign : 'center'}} wrap="wrap">
            <img src={props.image} style={{borderRadius : '50%', width : '75%', padding : '4px'}}/>
                    <Typography variant="h6" style={{fontSize : '1.2em', fontWeight : 'bold'}}>{props.name}</Typography>
                    <Typography variant="body2">{props.pos}</Typography>
                <Box style={{display : 'flex', justifyContent : 'center', marginTop : '2em'}}>
                    <IconButton style={{padding : '4px'}} onClick={() => window.open(props.github)}><GitHubIcon/></IconButton>
                    <IconButton style={{padding : '4px'}} onClick={() => window.open(props.linkedin)}><LinkedInIcon /></IconButton>
                </Box>
        </CardContent>

    </Card>)
}

