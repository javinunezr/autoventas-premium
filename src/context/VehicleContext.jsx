import React, { createContext, useContext, useReducer } from 'react';

/**
 * Estado inicial con algunos vehículos de ejemplo
 * Estos son los vehículos que aparecerán cuando se cargue la aplicación por primera vez
 */
const initialState = {
  vehicles: [
    {
      id: 1, // Identificador único del vehículo
      marca: 'Suzuki',
      modelo: 'Swift',
      precio: 13990000,
      año: 2025,
      categoria: 'Hatchback',
      transmision: 'Manual',
      descripcion: 'Motor 1.2L, transmisión manual, aire acondicionado, ideal para ciudad',
      imagen: '/images/swift.jpg' // Ruta de la imagen del vehículo
    },
    {
      id: 2,
      marca: 'Hyundai',
      modelo: 'Tucson',
      precio: 29990000,
      año: 2025,
      categoria: 'SUV',
      transmision: 'Automática',
      descripcion: 'Motor 2.0L, tracción AWD, 7 airbags, pantalla táctil 8", cámara retroceso',
      imagen: '/images/tucson.jpg'
    },
    {
      id: 3,
      marca: 'Mazda',
      modelo: 'Mazda3',
      precio: 19990000,
      año: 2025,
      categoria: 'Sedán',
      transmision: 'Automática',
      descripcion: 'Motor Skyactiv-G 2.0L, transmisión automática, sistema i-Activsense',
      imagen: '/images/mazda3.png'
    }
  ],
  // Nueva propiedad para vehículos marcados como posible compra
  possiblePurchases: []
};

/**
 * @param {Object} state - Estado actual de los vehículos
 * @param {Object} action - Acción a realizar (tipo y datos)
 * @returns {Object} - Nuevo estado después de aplicar la acción
 */
const vehicleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VEHICLE':
      // Agregar un nuevo vehículo al final de la lista
      return {
        ...state, // Mantener todo el estado anterior
        vehicles: [
          ...state.vehicles, // Mantener todos los vehículos existentes
          {
            ...action.payload, // Agregar todos los datos del nuevo vehículo
            id: Date.now() // Generar un ID único basado en el tiempo actual (timestamp)
          }
        ]
      };
    
    case 'DELETE_VEHICLE':
      // Eliminar un vehículo específico por su ID
      return {
        ...state, // Mantener todo el estado anterior
        vehicles: state.vehicles.filter(vehicle => 
          vehicle.id !== action.payload // Filtrar: mantener solo los vehículos que NO tienen el ID a eliminar
        )
      };
    
    case 'MARK_AS_POSSIBLE_PURCHASE':
      // Marcar un vehículo como posible compra (moverlo del inventario general)
      const vehicleToMove = state.vehicles.find(vehicle => vehicle.id === action.payload);
      if (!vehicleToMove) return state; // Si no se encuentra el vehículo, no hacer nada
      
      return {
        ...state,
        vehicles: state.vehicles.filter(vehicle => vehicle.id !== action.payload), // Remover del inventario general
        possiblePurchases: [...state.possiblePurchases, vehicleToMove] // Agregar a posibles compras
      };
    
    case 'UNMARK_AS_POSSIBLE_PURCHASE':
      // Desmarcar un vehículo como posible compra (devolverlo al inventario general)
      const vehicleToReturn = state.possiblePurchases.find(vehicle => vehicle.id === action.payload);
      if (!vehicleToReturn) return state; // Si no se encuentra el vehículo, no hacer nada
      
      return {
        ...state,
        possiblePurchases: state.possiblePurchases.filter(vehicle => vehicle.id !== action.payload), // Remover de posibles compras
        vehicles: [...state.vehicles, vehicleToReturn] // Devolver al inventario general
      };
    
    default:
      // Si la acción no es reconocida, devolver el estado sin cambios
      return state;
  }
};

/**
 * Crear el contexto de React para los vehículos
 * El contexto permite compartir datos entre componentes sin pasar props manualmente
 */
const VehicleContext = createContext();

/**
 * Hook personalizado para usar el contexto de vehículos
 * @returns {Object} - Objeto con vehículos y funciones para manipularlos
 * @throws {Error} - Si se usa fuera del VehicleProvider
 */
export const useVehicles = () => {
  const context = useContext(VehicleContext);
  // Verificar que el hook se esté usando dentro del proveedor correcto
  if (!context) {
    throw new Error('useVehicles must be used within a VehicleProvider');
  }
  return context;
};

/**
 * Proveedor del contexto de vehículos
 * Este componente envuelve la aplicación y proporciona el estado y las funciones
 * a todos los componentes hijos que necesiten acceso a los datos de vehículos
 * @param {Object} props - Props del componente
 * @param {ReactNode} props.children - Componentes hijos que tendrán acceso al contexto
 */
export const VehicleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vehicleReducer, initialState);

  /**
   * Función para agregar un nuevo vehículo al inventario
   * @param {Object} vehicle - Datos del vehículo a agregar (marca, modelo, precio, etc.)
   */
  const addVehicle = (vehicle) => {
    dispatch({ type: 'ADD_VEHICLE', payload: vehicle });
  };

  /**
   * Función para eliminar un vehículo del inventario
   * @param {number} id - ID único del vehículo a eliminar
   */
  const deleteVehicle = (id) => {
    dispatch({ type: 'DELETE_VEHICLE', payload: id });
  };

  /**
   * Función para marcar un vehículo como posible compra
   * @param {number} id - ID único del vehículo a marcar
   */
  const markAsPossiblePurchase = (id) => {
    dispatch({ type: 'MARK_AS_POSSIBLE_PURCHASE', payload: id });
  };

  /**
   * Función para desmarcar un vehículo como posible compra
   * @param {number} id - ID único del vehículo a desmarcar
   */
  const unmarkAsPossiblePurchase = (id) => {
    dispatch({ type: 'UNMARK_AS_POSSIBLE_PURCHASE', payload: id });
  };

  // Objeto que contiene todos los valores que estarán disponibles en el contexto
  const value = {
    vehicles: state.vehicles,                    // Lista actual de vehículos en inventario general
    possiblePurchases: state.possiblePurchases, // Lista de vehículos marcados como posible compra
    addVehicle,                                 // Función para agregar vehículos
    deleteVehicle,                              // Función para eliminar vehículos
    markAsPossiblePurchase,                     // Función para marcar como posible compra
    unmarkAsPossiblePurchase,                   // Función para desmarcar como posible compra
  };

  // Proveedor que hace disponible el contexto a todos los componentes hijos
  return (
    <VehicleContext.Provider value={value}>
      {children}
    </VehicleContext.Provider>
  );
};

// Exportar el contexto por defecto para uso avanzado si es necesario
export default VehicleContext;
