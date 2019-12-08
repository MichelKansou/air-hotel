export const ADD_ITEM = 'ADD_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const RESET_CART = 'RESET_CART';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    };
}

export function incrementItem(id) {
    return {
        type: INCREMENT_ITEM,
        id
    };
}

export function decrementItem(id) {
    return {
        type: DECREMENT_ITEM,
        id
    };
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    };
}

export function resetCart() {
    return {
        type: RESET_CART
    };
}
