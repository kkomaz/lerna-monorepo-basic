const express = require('express')
const port = 5000

const app = express()

app.get('/', (req, res) => {
  res.send('I am a back-end server')
})

app.listen(port, err => {
  if (err) {
    console.log(`Error: ${err.message}`)
  } else {
    console.log(`Listening to ${port}`)
  }
})
