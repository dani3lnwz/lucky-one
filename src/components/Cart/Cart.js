import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);

    const choseOne = car => {
        if (car.length) {
            const randomNumber = Math.round(Math.random() * (cart.length -1));
            console.log(randomNumber);
            const text = car[randomNumber].name +  ' Suggested For You!';
            alert(text);
        }
        else{
            alert('Please select at least one item')
        }
    }

    
    // reload area//
    const handleReChooseBtn = () => {
        window.location.reload();
    }

    return (
        <div className='detail'>
              <div className="cart-container">
                  
                    <h4>Order Summary:</h4>
                    <h5>Selected Items: {cart.length}</h5>
                    {
                      cart.map((cart) => (
                          <h4 key={cart.id}>{cart.name}</h4>
                      ))
                    }
                    
                    <button className='btn-1' onClick={() => choseOne(cart)}>Chose One </button>
                    <br />
                    <button className='btn-2' onClick={handleReChooseBtn}>Choose again</button>
                </div>
        </div>
    );
};

export default Cart;