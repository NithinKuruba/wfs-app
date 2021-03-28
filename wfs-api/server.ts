import express from 'express'
import path from 'path'
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'wfs',
  password: 'wfs',
  database: 'analytics',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

const app = express()
const port = 3080

app.use(express.json())
app.use(express.static(path.join(__dirname, '../../wfs-ui/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../wfs-ui/build/index.html'))
})

app.post('/track', (req, res) => {
  const id = req.body.id
  const name = req.body.name
  insertRecord(id, name)
    .then(() => {
      res.send('OK')
    })
    .catch((err) => {
      throw err
    })
})

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})

async function insertRecord(id: any, name: any): Promise<void> {
  const sql = 'INSERT INTO auditlog (id, name) VALUES(?, ?)'
  const connection = await pool.getConnection()
  try {
    await connection.query(sql, [id, name])
    await connection.commit()
  } catch (err) {
    await connection.rollback()
    throw err
  } finally {
    connection.release()
  }
}
