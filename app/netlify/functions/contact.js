export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  try {
    const payload = JSON.parse(event.body || "{}")
    const { name, email, phone, message } = payload

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO
    const from = process.env.CONTACT_FROM || "noreply@example.com"

    if (!apiKey || !to) {
      console.log("Contato recebido (simulado):", payload)
      return { statusCode: 200, body: "Contato recebido (modo simulado)." }
    }

    const html = `
      <h1>Novo contato do site Orion</h1>
      <p><strong>Nome:</strong> ${name || ""}</p>
      <p><strong>E-mail:</strong> ${email || ""}</p>
      <p><strong>Telefone:</strong> ${phone || ""}</p>
      <p><strong>Mensagem:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
    `

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from, to, subject: "Contato via site Orion", html
      })
    })

    if (!resp.ok) {
      const text = await resp.text()
      console.error("Resend error:", text)
      return { statusCode: 502, body: "Falha ao enviar e-mail" }
    }

    return { statusCode: 200, body: "Enviado" }
  } catch (e) {
    console.error(e)
    return { statusCode: 500, body: "Erro ao processar" }
  }
}
