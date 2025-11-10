import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVehicles } from '../context/VehicleContext';

/**
 * Componente del inventario de vehículos
 * Muestra todos los vehículos con funciones de búsqueda, filtrado y eliminación
 */
const Inventario = () => {
  // Obtener vehículos y función de eliminar
  const { vehicles, deleteVehicle } = useVehicles();
  const navigate = useNavigate(); // Hook para navegación programática
  
  // Estados locales para manejar los filtros y búsqueda
  const [searchTerm, setSearchTerm] = useState('');     // Término de búsqueda del usuario (marca, modelo, año, etc)
  const [sortBy, setSortBy] = useState('marca');        // Ordenar por marca
  const [sortOrder, setSortOrder] = useState('asc');    // Orden ascendente o descendente
  const [filterCategoria, setFilterCategoria] = useState(''); // Filtro por categoría de vehículo
  const [filterTransmision, setFilterTransmision] = useState(''); // Filtro por tipo de transmisión

  // Filtrar vehículos basado en el término de búsqueda del usuario y filtros adicionales
  // Busca en marca, modelo y año de fabricación, y filtra por categoría y transmisión
  const filteredVehicles = vehicles.filter(vehicle => {
    // Filtro de texto (marca, modelo, año)
    const matchesSearch = vehicle.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.año.toString().includes(searchTerm);
    
    // Filtro por categoría (verificar que la propiedad existe)
    const matchesCategoria = !filterCategoria || (vehicle.categoria && vehicle.categoria === filterCategoria);
    
    // Filtro por transmisión (verificar que la propiedad existe)
    const matchesTransmision = !filterTransmision || (vehicle.transmision && vehicle.transmision === filterTransmision);
    
    return matchesSearch && matchesCategoria && matchesTransmision;
  });

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
   * Función para limpiar todos los filtros
   */
  const clearAllFilters = () => {
    setSearchTerm('');
    setFilterCategoria('');
    setFilterTransmision('');
  };

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
    <div className="home-container">
      {/* Hero Section - Estilo consistente con Home */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Inventario Completo</h1>
          <p className="hero-subtitle">Encuentra el vehículo perfecto entre nuestra amplia selección</p>
          <p className="hero-description">
            Explora todos nuestros vehículos disponibles con herramientas avanzadas de búsqueda y filtrado
          </p>
        </div>
      </section>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">

        {/* Controles de búsqueda y filtrado */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 max-w-6xl">
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Filtros de Búsqueda</h2>
          </div>
          
          {/* Fila única: Búsqueda y todos los filtros */}
          <div className="flex flex-col lg:flex-row gap-4 items-start mb-4">
            {/* Búsqueda */}
            <div className="flex-1 max-w-md">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                🔍 Buscar vehículos
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
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

            {/* Todos los filtros en línea horizontal */}
            <div className="flex flex-wrap gap-8">
              {/* Filtro por categoría */}
              <div className="w-40">
                <label htmlFor="filterCategoria" className="block text-sm font-medium text-gray-700 mb-1">
                  🏷️ Categoría
                </label>
                <select
                  id="filterCategoria"
                  value={filterCategoria}
                  onChange={(e) => setFilterCategoria(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white text-gray-900"
                >
                  <option value="">Todas</option>
                  <option value="Sedán">Sedán</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="SUV">SUV</option>
                  <option value="Crossover">Crossover</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Coupé">Coupé</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Station Wagon">Station Wagon</option>
                </select>
              </div>

              {/* Filtro por transmisión */}
              <div className="w-40">
                <label htmlFor="filterTransmision" className="block text-sm font-medium text-gray-700 mb-1">
                  ⚙️ Transmisión
                </label>
                <select
                  id="filterTransmision"
                  value={filterTransmision}
                  onChange={(e) => setFilterTransmision(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white text-gray-900"
                >
                  <option value="">Todas</option>
                  <option value="Manual">Manual</option>
                  <option value="Automática">Automática</option>
                  <option value="CVT">CVT</option>
                  <option value="Semi-automática">Semi-automática</option>
                </select>
              </div>

              {/* Ordenar por */}
              <div className="w-36">
                <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                  📊 Ordenar por
                </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white text-gray-900"
                >
                  <option value="marca">🏢 Marca</option>
                  <option value="modelo">🚗 Modelo</option>
                  <option value="precio">💰 Precio</option>
                  <option value="año">📅 Año</option>
                </select>
              </div>

              {/* Orden */}
              <div className="w-32">
                <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 mb-1">
                  🔄 Orden
                </label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white text-gray-900"
                >
                  <option value="asc">↗️ Ascendente</option>
                  <option value="desc">↘️ Descendente</option>
                </select>
              </div>
            </div>
          </div>

          {/* Estadísticas de resultados */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center gap-1">
                  📋 <strong>{vehicles.length}</strong> vehículos totales
                </span>
                {(searchTerm || filterCategoria || filterTransmision) && (
                  <span className="inline-flex items-center gap-1">
                    🔍 <strong>{sortedVehicles.length}</strong> resultados encontrados
                  </span>
                )}
              </div>
              
              {/* Filtros activos */}
              <div className="flex flex-wrap items-center gap-2">
                {filterCategoria && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                    🏷️ {filterCategoria}
                    <button 
                      onClick={() => setFilterCategoria('')}
                      className="ml-1 text-blue-600 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filterTransmision && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-md">
                    ⚙️ {filterTransmision}
                    <button 
                      onClick={() => setFilterTransmision('')}
                      className="ml-1 text-purple-600 hover:text-purple-900"
                    >
                      ×
                    </button>
                  </span>
                )}
                {(searchTerm || filterCategoria || filterTransmision) && (
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-2 px-3 py-1 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition duration-200"
                  >
                    🗑️ Limpiar todos los filtros
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Vehículos en el Inventario */}
        <section className="featured-vehicles">
          <div className="vehicles-grid">
            {sortedVehicles.length === 0 ? (
              <div className="col-span-full w-full flex flex-col items-center justify-center min-h-[400px] text-gray-500">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {(searchTerm || filterCategoria || filterTransmision) ? 'No hay resultados' : 'Inventario vacío'}
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-md">
                    {(searchTerm || filterCategoria || filterTransmision)
                      ? 'No se encontraron vehículos que coincidan con los filtros seleccionados' 
                      : 'Aún no hay vehículos registrados en el inventario'}
                  </p>
                  {(searchTerm || filterCategoria || filterTransmision) && (
                    <button
                      onClick={clearAllFilters}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      🗑️ Limpiar filtros
                    </button>
                  )}
                </div>
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
                    {/* Badge del año */}
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md shadow-md">
                      <span className="text-xs font-medium text-gray-600">{vehicle.año}</span>
                    </div>
                  </div>
                  <div className="vehicle-info">
                    <h3>{vehicle.marca} {vehicle.modelo} {vehicle.año}</h3>
                    <p className="price">{formatPrice(vehicle.precio)}</p>
                    
                    <p className="description">{vehicle.descripcion || 'Sin descripción disponible'}</p>
                    <div className="flex gap-2 mt-4">
                      <button 
                        onClick={() => navigate(`/vehiculo/${vehicle.id}`)}
                        className="btn-secondary flex-1"
                      >
                        Ver Detalles
                      </button>
                      <button
                        onClick={() => handleDelete(vehicle.id, vehicle.marca, vehicle.modelo)}
                        className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 px-3 py-2 rounded-md transition duration-200"
                      >
                        🗑️
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
              {searchTerm && ` • Búsqueda: "${searchTerm}"`}
              {filterCategoria && ` • Categoría: ${filterCategoria}`}
              {filterTransmision && ` • Transmisión: ${filterTransmision}`}
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Inventario;