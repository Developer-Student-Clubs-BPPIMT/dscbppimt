import Layout from '../components/layout'
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Resources = () => {
    return (
    <Layout>
        <Container fixed>
        <h1 className="color">Contact Us</h1>
        <h2> Developer Student Clubs BPPIMT</h2>
          <Typography varient="body2" component="div" style={{height: 'auto', width: 'auto', fontWeight:"545"}}>
          Our events are open to novice, developers, managers, and organizations who are interested in Google's Technologies or<br/> 
          those who use them as part of their projects.<br/><br/>
  
          Developer Student Clubs BPPIMT is a prominent student developer community in Eastern India(West Bengal), based out <br/> of BPPIMT campus in Kolkata. 
          The club boasts several members from all over the world.<br/><br/>
  
          Still having any Questions? Please contact dscbppimt@gmail.com
          </Typography>
          
        </Container>
    </Layout>)
}

export default Resources;
