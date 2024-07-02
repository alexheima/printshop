const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const db1 = mysql.createConnection({
  host: 'localhost',  
  user: 'root',
  password: 'Orient2106',
  database: 'products',
});

db1.connect()

const db2 = mysql.createConnection({
  host: 'localhost',  
  user: 'root',
  password: 'Orient2106',
  database: 'feedbacks',
});

db2.connect()


app.get('/', (req, res) => {
  return res.json('From Backend side'); 
});

app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db1.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
})

app.get('/feedbacks', (req, res) => {
  const sql = 'SELECT * FROM feedbacks';
  db2.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});