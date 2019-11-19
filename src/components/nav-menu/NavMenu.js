import React from 'react';
import s from './NavMenu.module.css';

const NavMenu = (props) => {
    return (
        <div className={s.navMenu}>
            <a href="" className={s.link}>Главная</a>
            <a href="" className={s.link}>Навыки</a>
            <a href="" className={s.link}>Проекты</a>
            <a href="" className={s.link}>Контакты</a>
        </div>
    )
};

export default NavMenu;