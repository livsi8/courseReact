import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigator.less';
import ContextColors from '../context/context.jsx';

export default class Navigator extends React.Component {
    static contextType = ContextColors;

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        return (
            <div style={{ background: this.context.navigator.backgroundColor }} className='navigator'>
                <div className='nav-links navigator__nav-links'>
                    <NavLink className='nav-links__link' to={'/'} exact>Home</NavLink>
                    <NavLink className='nav-links__link' to={'/createportal'}>CreatePortal</NavLink>
                    <NavLink className='nav-links__link' to={'/proptypes'}>PropTypes</NavLink>
                    <NavLink className='nav-links__link' to={'/contextapi'}>ContextAPI</NavLink>
                    <NavLink className='nav-links__link' to={'/hoc'}>HighOrderComponent</NavLink>
                </div>
               <div className='navigator__stub'/>
            </div>
        );
    }
}
