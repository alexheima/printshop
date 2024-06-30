const express = require('express');
const cors = require('cors');
const connection = require('./db'); // Import database connection
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS if necessary

// Route to fetch products from database
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products: ' + err.stack);
      res.status(500).send('Error fetching products');
      return;
    }
    res.json(results); // Send JSON response with products data
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
