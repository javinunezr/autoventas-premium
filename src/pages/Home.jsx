import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useVehicles } from '../context/VehicleContext';

/**
 * Componente de la página principal (Home)
 * Muestra los vehículos destacados, servicios y llamadas a la acción
 */
const Home = () => {
  // Obtener la lista de vehículos del contexto global
  const { vehicles } = useVehicles();
  const navigate = useNavigate(); // Hook para navegación programática
  
  // Mostrar solo los primeros 3 vehículos como destacados en la página principal
  const featuredVehicles = vehicles.slice(0, 3);

  /**
   * Función para formatear precios en pesos chilenos
   * Utilizada para mostrar precios de manera consistente en toda la aplicación
   * @param {number} price - Precio numérico del vehículo
   * @returns {string} - Precio formateado con símbolo de moneda (ej: "$15.000.000")
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',       // Aplicar formato de moneda
      currency: 'CLP',         // Usar pesos chilenos
      minimumFractionDigits: 0 // No mostrar centavos
    }).format(price);
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>AutoVentas Premium</h1>
          <p className="hero-subtitle">Los mejores vehículos al mejor precio</p>
          <p className="hero-description">
            Encuentra el auto de tus sueños en nuestra amplia selección de vehículos nuevos y usados
          </p>
          <button 
            onClick={() => navigate('/inventario')}
            className="cta-button"
          >
            Ver Catálogo
          </button>
        </div>
      </section>

      {/* Vehículos Destacados */}
      <section className="featured-vehicles">
        <h2>Vehículos Destacados</h2>
        <div className="vehicles-grid">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">
                <img 
                  src={vehicle.imagen} 
                  alt={`${vehicle.marca} ${vehicle.modelo} ${vehicle.año}`}
                  onError={(e) => {
                    e.target.src = '/images/default-car.svg';
                  }}
                />
                {/* Badge de destacado */}
                <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-md shadow-md">
                  <span className="text-xs font-medium">⭐ Destacado</span>
                </div>
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md shadow-md">
                  <span className="text-xs font-medium text-gray-600">{vehicle.año}</span>
                </div>
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.marca} {vehicle.modelo} {vehicle.año}</h3>
                <p className="price">{formatPrice(vehicle.precio)}</p>
                
                {/* Información adicional */}
                <div className="space-y-1 mb-3 text-sm text-gray-600">
                  {vehicle.categoria && (
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">🚗</span>
                      <span>{vehicle.categoria}</span>
                    </div>
                  )}
                  {vehicle.transmision && (
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">⚙️</span>
                      <span>{vehicle.transmision}</span>
                    </div>
                  )}
                </div>
                
                <p className="description">{vehicle.descripcion}</p>
                <button 
                  onClick={() => navigate(`/vehiculo/${vehicle.id}`)}
                  className="btn-secondary"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {vehicles.length > 3 && (
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Mostrando {featuredVehicles.length} de {vehicles.length} vehículos disponibles
            </p>
            <button 
              onClick={() => navigate('/inventario')}
              className="btn-outline"
            >
              Ver Todos los Vehículos
            </button>
          </div>
        )}
      </section>

      {/* Servicios */}
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">🚗</div>
            <h3>Venta de Vehículos</h3>
            <p>Amplio catálogo de vehículos nuevos y seminuevos</p>
          </div>
          <div className="service-item">
            <div className="service-icon">💰</div>
            <h3>Financiamiento</h3>
            <p>Planes de financiamiento flexibles y tasas competitivas</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🔧</div>
            <h3>Servicio Técnico</h3>
            <p>Mantenimiento y reparación especializada</p>
          </div>
          <div className="service-item">
            <div className="service-icon">📋</div>
            <h3>Garantía</h3>
            <p>Garantía extendida en todos nuestros vehículos</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para encontrar tu vehículo ideal?</h2>
          <p>Contáctanos hoy mismo y obtén la mejor asesoría personalizada</p>
          <div className="cta-buttons">
            <button className="cta-button">Contactar Ahora</button>
            <button className="btn-outline">Ver Catálogo Completo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
