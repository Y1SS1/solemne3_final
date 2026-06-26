import { useState } from "react";

function HomePage() {
  // Datos simulados del estado global de la infraestructura
  const metricas = {
    totales: 42,
    pendientes: 12,
    enProgreso: 8,
    resueltos: 22
  };

  const alertasRecientes = [
    { id: "TK-09", zona: "Bodega Central", problema: "Fuga de agua en matriz", tiempo: "Hace 10 min", prioridad: "alta" },
    { id: "TK-12", zona: "Sala de Ventas", problema: "Caída de sistema climatización", tiempo: "Hace 25 min", prioridad: "alta" },
    { id: "TK-15", zona: "Estacionamiento", problema: "Luminaria Poniente apagada", tiempo: "Hace 1 hora", prioridad: "baja" },
  ];

  return (
    <div className="dashboard-home">
      {/* Título de Bienvenida */}
      <div className="dashboard-welcome">
        <h1>Inicio de Plataforma</h1>
        <p>Resumen operativo y estado actual de los tickets de infraestructura.</p>
      </div>

      {/* 1. TARJETAS DE ESTADÍSTICAS (KPIs) */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">📋</div>
          <div className="stat-info">
            <h3>Tickets Totales</h3>
            <p className="stat-number">{metricas.totales}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">⚠️</div>
          <div className="stat-info">
            <h3>Pendientes</h3>
            <p className="stat-number">{metricas.pendientes}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">⚡</div>
          <div className="stat-info">
            <h3>En Progreso</h3>
            <p className="stat-number">{metricas.enProgreso}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✅</div>
          <div className="stat-info">
            <h3>Resueltos</h3>
            <p className="stat-number">{metricas.resueltos}</p>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE GRÁFICOS Y DETALLES */}
      <section className="dashboard-analytics">
        
        {/* Contenedor del Gráfico de Rendimiento */}
        <div className="analytics-chart-container">
          <h2>Rendimiento de Resoluciones</h2>
          <p className="chart-subtitle">Tickets cerrados por período (Diario / Semanal / Mensual)</p>
          
          {/* Gráfico Simulado de Barras Estilizado */}
          <div className="visual-chart">
            <div className="chart-bar-wrapper">
              <div className="chart-bar" style={{ height: "40%" }}><span>40%</span></div>
              <span className="chart-label">Diario</span>
            </div>
            <div className="chart-bar-wrapper">
              <div className="chart-bar highlight" style={{ height: "75%" }}><span>75%</span></div>
              <span className="chart-label">Semanal</span>
            </div>
            <div className="chart-bar-wrapper">
              <div className="chart-bar" style={{ height: "90%" }}><span>90%</span></div>
              <span className="chart-label">Mensual</span>
            </div>
            <div className="chart-bar-wrapper">
              <div className="chart-bar" style={{ height: "60%" }}><span>60%</span></div>
              <span className="chart-label">Anual</span>
            </div>
          </div>
        </div>

        {/* 3. COLUMNA DE ALERTAS O NOTIFICACIONES EN TIEMPO REAL */}
        <div className="analytics-alerts">
          <h2>Alertas Recientes</h2>
          <div className="alerts-list">
            {alertasRecientes.map((alerta) => (
              <div key={alerta.id} className={`alert-item ${alerta.prioridad}`}>
                <div className="alert-header">
                  <span className="alert-id">{alerta.id}</span>
                  <span className="alert-time">{alerta.time || alerta.tiempo}</span>
                </div>
                <p className="alert-problem"><strong>{alerta.zona}:</strong> {alerta.problema}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

export default HomePage;