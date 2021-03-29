import express from 'express'
import path from 'path'
import mysql from 'mysql2'
import cors from 'cors'

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

const app = express()
const port = 3080

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3080'],
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../../wfs-ui/build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../wfs-ui/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.post('/track', async (req, res) => {
  const url = req.body.url
  const conn = await pool.promise().getConnection()
  try {
    conn.execute('INSERT INTO `auditlog` (`url`) VALUES (?)', [url])
    conn.commit()
    res.send('OK')
  } catch (err) {
    throw err
  } finally {
    conn.release()
  }
})

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
