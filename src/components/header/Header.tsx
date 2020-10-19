import React from "react";
import style from "./Header.module.css"
import {Navigation} from "./navigation/Navigation";

export const Header = () => {
    return (
        <div className={style.headerWrapper}>
                <Navigation/>
        </div>
    )
}


