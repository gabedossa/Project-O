export default function ServiceCard({ title, children }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}
