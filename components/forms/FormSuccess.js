import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Container, Typography, Button } from '@material-ui/core';
import Link from 'next/link'

const FormSuccess = ({ values }) => {
    return(
    <Container style={{textAlign : 'center', padding : '2em 0px'}}>
        <CheckCircleIcon style={{width : '160px', height : '160px', color : 'green'}}/>
        <Typography variant="h4">Congratulations {values.firstname}! </Typography>
        <Link href="/"><Button>Return Home</Button></Link>
    </Container>
    )
}


export default FormSuccess;