import React from 'react';
import s from './MainInfo.module.css';

const MainInfo = (props) => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img src="" alt=""/>
                </div>
                <div className={s.intro}>
                    <span>Hello</span>
                    <span>Name</span>
                    <span>Frontend developer</span>
                </div>
            </div>
        </div>
    )
};

export default MainInfo;