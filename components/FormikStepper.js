import { Button, Grid, Stepper, Step, StepLabel, LinearProgress } from '@material-ui/core'
import { Form, Formik } from 'formik';
import { useState } from 'react';


export function FormikStepper({ children, ...props}) {
    console.log(props.renderFormikForm)
    const [step, setStep] = useState(0);
    const [completed, setCompleted] = useState(false);
  
    function isLastStep() {
      return step === props.labels.length - 2;
    }
    return (
      <Formik
        {...props}
        validationSchema={props.validationSchemas[step]}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            helpers.setSubmitting(true);
            try{
              await props.onSubmit(values, helpers);
            }catch(e){
              console.log(e)
            }
            helpers.setSubmitting(false);
            setStep((s) => s + 1);
            setCompleted(true);
          } else {
            setStep((s) => s + 1);
          }
        }}
      >
        {({ values, isSubmitting, errors, touched, status }) => (
          <Form autoComplete="off" noValidate>
            { isSubmitting && <LinearProgress />}
            <Stepper alternativeLabel activeStep={step}>
              {props.labels.map((index) => (
                <Step key={index} completed={step > index || completed}>
                  <StepLabel>{index}</StepLabel>
                </Step>
              ))}
            </Stepper>
  
            { props.renderFormikForm(step, values, errors, touched, status) }
            { step <= props.labels.length - 2 &&
              <Grid container spacing={2} justify="flex-end" style={{marginTop : '2em'}}>
              {step > 0 ? (
                <Grid item>
                  <Button
                    style={{width : '110px'}}
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    onClick={() => setStep((s) => s - 1)}
                  >
                    Back
                  </Button>
                </Grid>
              ) : null}
              <Grid item>
                <Button
                  style={{width : '110px'}}
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {isSubmitting ? 'Submitting' : step === props.labels.length - 2 ? 'Submit' : 'Next'}
                </Button>
              </Grid>
            </Grid>
            }

          </Form>
        )}
      </Formik>
    );
  }