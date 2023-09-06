const express = require('express')
const app = express()
var cors = require('cors')
const datas=require('./Data/data.json')
const port = 3000
app.use(cors())
app.get('/datas',(req,res)=>{
    res.send(datas)
})
app.use('/datas/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const data=datas.find(d=>d.id==id)||{};
  res.send(data);
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})