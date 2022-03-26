import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Collection.css'

const Collection = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    

    useEffect (() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        
        if(newCart.length>4){
            
        }
        else{
            setCart(newCart);
        }
    }

    return (
        <div className='container'>
            <div className="items-container">
                {
                    products.map(product => <Car
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Car>)
                }
            </div>
            <div className='carts'>
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Collection;