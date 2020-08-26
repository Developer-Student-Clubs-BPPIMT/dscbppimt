import { Box, Grid, Typography, Link } from '@material-ui/core' 
import styles from '../styles/Layout.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = () => {
    return(
    <Box className={styles.footer}>
        <Grid style={{color : 'white', padding : '2em'}}>
            <Grid item container justify='space-between'>
                <Grid item><Typography variant="h5">DSC BPPIMT</Typography></Grid>
            </Grid>
            <Grid item container spacing={2} style={{padding : '1em'}}>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{fontWeight : '600'}}>Contact</Typography>
                    <ALink href="https://www.facebook.com/dscbppimt/" ><FacebookIcon /> &nbsp; Facebook</ALink>
                    <ALink href="https://twitter.com/dscbppimt"><TwitterIcon /> &nbsp; Twitter</ALink>
                    <ALink href="https://github.com/Developer-Student-Clubs-BPPIMT"><GitHubIcon /> &nbsp; Github</ALink>
                    <ALink href="https://www.youtube.com/channel/UCBOba4X2mlApbMVKaxVdq5A?view_as=subscriber"><YouTubeIcon /> &nbsp; Youtube</ALink>
                    <ALink href="https://www.linkedin.com/company/developer-student-club-bppimt/"><LinkedInIcon /> &nbsp;LinkedIn</ALink>
                    
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{fontWeight : '600'}}>Programs</Typography>
                    <ALink href="http://bppimt.ac.in/">B.P Poddar Institute of Management and Technology</ALink>
                    <ALink href="https://developers.google.com/community/gdg">Google Developer Group</ALink>
                    <ALink href="https://developers.google.com/community/experts">Google Developer Experts</ALink>
                    <ALink href="https://developers.google.com/community/dsc">Developer Student Clubs</ALink>
                    <ALink href="https://www.womentechmakers.com/">Woman Techmakers</ALink>
                    <ALink href="https://developers.google.com/community/accelerators">Accelerators</ALink>
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{fontWeight : '600'}}>Contact</Typography>
                    <ALink href="https://console.developers.google.com/">Google API Console</ALink>
                    <ALink href="https://play.google.com/apps/publish">Google Play Console</ALink>
                    <ALink href="https://console.firebase.google.com/">Firebase Console</ALink>
                    <ALink href="https://chrome.google.com/webstore/developer/dashboard">Chrome Web Store Dashboard</ALink>
                    <ALink href="https://console.actions.google.com/">Actions on Google Console</ALink>
                </Grid>
                <Grid item xs className={styles.extraTab}/>
            </Grid>
        </Grid>
    </Box>)
}

const ALink = (props) => {
    return(<Box onClick={() => window.open(props.href)} style={{display : 'flex', alignItems : 'center', cursor : 'pointer', padding : '.3em 0px'}}>{props.children}</Box>)
}

export default Footer;