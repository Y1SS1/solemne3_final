import { useState } from "react";

function Contacto() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Mensaje enviado correctamente");

    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <main className="contacto">

      <div className="contacto-box">

        <h1>Contacto Soporte</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <textarea
            placeholder="Mensaje"
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <button type="submit">
            Enviar
          </button>

        </form>

      </div>

    </main>
  );
}

export default Contacto;