import bodyParser from 'body-parser'
import checkJwt from 'express-jwt'
import options from '../../config'
import { handleErr, isLoggedIn } from '../../utils/index'
import create from './create'
import remove from './remove'
import readAll from './readAll'
import read from './read'
import update from './update'

const routesDirectors = app => {
  app.post(
    '/directors',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    create
  )
  app.get(
    //'/directors/:id/group/:idGroup',
    '/directors/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    read
  )
  app.get(
    '/directors',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    readAll
  )
  app.put(
    '/directors/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    update
  )
  app.delete(
    '/directors/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    remove
  )
}

export default routesDirectors
