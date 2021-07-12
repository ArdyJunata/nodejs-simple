const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    if (req.url == '/hello') {
        res.end('Hello World')
    } else {
        res.end('Ok')
    }
})

server.listen(port, () => {
    console.log(`this app is running on ${port}`)
});