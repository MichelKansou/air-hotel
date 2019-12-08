import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Main from 'Components/Main/Main.js';
import { addItem, incrementItem } from 'Actions/cart';
jest.mock('react-redux');

Enzyme.configure({ adapter: new Adapter() });

const roomList = [
    {
        id: '1',
        title: 'Viator Hôtel',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
        imageSrc: 'https://www.hotelamaryllis.com/wp-content/uploads/1760/1653/nggallery/content/xslider-mobile2.jpg.pagespeed.ic.HzBiXYlEk4.jpg',
        price: 250
    },
    {
        id: '2',
        title: 'Hôtel Prince Albert Opéra',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
        imageSrc:
            'https://www.hotelfernandoiii.es/wp-content/uploads/sites/1702/nggallery/03-home/03HOME_SLIDER_2-copy_MOBILe.jpg.pagespeed.ce.y7sqD6yN0I.jpg',
        price: 300
    },
    {
        id: '3',
        title: 'Hôtel Renaissance',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
        imageSrc: 'https://www.hotelstgothard-nice.com/wp-content/uploads/1815/1653/nggallery/responsive/header-slider2.jpg',
        price: 400
    },
    {
        id: '4',
        title: 'Hôtel Cosy Monceau',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
        imageSrc: 'https://www.hotelreyalfonsox.es/wp-content/uploads/sites/1706/nggallery/03-home/mobile-slider01.jpg',
        price: 500
    }
];

describe('Main', () => {
    beforeEach(() => {
        useSelector.mockReset();
        useDispatch.mockReset();
        useSelector.mockImplementation(() => ({}));
        useDispatch.mockImplementation(() => jest.fn());
    });

    it('should render self', () => {
        useSelector.mockImplementation(() => [{}, roomList]);

        const mainWrapper = shallow(<Main />);

        expect(mainWrapper.find('main').hasClass('main')).toBe(true);

        const items = mainWrapper.find('Item');

        expect(items.length).toBe(4);
    });

    it('should handle new item change', () => {
        const mockDispatch = jest.fn();
        useDispatch.mockImplementation(() => mockDispatch);

        useSelector.mockImplementation(() => [{}, roomList]);

        const mainWrapper = shallow(<Main />);

        expect(mainWrapper.find('main').hasClass('main')).toBe(true);

        const items = mainWrapper.find('Item');
        items
            .at(0)
            .props()
            .onSelect();

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(addItem(roomList[0]));
    });

    it('should handle existing item', () => {
        const mockDispatch = jest.fn();
        useDispatch.mockImplementation(() => mockDispatch);

        useSelector.mockImplementation(() => [
            {
                '1': {
                    title: 'Viator Hôtel',
                    description:
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                    imageSrc:
                        'https://www.hotelamaryllis.com/wp-content/uploads/1760/1653/nggallery/content/xslider-mobile2.jpg.pagespeed.ic.HzBiXYlEk4.jpg',
                    price: 250
                }
            },
            roomList
        ]);

        const mainWrapper = shallow(<Main />);

        expect(mainWrapper.find('main').hasClass('main')).toBe(true);

        const items = mainWrapper.find('Item');
        items
            .at(0)
            .props()
            .onSelect();

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(incrementItem(roomList[0].id));
    });
});
