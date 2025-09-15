import { NavLink, Link } from 'react-router-dom'
import Button from '../components/Button/button.jsx';
export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container inner">
        <Link to="/" className="brand" aria-label="Orion - Início">
          <span className="logo" aria-hidden="true"></span>
        </Link>
        <nav className="nav" aria-label="Menu principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/empresa">Empresa</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
        <Button icon={'../../imagens/icones/claro/whatsappbranco.svg'} link={'https://wa.me/+556530231011'} title="Whatsapp" ></Button>
      </div>
    </header>
  )
}
