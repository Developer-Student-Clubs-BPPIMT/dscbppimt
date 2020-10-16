import { makeStyles, AppBar, Toolbar, Typography, Grid, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core'
import Link from 'next/link'
import DscLogo from '../public/svgs/dsc.svg'
import Brightness6Icon from '@material-ui/icons/Brightness6';

import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router' 
import styles from '../styles/Layout.module.css'
import GroupIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookIcon from '@material-ui/icons/Book';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import useDarkMode from 'use-dark-mode';

const useStyles = makeStyles((theme) => ({
    navToggle : {
        display : 'none',
        [theme.breakpoints.down('sm')]: {
            display : 'block',
        },
    }
}));


const Navbar = () => {
    const [ navState, navToggle ] = useState(false)
    const darkMode = useDarkMode(false);
    const classes = useStyles()
    return(
    <AppBar position="sticky" color="secondary">
        <Toolbar className={styles.navToolbar} style={{margin : '0', height : '100%', position : 'relative'}}>
            <Box>
                <IconButton onClick={() => navToggle(true)} className={classes.navToggle}><MenuIcon /></IconButton>
                <Drawer anchor='left' open={navState} onClose={() => navToggle(false)}>
                    <List>
                        <ListItem><Typography variant="h6" style={{fontWeight : '800'}}>DSC BPPIMT</Typography></ListItem>
                        <DrawerItem label="Home" icon={<HomeIcon />} link="/"/>
                        <DrawerItem label="Resources" icon={<LibraryBooksIcon /> } link='/resources'/>
                        <DrawerItem label="Blogs" icon={<BookIcon />} link='/blogs'/>
                        <DrawerItem label="Events" icon={<EmojiEventsIcon />} link='/events'/>
                        <DrawerItem label="Teams" icon={<GroupIcon />} link='/team'/>
                        <DrawerItem label="Contact" icon={<ContactsIcon />} link='/contact'/>
                        <DrawerItem label="About" icon={<InfoIcon />} link='/about'/>
                    </List>
                </Drawer>
            </Box>
            <Grid container>

            <Grid item xs={12} sm={5}style={{display : 'flex', alignItems: 'center'}}>
                <Link href="/"><Typography variant="h6" style={{cursor : 'pointer', marginLeft : '.4em'}} noWrap>
                    <DscLogo style={{marginRight : '10px', width : '1.5em'}}/>
                    DSC BPPIMT
                </Typography></Link>
            </Grid>
            <Grid item xs={7} container alignItems="center" spacing={3} justify="flex-end" className={styles.nav}>
                <Grid item>
                    <Link href="/"><Typography variant="body2" style={{cursor : 'pointer'}}>Home</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/team"><Typography variant="body2" style={{cursor : 'pointer'}}>Team</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/resources"><Typography variant="body2" style={{cursor : 'pointer'}}>Resources</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/events"><Typography variant="body2" style={{cursor : 'pointer'}}>Events</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/blogs"><Typography variant="body2" style={{cursor : 'pointer'}}>Blogs</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/contact"><Typography variant="body2" style={{cursor : 'pointer'}}>Contact</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/about"><Typography variant="body2" style={{cursor : 'pointer'}}>About</Typography></Link>
                </Grid>
            </Grid>
        </Grid>
            <IconButton onClick={() => darkMode.toggle()}><Brightness6Icon /></IconButton>
        </Toolbar>
    </AppBar>)
}

export default Navbar;


const DrawerItem = (props) => {
    const router = useRouter()
    return(
    <ListItem style={{width : '250px', cursor: 'pointer'}} onClick={() => router.push(props.link)}>
        <ListItemIcon>{props.icon === undefined ? <MenuIcon /> : props.icon}</ListItemIcon>
    <ListItemText>{props.label}</ListItemText>
    </ListItem>)
}

