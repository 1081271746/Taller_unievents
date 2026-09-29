"use client";

import { useState } from "react";

const events = [
  "Inteligencia Artificial aplicada",
  "Hackathon Universitario",
  "Feria de Emprendimiento",
  "Taller de Desarrollo Web",
  "Festival Cultural",
  "Torneo Universitario",
];

export default function CSRPage() {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="page">
      <style jsx global>{`
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
              circle at 15% 10%,
              rgba(124, 58, 237, 0.2),
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
          display: inline-block;
          margin-top: 35px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #4ade80;
          font-size: 12px;
          font-weight: bold;
        }

        h1 {
          font-size: 58px;
          margin: 18px 0 10px;
          letter-spacing: -3px;
        }

        .gradient {
          background: linear-gradient(90deg, #a855f7, #22d3ee);
          -webkit-background-clip: text;
          color: transparent;
        }

        .description {
          color: #a1a1aa;
          font-size: 17px;
          line-height: 1.7;
          max-width: 700px;
        }

        .panel {
          margin-top: 45px;
          padding: 30px;
          border-radius: 22px;
          background: #10101a;
          border: 1px solid #27272a;
        }

        .panel-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #30303b;
          background: #080810;
          color: white;
          outline: none;
          font-size: 15px;
        }

        input:focus {
          border-color: #8b5cf6;
        }

        .events {
          margin-top: 25px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .event {
          padding: 18px;
          border-radius: 14px;
          background: #181824;
          border: 1px solid #27272a;
        }

        .event strong {
          display: block;
          margin-bottom: 7px;
        }

        .event span {
          color: #71717a;
          font-size: 13px;
        }

        .info {
          margin-top: 25px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.25);
          color: #c4b5fd;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 650px) {
          h1 {
            font-size: 42px;
          }

          .events {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <a className="back" href="/">
          ← Volver a UniEvents
        </a>

        <div className="badge">🟢 CLIENT-SIDE RENDERING</div>

        <h1>
          CSR · <span className="gradient">Client-Side Rendering</span>
        </h1>

        <p className="description">
          En este ejemplo, la interacción y actualización de los eventos se
          realiza directamente en el navegador utilizando JavaScript y React.
        </p>

        <section className="panel">
          <div className="panel-title">
            🔎 Buscar eventos en tiempo real
          </div>

          <input
            type="text"
            placeholder="Escribe el nombre de un evento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="events">
            {filteredEvents.map((event) => (
              <div className="event" key={event}>
                <strong>📅 {event}</strong>
                <span>Resultado procesado en el cliente</span>
              </div>
            ))}
          </div>

          <div className="info">
            <strong>⚡ ¿Qué está ocurriendo?</strong>
            <br />
            El usuario escribe en el buscador y React actualiza la interfaz
            directamente en el navegador. No necesitamos recargar la página
            para mostrar los resultados.
          </div>
        </section>
      </div>
    </main>
  );
}