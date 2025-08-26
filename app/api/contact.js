export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed")
    return
  }
  try {
    const { name, email, phone, message } = req.body || {}
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO
    const from = process.env.CONTACT_FROM || "noreply@example.com"

    if (!apiKey || !to) {
      console.log("Contato recebido (simulado):", { name, email, phone, message })
      res.status(200).send("Contato recebido (modo simulado).")
      return
    }

    const html = `
      <h1>Novo contato do site Orion</h1>
      <p><strong>Nome:</strong> ${name || ""}</p>
      <p><strong>E-mail:</strong> ${email || ""}</p>
      <p><strong>Telefone:</strong> ${phone || ""}</p>
      <p><strong>Mensagem:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
    `

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from, to, subject: "Contato via site Orion", html
      })
    })

    if (!r.ok) {
      const text = await r.text()
      console.error("Resend error:", text)
      res.status(502).send("Falha ao enviar e-mail")
      return
    }

    res.status(200).send("Enviado")
  } catch (e) {
    console.error(e)
    res.status(500).send("Erro ao processar")
  }
}
