import { Helmet } from 'react-helmet-async'

export default function Empresa() {
  return (
    <>
      <Helmet>
        <title>Empresa | Orion Água e Química</title>
        <meta name="description" content="Desde 2012, desenvolvendo soluções sustentáveis em tratamento de água e efluentes." />
        <link rel="canonical" href="https://www.seudominio.com.br/empresa" />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Quem somos</h2>
          <p>
            Fundada em 2012, a Orion nasceu com foco em filtragem e produtos químicos e evoluiu para projetos completos
            em tratamento de água e efluentes, com ênfase em reuso e sustentabilidade.
          </p>
          <p>
            Atuamos do diagnóstico ao comissionamento e operação assistida, garantindo performance, economia e conformidade ambiental.
          </p>
        </div>
      </section>
    </>
  )
}
