import { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [tipoConsulta, setTipoConsulta] = useState("Diarios");
  const [ticketSeleccionado, setTicketSeleccionado] = useState(null);
  const [mensajeTecnico, setMensajeTecnico] = useState("");
  
  const [todosLosTickets, setTodosLosTickets] = useState([]);

  useEffect(() => {
    cargarTickets();
  }, []);

  const cargarTickets = () => {
    axios.get("http://127.0.0.1:8000/api/tickets/")
      .then((response) => {
        const ticketsAdaptados = response.data.map(t => {
          let prioridadMatch = t.descripcion.match(/\[Prioridad: (.*?)\]/);
          let prioridadExtraida = prioridadMatch ? prioridadMatch[1] : "Verde";
          
          let partesTitulo = t.titulo.split(" en ");
          let fallaExtraida = partesTitulo[0] || t.titulo;
          let zonaExtraida = partesTitulo[1] || "General";

          return {
            id: t.id,
            zona: zonaExtraida,
            falla: fallaExtraida,
            prioridad: prioridadExtraida,
            periodo: "Diarios", 
            descripcionOriginal: t.descripcion
          };
        });

        setTodosLosTickets(ticketsAdaptados);
      })
      .catch((err) => console.error("Error al cargar los tickets reales:", err));
  };

  const ticketsFiltrados = todosLosTickets.filter(
    (ticket) => ticket.periodo === tipoConsulta
  );

  const handleAbrirModal = (ticket) => {
    setTicketSeleccionado(ticket);
    setMensajeTecnico(""); 
  };

  const handleEnviarMensaje = (e) => {
    e.preventDefault(); 
    if (!mensajeTecnico.trim()) {
      alert("Por favor, escribe un mensaje antes de enviar.");
      return;
    }
    alert("¡Mensaje enviado al técnico con éxito!");
    setTicketSeleccionado(null);
    setMensajeTecnico("");
  };

  const handleTerminarTicket = (idTicket) => {
    const confirmar = window.confirm("¿Estás seguro de que deseas terminar y eliminar definitivamente este ticket?");
    if (confirmar) {
      axios.delete(`http://127.0.0.1:8000/api/tickets/${idTicket}/`)
        .then(() => {
          alert("Ticket terminado y eliminado de la base de datos.");
          setTodosLosTickets(todosLosTickets.filter(t => t.id !== idTicket));
        })
        .catch((err) => {
          console.error("Error al eliminar el ticket:", err);
          alert("Hubo un problema al eliminar el ticket.");
        });
    }
  };

  return (
    <main className="admin-dashboard">
      <h1>Panel de Administración</h1>
      
      {/* Sección de Filtros */}
      <section className="consultas-container">
        <h2>Reportes de Infraestructura</h2>
        <div className="btn-group">
          {["Diarios", "Semanales", "Mensuales", "Anuales"].map((tipo) => (
            <button 
              key={tipo} 
              onClick={() => setTipoConsulta(tipo)}
              className={tipoConsulta === tipo ? "active" : ""}
            >
              {tipo}
            </button>
          ))}
        </div>
      </section>

      {/* Sección de Tickets Filtrados */}
      <section className="tickets-gestion">
        <h2>Tickets Pendientes ({tipoConsulta})</h2>
        
        {ticketsFiltrados.length === 0 ? (
          <p style={{ textAlign: "center", padding: "20px", color: "#666" }}>
            No hay tickets pendientes para este período.
          </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Zona</th>
                <th>Falla</th>
                <th>Prioridad</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {ticketsFiltrados.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.zona}</td>
                  <td>{t.falla}</td>
                  <td>
                    <span className={`badge ${t.prioridad.toLowerCase()}`}>
                      {t.prioridad}
                    </span>
                  </td>
                  <td style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    {/* Botón Original: Resolver */}
                    <button 
                      className="btn-resolver"
                      onClick={() => handleAbrirModal(t)}
                      style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Resolver
                    </button>
                    {/* Botón Nuevo: Terminar (Eliminar) */}
                    <button 
                      onClick={() => handleTerminarTicket(t.id)}
                      style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Terminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* VENTANA MODAL */}
      {ticketSeleccionado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Resolver Ticket: {ticketSeleccionado.id}</h3>
            <p><strong>Ubicación:</strong> {ticketSeleccionado.zona} | <strong>Problema:</strong> {ticketSeleccionado.falla}</p>
            
            <form onSubmit={handleEnviarMensaje}>
              <label htmlFor="mensaje-input">Mensaje para el Técnico:</label>
              <textarea
                id="mensaje-input"
                rows="4"
                placeholder="Escribe las instrucciones detalladas del requerimiento aquí..."
                value={mensajeTecnico}
                onChange={(e) => setMensajeTecnico(e.target.value)}
                required
              />
              
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-cancelar" 
                  onClick={() => setTicketSeleccionado(null)}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-enviar">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default AdminDashboard;