const http = require('http');
const path = require('path');
const express = require('express');
require('dotenv').config()

const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/router');


const passport = require('passport');

const socket = require('socket.io');

const swaggerUrl = process.env.SWAGGER_URL;
//const cron = require('node-cron');
const moment = require('moment');
// Database Configuration 

require('./src/utils/database');
require('./src/utils/passport');
// Create Express webapp

const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true // extended allows nested JSON objects 
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use(router);


const server = http.createServer(app);
const sockets = {};
const io = require('socket.io').listen(server);
socket(io);


app.set('socket', io);

io.on("connection", async socket => {

  socket.on('init', (userId) => {
    if (!sockets[userId]) {
      sockets[userId] = socket;
    }
  });

  socket.on("disconnect", async () => {
    console.log("A User Disconnected from Socket, ID:", socket.id);
  });

})

const PORT = process.env.PORT;
server.listen(PORT, function () {
  console.log(`Server running on *:${PORT} Process  ${process.pid} `);

});
