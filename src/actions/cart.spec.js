import {
    ADD_ITEM,
    REMOVE_ITEM,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
    RESET_CART,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    resetCart
} from 'Actions/cart.js';

describe('Cart actions', () => {
    it('should create an action to add item', () => {
        const item = {
            id: 1,
            content: 'test'
        };
        const expectedAction = {
            type: ADD_ITEM,
            item
        };
        expect(addItem(item)).toEqual(expectedAction);
    });

    it('should create an action to remove item', () => {
        const id = 1;
        const expectedAction = {
            type: REMOVE_ITEM,
            id
        };
        expect(removeItem(id)).toEqual(expectedAction);
    });

    it('should create an action to increment existing item', () => {
        const id = 1;
        const expectedAction = {
            type: INCREMENT_ITEM,
            id
        };
        expect(incrementItem(id)).toEqual(expectedAction);
    });

    it('should create an action to decrement existing item', () => {
        const id = 1;
        const expectedAction = {
            type: DECREMENT_ITEM,
            id
        };
        expect(decrementItem(id)).toEqual(expectedAction);
    });

    it('should create an action to reset existing cart', () => {
        const expectedAction = {
            type: RESET_CART
        };
        expect(resetCart()).toEqual(expectedAction);
    });
});
