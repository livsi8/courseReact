import React from 'react';

const BaseComponent = Component => {
    class BaseComponent extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old Props', prevProps);
            console.log('new Pops', this.props);
        }

        render() {
            return <Component {...this.props}/>;
        }
    }

    BaseComponent.displayName = `BaseComponent(${Component.displayName || Component.name || 'Component'})`;

    return BaseComponent;
};

export default BaseComponent;
