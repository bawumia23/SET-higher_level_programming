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

  const characters = JSON.parse(body).characters;
  const names = [];
  let completed = 0;

  characters.forEach((characterUrl, index) => {
    request(characterUrl, (characterError, characterResponse, characterBody) => {
      if (characterError) {
        console.error(characterError);
        return;
      }

      if (characterResponse.statusCode !== 200) {
        console.error(`HTTP Error: ${characterResponse.statusCode}`);
        return;
      }

      const character = JSON.parse(characterBody);
      names[index] = character.name;
      completed += 1;

      if (completed === characters.length) {
        names.forEach((name) => console.log(name));
      }
    });
  });
});
