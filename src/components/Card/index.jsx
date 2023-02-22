import React from 'react';
import s from './style.module.css'

const Card = ({ id, name, image, delCard }) => {
    return (
        <div className={s.card}>
            <img className={s.img} src={image} alt="user_photo" />
            <p className={s.name}>{name}</p>
            <button className={s.btn} onClick={()=>delCard(id)} >
                <i className="las la-times"></i>
            </button>
        </div>
    );
};

export default Card;