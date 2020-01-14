const redisClient = require('../commons/redis-client');
const errorHandler = require('../commons/errors.controller');


exports.createUser = createUser;
exports.updateUser = updateUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;

async function createUser (req, res) {
  let { username } = req.body;
  let exist = await redisClient.exists(username);
  if (!!exist) {
    return res.status(400).send({
      message: 'Username already registered'
    });
  }else {
    let status = await redisClient.setAsync(username, JSON.stringify(req.body));
    return res.status(200).send({
      message: 'User created successfully',
      status: status
    });
  }
}

async function updateUser(req, res) {
  let { username } = req.body;
  let exist = await redisClient.exists(username);
  if(!!exist) {
    let status = await redisClient.setAsync(username, JSON.stringify(req.body));
    return res.status(200).send({
      message: 'User updated successfully',
      status: status
    });
  }else {
    return res.status(400).send({
      message: 'Username not found'
    });
  }
}

async function getUser(req, res) {
const { id } = req.params;
const rawData = await redisClient.getAsync(id);
return res.json(JSON.parse(rawData));
}

async function deleteUser(req, res) {
  let { username } = req.body;
  let exist = await redisClient.exists(username);
  if(!!exist) {
    let status = await redisClient.del(username, JSON.stringify(req.body));
    return res.status(200).send({
      message: 'User deleted successfully',
      status: status
    });
  }else {
    return res.status(400).send({
      message: 'Username not found'
    });
  }
}