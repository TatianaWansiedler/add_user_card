import React, {useState} from 'react';
import s from './style.module.css'

const AddUsersForm = ({addUser}) => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [image, setImage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const newUser = { name, gender, image }
        addUser(newUser)
        setName('')
        setImage('')
        setGender('')
    }
    return (
        <div className={s.form_container}>
            <form className={s.form} onSubmit={onSubmit}>
                <input 
                    className={s.input_text}
                    type="text" 
                    value={name} 
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input 
                    className={s.input_text}
                    type="text" 
                    value={image} 
                    placeholder='Image link'
                    onChange={e => setImage(e.target.value)}
                    required
                />
                <select
                    className={s.input_text} 
                    value={gender} 
                    onChange={e => setGender(e.target.value)}
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