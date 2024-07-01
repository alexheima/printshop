import React, { useState, useEffect } from 'react';
import Cart from './Cart'; 


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const addToCart = (product) => {
    setCart(prevCart => {
      const isAlreadyInCart = prevCart.some(item => item.id === product.id);
      
      if (isAlreadyInCart) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.id === productId);
      
      if (item.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter(item => item.id !== productId);
      }
    });
  };
  return (
    <div>
      <div>
      <h1 className="h1" style={{textAlign: 'center'}} >Our prints</h1>
      <ul className="product-list">
    {products.map(product => (
        <li key={product.id} className="product">
         <img src={product.image_path} alt={product.name} />
            <p className='price'>{product.price} $</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
    ))}
</ul>

    <div className='cart'>
    {cart.length > 0 && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
</div>

      <footer>
              <section className="flexfooter" style={{background:'black'}}>
                  <a href="https://www.instagram.com/alex_karamanov" ><img src="/instagram-white-icon copy.png" alt="instagram" style={{width:'100%'}}/></a>
                  <a href="https://www.500px.com/alex_karamanov" ><img src="/500px.png" alt="500px" style={{width:'100%'}}/></a>
                  <a href="https://www.stocksy.com/alexalina" ><img src="/logoStocksy.svg" alt="Stocksy" style={{width:'100%'}}/></a>
                  <a href="https://www.flickr.com/photos/alex_karamanov" ><img src="Flickr-PNG-Picture.png" alt="flickr" style={{width:'100%'}}/></a>
              </section>
              <p className="copyrght">2024 &copy; Maralex  </p> 
          </footer>
    </div>
  );
};

export default ProductsList;
