const express = require('express');
const route = express.Router();
const TaskControler =  require('../controller/taskController');
const TaskValidation = require('../middleware/taskValidation');


route.post('/', TaskValidation, TaskControler.create);
route.put('/:id', TaskControler.updateProfile);
route.get('/all', TaskControler.queryFila);

module.exports = route;

