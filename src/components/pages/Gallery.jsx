import React, { useState, useEffect } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      <h1 className="h1" style={{textAlign: 'center'}} >Our prints</h1>
      <ul className="product-list">
        {products.map(product => (
           <li key={product.id} className="product">
           <span>{product.name} - ${product.price}</span>
           <button>Add to Cart</button>
       </li>
        ))}
      </ul>
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
