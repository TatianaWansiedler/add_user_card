import React from 'react';
import AddUsersForm from '../AddUsersForm';
import CardContainer from '../CardContainer';

const Container = () => {

    return (
        <div>
            <AddUsersForm />
            <CardContainer target={'m'} title={'Men'} />
            <CardContainer target={'f'} title={'Women'} />
        </div>
    );
};

export default Container;