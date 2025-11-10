import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useVehicles } from '../context/VehicleContext';

/**
 * Página de vehículos marcados como posible compra
 * Muestra todos los vehículos que el usuario ha marcado para considerar comprar
 * Permite desmarcarlos para devolverlos al inventario general
 */
const PossiblePurchases = () => {
  const navigate = useNavigate();
  const { possiblePurchases, unmarkAsPossiblePurchase } = useVehicles();

  /**
   * Función para formatear precios en pesos chilenos
   * @param {number} price - Precio numérico del vehículo
   * @returns {string} - Precio formateado (ej: "$15.000.000")
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };

  /**
   * Función para desmarcar un vehículo como posible compra
   * @param {number} id - ID del vehículo a desmarcar
   * @param {string} marca - Marca del vehículo
   * @param {string} modelo - Modelo del vehículo
   */
  const handleUnmark = (id, marca, modelo) => {
    if (window.confirm(`¿Desmarcar ${marca} ${modelo} como posible compra? Volverá al inventario general.`)) {
      unmarkAsPossiblePurchase(id);
    }
  };

  /**
   * Calcular el total de posibles compras
   */
  const totalAmount = possiblePurchases.reduce((sum, vehicle) => sum + vehicle.precio, 0);

  return (
    <div className="home-container">
      {/* Hero Section - Estilo consistente con Home */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Posibles Compras</h1>
          <p className="hero-subtitle">Tus vehículos favoritos listos para la decisión final</p>
          <p className="hero-description">
            Revisa los vehículos que has marcado como candidatos y toma la mejor decisión de compra
          </p>
        </div>
      </section>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">

        {/* Lista de vehículos */}
        {possiblePurchases.length === 0 ? (
          /* Estado vacío */
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🚗</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                No hay vehículos marcados
              </h2>
              <p className="text-gray-600 mb-6">
                Aún no has marcado ningún vehículo como posible compra.
                <br />
                Explora nuestro inventario y encuentra tu próximo auto.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/inventario')}
                className="btn-primary"
              >
                Ver Inventario
              </button>
              <button
                onClick={() => navigate('/')}
                className="btn-secondary"
              >
                Ir al Inicio
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Lista de vehículos marcados */}
            <section className="featured-vehicles">
              <div className="vehicles-grid">
                {possiblePurchases.map((vehicle) => (
                  <div key={vehicle.id} className="vehicle-card">
                    <div className="vehicle-image">
                      <img 
                        src={vehicle.imagen} 
                        alt={`${vehicle.marca} ${vehicle.modelo} ${vehicle.año}`}
                        onError={(e) => {
                          e.target.src = '/images/default-car.svg';
                        }}
                      />
                      {/* Badge de posible compra */}
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        ⭐ Candidato
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
                      
                      <p className="description">{vehicle.descripcion || 'Sin descripción disponible'}</p>
                      <div className="flex gap-2 mt-4">
                        <button 
                          onClick={() => navigate(`/vehiculo/${vehicle.id}`)}
                          className="btn-secondary flex-1"
                        >
                          Ver Detalles
                        </button>
                        <button
                          onClick={() => handleUnmark(vehicle.id, vehicle.marca, vehicle.modelo)}
                          className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 px-3 py-2 rounded-md transition duration-200"
                        >
                          Desmarcar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Estadísticas en la parte inferior */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4 text-center">📊 Resumen de Selección</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{possiblePurchases.length}</div>
                  <div className="text-blue-100">Vehículos seleccionados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{formatPrice(totalAmount)}</div>
                  <div className="text-blue-100">Valor total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{formatPrice(totalAmount / possiblePurchases.length)}</div>
                  <div className="text-blue-100">Precio promedio</div>
                </div>
              </div>
              
              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
                <button
                  onClick={() => navigate('/inventario')}
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition duration-200"
                >
                  Seguir Explorando
                </button>
                <button
                  onClick={() => navigate('/como-comprar')}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition duration-200"
                >
                  Cómo Comprar
                </button>
              </div>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
};

/**
 * Exporta el componente PossiblePurchases como default
 * Página que muestra todos los vehículos marcados como posible compra
 * Permite gestionar la lista de candidatos para compra del usuario
 */
export default PossiblePurchases;
