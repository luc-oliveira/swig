"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const environment_1 = require("../common/environment");
class Server {
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                //creates a server
                this.application = restify.createServer({
                    name: 'swig-api',
                    version: '1.0.0'
                });
                this.application.use(restify.plugins.queryParser());
                //routes 
                for (let route of routers) {
                    route.applyRoutes(this.application);
                }
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    start(routers = []) {
        return this.initRoutes(routers).then(() => this);
    }
}
exports.Server = Server;
