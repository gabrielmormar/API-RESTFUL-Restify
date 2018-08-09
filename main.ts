import { Server } from './server/server'
import { usersRouter } from './users/users.router'

const server = new Server()

server.bootstrap([usersRouter]).then(server => {
    console.log('Server rodando: ', server.application.address())
}).catch(error => {
    console.log('Server falhou')
    console.error(error)
    process.exit(1)
})
//console.log('alterei')