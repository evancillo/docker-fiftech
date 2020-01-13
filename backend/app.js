const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const dotenv = require('dotenv');


const characterRoutes = require('./modules/character/character.routes');
const userRoutes = require('./modules/user/user.routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/character', characterRoutes);
app.use('/api/user', userRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
