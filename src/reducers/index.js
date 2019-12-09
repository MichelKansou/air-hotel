import { combineReducers } from 'redux';

import cart from './cart';
import rooms from './room';
import orders from './order';

export default combineReducers({
    cart,
    rooms,
    orders
});
