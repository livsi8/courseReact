import React from 'react';
// import PropTypes from 'prop-types';
import Count from '../highOrderComponent/wrappedComponent/WrappedComponent.jsx';
import './highOrderComponent.less';

export default class HighOrderComponent extends React.Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState(state => ({ count: state.count + 1 }));
    };

    decrementCount = () => {
        this.setState(state => ({ count: state.count - 1 }));
    };

    render() {
        const { count } = this.state;

        return (
            <div className='hoc'>
                <Count
                    countValue={count}
                    callbackIncrement={this.incrementCount}
                    callbackDecrement={this.decrementCount}
                />
            </div>
        );
    }
}
