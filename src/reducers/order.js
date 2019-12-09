import { ADD_ORDER } from 'Actions/order';

export default function orderReducer(state = [], actions) {
    switch (actions.type) {
        case ADD_ORDER: {
            return [...state, actions.order];
        }

        default:
            return state;
    }
}
