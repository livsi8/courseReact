import React, { Fragment } from 'react';
import PureComponent from '../pureComponent/PureComponent.jsx';

const ErrorBoundary = (ComposedComponent) => {
    class WrapperComponent extends PureComponent {
        // args = ComposedComponent;
        state = {
            hasError: false,
            error: '',
        };

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            console.warn(error);
            return {
                hasError: true,
                error: error
            };
        }

        // componentDidCatch(error) {
        //     this.setState({
        //         hasError: true,
        //         error: error,
        //     });
        //
        //     console.warn(error);
        // }

        getBody() {
            const { hasError, error } = this.state;

            return (
                !hasError ?
                    <ComposedComponent { ...this.props } /> :
                    <div className='error-boundary' style={ { color: 'red' } }>
                        {`${getDisplayName(WrapperComponent)}: ${error.toString()}`}
                    </div>
            );
        }

        render() {
            return (
                <Fragment>
                    { this.getBody() }
                </Fragment>
            );
        }
    }

    WrapperComponent.displayName = `ErrorBoundary(${getDisplayName(ComposedComponent)})`;
    return WrapperComponent;
};

export function getDisplayName(ComposedComponent) {
    return ComposedComponent.displayName ? ComposedComponent.displayName : (ComposedComponent.name ? ComposedComponent.name : 'NameLessComponent');
}

export default ErrorBoundary;

