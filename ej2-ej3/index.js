const express = require("express");

const app = express();

const animales = require("./animales");
app.use(express.static("public"));

app.get("/sumar-animal", function (req, res) {
  //console.log(req.query) //es para comprobar lo que llega el req.query muestra todo el objeto
  let addAnimal = {
    nombre: req.query.nombre,
    edad: req.query.edad,
    animal: req.query.animal,
  };
  animales.push(addAnimal); //añadimos los campos que ha metido en los input del html
  res.send(mostrarLista()); //llamammos a la funcion
  //res.send(animales) si queremos mostrar todo lo que hay dentro del array
});

function mostrarLista() {
  let parrafo = "";
  for (let i = 0; i < animales.length; i++) {
    parrafo = `<tr><td><strong>${animales[i].nombre}</strong></td><td>${animales[i].edad}</td><td>${animales[i].animal}</td></tr>`;
  }
  return `<table>${parrafo}</table`;
}

app.listen(3000);
