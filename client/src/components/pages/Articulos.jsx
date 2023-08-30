import React, { useState, useEffect } from "react";
import axios from "axios";
import { Listado } from "./Listado";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articulo");
        console.log(response);
        setArticulos(response.data.articulos);
      } catch (error) {
        console.log(error.response);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      {loading ? (
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
          {articulos.length > 0 ? (
            <Listado articulos={articulos} setArticulos={setArticulos} />
          ) : (
            <h1 className="msg-vacio">No hay artículos que mostrar</h1>
          )}
        </>
      )}
    </>
  );
};
