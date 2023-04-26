const jwt = require('jsonwebtoken')
const SECRET_KEY = 'SARTHAKPANT'

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization
    console.log(token)
    if (token) {
    //   token = token.split(' ')[1]
      console.log(token)
      let user = await jwt.verify(token, SECRET_KEY)
      req.userId = user.id
    } else {
      res.status(401).json({ message: 'Unauthorized User' })
    }

    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Unauthorized User after verification ' })
  }
}

module.exports = auth
