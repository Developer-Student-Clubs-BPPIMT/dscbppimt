import { Container, Grid, Typography, Button } from '@material-ui/core'
import styles from '../styles/Layout.module.css'
import TeamArt from '../public/svgs/teamart.svg'
import { useRouter } from 'next/router'


const Header = () => {
    const router = useRouter();
    const pushPage = (url) => {
        router.push(url);
    }
    
    return(
    <Container>
        <Grid className={styles.header} container wrap="wrap-reverse" justify="center" style={{padding : ".5em"}} spacing={2}>
            <Grid item container direction="column" xs={12} md justify="center" component="div">
                <Grid item style={{marginBottom : "2em"}}><Typography variant="h5" component="h5">Make good things <span>together</span>.</Typography></Grid>
                <Grid item><Typography variant="subtitle2">Developer Student Clubs BPPIMT</Typography></Grid>
                <Grid item><Typography variant="body2">Developer Student Clubs BPPIMT is a prominent student developer community in Eastern India, based out of NSEC campus in Kolkata. The club boasts over 3000+ members from all over the world.</Typography></Grid>
                <Grid item style={{marginTop : '1em'}}>
                    <Button variant="contained" color="primary" style={{marginRight : '.5em'}} onClick={() => pushPage('/about')}><Typography style={{color : 'white'}}>Become a Member</Typography></Button>
                    <Button variant="outlined" color="primary" onClick={() => pushPage('/about')}>Learn More</Button>
                </Grid>
            </Grid>
            <Grid item xs={12} md><TeamArt style={{width : "100%"}}/></Grid>
        </Grid>
    </Container>)
}

export default Header