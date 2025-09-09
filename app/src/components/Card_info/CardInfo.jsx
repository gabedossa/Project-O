import "./CardInfo.css";

export default function CardInfo({ title, imagem, texto }) {
  return (
    <article className="cardInfo">
      <div className="imageContainer">
        <img src={imagem} />
      </div>
      <div className="texContainer">
      <h3>{title}</h3>
      <p>{texto}</p>
      </div>
    </article>
  );
}
