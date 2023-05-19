const mongoose = require("mongoose");

//We create a schema. Inside of this schema, we are specifying the structure of the individual documents that are going to go into our collection. 
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
});

//This is where we specify which collection the documents go into. You can specify a collection name as a third argument.
//Otherwise, if you don't do that, Mongoose will take your model name, make it plural, and use that as the collection name.
module.exports = mongoose.model("Task", TaskSchema); 