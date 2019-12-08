import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.css';

const ErrorMessage = ({ name, errors }) => {
    if (errors[name]) {
        switch (errors[name].type) {
            case 'required':
                return <span className="msg msg--danger">{errors[name].message}</span>;
            case 'minLength':
                return <span className="msg msg--warning">{errors[name].message}</span>;
            default:
                return <span className="msg msg--warning">{errors[name].message}</span>;
        }
    }

    return null;
};

ErrorMessage.defaultProps = {
    errors: {}
};

ErrorMessage.propTypes = {
    name: PropTypes.string.isRequired,
    errors: PropTypes.object
};

export default ErrorMessage;
