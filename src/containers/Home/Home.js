import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from 'Components/Main/Main';
import CartItem from 'Components/CartItem/CartItem';
import Button from 'Components/Button/Button';
import './Home.css';

function Home({ history }) {
    const { items, totalPrice } = useSelector(state => state.cart);
    const cartHasItem = Object.keys(items).length > 0;

    const cartItems = items && Object.keys(items).map(itemId => <CartItem key={itemId} itemId={itemId} item={items[itemId]} />);

    const goToCheckout = () => history.push('/checkout');

    return (
        <div className="home">
            <Main />
            <aside className={`home__cart-container ${!cartHasItem && 'home__cart-container--hidden'}`}>
                <div className="cart">
                    <h3 className="cart__title">Cart</h3>
                    <div className="cart__items">{cartItems}</div>
                </div>
                <div className="checkout-container">
                    <p>Total Price : {totalPrice} €</p>
                    <Button onPress={goToCheckout} btnText={'Checkout'} />
                </div>
            </aside>
        </div>
    );
}

Home.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(Home);
