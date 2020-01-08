const request = require('request');

exports.getList = function (req, res) {
  request
    .get('https://rickandmortyapi.com/api/character/', {json: true})
    .pipe(res);
};