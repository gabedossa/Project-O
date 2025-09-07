import { Link } from "react-router-dom";
import "./HeroStyle.css";
import ServicosHero from "../servicos/ServicosHero";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="mainBg">
      <div className="overlay"></div>
        <div className="container">
          <div className="grid">
            <h1 className="heroTitle">
              Tratamento de Água e Efluentes com foco em Reuso e
              Sustentabilidade
            </h1>
            <p>
              Projetamos, implantamos e operamos soluções completas: ETA, ETE,
              Osmose Reversa, Filtros e mais.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <Link className="cta" to="/servicos">
                Nossos Serviços
              </Link>
              <a
                className="cta"
                href="https://wa.me/+556530231011"
                target="_blank"
                rel="noopener"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <ServicosHero />
    </section>
  );
}
