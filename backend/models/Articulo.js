const mongoose = require("mongoose");

const ArticuloSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    contenido: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },

  },{timestamps:true}
);

module.exports = mongoose.model("Articulo", ArticuloSchema,"articulos");
