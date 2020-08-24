import { makeStyles, Card, Typography, CardContent, CardMedia, Button, Box, Grid, CardActionArea } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from '../styles/Card.module.css'
import Message from '../public/svgs/message.svg'
import placeholder from '../public/images/placeholder.jpg'

export const AboutCard = ({ image, title }) => {
    return(
    <Card className={styles.aboutCard}>
        {image}
    <Typography variant="subtitle1" component="h5">{title}</Typography>
        <Typography variant="body2" component="p">Get updated with the latest news and announcements</Typography>
    </Card>)
}

export const ContactCard = (props) => {
    const router = useRouter()

    const routeHandler = () => {
        router.push(props.actionLink)
    }
    return(
    <Card style={{margin : '8px'}}>
        <CardMedia image={placeholder} style={{height : '200px'}}></CardMedia>
        <CardContent style={{display : 'flex', flexDirection : 'column'}}>
    <Typography variant="h6" style={{fontWeight : '600'}}>{props.title}</Typography>
    <Typography variant="body2">{props.description}</Typography>
            <Button variant="contained" color="primary" style={{margin : '0px auto', marginTop : '2em'}} onClick={routeHandler}>{props.action}</Button>
        </CardContent>
    </Card>)
}


export const EventCard = (props) => {
    const router = useRouter();

    return(
    <Card>
        <CardContent>
                <Grid container wrap="wrap-reverse">
                    <Grid item xs={12} md={2}>
                        <img src={props.Image} style={{height : '100%', width : '100%', objectFit : 'cover'}}/>
                    </Grid>
                    <Grid item xs={12} md={10} container direction="column" justify="space-between">
                        <Grid item className={styles.cardContent}>
                            <Box>
                                <Grid container alignItems="flex-start" justify="space-between">
                                    <Grid item>
                                        <Typography style={{fontWeight : '600', fontSize : '1.5em'}}>{props.title}</Typography>
                                        <Typography variant="body1" style={{fontWeight : '500', marginBottom : '1em'}}>Speaker: {props.speaker}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>26 September, 2020</Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                            <Box className={styles.cardDescription}>
                                <Typography variant="body2" className={styles.cardDescription}>{props.discription}</Typography>
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
    const router = useRouter();

    return(
    <Card className={styles.blogCard}>
        <CardContent>
                <Grid container wrap="wrap">
                <Grid item xs={12} md={2}>
                        <img src={props.Image} style={{height : '100%', width : '100%', objectFit : 'cover'}}/>
                    </Grid>
                    <Grid item xs={12} md={10} container direction="column" justify="space-between">
                        <Grid item className={styles.cardContent}>
                        <Grid container alignItems="flex-start" justify="space-between">
                                    <Grid item>
                                        <Typography style={{fontWeight : '600', fontSize : '1.5em'}}>{props.title}</Typography>
                                        <Typography variant="body1" style={{fontWeight : '500', marginBottom : '1em'}}>Author: {props.speaker}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{fontWeight : 'bold'}}>{props.platform}</Typography>
                                    </Grid>
                                </Grid>
                            <Box className={styles.cardDescription}>
                                <Typography variant="body2" className={styles.cardDescription}>{props.discription}</Typography>
                            </Box>
                        </Grid>
                        <Grid item style={{display : 'flex', justifyContent : 'flex-end'}}>
                            <Button variant="contained" style={{marginRight : '1em', background : 'white'}}>Explore</Button>
                            <Button variant="contained" color="primary">Read More</Button>
                        </Grid>
                    </Grid>
                </Grid>
        </CardContent>

    </Card>)
}


const useStyles = makeStyles({
    media: {
      height: 140,
    },
  });

export const MediaCard = props => {
    const classes = useStyles();
    const {image, title, description} = props;
    return (
      <Card style={{margin : '8px'}}>
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
