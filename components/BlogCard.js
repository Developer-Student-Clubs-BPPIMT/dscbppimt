import React from 'react'
import { withStyles } from '@material-ui/core'

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
                textAlign: "center",
            }
        },

    },
    date:{
        color: "#696f79"
    },
    buttons:{
        marginTop: "25px",
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
        margin: "10px",
        padding: 0,
        "& h2":{
            margin: "0"
        },
        "& p":{
            margin: "0"
        },
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
        "& p":{
            [theme.breakpoints.down("sm")]:{
                display: "none"
            }
        }
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
            padding: "5px",
            height:"200px",
            width: "200px",
            [theme.breakpoints.down("sm")]:{
                padding: "0",
                height:"100%" ,
                width: "100%",
            },
            }
    }
})


function BlogCard({classes,Image,title,discription,speaker,medium}) {
    return (
        <div className={classes.card}>
                <div className={classes.cardContent}>
                    <div className={classes.image}>
                        <img src={Image} alt={speaker} />
                    </div>
                    <div className={classes.textContent}>
                        <div className={classes.header}>
                            <div className={classes.basicInfo}>
                                <h2>{title}</h2>
                                <p>speaker: {speaker}</p>
                            </div>
                            <div className={classes.date}>
                                {medium}
                            </div>
                        </div>
                            <div className={classes.discription}>
                                <p>{discription}</p>
                                <div className={classes.buttons}>
                                    <div className={classes.buttonTwo}>
                                        <a>ReadMore</a>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>

    )
}

export default withStyles(styles)(BlogCard)