import { useEffect, useState } from 'react';
import axios from 'axios';

const Ticketeria = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tickets/')
            .then(response => {
                console.log("Datos recibidos:", response.data); 
                setTickets(response.data);
            })
            .catch(error => {
                console.error("Error trayendo los tickets:", error);
            });
    }, []);

    return (
        <div className="ticketeria-container">
            <h1>Listado de Tickets</h1>
            
            {/* Si no hay tickets, mostramos un mensaje */}
            {tickets.length === 0 ? (
                <p>No hay tickets todavía...</p>
            ) : (
                tickets.map(ticket => (
                    <div key={ticket.id} className="ticket-card">
                        <h3>{ticket.titulo}</h3>
                        <p>{ticket.descripcion}</p>
                        <p>Estado: {ticket.estado}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Ticketeria;