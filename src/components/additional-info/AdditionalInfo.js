import React from 'react';
import s from './AdditionalInfo.module.css';

const AdditionalInfo = (props) => {
    return (
        <div className={s.info}>
            <div className={s.container}>
                <h3>рассматриваю варианты удаленной работы</h3>
               <button>Нанять меня</button>
            </div>
        </div>
    )
};

export default AdditionalInfo;