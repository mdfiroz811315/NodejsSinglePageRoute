const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.get('/name', (req, res) => {
    res.send('mirza!')
  })
  app.get('/what', (req, res) => {
    res.send('this is a null!')
  })
      
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})