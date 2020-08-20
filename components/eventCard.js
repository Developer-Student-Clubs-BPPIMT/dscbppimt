import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from "../styles/eventCardStyles"

function EventCard({classes,Image,title,discription,speaker,date}) {
    return (
        <div className={classes.card}>
            <div className={classes.cardContent}>
                <div className={classes.forWrap}>
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
                                    {date}
                                </div>
                            </div>
                            
                            <div className={classes.discription}>
                                <p>{discription}</p>
                            </div>
                    </div>
                    </div>
                    <div className={classes.buttons}>
                        <div className={classes.buttonOne}>
                            <a>Learn More</a>
                        </div>
                        <div className={classes.buttonTwo}>
                            <a>Register</a>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default withStyles(styles)(EventCard)