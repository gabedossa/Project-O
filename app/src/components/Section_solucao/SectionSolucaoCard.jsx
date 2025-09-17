import './SectionSolucaoStyle.css';
export default function SectionSolucaoCard({imagem, titulo, texto}) {
    return(
        <div>
            <div className="containerSolucoes">
                <div className="solucoes-card">
                    <div className="soluctionCard">
                        <img src={imagem}></img>
                        <p className='TituloSolucoes'>{titulo}</p>
                        <p className='TextoSolucao'>{texto}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}