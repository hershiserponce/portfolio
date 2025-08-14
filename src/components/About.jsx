
export const About = () => {
  return (
    <section id="about" className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Sobre Mí</h2>
            <p className="lead text-muted">Conoce más sobre mi experiencia y habilidades</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-content">
              <h3 className="h4 fw-bold text-dark mb-4">¿Quién soy?</h3>
              <p className="text-muted mb-4">
                Soy un desarrollador apasionado con más de 3 años de experiencia en el desarrollo web. 
                Me especializo en crear aplicaciones modernas y escalables utilizando las últimas tecnologías.
              </p>
              <p className="text-muted mb-4">
                Mi enfoque se centra en escribir código limpio, mantenible y en crear experiencias de usuario 
                excepcionales. Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas.
              </p>
              
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span className="text-muted">Desarrollo Frontend</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span className="text-muted">Desarrollo Backend</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span className="text-muted">Diseño UX/UI</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span className="text-muted">Optimización SEO</span>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary">
                <i className="bi bi-download me-2"></i>
                Descargar CV
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skills-section">
              <h3 className="h4 fw-bold text-dark mb-4">Mis Habilidades</h3>
              
              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">React.js</span>
                  <span className="text-muted">90%</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-primary" style={{width: '90%'}}></div>
                </div>
              </div>

              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">Node.js</span>
                  <span className="text-muted">85%</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-primary" style={{width: '85%'}}></div>
                </div>
              </div>

              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">JavaScript</span>
                  <span className="text-muted">95%</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-primary" style={{width: '95%'}}></div>
                </div>
              </div>

              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">CSS/SCSS</span>
                  <span className="text-muted">88%</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-primary" style={{width: '88%'}}></div>
                </div>
              </div>

              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">Bootstrap</span>
                  <span className="text-muted">92%</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-primary" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
