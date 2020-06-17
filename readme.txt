#1 Blog

* Preparar lo  necesario para crear el Blog:
>> Crear el package JSON -> NPM INIT
>> Instalar paquetes de NPM -> NPM INSTALL express mongoose body-parser --save (npm install mongoose@5.1.7 --save)
>> Comenzar la aplicación con: 

---------------------------------------------------------

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

---------------------------------------------------------

>> Finalizar la app con 

---------------------------------------------------------

app.listen(3000, function () {
    console.log("El servidor de YelpCamp empezó!");
});

---------------------------------------------------------

* Crear el modelo
* Añadir el index y el resto de los templates para las rutas
* Añadir una navbar