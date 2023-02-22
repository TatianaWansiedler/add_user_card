import React, { useState,useEffect } from 'react';
import AddUsersForm from '../AddUsersForm';
import CardContainer from '../CardContainer';

const Container = () => {

    const data = [
        {id: 1, name: 'Alexander', gender: 'm', image: 'http://www.sg-unter-abtsteinach.de/wp-content/uploads/2022/02/male-placeholder-image.jpeg'},
        {id: 2, name: 'Elena', gender: 'f', image: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg'},
        {id: 3, name: 'John', gender: 'm', image: 'http://www.sg-unter-abtsteinach.de/wp-content/uploads/2022/02/male-placeholder-image.jpeg'},
    ]
    const [users, setUsers] = useState(()=> JSON.parse(localStorage.getItem('users')) ?? data)

    useEffect(() => {
        localStorage.setItem('users',JSON.stringify(users))
      },[users])

    const delCard = (id) => setUsers(users.filter(el => el.id !== id))

    const addUser = (user) => {
        setUsers([...users, {...user, id: Date.now()}])
    }

    const men = users.filter(({gender}) => gender==='m')
    const women = users.filter(({gender}) => gender==='f')

    return (
        <div>
            <AddUsersForm addUser={addUser}/>
            <CardContainer 
                users={men}
                title={'Men'} 
                delCard={delCard}
            />
            <CardContainer 
                users={women}
                title={'Women'} 
                delCard={delCard}
            />
        </div>
    );
};

export default Container;