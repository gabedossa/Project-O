import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Empresa from './pages/Empresa.jsx'
import Servicos from './pages/Servicos.jsx'
import Produtos from './pages/Produtos.jsx'
import Contato from './pages/Contato.jsx'

export default function App() {
  return (
    <div className="app-wrap">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
