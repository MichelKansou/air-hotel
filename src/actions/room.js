import firebase from 'Utils/firestore';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(roomList) {
    return {
        type: RECEIVE_DATA,
        roomList
    };
}

export function fetchRooms() {
    return async dispatch => {
        await firebase
            .firestore()
            .collection('roomlist')
            .get()
            .then(data => {
                const roomList = [];
                data.forEach(room => {
                    roomList.push({
                        id: room.id,
                        ...room.data()
                    });
                });
                dispatch(receiveDataAction(roomList));
            });
    };
}
