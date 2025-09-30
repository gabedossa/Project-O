import { NavLink, Link } from 'react-router-dom';
import Button from '../components/Button/button.jsx';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="container inner">
        <Link to="/" className="brand" aria-label="Orion - Início">
          <span className="logo" aria-hidden="true">
          </span>
        </Link>

        {/* Botão Hamburguer (só visível em mobile) */}
        <button
          className="hamburger"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Menu principal">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Início</NavLink>
          <NavLink to="/empresa" onClick={() => setMenuOpen(false)}>Empresa</NavLink>
          <NavLink to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</NavLink>
          <NavLink to="/contato" onClick={() => setMenuOpen(false)}>Contato</NavLink>
          <div className='Orion_Nav_title'>
            <p>© {new Date().getFullYear()} Orion – Todos os direitos reservados.</p>
          </div>
        </nav>

        <Button 
          icon={'/imagens/icones/whats.png'} 
          link={'https://wa.me/+556530231011'} 
          title="Whatsapp" 
        />
      </div>
    </header>
  );
}
