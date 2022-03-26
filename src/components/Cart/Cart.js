import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className='detail'>
              <div className="cart-container">
              const selected = cart[Math.floor(Mat.random()*cart.length)];
                  
                    <h3>Order Summary in</h3>
                    <p>Selected Items: {cart.length}</p>
                    {
                      cart.map((cart) => (
                          <h4 key={cart.id}>{cart.name}</h4>
                      ))
                    }
                    
                    <button>Chose One For Me</button>
                </div>
        </div>
    );
};

export default Cart;