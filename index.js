const express = require("express")

const app = express()

const {join} = require("path") // Pour la gestion des fichiers et des chemins

app.use(express.static("public")) // Pour servir les fichiers statiques

app.get("/test",function (req,res) {
    res.send("Hello, World!")  
})

app.get("/", function (req, res) {
    res.sendFile(join(__dirname, '/views/index.html'))
})

app.get("/second", function (req, res) {
    res.sendFile(join(__dirname, '/views/secondpage.html'))
})


app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000")
})

