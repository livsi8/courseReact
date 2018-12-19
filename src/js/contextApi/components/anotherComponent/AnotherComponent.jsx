import React from 'react';
import PropTypes from 'prop-types';
import { DataContext } from '../../ContextApi.jsx';
import './anotherComponent.less'

const AnotherComponent = props => {

    // static contextType = DataContext; // for contextType

    const { userId } = props;

    return (
        <DataContext.Consumer>
            {context => {
                return (
                    <div className='user-container'>
                        <span style={{ marginRight: '10px' }}>{context.users[userId].name}</span>
                        <span style={{ marginRight: '10px' }}>{context.users[userId].age}</span>
                    </div>
                );
            }}
        </DataContext.Consumer>
    );
};

AnotherComponent.propTypes = {

};

export default AnotherComponent;
