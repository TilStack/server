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

// Test de la page seconde avec des paramètres de requête
app.get("/seconde", function (req, res) {
    console.log("Second page accessed")

    console.log(req.query) // Log the query parameters to the console
   
    const {x, y , operation } = req.query;

    if(x && y && operation) {
        let result;
        switch(operation) {
            case 'add':
                result = parseFloat(x) + parseFloat(y);
                break;
            case 'sous':
                result = parseFloat(x) - parseFloat(y);
                break;
            case 'multi':
                result = parseFloat(x) * parseFloat(y);
                break;
            case 'div':
                if (parseFloat(y) !== 0) {
                    result = parseFloat(x) / parseFloat(y);
                } else {
                    return res.send('Error: Division by zero');
                }
                break;
            default:
                return res.status(400).send('Invalid operation');
        }
        res.send(`Result: ${result}`);
    }
    res.send('This is the second page')
})


app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000")
})

