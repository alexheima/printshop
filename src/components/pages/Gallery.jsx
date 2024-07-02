import React, { useState, useEffect } from 'react';
import Cart from './Cart'; 

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    // Check if the product is already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // If the product is already in cart, update quantity
      setCart(prevCart => (
        prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      ));
    } else {
      // If the product is not in cart, add it with quantity 1
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    // Remove item from cart based on productId
    setCart(prevCart => (
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    ));
  };

  return (
    <div>
      <div className='gallery'>
        <h1 className="h1" style={{ textAlign: 'center' }}>Our prints</h1>
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product">
              <img src={product.image_path} alt={product.name} />
              <p className='price'>{product.price} $</p>
              <p>{product.description}</p>
              <button onClick={() => { addToCart(product); }}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Render cart */}
      <div className='cart' style={{ display: cart.length > 0 ? 'block' : 'none' }}>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>

      <footer>
        <section className="flexfooter" style={{ background: 'black' }}>
          <a href="https://www.instagram.com/alex_karamanov"><img src="/instagram-white-icon copy.png" alt="instagram" style={{ width: '100%' }} /></a>
          <a href="https://www.500px.com/alex_karamanov"><img src="/500px.png" alt="500px" style={{ width: '100%' }} /></a>
          <a href="https://www.stocksy.com/alexalina"><img src="/logoStocksy.svg" alt="Stocksy" style={{ width: '100%' }} /></a>
          <a href="https://www.flickr.com/photos/alex_karamanov"><img src="Flickr-PNG-Picture.png" alt="flickr" style={{ width: '100%' }} /></a>
        </section>
        <p className="copyrght">2024 &copy; Maralex</p>
      </footer>
    </div>
  );
};

export default ProductsList;
