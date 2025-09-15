import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Falha no envio')
      setStatus('sent')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} aria-label="Formulário de contato">
      <div style={{display:'grid', gap:12}}>
        <input name="name" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <input name="phone" placeholder="Telefone/WhatsApp" />
        <textarea name="message" placeholder="Mensagem" rows={5} required></textarea>
        <button className="enviarMensagem" type="submit" disabled={status==='sending'}>
          {status==='sending' ? 'Enviando…' : 'Enviar mensagem'}
        </button>
        {status==='sent' && <p style={{color:'green'}}>Mensagem enviada! Em breve entraremos em contato.</p>}
        {status==='error' && <p style={{color:'crimson'}}>Não foi possível enviar. Tente novamente mais tarde.</p>}
      </div>
    </form>
  )
}
