import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard.jsx";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import CardInfo from "../components/Card_info/CardInfo.jsx";
import ServicosHero from "../components/Servico_hero/ServicosHero.jsx";

// Os imports das imagens foram removidos pois não são mais necessários com este método.

export default function Servicos() {
  let textInfo = [
    {
      imgInfo: "/imagens/icones/water.svg",
      title: "Estação de Tratamento de Água",
      info: "Transformamos água bruta em potável, própria para o consumo humano. Nossas ETAs seguem rigorosos processos de clarificação, filtração e desinfecção, garantindo qualidade, segurança e conformidade com as normas de saúde.",
    },
    {
      imgInfo: "/imagens/icones/natureza.svg",
      title: "Estação de Tratamento de Efluentes",
      info: "Desenvolvemos soluções completas para o tratamento de efluentes, priorizando o reuso e a sustentabilidade. Nossos projetos se adaptam às necessidades de cada cliente, garantindo eficiência, economia e respeito ao meio ambiente.",
    },
    {
      imgInfo: "/imagens/icones/reverso.svg",
      title: "Osmose Reversa/Inversa",
      info: "Aplicamos tecnologia de membranas semipermeáveis para purificação da água, removendo sais, impurezas e contaminantes. A osmose reversa é ideal para sistemas de reuso, entregando água de alta qualidade e sustentabilidade.",
    },
    {
      imgInfo: "/imagens/icones/raindrops.svg",
      title: "Reuso de água",
      info: "Oferecemos tecnologias que possibilitam reduzir consumo e custos através do reuso. Nossas soluções unem eficiência e sustentabilidade, atendendo a indústrias e empreendimentos que buscam responsabilidade ambiental.",
    },
    {
      imgInfo: "/imagens/icones/filtro.svg",
      title: "Filtros",
      info: "Projetamos sistemas de filtragem sob medida para otimizar processos e reduzir custos. Com foco em eficiência e sustentabilidade, nossos filtros contribuem para o melhor aproveitamento da água e menor impacto ambiental.",
    },
    {
      imgInfo: "/imagens/icones/definicoes.svg",
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
          <SectionTitle SectionTitle="Nossas Soluções"/>
          <div className="cards">
            {textInfo.map((card, index) => (
              <CardInfo
                key={index}
                imagem={card.imgInfo}
                title={card.title}
                texto={card.info}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}