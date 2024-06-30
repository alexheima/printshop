const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',  
  user: 'root',
  password: 'Orient2106',
  database: 'products',
});

app.get('/', (req, res) => {
  return res.json('From Backend side'); 
});

app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});