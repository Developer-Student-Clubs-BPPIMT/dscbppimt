import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { Container, Typography, Button } from '@material-ui/core';
import Link from 'next/link'

const FormSuccess = ({ values, status }) => {
    const resText = status === 200 ? 'Congratulations' : status === 500 ? "Already Registered" : "Try Again Later";
    return(
    <Container style={{textAlign : 'center', padding : '2em 0px'}}>
        { status !== 200 ? <CancelIcon style={{width : '160px', height : '160px', color : 'red'}}/> : <CheckCircleIcon style={{width : '160px', height : '160px', color : 'green'}}/>}
        <Typography variant="h4">{resText}</Typography>
        <Link href="/"><Button>Return Home</Button></Link>
    </Container>
    )
}


export default FormSuccess;