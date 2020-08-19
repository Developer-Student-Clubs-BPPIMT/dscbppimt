import Navbar from './navbar';
import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Footer from './footer';
import styles from '../styles/Layout.module.css'

const Layout = (props) => {
    return(
    <Paper elevation={0} square>
        <Navbar />
        {props.children}
        <Footer />
        <Box className={styles.bottomNav}>
            <BottomNavigation position="sticky" showLabels>
                <BottomNavigationAction label="Recents" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<FavoriteIcon />} />
            </BottomNavigation>
        </Box>
    </Paper>)
}

export default Layout;