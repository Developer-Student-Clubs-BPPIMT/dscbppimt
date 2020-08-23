import { Container, Grid, Typography, Button } from '@material-ui/core'
import styles from '../styles/Layout.module.css'
import TeamArt from '../public/svgs/teamart.svg'
import Link from 'next/link'

const Header = () => {
    
    return(
    <Container>
        <Grid className={styles.header} container wrap="wrap-reverse" justify="center" spacing={2}>
            <Grid item container direction="column" xs={12} md justify="center" component="div">
                <Grid item style={{marginBottom : "2em"}}><Typography variant="h5" component="h5">Creation through <span>Collaboration</span></Typography></Grid>
                <Grid item><Typography variant="subtitle1" component="h6">Developer Student Clubs BPPIMT</Typography></Grid>
                <Grid item><Typography variant="body2">Developer Student Clubs BPPIMT is a prominent student developer community in Eastern India, based out of NSEC campus in Kolkata. The club boasts over 3000+ members from all over the world.</Typography></Grid>
                <Grid item style={{margin : '2em 0px'}}>
                    <Link href="/memberform"><Button variant="contained" color="primary" style={{marginRight : '.5em'}}><Typography style={{color : 'white'}}>Become a Member</Typography></Button></Link>
                    <Link href="/about"><Button variant="outlined" color="primary">Learn More</Button></Link>
                </Grid>
            </Grid>
            <Grid item xs={12} md style={{display : 'flex', alignItems : 'center'}}><TeamArt style={{width : "100%", height : '80%'}}/></Grid>
        </Grid>
    </Container>)
}

export default Header;