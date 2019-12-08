import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ btnText, onPress }) => (
    <button className="button" onClick={onPress}>
        {btnText}
    </button>
);

Button.defaultProps = {
    btnText: 'Submit'
};

Button.propTypes = {
    btnText: PropTypes.string,
    onPress: PropTypes.func.isRequired
};

export default Button;
