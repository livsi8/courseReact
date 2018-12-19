import React from 'react';
import logo from 'assets/react-logo.svg';
import './header.less';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="logo-container header__logo-container">
                    <img className='logo-container__logo' src={logo}/>
                </div>
                <div className="title-container header__title-container">
                    <span className="title-container__text">{'REACT ADDITION'}</span>
                </div>
            </React.Fragment>
        );
    }
}
