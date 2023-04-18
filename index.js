const express = require('express');
require('dotenv').config()
const db=require('./config/mongoose')
const app = express();

app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use('/', require('./routes'))
app.use(express.static('./assets'))
app.set('view engine', 'ejs')
app.set('views', './views')

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});