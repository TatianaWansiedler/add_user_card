import React from 'react';
import Card from '../Card';
import s from './style.module.css'

const CardContainer = ({users, delCard, title}) => {
    return (
        <div className={s.container}>
            <h5 className={s.title}>{title}</h5>
            <div className={s.wrapper}>
                {
                    users.map(el => <Card  key={el.id} {...el} delCard={delCard}/>)
                }
            </div>
        </div>
    );
};

export default CardContainer;