export async function handler() {
  try {
    const url = process.env.BLOGSPOT_RSS_URL || "https://SEU_BLOG.blogspot.com/feeds/posts/default?alt=rss"
    const res = await fetch(url)
    const xml = await res.text()
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      },
      body: xml
    }
  } catch (e) {
    return { statusCode: 500, body: "Erro ao obter RSS" }
  }
}
