import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Listado = ({ articulos }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const deleteArticulo = async (articuloId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/articles/${articuloId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);

      // Muestra la notificación de éxito
      toast.success("Artículo borrado exitosamente");

      setTimeout(() => {
        navigate("/crear");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      // Muestra una notificación de error
      toast.error("Error al borrar el artículo");
    }
  };

  const formatDate = (rawDate) => {
    // Convertir la fecha en el formato "día mes año"
    const date = new Date(rawDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      {articulos.length > 0 ? (
        articulos.map((articulo) => (
          <article key={articulo._id} className="articulo-item">
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              {articulo.contenido.length > 10 ? (
                <>
                  <p className="description">
                    {articulo.contenido.slice(0, 20)}...
                    <Link to={`/detalles/${articulo._id}`} className="inf-enlc">Saber más</Link>
                  </p>
                </>
              ) : (
                <>
                  <p className="description">{articulo.contenido}</p>
                </>
              )}
              <p className="description">{formatDate(articulo.fecha)}</p>
              <div className="btn-edition">
                <Link className="edit" to={`/editar/${articulo._id}`}>
                  Editar
                </Link>
                <button
                  className="delete"
                  onClick={() => deleteArticulo(articulo._id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          </article>
        ))
      ) : (
        <h1 className="msg-vacio">No hay artículos que mostrar</h1>
      )}
    </>
  );
};
