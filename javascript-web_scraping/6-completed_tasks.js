#!/usr/bin/node

const url = process.argv[2];
const request = require('request');

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const bodyJson = JSON.parse(body);
  const thedict = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 };
  for (const i of bodyJson) {
    if (i.completed === true) {
      thedict[`${i.userId}`] += 1;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (thedict[`${i + 1}`] === 0) {
      delete thedict[`${i + 1}`];
    }
  }
  console.log(thedict);
});
