const express = require('express')
const router = express.Router()

// Connect to the DataBase
const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'notes'
})
db.connect((err) => {
  if (err) throw err;
  console.log("⚡ Banco de dados conectado!")
})

// Fetch All Notes
router.get('/getNotes', (req, res) => {
  db.query('SELECT * FROM note_list', (err, results) => {
    if (err) throw err;
    res.send(results);
  })
})

// Create Note
router.post('/createNote', (req, res) => {
  const {text} = req.body
  let SQL = "INSERT INTO note_list ( text ) VALUES ( ? )"

  db.query(SQL, [text], (error, results) => {
    if (error) {
      console.log(error)
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  })
})

// Delete note
router.delete('/deleteNote/:id', (req, res) => {
  const { id } = req.params
  let SQL = 'DELETE FROM note_list WHERE id = ?'

  db.query(SQL, [id], (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
})

module.exports = router