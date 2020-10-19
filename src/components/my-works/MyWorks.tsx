import React from "react";
import style from './MyWorks.module.css';
import {WorkItem} from "./WorkItem/WorkItem";

export const MyWorks = () => {
    return (
        <div className={style.myWorksWrapper}>
            <div className={style.myWorksContainer}>
                <div className={style.title}>
                    <h2>My works</h2>
                </div>
                <div className={style.works}>
                    <WorkItem/>
                    <WorkItem/>
                </div>
            </div>
        </div>
    )
}