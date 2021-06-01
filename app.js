const express = require('express');
const app = express();
const socket = require('socket.io');

let port = 3000;

// public
app.use(express.static('public'));

//views
app.set('view engine', 'ejs');

//routes

app.use(require('./routes/index.js'));
app.use(require('./routes/albums.js'));
app.use(require('./routes/feedb'));
app.use(require('./routes/chat'));


let server = app.listen(port, () => {
    console.log(`running on port ${port}`);
})

let io = socket(server);

io.on('connection', (socket)=>{

    console.log('client connected');
    socket.on('postMessages', msgObj=>{

        console.log('message received', msgObj);
        io.emit('updateMessage', msgObj)
    })
})
