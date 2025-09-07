export default function ServiceCard({ title, icon, children }) {
  return (
    <article className="card">
      <img src={icon}/>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}