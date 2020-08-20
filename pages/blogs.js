import React from 'react'
import Layout from '../components/layout'
import { withStyles } from '@material-ui/core'
import EventCard from '../components/eventCard'
import blogs from '../components/helper/blogsHelper'
import BlogCard from '../components/BlogCard'


const styles = theme => ({
    box:{
        display: "flex",
        flexDirection : "column",
        alignItems:"center",
        fontFamily: "Roboto"
    },
    pastBox: {
        display: "flex",
        justifyContent: "center",
        height : "50vh",
        backgroundColor: "#dddddd",
    },
    header:{
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]:{
            marginTop: "0",
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
        },

    },
    container :{
        display : "flex",
        padding: "20px",
        flexDirection: "column",
        width: "80%",
        justfyContent: "flex-start",
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            alignItems: "center"
        },

    }
})


function Blogs({classes}) {
    return (
        <Layout>
            <div className={classes.box}>
                <div className={classes.container}>
                    <h1 className={classes.heading}>Our Blogs</h1>
                    {blogs.map(blog => (
                        <BlogCard
                        Image={blog.image}
                        title={blog.title} 
                        speaker={blog.speaker} 
                        discription={blog.discription} 
                        medium={blog.medium}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default withStyles(styles)(Blogs)