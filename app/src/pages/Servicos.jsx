import { Helmet } from 'react-helmet-async'
import ServiceCard from '../components/ServiceCard.jsx'

export default function Servicos() {
  return (
    <>
      <Helmet>
        <title>Serviços | Orion Água e Química</title>
        <meta name="description" content="ETA, ETE, Osmose Reversa, Reuso de Água e consultoria técnica especializada." />
        <link rel="canonical" href="https://www.seudominio.com.br/servicos" />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Nossas soluções</h2>
          <div className="cards">
            <ServiceCard title="ETA – Estação de Tratamento de Água">
              Dimensionamento, projeto, implantação e operação.
            </ServiceCard>
            <ServiceCard title="ETE – Estação de Tratamento de Efluentes">
              Tecnologias adequadas ao seu processo com foco em reuso.
            </ServiceCard>
            <ServiceCard title="Osmose Reversa">
              Sistemas compactos ou de grande porte com alta eficiência.
            </ServiceCard>
            <ServiceCard title="Reuso de Água">
              Soluções para reduzir consumo e custos com sustentabilidade.
            </ServiceCard>
            <ServiceCard title="Filtros e Mídias">
              Carvão ativado, areia, cartuchos e mais.
            </ServiceCard>
            <ServiceCard title="Assistência Técnica">
              Start-up, auditorias e operação assistida.
            </ServiceCard>
          </div>
        </div>
      </section>
    </>
  )
}
