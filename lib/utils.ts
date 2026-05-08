import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type MetricField = string | {
  value: string
  label: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMetricValue(metric?: MetricField) {
  if (!metric) return ''
  return typeof metric === 'string' ? metric : metric.value
}

export function getMetricLabel(metric: MetricField | undefined, fallback: string) {
  if (!metric || typeof metric === 'string') return fallback
  return metric.label
}

export function formatDate(dateString: string) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC', // Fix hydration mismatch by enforcing consistent timezone
  })
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}
