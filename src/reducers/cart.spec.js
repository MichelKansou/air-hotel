import cartReducer from 'Reducers/cart.js';
import { ADD_ITEM, REMOVE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM, RESET_CART } from 'Actions/cart.js';

describe('Cart reducer', () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual({
            totalPrice: 0,
            items: {}
        });
    });

    it('should handle ADD_ITEM', () => {
        const item = { id: 1, title: 'Hotel test', price: 200 };
        const addItem = cartReducer(undefined, {
            type: ADD_ITEM,
            item
        });
        expect(addItem).toEqual({
            totalPrice: 200,
            items: {
                1: {
                    title: 'Hotel test',
                    price: 200,
                    imageSrc: '',
                    quantity: 1
                }
            }
        });

        const item2 = { id: 2, title: 'Hotel test 2', price: 500 };

        const addItem2 = cartReducer(addItem, {
            type: ADD_ITEM,
            item: item2
        });

        expect(addItem2).toEqual({
            totalPrice: 700,
            items: {
                1: {
                    title: 'Hotel test',
                    price: 200,
                    imageSrc: '',
                    quantity: 1
                },
                2: {
                    title: 'Hotel test 2',
                    price: 500,
                    imageSrc: '',
                    quantity: 1
                }
            }
        });
    });

    it('should handle REMOVE_ITEM', () => {
        const reducerState = {
            totalPrice: 1000,
            items: {
                1: {
                    title: 'Hotel test',
                    imageSrc: '',
                    price: 500,
                    quantity: 1
                },
                2: {
                    title: 'Hotel test 2',
                    imageSrc: '',
                    price: 500,
                    quantity: 1
                }
            }
        };

        const itemId = 1;

        const removeItem = cartReducer(reducerState, {
            type: REMOVE_ITEM,
            id: itemId
        });

        expect(removeItem).toEqual({
            totalPrice: 500,
            items: {
                2: {
                    title: 'Hotel test 2',
                    price: 500,
                    imageSrc: '',
                    quantity: 1
                }
            }
        });
    });

    it('should handle INCREMENT_ITEM', () => {
        const reducerState = {
            totalPrice: 1000,
            items: {
                1: {
                    title: 'Hotel test',
                    imageSrc: '',
                    price: 500,
                    quantity: 1
                },
                2: {
                    title: 'Hotel test 2',
                    imageSrc: '',
                    price: 500,
                    quantity: 1
                }
            }
        };

        const itemId = 1;

        const incrementItem = cartReducer(reducerState, {
            type: INCREMENT_ITEM,
            id: itemId
        });

        expect(incrementItem).toEqual({
            totalPrice: 1500,
            items: {
                1: {
                    title: 'Hotel test',
                    imageSrc: '',
                    price: 500,
                    quantity: 2
                },
                2: {
                    title: 'Hotel test 2',
                    imageSrc: '',
                    price: 500,
                    quantity: 1
                }
            }
        });
    });

    it('should handle DECREMENT_ITEM', () => {
        const reducerState = {
            totalPrice: 1000,
            items: {
                1: {
                    title: 'Hotel test',
                    imageSrc: '',
                    price: 500,
                    quantity: 2
                }
            }
        };

        const itemId = 1;

        const decrementItem = cartReducer(reducerState, {
            type: DECREMENT_ITEM,
            id: itemId
        });

        expect(decrementItem).toEqual({
            totalPrice: 500,
            items: {
                1: {
                    title: 'Hotel test',
                    price: 500,
                    imageSrc: '',
                    quantity: 1
                }
            }
        });
    });

    it('should handle RESET_CART', () => {
        const reducerState = {
            totalPrice: 1000,
            items: {
                1: {
                    title: 'Hotel test',
                    imageSrc: '',
                    price: 500,
                    quantity: 2
                }
            }
        };

        const resetCart = cartReducer(reducerState, {
            type: RESET_CART
        });

        expect(resetCart).toEqual({
            totalPrice: 0,
            items: {}
        });
    });
});
