import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Crear = () => {
  const [crear, setCrear] = useState({
    titulo: "",
    contenido: "",
    fecha: null,
  });
  const token = localStorage.getItem("token");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "titulo" || name === "contenido") {
      if (/^[A-Za-z\s]+$/.test(value) || value === "") {
        setCrear({ ...crear, [name]: value });
      }
    } else if (name === "fecha") {
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(value) || value === "") {
        setCrear({ ...crear, [name]: value });
      }
    } else {
      setCrear({ ...crear, [name]: value });
    }
  };

  const articleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!crear.titulo || !crear.contenido || !crear.fecha) {
        throw new Error("No completaste todos los pasos");
      }

      const response = await axios.post(
        "http://localhost:5000/api/articulo",
        {
          ...crear,
        },
        { headers: { Authorization: token } }
      );

      console.log(response);
      setCrear(response.data);
      toast.success("Articulo creado exitosamente");

      setTimeout(() => {
        window.location.href = "/crear";
      }, 3000);
    } catch (error) {
      toast.error("Ocurrió un error al crear el artículo");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="jumbo">
        <h1>Crear Articulo</h1>
        <form className="formulario" onSubmit={articleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              name="titulo"
              className="input-crear"
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contenido">Contenido</label>
            <input
              type="text"
              name="contenido"
              className="contenido input-crear"
              minLength="10"
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <DatePicker
              selected={crear.fecha}
              onChange={(date) => setCrear({ ...crear, fecha: date })}
              className="input-crear"
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecciona una fecha"
            />
          </div>

          <input type="submit" value="guardar" className="btn btn-succces" />
        </form>
      </div>
    </>
  );
};
