import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from 'Components/ErrorMessage/ErrorMessage.js';

Enzyme.configure({ adapter: new Adapter() });

describe('ErrorMessage', () => {
    it('should render self to null if errors prop isnt set', () => {
        const errorMessageWrapper = shallow(<ErrorMessage name="email" />);
        expect(errorMessageWrapper.type()).toBe(null);
    });

    it('should render self with default error', () => {
        const props = {
            name: 'email',
            errors: {
                email: {
                    type: '',
                    message: 'test message'
                }
            }
        };
        const errorMessageWrapper = shallow(<ErrorMessage {...props} />);

        expect(errorMessageWrapper.find('span').hasClass('msg msg--warning')).toBe(true);
        expect(errorMessageWrapper.find('span').text()).toBe(props.errors.email.message);
    });

    it('should render self with required error', () => {
        const props = {
            name: 'email',
            errors: {
                email: {
                    type: 'required',
                    message: 'test message'
                }
            }
        };
        const errorMessageWrapper = shallow(<ErrorMessage {...props} />);

        expect(errorMessageWrapper.find('span').hasClass('msg msg--danger')).toBe(true);
        expect(errorMessageWrapper.find('span').text()).toBe(props.errors.email.message);
    });

    it('should render self with minLength error', () => {
        const props = {
            name: 'email',
            errors: {
                email: {
                    type: 'minLength',
                    message: 'test message'
                }
            }
        };
        const errorMessageWrapper = shallow(<ErrorMessage {...props} />);

        expect(errorMessageWrapper.find('span').hasClass('msg msg--warning')).toBe(true);
        expect(errorMessageWrapper.find('span').text()).toBe(props.errors.email.message);
    });
});
