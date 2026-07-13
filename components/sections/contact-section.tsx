"use client"

import { useState, useEffect } from "react"
import { Mail, ArrowRight, Calendar, Copy, Check, Send, Globe2 } from "lucide-react"
import { useContact, useContactPage } from "@/hooks/use-contact"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SocialLinks } from "@/components/social-links"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"

const PopupModal = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupModal),
  { ssr: false }
)

export function ContactSection() {
  const contact = useContact()
  const contactPage = useContactPage()
  const { t } = useTranslation()
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({
    service: "",
    website: "",
    platform: "",
    problem: "",
    timeline: "",
    budget: "",
  })
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
    const service = searchParams?.get("service")
    if (service) {
      setForm((current) => ({ ...current, service }))
    }
    if (searchParams?.get("audit") === "true") {
      setForm((current) => ({ ...current, service: t('contactPage.form.services.audit') }))
    }
  }, [searchParams, t])

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    toast.success("Email copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  const getWhatsappUrl = () => {
    const whatsappNumber = contact.phone.replace(/\D/g, "")
    const finalWhatsappNumber = whatsappNumber.length === 10 ? `1${whatsappNumber}` : whatsappNumber
    return `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(buildMessage())}`
  }

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const buildMessage = () => {
    const lines = [
      t('contactPage.form.messageIntro'),
      "",
      `${t('contactPage.form.serviceLabel')}: ${form.service || t('contactPage.form.notSpecified')}`,
      `${t('contactPage.form.websiteLabel')}: ${form.website || t('contactPage.form.notSpecified')}`,
      `${t('contactPage.form.platformLabel')}: ${form.platform || t('contactPage.form.notSpecified')}`,
      `${t('contactPage.form.timelineLabel')}: ${form.timeline || t('contactPage.form.notSpecified')}`,
      `${t('contactPage.form.budgetLabel')}: ${form.budget || t('contactPage.form.notSpecified')}`,
      "",
      `${t('contactPage.form.problemLabel')}:`,
      form.problem || t('contactPage.form.notSpecified'),
    ]

    return lines.join("\n")
  }

  const getMailtoUrl = () => {
    const subject = form.service
      ? `${t('contactPage.form.emailSubjectPrefix')}: ${form.service}`
      : t('contactPage.form.emailSubject')

    return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div aria-hidden="true" className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <ScrollReveal>
          <div className="space-y-6 text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {contactPage.title}
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
              {t('contactPage.description')}
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto italic">
              {t('contactPage.quote')}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div className="rounded-2xl border border-border bg-background/80 p-6 md:p-8 shadow-xl shadow-black/5">
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
                  {t('contactPage.form.eyebrow')}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {t('contactPage.form.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contactPage.form.description')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-2">
                  <span className="text-sm font-medium">{t('contactPage.form.serviceLabel')}</span>
                  <select
                    value={form.service}
                    onChange={(event) => updateField("service", event.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  >
                    <option value="">{t('contactPage.form.selectPlaceholder')}</option>
                    <option value={t('contactPage.form.services.audit')}>{t('contactPage.form.services.audit')}</option>
                    <option value={t('contactPage.form.services.optimize')}>{t('contactPage.form.services.optimize')}</option>
                    <option value={t('contactPage.form.services.recovery')}>{t('contactPage.form.services.recovery')}</option>
                    <option value={t('contactPage.form.services.migration')}>{t('contactPage.form.services.migration')}</option>
                    <option value={t('contactPage.form.services.build')}>{t('contactPage.form.services.build')}</option>
                    <option value={t('contactPage.form.services.partner')}>{t('contactPage.form.services.partner')}</option>
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium">{t('contactPage.form.websiteLabel')}</span>
                  <div className="relative">
                    <Globe2 aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      value={form.website}
                      onChange={(event) => updateField("website", event.target.value)}
                      placeholder="https://"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </div>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium">{t('contactPage.form.platformLabel')}</span>
                  <select
                    value={form.platform}
                    onChange={(event) => updateField("platform", event.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  >
                    <option value="">{t('contactPage.form.selectPlaceholder')}</option>
                    <option>WordPress</option>
                    <option>Webflow</option>
                    <option>Next.js / React</option>
                    <option>Shopify / WooCommerce</option>
                    <option>{t('contactPage.form.platforms.notSure')}</option>
                    <option>{t('contactPage.form.platforms.other')}</option>
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium">{t('contactPage.form.timelineLabel')}</span>
                  <select
                    value={form.timeline}
                    onChange={(event) => updateField("timeline", event.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  >
                    <option value="">{t('contactPage.form.selectPlaceholder')}</option>
                    <option>{t('contactPage.form.timelines.urgent')}</option>
                    <option>{t('contactPage.form.timelines.month')}</option>
                    <option>{t('contactPage.form.timelines.quarter')}</option>
                    <option>{t('contactPage.form.timelines.exploring')}</option>
                  </select>
                </label>

                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-medium">{t('contactPage.form.budgetLabel')}</span>
                  <select
                    value={form.budget}
                    onChange={(event) => updateField("budget", event.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  >
                    <option value="">{t('contactPage.form.selectPlaceholder')}</option>
                    <option>{t('contactPage.form.budgets.audit')}</option>
                    <option>{t('contactPage.form.budgets.small')}</option>
                    <option>{t('contactPage.form.budgets.medium')}</option>
                    <option>{t('contactPage.form.budgets.large')}</option>
                    <option>{t('contactPage.form.budgets.notSure')}</option>
                  </select>
                </label>

                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-medium">{t('contactPage.form.problemLabel')}</span>
                  <textarea
                    value={form.problem}
                    onChange={(event) => updateField("problem", event.target.value)}
                    placeholder={t('contactPage.form.problemPlaceholder')}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={getMailtoUrl()}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/20"
                >
                  <Send aria-hidden="true" className="mr-2 w-4 h-4" />
                  {t('contactPage.form.sendPreparedEmail')}
                </a>
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 font-bold transition-colors hover:border-green-500/50 hover:text-green-600"
                >
                  {t('contactPage.form.sendWhatsapp')}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="group flex items-center justify-between p-6 bg-primary text-primary-foreground rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer w-full border-none"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Calendar aria-hidden="true" className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold text-lg">{t('contactPage.bookCall')}</span>
                    <span className="text-sm opacity-80">{t('contactPage.freeConsultation')}</span>
                  </div>
                </div>
                <ArrowRight aria-hidden="true" className="w-5 h-5 group-hover:translate-x-1 transition-all" />
              </button>

              <div className="group relative">
                <a
                  href={getMailtoUrl()}
                  className="flex items-center justify-between p-6 bg-background border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <Mail aria-hidden="true" className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <span className="block font-semibold text-lg">{t('contactPage.sendEmail')}</span>
                      <span className="text-sm text-muted-foreground">{contact.email}</span>
                    </div>
                  </div>
                  <ArrowRight aria-hidden="true" className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
                <button
                  onClick={(e) => { e.preventDefault(); copyEmail(); }}
                  className="absolute right-14 top-1/2 -translate-y-1/2 p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                  title={t('contactPage.copyEmail')}
                  aria-label={t('contactPage.copyEmail')}
                >
                  {copied ? <Check aria-hidden="true" className="w-4 h-4 text-green-500" /> : <Copy aria-hidden="true" className="w-4 h-4" />}
                </button>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6">
                <p className="font-semibold mb-3">{t('contactPage.response.title')}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>{t('contactPage.response.item1')}</li>
                  <li>{t('contactPage.response.item2')}</li>
                  <li>{t('contactPage.response.item3')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-16 text-center border-t border-border/50 mt-12">
            <p className="text-muted-foreground mb-6 font-medium">{contactPage.socialConnect}</p>
            <div className="flex justify-center">
              <SocialLinks variant="boxed" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {mounted && (
        <PopupModal
          url={contact.calendly}
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )}
    </section>
  )
}
