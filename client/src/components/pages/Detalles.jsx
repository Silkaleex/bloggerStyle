import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export const Detalles = () => {
  const { detallesId } = useParams();
  const [detalles, setDetalles] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticulo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/articulos/${detallesId}`
        );

        console.log(response);
        setDetalles(response.data.article);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error al obtener el artículo:", error);
      }
    };

    fetchArticulo();
  }, [detallesId]);

  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <h1 className="msg-cargando">Cargando tus Articulos</h1>
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="detalles-item">
            <div className="datos">
              <h3 className="title">{detalles.titulo}</h3>
              <p className="description">{detalles.contenido}</p>
              <p className="description m">{formatDate(detalles.fecha)}</p>
              <Link className="btn-volver-artc" to="/articulos">
                Volver a Artículos
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
