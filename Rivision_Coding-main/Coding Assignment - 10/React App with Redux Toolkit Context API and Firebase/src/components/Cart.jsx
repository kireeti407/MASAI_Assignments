
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <span>{item.title}</span>
                <span>{item.quantity} x ${item.price}</span>
                <button onClick={() => dispatch(removeItem({ id: item.id }))}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
