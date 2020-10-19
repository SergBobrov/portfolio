import React from 'react'
import style from './Main.module.css'


export const Main = () => {
    return (
        <div className={style.mainWrapper}>
            <div className={style.info}>
                <span>Hi There</span>
                <h1>Im Sergei Boborv</h1>
                <p>A FRONT-END DEVELOPER</p>
            </div>
            <div className={style.photo}>
            </div>
        </div>
    )
}
