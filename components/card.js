import { makeStyles, Card, Typography, CardContent, CardMedia, Button, Box, Grid, Chip, Container, Paper } from '@material-ui/core'
import styles from '../styles/Card.module.css'
import Link from 'next/link'
import MediumIcon from '../public/svgs/medium.svg'
import GFGIcon from '../public/svgs/gfg.svg'

const useStyles = makeStyles({
    aboutCard : {
        background : 'rgba(255,255,255,.1)',
        margin : '4px',

    },
    aboutCardContent : {
        height: '19em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "flex-start",
        margin: "4px",

    },
    aboutCardTitle : {
        fontWeight: '800',
        textAlign: 'center',
    },
    aboutCardBody : {
        textAlign: 'center',
        fontSize: "14px",
        marginBottom: '.5em',
    },
    contactCard: {
        background : 'rgba(255,255,255,.1)',
        margin : '8px',
        height : '32.5em',
        display : 'flex',
        flexDirection : 'column'
    },
    contactCardContent: {
        flex : '1',
        display : 'flex',
        flexDirection : 'column'
    }
})


export const AboutCard = ({ image, title, body, hashtag }) => {
    const classes = useStyles()
    return(
        <Card elevation={2} className={classes.aboutCard}>
            <CardContent className={classes.aboutCardContent}>
                {image}
                <Typography variant="subtitle1" component="h5" className={classes.aboutCardTitle}>{title}</Typography>
                <Typography variant="body2" component="p" className={classes.aboutCardBody}>{body}</Typography>
                <Chip label={hashtag}/>
            </CardContent>
        </Card>
        )
}

export const ContactCard = (props) => {
    const classes = useStyles()
    return(
    <Card className={classes.contactCard}>
        <div style={{height : '250px'}}>
            { props.image }
        </div>
        
        <CardContent className={classes.contactCardContent}>
                <Typography variant="h6" style={{fontWeight : '600'}}>{props.title}</Typography>
                <Typography variant="body2" style={{flex : '1'}}>{props.description}</Typography>
                <Button variant="contained" color="primary" style={{margin : '0px auto', marginTop : '.8em'}} onClick={() => {window.location.href = "mailto:dscbppimt@gmail.com?subject=" + props.subject + "&body=message%20goes%20here"}}>{props.action}</Button>
        </CardContent>
    </Card>)
}


export const EventCard = (props) => {
    const dateISO = Date.parse(props.date);
    const dateString = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit'}).format(dateISO);
    console.log(props)
    return(
    <Card>
        <CardContent>
                <Grid container wrap="wrap-reverse" justify="space-between">
                    <Grid item xs={12} md={2}>
                        <img src={props.Image} alt={props.title} style={{height : '100%', width : '100%', objectFit : 'contain'}}/>
                    </Grid>
                    <Grid item xs={12} md={10} container direction="column" justify="space-between">
                        <Grid item className={styles.cardContent}>
                            <Box>
                                <Grid container alignItems="flex-start" justify="space-between">
                                    <Grid item xs={12} alignItems="stretch">
                                        <Typography style={{fontWeight : '600', fontSize : '1.5em'}}>{props.title}</Typography>
                                        { props.speaker && <Typography variant="body1" style={{fontWeight : '500', marginBottom : '1em'}}> Speaker: {props.speaker}</Typography> }
                                    </Grid>
                                </Grid>

                            </Box>
                            <Box className={styles.cardDescription}>
                                <Typography variant="body2" className={styles.cardDescription}>{props.description}</Typography>
                            </Box>
                        </Grid>
                        <Grid item container justify="space-between" alignItems="flex-end" className={styles.blogButtonBar} >
                            <Grid item>
                                <Typography>{dateString}</Typography>  
                            </Grid>
                            <Grid item style={{display : 'flex', justifyContent : 'flex-end'}}>
                                <Box className={styles.buttonsLG}>
                            {/* <Button variant="contained" style={{marginRight : '1em'}} onClick={() => window.open(props.learn)}>Learn More</Button> */}
                            <Button variant="contained" color="primary" onClick={() => window.open(props.register)}>Register</Button>
                            </Box>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            <Box className={styles.buttonsMD}>
                <Button variant="contained" color="primary" onClick={() => window.open(props.register)}>Register</Button>
            </Box>
        </CardContent>
    </Card>)
}

export const BlogCard = (props) => {
    return(
    <Card className={styles.blogCard} style={{height : '100%'}}>
        <CardContent>
                <Grid container wrap="wrap">
                    <Grid item xs={12} md={2}>
                        <img src={props.Image} alt={props.title} style={{height : '100%', width : '100%', objectFit : 'cover'}}/>
                    </Grid>
                    <Grid item xs={12} md={10} container direction="column" justify="space-between">
                        <Grid item className={styles.cardContent}>
                        <Grid container alignItems="flex-start" justify="space-around">
                                    <Grid item container>
                                        <Grid item xs={12}><Typography style={{fontWeight : '600', fontSize : '1.3em', maxWidth : '90%'}}>{props.title}</Typography></Grid>
                                        <Grid item xs={12}><Typography variant="body1" style={{fontWeight : '500', marginBottom : '1em'}}>Author: {props.speaker}</Typography></Grid>    
                                    </Grid>
                                </Grid>
                            <Box className={styles.cardDescription} textOverflow="ellipsis" overflow="hidden">
                                {props.discription}
                            </Box>
                        </Grid>
                        <Grid item container justify="space-between" className={styles.blogButtonBar}>
                            <Grid item alignItems="flex-end">
                                {props.Platform === 'GeeksForGeeks' ? <GFGIcon style={{width : '60px', display: 'flex', alignItems: 'flex-end'}}/> : props.Platform === 'Medium' ? <MediumIcon style={{width : '80px', display: 'flex', alignItems: 'flex-end'}}/> : <Typography variant="subtitle1" style={{fontWeight : '600'}}>{props.Platform}</Typography>}
                                
                            </Grid>
                            <Grid item style={{display : 'flex', justifyContent : 'flex-end'}}>
                            <Button variant="contained" color="primary" onClick={() => window.open(props.url)}>Read More</Button>
                        </Grid>
                        </Grid>

                    </Grid>
                </Grid>
        </CardContent>

    </Card>)
}


export const MediaCard = props => {
    const classes = useStyles();
    const {image, title, description} = props;
    return (
      <Card style={{margin : '8px', minHeight : '20em'}}>
          <Box style={{margin : '2em 0em .5em 2em'}}>{ image }</Box>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        
      </Card>
    );
  }
