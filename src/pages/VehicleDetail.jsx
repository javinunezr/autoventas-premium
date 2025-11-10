import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useVehicles } from '../context/VehicleContext';

/**
 * Página de detalle de vehículo
 * Muestra información completa del vehículo y permite marcarlo como posible compra
 */
const VehicleDetail = () => {
  const { id } = useParams(); // Obtener el ID del vehículo desde la URL
  const navigate = useNavigate(); // Hook para navegación programática
  const { vehicles, possiblePurchases, markAsPossiblePurchase } = useVehicles();

  // Buscar el vehículo por ID en ambas listas (inventario general y posibles compras)
  const vehicle = vehicles.find(v => v.id === parseInt(id)) || 
                 possiblePurchases.find(v => v.id === parseInt(id));

  // Si no se encuentra el vehículo, mostrar mensaje de error
  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Vehículo no encontrado</h1>
            <p className="text-gray-600 mb-6">El vehículo que buscas no existe o ha sido eliminado.</p>
            <button
              onClick={() => navigate('/inventario')}
              className="btn-primary"
            >
              Volver al Inventario
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Verificar si el vehículo ya está marcado como posible compra
  const isMarkedAsPossiblePurchase = possiblePurchases.some(v => v.id === vehicle.id);

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
   * Función para manejar el marcado como posible compra
   */
  const handleMarkAsPossiblePurchase = () => {
    markAsPossiblePurchase(vehicle.id);
    // Mostrar confirmación y redirigir
    alert(`${vehicle.marca} ${vehicle.modelo} ha sido marcado como posible compra`);
    navigate('/inventario');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Botón de regreso */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition duration-200"
          >
            ← Volver
          </button>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Detalle del Vehículo</h1>
          <p className="text-gray-600">Información completa del vehículo seleccionado</p>
        </div>

        {/* Vehículo en formato de caja (igual que inventario) */}
        <section className="featured-vehicles">
          <div className="vehicles-grid">
            <div className="vehicle-card">
              <div className="vehicle-image">
                <img 
                  src={vehicle.imagen} 
                  alt={`${vehicle.marca} ${vehicle.modelo} ${vehicle.año}`}
                  onError={(e) => {
                    e.target.src = '/images/default-car.svg';
                  }}
                />
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.marca} {vehicle.modelo} {vehicle.año}</h3>
                <p className="price">{formatPrice(vehicle.precio)}</p>
                <p className="description">{vehicle.descripcion || 'Sin descripción disponible'}</p>
                
                {/* Estado del vehículo */}
                <div className="mt-4 mb-4">
                  {!isMarkedAsPossiblePurchase ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-800 text-center font-medium text-sm">
                        Disponible en inventario
                      </p>
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 text-center font-medium text-sm">
                        Marcado como posible compra
                      </p>
                    </div>
                  )}
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col gap-3">
                  {!isMarkedAsPossiblePurchase ? (
                    <button
                      onClick={handleMarkAsPossiblePurchase}
                      className="btn-primary py-3"
                    >
                      Marcar como Posible Compra
                    </button>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 text-center font-medium">
                        ✅ Ya marcado como posible compra
                      </p>
                    </div>
                  )}
                  
                  <button
                    onClick={() => navigate('/inventario')}
                    className="btn-secondary py-3"
                  >
                    Ver Más Vehículos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especificaciones técnicas en formato de tabla */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Especificaciones Técnicas</h3>
          
          {/* Descripción completa del vehículo */}
          <div className="mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Características del Vehículo</h4>
              <p className="text-blue-800 leading-relaxed">
                {vehicle.descripcion || 'Sin descripción disponible'}
              </p>
            </div>
          </div>

          {/* Datos básicos del vehículo */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2 text-gray-900">
              <div>
                <span className="font-medium">Marca:</span> <span className="font-semibold">{vehicle.marca}</span>
              </div>
              <div>
                <span className="font-medium">Modelo:</span> <span className="font-semibold">{vehicle.modelo}</span>
              </div>
              <div>
                <span className="font-medium">Año:</span> <span className="font-semibold">{vehicle.año}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Información Importante
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <div>
              <p>• Los precios incluyen IVA</p>
              <p>• Vehículo sujeto a disponibilidad</p>
            </div>
            <div>
              <p>• Financiamiento disponible con tasa preferencial</p>
              <p>• Garantía del fabricante incluida</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Exporta el componente VehicleDetail como default
 * Página que muestra el detalle completo de un vehículo específico
 * Permite marcar el vehículo como posible compra
 */
export default VehicleDetail;
