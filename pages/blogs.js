import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { Container, Grid, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import { BlogCard } from '../components/card'
import Axios from 'axios'

function Blogs() {
    const [Blogs, setBlogs] = useState([]);
    const [Render, setRender] = useState(false);
    const URL = "https://dscbppimt-cms.herokuapp.com/files/"
    useEffect(() => {
        const data = async() => {
            const res = await Axios.get("https:/dscbppimt-cms.herokuapp.com/our-blogs");
            setBlogs(res.data);
        }
        data();
    },[Render])
    return (
        <Layout>
                <Container style={{marginBottom : '2em'}}>
                <Typography variant="h4" style={{fontWeight : '500', margin : '1em 0px'}}>Our Blogs</Typography>
                    <Grid container spacing={2}>
                    {Blogs.length === 0 ? <Skeleton><BlogCard /></Skeleton> : Blogs.map(event => (
                        <Grid item xs={12} sm={6} md={12} key={event._id}>
                        <BlogCard 
                        Image={URL+(event.Image[0].name)}
                        title={event.Title} 
                        speaker={event.Author} 
                        discription={event.Description} 
                        platform={event.Medium}
                        />
                        </Grid>
                    ))}
                    </Grid>
                </Container>  
        </Layout>
    )
}

export default Blogs

