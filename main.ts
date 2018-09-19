import {Server} from './server/server'

const server = new Server()
server.start()
.then(server => console.log(`Server is listening on:`, server.application.address()))
.catch(error => { 
    console.error(`Server failed to start ${error}`)
    process.exit(1)
})


