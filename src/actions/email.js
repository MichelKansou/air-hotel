import emailjs from 'emailjs-com';

export const SEND_MAIL_REQUEST = 'SEND_MAIL_REQUEST';
export const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS';
export const SEND_MAIL_FAILED = 'SEND_MAIL_FAILED';

export function sendEmail({ name, email, totalPrice, orderId }) {
    return async dispatch => {
        const templateParams = {
            to_name: name,
            to_email: email,
            order_id: orderId,
            total_price: totalPrice
        };

        dispatch({ type: SEND_MAIL_REQUEST });

        await emailjs.send('gmail', 'template_knBYb5ZN', templateParams, 'user_4xVK5ZVengUEJvgxuV6Gk').then(
            response => {
                dispatch({ type: SEND_MAIL_SUCCESS });
                console.log('SUCCESS!', response.status, response.text);
            },
            err => {
                dispatch({ type: SEND_MAIL_FAILED });
                console.log('FAILED...', err);
            }
        );
    };
}
