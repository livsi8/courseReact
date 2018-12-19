import React from 'react';
// import PropTypes from 'prop-types';
import CustomButton from '../libraryComponents/buttons/customButton/CustomButton.jsx';
import Modal from './components/modal/Modal.jsx';
import './createPortal.less';

export default class CreatePortal extends React.Component {
    state = {
        isModalOpen: false
    };

    toggleModal = () => {
        this.setState(state => ({ isModalOpen: !state.isModalOpen}));
    };

    render() {
        const { toggleModal } = this;
        const { isModalOpen } = this.state;

        return (
            <React.Fragment>
                <div className="button-container content__button-container">
                    <CustomButton
                        name={'Open Modal Window'}
                        callback={toggleModal}
                        backgroundColor={'blue'}
                    />
                </div>
                {isModalOpen &&
                <Modal onClose={toggleModal} closeButtonName={'Close'}>
                    <h1>Modal Window</h1>
                </Modal>}
            </React.Fragment>
        );
    }
}
