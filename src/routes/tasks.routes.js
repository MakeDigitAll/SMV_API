const { Router } = require("express")
const pool = require('../database')

const { getAllTask, getTask, createTask, deleteTask, updateTask } = require('../controllers/task.controller');

const router =  Router();

const { getUsers }= require("../controllers/index.controller");

router.get('/users', getUsers);

//ver tareas
router.get('/task', getAllTask)

//ver una tarea
router.get('/task/:id', getTask)

//crear tarea
router.post('/task', createTask)

//eliminar tarea
router.delete('/task/:id', deleteTask)

//actualizar tarea
router.put('/task/:id', updateTask)

module.exports  =  router;