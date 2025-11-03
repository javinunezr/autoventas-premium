import React, { useState } from 'react';
import { useVehicles } from '../context/VehicleContext';

/**
 * Componente del inventario de vehículos
 * Muestra todos los vehículos con funciones de búsqueda, filtrado y eliminación
 */
const Inventario = () => {
  // Obtener vehículos y función de eliminar
  const { vehicles, deleteVehicle } = useVehicles();
  
  // Estados locales para manejar los filtros y búsqueda
  const [searchTerm, setSearchTerm] = useState('');     // Término de búsqueda del usuario (marca, modelo, año, etc)
  const [sortBy, setSortBy] = useState('marca');        // Ordenar por marca
  const [sortOrder, setSortOrder] = useState('asc');    // Orden ascendente o descendente

  // Filtrar vehículos basado en el término de búsqueda del usuario
  // Busca en marca, modelo y año de fabricación
  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||     // Buscar en marca (sin distinguir mayúsculas)
    vehicle.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||    // Buscar en modelo (sin distinguir mayúsculas)
    vehicle.año.toString().includes(searchTerm)                          // Buscar en año (convertido a string)
  );

  // Ordenar los vehículos filtrados según los criterios seleccionados
  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    let valueA = a[sortBy];  // Valor del primer vehículo para comparar
    let valueB = b[sortBy];  // Valor del segundo vehículo para comparar

    // Convertir strings a minúsculas para comparación uniforme
    if (typeof valueA === 'string') {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    // Aplicar el orden seleccionado (ascendente o descendente)
    if (sortOrder === 'asc') {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;  // Orden ascendente A-Z, 1-9
    } else {
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;  // Orden descendente Z-A, 9-1
    }
  });

  /**
   * Función para manejar la eliminación de vehículos
   * Muestra confirmación antes de eliminar definitivamente
   * @param {number} id - ID único del vehículo a eliminar
   * @param {string} marca - Marca del vehículo (para mostrar en confirmación)
   * @param {string} modelo - Modelo del vehículo (para mostrar en confirmación)
   */
  const handleDelete = (id, marca, modelo) => {
    // Mostrar diálogo de confirmación antes de eliminar
    if (window.confirm(`¿Está seguro de que desea eliminar el ${marca} ${modelo}?`)) {
      deleteVehicle(id); // Eliminar del estado global si el usuario confirma
    }
  };

  /**
   * Función para formatear precios en pesos chilenos
   * Convierte números a formato de moneda local, independientemente de cómo haya ingresado los números el usuario
   * @param {number} price - Precio numérico del vehículo
   * @returns {string} - Precio formateado (ej: "$15.000.000")
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',       // Formato de moneda
      currency: 'CLP',         // Pesos chilenos
      minimumFractionDigits: 0 // Sin decimales
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventario de Vehículos</h1>
          <p className="text-gray-600">Encuentra todos los vehículos disponibles en el inventario</p>
        </div>

        {/* Controles de búsqueda y filtrado */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Filtros de Búsqueda</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Búsqueda */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-3">
                🔍 Buscar vehículos
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Buscar por marca, modelo o año..."
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition duration-200"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Filtros */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              {/* Ordenar por */}
              <div className="min-w-[200px]">
                <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-3">
                  📊 Ordenar por
                </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white text-gray-900"
                >
                  <option value="marca">🏢 Marca</option>
                  <option value="modelo">🚗 Modelo</option>
                  <option value="precio">💰 Precio</option>
                  <option value="año">📅 Año</option>
                </select>
              </div>

              {/* Orden */}
              <div className="min-w-[150px]">
                <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 mb-3">
                  🔄 Orden
                </label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white text-gray-900"
                >
                  <option value="asc">↗️ Ascendente</option>
                  <option value="desc">↘️ Descendente</option>
                </select>
              </div>
            </div>
          </div>

          {/* Estadísticas de resultados */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-1">
                  📋 <strong>{vehicles.length}</strong> vehículos totales
                </span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-1">
                    🔍 <strong>{sortedVehicles.length}</strong> resultados encontrados
                  </span>
                )}
              </div>
              
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition duration-200"
                >
                  🗑️ Limpiar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Vehículos en el Inventario */}
        <section className="featured-vehicles">
          <div className="vehicles-grid">
            {sortedVehicles.length === 0 ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                {searchTerm ? 'No se encontraron vehículos que coincidan con la búsqueda' : 'No hay vehículos en el inventario'}
              </div>
            ) : (
              sortedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="vehicle-card">
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
                    <div className="flex gap-2 mt-4">
                      <button className="btn-secondary flex-1">Ver Detalles</button>
                      <button
                        onClick={() => handleDelete(vehicle.id, vehicle.marca, vehicle.modelo)}
                        className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 px-3 py-2 rounded-md transition duration-200"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Resumen al final */}
        {sortedVehicles.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-4 mt-6">
            <p className="text-sm text-gray-600 text-center">
              Mostrando {sortedVehicles.length} de {vehicles.length} vehículos
              {searchTerm && ` • Filtrado por: "${searchTerm}"`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inventario;