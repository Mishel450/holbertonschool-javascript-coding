#!/usr/bin/node

const url = process.argv[2];
const file = process.argv[3];
const fs = require('fs');
const request = require('request');

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  fs.writeFile(file, body, (error) => {
    if (error) {
      console.log(error);
    }
  });
});
