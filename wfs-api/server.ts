import express from 'express'
import path from 'path'

const app = express()
const port = 3080

app.use(express.json())
app.use(express.static(path.join(__dirname, '../wfs-ui/build')))

app.get('/hello', (req, res) => {
  console.log('Hello World!!!!')
  res.json('Hello World!!!!')
})

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
