const styles = theme => ({
    box:{
        display: "flex",
        flexDirection : "column",
        alignItems:"center",
        fontFamily: "Roboto"
    },
    pastBox: {
        display: "flex",
        justifyContent: "center",
        height : "50vh",
        backgroundColor: "#dddddd",
    },
    header:{
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]:{
            marginTop: "0",
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
        },

    },
    container :{
        display : "flex",
        padding: "20px",
        flexDirection: "column",
        width: "80%",
        justfyContent: "flex-start",
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            alignItems: "center"
        },

    }
})

export default styles