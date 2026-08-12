import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactSection } from '@/components/sections/contact-section'
import { I18nProvider } from '@/components/i18n-provider'

const renderContact = () => render(
  <I18nProvider>
    <ContactSection />
  </I18nProvider>,
)

describe('ContactSection', () => {
  it('renders the contact options', () => {
    renderContact()
    expect(screen.getByText(/holding your website back/i)).toBeDefined()
    expect(screen.getByText(/Prepare your request/i)).toBeDefined()
    expect(screen.getByText(/Send an Email/i)).toBeDefined()
    expect(screen.getByText(/Book a Strategy Call/i)).toBeDefined()
    expect(screen.getByText(/find me on social media/i)).toBeDefined()
  })

  it('contains correctly formatted links for email and whatsapp', () => {
    renderContact()

    const emailLink = screen.getByText(/Send an Email/i).closest('a')
    expect(emailLink?.getAttribute('href')).toContain('mailto:')

    // WhatsApp link check
    const whatsappLink = screen.getByText(/Send via WhatsApp/i).closest('a')
    expect(whatsappLink?.getAttribute('href')).toContain('https://wa.me/')
  })
})
