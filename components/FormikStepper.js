import { Button, Grid, Stepper, Step, StepLabel, CircularProgress } from '@material-ui/core'
import { Form, Formik } from 'formik';
import { useState } from 'react';
import FormStepOne from './forms/FormStepOne';
import FormStepTwo from './forms/FormStepTwo';
import FormSuccess from './forms/FormSuccess';


export function FormikStepper({ children, ...props }) {
    const renderFormikForm = (step, values, errors, touched) => {
      switch(step){
        case 0:
          return <FormStepOne errors={errors} touched={touched} />
        case 1:
          return <FormStepTwo errors={errors} touched={touched} />
        case 2:
          return <FormSuccess values={values} />
        default:
          break;
      }
    }

    const [step, setStep] = useState(0);
    const [completed, setCompleted] = useState(false);
  
    function isLastStep() {
      return step === props.labels.length - 1;
    }
    return (
      <Formik
        {...props}
        validationSchema={props.validationSchemas[step]}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            await props.onSubmit(values, helpers);
            setCompleted(true);
          } else {
            setStep((s) => s + 1);
          }
        }}
      >
        {({ values, isSubmitting, errors, touched }) => (
          <Form autoComplete="off">
            <Stepper alternativeLabel activeStep={step}>
              {props.labels.map((index) => (
                <Step key={index} completed={step > index || completed}>
                  <StepLabel>{index}</StepLabel>
                </Step>
              ))}
            </Stepper>
  
            { renderFormikForm(step, values, errors, touched) }
            { step !== 2 &&
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
                  startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {isSubmitting ? 'Submitting' : step === 1 ? 'Submit' : 'Next'}
                </Button>
              </Grid>
            </Grid>
            }

          </Form>
        )}
      </Formik>
    );
  }