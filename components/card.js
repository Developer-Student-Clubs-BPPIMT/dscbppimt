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
        height : '35em',
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
                <Button variant="contained" color="primary" style={{margin : '0px auto', marginTop : '.8em'}}>{props.action}</Button>
        </CardContent>
    </Card>)
}


export const EventCard = (props) => {
    return(
    <Card>
        <CardContent>
                <Grid container wrap="wrap-reverse">
                    <Grid item xs={12} md={3}>
                        <img src={props.Image} style={{height : '100%', width : '100%', objectFit : 'cover'}}/>
                    </Grid>
                    <Grid item xs={12} md={9} container direction="column" justify="space-between">
                        <Grid item className={styles.cardContent}>
                            <Box>
                                <Grid container alignItems="flex-start" justify="space-between">
                                    <Grid item xs={12}>
                                        <Typography style={{fontWeight : '600', fontSize : '1.5em'}}>{props.title}</Typography>
                                        <Typography variant="body1" style={{fontWeight : '500', marginBottom : '1em'}}>Speaker: {props.speaker}</Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                            <Box className={styles.cardDescription}>
                                <Typography variant="body2" className={styles.cardDescription}>{props.description}</Typography>
                            </Box>
                        </Grid>
                        <Grid item className={styles.buttonsLG}>
                            <Box>
                                <Button variant="contained" style={{marginRight : '1em', background : 'white'}}>Explore</Button>
                                <Button variant="contained" color="primary">Read More</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            <Box className={styles.buttonsMD}>
                <Button variant="contained" style={{marginRight : '1em', background : 'white'}}>Explore</Button>
                <Button variant="contained" color="primary">Read More</Button>
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
                        <img src={props.Image} style={{height : '100%', width : '100%', objectFit : 'cover'}}/>
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
                            <Grid item>
                                {props.Platform === 'GeeksForGeeks' ? <GFGIcon style={{width : '50px'}}/> : props.Platform === 'Medium' ? <MediumIcon style={{width : '70px'}}/> : <Typography variant="subtitle1" style={{fontWeight : '600'}}>{props.Platform}</Typography>}
                                
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
