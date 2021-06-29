const Joi = require('joi');
const mogran = require("morgan");
const config = require("config");
const genres = require('./routes/genres');
const users = require('./routes/users');
const express = require('express');
const app = express();
app.use(express.json());
app.use(mogran("tiny"));
app.use('/api/genres', genres);
app.use('/api/users', users);


console.log(process.env.NODE_ENV);
console.log(app.get("env"));
console.log(config.get("database.name"));
console.log(config.get("name"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));