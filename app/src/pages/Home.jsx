import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import MapCard from "../components/MapCard/MapCard.jsx";
import CardInfo from "../components/Card_info/CardInfo.jsx";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";

export default function Home() {
  let textInfo = [{
    imgInfo: `../../../../dist/assets/imagens/icones/water.svg`,
    title: 'Estações de Tratamento de Água - ETA',
    info: 'As Estações de Tratamento de Água (ETAs) têm como objetivo transformar a água bruta em água potável, própria para o consumo humano. O processo envolve etapas de clarificação, filtração e desinfecção, garantindo qualidade, segurança e conformidade com as normas de saúde.',
  },
  {
    imgInfo: `../../../../dist/assets/imagens/icones/natureza.svg`,
    title: 'Estações de Tratamento de Efluentes – ETE',
    info:'A estação de tratamento de efluentes existem para reduzir a quantidade de poluentes de um efluente. No país, existem diversas regiões com estação de tratamento de efluentes.'
  },
  {
    imgInfo: `../../../../dist/assets/imagens/icones/reverso.svg`,
    title: 'Osmose Reversa/Inversa',
    info: 'A osmose reversa é uma tecnologia de purificação de água que utiliza membranas semipermeáveis para remover sais, impurezas e contaminantes. É amplamente aplicada em indústrias e sistemas de reuso, garantindo água de alta qualidade e sustentabilidade no processo.'
  },
  {
    imgInfo: `../../../../dist/assets/imagens/icones/construcao.svg`,
    title: 'Laboratorial',
    info: 'Nos laboratórios analíticos, o controle de qualidade da água é fundamental. Utilizada como reagente químico, ela deve conter uma quantidade mínima de contaminantes. Melhore a qualidade da água que sua família está bebendo.'
  },
  {
    imgInfo: `../../../../dist/assets/imagens/icones/construcao.svg`,
    title: 'Industrial',
    info: 'Nem sempre uma água considerada potável para consumo humano e animal pode servir para fins industriais, o que requer uma atenção maior.'
  },
]

  
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
          <SectionTitle SectionTitle='Serviços' ></SectionTitle>
          <div className="cards">
              <CardInfo imagem={textInfo[0].imgInfo} title={textInfo[0].title} texto={textInfo[0].info}></CardInfo>
              <CardInfo imagem={textInfo[1].imgInfo} title={textInfo[1].title} texto={textInfo[1].info}></CardInfo>
              <CardInfo imagem={textInfo[2].imgInfo} title={textInfo[2].title} texto={textInfo[2].info}></CardInfo>
          </div>
        </div>

        <div className="container">
          <SectionTitle SectionTitle='Area de atuação' ></SectionTitle>
            <div className="cards">
              <CardInfo imagem={textInfo[3].imgInfo} title={textInfo[3].title} texto={textInfo[3].info}></CardInfo>
              <CardInfo imagem={textInfo[4].imgInfo} title={textInfo[4].title} texto={textInfo[4].info}></CardInfo>
            </div>
          </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle SectionTitle='Localização' ></SectionTitle>
          <MapCard />
        </div>
      </section>
    </>
  );
}
