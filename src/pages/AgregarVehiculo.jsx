import React, { useState } from 'react';
import { useVehicles } from '../context/VehicleContext';

/**
 * Componente para agregar nuevos vehículos al inventario
 * Mantiene el vehículo agregado sólo mientras la página esté activa, si se cierra o recarga, se pierde
 * Proporciona un formulario completo con validación para crear vehículos
 */
const AgregarVehiculo = () => {
  // Obtener la función addVehicle
  const { addVehicle } = useVehicles();
  
  // Estado local para manejar los datos del formulario
  const [formData, setFormData] = useState({
    marca: '',        
    modelo: '',       
    precio: '',       
    año: '',          
    categoria: '',    // Nueva: categoría del vehículo (sedán, SUV, etc.)
    transmision: '',  // Nueva: tipo de transmisión
    descripcion: '',  // Descripción libre del vehículo
    imagen: ''        // URL de la imagen del vehículo. Si es copiada desde Google Images, usar la opción "Copiar dirección de imagen"
  });

  // Estado para controlar cuándo mostrar el mensaje de éxito
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Función para manejar cambios en los campos del formulario
   * Se ejecuta cada vez que el usuario escribe en un input
   * @param {Event} e - Evento de cambio del input
   */
  const handleChange = (e) => {
    const { name, value } = e.target; // Extraer el nombre y valor del campo
    setFormData(prev => ({
      ...prev,        // Mantener todos los valores anteriores
      [name]: value   // Actualizar solo el campo que cambió
    }));
  };

  /**
   * Función para manejar el envío del formulario
   * Valida los datos, crea el vehículo y resetea el formulario
   * @param {Event} e - Evento de submit del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir que se recargue la página
    
    // Validación básica: verificar que los campos obligatorios estén completos
    if (!formData.marca || !formData.modelo || !formData.precio || !formData.año || !formData.categoria || !formData.transmision || !formData.descripcion) {
      alert('Por favor, complete todos los campos obligatorios');
      return;
    }

    // Crear el objeto del nuevo vehículo con los datos del formulario
    const newVehicle = {
      ...formData,                                           // Incluir todos los datos del formulario
      precio: parseInt(formData.precio),                     // Convertir precio a número
      año: parseInt(formData.año),                          // Convertir año a número
      imagen: formData.imagen || '/images/default-car.svg'  // Usar imagen por defecto si no se proporciona
    };

    // Agregar el vehículo
    addVehicle(newVehicle);

    // Limpiar todos los campos del formulario después de agregar
    setFormData({
      marca: '',
      modelo: '',
      precio: '',
      año: '',
      categoria: '',
      transmision: '',
      descripcion: '',
      imagen: ''
    });

    // Mostrar mensaje de éxito por 3 segundos
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="home-container">
      {/* Hero Section - Estilo consistente con Home */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Agregar Vehículo</h1>
          <p className="hero-subtitle">Expande nuestro inventario con vehículos excepcionales</p>
          <p className="hero-description">
            Complete el formulario para agregar un nuevo vehículo a nuestra colección premium
          </p>
        </div>
      </section>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">

        {/* Mensaje de éxito */}
        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
            <div className="flex items-center">
              <span className="text-lg mr-3">✅</span>
              <span className="font-medium">¡Vehículo agregado exitosamente!</span>
            </div>
          </div>
        )}

        {/* Formulario */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Información del Vehículo</h2>
            <p className="text-sm text-gray-600">Complete todos los campos para agregar el vehículo al inventario</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Marca y Modelo en la misma fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Marca */}
              <div>
                <label htmlFor="marca" className="block text-sm font-medium text-gray-700 mb-3">
                  🏢 Marca *
                </label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  value={formData.marca}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Toyota, Honda, Ford..."
                  required
                />
              </div>

              {/* Modelo */}
              <div>
                <label htmlFor="modelo" className="block text-sm font-medium text-gray-700 mb-3">
                  🚗 Modelo *
                </label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Corolla, Civic, Focus..."
                  required
                />
              </div>
            </div>

            {/* Precio y Año en la misma fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-3">
                  💰 Precio (CLP) *
                </label>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  value={formData.precio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="15000000"
                  min="0"
                  required
                />
              </div>

              <div>
                <label htmlFor="año" className="block text-sm font-medium text-gray-700 mb-3">
                  📅 Año *
                </label>
                <input
                  type="number"
                  id="año"
                  name="año"
                  value={formData.año}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="2025"
                  min="1980"
                  max="2030"
                  required
                />
              </div>
            </div>

            {/* Categoría y Transmisión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Categoría del vehículo */}
              <div className="max-w-sm">
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-3">
                  🏷️ Categoría *
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
                  required
                >
                  <option value="">Seleccione una categoría</option>
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

              {/* Tipo de transmisión */}
              <div className="max-w-sm">
                <label htmlFor="transmision" className="block text-sm font-medium text-gray-700 mb-3">
                  ⚙️ Transmisión *
                </label>
                <select
                  id="transmision"
                  name="transmision"
                  value={formData.transmision || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
                  required
                >
                  <option value="">Seleccione transmisión</option>
                  <option value="Manual">Manual</option>
                  <option value="Automática">Automática</option>
                  <option value="CVT">CVT</option>
                  <option value="Semi-automática">Semi-automática</option>
                </select>
              </div>
            </div>

            {/* Descripción del vehículo */}
            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-3">
                📝 Descripción del Vehículo *
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-vertical"
                placeholder="Describa las características principales del vehículo: motor, equipamiento, estado, etc..."
                required
              />
              <p className="mt-2 text-sm text-gray-500">
                Ingrese una descripción detallada del vehículo, incluyendo características técnicas, equipamiento y estado general.
              </p>
            </div>

            {/* URL de Imagen */}
            <div>
              <label htmlFor="imagen" className="block text-sm font-medium text-gray-700 mb-3">
                🖼️ URL de Imagen
              </label>
              <input
                type="url"
                id="imagen"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="https://ejemplo.com/imagen.jpg o /images/mi-auto.jpg"
              />
              <p className="mt-2 text-sm text-gray-500">
                Opcional: URL de la imagen del vehículo. Si se deja vacío, se usará una imagen por defecto.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
              >
                ➕ Agregar Vehículo
              </button>
              
              <button
                type="button"
                onClick={() => setFormData({
                  marca: '',
                  modelo: '',
                  precio: '',
                  año: '',
                  categoria: '',
                  transmision: '',
                  descripcion: '',
                  imagen: ''
                })}
                className="sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                🗑️ Limpiar
              </button>
            </div>
          </form>
        </div>

        {/* Información adicional */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
          <div className="flex items-start">
            <span className="text-blue-500 text-xl mr-3 mt-0.5">
                💡</span>
            <div>
              <h3 className="text-sm font-semibold text-blue-800 mb-2">Información importante</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Los campos marcados con (*) son obligatorios</li>
                <li>• Una vez agregado, el vehículo aparecerá inmediatamente en el inventario</li>
                <li>• Los datos se mantienen activos hasta que se recargue la página</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarVehiculo;
