const redisClient = require('../commons/redis-client');
const jwt = require('jsonwebtoken');


exports.authenticate = authenticate;

async function authenticate(req, res) {
  let { password, username } = req.body;
  let exist = await redisClient.exists(username);
  if (!!exist) {
    let rawData = await redisClient.getAsync(username);
    let user =  JSON.parse(rawData);
    if (user.password === password) {
      let token = jwt.sign({id: username}, 'JWT_SECRET', {expiresIn: '2m'});
      return res.status(200).json({token: token});
    }else {
      return res.status(400).json({error: "Invalid username or password"});
    }
  } else {
    return res.status(400).send({
      message: 'This username is not registered'
    });
  }
}

