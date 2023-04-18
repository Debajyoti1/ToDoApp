const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

app.get('/', (req, res) => {
    console.log(process.env.a,process.env.b);
    res.send('Hello World!');
  });
  
  // Start server
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });