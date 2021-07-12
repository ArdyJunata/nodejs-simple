const http = require('http');
const port = process.env.PORT || 3002;
const server = http.createServer((req, res) => {
    if (req.url == '/hello') {
        res.end('Hello World')
    } else {
        res.end('Server 3')
    }
})

server.listen(port, () => {
    console.log(`this app is running on ${port}`)
});