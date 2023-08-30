import React, { useState } from "react";

export const useForm = (objetoInicial = {}) => {
  const [formulario, setFormulario] = useState(objetoInicial);

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    const objetoCompleto = {};
    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }

    return objetoCompleto;

    // este objeto me da acceso a todos los datos
  };

  const enviado = (e) => {
    e.preventDefault();
    console.log(e.target);
    // let curso = {
    //   titulo:e.target.titulo.value,
    //   anio:e.target.anio.value,
    //   descripcion:e.target.descripcion.value,
    //   autor:e.target.autor.value,
    //   email:e.target.email.value
    // }
    let curso = serializarFormulario(e.target);

    setFormulario(curso);


  };
  const cambiado = ({ target }) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return {
    formulario,
    enviado,
    cambiado,
  };
};
