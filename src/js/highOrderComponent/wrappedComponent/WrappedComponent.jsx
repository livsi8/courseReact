import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../hocComponent/BaseComponent.jsx';
import './wrappedComponent.less';

class WrappedComponent extends React.Component {
    static propTypes = {
        countValue: PropTypes.number.isRequired,
        callbackIncrement: PropTypes.func.isRequired,
        callbackDecrement: PropTypes.func.isRequired
    };

    // static displayName = 'Counter';

    render () {
        const {
            countValue,
            callbackIncrement,
            callbackDecrement
        } = this.props;

        return (
            <div className='counter'>
                <button className='counter__increment-button styled-button' onClick={callbackIncrement}>PLUS</button>
                <span className='counter__value'>{countValue}</span>
                <button className='counter__decrement-button styled-button' onClick={callbackDecrement}>MINUS</button>
            </div>
        );
    }
}

export default BaseComponent(WrappedComponent);
