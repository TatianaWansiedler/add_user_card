import React from 'react';
import { useDispatch } from 'react-redux'
import s from './style.module.css'

const AddUsersForm = () => {

    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        const  { name, gender, image } = e.target

        const newUser = {  
            id: Date.now(),  
            name: name.value, 
            gender: gender.value, 
            image: image.value 
        }
        dispatch({ type: 'ADD', payload: newUser })

    }
    return (
        <div className={s.form_container}>
            <form className={s.form} onSubmit={onSubmit}>
                <input 
                    className={s.input_text}
                    type="text" 
                    name='name' 
                    placeholder='Name'
                    required
                />
                <input 
                    className={s.input_text}
                    type="text" 
                    name='image' 
                    placeholder='Image link'
                    required
                />
                <select
                    className={s.input_text} 
                    name='gender'
                    required
                >
                    <option value="">Gender</option>
                    <option value="m">male</option>
                    <option value="f">female</option>
                </select>
                <input className={s.input_submit} type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default AddUsersForm;