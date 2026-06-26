import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Styles.scss';

const TicketeriaPage = () => {
    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState("");

    // 1. Cargar los tickets al entrar a la página
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tickets/')
            .then(response => {
                setTickets(response.data);
            })
            .catch(err => {
                console.error("Error al conectar con la API:", err);
                setError("No se pudieron cargar los tickets. Revisa tu servidor backend.");
            });
    }, []);

    // 2. FUNCIÓN PRO: Actualizar el estado en la base de datos
    const cambiarEstado = (idTicket, nuevoEstado) => {
        // Hacemos un PATCH enviando solo el campo que queremos modificar
        axios.patch(`http://127.0.0.1:8000/api/tickets/${idTicket}/`, { estado: nuevoEstado })
            .then(response => {
                // Si la base de datos dice "OK", actualizamos la pantalla al instante
                // sin necesidad de recargar la página web
                setTickets(tickets.map(ticket => 
                    ticket.id === idTicket ? { ...ticket, estado: nuevoEstado } : ticket
                ));
            })
            .catch(err => {
                console.error("Error al cambiar estado:", err);
                alert("Hubo un problema al actualizar el ticket. Verifica el backend.");
            });
    };

    // 3. Estilos automáticos de las etiquetas
    const getBadgeClass = (estado) => {
        if (!estado) return 'badge-abierto';
        const est = estado.toLowerCase().trim();
        if (est === 'en progreso' || est === 'en_progreso') return 'badge-progreso';
        if (est === 'cerrado') return 'badge-cerrado';
        return 'badge-abierto';
    };

    return (
        <div className="ticketeria-page">
            <div className="ticketeria-header">
                <h2>Panel de Control de Tickets</h2>
                <p>Gestión y monitoreo de incidencias en tiempo real</p>
            </div>

            {error && (
                <div className="error-box">
                    <strong>Error de comunicación:</strong> {error}
                </div>
            )}

            {!error && tickets.length === 0 && (
                <div className="empty-box">
                    <p>No hay incidencias registradas. La base de datos está vacía.</p>
                </div>
            )}

            <div className="tickets-grid-container">
                {tickets.map(ticket => (
                    <div key={ticket.id} className="ticket-custom-card">
                        
                        {/* BARRA SUPERIOR DE LA CAJA */}
                        <div className="card-top-bar">
                            <span className="ticket-id-tag">Ticket #{ticket.id}</span>
                            <span className={`status-badge-custom ${getBadgeClass(ticket.estado)}`}>
                                {ticket.estado || 'Abierto'}
                            </span>
                        </div>
                        
                        {/* CUERPO CENTRAL DE LA CAJA */}
                        <div className="card-body-content">
                            <h4 className="ticket-card-title">{ticket.titulo}</h4>
                            <p className="ticket-card-description">{ticket.descripcion}</p>
                        </div>
                        
                        {/* BARRA INFERIOR INTERACTIVA */}
                        <div className="card-footer-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <small>Actualizar estado:</small>
                            
                            {/* SELECTOR QUE DETONA EL CAMBIO */}
                            <select 
                                value={ticket.estado || 'Abierto'} 
                                onChange={(e) => cambiarEstado(ticket.id, e.target.value)}
                                style={{
                                    padding: '4px 8px',
                                    borderRadius: '5px',
                                    border: '1px solid #cbd5e1',
                                    cursor: 'pointer',
                                    backgroundColor: '#ffffff',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: '#475569'
                                }}
                            >
                                <option value="Abierto">Abierto</option>
                                <option value="En Progreso">En Progreso</option>
                                <option value="Cerrado">Cerrado</option>
                            </select>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketeriaPage;