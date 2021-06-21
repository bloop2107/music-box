const express = require('express');
const app = express();
const port = 6969;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(app);

app.get('/',(req,res) => {
    res.send('Hello word');
})

app.listen(port,() => {
    console.log(`${port}`);
})

//Socket io 
io.on('connection',(socket) => {
    console.log('new client connection');
})

