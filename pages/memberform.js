import { Container,  Grid, Typography, Paper, Button } from "@material-ui/core";
import Layout from '../components/layout';
import styles from '../styles/Layout.module.css';
import TeamArt from '../public/svgs/teamart.svg';
import DscLogo from '../public/svgs/dsc.svg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


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
                        <Grid item><Typography variant="body2">Google collaborates with university students who are passionate about growing developer communities and supports them with starting student clubs on their campuses.</Typography></Grid>
                        <Grid item>
                            <Typography variant="body2"><br />
                                DSC BPPIMT will be organizing workshops that will be covering topics like Web & Mobile Development, Machine Learning, Artificial Intelligence, Cloud, and the latest Google Technologies. We collaborate and build projects, work on personal development to ensure that we deliver smart technological solutions to local issues, and beyond.  
                            </Typography></Grid>
                        <Grid item><Typography variant="body2"><br />Fill up the form & join us !</Typography></Grid>
                    </Grid>
                    <Grid item xs={12} md style={{display : 'flex', alignItems : 'center'}}><DscLogo style={{width : "100%", height : '80%'}}/></Grid>
                </Grid>

                <br />
                
                <Paper elevation={2}>

                    <form className={classes.root} noValidate autoComplete="off">
                        <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />

                    </form>

                </Paper>

            </Container>
            
        </Layout>
        
  );
}