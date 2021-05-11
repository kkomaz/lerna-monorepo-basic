const express = require('express')
const common = require('common')
const port = 5000

const app = express()

app.get('/', (req, res) => {
  const d = common()
  res.send(`I am a back-end server ${d}`)
})

app.listen(port, err => {
  if (err) {
    console.log(`Error: ${err.message}`)
  } else {
    console.log(`Listening to ${port}`)
  }
})
