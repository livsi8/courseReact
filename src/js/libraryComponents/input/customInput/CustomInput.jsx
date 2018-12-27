import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/styles.less';
import './customInput.less';

const CustomInput = props => {
    const {
        loginLabel,
        type,
        placeholder,
        minLength,
        maxLength,
        size,
        onClick,
        onChange,
        className,
        inputSelf,
        inputHelp,
        autoFocus,
        loginHelp,
    } = props;





    return (
        <div className='custom-input'>
            <div className={className + '-input-label custom-input__label'}>
                {loginLabel + ':'}
            </div>
            <input ref={inputSelf}
                   type={type}
                   minLength={minLength && minLength}
                   maxLength={maxLength && maxLength}
                   size={size && size}
                   placeholder={placeholder}
                   className={className + '-input custom-input__input'}
                   autoFocus={autoFocus}
                   onClick={onClick && onClick}
                   onChange={onChange && onChange} />
            <div className={className + '-input-help custom-input__help'} ref={inputHelp}>
                {loginHelp}
            </div>
        </div>
    );
};

CustomInput.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    loginLabel: PropTypes.string,
    placeholder: PropTypes.string,
    loginHelp: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    size: PropTypes.number,
    autoFocus: PropTypes.bool,
};

CustomInput.defaultProps = {
    name: 'Custom Input',
    className: 'custom-input',
    type: 'text',
    loginLabel: 'Label',
    placeholder: 'Placeholder',
    loginHelp: '',
    minLength: 3,
    maxLength: 15,
    size: 15,
    autoFocus: false,
};

export default CustomInput;
