import Navbar from './navbar';
import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Footer from './footer';
import styles from '../styles/Layout.module.css'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookIcon from '@material-ui/icons/Book';

const Layout = (props) => {
    return(
    <Paper elevation={0} square>
        <Navbar />
        {props.children}
        <Footer />
        <Box className={styles.bottomNav}>
            <BottomNavigation position="sticky" showLabels component="nav">
                <BottomNavigationAction component='div' label="Home" icon={<HomeIcon />} style={{padding : '0px', margin : '0px'}}/>
                <BottomNavigationAction component='div' label="About" icon={<InfoIcon />} />
                <BottomNavigationAction component='div' label="Events" icon={<BookIcon />} />
                <BottomNavigationAction component='div' label="Contact" icon={<FavoriteIcon />} />
                <BottomNavigationAction component='div' label="Contact" icon={<FavoriteIcon />} />
            </BottomNavigation>
        </Box>
    </Paper>)
}

export default Layout;