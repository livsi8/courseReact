import React from 'react';
import PropTypes from 'prop-types';
import './customButton.less';

const CustomButton = props => {
    const {
        name,
        callback,
        className,
        backgroundColor
    } = props;

    return (
        <button style={{ background: backgroundColor }}
                className={className}
                onClick={callback && callback}>
            {name}
        </button>
    );
};

CustomButton.propTypes = {
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    callback: PropTypes.func.isRequired,
    name: PropTypes.string,
};

CustomButton.defaultProps = {
    name: 'Custom Button',
    className: 'custom-button',
    backgroundColor: 'red',
};

export default CustomButton;
