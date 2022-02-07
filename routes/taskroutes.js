const express = require('express');
const route = express.Router();
const taskController = require('../controller/taskscontrollers');
route.get('/getAll', taskController.getTasks);
route.post('/create', taskController.createTask);
route.get('/search/:id', taskController.searchTask);
route.put('/edit/:id', taskController.editTask);
route.delete('/delete/:id', taskController.deleteTask);
module.exports = route;
