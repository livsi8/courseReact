import React from 'react';
import './footer.less';

export default class MainComponent extends React.Component {
    render() {
        const { isShowHelp, resource } = this.props;
        const helpString = isShowHelp ? resource['helpFool'] : null;
        return (
            <div className="info-container footer__info-container">
                <span className="info-container__help">{ helpString }</span>
                <span className="info-container__copyright">{'@Copyright by SOLOVYOV OLEG'}</span>
            </div>
        );
    }
}
