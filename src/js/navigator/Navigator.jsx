import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigator.less';
import ContextColors from '../context/context.jsx';
import testQuestions from '../TestQuestions/testQuestions';

export default class Navigator extends React.Component {
    static contextType = ContextColors;

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    getNavigatorBody =()=> {
        const { lang, answers } = this.props;
        const questions = testQuestions[lang];
        let result = [];
        for (let ind in questions){
            const index = parseInt(ind)+1;
            if (!parseInt(ind)){
                result.push(<NavLink key={'NavLink-' + (index-1)} className={answers[parseInt(ind)] ? 'nav-links__link nav-links__answered' : 'nav-links__link'} to={'/'} exact>{ index }</NavLink>);
            } else {
                result.push(<NavLink key={'NavLink-' + (index)} className={answers[parseInt(ind)] ? 'nav-links__link nav-links__answered' : 'nav-links__link'} to={'/question-' + index }>{ index }</NavLink>)
            }
        }
        return result;
    }

    render() {
        const { getNavigatorBody } = this;
        const bodyNavigator = getNavigatorBody();
        return (
            <div style={{ background: this.context.navigator.backgroundColor }} className='navigator'>
                <div className='nav-links navigator__nav-links'>
                    { bodyNavigator }
                    
                    {/* <NavLink className='nav-links__link' to={'/'} exact>Home</NavLink>
                    <NavLink className='nav-links__link' to={'/createportal'}>CreatePortal</NavLink>
                    <NavLink className='nav-links__link' to={'/proptypes'}>PropTypes</NavLink>
                    <NavLink className='nav-links__link' to={'/contextapi'}>ContextAPI</NavLink>
                    <NavLink className='nav-links__link' to={'/hoc'}>HighOrderComponent</NavLink> */}
                </div>
               <div className='navigator__stub'/>
            </div>
        );
    }
}
