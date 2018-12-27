import React from 'react';
import ReactDOM from 'react-dom';
import MainLogin from './js/mainLogin/MainLogin.jsx';
import Context from './js/context/context.jsx';
import config from './js/config/config';
import './styles/styles.less';

ReactDOM.render(
    <Context.Provider value={config}>
        <MainLogin/>
    </Context.Provider>,
    document.querySelector('#rootLogin'),
    () => console.log('Component MainLogin has been created')
);
