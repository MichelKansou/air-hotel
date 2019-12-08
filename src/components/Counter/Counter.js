import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ counter, increment, decrement }) => (
    <div className="counter">
        <button className="counter__btn" onClick={decrement}>
            -
        </button>
        {counter}
        <button className="counter__btn" onClick={increment}>
            +
        </button>
    </div>
);

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};

export default Counter;
