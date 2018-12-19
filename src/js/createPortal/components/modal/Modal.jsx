import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CustomButton from '../../../libraryComponents/buttons/customButton/CustomButton.jsx';
import './modal.less';

export default class Modal extends React.Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        closeButtonName: PropTypes.string
    };

    static defaultProps = {
        closeButtonName: 'Close'
    };

    constructor(props) {
        super(props);
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        const {
            onClose,
            closeButtonName,
        } = this.props;

        return ReactDOM.createPortal(
            <div className="modal">
                <CustomButton
                    className={'modal__close-button custom-button'}
                    name={closeButtonName}
                    callback={onClose}
                />
                {this.props.children}
            </div>,
            this.root
        );
    }
}
