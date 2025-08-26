export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="cols">
          <div>
            <h3 style={{marginTop:0}}>Orion Água e Química</h3>
            <p>Projetos e soluções em tratamento de água e efluentes, reuso e sustentabilidade.</p>
            <small>© {new Date().getFullYear()} Orion – Todos os direitos reservados.</small>
          </div>
          <div>
            <h4>Atendimento</h4>
            <p>WhatsApp: (65) 0000-0000</p>
            <p>E-mail: contato@orion.com.br</p>
          </div>
          <div>
            <h4>Endereços</h4>
            <p>Cuiabá – Rua Presidente Hermes da Fonseca, 000</p>
            <p>Cáceres – Av. Talhamares, 000</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
