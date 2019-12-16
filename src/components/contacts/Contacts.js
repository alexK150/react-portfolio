import React from 'react';
import s from './Contacts.module.css';

const Contacts = (props) => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                Контакты
                <form action="" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </form>
            </div>
        </div>
    )
};

export default Contacts;