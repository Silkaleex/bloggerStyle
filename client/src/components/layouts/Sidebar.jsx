import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [buscar, setBuscar] = useState("")
  const navigate = useNavigate()

  const buscando = (e) =>{
    e.preventDefault()
   let encontrando = e.target.search_field.value;
   navigate(`/buscar/${encontrando}`,{replace:true})
  }

  return (
    <div>
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form onSubmit={buscando}>
            <input type="text" name="search_field" id="search_field"/>
            <input type="submit" id="search" value="Buscar"/>
          </form>
        </div>
      </aside>
    </div>
  );
};
