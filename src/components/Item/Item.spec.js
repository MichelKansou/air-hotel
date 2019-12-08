import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from 'Components/Item/Item.js';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        title: 'test',
        description: 'description zdpzkfpezf',
        imageSrc: '',
        price: 500,
        onSelect: jest.fn()
    };

    const itemWrapper = shallow(<Item {...props} />);

    return {
        props,
        itemWrapper
    };
}

describe('Item', () => {
    it('should render self', () => {
        const { itemWrapper, props } = setup();

        expect(
            itemWrapper
                .find('div')
                .at(0)
                .hasClass('item')
        ).toBe(true);

        const domImg = itemWrapper.find('img');

        expect(domImg.hasClass('item__image')).toBe(true);
        expect(domImg.prop('src')).toBe(props.imageSrc);
        expect(domImg.prop('alt')).toBe(props.title);

        const domContent = itemWrapper.find('div').at(1);

        expect(domContent.hasClass('item__content')).toBe(true);
        expect(domContent.find('h3').text()).toBe(props.title);
        expect(domContent.find('p').text()).toBe(props.description);

        expect(itemWrapper.find('span').text()).toBe(`${props.price} €`);

        const button = itemWrapper.find('Button');
        expect(button.prop('onPress')).toBe(props.onSelect);
        expect(button.prop('btnText')).toBe('Book');
    });

    it('should call onPress on click event', () => {
        const { itemWrapper, props } = setup();

        const button = itemWrapper.find('Button');

        expect(props.onSelect.mock.calls.length).toBe(0);

        button.props().onPress();

        expect(props.onSelect.mock.calls.length).toBe(1);
    });
});
