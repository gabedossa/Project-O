import react, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./CardSobreImagem.css";
import CarrouselImg from "../carrousel/CarrouseImg.jsx";

export default function CardSobreImagem() {
  return (
    <div className="CardSobreImagem">
      <div>
        <CarrouselImg imagem="" />
      </div>
      <div className="Texto_sobre">
        <h2>Quem somos</h2>
        <p>
          Desde 2012, somos uma empresa de engenharia especializada em
          tratamento de água e efluentes. Nascemos no fornecimento de filtros e
          insumos e evoluímos para entregar soluções ponta a ponta —
          diagnóstico, projeto, implantação e operação assistida — com foco em
          reuso, eficiência e conformidade. Nosso time multidisciplinar
          (engenharia sanitarista, ambiental e química) combina experiência de
          campo e rigor técnico para garantir desempenho e segurança em cada
          sistema.
        </p>
      </div>
    </div>
  );
}
