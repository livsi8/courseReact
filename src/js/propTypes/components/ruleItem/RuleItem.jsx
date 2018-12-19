import React from 'react';
import PropTypes from 'prop-types';
import './ruleItem.less';

export default class RuleItem extends React.Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    wrapper = React.createRef();

    state = {
        isShowExample: false,
        isShowDescription: false,
    };

    toggleButtonExample = () => {
        this.setState(state => ({ isShowExample: !state.isShowExample}));
    };

    toggleButtonDescription = () => {
        this.setState(state => ({ isShowDescription: !state.isShowDescription}));
    };

    componentDidUpdate() {
        console.log(this.wrapper.current);
    }

    render() {
        const { item } = this.props;
        const { isShowExample, isShowDescription } = this.state;

        return (
            <div className="rule-item" ref={this.wrapper}>
                <div className="rule-item-container">
                    <span style={{ marginRight: '20px' }}>{item.props}</span>
                    {isShowExample ? <span style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>{item.example}</span> :
                        <button className='rule-item-container__button-example custom-button' onClick={this.toggleButtonExample}>SHOW EXAMPLE</button>}
                </div>
                {item.description ?
                    (isShowDescription ? <span style={{ textAlign: 'left', display: 'flex', flex: '1' }}>{item.description}</span> :
                    <button className='rule-item-container__button-description custom-button' onClick={this.toggleButtonDescription}>SHOW DESCRIPTION</button>) :
                    null
                }
            </div>
        );
    }
}
