import'./Footer.css';
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="cols">
          <div>
            <h3 style={{marginTop:0}}>Orion Água e Química</h3>
            <p>Projetos e soluções em tratamento de água e efluentes, reuso e sustentabilidade.</p>
          </div>
          <div>
            <h4>Atendimento</h4>
            <p>WhatsApp: (65)3023-1011</p>
          </div>

          <div>
            <h4>Endereços</h4>
            <p>Cuiabá – R. Pres. Hermes da Fonseca, Quilombo, Cuiabá - MT, 78043-398</p>
            <p>Cáceres – Av. Talhamares, 943, Santa Izabel, Cáceres - MT, 78.205-730</p>
          </div>
          <div>
            <h4>Redes Sociais</h4>
            <div className="redeIconContainer">
            <div className='socialIcon'><a href='https://www.facebook.com/orionaguaquimica?locale=pt_BR'><img src='/imagens/icones/face.png'/></a></div>
            <div className='socialIcon'><a href='https://www.instagram.com/orionaguaquimica/'><img src='/imagens/icones/instagram.svg' /></a></div>
            </div>
          </div>
        </div>
      </div>
        <div className="footerEnd">
        <small>© {new Date().getFullYear()} Orion – Todos os direitos reservados.</small>
        </div>
    </footer>
  )
}
