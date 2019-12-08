import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetCart } from 'Actions/cart';
import Button from 'Components/Button/Button';
import './ConfirmationPage.css';

function ConfirmationPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const goToHome = () => {
        dispatch(resetCart());
        history.replace('/');
    };

    return (
        <div className="confirmation-page">
            <h3 className="confirmation-page__title">Your order was successful!</h3>
            <div className="confirmation-page__content">
                <p>An email was sent to your email with your order details please check your inbox for your order details</p>
            </div>
            <Button onPress={goToHome} btnText={'Go To Home'} />
        </div>
    );
}

export default ConfirmationPage;
