import { Container, Box, Grid, Typography, Button, FormGroup } from "@material-ui/core";
import Layout from '../components/layout';
import styles from '../styles/Layout.module.css';
import DscLogo from '../public/svgs/dsc.svg'
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'


class MemberForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            gender: '',
            stream: '',
            year: '',
            collegeID: '',
            github: '',
            linkedin: '',
            codechef: '',
            hackerrank: '',
            volunteer: '',
            about: '',
            joinReason: '',
            core: '',
            coreReason: '',
            referral: '',
            //errors
            nameError: '',
            emailError: '',
            genderError: '',
            streamError: '',
            yearError: '',
            collegeIDError: '',
            aboutError: '',
            volunteerError: '',
            joinReasonError: ''
        }

        const submitMessage = "";
        this.validate = this.validate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){

        const {name, value} = event.target

        this.validate();
        
        this.setState({
            ...this.state,
            [name]: value
        });

    }

    validate = () => {
        let isError = false;
        const formerror = {
            nameError: '',
            emailError: '',
            genderError: '',
            streamError: '',
            yearError: '',
            collegeIDError: '',
            aboutError: '',
            volunteerError: '',
            joinReasonError: ''
        };

        if(this.state.name.length === 0) {
            isError = true;
            formerror.nameError = "Required";
        }

        if(this.state.gender.length=== 0) {
            isError = true;
            formerror.genderError = "Required";
        }

        if(this.state.stream.length === 0) {
            isError = true;
            formerror.streamError = "Required";
        }

        if(this.state.about.length === 0) {
            isError = true;
            formerror.aboutError = "Required";
        }

        if(this.state.year.length === 0) {
            isError = true;
            formerror.yearError = "Required";
        }

        if(this.state.collegeID.length === 0) {
            isError = true;
            formerror.collegeIDError = "Required";
        }

        if(this.state.joinReason.length === 0) {
            isError = true;
            formerror.joinReasonError = "Required";
        }

        if(this.state.volunteer.length === 0) {
            isError = true;
            formerror.volunteerError = "Required";
        }

        if(this.state.email.indexOf("@") === -1) {
            isError = true;
            formerror.emailError = "Please enter a valid email address";
        }

        this.setState({
            ...this.state,
            ...formerror
        });

        return isError;
    }
    
    handleSubmit = (event) => {

        event.preventDefault();

        this.setState({
            nameError: '',
            emailError: '',
            genderError: '',
            streamError: '',
            yearError: '',
            collegeIDError: '',
            aboutError: '',
            volunteerError: '',
            joinReason: ''
        });

        const err = this.validate();
        if(err) {
            this.submitMessage = "Error in filling the form. Please fill the form correctly.";
        }

        if(!err) {
            this.submitMessage = "";
            alert('Submitted Successfully ! Current Response : ' + JSON.stringify(this.state));
            this.setState({
                name: '',
                email: '',
                gender: '',
                stream: '',
                year: '',
                collegeID: '',
                github: '',
                linkedin: '',
                codechef: '',
                hackerrank: '',
                volunteer: '',
                about: '',
                joinReason: '',
                core: '',
                coreReason: '',
                referral: '',
                //errors
                nameError: '',
                emailError: '',
                genderError: '',
                streamError: '',
                yearError: '',
                collegeIDError: '',
                aboutError: '',
                volunteerError: '',
                joinReason: ''
            });
        }
   
    }

    render() {
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
                        <form onSubmit={this.handleSubmit} >
                            <div style={{maxWidth: '740px', width:'90%', margin:'0 auto' }}>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                    <label style={{fontSize: '1rem'}}>Name <span style={{color: 'red'}}>* {this.state.nameError}</span></label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Name" name="name" value={this.state.name} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }}/>
                                    
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Email <span style={{color: 'red'}}>* {this.state.emailError}</span></label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Email" name="email" value={this.state.email} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Gender <span style={{color: 'red'}}>* {this.state.genderError}</span></label>
                                    <br />
                                    <RadioGroup style={{marginTop:'1.5rem'}} aria-label="gender" name="gender" value={this.state.gender} helperText={this.state.genderError} onChange={this.handleInputChange}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Stream <span style={{color: 'red'}}>* {this.state.streamError}</span></label>
                                    <br />
                                    <RadioGroup style={{marginTop:'1.5rem'}} aria-label="stream" name="stream" value={this.state.stream} onChange={this.handleInputChange}>
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
                                    <label style={{fontSize: '1rem'}}>Year <span style={{color: 'red'}}>* {this.state.yearError}</span></label>
                                    <br />
                                    <RadioGroup style={{marginTop:'1.5rem'}} aria-label="gender" name="year" value={this.state.year} onChange={this.handleInputChange}>
                                        <FormControlLabel value="1st" control={<Radio />} label="1st" />
                                        <FormControlLabel value="2nd" control={<Radio />} label="2nd" />
                                        <FormControlLabel value="3rd" control={<Radio />} label="3rd" />
                                        <FormControlLabel value="4th" control={<Radio />} label="4th" />
                                    </RadioGroup>
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                    <label style={{fontSize: '1rem'}}>College ID <span style={{color: 'red'}}>* {this.state.collegeIDError}</span></label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" name="collegeID" value={this.state.collegeID} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />
                                    
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                    <label style={{fontSize: '1rem'}}>Github Profile Link</label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" name="github" value={this.state.github} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />                                
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                    <label style={{fontSize: '1rem'}}>Linkedin Profile Link</label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" name="linkedin" value={this.state.linkedin} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />                               
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                    <label style={{fontSize: '1rem'}}>Codechef Username</label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" name="codechef" value={this.state.codechef} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />                               
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px', }}>
                                    <label style={{fontSize: '1rem'}}>HackerRank Username</label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" name="hackerrank" value={this.state.hackerrank} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Would you love to volunteer for DSC BPPIMT ? <span style={{color: 'red'}}>* {this.state.volunteerError}</span></label>
                                    <br />
                                    <RadioGroup style={{marginTop:'1.5rem'}} aria-label="gender" name="volunteer" value={this.state.volunteer} onChange={this.handleInputChange}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes!" />
                                        <FormControlLabel value="maybe" control={<Radio />} label="Maybe(?)" />
                                        <FormControlLabel value="no" control={<Radio />} label="No, Give Me Peace." />
                                    </RadioGroup>
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Tell us a little something about yourself (add a fun fact maybe) <span style={{color: 'red'}}>* {this.state.aboutError}</span></label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" name="about" value={this.state.about} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Why would you like to join DSC ? <span style={{color: 'red'}}>* {this.state.joinReasonError}</span></label>
                                    <br />
                                    <TextField style={{width:"75%", marginTop:"1.5rem"}} placeholder="Your Answer" name="joinReason" value={this.state.joinReason} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Would you be eager to join the core ?</label>
                                    <p>The core committee leads the several smaller teams of Design, Web, App, Outreach and ensures the proper management of the entire club.</p>
                                    <br />
                                    <RadioGroup aria-label="gender" name="core" value={this.state.core} onChange={this.handleInputChange}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                        <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
                                    </RadioGroup>
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>If so, Why ?</label>
                                    <p>Please mention the area of your expertise and what would you wish to contribute to the community.</p>
                                    <br />
                                    <TextField style={{width:"75%"}} placeholder="Your Answer" name="coreReason" value={this.state.coreReason} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />
                                </div>
    
                                <div style={{padding:'2rem', border: '1px solid lightgrey', borderRadius: '15px', marginBottom: '20px'}}>
                                    <label style={{fontSize: '1rem'}}>Who referred you to this Club? (if anyone!)</label>
                                    <p>Please provide their name or email.</p>
                                    <br />
                                    <TextField style={{width:"75%"}} placeholder="Your Answer" name="referral" value={this.state.referral} onChange={this.handleInputChange} inputProps={{ 'aria-label': 'description' }} />
                                </div>
    
                                <Button onClick={this.handleSubmit} variant="contained" color="primary">Submit</Button>
                                <span style={{color: 'red'}}><br />{this.submitMessage}</span>
                            </div>
    
                        </form>
                    </Box>
    
                </Container>
                
            </Layout>
            
      );
    }
}

export default MemberForm;

/*const errorMessages = {
    name: "",
    email: "",
    collegeID: "",
    about: ""
}*/
