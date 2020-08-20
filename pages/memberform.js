import { Container, Box, Grid, Typography, Paper, Button, FormGroup } from "@material-ui/core";
import Layout from '../components/layout';
import styles from '../styles/Layout.module.css';
import TeamArt from '../public/svgs/teamart.svg';
import DscLogo from '../public/svgs/dsc.svg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

export default function MemberForm() {

    const classes = useStyles();
    
    return (
        <Layout>

            <Container style={{padding : "35px"}}>

                <Grid className={styles.header} container wrap="wrap-reverse" justify="center" spacing={2}>
                    <Grid item container direction="column" xs={12} md justify="center" component="div">
                        <Grid item style={{marginBottom : "2em"}}><Typography variant="h5" component="h5">DSC BPPIMT <span>Membership</span> Registration</Typography></Grid>
                        <Grid item><Typography variant="body2" style={{textAlign : "justify"}}>Google collaborates with university students who are passionate about growing developer communities and supports them with starting student clubs on their campuses.</Typography></Grid>
                        <Grid item>
                            <Typography variant="body2" style={{textAlign : "justify"}}><br />
                                DSC BPPIMT will be organizing workshops that will be covering topics like Web & Mobile Development, Machine Learning, Artificial Intelligence, Cloud, and the latest Google Technologies. We collaborate and build projects, work on personal development to ensure that we deliver smart technological solutions to local issues, and beyond.  
                            </Typography></Grid>
                        <Grid item><Typography variant="body2"><br />Fill up the form & join us !</Typography></Grid>
                    </Grid>
                    <Grid item xs={12} md style={{display : 'flex', alignItems : 'center'}}><DscLogo style={{width : "100%", height : '80%'}}/></Grid>
                </Grid>

                <br />
                
                <Box style={{margin: '10px' }}>
                    <form className={classes.root} >
                        <div style={{maxWidth: '740px', width:'90%', margin:'0 auto' }}>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                <label style={{fontSize: '1rem'}}>Name</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Name" inputProps={{ 'aria-label': 'description' }} />
                                
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Email</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Email" inputProps={{ 'aria-label': 'description' }} />
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Gender</label>
                                <br />
                                <RadioGroup style={{marginTop:'1.5rem'}} aria-label="gender" name="gender1">
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Stream</label>
                                <br />
                                <RadioGroup style={{marginTop:'1.5rem'}} aria-label="gender" name="gender1">
                                    <FormControlLabel value="AEIE" control={<Radio />} label="AEIE" />
                                    <FormControlLabel value="BBA" control={<Radio />} label="BBA" />
                                    <FormControlLabel value="BCA" control={<Radio />} label="BCA" />
                                    <FormControlLabel value="BME" control={<Radio />} label="BME" />
                                    <FormControlLabel value="CE" control={<Radio />} label="CE" />
                                    <FormControlLabel value="CSE" control={<Radio />} label="CSE" />
                                    <FormControlLabel value="ECE" control={<Radio />} label="ECE" />
                                    <FormControlLabel value="EE" control={<Radio />} label="EE" />
                                    <FormControlLabel value="IT" control={<Radio />} label="IT" />
                                    <FormControlLabel value="MBA" control={<Radio />} label="MBA" />
                                    <FormControlLabel value="MCA" control={<Radio />} label="MCA" />
                                    <FormControlLabel value="ME" control={<Radio />} label="ME" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Year</label>
                                <br />
                                <RadioGroup style={{marginTop:'1.5rem'}} aria-label="gender" name="gender1">
                                    <FormControlLabel value="1st" control={<Radio />} label="1st" />
                                    <FormControlLabel value="2nd" control={<Radio />} label="2nd" />
                                    <FormControlLabel value="3rd" control={<Radio />} label="3rd" />
                                    <FormControlLabel value="4th" control={<Radio />} label="4th" />
                                </RadioGroup>
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                <label style={{fontSize: '1rem'}}>College ID</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />
                                
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                <label style={{fontSize: '1rem'}}>Github Profile Link</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />                                
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                <label style={{fontSize: '1rem'}}>Linkedin Profile Link</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />                               
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                <label style={{fontSize: '1rem'}}>Codechef Username</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />                               
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                <label style={{fontSize: '1rem'}}>HackerRank Username</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Would you love to volunteer for DSC BPPIMT ?</label>
                                <br />
                                <RadioGroup style={{marginTop:'1.5rem'}} aria-label="gender" name="gender1">
                                    <FormControlLabel value="female" control={<Radio />} label="Yes!" />
                                    <FormControlLabel value="male" control={<Radio />} label="Maybe(?)" />
                                    <FormControlLabel value="other" control={<Radio />} label="No, Give Me Peace." />
                                </RadioGroup>
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Tell us a little something about yourself (add a fun fact maybe)</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Why would you like to join DSC ?</label>
                                <br />
                                <Input style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Would you be eager to join the core ?</label>
                                <p>The core committee leads the several smaller teams of Design, Web, App, Outreach and ensures the proper management of the entire club.</p>
                                <br />
                                <RadioGroup  aria-label="gender" name="gender1">
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                    <FormControlLabel value="Maybe" control={<Radio />} label="No, Maybe" />
                                </RadioGroup>
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>If so, Why ?</label>
                                <p>Please mention the area of your expertise and what would you wish to contribute to the community.</p>
                                <br />
                                <Input style={{width:"75%"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />
                            </div>

                            <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                <label style={{fontSize: '1rem'}}>Who referred you to this Club? (if anyone!)</label>
                                <p>Please provide their name or email.</p>
                                <br />
                                <Input style={{width:"75%"}} placeholder="Your Answer" inputProps={{ 'aria-label': 'description' }} />
                            </div>

                        </div>

                        


                    </form>
                </Box>

            </Container>
            
        </Layout>
        
  );
}