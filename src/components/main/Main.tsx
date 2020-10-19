import React from 'react'
import style from './Main.module.css'
import styleContainer from './../common/styles/container.module.css'


const Main = () => {
    return (
        <div className={style.mainBlock}>
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

export default Main;