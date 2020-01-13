

exports.createUser = createUser;
exports.updateUser = updateUser;

function createUser(req, res) {
  return res.status(200).send({
    message: 'User created successfully'
  });
}

function updateUser(req, res) {
  return res.status(200).send({
    message: 'User updated successfully'
  });
}