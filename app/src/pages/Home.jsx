import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import MapCard from "../components/MapCard.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Orion Água e Química | Tratamento de Água e Efluentes</title>
        <meta
          name="description"
          content="Projetos de ETA e ETE, sistemas de osmose reversa e tecnologias de reuso de água. Tratamento de água com foco em eficiência, economia e sustentabilidade."
        />
        <link rel="canonical" href="https://orionaguaequimica.com.br/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />

      <section className="section">
        <div className="container">
          <h2>Serviços</h2>
          <div className="cards">
            <ServiceCard icon={'../../imagens/icones/factoryA.svg'} title="Estações de Tratamento de Água – ETA">
              <p>
                As Estações de Tratamento de Água (ETAs) têm como objetivo
                transformar a água bruta em água potável, própria para o consumo
                humano. O processo envolve etapas de clarificação, filtração e
                desinfecção, garantindo qualidade, segurança e conformidade com
                as normas de saúde.
              </p>
            </ServiceCard>
            <ServiceCard icon={'../../imagens/icones/factoryA.svg'} title="ETE – Estação de Tratamento de Efluentes">
              <p>
                As Estações de Tratamento de Efluentes (ETEs) reduzem a carga de
                poluentes lançados no meio ambiente. Utilizadas em indústrias e
                municípios, possibilitam o tratamento físico, químico e
                biológico dos efluentes, assegurando conformidade legal e
                preservação dos recursos hídricos.
              </p>
            </ServiceCard>
            <ServiceCard icon={'../../imagens/icones/scienceA.svg'} title="Osmose Reversa/Inversa">
              <p>
                A osmose reversa é uma tecnologia de purificação de água que
                utiliza membranas semipermeáveis para remover sais, impurezas e
                contaminantes. É amplamente aplicada em indústrias e sistemas de
                reuso, garantindo água de alta qualidade e sustentabilidade no
                processo.
              </p>
            </ServiceCard>
          </div>
        </div>

        <div className="container">
          <h2>Area de atuação</h2>
          <div className="cards">
            <ServiceCard icon={'../../imagens/icones/scienceA.svg'} title="Laboratórial">
              <p>
                Nos laboratórios analíticos, o controle de qualidade da água é
                fundamental. Utilizada como reagente químico, ela deve conter
                uma quantidade mínima de contaminantes. Melhore a qualidade da
                água que sua família está bebendo.
              </p>
            </ServiceCard>
            <ServiceCard icon={'../../imagens/icones/factoryA.svg'} title="Indústria">
              <p>
                Nem sempre uma água considerada potável para consumo humano e
                animal pode servir para fins industriais, o que requer uma
                atenção maior.
              </p>
            </ServiceCard>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Localização</h2>
          <MapCard />
        </div>
      </section>
    </>
  );
}
