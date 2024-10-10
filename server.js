const http = require("http");
const port= 8081;
const toDoList = ["hey","hope u ","are","happy"]
http.createServer((req,res)=>{
    const {method,url} = req;
    //console.log(method,url);
    if(url == "/todos"){
        console.log("todos route")
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(toDoList.toString())
    }else if(url == "/"){
        console.log("/ home default route")
    }
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs server started on port ${port}`);
})