const express = require('express');
const morgan = require('morgan'); // is a middleware for Node... logger

const app = express(); // returns an instance of an Express Application;

app.use(morgan('dev')); // using the 'dev' format for morgan;

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT} 🔊🔊🔊`);
})