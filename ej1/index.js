const express = require("express")

const app = express()

const animales = require("./animales")
app.get("/", function(req,res){
    let parrafo =""
    for (let i = 0; i < animales.length; i++) {
        parrafo +=`<tr><td><strong>${animales[i].nombre}</strong></td><td>${animales[i].edad}</td><td>${animales[i].animal}</td></tr>`
    }//mostramos los datos dentro de cada animal 
    res.send(`<table>${parrafo}</table>`)
})

app.listen(3000)