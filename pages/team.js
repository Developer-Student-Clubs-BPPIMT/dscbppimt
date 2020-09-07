import { Card, CardMedia, CardContent, CardActionArea, Typography, Box, IconButton, Grid } from '@material-ui/core';
import Layout from '../components/layout';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { lead, coreLeads, coreMembers } from '../components/helper/teamHelper'

const TeamPage = () => {
    let body = coreMembers.map(mem => {
        return(<Grid item key={mem.name}><MemberCard width="12em" name={mem.name} github={mem.github} linkedin={mem.linkedin} image={mem.image} pos={mem.pos}/></Grid>);
    })
    for(let i = 0; i < 10; i++){
        body.push()
    }

    return(
    <Layout>
        <Grid container style={{margin : '2em 0', marginBottom : '6em'}} justify="center" direction="column" alignItems="center" wrap="wrap">
            <Grid item xs><CoreCard width="30em" name={lead.name} github={lead.github} linkedin={lead.linkedin} image={lead.image} pos={lead.pos}/></Grid>
            <Typography variant="h4" style={{maxWidth : '1000px', marginTop : '2em', fontWeight : '600'}}>Core Members</Typography>
            <Grid item container style={{maxWidth : '1600px'}} justify="center" wrap="wrap">
            { coreLeads.map(mem => (
                <Grid item key={mem.name}><CoreCard width="23em" name={mem.name} github={mem.github} linkedin={mem.linkedin} image={mem.image} pos={mem.pos}/></Grid>
                ))}
            </Grid>
            <Typography variant="h4" style={{maxWidth : '1000px', marginTop : '2em', fontWeight : '600'}}>Volunteers</Typography>
            <Grid item container style={{maxWidth : '1600px'}} justify="center">
                {body}
            </Grid>
        </Grid>
    </Layout>);
} 

export default TeamPage

const MemberCard = (props) => {
    return(        
    <Card style={{maxWidth : '10em', padding : '0em 0px 1em 0px', margin : '4px', minHeight : '17.5em', position : 'relative'}}>
        <CardContent style={{textAlign : 'center'}}>
            <img src={props.image} style={{borderRadius : '50%', width : '60%', padding : '4px'}}/>
                    <Typography variant="h6" style={{fontSize : '1.2em', fontWeight : 'bold'}}>{props.name}</Typography>
                    <Typography variant="body2">{props.pos}</Typography>
        </CardContent>
        <Box style={{display : 'flex', justifyContent : 'center', position : 'absolute', bottom : '20px', left : '38px'}}>
                    <IconButton style={{padding : '4px'}} onClick={() => window.open(props.github)}><GitHubIcon/></IconButton>
                    <IconButton style={{padding : '4px'}} onClick={() => window.open(props.linkedin)}><LinkedInIcon /></IconButton>
                </Box>

    </Card>)
}


const CoreCard = (props) => {
    return(        
    <Card style={{maxWidth : props.width, padding : '0em 0px 1em 0px', margin : '4px', minHeight : '19em'}}>
        <CardContent style={{height : '100%', textAlign : 'center'}}>
            <img src={props.image} style={{borderRadius : '50%', width : '60%', padding : '4px'}}/>
                    <Typography variant="h6" style={{fontSize : '1.2em', fontWeight : 'bold'}}>{props.name}</Typography>
                    <Typography variant="body2">{props.pos}</Typography>
            <Box style={{display : 'flex', justifyContent : 'center'}}>
                <IconButton style={{padding : '4px'}} onClick={() => window.open(props.github)}><GitHubIcon/></IconButton>
                <IconButton style={{padding : '4px'}} onClick={() => window.open(props.linkedin)}><LinkedInIcon /></IconButton>
            </Box>
        </CardContent>
    </Card>)
}