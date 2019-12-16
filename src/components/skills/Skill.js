import React from 'react';
import s from './Skills.module.css';

const Skill = ({name}) => {
    return (
        <div className={s.skill}>
            <div className={s.logoBox}>
                <div className={s.logo}>
                    <img src="" alt=""/>
                </div>
                <div className={s.skillName}>
                    {name}
                </div>
            </div>
            <div className={s.skillDesc}>
                Some text
            </div>
        </div>
    )
}

export default Skill;