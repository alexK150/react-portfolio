import React from 'react';
import s from './Footer.module.css';
import Link from './Link';

const Footer = (props) => {
    return (
        <div className={s.footer}>
            <div className={s.name}>
                Alex
                <div className={s.links}>
                   <Link/>
                   <Link/>
                   <Link/>
                </div>
                <div className={s.rights}>
                    2020 Все права защищены
                </div>
            </div>
        </div>
    )
};

export default Footer;