import { useRef, useState } from 'react'
import { site } from '../data/site'
import Button from './Button'
import Icon from './Icon'
import './ContactForm.css'

const empty = { name: '', email: '', projectType: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// WhatsApp chat link with the form's details already typed in
function whatsappFormLink({ name, email, projectType, message }) {
  const text = [
    `Hi Izuchukwu, I'm ${name.trim()} (${email.trim()}).`,
    `Project type: ${projectType}`,
    '',
    message.trim(),
  ].join('\n')
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
}

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.projectType) errors.projectType = 'Please choose a project type.'
  if (values.message.trim().length < 10) errors.message = 'Please tell me a little more (at least 10 characters).'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | whatsapp
  const [waUrl, setWaUrl] = useState('')
  const formRef = useRef(null)
  const successRef = useRef(null)

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (touched[e.target.name]) setErrors(validate(next))
  }

  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(values))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, projectType: true, message: true })
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }

    // No webhook yet: hand the message to WhatsApp, pre-filled, for the visitor to send.
    // (Set `contactWebhookUrl` in src/data/site.js to send straight to n8n instead.)
    if (!site.contactWebhookUrl) {
      const url = whatsappFormLink(values)
      setWaUrl(url)
      // Open synchronously inside the submit handler so popup blockers allow it
      const win = window.open(url, '_blank')
      if (win) win.opener = null
      else window.location.href = url
      setStatus('whatsapp')
      setValues(empty)
      setTouched({})
      requestAnimationFrame(() => successRef.current?.focus())
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.contactWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, submittedAt: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
      setValues(empty)
      setTouched({})
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setStatus('error')
    }
  }

  if (status === 'whatsapp') {
    return (
      <div className="contact-form contact-form--success" ref={successRef} tabIndex={-1} role="status">
        <span className="contact-form__success-icon">
          <Icon name="whatsapp" size={24} />
        </span>
        <h3 className="contact-form__success-title">Almost there: tap send in WhatsApp.</h3>
        <p className="contact-form__success-text">
          Your message is ready in WhatsApp. Just press send and I will get back to you. If WhatsApp did not open, use
          the button below.
        </p>
        <div className="contact-form__success-actions">
          <Button href={waUrl} external icon="whatsapp" iconPosition="start">
            Open WhatsApp
          </Button>
          <Button variant="ghost" onClick={() => setStatus('idle')}>
            Write another message
          </Button>
        </div>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="contact-form contact-form--success" ref={successRef} tabIndex={-1} role="status">
        <span className="contact-form__success-icon">
          <Icon name="check" size={24} strokeWidth={2.25} />
        </span>
        <h3 className="contact-form__success-title">Message received. Thank you!</h3>
        <p className="contact-form__success-text">
          I will read it and reply to you by email. If it is urgent, message me on WhatsApp.
        </p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  const fieldProps = (name) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': touched[name] && errors[name] ? true : undefined,
    'aria-describedby': touched[name] && errors[name] ? `cf-${name}-error` : undefined,
  })

  const fieldError = (name) =>
    touched[name] && errors[name] ? (
      <p className="contact-form__error" id={`cf-${name}-error`}>
        {errors[name]}
      </p>
    ) : null

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate ref={formRef}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-name" className="contact-form__label">
            Name
          </label>
          <input type="text" autoComplete="name" className="contact-form__input" {...fieldProps('name')} />
          {fieldError('name')}
        </div>

        <div className="contact-form__field">
          <label htmlFor="cf-email" className="contact-form__label">
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            className="contact-form__input"
            {...fieldProps('email')}
          />
          {fieldError('email')}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-projectType" className="contact-form__label">
          Project type
        </label>
        <div className="contact-form__select-wrap">
          <select className="contact-form__input contact-form__select" {...fieldProps('projectType')}>
            <option value="" disabled>
              Choose one
            </option>
            {site.contact.projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        {fieldError('projectType')}
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message" className="contact-form__label">
          Message
        </label>
        <textarea
          rows={5}
          className="contact-form__input contact-form__textarea"
          placeholder="What are you building, and what should it do?"
          {...fieldProps('message')}
        />
        {fieldError('message')}
      </div>

      {status === 'error' && (
        <p className="contact-form__error contact-form__error--form" role="alert">
          Something went wrong sending your message. Please try again, or email me directly.
        </p>
      )}

      {site.contactWebhookUrl ? (
        <Button type="submit" icon="arrowRight" disabled={status === 'sending'} className="contact-form__submit">
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </Button>
      ) : (
        <>
          <Button type="submit" icon="whatsapp" iconPosition="start" className="contact-form__submit">
            Send on WhatsApp
          </Button>
          <p className="contact-form__note">Opens WhatsApp with your message ready to send.</p>
        </>
      )}
    </form>
  )
}
