import { useState } from "react";

function CrearTicket() {

  const [zona, setZona] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("Verde");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Ticket creado correctamente");

    console.log({
      zona,
      tipo,
      descripcion,
      prioridad
    });

    setZona("");
    setTipo("");
    setDescripcion("");
    setPrioridad("Verde");
  };

  return (
    <main className="crear-ticket">

      <div className="formulario-ticket">

        <h1>Crear Ticket</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Zona</label>

            <select
              value={zona}
              onChange={(e) => setZona(e.target.value)}
            >
              <option value="">Seleccione una zona</option>
              <option>Sala de Ventas</option>
              <option>Bodega</option>
              <option>Acceso Principal</option>
              <option>Patio de Carga</option>
              <option>Escalera Mecánica</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tipo de Falla</label>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="">Seleccione una falla</option>
              <option>Iluminación</option>
              <option>Climatización</option>
              <option>Electricidad</option>
              <option>Puertas</option>
              <option>Escalera Mecánica</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descripción</label>

            <textarea
              rows="4"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Fotografía(max 10MP ), Video(max 3 minutos) o Audio</label>

            <input type="file" />
          </div>

          <div className="form-group">
            <label>Prioridad</label>

            <select
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
            >
              <option>Verde</option>
              <option>Amarillo</option>
              <option>Rojo</option>
            </select>
          </div>

          <button type="submit">
            Crear Ticket
          </button>

        </form>

      </div>

    </main>
  );
}

export default CrearTicket;