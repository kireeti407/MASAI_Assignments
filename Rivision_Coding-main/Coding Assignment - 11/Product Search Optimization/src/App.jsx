import { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";

const ProductItem = ({ product, onLike, isLiked }) => {
  return (
    <li>
      <span>
        {product.title} - ${product.price}
      </span>
      <button onClick={() => onLike(product.id)}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </li>
  );
};

const MemoizedProductItem = ({ product, onLike, isLiked }) => {
  return (
    <ProductItem product={product} onLike={onLike} isLiked={isLiked} />
  );
};

const ProductList = ({ products, onLike, likedItems }) => {
  return (
    <ul>
      {products.map((product) => (
        <MemoizedProductItem
          key={product.id}
          product={product}
          onLike={onLike}
          isLiked={likedItems.has(product.id)}
        />
      ))}
    </ul>
  );
};

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [likedItems, setLikedItems] = useState(new Set());

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleLike = useCallback((productId) => {
    setLikedItems((prevLikedItems) => {
      const newLikedItems = new Set(prevLikedItems);
      if (newLikedItems.has(productId)) {
        newLikedItems.delete(productId);
      } else {
        newLikedItems.add(productId);
      }
      return newLikedItems;
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ProductList
        products={filteredProducts}
        onLike={handleLike}
        likedItems={likedItems}
      />
    </div>
  );
}

export default App;