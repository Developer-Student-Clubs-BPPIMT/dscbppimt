import React from 'react'
import { Grid, Container, Typography, Box, Card, TableHead, TableRow, TableCell, TableSortLabel, Table, TableBody, TableContainer, Paper, makeStyles } from '@material-ui/core'
import Searchbar from '../components/Searchbar'
import Layout from '../components/layout'
import { EventCard } from '../components/card'
import { Skeleton } from '@material-ui/lab' 
import Axios from 'axios'
import { useState, useEffect } from 'react'


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        marginTop: '2em',
    }
  });
function Events() {
    const classes = useStyles()
    const [ Events, setEvents] = useState([]);
    const [ upcomingEvents, setUpcomingEvents ] = useState([])
    const [ isLoading, setLoading ] = useState(false)
    const URL = "https://dscbppimt-cms.herokuapp.com/files/"
    useEffect(() => {
        const today = new Date()
        const todayDate = today.toISOString()
        console.log(todayDate)
        // 2020-10-11T09:10:30.698Z
        setLoading(true);
        Axios.get(`https://dscbppimt-cms.herokuapp.com/our-events?Date_gte=${todayDate}&_sort=Date:desc&_limit=2`).then(res => {
          console.log(res.data);
          setUpcomingEvents(res.data);
          setLoading(false)
        });
        Axios.get(`https://dscbppimt-cms.herokuapp.com/our-events?Date_lt=${todayDate}&_sort=Date:desc`).then(res => {
            console.log(res.data);
            setEvents(res.data);
            setLoading(false)
          });
    },[])
    return (
        <Layout>
            <Box>
                <Container style={{marginBottom : '4em'}}>
                    <Typography variant="h4" style={{fontWeight : '500', margin : '1em 0px'}}>Our Events</Typography>
                    <Grid container spacing={2}>
                    {isLoading ? <Skeleton variant="rect" width="100%" height="150px"/> : upcomingEvents.length !== 0 ? upcomingEvents.map(event => (
                        <Grid item xs={12} sm={6} md={12} key={event._id}>
                        <EventCard 
                        Image={URL+(event.Image.formats.thumbnail.url)}
                        title={event.Title} 
                        speaker={event.Speaker === 'None' ? null : event.Speaker } 
                        description={event.Description} 
                        date={event.Date}
                        data={event.Image}
                        register={event.Register}
                        learn={event.Learn}
                        />
                        </Grid>
                    )) : <Container style={{width: '100%', textAlign: 'center', margin: '4em 0'}}><Typography align="center" >No Upcoming Events</Typography></Container>}
                    </Grid>
                </Container>
            </Box>
            <Container style={{padding : '2em'}}>
                <Box style={{display : 'flex', justifyContent : 'space-between'}}>
                    <Typography variant="h6">Past Events</Typography>
                </Box>
                <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Event</TableCell>
            <TableCell align="center">Speaker</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Events.map((row) => (
            <TableRow key={row.Title}>
              <TableCell component="th" scope="row" align="center">{row.Title}</TableCell>
              <TableCell align="center">{row.Speaker}</TableCell>
              <TableCell align="center">{row.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Container>

        </Layout>
    )
}

export default Events
