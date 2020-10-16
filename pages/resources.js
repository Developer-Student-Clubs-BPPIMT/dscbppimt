import Layout from '../components/layout'
import { Container, withStyles, Card, Button } from "@material-ui/core";
import resources from "../components/helper/resourcesHelper";
import { useState } from "react";
import MediaCard from "../components/ResourcesCard";
import ResourceDropdown from "../components/ResourceDialogue";




const styles = theme => ({ 
    buttons : {
        margin: "6% 0 5% 0",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        height: "5vh",
        [theme.breakpoints.down("sm")]:{
            display : "none"
        }

    },
    Card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap : "wrap",
    },
    resources:{
        margin : "10px",
    },
    dialogue:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]:{
            display : "none"
        }
    }
})

const Resources = ({classes}) => {
    let [totalData, setTotalData] = useState(resources);
    const findResources = (category) =>{
        let Data = []
        resources.forEach(resource =>{
            if(resource.category === category){
                Data.push(resource)
            }
        })
        return Data

    }
    const handleUx = () => {
        setTotalData( totalData = findResources("ux design"))
    }
    const handleCodingChannels = () => {
        setTotalData (totalData=findResources("Coding Channels"));

    }
    const handleResearchPapers = () => {
        setTotalData (totalData=findResources("Research Papers"));

    }
    const handleMiscellaneous = () => {
        setTotalData (totalData=findResources("Miscellanous"));

    }
    const handleCodingSites = () => {
        setTotalData (totalData=findResources("Coding Sites"));

    }

    const handleALL = () => {
        setTotalData (totalData = resources)
    }

    return (
        <Layout>
        <Container>
            <div className={classes.buttons}>

                <Button color="primary" size="large" variant="text"  onClick={handleALL}>All</Button>
                <Button color="primary" size="large" variant="text"  onClick={handleCodingSites}>Coding Sites</Button>
                <Button color="primary" size="large" variant="text"  onClick={handleUx}>UI/UX</Button>
                <Button color="primary" size="large" variant="text"  onClick={handleCodingChannels}>Coding Channels</Button>
                <Button color="primary" size="large" variant="text"  onClick={handleResearchPapers}>Research Papers</Button>
                <Button color="primary" size="large" variant="text"  onClick={handleMiscellaneous}>Miscellaneous</Button>

            </div>
            <div className={classes.dialogue}>
                <ResourceDropdown 
                    handleCodingSites={handleCodingSites}
                    handleCodingChannels = {handleCodingChannels}
                    handleUx = {handleUx}
                    handleResearchPapers={handleResearchPapers}
                    handleMiscellaneous={handleMiscellaneous}
                    handleAll={handleALL}
                />
            </div>
            <div className={classes.Card}>
            {totalData.map(data => (
                <div className={classes.resources}>
                    <MediaCard 
                        title={data.title}
                        discription={data.discription}
                        image={data.image}
                        link={data.link}
                    />
                </div>
            ))}
            </div>
        </Container>
        </Layout>
   )
}

export default withStyles(styles)(Resources);