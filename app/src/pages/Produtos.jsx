import { Helmet } from 'react-helmet-async'
import ProductCard from '../components/ProductCard.jsx'

export default function Produtos() {
  return (
    <>
      <Helmet>
        <title>Produtos | Orion Água e Química</title>
        <meta name="description" content="Filtros, mídias filtrantes e químicos para tratamento de água e efluentes." />
        <link rel="canonical" href="https://www.seudominio.com.br/produtos" />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Produtos</h2>
          <div className="cards">
            <ProductCard title="Carvão Ativado">Remoção de cloro, odores e compostos orgânicos.</ProductCard>
            <ProductCard title="Cartuchos e Carcaças">Vazões e micragens conforme necessidade.</ProductCard>
            <ProductCard title="Bombas e Dosadores">Equipamentos para aplicações industriais.</ProductCard>
          </div>
        </div>
      </section>
    </>
  )
}
