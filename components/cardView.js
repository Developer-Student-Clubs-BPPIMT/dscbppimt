import { Grid, Box, Card, Container, Typography } from '@material-ui/core'
import { AboutCard } from './card'


export const AboutCardView = () => {
    return(
    <Box style={{background : '#E8EAE9', padding : '2em'}}>
        <Box style={{textAlign : 'center'}}>
            <Typography variant="h5" component='h5' style={{fontWeight : '600'}}>What We Do?</Typography>
            <Typography variant="body2" style={{marginBottom : '1em'}}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
        </Box>
        <Grid container spacing={2} justify='center'>
            <Grid item sm={6} md><AboutCard /></Grid>
            <Grid item sm={6} md><AboutCard /></Grid>
            <Grid item sm={6} md><AboutCard /></Grid>
            <Grid item sm={6} md><AboutCard /></Grid>
        </Grid>
    </Box>)
}

export const ContactCardView = () => {
    return(
    <Box>
        
    </Box>);
}