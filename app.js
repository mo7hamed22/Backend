const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const _port = 3200;
const tasksRoutes = require('./routes/taskroutes');
// app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/api/tasks', jsonParser, tasksRoutes);
app.use('/', (req, res) => {
  res.send('Route Not Found !');
});
app.listen(_port, () => {
  console.log(`Server is running on ${_port}`);
});
