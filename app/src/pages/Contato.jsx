import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm.jsx'

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | Orion Água e Química</title>
        <meta name="description" content="Fale com a Orion para orçamentos, visitas técnicas e suporte." />
        <link rel="canonical" href="https://www.seudominio.com.br/contato" />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Fale conosco</h2>
          <p>Preencha o formulário e retornaremos o contato. Se preferir, chame no WhatsApp.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
