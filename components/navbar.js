import { AppBar, Toolbar, Typography, Grid, Link } from '@material-ui/core'
import DscLogo from '../public/svgs/dsc.svg'

const Navbar = () => {
    return(
    <AppBar position="sticky" style={{background : "white"}}>
        <Toolbar>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="h6" color="text.primary">
                        <DscLogo style={{marginRight : '10px', width : '1.5em'}}/>
                        DSC BPPIMT
                    </Typography>
                </Grid>
                <Grid item xs={8} container alignItems="center" spacing="3" justify="flex-end">
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


