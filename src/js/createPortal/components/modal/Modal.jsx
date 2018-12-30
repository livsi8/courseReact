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
            modalClass,
            modalTitle,
        } = this.props;

        const modal_Class = modalClass ? '-'+modalClass : '';
        const modal_Title = modalTitle ? modalTitle : 'Modal title';

        return ReactDOM.createPortal(
            <div className= {'modal' + modal_Class}>
                <div className={'modal' + modal_Class + '__header' }>
                    <div className={'modal' + modal_Class + '__title' }>
                        {modal_Title}
                    </div>
                    <div className={'modal' + modal_Class + '__close-container'} onClick={onClose}>
                        <img className={'modal' + modal_Class + '__close-img'}/>
                    </div>
                </div>
                <div className={'modal' + modal_Class + '__body' }>
                    {this.props.children}
                </div>
                <div className={'modal' + modal_Class + '__footer' }>
                    <CustomButton
                        className={'modal' + modal_Class + '__close-button'}
                        name={closeButtonName}
                        callback={onClose}
                    />
                </div>
            </div>,
            this.root
        );
    }
}
