const express = require('express')

const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))

app.get('/datasets', (req, res) => {
   console.log('Attempting to get all datasets.')
   res.send('blah')
})

app.post('/dataset', (req, res) => {
   console.log('Attempting to add another dataset.')
})
  
app.listen(port, () => {
   console.log('App works')
})