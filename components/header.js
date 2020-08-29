import { Container, Grid, Typography, Button, Box, Paper } from '@material-ui/core'
import styles from '../styles/Layout.module.css'
import TeamArt from '../public/svgs/teamart.svg'
import Link from 'next/link'

const Header = () => {
    
    return(
    <Container>
        <Grid className={styles.header} container wrap="wrap-reverse" justify="center" spacing={2}>
            <Grid item container direction="column" xs={12} md justify="center" component="div">
                <Grid item style={{marginBottom : "2em"}}><Typography variant="h5" component="h5">Creation through <Box style={{display : 'inline'}} color="primary.main">Collaboration</Box></Typography></Grid>
                <Grid item><Typography variant="h6" component="h6">Developer Student Clubs BPPIMT</Typography></Grid>
                <Grid item><Typography variant="body2">DSC BPPIMT provides a platform which aims for the growth and advancement of the student community in the field of technology by providing peer-to-peer learning environment by conducting workshops , webinars and events , providing hands on experiences.</Typography></Grid>
                <Grid item style={{margin : '2em 0px'}}>
                    <Link href="/memberform"><Button variant="contained" color="primary" style={{marginRight : '.5em', marginTop : '.5em'}}><Typography>Become a Member</Typography></Button></Link>
                    <Link href="/about"><Button variant="outlined" color="primary" style={{marginTop : '.5em'}}>Learn More</Button></Link>
                </Grid>
            </Grid>
            <Grid item xs={12} md style={{display : 'flex', alignItems : 'center'}}><TeamArt style={{width : "100%", height : '80%'}}/></Grid>
        </Grid>
    </Container>)
}

export default Header;