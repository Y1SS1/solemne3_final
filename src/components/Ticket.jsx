function Ticket() {

  const ticket = {
    id: "TK001",
    zona: "Bodega",
    tipo: "Iluminación",
    prioridad: "Rojo",
    estado: "Abierto",
    descripcion: "Luminaria quemada",
    user: "Sampletext@mail.com"
  };

  return (
    <main className="detalle-ticket">

      <h1>Detalle Ticket</h1>

      <div className="ticket-card">

        <h2>{ticket.id}</h2>

        <p>
          <strong>Zona:</strong> {ticket.zona}
        </p>

        <p>
          <strong>Tipo:</strong> {ticket.tipo}
        </p>

        <p>
          <strong>Prioridad:</strong> {ticket.prioridad}
        </p>

        <p>
          <strong>Estado:</strong> {ticket.estado}
        </p>

        <p>
          <strong>Descripción:</strong> {ticket.descripcion}
        </p>

        <p>
          <strong>Usuario:</strong> {ticket.user}
        </p>


      </div>

    </main>
  );
}

export default Ticket;