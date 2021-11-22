const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRouter = require("./users/users-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api/users", usersRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    /*For Security reasons this is commented out 
    when not used in testing/Polishing */

    //message: err.message,
    //stack: err.stack,
    clientMessage: err.clientMessage
  })
})

module.exports = server
