import { useState } from "react";

export const Sidebar = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <>
      {/* Botón hamburguesa para móviles */}
      <div className={`menu-toggle ${isMenuActive ? 'is-active' : ''} d-md-none`} onClick={toggleMenu}>
        <div className="hamburger">
          <span></span>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isMenuActive ? 'is-active' : ''} bg-dark text-white`}>
        <div className="p-4">
          <h3 className="text-uppercase text-muted fw-bold fs-6 mb-4">
            <i className="bi bi-person-circle me-2"></i>
            Portafolio
          </h3>
          
          <nav className="menu">
            <a href="#home" className="menu-item d-block text-decoration-none text-white py-3 px-3 mb-2 rounded" onClick={closeMenu}>
              <i className="bi bi-house-door me-2"></i>
              Inicio
            </a>
            <a href="#about" className="menu-item d-block text-decoration-none text-white py-3 px-3 mb-2 rounded" onClick={closeMenu}>
              <i className="bi bi-person me-2"></i>
              Sobre Mí
            </a>
            <a href="#projects" className="menu-item d-block text-decoration-none text-white py-3 px-3 mb-2 rounded" onClick={closeMenu}>
              <i className="bi bi-folder me-2"></i>
              Proyectos
            </a>
            <a href="#contact" className="menu-item d-block text-decoration-none text-white py-3 px-3 mb-2 rounded" onClick={closeMenu}>
              <i className="bi bi-envelope me-2"></i>
              Contacto
            </a>
          </nav>

          {/* Información de contacto en el sidebar */}
          <div className="mt-5 pt-4 border-top border-secondary">
            <h6 className="text-uppercase text-muted fw-bold fs-7 mb-3">Contacto</h6>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-envelope text-primary me-2"></i>
              <small className="text-muted">tu@email.com</small>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-telephone text-primary me-2"></i>
              <small className="text-muted">+123 456 789</small>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt text-primary me-2"></i>
              <small className="text-muted">Tu Ciudad, País</small>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
