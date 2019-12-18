const express = require('express')
const routes = express.Router()
const UserController = require('../controllers/users')

class Routes {
  constructor() {
    this.routes = routes
    this.setRoutes()
  }

  setRoutes() {
    this.routes.post("/register", function (req, res) {
      UserController.register(req, res)
    })
  }
}

module.exports = new Routes().routes