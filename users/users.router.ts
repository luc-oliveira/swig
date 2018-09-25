import * as restify from 'resfity'
import {Router} from '../common/router'
import {User} from './users.model'

class UsersRouter extends Router {
	applyRoutes(application: restify.Server){
		application.get('/users', (req, resp, next) => {
			//resp.json({users: Users})
			User.findAll().then(users => {
				resp.json(users)
				return next()
			})
		})
	}
}

export const usersRouter = new UsersRouter()