const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{

    if(req.url == '/'){
        res.writeHead(200,{"content-Type":"text/plain"})
        res.end("hello home")
    }
    else if(req.url == '/fs'){
        fs.readFile('date.txt',"utf8",(err,data)=>{
            if(err){

            }else{
                res.writeHead(200,{"content-Type":"text/plain"})
                res.end(data)
            }
        })
    }
    else if(req.url == '/index'){


        const filepath = path.join(__dirname,'index.html')
        fs.readFile(filepath,'utf8',(erro,data)=>{
            if (erro) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading file");
      } else {
            res.writeHead(200,{"content-Type":"text/html"})
            res.end(data)
      }

        })
    }
    else{
        res.writeHead(404)
        res.
        end("page not founded")
    }


})

server.listen(3000,()=>{
    console.log("running");
    
})
