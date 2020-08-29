import bodyParser from 'body-parser'
import checkJwt from 'express-jwt'
import options from '../../config'
import { handleErr, isLoggedIn } from '../../utils/index'
import create from './create'
// import remove from './remove'
// import readAll from './readAll'
// import read from './read'
// import update from './update'
//import socket from 'socket.io'
//const io = socket(server)

const routesTvshows = app => {
  app.post(
    '/tvshows',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    create
  )
  // app.get(
  //   //'/tvshows/:id/group/:idGroup',
  //   '/tvshows/:id',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   read
  // )
  // app.get(
  //   '/tvshows',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   readAll
  // )
  // app.put(
  //   '/tvshows/:id',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   bodyParser.json(),
  //   update
  // )
  // app.delete(
  //   '/tvshows/:id',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   remove
  // )
}

export default routesTvshows
