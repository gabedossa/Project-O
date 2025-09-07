import'./servicoHeroStyle.css';
export default function ServicosHero(){
    return(
        <div>
            <div className="panelServicoHero" aria-label="Soluções em destaque">
            <div>
              <strong className='CardSubTitle'>ETA</strong>
              <p>Estação de Tratamento de Água</p>
            </div>
            <div>
              <strong className='CardSubTitle'>ETE</strong>
              <p>Estação de Tratamento de Efluentes</p>
            </div>
            <div>
              <strong className='CardSubTitle'>Osmose Reversa</strong>
              <p>Alta eficiência e qualidade</p>
            </div>
            <div>
              <strong className='CardSubTitle'>Reuso</strong>
              <p style={{ margin: 0 }}>Economia e sustentabilidade</p>
            </div>
          </div>
        </div>
    );
}