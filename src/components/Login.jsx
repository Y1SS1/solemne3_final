import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [rol, setRol] = useState(null); // null (selección), 'usuario' o 'admin'

  const handleSubmitUsuario = (e) => {
    e.preventDefault();
    navigate("/TicketeriaPage"); // Redirige al panel de usuario
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();
    navigate("/AdminPage"); // Redirige al panel de administrador
  };

  // 1. Vista del formulario para USUARIO
  if (rol === 'usuario') {
    return (
      <main className="login-container">
        <div className="login-box">
          <h2>Acceso de Usuario</h2>
          <form onSubmit={handleSubmitUsuario}>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="ejemplo@cencosud.cl" required />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" required />
            </div>
            <button type="submit">Iniciar Sesión</button>
            <button 
              type="button" 
              onClick={() => setRol(null)} 
              style={{marginTop: '10px', background: '#e2e8f0', color: '#333'}}
            >
              Volver atrás
            </button>
          </form>
        </div>
      </main>
    );
  }

  // 2. Vista del formulario para ADMINISTRADOR
  if (rol === 'admin') {
    return (
      <main className="login-container">
        <div className="login-box">
          <h2 style={{ color: '#003b71' }}>Acceso Administrador</h2>
          <form onSubmit={handleSubmitAdmin}>
            <div className="form-group">
              <label>Correo de Administración</label>
              <input type="email" placeholder="admin@cencosud.cl" required />
            </div>
            <div className="form-group">
              <label>Contraseña de Seguridad</label>
              <input type="password" required />
            </div>
            {/* Botón con estilo ligeramente distinto para resaltar que es Admin */}
            <button type="submit" style={{ backgroundColor: '#003b71' }}>Ingresar al Panel</button>
            <button 
              type="button" 
              onClick={() => setRol(null)} 
              style={{marginTop: '10px', background: '#e2e8f0', color: '#333'}}
            >
              Volver atrás
            </button>
          </form>
        </div>
      </main>
    );
  }

  // 3. Vista principal: SELECCIÓN DE PERFIL
  return (
    <main className="login-container">
      <div className="login-box" style={{ textAlign: 'center' }}>
        <h2>Seleccione su Perfil</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '25px' }}>
          <button 
            onClick={() => setRol('admin')} 
            style={{ padding: '15px', cursor: 'pointer', backgroundColor: '#003b71', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}
          >
            Soy Administrador
          </button>
          <button 
            onClick={() => setRol('usuario')} 
            style={{ padding: '15px', cursor: 'pointer', backgroundColor: '#0056a3', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}
          >
            Soy Usuario
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;