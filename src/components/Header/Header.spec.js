import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from 'Components/Header/Header.js';
import { Link, MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
    beforeEach(() => {
        useSelector.mockReset();
        useSelector.mockImplementation(() => ({
            1: {},
            2: {},
            3: {}
        }));
    });

    it('should render self with entrie /', () => {
        const headerWrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Header />
            </MemoryRouter>
        );
        expect(headerWrapper.find('header').hasClass('header')).toBe(true);
        expect(headerWrapper.find('div').hasClass('header__wrapper')).toBe(true);
        expect(
            headerWrapper
                .find(Link)
                .at(0)
                .text()
        ).toBe('AirHotel');

        expect(
            headerWrapper
                .find(Link)
                .at(1)
                .prop('to')
        ).toBe('/');

        expect(
            headerWrapper
                .find(Link)
                .at(2)
                .text()
        ).toBe('Cart (3)');

        expect(headerWrapper.find(Link).length).toBe(3);
    });

    it('should render self and hide cart link', () => {
        const headerWrapper = mount(
            <MemoryRouter initialEntries={['/test']}>
                <Header />
            </MemoryRouter>
        );

        expect(headerWrapper.find(Link).length).toBe(2);
    });
});
