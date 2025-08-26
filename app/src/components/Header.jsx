import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container inner">
        <Link to="/" className="brand" aria-label="Orion - Início">
          <span className="logo" aria-hidden="true"></span>
          <span>ORION</span>
        </Link>
        <nav className="nav" aria-label="Menu principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/empresa">Empresa</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
        <a className="cta" href="https://wa.me/+556530231011" target="_blank" rel="noopener">
          WhatsApp
        </a>
      </div>
    </header>
  )
}
