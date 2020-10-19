import React from "react";
import style from './WorkItem.module.css'

export const WorkItem = () => {
    return (
        <div className={style.workWrapper}>
            <div className={style.workBlock}>
                image
            </div>
            <div className={style.description}>
                <h3>Project name</h3>
                <p> lorem lorem lorem lorem lorem</p>
            </div>
        </div>
    )
}