import { Card, CardContent, Box, Container, Grid, Typography, MenuItem, Button, LinearProgress, InputLabel, Stepper, Step, StepLabel, FormControlLabel, Radio, Menu, CircularProgress, FormHelperText } from '@material-ui/core'
import Layout from '../components/layout'
import DscLogo from '../public/svgs/dsc.svg'
import styles from '../styles/Layout.module.css'
import { useState } from 'react'
import * as Yup from 'yup'
import { FormikStepper } from '../components/FormikStepper';
import FormStepOne from '../components/forms/FormStepOne';
import FormStepTwo from '../components/forms/FormStepTwo';
import FormSuccess from '../components/forms/FormSuccess';


import axios from 'axios';


const MemberForm = () => {
    const initState = {
        firstname: '',
        lastname : '',
        email: '',
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
    }

    const formOneValidation = Yup.object().shape({
        firstname : Yup.string("First Name").required("Required"),
        lastname : Yup.string("Last Name").required("Required"),
        email : Yup.string("Enter your Email").email("Enter a valid Email").required("Required"),
        college : Yup.string("College Name").required("Required"),
        year : Yup.string("Academic Year").required(true),
        stream : Yup.string("Stream").required(true),
        github : Yup.string("Github URL").url("Not a Valid URL"),
        codechef : Yup.string("Codechef URL").url("Not a Valid URL"),
        hackerrank : Yup.string("Hackerrank URL").url("Not a Valid URL"),
        linkedin : Yup.string("LinkedIn URL").url("Not a Valid URL")
    })

    const formTwoValidation = Yup.object().shape({
        volunteer: Yup.string().required(true),
        about: Yup.string().required("Required"),
        joinReason: Yup.string().required("Required"),
        core: Yup.string().notRequired(),
        coreReason: Yup.string().notRequired(),
        referral: Yup.string().notRequired(),
    })

    const renderFormikForm = (step, values, errors, touched, status) => {
        switch(step){
          case 0:
            return <FormStepOne errors={errors} touched={touched} />
          case 1:
            return <FormStepTwo errors={errors} touched={touched} />
          case 2:
            return <FormSuccess values={values} status={status}/>
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
        <Box style={{maxWidth : '850px', margin : '2em auto', marginBottom : '5em'}}>
            <Card>
                <CardContent style={{padding : '1.3em'}}>
                    <FormikStepper initialValues={initState} renderFormikForm={renderFormikForm} onSubmit={async (values, helpers) => {
                        console.log(helpers)
                        const body = {
                            name : values.firstname + ' ' + values.lastname,
                            email: values.email,
                            stream: values.stream,
                            year: values.year,
                            college: values.college,
                            github: values.github,
                            linkedin: values.linkedin,
                            codechef: values.codechef,
                            hackerrank: values.hackerrank,
                            volunteer: values.volunteer,
                            about: values.about,
                            joinReason: values.joinReason,
                            core: values.core,
                            coreReason: values.coreReason,
                            referral: values.referral,
                        }
                        try{
                            const response = await axios.post('https://dscbppimt-cms.herokuapp.com/members', body)
                            helpers.setStatus(response.status)
                        } catch(e){
                            helpers.setStatus(e.response.status)
                        }
                        
                    }} labels={["Personal Information", "General Information", "Finished"]} validationSchemas={[formOneValidation, formTwoValidation]}></FormikStepper>
                </CardContent>
            </Card>
        </Box>
    </Layout>
    );
}

export default MemberForm



