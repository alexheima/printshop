import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products'); // Adjust URL as needed
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ' + error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our prints</h1>
      <ul>
        {products.map(product => (
          <li key={product.product_id}>
            {product.product_name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
