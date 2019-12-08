import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementItem } from 'Actions/cart';
import Item from 'Components/Item/Item';
import './Main.css';

function Main() {
    const dispatch = useDispatch();
    const [items, rooms] = useSelector(state => [state.cart.items, state.rooms]);

    const handleItemChange = selectedItem => {
        items[selectedItem.id] ? dispatch(incrementItem(selectedItem.id)) : dispatch(addItem(selectedItem));
    };

    const itemList = rooms.map(item => (
        <Item
            key={item.id}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            price={item.price}
            onSelect={() => handleItemChange(item)}
        />
    ));

    return <main className="main">{itemList}</main>;
}

export default Main;
