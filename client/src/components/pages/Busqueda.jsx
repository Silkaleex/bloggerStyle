import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

export const Busqueda = () => {
  const { busquedaId } = useParams();
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/buscar/${busquedaId}`
        );
        setSearchResult(response.data.article);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error.response);
        setLoading(false);
      }
    };

    fetchData();
  }, [busquedaId]);

  const deleteArticulo = async (articuloId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/articles/${articuloId}`
      );
      setTimeout(() => {
        navigate("/articulos");
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };

  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
     {loading ? (
        <div className="loading-overlay">
          <div className="loading-container">
            <div className="custom-spinner">
              <h1 className="loading-text">
                Cargando resultados para {busquedaId}
              </h1>
              <RingLoader color="#a3b18a" loading={true} size={100} />
            </div>
          </div>
        </div>
      ) : (
        <>
          {searchResult ? (
            <div className="articulo-item">
              <div className="datos">
                <h3 className="title">{searchResult.titulo}</h3>
                <p className="description">{searchResult.contenido}</p>
                <p className="description">{formatDate(searchResult.fecha)}</p>
                <div className="btn-edition">
                  <Link className="edit" to={`/editar/${searchResult._id}`}>
                    Editar
                  </Link>
                  <button
                    className="delete"
                    onClick={() => deleteArticulo(searchResult._id)}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="msg-vacio">No hay artículos que mostrar</h1>
          )}
        </>
      )}
    </div>
  );
};
