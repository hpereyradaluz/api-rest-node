import bodyParser from 'body-parser'
import checkJwt from 'express-jwt'
import options from '../../config'
import { handleErr, isLoggedIn } from '../../utils/index'
import create from './create'
import remove from './remove'
import readAll from './readAll'
import read from './read'
import update from './update'

const routesEpisodes = app => {
  app.post(
    '/episodes',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    create
  )
  app.get(
    '/episodes/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    read
  )
  app.get(
    '/episodes',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    readAll
  )
  app.put(
    '/episodes/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    update
  )
  app.delete(
    '/episodes/:id',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    remove
  )
}

export default routesEpisodes
