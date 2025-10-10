
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { FirebaseContext } from '../context/FirebaseContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { isLoggedIn } = useContext(FirebaseContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      dispatch(addItem(product));
    } else {
      alert('Please login to add items to the cart.');
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
