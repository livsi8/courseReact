import React from 'react';
// import PropTypes from 'prop-types';
import AnotherComponent from '../anotherComponent/AnotherComponent.jsx';
import { DataContext } from '../../ContextApi.jsx';
import './showComponent.less'

const ShowComponent = props => {
    // static contextType = DataContext; // for contextType

    return (
        <DataContext.Consumer>
            {context => {
                return (
                    <div className='show-container'>
                        <button className='custom-button' onClick={context.showProperties}>{!context.isShow ? 'SHOW PROPERTIES' : 'HIDE PROPERTIES'}</button>
                        {context.isShow ?
                            <div className='view-container'>
                                <span>{context.text}</span>
                                <span>{context.value}</span>
                                <div className='view-container__object'>{Object.keys(context.users).map(user =>
                                    // <React.Fragment key={user}>
                                        <AnotherComponent key={user} userId={user}/>
                                    // </React.Fragment>
                                )}</div>
                                <div className='view-container__array'>{context.skills.map(skill =>
                                    <span className='skill-item' key={skill}>{skill}</span>
                                )}</div>
                            </div> :
                            null
                        }
                    </div>
                );
            }}
        </DataContext.Consumer>
    );
};

ShowComponent.propTypes = {

};

export default ShowComponent;
