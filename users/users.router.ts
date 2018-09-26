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

		application.get('/users/:id', (req, resp, next) => {
			//resp.json({users: Users})
			User.findById(req.params.id).then(user => {
				if(user){
					resp.json(user)
					return next()	
				}

				resp.send(404)
				return next()
			})
		})
	}
}

export const usersRouter = new UsersRouter()