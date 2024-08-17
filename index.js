const express = require('express');
const app = express();
const port = 3000;

// Define a route at /node-poc 
app.get('/node-poc', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
