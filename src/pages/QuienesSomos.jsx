import React from 'react';

/**
 * Página "Quiénes Somos" - Información corporativa de AutoVentas Premium
 * Presenta la historia, misión, visión, valores, equipo y certificaciones de la empresa
 */
const QuienesSomos = () => {
  return (
    <div className="page-container">
      {/* Encabezado principal de la página con título y subtítulo */}
      <section className="page-header">
        <h1>Quiénes Somos</h1>
        <p className="page-subtitle">Conoce nuestra historia y compromiso contigo</p>
      </section>

      {/* Sección de historia empresarial con texto e imagen */}
      <section className="content-section">
        <div className="content-grid">
          <div className="content-text">
            <h2>Nuestra Historia</h2>
            <p>
              Desde 1995, <strong>AutoVentas Premium</strong> ha sido líder en la venta de vehículos 
              en la V región. Comenzamos como una pequeña empresa familiar con el sueño de brindar 
              a nuestros clientes los mejores automóviles a precios justos.
            </p>
            <p>
              A lo largo de más de 25 años, hemos crecido hasta convertirnos en una de las 
              concesionarias más respetadas del sector, siempre manteniendo nuestros valores 
              de honestidad, calidad y servicio al cliente.
            </p>
          </div>
          {/* Imagen representativa de la concesionaria */}
          <div className="content-image">
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500" alt="Concesionaria" />
          </div>
        </div>
      </section>

      {/* Sección de misión y visión empresarial en formato de tarjetas */}
      <section className="mission-vision">
        <div className="mv-grid">
          <div className="mv-card">
            <h3>🎯 Nuestra Misión</h3>
            <p>
              Proporcionar vehículos de alta calidad y servicios excepcionales que superen 
              las expectativas de nuestros clientes, construyendo relaciones duraderas 
              basadas en la confianza y transparencia.
            </p>
          </div>
          <div className="mv-card">
            <h3>🔮 Nuestra Visión</h3>
            <p>
              Ser la concesionaria líder en innovación y servicio al cliente, reconocida 
              por nuestra integridad y compromiso con la satisfacción total de quienes 
              confían en nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de valores corporativos con iconos y descripciones */}
      <section className="values-section">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          {/* Valor 1: Confianza */}
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h4>Confianza</h4>
            <p>Construimos relaciones sólidas basadas en la honestidad y transparencia</p>
          </div>
          {/* Valor 2: Calidad */}
          <div className="value-item">
            <div className="value-icon">⭐</div>
            <h4>Calidad</h4>
            <p>Ofrecemos solo vehículos que cumplen con los más altos estándares</p>
          </div>
          {/* Valor 3: Excelencia */}
          <div className="value-item">
            <div className="value-icon">💎</div>
            <h4>Excelencia</h4>
            <p>Nos esforzamos por la perfección en cada aspecto de nuestro servicio</p>
          </div>
          {/* Valor 4: Innovación */}
          <div className="value-item">
            <div className="value-icon">🌟</div>
            <h4>Innovación</h4>
            <p>Adoptamos las últimas tecnologías para mejorar la experiencia del cliente</p>
          </div>
          {/* Valor 5: Compromiso */}
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h4>Compromiso</h4>
            <p>Nos comprometemos a brindar un servicio excepcional, entregando garantía de satisfacción en cada compra.</p>
          </div>
        </div>
      </section>

      {/* Sección del equipo directivo con fotos y roles */}
      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <div className="team-grid">
          {/* Miembro 1: Director General */}
          <div className="team-member">
            <div className="member-avatar">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200" alt="Carlos Rodríguez" />
            </div>
            <h4>Carlos Rodríguez</h4>
            <p className="member-role">Director General</p>
            <p className="member-description">
              25 años de experiencia en la industria automotriz
            </p>
          </div>
          {/* Miembro 2: Gerente de Ventas */}
          <div className="team-member">
            <div className="member-avatar">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200" alt="María González" />
            </div>
            <h4>María González</h4>
            <p className="member-role">Gerente de Ventas</p>
            <p className="member-description">
              Especialista en atención al cliente y financiamiento
            </p>
          </div>
          {/* Miembro 3: Jefe de Servicio Técnico */}
          <div className="team-member">
            <div className="member-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" alt="Roberto Silva" />
            </div>
            <h4>Roberto Silva</h4>
            <p className="member-role">Jefe de Servicio Técnico</p>
            <p className="member-description">
              Experto en mantenimiento y reparación automotriz
            </p>
          </div>
        </div>
      </section>

      {/* Sección de certificaciones y reconocimientos obtenidos */}
      <section className="certifications">
        <h2>Certificaciones y Reconocimientos</h2>
        <div className="cert-grid">
          {/* Reconocimiento: Mejor Concesionaria */}
          <div className="cert-item">
            <div className="cert-badge">🏆</div>
            <h4>Mejor Concesionaria 2023</h4>
            <p>Asociación Nacional de Distribuidores</p>
          </div>
          {/* Certificación: ISO 9001 */}
          <div className="cert-item">
            <div className="cert-badge">✅</div>
            <h4>ISO 9001:2015</h4>
            <p>Certificación de Calidad Internacional</p>
          </div>
          {/* Calificación: Satisfacción del Cliente */}
          <div className="cert-item">
            <div className="cert-badge">🌟</div>
            <h4>5 Estrellas</h4>
            <p>Calificación promedio de satisfacción al cliente</p>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Exporta el componente QuienesSomos como default
 * Página informativa sobre la empresa, su historia y equipo
 * Incluye secciones de misión, visión, valores y certificaciones
 */
export default QuienesSomos;
