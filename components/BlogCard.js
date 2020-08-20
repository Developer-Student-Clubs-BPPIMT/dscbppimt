import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from "../styles/blogCardStyles"

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
                            </div>
                            <div className={classes.medium}>
                                {medium}
                            </div>
                        </div>
                            <div className={classes.discription}>
                                <p>{discription}</p>
                                <p>speaker: {speaker}</p>
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