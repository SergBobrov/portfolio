import React from "react";
import style from "./Header.module.css"
import styleContainer from './../common/styles/container.module.css'
import {Navigation} from "./navigation/Navigation";

export const Header = () => {
    return (
        <div className={style.header}>
                <Navigation/>
        </div>
    )
}


