const express = require("express");

const app = express();

const animales = require("./animales");
app.use(express.static("public"));

/*app.get("/sumar-animal", function (req, res) {
  //console.log(req.query) //es para comprobar lo que llega el req.query muestra todo el objeto
  let addAnimal = {
    nombre: req.query.nombre,
    edad: req.query.edad,
    animal: req.query.animal,
  };
  animales.push(addAnimal); //añadimos los campos que ha metido en los input del html
  res.send(mostrarLista()); //llamammos a la funcion
  //res.send(animales) si queremos mostrar todo lo que hay dentro del array
});*/

app.get("/adoptar",function(req,res){
    borrarAnimal()
    res.send(borrarAnimal())
})
function mostrarLista() {
  let parrafo = "";
  for (let i = 0; i < animales.length; i++) {
    parrafo = `<tr><td><strong>${animales[i].nombre}</strong></td><td>${animales[i].edad}</td><td>${animales[i].animal}</td></tr>`;
  }
  return `<table>${parrafo}</table`;
}

function borrarAnimal(){
    for (let i = 0; i< animales.length; i++) {
      if(animales[i].animal = req.query.animal){ //aqui esta el fallo
          animal.splice(i,1)
      }
    } //tengo que darle mas vueltas
    return animal
}
app.listen(3000);
