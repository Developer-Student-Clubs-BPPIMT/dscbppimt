import { Card, CardContent, Box, Container, Grid, Typography, MenuItem, Button, LinearProgress, InputLabel, FormHelperText } from '@material-ui/core'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui'
import Layout from '../components/layout'
import DscLogo from '../public/svgs/dsc.svg'
import styles from '../styles/Layout.module.css'
import { useState } from 'react'
import * as Yup from 'yup'
import FormikRadioGroup from '../components/FormikRadioGroup.js.js'


const MemberForm = () => {
    const [ view, changeView ] = useState('general')
    const [ formState, changeForm] = useState({
        firstname: '',
        lastname : '',
        email: '',
        gender: '',
        stream: '',
        year: '',
        college: '',
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
    })

    const formOneValidation = Yup.object().shape({
        firstname : Yup.string("First Name").required("Required"),
        lastname : Yup.string("Last Name").required("Required"),
        email : Yup.string("Enter your Email").email("Enter a valid Email").required("Required"),
        college : Yup.string("College Name").required("Required"),
        year : Yup.string("Academic Year").required("Required"),
        stream : Yup.string("Stream").required("Required"),
        github : Yup.string("Github URL").url("Not a Valid URL"),
        codechef : Yup.string("Codechef URL").url("Not a Valid URL"),
        hackerrank : Yup.string("Hackerrank URL").url("Not a Valid URL"),
        linkedin : Yup.string("LinkedIn URL").url("Not a Valid URL")
    })

    const formTwoValidation = Yup.object({
        volunteer: Yup.string().required("Choose a Option"),
        about: Yup.string().notRequired(),
        joinReason: Yup.string().notRequired(),
        core: Yup.string().notRequired(),
        coreReason: Yup.string().notRequired(),
        referral: Yup.string().notRequired(),
    })



    const formStep1 = (
        <Formik
        initialValues={{
            firstname: formState.firstname,
            lastname: formState.lastname,
            email : formState.email,
            year : formState.year,
            stream : formState.stream,
            college : formState.college,
            github : formState.github,
            linkedin : formState.linkedin,
            codechef : formState.codechef,
            hackerrank : formState.hackerrank,
        }}


        validationSchema={formOneValidation}
        onSubmit={async (values, {setSubmitting}) => {
            setTimeout(() => {
                setSubmitting(false);
                changeForm({...values, ...formState})
                changeView('general')
              }, 200);
        }}
        >
        {({ submitForm, isSubmitting  }) => (
            <Form>
                {isSubmitting && <LinearProgress />}
                <Typography variant="h5" style={{fontWeight : '500'}} style={{marginBottom : '1em'}}>Step 1 : Personal Information</Typography>
                <Grid container spacing={2}>
                    <Grid item container spacing={3}>
                        <Grid item xs>
                            <Field component={TextField} id="standard-full-width" name="firstname" type="firstname" label="First Name" placeholder="John" InputLabelProps={{shrink: true,}} fullWidth/>
                        </Grid>
                        <Grid item xs>
                            <Field component={TextField} name="lastname" type="lastname" label="Last Name" InputLabelProps={{shrink: true,}} placeholder="Doe" fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Field component={TextField} name="email" type="email" label="Email" InputLabelProps={{shrink: true,}} placeholder="johndoe@gmail.com" fullWidth/>
                    </Grid>
                    <Grid item container>
                        <Field component={TextField} name="college" type="college" label="College Name" InputLabelProps={{shrink: true,}} placeholder="B.P Poddar Institute of Management and Technology" fullWidth/>
                    </Grid>
                    <Grid item container spacing={3}>
                        <Grid item xs>
                            <Field select component={TextField} name="stream" type="stream" label="Stream" InputLabelProps={{shrink: true,}} fullWidth>
                                <MenuItem value="AEIE" key="AEIE">AEIE</MenuItem>
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
                            </Field>
                        </Grid>
                        <Grid item xs>
                            <Field select component={TextField} name="year" type="year" label="Year" InputLabelProps={{shrink: true,}} fullWidth>
                                <MenuItem value="1" key="1">1st Year</MenuItem>
                                <MenuItem value="2" key="2">2nd Year</MenuItem>
                                <MenuItem value="3" key="3">3rd Year</MenuItem>
                                <MenuItem value="4" key="4">4th Year</MenuItem>
                            </Field>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Field component={TextField} name="github" type="github" label="Github Profile" InputLabelProps={{shrink: true,}} placeholder="www.github.com/username" fullWidth/>
                    </Grid>
                    <Grid item container>
                        <Field component={TextField} name="linkedin" type="linkedin" label="LinkedIn Profile" InputLabelProps={{shrink: true,}} placeholder="www.linkedin.com/username" fullWidth/>
                    </Grid>
                    <Grid item container>
                        <Field component={TextField} name="codechef" type="codechef" label="Codechef Profile" InputLabelProps={{shrink: true,}} placeholder="www.codechef.com/username" fullWidth/>
                    </Grid>
                    <Grid item container>
                        <Field component={TextField} name="hackerrank" type="hackerrank" label="Hackerrank Profile" InputLabelProps={{shrink: true,}} placeholder="www.hackerrank.com/username" fullWidth/>
                    </Grid>
                    <Grid item xs={12} style={{marginTop : '2em', display : 'flex', justifyContent : 'flex-end'}}>
                        <Button onClick={submitForm} variant="contained" color="primary" style={{width : '120px'}}>Next</Button>
                    </Grid>
                </Grid>
            </Form>
        )}
        </Formik>
    );

const formStep2 = (
    <Formik
    initialValues={{
        volunteer: formState.volunteer,
        about: formState.about,
        joinReason: formState.joinReason,
        core: formState.core,
        coreReason: formState.coreReason,
        referral: formState.referral,
    }}



    validationSchema={formTwoValidation}
    onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
            setSubmitting(false);
            changeForm({...values, ...formState})
          }, 200);
    }}
    >
    {({ submitForm, isSubmitting, errors  }) => (
        <Form>
            <Typography variant="h5" style={{fontWeight : '500'}} style={{marginBottom : '1em'}}>Step 2 : General Information</Typography>
            <Grid container spacing={4}>
            <Grid item xs={12}>
            <InputLabel>Would you love to volunteer for DSC NSEC?</InputLabel>
        <Field
            row
            name="volunteer"
            component={FormikRadioGroup}
            options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
                { value: "Maybe", label: "Maybe" }
              ]}
          />
        </Grid>
        <Grid item xs={12}>
            <Field component={TextField} name="about" type="about" label="Tell us a little something about yourself (add a fun fact maybe)" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
        </Grid>
        <Grid item xs={12}>
            <Field component={TextField} name="joinReason" type="joinReason" label="Why would you want to join DSC?" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
        </Grid>
        <Grid item xs={12}>
            <InputLabel>Would you be eager to join the core?</InputLabel>
            <Typography variant="body2" style={{color : 'gray', marginTop : '4px', marginBottom : '8px'}}>The core committee leads the several smaller teams of Design, Web, App, Outreach and ensures the proper management of the entire club.</Typography>
        <Field
            row
            name="core"
            component={FormikRadioGroup}
            options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
                { value: "Maybe", label: "Maybe" }
              ]}
          />
          <FormHelperText error={true} style={{color : 'red'}}>{errors.core}</FormHelperText>
        </Grid>
        <Grid item xs={12}>
            <Field component={TextField} name="coreReason" type="coreReason" helperText="Please mention the area of your expertise and what would you wish to contribute to the community." label="If so, why?" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
        </Grid>
        <Grid item xs={12}>
            <Field component={TextField} name="referral" type="referral" helperText="Please provide their name or email" label="Who referred you to this Club? (if anyone!)" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
        </Grid>
        <Grid item xs={12} style={{marginTop : '2em', display : 'flex', justifyContent : 'flex-end'}}>
        <Button onClick={() => changeView('personal')} variant="contained" style={{width : '120px', marginRight : '1em'}}>Back</Button>
                        <Button type="submit" onClick={submitForm} variant="contained" color="primary" disabled={isSubmitting} style={{width : '120px'}}>Next</Button>
                    </Grid>
            </Grid>
        </Form>
    )}
    </Formik>);



    const renderView = (view) => {
        switch(view){
            case 'personal':
                return formStep1;
            case 'general':
                return formStep2;
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
                    { renderView(view) }
                </CardContent>
            </Card>
        </Box>
    </Layout>
    );
}

export default MemberForm