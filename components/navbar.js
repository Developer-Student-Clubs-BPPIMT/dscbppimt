import { AppBar, Toolbar, Typography, Grid, Link, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import styles from '../styles/Layout.module.css'
import DscLogo from '../public/svgs/dsc.svg'
 
import React, { useState } from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookIcon from '@material-ui/icons/Book';

const Navbar = () => {
    const [ navState, navToggle ] = useState(false)

    return(
    <AppBar position="sticky" style={{background : "white"}}>
        <Toolbar>
            <Grid container>
                <Grid item xs={2} className={styles.navToggle}>
                        <IconButton onClick={() => navToggle(true)}><MenuIcon /></IconButton>
                        <Drawer anchor='left' open={navState} onClose={() => navToggle(false)}>
                            <List>
                                <ListItem><Typography variant="h6">DSC BPPIMT</Typography></ListItem>
                                <DrawerItem label="Home" icon={<HomeIcon />}/>
                                <DrawerItem label="Contact" icon={<ContactsIcon />}/>
                                <DrawerItem label="About" icon={<InfoIcon />}/>
                                <DrawerItem label="Resources" icon={<LibraryBooksIcon />}/>
                                <DrawerItem label="Blogs" icon={<BookIcon />}/>
                            </List>
                        </Drawer>
                </Grid>
                <Grid item xs={5} style={{display : 'flex', alignItems: 'center'}}>
                    <Typography variant="h6">
                        <DscLogo style={{marginRight : '10px', width : '1.5em'}}/>
                        DSC BPPIMT
                    </Typography>
                </Grid>
                <Grid item xs={7} container alignItems="center" spacing="3" justify="flex-end" className={styles.nav}>
                    <Grid item>
                        <Link href="#">Home</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#">Team</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#">Resources</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#">Blogs</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#">Contact</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#">About</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>)
}

export default Navbar;


const DrawerItem = (props) => {
    return(
    <ListItem style={{width : '300px'}}>
        <ListItemIcon>{props.icon === undefined ? <MenuIcon /> : props.icon}</ListItemIcon>
    <ListItemText>{props.label}</ListItemText>
    </ListItem>)
}

