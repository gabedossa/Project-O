import "./CardValores.css";

export default function CardValores() {
  return (
    <div className="valoresContainer">
      <div className="sectionContainer">
        <div className="alignTitle">
          <img src="/imagens/icones/ballot.svg"></img>
          <h2 className="title">Missão</h2>
        </div>
        <p>
          Projetar e implantar soluções sustentáveis para o tratamento
          responsável de água e efluentes, otimizando processos, viabilizando o
          reuso e assegurando conformidade às normas — com desempenho mensurável
          e segurança operacional.
        </p>
      </div>
      <div className="sectionContainer">
        <div className="alignTitle">
          <img src="/imagens/icones/olho.svg"></img>
          <h2 className="title">Visão</h2>
        </div>
        <p>
          Ser referência nacional em soluções de tratamento de água e efluentes,
          reconhecida pela qualidade técnica, eficiência operacional e
          compromisso ambiental.
        </p>
      </div>
    </div>
  );
}
