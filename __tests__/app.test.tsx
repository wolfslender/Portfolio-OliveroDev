import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cn } from '@/lib/utils'
import { projects, services } from '@/lib/data'
import { Footer } from '@/components/sections/footer'
import { I18nProvider } from '@/components/i18n-provider'

// Test Suite 1: Utilities
describe('Utility Functions', () => {
  it('cn() merges class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500', { 'hidden': true, 'block': false })
    expect(result).toContain('text-red-500')
    expect(result).toContain('bg-blue-500')
    expect(result).toContain('hidden')
    expect(result).not.toContain('block')
  })

  it('cn() handles Tailwind conflicts via tailwind-merge', () => {
    // p-4 should be overwritten by p-8 if they conflict and twMerge handles it
    const result = cn('p-4', 'p-8')
    expect(result).toBe('p-8')
  })
})

// Test Suite 2: Data Integrity
describe('Data Integrity', () => {
  it('Services list includes optimization and security support', () => {
    const hasSecurity = services.some(s => s.id === 'optimize-protect')
    expect(hasSecurity).toBe(true)
  })

  it('Services list has valid structure', () => {
    services.forEach(service => {
      expect(service).toHaveProperty('title')
      expect(service).toHaveProperty('description')
      expect(service).toHaveProperty('id')
      expect(service).toHaveProperty('painPoint')
      expect(service).toHaveProperty('evidence')
      expect(service).toHaveProperty('icon')
      expect(service).toHaveProperty('features')
    })
  })

  it('keeps a meaningful frontend portfolio category', () => {
    const frontendProjects = projects.filter((project) => project.category === 'frontend')
    expect(frontendProjects.length).toBeGreaterThanOrEqual(4)
    expect(frontendProjects.some((project) => project.title.includes('Co-Active'))).toBe(true)
  })

  it('does not publish placeholder project links as actionable URLs', () => {
    projects.forEach((project) => {
      expect(project.demo).not.toBe('')
      expect(project.github).toBeDefined()
    })
  })
})

// Test Suite 3: Components
describe('Footer Component', () => {
  it('renders Services section correctly', () => {
    render(
      <I18nProvider>
        <Footer />
      </I18nProvider>,
    )

    // Check if "Services" header exists
    expect(screen.getAllByText('Services')[0]).toBeDefined()

    // Check if a current service is visible in the list
    expect(screen.getByText('WordPress Speed Optimization')).toBeDefined()

    // Check if Quick Links exist
    expect(screen.getByText('Quick Links')).toBeDefined()

    // Check legal pages
    expect(screen.getByText('Privacy Policy')).toBeDefined()
    expect(screen.getByText('Terms of Service')).toBeDefined()
  })
})
