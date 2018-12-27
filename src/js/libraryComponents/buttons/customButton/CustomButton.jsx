import React from 'react';
import PropTypes from 'prop-types';
import './customButton.less';

const CustomButton = props => {
    const {
        name,
        callback,
        className,
        btnRef
    } = props;

    return (
        <button ref={btnRef}
                className={className}
                onClick={callback && callback}>
            {name}
        </button>
    );
};

CustomButton.propTypes = {
    className: PropTypes.string,
    callback: PropTypes.func.isRequired,
    name: PropTypes.string,
};

CustomButton.defaultProps = {
    name: 'Custom Button',
    className: 'custom-button',
};

export default CustomButton;
