import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from 'Components/Counter/Counter.js';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        counter: 0,
        increment: jest.fn(),
        decrement: jest.fn()
    };

    const counterWrapper = shallow(<Counter {...props} />);

    return {
        props,
        counterWrapper
    };
}

describe('Counter', () => {
    it('should render self', () => {
        const { counterWrapper, props } = setup();

        expect(counterWrapper.find('div').hasClass('counter')).toBe(true);

        const decrementBtn = counterWrapper.find('button').at(0);
        expect(decrementBtn.text()).toBe('-');
        expect(decrementBtn.hasClass('counter__btn')).toBe(true);
        expect(decrementBtn.props().onClick).toBe(props.decrement);

        const incrementBtn = counterWrapper.find('button').at(1);
        expect(incrementBtn.text()).toBe('+');
        expect(incrementBtn.hasClass('counter__btn')).toBe(true);
        expect(incrementBtn.props().onClick).toBe(props.increment);
    });

    it('should call onPress on click event', () => {
        const { counterWrapper, props } = setup();
        const decrementBtn = counterWrapper.find('button').at(0);
        const incrementBtn = counterWrapper.find('button').at(1);

        expect(props.increment.mock.calls.length).toBe(0);
        expect(props.decrement.mock.calls.length).toBe(0);

        decrementBtn.simulate('click');

        expect(props.decrement.mock.calls.length).toBe(1);

        incrementBtn.simulate('click');

        expect(props.increment.mock.calls.length).toBe(1);
    });
});
