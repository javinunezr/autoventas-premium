import React from 'react';

/**
 * Página "Cómo Comprar" - Guía completa del proceso de compra
 * Detalla los 6 pasos del proceso, opciones de pago, documentos necesarios
 * y garantías incluidas para ayudar al cliente en su decisión de compra
 */
const ComoComprar = () => {
  return (
    <div className="page-container">
      {/* Encabezado principal con título y descripción */}
      <section className="page-header">
        <h1>Cómo Comprar</h1>
        <p className="page-subtitle">Tu guía completa para adquirir el vehículo perfecto</p>
      </section>

      {/* Sección del proceso paso a paso de compra */}
      <section className="process-section">
        <h2>Proceso de Compra en 6 Pasos</h2>
        <div className="steps-container">
          {/* Paso 1: Exploración del catálogo */}
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Explora Nuestro Catálogo</h3>
              <p>
                Navega por nuestra amplia selección de vehículos nuevos y seminuevos. 
                Utiliza nuestros filtros para encontrar el auto que se adapte a tus necesidades y presupuesto.
              </p>
              <ul>
                <li>Filtra por marca, modelo y precio</li>
                <li>Ve fotos detalladas y especificaciones</li>
                <li>Compara diferentes opciones</li>
              </ul>
            </div>
          </div>

          {/* Paso 2: Programación de cita */}
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Programa una Cita</h3>
              <p>
                Una vez que encuentres vehículos de tu interés, programa una cita 
                para verlos en persona y hacer una prueba de manejo.
              </p>
              <ul>
                <li>Llama al (+56) 9 1234 5678</li>
                <li>Agenda en línea 24/7</li>
                <li>Visita sin cita previa</li>
              </ul>
            </div>
          </div>

          {/* Paso 3: Prueba de manejo */}
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Prueba de Manejo</h3>
              <p>
                Experimenta cómo se siente el vehículo al conducirlo. Nuestros 
                asesores te acompañarán y resolverán todas tus dudas.
              </p>
              <ul>
                <li>Trae tu licencia de conducir vigente</li>
                <li>Prueba diferentes modelos</li>
                <li>Evalúa comodidad y rendimiento</li>
              </ul>
            </div>
          </div>

          {/* Paso 4: Evaluación de vehículo actual */}
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Evaluación de Tu Auto</h3>
              <p>
                Si tienes un vehículo para intercambiar, nuestros expertos 
                lo evaluarán para darte el mejor precio de intercambio.
              </p>
              <ul>
                <li>Evaluación gratuita y sin compromiso</li>
                <li>Precio justo basado en el mercado</li>
                <li>Proceso rápido y transparente</li>
              </ul>
            </div>
          </div>

          {/* Paso 5: Opciones de financiamiento */}
          <div className="step-item">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Opciones de Financiamiento</h3>
              <p>
                Explora nuestras opciones de financiamiento flexibles. 
                Trabajamos con múltiples instituciones financieras para conseguirte las mejores tasas.
              </p>
              <ul>
                <li>Financiamiento hasta 72 meses</li>
                <li>Tasas de interés competitivas</li>
                <li>Aprobación rápida</li>
              </ul>
            </div>
          </div>

          {/* Paso 6: Entrega del vehículo */}
          <div className="step-item">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>Entrega de Tu Vehículo</h3>
              <p>
                Una vez completado el papeleo, prepararemos tu vehículo 
                y coordinaremos la entrega en la fecha que más te convenga.
              </p>
              <ul>
                <li>Preparación completa del vehículo</li>
                <li>Explicación de todas las características</li>
                <li>Entrega de documentos y llaves</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de opciones de pago disponibles */}
      <section className="payment-section">
        <h2>Opciones de Pago</h2>
        <div className="payment-grid">
          {/* Opción 1: Pago de contado */}
          <div className="payment-option">
            <div className="payment-icon">💵</div>
            <h3>Pago de Contado</h3>
            <p>Obtén descuentos especiales al pagar el total del vehículo al momento de la compra.</p>
            <ul>
              <li>Descuento del 3% al 5%</li>
              <li>Sin intereses ni comisiones</li>
              <li>Entrega inmediata</li>
            </ul>
          </div>

          {/* Opción 2: Financiamiento bancario */}
          <div className="payment-option">
            <div className="payment-icon">🏦</div>
            <h3>Financiamiento Bancario</h3>
            <p>Trabajamos con los principales bancos para ofrecerte las mejores condiciones.</p>
            <ul>
              <li>Plazos hasta 72 meses</li>
              <li>Pie desde 20%</li>
            </ul>
          </div>

          {/* Opción 3: Plan de auto en parte de pago */}
          <div className="payment-option">
            <div className="payment-icon">🔄</div>
            <h3>Plan de Auto en Parte de Pago</h3>
            <p>Da tu vehículo actual en parte de pago y paga solo la diferencia.</p>
            <ul>
              <li>Evaluación gratuita</li>
              <li>Precio justo de mercado</li>
              <li>Facilita tu compra</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección de documentos requeridos */}
      <section className="documents-section">
        <h2>Documentos Necesarios</h2>
        <div className="docs-grid">
          {/* Documentos para personas físicas */}
          <div className="docs-column">
            <h3>📋 Para Personas Físicas</h3>
            <ul className="docs-list">
              <li>✅ Identificación oficial (Carnet de identidad)</li>
              <li>✅ Comprobante de ingresos (últimos 3 meses)</li>
              <li>✅ Comprobante de domicilio (no mayor a 3 meses)</li>
              <li>✅ Estado de cuenta bancario</li>
            </ul>
          </div>
          {/* Documentos para empresas */}
          <div className="docs-column">
            <h3>🏢 Para Empresas</h3>
            <ul className="docs-list">
              <li>✅ Iniciación de actividades</li>
              <li>✅ Poder notarial del representante legal</li>
              <li>✅ Estados financieros (últimos 2 años)</li>
              <li>✅ Identificación del representante legal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección de garantías y servicios incluidos */}
      <section className="warranty-section">
        <h2>Garantías y Servicios Incluidos</h2>
        <div className="warranty-grid">
          {/* Garantía de fábrica */}
          <div className="warranty-item">
            <div className="warranty-icon">🛡️</div>
            <h4>Garantía de Fábrica</h4>
            <p>Todos nuestros vehículos nuevos incluyen garantía completa del fabricante</p>
          </div>
          {/* Servicio de mantenimiento */}
          <div className="warranty-item">
            <div className="warranty-icon">🔧</div>
            <h4>Servicio de Mantenimiento</h4>
            <p>3 servicios de mantenimiento gratuitos en nuestro taller especializado para vehículos nuevos</p>
          </div>
          {/* Vehículo de cortesía */}
          <div className="warranty-item">
            <div className="warranty-icon">🚗</div>
            <h4>Vehículo de Cortesía</h4>
            <p>Auto de cortesía disponible durante reparaciones bajo garantía</p>
          </div>
          {/* Asistencia 24/7 */}
          <div className="warranty-item">
            <div className="warranty-icon">📞</div>
            <h4>Asistencia 24/7</h4>
            <p>Servicio de asistencia vial las 24 horas del día</p>
          </div>
        </div>
      </section>

      {/* Sección de llamada a la acción */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para comenzar?</h2>
          <p>Nuestro equipo de asesores está listo para ayudarte en cada paso del proceso</p>
          {/* Botones de acción principal */}
          <div className="cta-buttons">
            <button className="cta-button">Agendar Cita</button>
            <button className="btn-outline">Ver Catálogo</button>
          </div>
          {/* Información de contacto */}
          <div className="contact-info">
            <p>📞 (+56) 9 1234 5678 | 📧 ventas@autoventaspremium.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Exporta el componente ComoComprar como default
 * Página informativa sobre el proceso de compra de vehículos
 * Incluye pasos, opciones de pago, documentos y garantías
 */
export default ComoComprar;
