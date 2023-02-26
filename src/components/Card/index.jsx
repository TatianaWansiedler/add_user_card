import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.css'

const Card = ({ id, name, image }) => {

    const dispatch = useDispatch()

    return (
        <div className={s.card}>
            <img className={s.img} src={image} alt="user_photo" />
            <p className={s.name}>{name}</p>
            <button className={s.btn} onClick={() => dispatch({type: 'DELETE', payload: id})} >
                <i className="las la-times"></i>
            </button>
        </div>
    );
};

export default Card;