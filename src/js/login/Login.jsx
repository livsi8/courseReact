import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../libraryComponents/buttons/customButton/CustomButton.jsx';
import './login.less';
import PureComponent from '../pureComponent/PureComponent.jsx';

export default class Login extends PureComponent {
    static propTypes = {
        isLogged: PropTypes.bool.isRequired,
        callbackLogIn: PropTypes.func.isRequired,
        callbackLogOut: PropTypes.func.isRequired,
    };

    render() {
        const { isLogged, callbackLogIn, callbackLogOut } = this.props;

        return (
            <div className='login-form'>
                <CustomButton name={'LOGIN'}
                              callback={callbackLogIn}
                              backgroundColor={'green'}
                />
                <CustomButton name={'LOGOUT'}
                              callback={callbackLogOut}
                              backgroundColor={'red'}
                />
            </div>
        );
    }
}
