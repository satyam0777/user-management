const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// In-memory users array (for demonstration purposes)
let users = [
    { id: 1, name: 'satyam' },
    { id: 2, name: 'shivam' },
    { id: 3, name: 'shubham'},
];

// GET /users endpoint to fetch users
app.get('/users', (req, res) => {
    res.json(users); // Send the users as a JSON response
});

// POST /users endpoint to add a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser); // Add the new user to the array
    res.status(201).json(newUser); // Send the new user as a response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
