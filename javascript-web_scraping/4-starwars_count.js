#!/usr/bin/node

const url = process.argv[2];

const request = require('request');
let contador = 0

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const bodyJson = JSON.parse(body).results;
    for (const the_film of bodyJson) {
      for (const i of the_film.characters) {
        if (i.includes(`/people/18/`)) {
          contador++
        }
      }
    }
  console.log(contador)
  }
);
