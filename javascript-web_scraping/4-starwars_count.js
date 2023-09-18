#!/usr/bin/node

const url = process.argv[2];


const request = require('request');
let contador = 0

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    for (let i = 0; i < body.count; i++) {
      let characters = body.results[i].characters
      for (j in characters) {
        if (j == "https://swapi-api.hbtn.io/api/people/18") {
        contador += 1
        }
      }
    }
    console.log(contador)
  }
});

for (let i in request) {
  if (request.characters == "https://swapi-api.hbtn.io/api/people/18/") {
    count += 1
  }
}