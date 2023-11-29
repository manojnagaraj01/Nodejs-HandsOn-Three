const express = require('express');
const app = express();

// Middleware for all routes
const universalMiddleware = (req, res, next) => {
    console.log(`Request received for: ${req.method} ${req.url}`);
    next();
};

// Middleware for specific routes
const specificRoutesMiddleware = (req, res, next) => {
    console.log("This middleware applies to specific routes.");
    next();
};

// Applying universalMiddleware to all routes
app.use(universalMiddleware);

// Applying specificRoutesMiddleware to two specific routes
app.get('/specificRoute1', specificRoutesMiddleware, (req, res) => {
    console.log("Viewing users profile");
    res.send ([
        {
            "name" : "Manoj",
            "age" : 23
        },
        {
            "name" : "Gowda",
            "age" : 24
        },
    ])
});

app.post('/specificRoute2', specificRoutesMiddleware, (req, res) => {
    res.send('Updating User profile');
});

// Example of a generic route
app.get('/genericRoute', (req, res) => {
    res.send('Handling generic route');
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
