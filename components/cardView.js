import { Grid, Paper, Card, Container, Typography, Box, Button } from '@material-ui/core'
import { AboutCard, ContactCard } from './card'


export const AboutCardView = () => {
    return(
    <Paper style={{background : '#E8EAE9', padding : '2em'}}>
        <Box style={{textAlign : 'center'}}>
            <Typography variant="h5" component='h5' style={{fontWeight : '600'}}>What We Do?</Typography>
            <Typography variant="body2" style={{marginBottom : '1em'}}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
        </Box>
        <Grid container spacing={2} justify='center' style={{maxWidth : '1300px', margin : '0 auto'}}>
            <Grid item sm={6} md><AboutCard /></Grid>
            <Grid item sm={6} md><AboutCard /></Grid>
            <Grid item sm={6} md><AboutCard /></Grid>
            <Grid item sm={6} md><AboutCard /></Grid>
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