import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Counter from 'Components/Counter/Counter';
import { incrementItem, decrementItem, removeItem } from 'Actions/cart';
import './CartItem.css';

const CartItem = ({ itemId, item }) => {
    const dispatch = useDispatch();

    const decrement = () => {
        if (item.quantity > 1) {
            dispatch(decrementItem(itemId));
        } else {
            dispatch(removeItem(itemId));
        }
    };

    const increment = () => {
        dispatch(incrementItem(itemId));
    };

    return (
        <div className="cart-item">
            <img className="cart-item__image" src={item.imageSrc} alt={item.title} />
            <div className="cart-item__content">
                <h3 className="cart-item__title">{item.title}</h3>
                <Counter counter={item.quantity} increment={increment} decrement={decrement} />
            </div>
            <span className="cart-item__price">{item.price} €</span>
        </div>
    );
};

CartItem.propTypes = {
    itemId: PropTypes.string.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
};

export default CartItem;
