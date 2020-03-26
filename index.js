const express = require('express')
const app = express()
const port = 3000

// import generated use-cases
import { addUser } from './src/use-cases/users'


// we pass in res, but what exactly is it?
app.get('/', (req, res) => res.send('Hello world!'))
// app.get('/user/:username/:email/:password', (req, res) => addUser(username, email, password))

app.get('/users/:username/:password/:email', async function (req, res) {
    console.log(req.params)
    let response = await addUser(req.params)
    console.log(`Response: ${JSON.stringify(response)}`)
    res.send(response)
})

app.listen(port, () => console.log(`Example app listening on localhost:${port}`))