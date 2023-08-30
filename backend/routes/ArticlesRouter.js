const express = require("express");
const ArticlesRouter = express.Router();
const articulo = require("../models/Articulo");

//Creando un articulo
ArticlesRouter.post("/articulo", async (req, res) => {
  const { titulo, contenido, fecha } = req.body;
  try {
    let datos = await articulo.findOne({ titulo, contenido, fecha });
    if (datos) {
      return res.status(400).send({
        sucess: false,
        message: "Este articulo ya está guardado",
      });
    }
    if (!titulo || !contenido || !fecha || titulo.length > 15 || contenido.length > 40 ) {
      return res.status(400).send({
        sucess: false,
        message: "No completastes todos los datos",
      });
    }

    let myArticle = new articulo({
      titulo,
      contenido,
      fecha,
    });
    await myArticle.save();
    return res.status(200).send({
      success: true,
      message: "articulos guardados con exito",
      myArticle,
    });
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: error.message,
    });
  }
});


//Me muestra todos los Articulos
ArticlesRouter.get("/articulo", async (req, res) => {
  try {
    let articulos = await articulo.find({}).sort({ fecha: -1 }).populate();
    if (!articulos) {
      return res.status(400).send({
        sucess: false,
        message: "Articulos no encontrados",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tus articulos fueron encontrados correctamente",
      articulos,
    });
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: error.message,
    });
  }
});

//Me muestra el contenido del articulo
ArticlesRouter.get("/articulos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let article = await articulo.findById(id).populate("contenido", "fecha");

    if (!article) {
      return res.status(400).send({
        success: false,
        message: "Articulo no encontrado",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Articulo encontrado",
      article,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

//Buscador
ArticlesRouter.get("/buscar/:titulo", async (req, res) => {
  try {
    const { titulo } = req.params;
    let article = await articulo.findOne({ titulo });
    if (!article) {
      return res.status(400).send({
        success: false,
        message: "Articulo no encontrado",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Articulo encontrado",
      article,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

//Modificacion del articulo
ArticlesRouter.put("/articulo/:id", async (req, res) => {
  const { id } = req.params;
  const { contenido, fecha } = req.body;
  try {
    await articulo.findByIdAndUpdate(id, {
      contenido,
      fecha,
    });
    if (!contenido || !fecha) {
      return res.status(400).send({
        success: false,
        message: "No completaste todos los campos",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Articulo modificado",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// Eliminar el Articulo
ArticlesRouter.delete("/articles/:id", async (req, res) => {
  const { id } = req.params;
  await articulo.findByIdAndDelete(id);
  try {
      if (!id) {
        return res.status(400).send({
          success: false,
          message: "No se pudo borrar el articulo",
        });
      }
      return res.status(200).send({
        sucess: true,
        message: "El articulo se borro exitosamente",
      });
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: error.message,
    });
  }
});


module.exports = ArticlesRouter;
