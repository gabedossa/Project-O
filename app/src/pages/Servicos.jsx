import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard.jsx";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import CardInfo from "../components/Card_info/CardInfo.jsx";
import ServicosHero from "../components/Servico_hero/ServicosHero.jsx";

export default function Servicos() {
  let textInfo = [
    {
      imgInfo: `../../../../dist/assets/imagens/icones/water.svg`,
      title: "Estação de Tratamento de Água",
      info: "Transformamos água bruta em potável, própria para o consumo humano. Nossas ETAs seguem rigorosos processos de clarificação, filtração e desinfecção, garantindo qualidade, segurança e conformidade com as normas de saúde.",
    },
    {
      imgInfo: `../../../../dist/assets/imagens/icones/filtro.svg`,
      title: "Estação de Tratamento de Efluentes",
      info: "Desenvolvemos soluções completas para o tratamento de efluentes, priorizando o reuso e a sustentabilidade. Nossos projetos se adaptam às necessidades de cada cliente, garantindo eficiência, economia e respeito ao meio ambiente.",
    },
    {
      imgInfo: `../../../../dist/assets/imagens/icones/reverso.svg`,
      title: "Osmose Reversa/Inversa",
      info: "Aplicamos tecnologia de membranas semipermeáveis para purificação da água, removendo sais, impurezas e contaminantes. A osmose reversa é ideal para sistemas de reuso, entregando água de alta qualidade e sustentabilidade.",
    },
    {
      imgInfo: `../../../../dist/assets/imagens/icones/natureza.svg`,
      title: "Reuso de água",
      info: "Oferecemos tecnologias que possibilitam reduzir consumo e custos através do reuso. Nossas soluções unem eficiência e sustentabilidade, atendendo a indústrias e empreendimentos que buscam responsabilidade ambiental.",
    },
    {
      imgInfo: `../../../../dist/assets/imagens/icones/filtro.svg`,
      title: "Filtros",
      info: "Projetamos sistemas de filtragem sob medida para otimizar processos e reduzir custos. Com foco em eficiência e sustentabilidade, nossos filtros contribuem para o melhor aproveitamento da água e menor impacto ambiental.",
    },
    {
      imgInfo: `../../../../dist/assets/imagens/icones/definicoes.svg`,
      title: "Assistência Técnica",
      info: "Garantimos suporte especializado em todas as fases: start-up, auditorias e operação assistida. Nossa equipe técnica assegura a máxima performance dos sistemas, com confiabilidade e redução de custos operacionais.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serviços | Orion Água e Química</title>
        <meta
          name="description"
          content="ETA, ETE, Osmose Reversa, Reuso de Água e consultoria técnica especializada."
        />
        <link rel="canonical" href="https://www.seudominio.com.br/servicos" />
      </Helmet>
      <ServicosHero></ServicosHero>

      <section className="section bottom">
        <div className="container">
          <SectionTitle SectionTitle="Nossas Soluções"></SectionTitle>
          <div className="cards">
            <CardInfo
              imagem={textInfo[0].imgInfo}
              title={textInfo[0].title}
              texto={textInfo[0].info}
            ></CardInfo>

            <CardInfo
              imagem={textInfo[1].imgInfo}
              title={textInfo[1].title}
              texto={textInfo[1].info}
            ></CardInfo>

            <CardInfo
              imagem={textInfo[2].imgInfo}
              title={textInfo[2].title}
              texto={textInfo[2].info}
            ></CardInfo>

            <CardInfo
              imagem={textInfo[3].imgInfo}
              title={textInfo[3].title}
              texto={textInfo[3].info}
            ></CardInfo>

            <CardInfo
              imagem={textInfo[4].imgInfo}
              title={textInfo[4].title}
              texto={textInfo[4].info}
            ></CardInfo>

            <CardInfo
              imagem={textInfo[5].imgInfo}
              title={textInfo[5].title}
              texto={textInfo[5].info}
            ></CardInfo>
          </div>
        </div>
      </section>
    </>
  );
}
