import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
    const cartItems = useSelector(state => state.cart.items);
    const cartItemsLength = Object.keys(cartItems).length;
    const routeAtHome = useRouteMatch('/');

    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__brand-name">
                    AirHotel
                </Link>
                <Link to="/" className="header__user">
                    John Doe
                </Link>
                {routeAtHome.isExact && (
                    <Link to="/cart" className="header__cart-btn">
                        {`Cart (${cartItemsLength})`}
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
