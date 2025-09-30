import { useState } from "react";
import "./Servicos_hero.css";

// Array de imagens para o carrossel.
const imagens = [
  {
    imagem: "/imagens/img3.jpg",
    titulo: "Qualidade e Controle na Sua Água",
    alt: "Imagem de tubulações para sistemas de torre de água ",
    texto: "Sua Água em Boas Mãos! Reservatórios elevados de alta performance. Da instalação à operação, oferecemos segurança, qualidade e a tranquilidade de ter o controle total sobre o seu recurso mais precioso.",
  },
  {
    imagem: "/imagens/img7.jpg",
    titulo: "Abrandadores",
    alt: "Sistema de tratamento, Abrandador",
    texto: "Nossos abrandadores eliminam minerais como cálcio e magnésio, garantindo a proteção dos seus equipamentos e a eficiência máxima da sua operação.",
  },
  {
    imagem: "/imagens/img8.jpg",
    titulo: "Filtro de carvão ativado",
    alt: "Conjunto de cilindros de carvão ativado",
    texto: "O filtro de carvão ativado é a solução ideal para melhorar a qualidade sensorial da água. Ele atua na remoção de odores, sabores e cores indesejadas, além de eliminar o cloro e outros contaminantes orgânicos.",
  },
];

export default function ServicosHero() {
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = imagens.length;

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  return (
    <section className="carousel-section">
      <div className="HeroContainer">
        <div className="carousel-content">
          <img
            src={imagens[currentImageIndex].imagem}
            alt={imagens[currentImageIndex].alt}
            className="carousel-image"
          />
          <div className="carousel-titulo">
            <p>{imagens[currentImageIndex].titulo}</p>
          </div>
          <div className="carousel-texto-apoio">
            <p>{imagens[currentImageIndex].texto}</p>
          </div>
          <div className="carousel-controls">
            <button onClick={goToPreviousImage} className="carousel-button">
              &lt;
            </button>
            <button onClick={goToNextImage} className="carousel-button">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
