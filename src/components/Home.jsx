function Home() {
  return (
    <main className="home">

      <h1>Dashboard Infraestructura</h1>

      <section className="estadisticas">

        <div className="card">
          <h3>Tickets Abiertos</h3>
          <p>15</p>
        </div>

        <div className="card">
          <h3>Riesgo Alto</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Tickets Cerrados</h3>
          <p>48</p>
        </div>

      </section>

      <section className="ranking">

        <h2>Ranking de Fallas</h2>

        <ul>
          <li>💡 Iluminación (12)</li>
          <li>❄️ Climatización (8)</li>
          <li>🛗 Escaleras Mecánicas (5)</li>
          <li>🚪 Puertas Automáticas (4)</li>
        </ul>

      </section>

      <section className="informacion">

        <h2>Estado General</h2>

        <p>
          Sistema de gestión de tickets para reportar y
          monitorear incidencias de infraestructura en tiendas.
        </p>

      </section>

    </main>
  );
}

export default Home;