const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Todo")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("mongodb failed to connected");
})


// user sign in schema
const sigInSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// todo list schema
const tasksSchema= new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})



const collection= new mongoose.model("Admin", sigInSchema)
const collection1= new mongoose.model("Tasks", tasksSchema)

module.exports=collection
module.exports=collection1
