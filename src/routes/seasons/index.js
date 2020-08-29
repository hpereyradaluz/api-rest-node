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

const routesSeasons = app => {
  app.post(
    '/seasons',
    checkJwt({ secret: options.SECRET_KEY }),
    handleErr,
    isLoggedIn,
    bodyParser.json(),
    create
  )
  // app.get(
  //   //'/seasons/:id/group/:idGroup',
  //   '/seasons/:id',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   read
  // )
  // app.get(
  //   '/seasons',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   readAll
  // )
  // app.put(
  //   '/seasons/:id',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   bodyParser.json(),
  //   update
  // )
  // app.delete(
  //   '/seasons/:id',
  //   checkJwt({ secret: options.SECRET_KEY }),
  //   handleErr,
  //   isLoggedIn,
  //   remove
  // )
}

export default routesSeasons
