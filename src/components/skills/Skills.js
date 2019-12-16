import React from 'react';
import s from './Skills.module.css';
import Skill from './Skill';

const Skills = (props) => {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.mySkills}>
                    Мои навыки
                </div>
                <div className={s.skillBoxes}>
                    <Skill name= 'REACT'/>
                    <Skill name='REDUX'/>
                    <Skill name = 'HTML5'/>
                </div>
            </div>
        </div>
    )
};

export default Skills;