import React from 'react';
import RuleItem from '../ruleItem/RuleItem.jsx';
import PropTypes from 'prop-types';
import './rulesComponents.less';
import ErrorBoundary from '../../../errorBoundary/ErrorBoundary.jsx'

export default @ErrorBoundary
class RulesList extends React.Component {
    static propTypes = {
        rules: PropTypes.array.isRequired
    };

    forceUpdateComponent = () => {
        this.buttonName = null;
        this.forceUpdate();
    };

    state = {
        isShowRule: false
    };

    buttonName = {
        key: 'BREAK',
    };

    togglePressButton = () => {
        this.setState(state => ({ isShowRule: !state.isShowRule}));
    };

    render() {
        const { rules } =this.props;
        const { isShowRule } = this.state;

        const buttonName = this.buttonName.key;

        return (
            <React.Fragment>
                <div className="rule-description">
                    <a href='https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes'>CHECK YOUR KNOWLEDGE</a>
                </div>
                <button className="rule-button" onClick={this.togglePressButton}>PRESS</button>
                <button className="rule-button" onClick={this.forceUpdateComponent}>{buttonName}</button>
                {isShowRule &&
                    <div className="rules-list">
                        {rules.map(item =>
                            <RuleItem key={item.id} item = {item}/>
                        )}
                    </div>
                }
            </React.Fragment>
        );
    }
}
