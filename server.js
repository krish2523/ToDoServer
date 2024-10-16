const express = require("express");
// initialisation
const app=express();
app.use(express.json());
const port = 8081;

const toDoList = ["hey","hope u ","are","happy"];
app.get("/todos",(req,res)=>{
    res.status(200).send(toDoList)
})
app.post("/todos",(req,res)=>{
    let newDoItem = req.body.item;
    toDoList.push(newDoItem);
    res.status(201).send({
        message:"The task was added sucessfully "
    })
})
app.delete("/todos",(req,res)=>{
var itemToDelete = req.body.item;
toDoList.find((elem,index)=>{
    if(elem===itemToDelete){
        toDoList.splice(index,1);
    }
    
    });
    res.status(204).send({
        message:"The task was deleted sucessfully "
    })
})
app.all("/todos",(req,res)=>{
    res.status(501).send({
        message:"The method is not implemented "
    })
})
app.all("*",(req,res)=>{
    res.status(404).send({
        message:"The requested resource was not found "
})
})
app.listen(port,()=>{
    console.log(`NodeJs with express started running on port ${port}`);
})