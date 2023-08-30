console.log("Hello world");

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path"); 

require("dotenv").config();
const app = express();

//convertimos body en un objeto Json
app.use(express.json({extended:true}))//recibimos datos con content-type app/json
app.use(express.urlencoded({extended:true}))
app.use(cors())

 //Rutas
const ArticlesRouter = require("./routes/ArticlesRouter")
 //cargando rutas
app.use("/api",ArticlesRouter)

 const URL = process.env.mongo_db;

 app.use("/imagenes/articulos", express.static(path.join(__dirname, "imagenes/articulos")));


mongoose
  .connect(URL, {})
  .then(() => {
    console.log("los servidores estan en funcionamiento");
  })
  .catch((error) => {
    console.log(error);
    throw New.error("Hay fallos en la base de datos");
  });

app.listen(5000, () => {
  console.log("todo en funcionamiento en el puerto 5000");
});
