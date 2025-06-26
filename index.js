const express = require("express")

const app = express()

const {join} = require("path") // Pour la gestion des fichiers et des chemins

app.get("/test",function (req,res) {
    res.send("Hello, World!")  
})

app.get("/", function (req, res) {
    res.sendFile(join())
})

app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000")
})

