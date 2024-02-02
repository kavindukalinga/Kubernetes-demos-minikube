import express from 'express'
import os from 'os'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const helloMessage = `Hello from ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
}  )

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
}   )