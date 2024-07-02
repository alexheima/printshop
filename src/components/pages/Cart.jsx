import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1 className='cart-h1'>Your cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
         {cart.map(item => (
          <li key={item.id}>
            <img className='image-cart' src={item.image_path} alt={item.name} style={{marginRight: '10px' }} />
            <div>
              <span>{item.name}</span>
              <span className='quantity'>Quantity: {item.quantity}</span>
            </div>
              <button className='cartbtn-remove' onClick={() => removeFromCart(item.id)}>Remove</button>
              {cart.length > 0 && <button className='cartbtn' >CHECKOUT</button>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
