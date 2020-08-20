const styles = theme => ({
    card: {
        boxShadow: "1px 3px 5px 0px rgba(102,98,102,0.58)",
        borderRadius: "15px",
        fontFamily: "Roboto , sans-serif",
        margin: "20px",
        padding: "20px",
        
    },
    header:{
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]:{
            display: "flex",
            flexDirection: "column",
            "& h2":{
                margin :"0",
                fontSize: "20px",
                fontWeight: "400",
                textAlign: "center",
            }
        },

    },
    medium:{
        color: "#696f79",
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
    },
    footer:{
        marginTop: "25px",
        display: "flex",
        justifyContent: "space-between",
        "& p":{
            fontWeight: "bold",
        },
        [theme.breakpoints.down("sm")]:{
            display : "flex",
            flexDirection:"column",
            alignItems: "center",
            width: "100%",
            marginTop: "5px",
            },

    },

    buttonTwo:{
        backgroundColor: "#1FA9E5",
        borderRadius: "5px",
        boxShadow: "1px 3px 5px 0px rgba(102,98,102,0.58)",
        textAlign: "center",
        letterSpacing: theme.spacing(0.2),
        padding: "10px",
        "& a":{
            padding: "10px",
            color: "white",
        },
        [theme.breakpoints.down("sm")]:{
            padding: 0,
            width: "100%",
            display: "flex",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
            "& a":{
                padding: "10px",
                fontSize: "15px",
                color: "white",
            },
            },


    },
    basicInfo:{
        [theme.breakpoints.down("sm")]:{
            justifyContent: "center"
        },

    },
    textContent:{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        [theme.breakpoints.down("sm")]:{
            width: "100%",
        },

    },
    cardContent: {
        width: "100%",
        display: "flex",
        [theme.breakpoints.down("sm")]:{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    discription:{
        marginTop: "10px",
        width:"100%",
        [theme.breakpoints.down("sm")]:{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center"
        },
    },
    text:{
        textAlign: "justify",
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
    },
    image:{
        height: "200px",
        width: "200px",
        borderRadius: "15px",
        [theme.breakpoints.down("sm")]:{
            height: "100%",
            width: "100%",
        },
        "& img":{
            borderRadius: "15px",
            height:"200px",
            width: "200px",
            [theme.breakpoints.down("sm")]:{
                padding: "0",
                height:"100%" ,
                width: "100%",
            },
            }
    },
})


export default styles