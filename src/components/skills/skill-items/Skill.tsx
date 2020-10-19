import React from "react";
import style from './Skill.module.css'

export const Skill = () => {
    return (
        <div className={style.SkillWrapper}>
            <div className={style.skillContainer}>
                <div className={style.image}>Image</div>
                <div className={style.title}><span>React</span></div>
            </div>
            <div className={style.description}>
                <p>
                    Lorem
                </p>
            </div>
        </div>
    )
}