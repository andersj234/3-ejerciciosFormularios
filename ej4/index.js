const express = require("express");
const app = express();

const animales = require("./animales");

app.use(express.static("public"));

app.get("/sumar-animal", function (req, res) {
  let animal = {
    nombre: req.query.nombre, // metemos toda informacion en un objeto y lo metemos dentro del array
    edad: req.query.edad, 
    tipo: req.query.tipo,
  };
  animales.push(animal);
  res.send(mostrarLista());
});

app.get("/adoptar", function (req, res) {
  let found = false;
  for (let i = 0; i < animales.length && !found; i++) {//recorremos el array y buscamos animal para borrarlo, si el animal existe lo borraremos
    if (animales[i].nombre === req.query.nombre) {
      found = true;
      animales.splice(i, 1);
    }
  }
  found
    ? res.send(`<h3>El bichito ha sido adoptado!</h3> <a href="/">Volver</a>`)// muestra el mensaje y si el das al href volveras a la zona donde pregunta para meter al animal
    : res.send(`<h3>Ese bicho no está en adopción</h3><a href="/">Volver</a>`);
});

function mostrarLista() {
  let parrafo = "";
  for (let i = 0; i < animales.length; i++) {
    parrafo += `<tr><td><strong>${animales[i].nombre}</strong></td><td>${animales[i].tipo}</td><td>${animales[i].edad}</td><td><form action="/adoptar"><button type="submit" name="nombre" value="${animales[i].nombre}">Adoptar</button> </form></td></tr>`;
  }//introduces los datos mostrandolos y a parte se hace un boton de tipo submit para adoptar  // le estamos dando el nombre para el query y el valor que tendria el nombre que borraria al adoptar al animal

  return `<table>${parrafo}</table><br/><a href="/">Volver</a>`;
}

app.listen(3000);


//la manera con funciones tengo que pensarla

/*const express = require("express");

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

app.get("/adoptar",function(req,res){
  let found = false;
  for (let i = 0; i < animales.length && !found; i++) {
   if(animales[i].nombre === req.query.nombre){
     found = true
     animales.splice(i,1); //con esto borramos el animal de la posicion en la que se encuentra
   }
  }
  found
  ? res.send(`<h3>el bichito ha sido adoptado</h3>`)
  : res.send(`<h3>Ese bicho no esta en adopcion</h3>`)
})
function mostrarLista() {
  let parrafo = "";
  for (let i = 0; i < animales.length; i++) {
    parrafo = `<tr><td><strong>${animales[i].nombre}</strong></td><td>${animales[i].edad}</td><td>${animales[i].animal}</td><td><form action="/adoptar"><button type="submit" name="nombre" value="${animales[i].nombre}"</form></td></tr>`;
  }
  return `<table>${parrafo}</table`;
}
app.listen(3000);*/
