import React, { useState, useEffect } from 'react';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/feedbacks')
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 className='feedback'>Customer Feedbacks</h1>
      <ul className='feedback-list'>
        {feedbacks.map(feedback => (
          <li className='feedback-item' key={feedback.id}>
            <div>
            <span className='comment'>{feedback.comment}</span>
            <strong className='feedback-name'>{feedback.name}</strong>
            </div>
            <img className='feedback-img' src={feedback.image_path} alt={feedback.name} />
          </li>
        ))}
      </ul>

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

export default Feedbacks;
