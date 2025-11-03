# 🚗 AutoVentas Premium

Una aplicación web moderna para la venta de vehículos, desarrollada con React y diseñada para ofrecer una experiencia de usuario excepcional.

## 📋 Descripción del Proyecto

AutoVentas Premium es una plataforma completa para la gestión y visualización de un inventario de vehículos. La aplicación permite a los usuarios navegar por diferentes vehículos disponibles, filtrar por criterios específicos, y gestionar el inventario de manera eficiente.

## ✨ Características Principales

- **🏠 Página de Inicio**: Presenta los vehículos destacados y servicios principales
- **📊 Inventario Completo**: Vista de todos los vehículos con filtros avanzados
- **➕ Agregar Vehículos**: Formulario para añadir nuevos vehículos al inventario
- **👥 Sobre Nosotros**: Información sobre la empresa y el equipo
- **🛒 Cómo Comprar**: Guía paso a paso del proceso de compra
- **🔍 Búsqueda y Filtros**: Sistema de búsqueda por marca, modelo y año
- **📱 Diseño Responsivo**: Funciona perfectamente en móviles, tablets y escritorio

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca principal para la interfaz de usuario
- **Vite**: Herramienta de desarrollo rápida y moderna
- **React Router**: Navegación entre páginas
- **Context API**: Gestión del estado global
- **Tailwind CSS**: Framework de CSS para estilos modernos
- **CSS Variables**: Sistema de colores y estilos personalizados

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación y Ejecución

1. **Clona o descarga el proyecto**
   ```bash
   cd semana1_df2
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Ve a `http://localhost:5173`
   - ¡La aplicación estará lista para usar!

## 📁 Estructura del Proyecto

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

## 🎨 Características de Diseño

- **Colores Modernos**: Paleta de azules y grises profesionales
- **Tipografía Clara**: Fuentes legibles y jerarquía visual
- **Iconos Intuitivos**: Emojis y símbolos fáciles de entender
- **Animaciones Suaves**: Transiciones que mejoran la experiencia
- **Cards Atractivas**: Presentación elegante de cada vehículo

## 💾 Gestión de Datos

- **Estado Temporal**: Los datos se mantienen mientras la aplicación está abierta
- **Vehículos Predefinidos**: Incluye 3 vehículos de ejemplo
- **Agregar Vehículos**: Permite añadir nuevos vehículos con imágenes
- **Eliminar Vehículos**: Funcionalidad para remover vehículos del inventario
- **Filtros en Tiempo Real**: Búsqueda instantánea sin recargar la página

## 🔧 Funcionalidades Detalladas

### Navegación
- Barra de navegación inferior fija
- 5 secciones principales accesibles con un clic
- Indicador visual de la página actual

### Gestión de Vehículos
- **Visualización**: Cards elegantes con imagen, precio y detalles
- **Búsqueda**: Por marca, modelo o año
- **Ordenamiento**: Por marca, modelo, precio o año (ascendente/descendente)
- **Agregar**: Formulario completo con validación
- **Eliminar**: Confirmación antes de eliminar

### Experiencia de Usuario
- **Responsive**: Se adapta a cualquier tamaño de pantalla
- **Mensajes de Estado**: Confirmaciones y alertas claras
- **Fallback de Imágenes**: Imagen por defecto si falla la carga
- **Validación de Formularios**: Campos obligatorios y formatos correctos

## 🎯 Casos de Uso

1. **Cliente Navegando**: Puede ver vehículos disponibles y sus características
2. **Vendedor Agregando**: Puede añadir nuevos vehículos al inventario
3. **Administrador Gestionando**: Puede eliminar vehículos y organizar el inventario
4. **Usuario Móvil**: Puede usar todas las funciones desde su teléfono

## 📝 Notas Importantes

- **Datos Temporales**: Los vehículos agregados se mantienen solo durante la sesión actual
- **Imágenes Externas**: Usar URLs directas a imágenes (no enlaces de Google Drive)
- **Navegadores Soportados**: Chrome, Firefox, Safari, Edge (versiones modernas)

## 🚀 Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Revisa el código en busca de errores

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como parte del curso "Desarrollo Frontend II" y demuestra:
- Manejo de estado con Context API
- Enrutamiento con React Router
- Diseño responsivo con CSS moderno
- Gestión de formularios y validaciones
- Componentes reutilizables y modulares

---

**¡Gracias por explorar AutoVentas Premium!** 🚗✨
