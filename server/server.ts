import * as restify from 'restify'
import * as mongoose from 'mongoose'
import {environment} from '../common/environment'
import {Router} from '../common/router'

export class Server{
    application: restify.Server

    initDB(): Promise<any>{
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url, {
            useMongoClient: true
        })
    }

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve,reject) => {
            try {
                //creates a server
                this.application = restify.createServer({
                    name: 'swig-api',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())

                //routes 
                for(let route of routers){
                    route.applyRoutes(this.application)
                }

                this.application.listen(environment.server.port, ()=>{
                    resolve(this.application)
                })
            }catch(error){
                reject(error)
            }
        })
    }

    start(routers: Router[] = []): Promise<Server>{
        return this.initDB().then(()=>
               this.initRoutes(routers).then(()=>this))
    }
}