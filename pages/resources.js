import { Container, withStyles, Card } from "@material-ui/core";
import resources from "../components/helper/resourcesHelper";
import Layout from "../components/layout";
import { useState } from "react";
import MediaCard from "../components/ResourcesCard";
import ResourceDropdown from "../components/ResourceDialogue";




const styles = theme => ({ 
    buttons : {
        margin: "10% 0 5% 0",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        height: "5vh",
        "& button":{
            boxShadow: "1px 3px 5px 0px rgba(102,98,102,0.58)",
            margin: "0 2%",
            width: "16%",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: "1rem",
            background: "#1FA9E5",

        },
        [theme.breakpoints.down("md")]:{
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
        [theme.breakpoints.up("lg")]:{
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

                <button onClick={handleALL}>All</button>
                <button onClick={handleCodingSites}>Coding Sites</button>
                <button onClick={handleUx}>UI/UX</button>
                <button onClick={handleCodingChannels}>Coding Channels</button>
                <button onClick={handleResearchPapers}>Research Papers</button>
                <button onClick={handleMiscellaneous}>Miscellaneous</button>

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
                        id={data.id}
                        image={data.image}
                    />
                </div>
            ))}
            </div>
        </Container>
        </Layout>
   )
}

export default withStyles(styles)(Resources);