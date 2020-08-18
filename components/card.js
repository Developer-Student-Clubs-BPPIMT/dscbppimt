import { Card, Typography } from '@material-ui/core'
import styles from '../styles/Card.module.css'
import Message from '../public/svgs/message.svg'

export const AboutCard = () => {
    return(
    <Card className={styles.aboutCard}>
        <Message />
        <Typography variant="subtitle1" component="h5">Talks</Typography>
        <Typography variant="body2" component="p">Get updated with the latest news and announcements</Typography>
    </Card>)
}