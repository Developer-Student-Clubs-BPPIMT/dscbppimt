import Navbar from './navbar';
import { useRouter } from 'next/router'
import { makeStyles, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import Footer from './footer';
import styles from '../styles/Layout.module.css'

import HomeIcon from '@material-ui/icons/Home'
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';


const useStyles = makeStyles((theme) => ({
    bottomNavigation : {
        backgroundColor : theme.palette.secondary.main
    }
}))

const Layout = (props) => {
    const classes = useStyles()
    const router = useRouter()

    return(
        <Box>
                <Box style={{minHeight : '100vh', display : 'flex', flexDirection : 'column'}}>
                <Navbar />
                <div style={{flex : '1'}}>
                {props.children}
                </div>
                <Box className={styles.bottomNav}>
                    <BottomNavigation position="sticky" showLabels component="nav" className={classes.bottomNavigation}>
                        <BottomNavigationAction component='div' label="About" icon={<InfoIcon />} onClick={() => router.push('/about')}/>
                        <BottomNavigationAction component='div' label="Events" icon={<BookIcon />} onClick={() => router.push('/events')}/>
                        <BottomNavigationAction component='div' label="Home" icon={<HomeIcon />} onClick={() => router.push('/')}/>
                        <BottomNavigationAction component='div' label="Blogs" icon={<BookIcon />} onClick={() => router.push('/blogs')}/>
                        <BottomNavigationAction component='div' label="Contact" icon={<ContactsIcon />} onClick={() => router.push('/contact')}/>
                    </BottomNavigation>
                </Box>
                <Footer />
                </Box>
            </Box>)
}

export default Layout;