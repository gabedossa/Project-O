import { useEffect, useState } from 'react'

/**
 * This component tries to fetch the Blogspot RSS through a serverless proxy at /api/rss.
 * If it fails, it falls back to just rendering a button to the Blogspot homepage.
 */
export default function BlogPosts({ limit = 3, blogHomepage = "https://SEU_BLOG.blogspot.com" }) {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/rss')
        if (!res.ok) throw new Error('RSS fetch failed')
        const xml = await res.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(xml, 'application/xml')
        const items = Array.from(doc.querySelectorAll('item')).slice(0, limit).map(item => ({
          title: item.querySelector('title')?.textContent ?? 'Post',
          link: item.querySelector('link')?.textContent ?? blogHomepage,
          pubDate: item.querySelector('pubDate')?.textContent
        }))
        setPosts(items)
      } catch (e) {
        setError(e.message)
      }
    }
    load()
  }, [limit, blogHomepage])

  if (error) {
    return (
      <div>
        <p>Não foi possível carregar os artigos agora.</p>
        <a className="cta" href={blogHomepage} target="_blank" rel="noopener">Ver blog</a>
      </div>
    )
  }

  if (!posts.length) return <p>Carregando artigos…</p>

  return (
    <div className="blog-list" role="list">
      {posts.map((p, i) => (
        <article className="blog-item" key={i} role="listitem">
          <a href={p.link} target="_blank" rel="noopener">{p.title}</a>
          {p.pubDate && <div style={{opacity:.7, marginTop:6, fontSize:14}}>{new Date(p.pubDate).toLocaleDateString('pt-BR')}</div>}
        </article>
      ))}
    </div>
  )
}
