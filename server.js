import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    
    const {title, description, duration} = request.body


    database.create({
       title: title, 
       description: description,
       duration: duration,

    }) 
    
    return reply.status(201).send()


} )
server.get('/videos', () => {
   const videos = database.list()
   console.log(videos)
   return videos
} )
server.put('/videos/:id', (request) => {
    const videoId = request.params.id
    const {title, description, duration} = request.body

    database.update(videoId, {
        title,
        description,
        duration

    })

    return reply.status(204).send()


} )
server.delete('/videos', () => {
    return 'Hello Node.js'
} )

server.listen({
    port:3333,
})
