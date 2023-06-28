const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  
  res.send('Login successful');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// 1. Question