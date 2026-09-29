export const dynamic = "force-static";

const platformInfo = {
  name: "UniEvents",
  version: "1.0",
  university: "Plataforma Universitaria",
  events: 24,
  workshops: 8,
  conferences: 6,
  activities: 10,
};

export default function SSGPage() {
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
              circle at 20% 15%,
              rgba(168, 85, 247, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(236, 72, 153, 0.08),
              transparent 30%
            ),
            #070711;
        }

        .container {
          max-width: 1050px;
          margin: auto;
        }

        .back {
          color: #c084fc;
          text-decoration: none;
          font-size: 14px;
        }

        .badge {
          display: inline-flex;
          margin-top: 35px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #c084fc;
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
          background: linear-gradient(90deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          color: transparent;
        }

        .description {
          max-width: 720px;
          color: #a1a1aa;
          font-size: 17px;
          line-height: 1.7;
        }

        .main-card {
          margin-top: 45px;
          padding: 35px;
          border-radius: 24px;
          background: #10101a;
          border: 1px solid #27272a;
        }

        .main-card h2 {
          margin-top: 0;
          font-size: 27px;
        }

        .main-card p {
          color: #a1a1aa;
          line-height: 1.7;
        }

        .stats {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .stat {
          padding: 22px;
          border-radius: 15px;
          background: #181824;
          border: 1px solid #27272a;
        }

        .number {
          font-size: 30px;
          font-weight: 800;
        }

        .label {
          margin-top: 5px;
          color: #71717a;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .benefits {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .benefit {
          padding: 20px;
          border-radius: 15px;
          background: #181824;
          border: 1px solid #27272a;
        }

        .benefit-icon {
          font-size: 25px;
          margin-bottom: 12px;
        }

        .benefit strong {
          display: block;
          margin-bottom: 8px;
        }

        .benefit span {
          color: #71717a;
          font-size: 13px;
          line-height: 1.5;
        }

        .explanation {
          margin-top: 25px;
          padding: 22px;
          border-radius: 15px;
          background: rgba(168, 85, 247, 0.08);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #ddd6fe;
          line-height: 1.6;
          font-size: 14px;
        }

        .build {
          margin-top: 12px;
          padding: 15px;
          border-radius: 12px;
          background: #09090f;
          border: 1px solid #27272a;
          font-family: monospace;
          color: #a78bfa;
        }

        @media (max-width: 700px) {
          h1 {
            font-size: 44px;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <a href="/" className="back">
          ← Volver a UniEvents
        </a>

        <div className="badge">🟣 STATIC-SITE GENERATION</div>

        <h1>
          SSG · <span className="gradient">Static Site Generation</span>
        </h1>

        <p className="description">
          Esta página representa información que no necesita generarse
          nuevamente para cada visitante. Su contenido puede prepararse
          durante el proceso de construcción de la aplicación.
        </p>

        <section className="main-card">
          <h2>Sobre {platformInfo.name}</h2>

          <p>
            {platformInfo.name} es una plataforma universitaria diseñada para
            centralizar conferencias, talleres, actividades culturales,
            eventos deportivos y experiencias de innovación.
          </p>

          <p>
            Su objetivo es facilitar que los estudiantes descubran y
            participen en las diferentes actividades disponibles dentro de la
            comunidad universitaria.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="number">{platformInfo.events}</div>
              <div className="label">Eventos</div>
            </div>

            <div className="stat">
              <div className="number">{platformInfo.workshops}</div>
              <div className="label">Talleres</div>
            </div>

            <div className="stat">
              <div className="number">{platformInfo.conferences}</div>
              <div className="label">Conferencias</div>
            </div>

            <div className="stat">
              <div className="number">{platformInfo.activities}</div>
              <div className="label">Actividades</div>
            </div>
          </div>

          <h2 style={{ marginTop: "40px" }}>¿Por qué utilizar SSG?</h2>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-icon">⚡</div>

              <strong>Alta velocidad</strong>

              <span>
                El contenido puede servirse como una página previamente
                generada.
              </span>
            </div>

            <div className="benefit">
              <div className="benefit-icon">🌎</div>

              <strong>CDN</strong>

              <span>
                El contenido estático puede distribuirse mediante una red de
                entrega de contenido.
              </span>
            </div>

            <div className="benefit">
              <div className="benefit-icon">🔍</div>

              <strong>SEO</strong>

              <span>
                El contenido HTML está disponible para los motores de búsqueda
                desde la carga inicial.
              </span>
            </div>
          </div>

          <div className="explanation">
            <strong>⚡ ¿Qué está ocurriendo?</strong>

            <br />

            Esta ruta utiliza{" "}
            <strong>Static Site Generation</strong>. Al utilizar{" "}
            <strong>force-static</strong>, indicamos a Next.js que esta ruta
            debe utilizar renderizado estático. En producción, el contenido
            puede quedar preparado durante el proceso de build y reutilizarse
            para las solicitudes posteriores.
          </div>

          <div className="build">
            ✓ Rendering mode: STATIC
            <br />
            ✓ Route: /ssg
            <br />
            ✓ Data: Build-time
          </div>
        </section>
      </div>
    </main>
  );
}