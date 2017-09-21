const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')

app.use(cors())
app.use(logger({ combined: true }))
app.get('/', (req, res) => {
  res.send('YOU GOT CALLED BEFORE WINDOW CLOSED!!!')
})

const port = 8080
app.listen(port, () => {
  console.log('Running on port', port)
})
