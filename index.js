const http = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.port || 8080

function lerHtml(res, status, arquivo) {
  fs.readFile(arquivo, 'utf8', (err, data) => {
    if (err) { 
      return console.log(err) 
    }
        res.writeHead(status, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}

const server = http.createServer((req, res) => {

  var url = req.url
  var method = req.method
  var arq = `${__dirname}/src/${url}.html`

  if (url === "/" && method === "GET") {
    lerHtml(res, 200, `${__dirname}/src/home.html`)
  } else

  if (url === "/sobre" && method === "GET") {
    lerHtml(res, 200, arq)
  } else {
    lerHtml(res, 404, `${__dirname}/src/404.html`)
  }
})

server.listen(port, () => {
  console.log(`servidor rodando nna porta ${port}`)
})