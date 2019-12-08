import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputField from 'Components/InputField/InputField.js';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        name: 'email',
        label: 'Email',
        register: jest.fn(),
        placeholder: 'Email',
        type: 'email',
        errors: {}
    };

    const inputFieldWrapper = shallow(<InputField {...props} />);

    return {
        props,
        inputFieldWrapper
    };
}

describe('InputField', () => {
    it('should render self', () => {
        const { inputFieldWrapper, props } = setup();

        expect(inputFieldWrapper.find('div').hasClass('input-field')).toBe(true);

        const label = inputFieldWrapper.find('label');
        expect(label.hasClass('input-field__label')).toBe(true);
        expect(label.prop('htmlFor')).toBe(props.name);
        expect(label.text()).toBe(props.label);

        const input = inputFieldWrapper.find('input');
        expect(input.hasClass('input-field__input')).toBe(true);
        expect(input.prop('name')).toBe(props.name);
        expect(input.prop('type')).toBe(props.type);
        expect(input.prop('placeholder')).toBe(props.placeholder);

        const errorMessage = inputFieldWrapper.find('ErrorMessage');
        expect(errorMessage.prop('name')).toBe(props.name);
        expect(errorMessage.prop('errors')).toBe(props.errors);
    });

    it('should render self with default value', () => {
        const props = {
            name: 'email',
            label: 'Email',
            register: jest.fn(),
            type: 'email'
        };

        const inputFieldWrapper = shallow(<InputField {...props} />);
        expect(inputFieldWrapper.find('input').prop('placeholder')).toBe(props.label);
    });
});
