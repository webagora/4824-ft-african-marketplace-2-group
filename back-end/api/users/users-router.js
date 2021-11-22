const router = require("express").Router()

const User = require("./users-model")
/*const {

} = require("./users-middleware")*/

const bcrypt = require("bcryptjs")

router.get('/', async (req, res) => {
  res.json(await User.getAllUsers())
})

router.post('/', async (req, res) => {
  res.status(201).json(await User.insertUser(req.body))
})

module.exports = router
