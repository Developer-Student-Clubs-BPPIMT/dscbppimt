import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { Container, Grid, Typography } from '@material-ui/core'
import { BlogCard } from '../components/card'
import Axios from 'axios'
import { Skeleton } from '@material-ui/lab';

function Blogs() {
    const [Blogs, setBlogs] = useState([]);
    const [Render, setRender] = useState(false);
    const URL = "https://dscbppimt-cms.herokuapp.com"
    useEffect(() => {
        const data = async() => {
            const res = await Axios.get("https://dscbppimt-cms.herokuapp.com/our-blogs?_sort=Date:desc");
            setBlogs(res.data);
        }
        data();
    },[Render])
    return (
        <Layout>
                <Container style={{marginBottom : '4em'}}>
                <Typography variant="h4" style={{fontWeight : '500', margin : '1em 0px'}}>Our Blogs</Typography>
                    <Grid container spacing={2}>
                    {Blogs.length === 0 ? <Skeleton></Skeleton> : Blogs.map(event => (
                        <Grid item xs={12} sm={6} md={12}>
                        <BlogCard 
                        Image={URL+event.Image.url}
                        title={event.Title} 
                        speaker={event.Author} 
                        discription={event.Description} 
                        platform={event.Platform}
                        url={event.Read}
                        />
                        </Grid>
                    ))}
                    </Grid>
                </Container>  
        </Layout>
    )
}

export default Blogs

