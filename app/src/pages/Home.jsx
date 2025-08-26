import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import BlogPosts from '../components/BlogPosts.jsx'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Orion Água e Química | Tratamento de Água e Efluentes</title>
        <meta name="description" content="Soluções completas em ETA, ETE, osmose reversa e reuso de água com foco em sustentabilidade." />
        <link rel="canonical" href="https://www.seudominio.com.br/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />

      <section className="section">
        <div className="container">
          <h2>Serviços</h2>
          <div className="cards">
            <ServiceCard title="ETA – Estação de Tratamento de Água">
              Projetos, implantação e operação completa de sistemas de tratamento.
            </ServiceCard>
            <ServiceCard title="ETE – Estação de Tratamento de Efluentes">
              Tratamento eficiente para conformidade ambiental e reuso.
            </ServiceCard>
            <ServiceCard title="Osmose Reversa">
              Qualidade elevada de água para processos industriais exigentes.
            </ServiceCard>
          </div>
        </div>
      </section>
    </>
  )
}
