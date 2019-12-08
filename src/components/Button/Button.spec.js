import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'Components/Button/Button.js';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        btnText: 'Book Room',
        onPress: jest.fn()
    };

    const btnWrapper = shallow(<Button {...props} />);

    return {
        props,
        btnWrapper
    };
}

describe('Button', () => {
    it('should render self', () => {
        const { btnWrapper } = setup();

        expect(btnWrapper.find('button').hasClass('button')).toBe(true);

        expect(btnWrapper.find('button').text()).toBe('Book Room');
    });

    it('should call onPress on click event', () => {
        const { btnWrapper, props } = setup();

        expect(props.onPress.mock.calls.length).toBe(0);

        btnWrapper.simulate('click');

        expect(props.onPress.mock.calls.length).toBe(1);
    });

    it('should render self with default value', () => {
        const btnWrapper = shallow(<Button onPress={jest.fn()} />);

        expect(btnWrapper.find('button').hasClass('button')).toBe(true);

        expect(btnWrapper.find('button').text()).toBe('Submit');
    });
});
