const express = require('express');
const characterModule = require('./modules/character/character.routes');
const app = express();
const port = process.env.PORT || 3000;

app.use('/api/character', characterModule);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));