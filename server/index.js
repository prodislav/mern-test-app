const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes/users');
const admin = require("./src/routes/admin.js");
const path = require('path');
require('dotenv').config();
const passport = require("passport");

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}${process.env.DB_PATH}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.error(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./src/middleware/passport.js")(passport);
// Routes
app.use("/api/v1", admin);

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});