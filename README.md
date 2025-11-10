# AutoVentas Premium

Una aplicación web moderna para la venta de vehículos, desarrollada con React y diseñada para ofrecer una experiencia de usuario excepcional.

## Descripción del Proyecto

AutoVentas Premium es una plataforma completa para la gestión y visualización de un inventario de vehículos. La aplicación permite a los usuarios navegar por diferentes vehículos disponibles, filtrar por criterios específicos, y gestionar el inventario de manera eficiente.

## Características Principales

- **Página de Inicio**: Presenta los vehículos destacados y servicios principales
- **Inventario Completo**: Vista de todos los vehículos con filtros avanzados de búsqueda por categoría y transmisión
- **Agregar Vehículos**: Formulario para añadir nuevos vehículos al inventario con descripción personalizada
- **Sobre Nosotros**: Información sobre la empresa y el equipo
- **Cómo Comprar**: Guía paso a paso del proceso de compra
- **Búsqueda y Filtros**: Sistema avanzado de búsqueda por marca, modelo, año, categoría y transmisión
- **Diseño Responsivo**: Funciona perfectamente en móviles, tablets y escritorio
- **Gestión de Inventario**: Eliminar vehículos con confirmación y estadísticas en tiempo real

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   └── Navigation.jsx   # Barra de navegación inferior
├── context/            # Gestión del estado global
│   └── VehicleContext.jsx
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página de inicio
│   ├── Inventario.jsx  # Lista completa de vehículos
│   ├── AgregarVehiculo.jsx # Formulario para agregar
│   ├── QuienesSomos.jsx    # Información de la empresa
│   └── ComoComprar.jsx     # Guía de compra
└── App.jsx             # Componente principal
```

## Características de Diseño

- **Colores Modernos**: Paleta de azules y grises profesionales
- **Tipografía Clara**: Fuentes legibles y jerarquía visual
- **Interfaz Intuitiva**: Navegación clara y fácil de usar
- **Animaciones Suaves**: Transiciones que mejoran la experiencia
- **Cards Atractivas**: Presentación elegante de cada vehículo
- **Layout Responsivo**: Diseño que se adapta perfectamente a cualquier dispositivo

## Gestión de Datos

- **Estado Temporal**: Los datos se mantienen mientras la aplicación está abierta
- **Vehículos Predefinidos**: Incluye 3 vehículos de ejemplo con categoría y transmisión
- **Agregar Vehículos**: Permite añadir nuevos vehículos con imágenes y descripciones personalizadas
- **Eliminar Vehículos**: Funcionalidad para remover vehículos del inventario con confirmación
- **Filtros Avanzados**: Búsqueda instantánea por texto, categoría y tipo de transmisión
- **Ordenamiento Dinámico**: Organizar por marca, modelo, precio o año en orden ascendente/descendente

## Funcionalidades Detalladas

### Sistema de Navegación
- Barra de navegación inferior fija
- 5 secciones principales accesibles con un clic
- Indicador visual de la página actual
- Diseño consistente en todas las páginas

### Gestión Avanzada de Vehículos
- **Visualización**: Cards elegantes con imagen, precio y detalles completos
- **Búsqueda por Texto**: Por marca, modelo o año en tiempo real
- **Filtros por Categoría**: Sedán, Hatchback, SUV, Crossover, Pickup, Coupé, Convertible, Station Wagon
- **Filtros por Transmisión**: Manual, Automática, CVT, Semi-automática
- **Ordenamiento Flexible**: Por marca, modelo, precio o año (ascendente/descendente)
- **Agregar Nuevos**: Formulario completo con validación y campos personalizables
- **Eliminar con Confirmación**: Proceso seguro antes de eliminar vehículos
- **Estadísticas en Tiempo Real**: Contador de vehículos totales y resultados filtrados

### Experiencia de Usuario Optimizada
- **Diseño Responsive**: Se adapta perfectamente a cualquier tamaño de pantalla
- **Mensajes de Estado**: Confirmaciones y alertas claras para cada acción
- **Fallback de Imágenes**: Imagen por defecto si falla la carga de vehículos
- **Validación de Formularios**: Campos obligatorios y formatos correctos
- **Interfaz Intuitiva**: Navegación clara y consistente en todas las secciones
- **Filtros Visuales**: Indicadores de filtros activos con opción de limpieza rápida
- **Mensajes Informativos**: Guías claras cuando no hay resultados o inventario vacío

## Casos de Uso

1. **Cliente Navegando**: Puede ver vehículos disponibles, aplicar filtros y conocer características detalladas
2. **Vendedor Agregando**: Puede añadir nuevos vehículos al inventario con información completa
3. **Administrador Gestionando**: Puede eliminar vehículos, organizar el inventario y ver estadísticas
4. **Usuario Móvil**: Puede usar todas las funciones desde dispositivos móviles con diseño adaptado

## Notas Importantes

- **Datos Temporales**: Los vehículos agregados se mantienen solo durante la sesión actual
- **Imágenes Externas**: Usar URLs directas a imágenes (no enlaces de Google Drive)
- **Navegadores Soportados**: Chrome, Firefox, Safari, Edge (versiones modernas)
- **Filtros Avanzados**: Sistema completo de filtrado por categoría y transmisión implementado
- **Descripciones Personalizadas**: Campo de texto libre para descripciones de vehículos

## Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Revisa el código en busca de errores

## Desarrollo

Este proyecto fue desarrollado como parte del curso "Desarrollo Frontend II" y demuestra:
- Manejo avanzado de estado con Context API
- Enrutamiento dinámico con React Router
- Diseño responsivo con CSS moderno y Tailwind CSS
- Gestión completa de formularios y validaciones
- Componentes reutilizables y arquitectura modular
- Sistema de filtrado avanzado en tiempo real
- Interfaz de usuario moderna y consistente


