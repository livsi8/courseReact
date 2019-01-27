import React from 'react';
import logo from 'assets/react-logo.svg';
import settings from 'assets/settings.svg';
import './header.less';

export default class Header extends React.Component {
    render() {
        let { toggleModalSettings, resource, user } = this.props;
        const userName = user ? resource['user'] + ': ' + user : null;

        return (
            <React.Fragment>
                <div className='header__column'>
                    <div className="logo-container header__logo-container">
                        <img className='logo-container__logo' src={logo}/>
                    </div>
                    <div className="title-container header__title-container">
                        <span className="title-container__text">{ resource['myHeader']}</span>
                    </div>
                </div>
                <div className='header__right-block'>
                    <div className="header__user-name">
                        { userName }
                    </div>
                    <div className="header__question-stat"></div>
                    <div className="settings-container header__settings-container" onClick={toggleModalSettings}>
                        <img className='settings-container__img' src={settings}/>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
