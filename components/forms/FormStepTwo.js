import { Card, CardContent, Box, Container, Grid, Typography, MenuItem, Button, LinearProgress, InputLabel, Stepper, Step, StepLabel, FormControlLabel, Radio, Menu, CircularProgress, FormHelperText } from '@material-ui/core'
import { Formik, Form, Field } from 'formik';
import { TextField, RadioGroup, Select } from 'formik-material-ui'

const FormStepTwo = ({ errors, touched }) => {
    return(
        <Grid container spacing={4}>
        <Grid item xs={12}>
        <InputLabel>Would you love to volunteer for DSC BPPIMT?</InputLabel>
    <Field
        required
        row
        name="volunteer"
        component={RadioGroup}>
          <FormControlLabel label="Yes" value="yes" control={<Radio />}/>
          <FormControlLabel label="No" value="no" control={<Radio />}/>
          <FormControlLabel label="Maybe" value="maybe" control={<Radio />}/>
      </Field>
    { errors.volunteer && touched.volunteer && <FormHelperText error>Required</FormHelperText>}
    </Grid>
    <Grid item xs={12}>
        <Field component={TextField} required name="joinReason" type="joinReason" label="Why would you want to join DSC?" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
    </Grid>
    <Grid item xs={12}>
        <Field required component={TextField} name="about" type="about" label="Tell us a little something about yourself" helperText="Add a fun fact maybe :)" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
    </Grid>
    <Grid item xs={12}>
        <InputLabel>Would you be eager to join the core?</InputLabel>
        <Typography variant="body2" style={{color : 'gray', marginTop : '4px', marginBottom : '8px'}}>The core committee leads the several smaller teams of Design, Web, App, Outreach and ensures the proper management of the entire club.</Typography>
        <Field
            row
            name="core"
            component={RadioGroup}>
            <FormControlLabel label="Yes" value="yes" control={<Radio />}/>
            <FormControlLabel label="No" value="no" control={<Radio />}/>
            <FormControlLabel label="Maybe" value="maybe" control={<Radio />}/>
        </Field>
        { errors.core && <FormHelperText error>Required</FormHelperText>}
    </Grid>
    <Grid item xs={12}>
        <Field component={TextField} name="coreReason" type="coreReason" helperText="Please mention the area of your expertise and what would you wish to contribute to the community." label="If so, why?" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
    </Grid>
    <Grid item xs={12}>
        <Field component={TextField} name="referral" type="referral" helperText="Please provide their name or email" label="Who referred you to this Club? (if anyone!)" InputLabelProps={{shrink: true,}} placeholder="Your Answer" fullWidth/>
    </Grid>
        </Grid>
    );
}


export default FormStepTwo