import { RECEIVE_DATA } from 'Actions/room';

export default function roomReducer(state = [], actions) {
    switch (actions.type) {
        case RECEIVE_DATA: {
            return actions.roomList;
        }

        default:
            return state;
    }
}
