'use strict';

const express = require('express');
require('dotenv').config();

// tells it to look inside public folder
const app = express();
app.use(express.static('public'));

// goes to file env and get all the data from it OR assign PORT to 3000
const PORT = process.env.PORT || 3000;

//routes
app.get('/hello', (request, response) => {
  response.send('Hello');
})

app.get('/data', (request, response) => {
  let chris = {
    name: 'Chris',
    hair: 'dark brown',
    eyes: 'brown',
    favoriteFood: 'curry',
    favoriteDrink: 'beer',
  }
  response.status(200).json(chris);
})

app.use('*', (request, response) => {
  response.status(404).send('Sorry, that route does not exist');
})


app.listen(PORT, () => console.log(`listening on ${PORT}`));