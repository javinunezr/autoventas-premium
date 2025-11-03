import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { VehicleProvider } from './context/VehicleContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import ComoComprar from './pages/ComoComprar';
import AgregarVehiculo from './pages/AgregarVehiculo';
import Inventario from './pages/Inventario';
import './App.css';

/**
 * Componente principal de la aplicación
 * Configura el router, el contexto global y la estructura de layout
 * Envuelve toda la aplicación con el proveedor de contexto de vehículos
 */
function App() {
  return (
    <VehicleProvider>
      {/* Contenedor principal de la aplicación */}
      <div className="App">
        {/* Componente de encabezado fijo en la parte superior */}
        <Header />
        
        {/* Área principal de contenido donde se renderizan las páginas */}
        <main className="main-content">
          <Routes>
            {/* Ruta principal - página de inicio con vehículos destacados */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta de información corporativa */}
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            
            {/* Ruta con guía del proceso de compra */}
            <Route path="/como-comprar" element={<ComoComprar />} />
            
            {/* Ruta del formulario para agregar nuevos vehículos */}
            <Route path="/agregar-vehiculo" element={<AgregarVehiculo />} />
            
            {/* Ruta del inventario completo con búsqueda y filtros */}
            <Route path="/inventario" element={<Inventario />} />
          </Routes>
        </main>
        
        {/* Componente de navegación fijo en la parte inferior */}
        <Navigation />
      </div>
    </VehicleProvider>
  );
}

/**
 * Exporta el componente App como default
 * Este es el punto de entrada principal de la aplicación React
 */
export default App;
