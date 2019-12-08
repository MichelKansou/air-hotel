import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button/Button';
import './Item.css';

const Item = ({ title, description, imageSrc, price, onSelect }) => (
    <div className="item">
        <img className="item__image" src={imageSrc} alt={title} />
        <div className="item__content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <span className="item__price-tag">{price} €</span>
        <Button onPress={onSelect} btnText={'Book'} />
    </div>
);

Item.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Item;
