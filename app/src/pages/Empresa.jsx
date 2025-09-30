import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CardSobreImagem from "../components/Card_Sobre_iImagem/CardSobreImagem";
import CardValores from "../components/CardValores/CardValores";
import SectionSolucaoCard from "../components/Section_solucao/SectionSolucaoCard";

export default function Empresa() {
  return (
    <>
      <Helmet>
        <title>Empresa | Orion Água e Química</title>
        <meta
          name="description"
          content="Desde 2012, desenvolvendo soluções sustentáveis em tratamento de água e efluentes."
        />
        <link rel="canonical" href="https://www.seudominio.com.br/empresa" />
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionTitle SectionTitle="Sobre a Empresa"></SectionTitle>
          <CardSobreImagem />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle SectionTitle="Missao e valores"></SectionTitle>
          <CardValores />
        </div>
      </section>

      <section className="section">
        <div className="container">
            <SectionTitle SectionTitle="Soluções"></SectionTitle>
          <div className="flexContainerSoluction">
            <SectionSolucaoCard
              imagem={"/imagens/img12.jpg"}
              titulo={"Consultoria e Treinamento."}
              texto={
                "É o acompanhamento da ETA e/ou ETE, feito por profissionais especializados (Engenheiro químico e/ou Engenheiro Sanitarista e Ambiental), com o objetivo de diagnosticar e indicar a solução e otimização para o sistema, além de capacitar os operadores das estações com cursos rápidos e práticos."
              }
            />
            <SectionSolucaoCard
              imagem={"/imagens/img2.jpg"}
              titulo={"Licenciamento Ambiental."}
              texto={
                "É o procedimento administrativo pelo qual o órgão ambiental competente emite as licenças para localização, instalação, ampliação e operação de atividades que utilizam de recursos naturais e/ou possam degradar o meio ambiente. As licenças destacadas anteriormente são as mais solicitadas."
              }
            />
            <SectionSolucaoCard
              imagem={"imagens/img3.jpg"}
              titulo={"Instalação e Recuperação de Filtros."}
              texto={
                "É a solução ideal para tratamento de água em qualquer que seja a sua finalidade desde o consumo humano até processos industriais. Os filtros são constituídos de material resistente a corrosão e intempéries possibilitando que tenham longa vida útil."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
