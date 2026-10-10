#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';
  let count = 0;

  data.results.forEach((film) => {
    if (film.characters.includes(characterUrl)) {
      count++;
    }
  });

  console.log(count);
});
