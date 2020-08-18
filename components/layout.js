import Navbar from './navbar';
import { Box } from '@material-ui/core';
import Footer from './footer';

const Layout = (props) => {
    return(
    <Box color="background">
        <Navbar />
        {props.children}
        <Footer />
    </Box>)
}

export default Layout;