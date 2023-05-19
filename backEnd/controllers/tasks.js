const Task = require("../models/Task"); //'Task' is the name of our model, which contains a schema. 

module.exports = {
//Create a new task
createTask: async(req,res) => {
    const {taskFromFrontEnd} = req.body
    try{
        const newTask = await Task.create({title:taskFromFrontEnd})
        res.status(201).json(newTask)
    } catch(error){
        res.status(500).json({error:'Failed to create task'})
    }
},

//Read
getTask : async(req,res) => {
    try{
         const tasks = await Task.find()
         res.json(tasks) //send back all documents retrieved from database to json in form of json
    }catch(error){
        res.status(500).json({error:'Failed to retrieve tasks'})
    }
},

deleteTask:async(req,res) =>{
    try{
        //req.params is an object that contains route paramaters extracted from the URL. When a route is defined with a parameter placeholder(e.g.: 'taskId'),
        //We passed the unique '_id' from the specific list item to our deleteTask() function on the front end. In our deleteTask() function, we used 'taskIdentifier'
        //as the paramater name. And we passed that in to the path. We can now extract that thanks to req.params. Just know that when we used map to map over our documents
        //and if the unique '_id' that we passed into deleteTask() was 'x6874bxnjkabdnjfs' for example, that value is what we passed into our :
        //await axios.delete(`http://localhost:5000/task/deleteTask/${taskIdentifier}`) path, and that 'x6874bxnjkabdnjfs' value was stored in as 'taskIdentifier' variable
        //So, we can use destructuring to extract that from req.params. And we can then use that to delete that specific document from our MongoDB database. 
        
        const {taskIdentifier} = req.params         
        await Task.findByIdAndDelete(taskIdentifier)
        res.json({message:'Task deleted successfully'})
    }   catch(error){
        res.status(500).json({error: 'Failed to delete task'})
    }
}
}
