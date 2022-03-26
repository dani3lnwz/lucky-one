import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import './Car.css'

const Car = (props) => {
    const {id, name, price, image} = props.product;
    return (
        <div className='car'>
            <img src={image} alt=""></img>
            <div className='car-info'>
                <p className='car-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Serial Num: {id}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Car;