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
                fontSize: "20px",
                fontWeight: "400",
            }
        },

    },
    basicInfo:{
        "& p":{
            fontWeight: "bold",
        },


    },
    date:{
        color: "#696f79"
    },
    buttons:{
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]:{
            marginTop: "5px",
        },

    },
    buttonOne:{
        marginRight: "30px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "1px 3px 5px 0px rgba(102,98,102,0.58)",
        textAlign: "center",
        padding: "10px",
        letterSpacing: theme.spacing(0.2),
        "& a":{
            padding: "10px",
            color: "black",
        },
        [theme.breakpoints.down("sm")]:{
            marginRight: "20px",
            padding: 0,
            letterSpacing: "default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& a":{
                padding: "10px",
                fontSize: "15px",
                color: "black",
            },

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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& a":{
                padding: "10px",
                fontSize: "15px",
                color: "white",
            },
            },


    },

    textContent:{
        marginLeft: "10px",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]:{
            width: "100%",
        },

    },
    cardContent: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
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
        "& p":{
            textAlign: "justify",
            [theme.breakpoints.down("sm")]:{
                display: "none"
            }
        }
    },
    image:{
        height: "250px",
        width: "250px",
        borderRadius: "15px",
        [theme.breakpoints.down("sm")]:{
            height: "100%",
            width: "100%",
        },
        "& img":{
            borderRadius: "15px",
            height:"250px",
            width: "250px",
            [theme.breakpoints.down("sm")]:{
                padding: "0",
                height:"100%" ,
                width: "100%",
            },
            }
    },
 forWrap:{
     display: "flex",
    [theme.breakpoints.down("sm")]:{
        display: "flex",
        flexWrap: "wrap-reverse",
        marginBottom: "20px",
    },
}
})

export default styles