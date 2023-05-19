const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");

//Read
router.get('/', tasksController.getTask)    //getTask() controller/method fires when we hit the home route. In this case it is the combined route of localhost:3006/task/

//Create
router.post('/createTask', tasksController.createTask)   //createTask() controller/method fires when we hit the /createTask route. In this case it is the combined route of localhost:3005/task/createTask. 


//Delete
router.delete('/deleteTask/:taskIdentifier',tasksController.deleteTask)      //deleteTask() controller/method fires when we hit the /deleteTask route. In this case it is the combined route of localhost:3006/task/deleteTask. 


module.exports = router         //Need to export this specific router