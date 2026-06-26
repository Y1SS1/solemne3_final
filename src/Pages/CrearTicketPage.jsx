import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearTicket() {
  const [zona, setZona] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("Verde");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!zona || !tipo || !descripcion) {
      setError("Por favor, seleccione una Zona, el Tipo de falla y agregue una descripción.");
      return;
    }

    setError("");
    setCargando(true);

    const nuevoTicket = {
      titulo: `${tipo} en ${zona}`,
      descripcion: `[Prioridad: ${prioridad}] ${descripcion}`
    };

    axios.post("http://127.0.0.1:8000/api/tickets/", nuevoTicket)
      .then((response) => {
        console.log("Ticket guardado con éxito:", response.data);
        alert("¡Ticket creado correctamente en el sistema!");
        
        // Limpiamos los campos
        setZona("");
        setTipo("");
        setDescripcion("");
        setPrioridad("Verde");
        setCargando(false);

        navigate("/tickets"); 
      })
      .catch((err) => {
        console.error("Error al conectar con el servidor:", err);
        setError("Error crítico: No se pudo conectar con la API de Django. Verifica el puerto 8000.");
        setCargando(false);
      });
  };

  return (
    <main className="crear-ticket">
      <div className="formulario-ticket">
        
        <h1>Crear Ticket de Incidencia</h1>
        <p className="subtitulo-cencosud">Formulario de Soporte Operativo - Cencosud</p>
        
        {error && (
          <div className="error-alert-box" style={{ color: "white", background: "#dc3545", padding: "12px", borderRadius: "6px", marginBottom: "20px", fontWeight: "600" }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Zona Afectada</label>
            <select value={zona} onChange={(e) => setZona(e.target.value)}>
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
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="">Seleccione una falla</option>
              <option>Iluminación</option>
              <option>Climatización</option>
              <option>Electricidad</option>
              <option>Puertas</option>
              <option>Escalera Mecánica</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descripción del Problema</label>
            <textarea
              rows="4"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Escribe en detalle qué ocurre..."
            />
          </div>

          <div className="form-group">
            <label>Evidencia Adjunta <span className="especificaciones-texto">(Fotografía max 10MP, Video max 3 min o Audio)</span></label>
            <input type="file" className="file-input-custom" />
          </div>

          <div className="form-group">
            <label>Prioridad de Atención</label>
            <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
              <option>Verde</option>
              <option>Amarillo</option>
              <option>Rojo</option>
            </select>
          </div>

          <button type="submit" className="btn-submit-cencosud" disabled={cargando} style={{ cursor: "pointer" }}>
            {cargando ? "Registrando en Base de Datos..." : "Crear Ticket e Informar"}
          </button>

        </form>
      </div>
    </main>
  );
}

export default CrearTicket;