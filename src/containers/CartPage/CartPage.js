import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import CartItem from 'Components/CartItem/CartItem';
import Button from 'Components/Button/Button';
import './CartPage.css';

function CartPage() {
    const { items, totalPrice } = useSelector(state => state.cart);
    const history = useHistory();

    if (Object.keys(items).length < 1) {
        history.replace('/');
    }

    const cartItems = items && Object.keys(items).map(itemId => <CartItem key={itemId} itemId={itemId} item={items[itemId]} />);

    const goToCheckout = () => history.push('/checkout');
    const goToBack = () => history.goBack();

    return (
        <div className="cart-page">
            <h3 className="cart-page__title">Cart</h3>
            <div className="cart-page__items">{cartItems}</div>
            <p>Total Price : {totalPrice} €</p>
            <Button onPress={goToBack} btnText={'Back'} />
            <Button onPress={goToCheckout} btnText={'Checkout'} />
        </div>
    );
}

export default CartPage;
