const event = {
  title: "Conferencia de Inteligencia Artificial",
  category: "Tecnología",
  date: "30 de septiembre de 2026",
  time: "6:00 PM",
  location: "Auditorio Principal",
  description:
    "Una conferencia sobre las nuevas aplicaciones de la inteligencia artificial en el desarrollo de software, educación y transformación digital.",
  speaker: "Laura Martínez",
};

export default function SSRPage() {
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
              circle at 80% 20%,
              rgba(6, 182, 212, 0.15),
              transparent 30%
            ),
            #070711;
        }

        .container {
          max-width: 1000px;
          margin: auto;
        }

        .back {
          color: #a78bfa;
          text-decoration: none;
          font-size: 14px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 35px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #60a5fa;
          font-size: 12px;
          font-weight: bold;
        }

        h1 {
          max-width: 800px;
          font-size: 58px;
          line-height: 1.05;
          letter-spacing: -3px;
          margin: 20px 0 15px;
        }

        .gradient {
          background: linear-gradient(90deg, #60a5fa, #22d3ee);
          -webkit-background-clip: text;
          color: transparent;
        }

        .description {
          max-width: 700px;
          color: #a1a1aa;
          font-size: 17px;
          line-height: 1.7;
        }

        .event-card {
          margin-top: 45px;
          padding: 35px;
          border-radius: 24px;
          background: #10101a;
          border: 1px solid #27272a;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .category {
          color: #60a5fa;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .status {
          padding: 8px 12px;
          border-radius: 8px;
          background: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          font-size: 12px;
          font-weight: bold;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 30px;
        }

        .info {
          padding: 18px;
          border-radius: 14px;
          background: #181824;
          border: 1px solid #27272a;
        }

        .info small {
          display: block;
          color: #71717a;
          margin-bottom: 7px;
        }

        .info strong {
          font-size: 14px;
        }

        .explanation {
          margin-top: 25px;
          padding: 22px;
          border-radius: 15px;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: #bfdbfe;
          line-height: 1.6;
          font-size: 14px;
        }

        @media (max-width: 700px) {
          h1 {
            font-size: 42px;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <a href="/" className="back">
          ← Volver a UniEvents
        </a>

        <div className="badge">🔵 SERVER-SIDE RENDERING</div>

        <h1>
          SSR · <span className="gradient">Server-Side Rendering</span>
        </h1>

        <p className="description">
          En esta página, Next.js genera el contenido desde el servidor antes
          de enviarlo al navegador.
        </p>

        <section className="event-card">
          <div className="top">
            <span className="category">{event.category}</span>

            <span className="status">● Disponible</span>
          </div>

          <h2>{event.title}</h2>

          <p className="description">{event.description}</p>

          <div className="info-grid">
            <div className="info">
              <small>📅 Fecha</small>
              <strong>{event.date}</strong>
            </div>

            <div className="info">
              <small>🕐 Hora</small>
              <strong>{event.time}</strong>
            </div>

            <div className="info">
              <small>📍 Ubicación</small>
              <strong>{event.location}</strong>
            </div>
          </div>

          <div className="info" style={{ marginTop: "12px" }}>
            <small>🎤 Ponente</small>
            <strong>{event.speaker}</strong>
          </div>

          <div className="explanation">
            <strong>⚡ ¿Qué está ocurriendo?</strong>
            <br />
            Esta página es un Server Component de Next.js. El servidor prepara
            el contenido del evento y genera el HTML antes de entregarlo al
            navegador. Esto permite mostrar contenido inicial rápidamente y
            favorece el SEO.
          </div>
        </section>
      </div>
    </main>
  );
}