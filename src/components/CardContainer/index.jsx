import { useSelector } from 'react-redux';
import React from 'react';
import Card from '../Card';
import s from './style.module.css'

const CardContainer = ({title, target}) => {

    const users = useSelector(state => state)

    const filteredUsers = users.filter(({gender}) => gender === target)
    return (
        <div className={s.container}>
            <h5 className={s.title}>{title}</h5>
            <div className={s.wrapper}>
                {
                    filteredUsers.map(user => <Card  key={user.id} {...user}/>)
                }
            </div>
        </div>
    );
};

export default CardContainer;