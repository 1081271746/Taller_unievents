"use client";

import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Inteligencia Artificial aplicada",
    category: "Tecnología",
    date: "30 SEP",
    time: "6:00 PM",
    location: "Auditorio Principal",
    icon: "🤖",
    color: "purple",
  },
  {
    id: 2,
    title: "Hackathon Universitario",
    category: "Innovación",
    date: "02 OCT",
    time: "8:00 AM",
    location: "Laboratorio 3",
    icon: "💻",
    color: "blue",
  },
  {
    id: 3,
    title: "Feria de Emprendimiento",
    category: "Emprendimiento",
    date: "05 OCT",
    time: "10:00 AM",
    location: "Plaza Central",
    icon: "🚀",
    color: "orange",
  },
  {
    id: 4,
    title: "Taller de Desarrollo Web",
    category: "Tecnología",
    date: "08 OCT",
    time: "2:00 PM",
    location: "Sala 204",
    icon: "🌐",
    color: "cyan",
  },
  {
    id: 5,
    title: "Festival Cultural",
    category: "Cultura",
    date: "12 OCT",
    time: "4:00 PM",
    location: "Auditorio Central",
    icon: "🎭",
    color: "pink",
  },
  {
    id: 6,
    title: "Torneo Universitario",
    category: "Deportes",
    date: "15 OCT",
    time: "3:00 PM",
    location: "Complejo Deportivo",
    icon: "🏆",
    color: "green",
  },
];

const categories = [
  { name: "Tecnología", icon: "💻" },
  { name: "Innovación", icon: "🚀" },
  { name: "Cultura", icon: "🎭" },
  { name: "Deportes", icon: "⚽" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todos" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="page">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #070711;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        button,
        input {
          font-family: inherit;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(124, 58, 237, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 20%,
              rgba(6, 182, 212, 0.12),
              transparent 30%
            ),
            #070711;
        }

        .navbar {
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(7, 7, 17, 0.78);
          backdrop-filter: blur(16px);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .nav-content {
          max-width: 1180px;
          margin: auto;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .logo span {
          color: #a855f7;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          color: #a1a1aa;
          text-decoration: none;
          font-size: 14px;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-button {
          background: white;
          color: #111;
          border: 0;
          padding: 11px 18px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .hero {
          max-width: 1180px;
          margin: auto;
          min-height: 570px;
          padding: 90px 24px 70px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 50px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #c084fc;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .hero h1 {
          font-size: clamp(46px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -4px;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(90deg, #a855f7, #22d3ee);
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero-description {
          color: #a1a1aa;
          font-size: 18px;
          line-height: 1.7;
          max-width: 590px;
          margin: 28px 0;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
        }

        .primary-button {
          border: 0;
          padding: 14px 22px;
          border-radius: 12px;
          background: linear-gradient(90deg, #7c3aed, #9333ea);
          color: white;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.25);
        }

        .secondary-button {
          padding: 14px 22px;
          border-radius: 12px;
          background: transparent;
          color: white;
          border: 1px solid #27272a;
          cursor: pointer;
        }

        .hero-card {
          position: relative;
          padding: 26px;
          border-radius: 28px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.09),
            rgba(255, 255, 255, 0.025)
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          transform: rotate(2deg);
        }

        .hero-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .live {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #4ade80;
          font-size: 12px;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          background: #4ade80;
          border-radius: 50%;
        }

        .event-preview {
          padding: 22px;
          border-radius: 18px;
          background: #11111d;
          border: 1px solid #27272a;
          margin-bottom: 12px;
        }

        .event-preview-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .event-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          background: linear-gradient(
            135deg,
            rgba(168, 85, 247, 0.2),
            rgba(34, 211, 238, 0.15)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .event-preview h3 {
          margin: 18px 0 8px;
          font-size: 19px;
        }

        .event-preview p {
          margin: 0;
          color: #71717a;
          font-size: 13px;
        }

        .stats {
          max-width: 1180px;
          margin: 0 auto 90px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .stat {
          padding: 25px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .stat-number {
          font-size: 32px;
          font-weight: 800;
        }

        .stat-label {
          margin-top: 5px;
          color: #71717a;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section {
          max-width: 1180px;
          margin: auto;
          padding: 0 24px 100px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 30px;
        }

        .section-header h2 {
          margin: 0;
          font-size: 36px;
          letter-spacing: -1.5px;
        }

        .section-header p {
          color: #71717a;
          margin: 8px 0 0;
        }

        .search-box {
          width: 310px;
          padding: 14px 17px;
          border-radius: 12px;
          border: 1px solid #27272a;
          background: #11111a;
          color: white;
          outline: none;
        }

        .search-box:focus {
          border-color: #7c3aed;
        }

        .categories {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .category-button {
          border: 1px solid #27272a;
          background: #11111a;
          color: #a1a1aa;
          padding: 10px 15px;
          border-radius: 10px;
          cursor: pointer;
        }

        .category-button.active {
          background: #7c3aed;
          border-color: #7c3aed;
          color: white;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .event-card {
          padding: 22px;
          border-radius: 20px;
          background: #0f0f19;
          border: 1px solid #20202b;
          transition: 0.25s;
        }

        .event-card:hover {
          transform: translateY(-5px);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
        }

        .event-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .category {
          color: #a78bfa;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .date {
          padding: 7px 10px;
          background: #181824;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
        }

        .event-card h3 {
          margin: 0 0 12px;
          font-size: 20px;
          line-height: 1.3;
        }

        .event-info {
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: #71717a;
          font-size: 13px;
          margin-bottom: 20px;
        }

        .event-link {
          width: 100%;
          padding: 11px;
          border: 1px solid #27272a;
          background: transparent;
          color: white;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
        }

        .event-link:hover {
          background: #181824;
        }

        .rendering-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px 100px;
        }

        .rendering-box {
          padding: 35px;
          border-radius: 25px;
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.1),
            rgba(6, 182, 212, 0.06)
          );
          border: 1px solid rgba(168, 85, 247, 0.2);
        }

        .rendering-box h2 {
          margin-top: 0;
          font-size: 28px;
        }

        .rendering-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .rendering-item {
          padding: 18px;
          border-radius: 14px;
          background: rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .rendering-item strong {
          display: block;
          margin-bottom: 7px;
        }

        .rendering-item span {
          color: #71717a;
          font-size: 12px;
          line-height: 1.5;
        }

        footer {
          border-top: 1px solid #1f1f29;
          padding: 30px 24px;
          text-align: center;
          color: #52525b;
          font-size: 13px;
        }

        @media (max-width: 850px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .stats,
          .events-grid,
          .rendering-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header {
            align-items: start;
            flex-direction: column;
            gap: 20px;
          }

          .search-box {
            width: 100%;
          }

          .nav-links {
            display: none;
          }
        }

        @media (max-width: 550px) {
          .stats,
          .events-grid,
          .rendering-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 60px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            Uni<span>Events</span>
          </div>

          <div className="nav-links">
            <a href="#">Inicio</a>
            <a href="#events">Eventos</a>
            <a href="#categories">Categorías</a>
            <a href="#rendering">Rendering</a>
          </div>

          <button className="nav-button">Explorar</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <div className="badge">✦ PLATAFORMA UNIVERSITARIA</div>

          <h1>
            Todo lo que pasa
            <br />
            <span className="gradient-text">en tu universidad.</span>
          </h1>

          <p className="hero-description">
            Descubre conferencias, talleres, ferias, actividades culturales y
            eventos deportivos en un solo lugar.
          </p>

          <div className="hero-buttons">
            <a href="#events">
              <button className="primary-button">
                Explorar eventos →
              </button>
            </a>

            <button className="secondary-button">Conocer más</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <strong>Próximo evento</strong>

            <div className="live">
              <div className="live-dot"></div>
              Disponible
            </div>
          </div>

          <div className="event-preview">
            <div className="event-preview-top">
              <div className="event-icon">🤖</div>

              <span className="date">30 SEP</span>
            </div>

            <h3>Inteligencia Artificial aplicada</h3>

            <p>📍 Auditorio Principal</p>
            <p style={{ marginTop: "6px" }}>🕐 6:00 PM</p>
          </div>

          <div className="event-preview">
            <strong>+ 5 eventos esta semana</strong>

            <p style={{ marginTop: "7px" }}>
              Mantente al día con las actividades universitarias.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <div className="stat-number">24</div>
          <div className="stat-label">Eventos</div>
        </div>

        <div className="stat">
          <div className="stat-number">08</div>
          <div className="stat-label">Talleres</div>
        </div>

        <div className="stat">
          <div className="stat-number">06</div>
          <div className="stat-label">Conferencias</div>
        </div>

        <div className="stat">
          <div className="stat-number">10</div>
          <div className="stat-label">Actividades</div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section" id="events">
        <div className="section-header">
          <div>
            <h2>Eventos destacados</h2>
            <p>Encuentra algo que te interese.</p>
          </div>

          <input
            className="search-box"
            type="text"
            placeholder="🔎 Buscar evento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORIES */}
        <div className="categories" id="categories">
          <button
            className={`category-button ${
              selectedCategory === "Todos" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("Todos")}
          >
            Todos
          </button>

          {categories.map((category) => (
            <button
              key={category.name}
              className={`category-button ${
                selectedCategory === category.name ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* EVENT CARDS */}
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-card-top">
                <span className="category">{event.category}</span>

                <span className="date">{event.date}</span>
              </div>

              <div className="event-icon">{event.icon}</div>

              <h3 style={{ marginTop: "20px" }}>{event.title}</h3>

              <div className="event-info">
                <span>🕐 {event.time}</span>
                <span>📍 {event.location}</span>
              </div>

              <button className="event-link">Ver detalles →</button>
            </article>
          ))}
        </div>
      </section>

      {/* RENDERING */}
      <section className="rendering-section" id="rendering">
        <div className="rendering-box">
          <h2>⚡ Patrones de Rendering</h2>

          <div className="rendering-grid">
            <div className="rendering-item">
              <strong>🟢 CSR</strong>
              <span>
                La interfaz se construye principalmente en el navegador.
              </span>
            </div>

            <div className="rendering-item">
              <strong>🔵 SSR</strong>
              <span>
                El servidor genera HTML antes de enviarlo al navegador.
              </span>
            </div>

            <div className="rendering-item">
              <strong>🟣 SSG</strong>
              <span>
                Las páginas se generan durante el proceso de compilación.
              </span>
            </div>

            <div className="rendering-item">
              <strong>🟠 ISR</strong>
              <span>
                Las páginas estáticas pueden regenerarse periódicamente.
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        UniEvents · Taller de Patrones de Rendering · Next.js
      </footer>
    </main>
  );
}