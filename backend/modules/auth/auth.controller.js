const redisClient = require('../commons/redis-client');
const jwt = require('jsonwebtoken');


exports.authenticate = authenticate;
exports.verifyToken = verifyToken;

async function authenticate(req, res) {
  let { password, username } = req.body;
  let exist = await redisClient.exists(username);
  if (!!exist) {
    let rawData = await redisClient.getAsync(username);
    let user =  JSON.parse(rawData);
    if (user.password === password) {
      let token = jwt.sign({id: username}, process.env.JWT_SECRET, {expiresIn: '2m'});
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

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.headers['x-auth-token'];
  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if (err)
      return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}