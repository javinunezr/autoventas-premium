import React from 'react';

/**
 * Componente Header - Encabezado principal de la aplicación
 * Muestra el logo de la empresa y la información de contacto
 * Se mantiene fijo en la parte superior de todas las páginas
 */
const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        {/* Logo de la empresa con icono de auto */}
        <div className="logo">
          <h1>🚗 AutoVentas Premium</h1>
        </div>
        
        {/* Información de contacto */}
        <div className="header-info">
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>(+56) 9 1234 5678</span>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <span>ventas@autoventaspremium.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

/**
 * Exporta el componente Header como default
 * Componente de encabezado que aparece en todas las páginas
 */
export default Header;
