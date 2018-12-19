import React from 'react';
// import PropTypes from 'prop-types';
import RulesList from './components/rulesList/RulesComponent.jsx';
import rules from './rules';
import './propTypesComponent.less';

export default class PropTypesComponent extends React.Component {
    render() {
        return (
            <div className="content__rules-block">
                <RulesList rules={rules}/>
            </div>
        );
    }
}
