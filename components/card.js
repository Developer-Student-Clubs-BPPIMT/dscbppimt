import { Card, Typography, CardContent, CardMedia, Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from '../styles/Card.module.css'
import Message from '../public/svgs/message.svg'
import placeholder from '../public/images/placeholder.jpg'
import sample from '../public/svgs/message.svg'

export const AboutCard = () => {
    return(
    <Card className={styles.aboutCard}>
        <Message />
        <Typography variant="subtitle1" component="h5">Talks</Typography>
        <Typography variant="body2" component="p">Get updated with the latest news and announcements</Typography>
    </Card>)
}

export const ContactCard = (props) => {
    const router = useRouter()

    const routeHandler = () => {
        router.push(props.actionLink)
    }
    return(
    <Card style={{display : 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <CardMedia image={placeholder} style={{height : '200px'}}></CardMedia>
        <CardContent style={{width : '100%', display : 'flex', flexDirection : 'column'}}>
            <Typography variant="subtitle1" style={{fontWeight : '600'}}>Why DSC?</Typography>
            <Typography variant="body2">Get updated with the latest news and announcements. Get updated with the latest news and announcements. Get updated with the latest news and announcements.t news and announcements</Typography>
            <Button variant="contained" color="primary" style={{margin : '0px auto', marginTop : '2em'}} onClick={routeHandler}>{props.action}</Button>
        </CardContent>
    </Card>)
}