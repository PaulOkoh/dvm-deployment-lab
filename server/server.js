const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))



app.get('/', (req,res) => {
  res.sendFile(path.join(_dirname, '../public/index.html'))

})

app.listen(4004, () => console.log(`cruising on 4004`))





