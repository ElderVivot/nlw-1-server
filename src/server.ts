import express from 'express'

const app = express()

app.get('/', (request, response) => {
    console.log('Test')
    return response.send('Hello Word')
})

app.listen(3001, () => console.log('Executing ...'))