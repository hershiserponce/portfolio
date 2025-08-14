
export const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Contacto</h2>
            <p className="lead text-muted">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-4">
              {/* Información de contacto */}
              <div className="col-md-4">
                <div className="contact-info">
                  <h4 className="h5 fw-bold text-dark mb-4">Información de Contacto</h4>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-envelope text-white"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Email</small>
                      <span className="fw-semibold">tu@email.com</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-telephone text-white"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Teléfono</small>
                      <span className="fw-semibold">+123 456 789</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-geo-alt text-white"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Ubicación</small>
                      <span className="fw-semibold">Tu Ciudad, País</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '40px', height: '40px'}}>
                      <i className="bi bi-clock text-white"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Horario</small>
                      <span className="fw-semibold">Lun - Vie, 9AM - 6PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de contacto */}
              <div className="col-md-8">
                <div className="contact-form">
                  <h4 className="h5 fw-bold text-dark mb-4">Envíame un Mensaje</h4>
                  
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Tu nombre"
                          />
                          <label htmlFor="name">Nombre</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="tu@email.com"
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            placeholder="Asunto"
                          />
                          <label htmlFor="subject">Asunto</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea 
                            className="form-control" 
                            id="message" 
                            placeholder="Tu mensaje"
                            style={{height: '120px'}}
                          ></textarea>
                          <label htmlFor="message">Mensaje</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg px-4">
                          <i className="bi bi-send me-2"></i>
                          Enviar Mensaje
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center">
            <h4 className="h5 fw-bold text-dark mb-4">Sígueme en Redes Sociales</h4>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="btn btn-outline-primary rounded-circle" style={{width: '50px', height: '50px'}}>
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle" style={{width: '50px', height: '50px'}}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle" style={{width: '50px', height: '50px'}}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle" style={{width: '50px', height: '50px'}}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
