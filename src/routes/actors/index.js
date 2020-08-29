import bodyParser from 'body-parser'
import checkJwt from 'express-jwt'
import options from '../../config'
import { handleErr, isLoggedIn } from '../../utils/index'
import create from './create'
import remove from './remove'
import readAll from './readAll'
import read from './read'
import update from './update'

const routesActors = app => {
  app.post(
    '/actors',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    create
  )
  app.get(
    //'/actors/:id/group/:idGroup',
    '/actors/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    read
  )
  app.get(
    '/actors',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    readAll
  )
  app.put(
    '/actors/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    update
  )
  app.delete(
    '/actors/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    remove
  )
}

export default routesActors
