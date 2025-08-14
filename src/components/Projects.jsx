
export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con React, Node.js y MongoDB. Incluye sistema de pagos, gestión de inventario y panel de administración.",
      image: "https://via.placeholder.com/400x250/007bff/ffffff?text=E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de drag & drop, notificaciones en tiempo real y colaboración en equipo.",
      image: "https://via.placeholder.com/400x250/28a745/ffffff?text=Task+App",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con visualizaciones interactivas, pronósticos detallados y integración con múltiples APIs de clima.",
      image: "https://via.placeholder.com/400x250/ffc107/000000?text=Weather+App",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "Bootstrap"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con diseño responsive, animaciones suaves y optimizado para SEO.",
      image: "https://via.placeholder.com/400x250/dc3545/ffffff?text=Portfolio",
      technologies: ["React", "Bootstrap", "Framer Motion", "Vite"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Panel de control para redes sociales con análisis de métricas, programación de publicaciones y gestión de múltiples cuentas.",
      image: "https://via.placeholder.com/400x250/6f42c1/ffffff?text=Social+Dashboard",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Aplicación de seguimiento de fitness con registro de ejercicios, progreso visual y recomendaciones personalizadas.",
      image: "https://via.placeholder.com/400x250/17a2b8/ffffff?text=Fitness+App",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Mis Proyectos</h2>
            <p className="lead text-muted">Algunos de los proyectos en los que he trabajado</p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6 col-xl-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="position-relative">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-primary">Nuevo</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-dark mb-3">{project.title}</h5>
                  <p className="card-text text-muted flex-grow-1">{project.description}</p>
                  
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-light text-dark border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="d-flex gap-2 mt-auto">
                    <a href={project.github} className="btn btn-outline-primary btn-sm flex-fill">
                      <i className="bi bi-github me-1"></i>
                      Código
                    </a>
                    <a href={project.live} className="btn btn-primary btn-sm flex-fill">
                      <i className="bi bi-eye me-1"></i>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="https://github.com/tuusuario" className="btn btn-outline-primary btn-lg">
              <i className="bi bi-github me-2"></i>
              Ver Más en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
