export default function ServiceCard({ title, icon, children }) {
  return (
    <article className="card cta">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}