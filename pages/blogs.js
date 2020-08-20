import React from 'react'
import Layout from '../components/layout'
import { withStyles } from '@material-ui/core'
import blogs from '../components/helper/blogsHelper'
import BlogCard from '../components/BlogCard'
import styles from "../styles/blogStyles"

function Blogs({classes}) {
    return (
        <Layout>
            <div className={classes.box}>
                <div className={classes.container}>
                    <h1 className={classes.heading}>Our Blogs</h1>
                    {blogs.map(event => (
                        <BlogCard 
                        Image={event.image}
                        title={event.title} 
                        speaker={event.speaker} 
                        discription={event.discription} 
                        medium={event.date}
                        />
                    ))}
                </div>
            </div>        
        </Layout>
    )
}

export default withStyles(styles)(Blogs)