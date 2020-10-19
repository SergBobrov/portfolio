import React from "react";
import style from './SkillsBlock.module.css'
import {Skill} from "./skill-items/Skill";


export const SkillsBlock = () => {
    return (
        <div className={style.skillsBlockWrapper}>
            <div className={style.skillsContainer}>
                <div className={style.title}>
                    <h2>My skills</h2>
                </div>
                <div className={style.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}
