import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm.jsx";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | Orion Água e Química</title>
        <meta
          name="description"
          content="Fale com a Orion para orçamentos, visitas técnicas e suporte."
        />
        <link rel="canonical" href="https://www.seudominio.com.br/contato" />
      </Helmet>

      <section className="section">
        <div className="container">
          <div className="containerContato">
            <div className="contatoCard">
              <SectionTitle SectionTitle="Contato"></SectionTitle>
              <p>
                Preencha o formulário e retornaremos o contato. Se preferir,
                chame no WhatsApp.
              </p>
              <strong>OBS: O Contato por e-mail está temporariamente indisponível.</strong>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
