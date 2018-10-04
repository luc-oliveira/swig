import * as restify from 'restify'
import {Router} from '../common/router'
import {Beer} from './beers.model'


class BeersRouter extends Router{
    applyRoutes(application: restify.Server) {
        application.get('/beers', (req, resp, next) => {
			Beer.find().then(beers => {
				resp.json(beers)
				return next(false)
			})
		})
    }
}

export const beersRouter = new BeersRouter()
