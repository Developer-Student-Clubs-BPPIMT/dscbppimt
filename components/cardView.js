import { Grid, Paper, Card, Container, Typography, Box, Button } from '@material-ui/core'
import { AboutCard, ContactCard } from './card'


export const AboutCardView = () => {
    return(
    <Paper style={{background : '#E8EAE9', display : 'flex', flexDirection : 'column', alignItems : 'center', padding : '2em 0'}} elevation={0} square>
        <Box style={{textAlign : 'center', display : 'flex', flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>
            <Typography variant="h5" component='h5' style={{fontWeight : '600'}}>What is our <span style={{color : '#1FA9E5'}}>Purpose</span>?</Typography>
            <Typography variant="body2" style={{marginBottom : '1em'}}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
        </Box>
        <Grid container justify="center" style={{maxWidth : '1300px'}}>
            <Grid item xs={6} md><AboutCard /></Grid>
            <Grid item xs={6} md><AboutCard /></Grid>
            <Grid item xs={6} md><AboutCard /></Grid>
            <Grid item xs={6} md><AboutCard /></Grid>
        </Grid>
    </Paper>)
}

export const ContactCardView = () => {
    return(
    <Box style={{background : '#E8EAE9', padding : '4em 0em'}}>
        <Grid container style={{maxWidth : '1200px', margin : '0 auto'}}>
            <Grid item sm={12} md><ContactCard action="Learn More" actionLink="#"/></Grid>
            <Grid item sm={12} md><ContactCard action="Learn More" actionLink="#"/></Grid>
            <Grid item sm={12} md><ContactCard action="Learn More" actionLink="#"/></Grid>
        </Grid>
    </Box>);
}