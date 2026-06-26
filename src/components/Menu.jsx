import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Menu() {
  return (
    <header className="menu-header-azul">
      <div className="menu-contenedor">
        
        {/* LOGO ORIGINAL */}
        <Link to="/" className="menu-logo">
          <img src={logo} alt="logo cencosud" className="logo-img" />
        </Link>

        {/* NAVEGACIÓN */}
        <nav className="menu-navegacion">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/LoginPage" className="nav-item">Login</Link>
          <Link to="/Contacto" className="nav-item">Contacto</Link>
        </nav>

        {/* PERFIL / ACCIÓN */}
        <div className="menu-acciones">
          <div className="avatar-usuario">AD</div>
          <Link to="/LoginPage" className="btn-salir">Salir</Link>
        </div>

      </div>
    </header>
  );
}

export default Menu;