import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products);
        setDisplayed(res.data.products);
        const uniqueCats = [...new Set(res.data.products.map(p => p.category))];
        setCategories(uniqueCats);
      });
  }, []);

  const filterByCategory = (category) => {
    if (category === 'All') {
      setDisplayed(products);
    } else {
      setDisplayed(products.filter(p => p.category === category));
    }
  };

  const sortByPrice = (order) => {
    let sorted = [...displayed];
    if (order === 'low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === 'high') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortOrder(order);
    setDisplayed(sorted);
  };

  return (
    <div>
      <h2>Product Store</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Category: </label>
        <select onChange={(e) => filterByCategory(e.target.value)}>
          <option>All</option>
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <label style={{ marginLeft: '1rem' }}>Sort by Price: </label>
        <select onChange={(e) => sortByPrice(e.target.value)}>
          <option value="">None</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {displayed.map(p => (
          <Link to={`/product/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'black' }}>
            <div style={{ border: '1px solid gray', padding: '1rem' }}>
              <img src={p.thumbnail} alt={p.title} width="100%" style={{ height: '150px', objectFit: 'cover' }} />
              <h4>{p.title}</h4>
              <p>${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
