import React from 'react';
import './footer.less';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="info-container footer__info-container">
                <span className="info-container__copyright">{'@Copyright by MEDVEDEV DMITRIY'}</span>
            </div>
        );
    }
}
