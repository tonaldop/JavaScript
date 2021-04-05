const http = require('http')
http.createServer((req, res) => {
    res.write('Boa tarde')
    res.end()
}).listen(8080)