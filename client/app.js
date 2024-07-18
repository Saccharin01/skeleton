const http = require('http')
const fs = require('fs')
const path = require("path")

const server = http.createServer((req,res)=>{
  console.log(`incomming : ${req.method} and ${req.url}`)
  if(req.url === "/"){
    const responsePath = path.join(__dirname,"index.html")
    fs.readFile(responsePath, "utf-8",(err, data)=>{
      if(err){
        console.error(`Response Error : ${err}`)
        throw err
      }else{
        res.writeHead(200,{"content-Type" : "text/html"})
        res.end(data)
      }
    })

  }
})

const PORT = 8080

server.listen(PORT,()=>{console.log(`Server running on http://localhost:${PORT}/`)})