import React from 'react'
import { withStyles, Card, CardContent, CardMedia, Grid, Button, List, ListItem, Typography } from '@material-ui/core'
import styles from "../styles/eventCardStyles"
import placeholder from '../public/images/placeholder.jpg'

function EventCard({classes,title,discription,speaker,date}) {
    return (
        <Card style={{minWidth : '350px'}}>
            <CardContent>
                <List>
                    <ListItem>
                    <Grid container wrap="wrap-reverse" style={{background : 'red'}} justify="center">
                        <Grid item md={12} lg={3} style={{background : 'green'}}><img src={placeholder} style={{width : '100%', objectFit : 'cover'}}></img></Grid>
                        <Grid item md={12} lg={8}>
                            <Typography variant="h6" style={{fontWeight : '600'}}>{title}</Typography>
                            <Typography variant="body1" style={{fontWeight : '500'}}>speaker: {speaker}</Typography>
                                <Typography className={classes.discription}>
                                    <p>{discription}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" style={{marginRight : '1em', background : 'white'}}>Explore</Button>
                        <Button variant="contained" color="primary">Read More</Button>
                    </ListItem>
                    </List>

                </CardContent>
        </Card>

    )
}

export default withStyles(styles)(EventCard)