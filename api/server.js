const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express()

const authRouter = require('../auth/auth-doctor-router.js');
const doctorsRouter = require('../users/doctors-router.js')

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    res.send('<h1> API is running!!! </h1>')
})

server.use('/api/', authRouter);
server.use('/api', doctorsRouter);



module.exports = server;

