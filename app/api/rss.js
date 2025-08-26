export default async function handler(req, res) {
  try {
    const url = process.env.BLOGSPOT_RSS_URL || "https://SEU_BLOG.blogspot.com/feeds/posts/default?alt=rss"
    const r = await fetch(url)
    const xml = await r.text()
    res.setHeader("Content-Type", "application/rss+xml; charset=utf-8")
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=86400")
    res.status(200).send(xml)
  } catch (e) {
    res.status(500).send("Erro ao obter RSS")
  }
}
