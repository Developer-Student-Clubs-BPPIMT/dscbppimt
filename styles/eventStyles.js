
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
})

export default styles 