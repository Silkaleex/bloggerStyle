import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Editar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { articuloId } = useParams();

  const [articulo, setArticulo] = useState({
    contenido: "", 
    fecha: "",     
  });


  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setArticulo({ ...articulo, [name]: value });
  };

  const getArticulo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/articulos/${articuloId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const articleData = response.data.article;
      // Formatear la fecha al formato "yyyy-MM-dd"
      const formattedDate = new Date(articleData.fecha).toISOString().split('T')[0];
      setArticulo({
        ...articleData,
        fecha: formattedDate,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getArticulo();
  }, []);

  const modificacionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/articulo/${articuloId}`,
        { ...articulo }
      );
      console.log(response)
      toast.success('Artículo modificado con éxito')
      setTimeout(() => {
        navigate("/articulos");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      toast.error('Error al modificar el artículo')
    }
  };

  return (
    <div className="jumbo">
       <ToastContainer />
      <form onSubmit={modificacionSubmit} className="formulario">
        <div className="form-group">
          <label>Descripcion:</label>
          <textarea
            placeholder="Descripcion del titulo a modificar"
            name="contenido"
            value={articulo.contenido}
            onChange={onChangeInput}
            className="txt-edt"
          ></textarea>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={articulo.fecha}
            onChange={onChangeInput}
            min={new Date().toISOString().split('T')[0]} 
            max="9999-12-31"  className="input-crear"     
          ></input>
          <div>
            <button type="submit" className="btn-guardar" >Guardar</button>
            <Link to={"/articulos"} className="btn-volver" >Volver</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
