import routesUsers from './users/index'
import routesSessions from './sessions'
import routesActors from './actors'
import routesDirectors from './directors'
import routesEpisodes from './episodes'
import routesTvshows from './tvshows'
import routesSeasons from './seasons'
import routesMovies from './movies'

const routes = app => {
  routesUsers(app)
  routesSessions(app)
  routesActors(app)
  routesDirectors(app)
  routesEpisodes(app)
  routesTvshows(app)
  routesSeasons(app)
  routesMovies(app)
}

export default routes
