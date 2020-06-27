import express from 'express'

const routes = express.Router()

routes.get('teste', (request, response) => {
    return response.send('Hello Word')
})

export default routes