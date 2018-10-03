import * as restify from 'restify'
import {Router} from '../common/router'
import {User} from './users.model'

class UsersRouter extends Router {
	applyRoutes(application: restify.Server){
		application.get('/users', (req, resp, next) => {
			//resp.json({users: Users})
			User.find().then(users => {
				resp.json(users)
				return next(false)
			})
		})

		application.get('/users/:id', (req, resp, next) => {
			//resp.json({users: Users})
			User.findById(req.params.id).then(user => {
				if(user){
					resp.json(user)
					return next(false)	
				}

				resp.send(404)
				return next(false)
			})
		})

		application.post('/users', (req, resp, next) => {
			//resp.json({users: Users})
			let user = new User(req.params.body)
			user.save().then(user => {
				if(user){
					resp.json(user)
					return next(false)	
				}

				resp.send(404)
				return next(false)
			})
		})
	}
}

export const usersRouter = new UsersRouter()