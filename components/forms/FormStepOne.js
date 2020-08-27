import { Grid, Typography, MenuItem, InputLabel, FormHelperText } from '@material-ui/core'
import { Formik, Form, Field } from 'formik';
import { TextField, RadioGroup, Select } from 'formik-material-ui'

const formStepOne = ({ errors, touched }) => {
    return(
        <Grid container spacing={3}>
        <Grid item container spacing={3}>
            <Grid item xs>
                <Field required component={TextField} name="firstname" type="firstname" label="First Name" placeholder="John" InputLabelProps={{shrink: true,}} fullWidth/>
            </Grid>
            <Grid item xs>
                <Field required component={TextField} name="lastname" type="lastname" label="Last Name" InputLabelProps={{shrink: true,}} placeholder="Doe" fullWidth/>
            </Grid>
        </Grid>
        <Grid item container>
            <Field required component={TextField} name="email" type="email" label="Email" InputLabelProps={{shrink: true,}} placeholder="johndoe@gmail.com" fullWidth/>
        </Grid>
        <Grid item container>
            <Field required component={TextField} name="college" type="college" label="College Name" InputLabelProps={{shrink: true,}} placeholder="B.P Poddar Institute of Management and Technology" fullWidth/>
        </Grid>
        <Grid item container spacing={3}>
            <Grid item xs>
                <InputLabel style={{fontSize : '12px'}} error={errors.stream && touched.stream}>Stream</InputLabel>
                <Field required component={Select} name="stream" type="text" error={errors.stream && touched.stream} fullWidth>
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
                { errors.stream && touched.stream && <FormHelperText error>Required</FormHelperText>}
            </Grid>
            <Grid item xs>
                <InputLabel required style={{fontSize : '12px'}} error={errors.year && touched.year}>Year</InputLabel>
                <Field component={Select} name="year" type="text" error={errors.year && touched.year} label="Year" fullWidth>
                    <MenuItem value="1st Year" key="1">1st Year</MenuItem>
                    <MenuItem value="2nd Year" key="2">2nd Year</MenuItem>
                    <MenuItem value="3rd Year" key="3">3rd Year</MenuItem>
                    <MenuItem value="4th Year" key="4">4th Year</MenuItem>
                </Field>
                { errors.year && touched.year && <FormHelperText error>Required</FormHelperText>}
            </Grid>
        </Grid>
        <Grid item container>
            <Field component={TextField} name="github" type="github" label="Github Profile" InputLabelProps={{shrink: true,}} placeholder="http://www.github.com/username" fullWidth/>
        </Grid>
        <Grid item container>
            <Field component={TextField} name="linkedin" type="linkedin" label="LinkedIn Profile" InputLabelProps={{shrink: true,}} placeholder="http://www.linkedin.com/username" fullWidth/>
        </Grid>
        <Grid item container>
            <Field component={TextField} name="codechef" type="codechef" label="Codechef Profile" InputLabelProps={{shrink: true,}} placeholder="http://www.codechef.com/username" fullWidth/>
        </Grid>
        <Grid item container>
            <Field component={TextField} name="hackerrank" type="hackerrank" label="Hackerrank Profile" InputLabelProps={{shrink: true,}} placeholder="http://www.hackerrank.com/username" fullWidth/>
        </Grid>
    </Grid>
    );
}


export default formStepOne;