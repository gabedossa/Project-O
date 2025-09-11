import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CardSobreImagem from "../components/Card_Sobre_iImagem/CardSobreImagem";

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
          <CardSobreImagem/>
        </div>
      </section>
    </>
  );
}
