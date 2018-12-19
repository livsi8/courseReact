import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './js/mainComponent/MainComponent.jsx';
import Context from './js/context/context.jsx';
import config from './js/config/config';
import './styles/styles.less';

ReactDOM.render(
    <Context.Provider value={config}>
        <MainComponent/>
    </Context.Provider>,
    document.querySelector('#root'),
    () => console.log('Component has been created')
);
