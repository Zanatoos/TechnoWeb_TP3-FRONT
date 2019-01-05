const express = require('express')
const bodyParser = require('body-parser')
const allSongs = require('./songs')

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/:song', (req, res) => {
    const partOfSong = req.params.song

    console.log('Received GET request')
    console.log('Received text: ' + partOfSong)

        if (partOfSong) {
            const filteredPartOfSong = partOfSong.toLowerCase()
            const foundSongs = allSongs.filter(s => s.toLowerCase().includes(filteredPartOfSong))

            if (foundSongs.length) {
                res.writeHead(200, { "Content-Type": "text/json" })
                res.end(JSON.stringify(foundSongs))
            } else {
                res.writeHead(204, { "Content-Type": "text/json" })
                res.end()
            }
        } else {
            res.writeHead(400, { "Content-Type": "text/json" })
            res.end()
        }
})

const server = app.listen(port, () => {
    const port = server.address().port

    console.log("Server listening on port " + port + "...")
})
