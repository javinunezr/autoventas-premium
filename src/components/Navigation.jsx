import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Componente de navegación inferior
 * Proporciona acceso rápido a todas las secciones principales de la aplicación
 * Utiliza NavLink para destacar la página actual
 */
const Navigation = () => {
  return (
    <nav className="bottom-navigation">
      {/* Enlace a la página principal */}
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <div className="nav-icon">🏠</div>
        <span className="nav-label">Inicio</span>
      </NavLink>
      
      {/* Enlace al inventario completo de vehículos */}
      <NavLink 
        to="/inventario" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <div className="nav-icon">📋</div>
        <span className="nav-label">Inventario</span>
      </NavLink>
      
      {/* Enlace a vehículos marcados como posible compra */}
      <NavLink 
        to="/posibles-compras" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <div className="nav-icon">⭐</div>
        <span className="nav-label">Posible compra</span>
      </NavLink>
      
      {/* Enlace al formulario para agregar nuevos vehículos */}
      <NavLink 
        to="/agregar-vehiculo" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <div className="nav-icon">➕</div>
        <span className="nav-label">Agregar Vehículo</span>
      </NavLink>
      
      {/* Enlace a la información de la empresa */}
      <NavLink 
        to="/quienes-somos" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <div className="nav-icon">👥</div>
        <span className="nav-label">Nosotros</span>
      </NavLink>
    </nav>
  );
};

/**
 * Exporta el componente Navigation como default
 * Este componente maneja la navegación principal de la aplicación
 * usando NavLink para el estado activo automático
 */
export default Navigation;