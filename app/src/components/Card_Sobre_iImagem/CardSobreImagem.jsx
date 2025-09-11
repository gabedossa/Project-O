import react, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import "./CardSobreImagem.css";
import CarrouselImg from '../carrousel/CarrouseImg.jsx'

export default function CardSobreImagem() {
  return (
    <div className="CardSobreImagem">
      <div>
        <CarrouselImg imagem=''/> 
      </div>
      <div className="Texto_sobre">
        <p>
          Desde 2012, a Orion vem transformando desafios em soluções
          inteligentes para o tratamento de água e efluentes. O que começou com
          foco em filtragem e produtos químicos evoluiu para projetos completos,
          que integram inovação tecnológica, eficiência operacional e
          compromisso com a sustentabilidade. Atuamos de forma abrangente em
          todas as etapas do processo: do diagnóstico inicial à implementação,
          passando pelo comissionamento e pela operação assistida. Nosso
          objetivo é garantir que cada cliente alcance os melhores resultados,
          com máxima performance, redução de custos e total conformidade com as
          exigências ambientais. Mais do que entregar projetos, a Orion promove
          impacto positivo, fortalecendo a cultura do reuso da água e
          contribuindo para um futuro mais sustentável
        </p>
      </div>
    </div>
  );
}
