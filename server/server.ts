import * as restify from 'restify'

export class Server{
    application: restify.Server

    initRoutes(): Promise<any>{
        return new Promise((resolve,reject) => {
            try {
                //creates a server
                this.application = restify.createServer({
                    name: 'swig-api',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())

                this.application.get('/beers', (req, resp, next) => {
                    let brejas = ['skol', 'brahma', 'budwseirs', 'da ilha']
                    resp.json(brejas)
                    return next()
                })

                this.application.listen(3000, ()=>{
                    resolve(this.application)
                })
            }catch(error){
                reject(error)
            }
        })
    }

    start(): Promise<Server>{
        return this.initRoutes().then(()=>this)
    }
}