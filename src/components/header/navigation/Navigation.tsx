import React from "react";
import style from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Works</a>
            <a href="">Contact info</a>
        </div>
    )
}