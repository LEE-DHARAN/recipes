const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({ message: 'hello world!' });
});

app.listen(3001, () => {
    console.log('server is running @ http://localhost:3001');
});