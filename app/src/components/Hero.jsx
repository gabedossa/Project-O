import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="grid">
          <div>
            <h1>Tratamento de Água e Efluentes com foco em Reuso e Sustentabilidade</h1>
            <p>Projetamos, implantamos e operamos soluções completas: ETA, ETE, Osmose Reversa, Filtros e mais.</p>
            <div style={{display:'flex', gap:12}}>
              <Link className="cta" to="/servicos">Nossos Serviços</Link>
              <a className="cta" href="https://wa.me/5500000000000" target="_blank" rel="noopener">Fale no WhatsApp</a>
            </div>
          </div>
          <div className="panel" aria-label="Soluções em destaque">
            <div>
              <strong>ETA</strong>
              <p style={{margin:0}}>Estação de Tratamento de Água</p>
            </div>
            <div>
              <strong>ETE</strong>
              <p style={{margin:0}}>Estação de Tratamento de Efluentes</p>
            </div>
            <div>
              <strong>Osmose Reversa</strong>
              <p style={{margin:0}}>Alta eficiência e qualidade</p>
            </div>
            <div>
              <strong>Reuso</strong>
              <p style={{margin:0}}>Economia e sustentabilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
