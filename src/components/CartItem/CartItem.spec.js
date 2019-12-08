import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CartItem from 'Components/CartItem/CartItem.js';
import { incrementItem, decrementItem, removeItem } from 'Actions/cart';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        itemId: '1',
        item: {
            title: 'Hotel Room 1',
            imageSrc: 'imageURL',
            price: 500,
            quantity: 2
        }
    };

    const cartItemWrapper = shallow(<CartItem {...props} />);

    return {
        props,
        cartItemWrapper
    };
}

describe('CartItem', () => {
    it('should render self', () => {
        const { cartItemWrapper, props } = setup();

        expect(
            cartItemWrapper
                .find('div')
                .at(0)
                .hasClass('cart-item')
        ).toBe(true);

        const cartItemImage = cartItemWrapper.find('img');
        expect(cartItemImage.hasClass('cart-item__image')).toBe(true);
        expect(cartItemImage.prop('src')).toBe(props.item.imageSrc);
        expect(cartItemImage.prop('alt')).toBe(props.item.title);

        expect(
            cartItemWrapper
                .find('div')
                .at(1)
                .hasClass('cart-item__content')
        ).toBe(true);

        expect(cartItemWrapper.find('h3').hasClass('cart-item__title')).toBe(true);
        expect(cartItemWrapper.find('h3').text()).toBe(props.item.title);

        expect(cartItemWrapper.find('Counter').props().counter).toBe(props.item.quantity);

        expect(cartItemWrapper.find('span').hasClass('cart-item__price')).toBe(true);
        expect(cartItemWrapper.find('span').text()).toBe(`${props.item.price} €`);
    });

    it('should call increment', () => {
        const { cartItemWrapper } = setup();

        const counter = cartItemWrapper.find('Counter');

        counter.props().increment();
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(incrementItem('1'));
    });

    it('should call decrement', () => {
        const { cartItemWrapper } = setup();

        const counter = cartItemWrapper.find('Counter');

        counter.props().decrement();
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenCalledWith(decrementItem('1'));
    });

    it('should call remove if item quantity is less than 2', () => {
        const props = {
            itemId: '1',
            item: {
                title: 'Hotel Room 1',
                imageSrc: 'imageURL',
                price: 500,
                quantity: 1
            }
        };

        const mockCartItem = shallow(<CartItem {...props} />);

        const counter = mockCartItem.find('Counter');

        counter.props().decrement();
        expect(mockDispatch).toHaveBeenCalledTimes(3);
        expect(mockDispatch).toHaveBeenCalledWith(removeItem('1'));
    });
});
