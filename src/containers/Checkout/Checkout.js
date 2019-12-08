import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';
import InputField from 'Components/InputField/InputField';
import './Checkout.css';

const CheckoutDetails = ({ items }) =>
    Object.keys(items).map(id => (
        <div className="checkout-item" key={id}>
            <img className="checkout-item__image" src={items[id].imageSrc} alt={items[id].title} />
            <div className="checkout-item__content">
                <h3 className="checkout-item__title">{items[id].title}</h3>
                <span>Quantity : {items[id].quantity}</span>
            </div>
            <span className="checkout-item__price">{items[id].price} €</span>
        </div>
    ));

function Checkout() {
    const { items, totalPrice } = useSelector(state => state.cart);

    const { handleSubmit, register, errors } = useForm();

    const history = useHistory();

    const onSubmit = values => {
        history.replace('/confirmation');
    };

    if (Object.keys(items).length < 1) {
        history.replace('/');
    }

    return (
        <div className="checkout">
            <h1 className="checkout__title">Checkout details</h1>
            <div className="checkout__details">
                <div className="checkout__items">
                    <CheckoutDetails items={items} />
                    <h5 className="checkout__total-price">Total Price : {totalPrice} €</h5>
                </div>
                <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        name="email"
                        label="Email*"
                        placeholder="john.doe@example.com"
                        register={register({
                            required: {
                                value: true,
                                message: 'Email address is required !'
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        type="email"
                        errors={errors}
                    />
                    <InputField
                        name="firstname"
                        label="First Name"
                        placeholder="John"
                        register={register({
                            minLength: {
                                value: 3,
                                message: 'Invalid First Name'
                            }
                        })}
                        errors={errors}
                    />
                    <InputField
                        name="lastname"
                        label="Last Name"
                        placeholder="Doe"
                        register={register({
                            minLength: {
                                value: 3,
                                message: 'Invalid Last Name'
                            }
                        })}
                        errors={errors}
                    />
                    <InputField
                        name="address"
                        label="Address"
                        register={register({
                            minLength: {
                                value: 3,
                                message: 'Invalid Address'
                            }
                        })}
                        errors={errors}
                    />
                    <button className="checkout__form__btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
