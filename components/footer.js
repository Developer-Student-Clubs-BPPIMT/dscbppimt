import { Box, Grid, Typography, Link } from '@material-ui/core' 
import styles from '../styles/Layout.module.css'

const Footer = () => {
    return(
    <Box className={styles.footer}>
        <Grid style={{color : 'white', padding : '2em'}}>
            <Grid item container justify='space-between'>
                <Grid item><Typography variant="h5">DSC BPPIMT</Typography></Grid>
                <Grid item><Typography variant="h6">Follow Us : </Typography></Grid>
            </Grid>
            <Grid item container spacing={2} className={styles.footerExtended}>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{fontWeight : '600'}}>Contact</Typography>
                    <ALink href="#">Facebook</ALink>
                    <ALink href="#">Twitter</ALink>
                    <ALink href="#">Youtube</ALink>
                    <ALink href="#">Github</ALink>
                    <ALink href="#">Medium</ALink>
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{fontWeight : '600'}}>Programs</Typography>
                    <ALink href="#">B.P Poddar Institute of Management and Technology</ALink>
                    <ALink href="#">Google Developer Group</ALink>
                    <ALink href="#">Google Developer Expoer</ALink>
                    <ALink href="#">Developer Student Clubs</ALink>
                    <ALink href="#">Woman Techmakers</ALink>
                    <ALink href="#">Accelerators</ALink>
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{fontWeight : '600'}}>Contact</Typography>
                    <ALink href="#">Google API Console</ALink>
                    <ALink href="#">Google Play Console</ALink>
                    <ALink href="#">Firebase Console</ALink>
                    <ALink href="#">Chrome Web Store Dashboard</ALink>
                    <ALink href="#">Actions on Google Console</ALink>
                </Grid>
                <Grid item xs className={styles.extraTab}/>
            </Grid>
        </Grid>
    </Box>)
}

const ALink = (props) => {
    return(<Link href={props.href} style={{display : 'block', color : 'white', padding : '3px 0px'}}>{props.children}</Link>)
}

export default Footer;