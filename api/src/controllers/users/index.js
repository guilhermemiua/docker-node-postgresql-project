const { User } = require('../../database/models')

async function register(req, res) {
  const { name, email, password } = req.body

  if (!name) {
    return res.status(404).send({ message: 'Name not provided.' })
  }

  if (!email) {
    return res.status(404).send({ message: 'E-mail not provided.' })
  }

  if (!password) {
    return res.status(404).send({ message: 'Password not provided.' })
  }

  try {
    const user = await User.create({ name, email, password })

    return res.status(201).send(user)
  } catch (err) {
    console.log(err)
    return res.status(404).send({ message: 'Error.' })
  }
}

module.exports = {
  register
}