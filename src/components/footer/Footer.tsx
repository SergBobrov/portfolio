import React from "react";
import style from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={style.footerWrapper}>
            <div className={style.footerContainer}>
                <h2>Sergei Bobrov</h2>
                <div className={style.links}>
                    <a href="">Linkedin</a>
                    <a href="">Facebook</a>
                    <a href="">Github</a>
                </div>
                <span>copyright</span>
            </div>

        </div>
    )
};