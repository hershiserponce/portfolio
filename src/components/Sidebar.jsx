import { useState } from "react";

export const Sidebar = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <>
          <div className={`menu-toggle ${isMenuActive ? 'is-active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger">
          <span></span>
        </div>
      </div>

      <aside className={`sidebar ${isMenuActive ? 'is-active' : ''}`}>
        <h3>Menu</h3>
        <nav className="menu">
          <a href="#home" className="menu-item is-active">
            Home
          </a>
          <a href="#about" className="menu-item">
            About
          </a>
          <a href="#projects" className="menu-item">
            Projects
          </a>
          <a href="#contact" className="menu-item">
            Contact
          </a>
        </nav>
      </aside>

    </>
  )
}
