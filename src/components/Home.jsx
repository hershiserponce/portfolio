
export const Home = () => {
  return (
    <section id="home" className="home min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-4 fw-bold text-dark mb-4">
                ¡Hola! Soy <span className="text-primary">Tu Nombre</span>
              </h1>
              <h2 className="h3 text-muted mb-4">
                Desarrollador Full Stack & Diseñador UX/UI
              </h2>
              <p className="lead text-muted mb-5">
                Apasionado por crear experiencias digitales únicas y funcionales. 
                Especializado en React, Node.js y diseño centrado en el usuario.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary btn-lg px-4 py-3">
                  <i className="bi bi-eye me-2"></i>
                  Ver Proyectos
                </a>
                <a href="#contact" className="btn btn-outline-primary btn-lg px-4 py-3">
                  <i className="bi bi-envelope me-2"></i>
                  Contactar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center">
              <div className="position-relative">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" 
                     style={{width: '300px', height: '300px'}}>
                  <i className="bi bi-person-circle text-white" style={{fontSize: '150px'}}></i>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" 
                       style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-check-circle text-white fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Estadísticas */}
        <div className="row mt-5 pt-5">
          <div className="col-md-3 col-6 mb-4">
            <div className="text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">50+</h3>
              <p className="text-muted">Proyectos Completados</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">3+</h3>
              <p className="text-muted">Años de Experiencia</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">30+</h3>
              <p className="text-muted">Clientes Satisfechos</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="text-center">
              <h3 className="display-6 fw-bold text-primary mb-2">15+</h3>
              <p className="text-muted">Tecnologías Dominadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
