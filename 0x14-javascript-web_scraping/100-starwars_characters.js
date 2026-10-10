#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`HTTP Error: ${response.statusCode}`);
    return;
  }

  const movie = JSON.parse(body);

  movie.characters.forEach((characterUrl) => {
    request(characterUrl, (characterError, characterResponse, characterBody) => {
      if (!characterError && characterResponse.statusCode === 200) {
        const character = JSON.parse(characterBody);
        console.log(character.name);
      }
    });
  });
});
