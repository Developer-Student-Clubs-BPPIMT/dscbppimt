import { makeStyles, useTheme, AppBar, Toolbar, Typography, Grid, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Link from 'next/link'
import DscLogo from '../public/svgs/dsc.svg'
 
import React, { useState } from 'react'
import { useRouter } from 'next/router' 
import styles from '../styles/Layout.module.css'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookIcon from '@material-ui/icons/Book';



const Navbar = () => {
    const [ navState, navToggle ] = useState(false)
    return(
    <AppBar position="sticky" color="secondary">
        <Toolbar className={styles.navToolbar}>
            <Grid container>
                <Grid item xs={1} className={styles.navToggle}>
                        <IconButton onClick={() => navToggle(true)}><MenuIcon /></IconButton>
                        <Drawer anchor='left' open={navState} onClose={() => navToggle(false)}>
                            <List>
                                <ListItem><Typography variant="h6" style={{fontWeight : '800'}}>DSC BPPIMT</Typography></ListItem>
                                <DrawerItem label="Home" icon={<HomeIcon />} link="/"/>
                                <DrawerItem label="Resources" icon={<LibraryBooksIcon /> } link='/resources'/>
                                <DrawerItem label="Blogs" icon={<BookIcon />} link='/blogs'/>
                                <DrawerItem label="Events" icon={<BookIcon />} link='/events'/>
                                <DrawerItem label="Teams" icon={<InfoIcon />} link='/team'/>
                                <DrawerItem label="Contact" icon={<ContactsIcon />} link='/contact'/>
                                <DrawerItem label="About" icon={<InfoIcon />} link='/about'/>
                            </List>
                        </Drawer>
                </Grid>
                <Grid item xs={10} sm={4} style={{display : 'flex', alignItems: 'center'}}>
                    <Link href="/"><Typography variant="h6" style={{cursor : 'pointer', marginLeft : '1.3em'}} noWrap>
                        <DscLogo style={{marginRight : '10px', width : '1.5em'}}/>
                        DSC BPPIMT
                    </Typography></Link>
                </Grid>
                <Grid item sm={8} container alignItems="center" spacing={3} justify="flex-end" className={styles.nav}>
                    <Grid item>
                        <Link href="/"><a style={{color : 'white'}}>Home</a></Link>
                    </Grid>
                    <Grid item>
                        <Link href="/team"><a style={{color : 'white'}}>Team</a></Link>
                    </Grid>
                    <Grid item>
                        <Link href="/resources"><a style={{color : 'white'}}>Resources</a></Link>
                    </Grid>
                    <Grid item>
                        <Link href="/events"><a style={{color : 'white'}}>Events</a></Link>
                    </Grid>
                    <Grid item>
                        <Link href="/blogs"><a style={{color : 'white'}}>Blogs</a></Link>
                    </Grid>
                    <Grid item>
                        <Link href="/contact"><a style={{color : 'white'}}>Contact</a></Link>
                    </Grid>
                    <Grid item>
                        <Link href="/about"><a style={{color : 'white'}}>About</a></Link>
                    </Grid>
                </Grid>
            </Grid>
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

