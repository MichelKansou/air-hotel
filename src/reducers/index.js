import { combineReducers } from 'redux';

import cart from './cart';
import rooms from './room';

export default combineReducers({
    cart,
    rooms
});
