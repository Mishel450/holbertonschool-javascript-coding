#!/usr/bin/node

const url = process.argv[2];


const request = require('request');
let contador = 0

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const bodyJson = JSON.parse(body);
    for (let i = 0; i < bodyJson.count; i++) {
      let characters = bodyJson.results[i].characters
      for (j in characters) {
        if (j == "18") {
        contador += 1
        }
      }
    }
    console.log(contador - 1)
  }
});

for (let i in request) {
  if (request.characters == "https://swapi-api.hbtn.io/api/people/18/") {
    count += 1
  }
}