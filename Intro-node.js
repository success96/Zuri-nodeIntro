const fs = require('fs');
const path = require('path');
const http = require('http');



const server = http.createServer((request, response) =>{

  //get:localhost:3000/
  if (request === '/'){
    let filePath = path.join(__dirname, 'home.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) console.log(err.message);
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(data);
    });
  };

  //get:locahost:3000/home
  if (request === '/home'){
    let filePath = path.join(__dirname, 'home.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) console.log(err.message);
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(data);
    });
  };

  //get:localhost:3000/about
  if (request === '/about'){
    let filePath = path.join(__dirname, 'about.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) console.log(err.message);
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(data);
    });
  };

  //get:localhost:3000/contact
  if (request === '/contact'){
    let filePath = path.join(__dirname, 'contact.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) console.log(err.message);
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(data);
    });
  };


})

//const app = express();
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.get("/", (req, res)=>{
//   res.sendFile(__dirname+ "/home.html")
// });

// app.get("/home", (req, res)=>{
//   res.sendFile(__dirname+ "/home.html")
// });

// app.get("/about", (req, res)=>{
//   res.sendFile(__dirname+ "/about.html")
// });

// app.get("/contact", (req, res)=>{
//   res.sendFile(__dirname+ "/contact.html")
// });