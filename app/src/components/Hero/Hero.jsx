import { Link } from "react-router-dom";
import "./HeroStyle.css";
import ServicosHero from "../servicos/ServicosHero";
import Button from "../Button/button";

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
              <div className="whatsBtn">
                <Button icon={'../../../../dist/assets/imagens/icones/claro/casaBranco.svg'} link={'/servicos'} title='Nossos Serviços' ></Button>
              </div>
              <div className="whatsBtn">
                <Button icon={'../../../../dist/assets/imagens/icones/claro/whatsappbranco.svg'} link={'https://wa.me/+556530231011'} title='WhatsApp' ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicosHero />
    </section>
  );
}
