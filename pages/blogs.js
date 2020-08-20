import React from 'react'
import Layout from '../components/layout'
import { withStyles, Container, Grid } from '@material-ui/core'
import blogs from '../components/helper/blogsHelper'
import { BlogCard } from '../components/card'
import styles from "../styles/blogStyles"

function Blogs({classes}) {
    return (
        <Layout>
                <Container>
                    <h1 className={classes.heading}>Our Blogs</h1>
                    <Grid container spacing={2}>
                    {blogs.map(event => (
                        <Grid item xs={12} sm={6} md={12}>
                        <BlogCard 
                        Image={event.image}
                        title={event.title} 
                        speaker={event.speaker} 
                        discription={event.discription} 
                        medium={event.date}
                        />
                        </Grid>
                    ))}
                    </Grid>
                </Container>  
        </Layout>
    )
}

export default withStyles(styles)(Blogs)

