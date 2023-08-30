import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";
import { Crear } from "../components/pages/Crear";
import { Header } from "../components/layouts/Header";
import { Nav } from "../components/layouts/Nav";
import { Sidebar } from "../components/layouts/Sidebar";
import { Footer } from "../components/layouts/Footer";
import { Listado } from "../components/pages/Listado";
import { Editar } from "../components/pages/Editar";
import { Busqueda } from "../components/pages/Busqueda";
import { Detalles } from "../components/pages/Detalles";

export const Rutas = () => {
  
  return (
    <BrowserRouter>
      {/* Layout */}
      <Header />
      <Nav />
      {/* Contenido central y rutas */}
      <section id="content" className="content">
        <div className="pages">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/articulo/:articuloId" element={<Listado />} />
            <Route path="/crear" element={<Crear />} />
            <Route path="/editar/:articuloId" element={<Editar />} />
            <Route path="/buscar/:busquedaId" element={<Busqueda/>}/>
            <Route path="/detalles/:detallesId" element={<Detalles />} /> 

           <Route path="*" element={<div className="jumbo"><h1>404 Page Not Found</h1></div>}/>
          </Routes>
        </div>
        <Sidebar />
      </section>
      <Footer />
    </BrowserRouter>
  );
};
