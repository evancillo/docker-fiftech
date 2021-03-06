
const { request } = require('graphql-request');
const httpRequest = require('request');


exports.getList = getList;
exports.getListGraphql = getListGraphql;

function getList(req, res) {
  httpRequest
    .get('https://rickandmortyapi.com/api/character/', {json: true})
    .pipe(res);
}

function getListGraphql(req, res) {

  const query = `{
    characters(page: 1) {
      info {
        count
      }
      results {
        name,
        status,
        species,
        gender,
        image
      }
    }
  }`;

  request('https://rickandmortyapi.com/graphql/', query)
    .then(data =>
      res.json(data)
    )
}

