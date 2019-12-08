import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from 'Components/ErrorMessage/ErrorMessage';
import './InputField.css';

const InputField = ({ name, label, register, ...rest }) => {
    const { type, errors, placeholder } = rest;

    return (
        <div className="input-field">
            <label className="input-field__label" htmlFor={name}>
                {label}
            </label>
            <input className="input-field__input" name={name} ref={register} type={type} placeholder={placeholder || label} />
            <ErrorMessage name={name} errors={errors} />
        </div>
    );
};

InputField.defaultProps = {
    type: 'text',
    errors: {}
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    errors: PropTypes.object
};

export default InputField;
