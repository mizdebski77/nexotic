'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

// ── Types ──────────────────────────────────────────────────
interface FormData {
  name:    string
  email:   string
  company: string
  service: string
  message: string
}

interface FormErrors {
  name?:    string
  email?:   string
  message?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const INITIAL: FormData = { name: '', email: '', company: '', service: '', message: '' }

const SERVICES = [
  'Strona internetowa',
  'Aplikacja mobilna',
  'AI & Automatyzacja',
  'Kompleksowe wdrożenie',
]

// ── Single field component ─────────────────────────────────
function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-[0.8px] mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[12px] text-red-400 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M6 4v3M6 8.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

// ── Input styles ───────────────────────────────────────────
const inputCls = (hasError?: string) => [
  'w-full bg-white border-[1.5px] rounded-xl px-4 py-3',
  'text-[14px] text-neutral-900 outline-none',
  'transition-colors duration-200 font-[inherit] placeholder:text-neutral-300',
  hasError
    ? 'border-red-300 focus:border-red-400'
    : 'border-neutral-200 focus:border-lime',
].join(' ')

// ── Success state ──────────────────────────────────────────
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
      <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M5 14l6 6L23 8" stroke="#c8f135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight mb-2">
          Wiadomość wysłana!
        </h3>
        <p className="text-[14px] text-neutral-500 max-w-xs">
          Odezwiemy się w ciągu 24 godzin. Sprawdź też folder spam — na wszelki wypadek.
        </p>
      </div>
      <button
        onClick={onReset}
        className="text-[13px] text-neutral-400 hover:text-neutral-600 underline underline-offset-2 transition-colors"
      >
        Wyślij kolejną wiadomość
      </button>
    </div>
  )
}

// ── Main form ──────────────────────────────────────────────
export function ContactForm() {
  const [form, setForm]     = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')

  function update(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    // Clear error on change
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  function clientValidate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim())    e.name    = 'Imię jest wymagane'
    if (!form.email.trim())   e.email   = 'E-mail jest wymagany'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Nieprawidłowy e-mail'
    if (!form.message.trim()) e.message = 'Wiadomość jest wymagana'
    else if (form.message.trim().length < 10) e.message = 'Wiadomość jest za krótka (min. 10 znaków)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!clientValidate()) return

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(INITIAL)
      } else if (data.errors) {
        setErrors(data.errors)
        setStatus('idle')
      } else {
        setServerError(data.message || 'Coś poszło nie tak. Spróbuj ponownie.')
        setStatus('error')
      }
    } catch {
      setServerError('Brak połączenia. Sprawdź internet i spróbuj ponownie.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-10">
        <SuccessState onReset={() => setStatus('idle')} />
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-neutral-50 border border-neutral-200 rounded-2xl p-10"
    >
      <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight mb-7">
        Napisz do nas
      </h2>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field label="Imię i nazwisko" error={errors.name}>
          <input
            type="text"
            placeholder="Jan Kowalski"
            value={form.name}
            onChange={e => update('name', e.target.value)}
            className={inputCls(errors.name)}
            disabled={status === 'loading'}
          />
        </Field>
        <Field label="E-mail" error={errors.email}>
          <input
            type="email"
            placeholder="jan@firma.pl"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            className={inputCls(errors.email)}
            disabled={status === 'loading'}
          />
        </Field>
      </div>

      {/* Company */}
      <div className="mb-4">
        <Field label="Firma (opcjonalnie)">
          <input
            type="text"
            placeholder="Nazwa firmy"
            value={form.company}
            onChange={e => update('company', e.target.value)}
            className={inputCls()}
            disabled={status === 'loading'}
          />
        </Field>
      </div>

      {/* Service */}
      <div className="mb-4">
        <Field label="Czego szukasz?">
          <select
            value={form.service}
            onChange={e => update('service', e.target.value)}
            className={inputCls() + ' appearance-none cursor-pointer'}
            disabled={status === 'loading'}
          >
            <option value="">Wybierz usługę...</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      {/* Message */}
      <div className="mb-6">
        <Field label="Opisz projekt" error={errors.message}>
          <textarea
            rows={5}
            placeholder="Co chcesz zbudować? Jaki problem rozwiązujemy? Im więcej powiesz, tym lepiej dopasujemy propozycję."
            value={form.message}
            onChange={e => update('message', e.target.value)}
            className={inputCls(errors.message) + ' resize-none'}
            disabled={status === 'loading'}
          />
        </Field>
      </div>

      {/* Server error */}
      {serverError && (
        <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-[13.5px] text-red-600">
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-lime text-ink font-bold py-3.5 rounded-xl text-[15px] hover:bg-lime-hover transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12"/>
            </svg>
            Wysyłanie...
          </>
        ) : (
          'Wyślij wiadomość →'
        )}
      </button>
    </form>
  )
}
