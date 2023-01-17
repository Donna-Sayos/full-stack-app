const path = require('path'); // is a Node module for working with file and directory paths;
const express = require('express'); // is a Node module for creating a server;
const morgan = require('morgan'); // is a middleware for Node... logger

const app = express(); // returns an instance of an Express Application;

app.use(morgan('dev')); // using the 'dev' format for morgan;
app.use(express.json()); // a body parser for JSON data;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html'))); // will handle all GET requests that are sent to the root path;

app.use(express.static(path.join(__dirname, '..', 'public'))); // will serve up static files from the public folder;

app.use((req, res, next) => { // will handle remaining requests with an extension (e.g. .js, .css, .png, etc.) and send 404;
    if (path.extname(req.path).length) {
        const err = new Error('Not found');
        err.status = 404;
        next(err); // will pass the error to the next middleware;
    } else {
        next();
    }
});

app.use('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html'))); // will handle all requests that don't match any of the above routes;

app.use((err, req, res, next) => { // will handle any errors that may occur;
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error 🔥🔥🔥');
});

const PORT = process.env.PORT || 4001; // will use the PORT environment variable or 4001 if it's not available;

app.listen(PORT, () => { // will start the server;
    console.log(`Server is listening on PORT: ${PORT} 🔊🔊🔊`);
})