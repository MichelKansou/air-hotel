import { ADD_ITEM, INCREMENT_ITEM, DECREMENT_ITEM, REMOVE_ITEM, RESET_CART } from 'Actions/cart';

const incrementQuantity = quantity => quantity + 1 || 1;

const decrementQuantity = quantity => (quantity - 1 < 0 ? 0 : quantity - 1);

export default function cartReducer(
    state = {
        items: {},
        totalPrice: 0
    },
    actions
) {
    switch (actions.type) {
        case ADD_ITEM: {
            const { id, title, price, imageSrc = '' } = actions.item;

            return {
                ...state,
                totalPrice: state.totalPrice + price,
                items: {
                    ...state.items,
                    [id]: {
                        title,
                        price,
                        imageSrc,
                        quantity: 1
                    }
                }
            };
        }

        case INCREMENT_ITEM: {
            const { price, quantity } = state.items[actions.id];

            return {
                ...state,
                totalPrice: state.totalPrice + price,
                items: {
                    ...state.items,
                    [actions.id]: {
                        ...state.items[actions.id],
                        quantity: incrementQuantity(quantity)
                    }
                }
            };
        }

        case DECREMENT_ITEM: {
            const { price, quantity } = state.items[actions.id];

            return {
                ...state,
                totalPrice: state.totalPrice - price < 0 ? 0 : state.totalPrice - price,
                items: {
                    ...state.items,
                    [actions.id]: {
                        ...state.items[actions.id],
                        quantity: decrementQuantity(quantity)
                    }
                }
            };
        }

        case REMOVE_ITEM: {
            const { [actions.id]: removedItem, ...rest } = state.items;

            return {
                ...state,
                totalPrice: state.totalPrice - removedItem.price < 0 ? 0 : state.totalPrice - removedItem.price,
                items: {
                    ...rest
                }
            };
        }

        case RESET_CART: {
            return {
                totalPrice: 0,
                items: {}
            };
        }

        default:
            return state;
    }
}
