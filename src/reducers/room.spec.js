import roomReducer from 'Reducers/room';
import { RECEIVE_DATA } from 'Actions/room';

describe('Room reducer', () => {
    it('should return the initial state', () => {
        expect(roomReducer(undefined, {})).toEqual([]);
    });

    it('should handle RECEIVE_DATA', () => {
        const roomList = [
            { id: 1, title: 'Hotel test', price: 200 },
            { id: 2, title: 'Hotel test', price: 200 }
        ];
        const fetchedRooms = roomReducer(undefined, {
            type: RECEIVE_DATA,
            roomList
        });
        expect(fetchedRooms).toEqual(roomList);
    });
});
