import { Grid, Paper, Card, Container, Typography, Box, Button } from '@material-ui/core'
import { AboutCard, ContactCard } from './card'


export const AboutCardView = () => {
    return(
    <Paper style={{background : '#E8EAE9', padding : '2em 0px', display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
        <Box style={{textAlign : 'center', display : 'flex', flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>
            <Typography variant="h5" component='h5' style={{fontWeight : '600'}}>What We Do?</Typography>
            <Typography variant="body2" style={{marginBottom : '1em'}}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
        </Box>
        <Grid container justify="center" spacing={1} style={{maxWidth : '1300px', padding : '4px'}}>
            <Grid item xs={6} md><AboutCard /></Grid>
            <Grid item xs={6} md><AboutCard /></Grid>
            <Grid item xs={6} md><AboutCard /></Grid>
            <Grid item xs={6} md><AboutCard /></Grid>
        </Grid>
    </Paper>)
}

export const ContactCardView = () => {
    return(
    <Box style={{background : '#E8EAE9', padding : '2em'}}>
        <Grid container style={{maxWidth : '1300px', margin : '0 auto'}} spacing={2}>
            <Grid item sm={12} md><ContactCard action="Learn More" actionLink="#"/></Grid>
            <Grid item sm={12} md><ContactCard action="Learn More" actionLink="#"/></Grid>
            <Grid item sm={12} md><ContactCard action="Learn More" actionLink="#"/></Grid>
        </Grid>
    </Box>);
}