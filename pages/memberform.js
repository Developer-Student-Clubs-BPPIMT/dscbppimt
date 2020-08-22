import { Card, CardContent, Box, Container, TextField, Grid, Typography, MenuItem, Button, RadioGroup, FormControlLabel, Radio, InputLabel, FormControl, Grow } from '@material-ui/core'
import Layout from '../components/layout'
import DscLogo from '../public/svgs/dsc.svg'
import styles from '../styles/Layout.module.css'
import { useState } from 'react'


const MemberForm = () => {
    const [ formState, changeForm ] = useState({
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
    })
    const [ formView, changeView ] = useState('personal');
    const formStep1 = (
    <form>
        <Typography variant="h5" style={{fontWeight : '500'}} style={{marginBottom : '1em'}}>Step 1 : Personal Information</Typography>
        <Grid container spacing={4}>
            <Grid item container spacing={2}>
                <Grid item xs><TextField required id="First Name" label="First Name" color="secondary" placeholder="First Name" fullWidth/></Grid>
                <Grid item xs><TextField required id="First Name" label="Last Name" color="secondary" placeholder="Last Name" fullWidth/></Grid>
            </Grid>
            <Grid item xs={12}><TextField required id="Email" label="Email" color="secondary" placeholder="Email" fullWidth/></Grid>
            <Grid item xs={12}><TextField required id="CollegeID" label="College ID" color="secondary" placeholder="College ID" fullWidth/></Grid>
            <Grid item container spacing={2}>
                <Grid item xs>
                    <TextField required select id="Stream" label="Stream" color="secondary" placeholder="Stream" fullWidth>
                        <MenuItem value="AEIE" key="AEIE"></MenuItem>
                        <MenuItem value="BBA" key="BBA">BBA</MenuItem>
                        <MenuItem value="BCA" key="BCA">BCA</MenuItem>
                        <MenuItem value="BME" key="BME">BME</MenuItem>
                        <MenuItem value="CE" key="CE">CE</MenuItem>
                        <MenuItem value="CSE" key="CSE">CSE</MenuItem>
                        <MenuItem value="ECE" key="ECE">ECE</MenuItem>
                        <MenuItem value="EE" key="EE">EE</MenuItem>
                        <MenuItem value="IT" key="IT">IT</MenuItem>
                        <MenuItem value="MBA" key="MBA">MBA</MenuItem>
                        <MenuItem value="MCA" key="MCA">MCA</MenuItem>
                        <MenuItem value="ME" key="ME">ME</MenuItem>
                        <MenuItem value="other" key="Other">Other</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs>
                <TextField required select id="Year" label="Year" color="secondary" placeholder="Year" fullWidth>
                        <MenuItem value="1" key="1">1st Year</MenuItem>
                        <MenuItem value="2" key="2">2nd Year</MenuItem>
                        <MenuItem value="3" key="3">3rd Year</MenuItem>
                        <MenuItem value="4" key="4">4th Year</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}><TextField required id="Github URL" label="Github URL" color="secondary" placeholder="github.io/username" fullWidth/></Grid>
                <Grid item xs={12}><TextField required id="LinkedIn URL" label="LinkedIn URL" color="secondary" placeholder="linkedin.com/username" fullWidth/></Grid>
                <Grid item xs={12}><TextField required id="CodeChef URL" label="CodeChef URL" color="secondary" placeholder="codechef.com/username" fullWidth/></Grid>
                <Grid item xs={12}><TextField required id="HackerRank URL" label="HackerRank URL" color="secondary" placeholder="hackerrank.com/username" fullWidth/></Grid>
            </Grid>
            <Grid item style={{width : '100%', display : 'flex', justifyContent : 'flex-end', marginTop : '1.5em'}}>
                <Button variant="contained" color="primary" style={{width : '136px'}} onClick={() => changeView('general')}>Next</Button>
            </Grid>
        </Grid>
    </form>);

const formStep2 = (
    <form>
        <Typography variant="h5" style={{fontWeight : '500'}} style={{marginBottom : '1em'}}>Step 2 : General Information</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <FormControl>
                    <h3 for="my-input" style={{margin : '2px 0px'}}>Would you love to volunteer for DSC BPPIMT ?</h3>
                    <RadioGroup row required>
                        <FormControlLabel labelPlacement="end" value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel labelPlacement="end" value="no" control={<Radio />} label="No" />
                        <FormControlLabel labelPlacement="end" value="maybe" control={<Radio />} label="Maybe" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                    <h3 for="my-input" style={{margin : '2px 0px'}}>Tell us a little something about yourself (add a fun fact maybe) *</h3>
                    <TextField required id="CollegeID" color="secondary" placeholder="College ID" fullWidth/>
            </Grid>

            <Grid item xs={12}>
                    <h3 for="my-input" style={{margin : '2px 0px'}}>Why would you like to join DSC ?</h3>
                    <TextField required id="CollegeID" color="secondary" placeholder="College ID" fullWidth/>
            </Grid>

            <Grid item xs={12}>
                <FormControl>
                    <h3 for="my-input" style={{margin : '2px 0px'}}>Would you be eager to join the core ?</h3>
                    <Typography variant="body2">The core committee leads the several smaller teams of Design, Web, App, Outreach and ensures the proper management of the entire club.</Typography>
                    <RadioGroup row required>
                        <FormControlLabel labelPlacement="end" value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel labelPlacement="end" value="no" control={<Radio />} label="No" />
                        <FormControlLabel labelPlacement="end" value="maybe" control={<Radio />} label="Maybe" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                    <h3 for="my-input" style={{margin : '2px 0px'}}>If so, Why ?</h3>
                    <TextField required id="CollegeID" color="secondary" placeholder="College ID" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                    <h3 for="my-input" style={{margin : '2px 0px'}}>Who referred you to this Club? (if anyone!)</h3>
                    <TextField required id="CollegeID" color="secondary" placeholder="College ID" fullWidth/>
            </Grid>
            <Grid item style={{width : '100%', display : 'flex', justifyContent : 'flex-end', marginTop : '2em'}}>
                <Button variant="contained" style={{width : '136px'}} onClick={() => changeView('personal')}>Back</Button>
                <Button variant="contained" color="primary" style={{width : '136px', marginLeft : '1em'}} onClick={() => changeView('preview')}>Submit</Button>
            </Grid>
        </Grid>
    </form>);

    const preview = (
<form>
        <Typography variant="h5" style={{fontWeight : '500'}} style={{marginBottom : '1em'}}>Step 3 : Preview Information</Typography>
        <Grid container spacing={3}>
            <Grid item style={{width : '100%', display : 'flex', justifyContent : 'flex-end', marginTop : '2em'}}>
                <Button variant="contained" style={{width : '136px'}} onClick={() => changeView('personal')}>Back</Button>
                <Button variant="contained" color="primary" style={{width : '136px', marginLeft : '1em'}} onClick={() => changeView('preview')}>Submit</Button>
            </Grid>
        </Grid>
    </form>);



    const renderView = (view) => {
        switch(view){
            case 'personal':
                return formStep1;
            case 'general':
                return formStep2;
            case 'preview':
                return preview
            default:
                break;
        }
    }

    return(
    <Layout>
        <Container>
            <Grid className={styles.header} container wrap="wrap-reverse" justify="center" style={{margin : '4em 0px'}}>
                <Grid item container direction="column" xs={12} md={8} justify="center" component="div">
                    <Grid item style={{marginBottom : "2em"}}><Typography variant="h5" component="h5">DSC BPPIMT <span>Membership</span> Registration</Typography></Grid>
                    <Grid item><Typography variant="body2" style={{textAlign : "justify"}}>Google collaborates with university students who are passionate about growing developer communities and supports them with starting student clubs on their campuses.</Typography></Grid>
                    <Grid item>
                        <Typography variant="body2" style={{textAlign : "justify"}}><br />
                            DSC BPPIMT will be organizing workshops that will be covering topics like Web & Mobile Development, Machine Learning, Artificial Intelligence, Cloud, and the latest Google Technologies. We collaborate and build projects, work on personal development to ensure that we deliver smart technological solutions to local issues, and beyond.  
                        </Typography></Grid>
                </Grid>
                <Grid item xs={12} md={4} style={{display : 'flex', alignItems : 'center'}}><DscLogo style={{width : "100%", height : '80%'}}/></Grid>
            </Grid>
        </Container>
        <Box style={{maxWidth : '850px', margin : '2em auto'}}>
            <Card>
                <CardContent style={{padding : '1.3em'}}>
                    {renderView(formView)}
                </CardContent>
            
            </Card>
        </Box>
    </Layout>
    );
}

export default MemberForm