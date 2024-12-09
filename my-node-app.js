// Import express
const express = require('express');

// Create an express app
const app = express();

// Set a basic route
app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
