import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);

    const choseOne = car => {
        if (cart.length) {
            const randomNumber = Math.round(Math.random() * (cart.length -1));
            console.log(randomNumber);
            const text = cart[randomNumber].name +  ' Suggested For You!';
            alert(text);
        }
        else{
            alert('Please select at least one item')
        }
    }

    return (
        <div className='detail'>
              <div className="cart-container">
                  
                    <h3>Order Summary in</h3>
                    <p>Selected Items: {cart.length}</p>
                    {
                      cart.map((cart) => (
                          <h4 key={cart.id}>{cart.name}</h4>
                      ))
                    }
                    
                    <button onClick={() => choseOne(cart)}>Chose One For Me</button>
                </div>
        </div>
    );
};

export default Cart;