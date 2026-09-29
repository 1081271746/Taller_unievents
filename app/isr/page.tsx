const events = [
  {
    title: "Hackathon Universitario",
    category: "Innovación",
    date: "02 OCT",
    status: "Próximamente",
    icon: "💻",
  },
  {
    title: "Feria de Emprendimiento",
    category: "Emprendimiento",
    date: "05 OCT",
    status: "Inscripciones abiertas",
    icon: "🚀",
  },
  {
    title: "Taller de Desarrollo Web",
    category: "Tecnología",
    date: "08 OCT",
    status: "Cupos disponibles",
    icon: "🌐",
  },
];

export const revalidate = 10;

export default function ISRPage() {
  const generatedAt = new Date().toLocaleTimeString("es-CO");

  return (
    <main className="page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #070711;
          color: white;
        }

        .page {
          min-height: 100vh;
          padding: 60px 24px;
          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(249, 115, 22, 0.16),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 80%,
              rgba(234, 88, 12, 0.08),
              transparent 30%
            ),
            #070711;
        }

        .container {
          max-width: 1050px;
          margin: auto;
        }

        .back {
          color: #fb923c;
          text-decoration: none;
          font-size: 14px;
        }

        .badge {
          display: inline-flex;
          margin-top: 35px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: #fb923c;
          font-size: 12px;
          font-weight: bold;
        }

        h1 {
          font-size: 62px;
          line-height: 1;
          letter-spacing: -3px;
          margin: 20px 0;
        }

        .gradient {
          background: linear-gradient(90deg, #f97316, #facc15);
          -webkit-background-clip: text;
          color: transparent;
        }

        .description {
          max-width: 750px;
          color: #a1a1aa;
          font-size: 17px;
          line-height: 1.7;
        }

        .status-panel {
          margin-top: 35px;
          padding: 20px;
          border-radius: 17px;
          background: rgba(249, 115, 22, 0.07);
          border: 1px solid rgba(249, 115, 22, 0.22);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .status-panel strong {
          display: block;
          margin-bottom: 6px;
        }

        .status-panel span {
          color: #a1a1aa;
          font-size: 13px;
        }

        .timer {
          padding: 10px 14px;
          border-radius: 9px;
          background: rgba(249, 115, 22, 0.12);
          color: #fb923c;
          font-family: monospace;
          font-size: 12px;
        }

        .events {
          margin-top: 25px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .event {
          padding: 23px;
          border-radius: 20px;
          background: #10101a;
          border: 1px solid #27272a;
          transition: 0.2s;
        }

        .event:hover {
          transform: translateY(-4px);
          border-color: rgba(249, 115, 22, 0.45);
        }

        .event-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(249, 115, 22, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
        }

        .date {
          padding: 7px 9px;
          border-radius: 8px;
          background: #181824;
          font-size: 11px;
          font-weight: bold;
        }

        .category {
          display: block;
          margin-top: 20px;
          color: #fb923c;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .event h3 {
          font-size: 19px;
          line-height: 1.35;
          margin: 9px 0 15px;
        }

        .event-status {
          color: #71717a;
          font-size: 13px;
        }

        .explanation {
          margin-top: 25px;
          padding: 23px;
          border-radius: 17px;
          background: rgba(249, 115, 22, 0.07);
          border: 1px solid rgba(249, 115, 22, 0.22);
          color: #fed7aa;
          font-size: 14px;
          line-height: 1.65;
        }

        .flow {
          margin-top: 20px;
          padding: 20px;
          border-radius: 15px;
          background: #09090f;
          border: 1px solid #27272a;
          font-family: monospace;
          color: #fb923c;
          line-height: 1.8;
        }

        @media (max-width: 750px) {
          h1 {
            font-size: 44px;
          }

          .events {
            grid-template-columns: 1fr;
          }

          .status-panel {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="container">
        <a href="/" className="back">
          ← Volver a UniEvents
        </a>

        <div className="badge">🟠 INCREMENTAL STATIC REGENERATION</div>

        <h1>
          ISR · <span className="gradient">Incremental Static Regeneration</span>
        </h1>

        <p className="description">
          ISR combina las ventajas del contenido estático con la posibilidad
          de actualizarlo periódicamente sin reconstruir toda la aplicación.
        </p>

        <div className="status-panel">
          <div>
            <strong>⚡ Página con revalidación activa</strong>

            <span>
              Esta página está configurada para regenerarse cada 10 segundos.
            </span>
          </div>

          <div className="timer">
            Revalidate: 10s
          </div>
        </div>

        <section className="events">
          {events.map((event) => (
            <article className="event" key={event.title}>
              <div className="event-top">
                <div className="icon">{event.icon}</div>

                <div className="date">{event.date}</div>
              </div>

              <span className="category">{event.category}</span>

              <h3>{event.title}</h3>

              <span className="event-status">
                ● {event.status}
              </span>
            </article>
          ))}
        </section>

        <div className="explanation">
          <strong>⚡ ¿Qué está ocurriendo?</strong>

          <br />

          Esta ruta utiliza <strong>Incremental Static Regeneration</strong>.
          Next.js puede servir una versión estática de la página y, después
          del período de revalidación configurado, generar una nueva versión
          en segundo plano.
        </div>

        <div className="flow">
          Rendering mode: ISR
          <br />
          Revalidation: 10 seconds
          <br />
          Generated at: {generatedAt}
        </div>
      </div>
    </main>
  );
}