import React from 'react';
import { useSelector } from 'react-redux';
import AddUsersForm from '../AddUsersForm';
import CardContainer from '../CardContainer';

const Container = () => {
    const users = useSelector(state => state)
    
    const men = users.filter(({gender}) => gender === 'm')
    const women = users.filter(({gender}) => gender === 'f')
    return (
        <div>
            <AddUsersForm />
            <CardContainer filteredUsers={men} title={'Men'} />
            <CardContainer filteredUsers={women} title={'Women'} />
        </div>
    );
};

export default Container;