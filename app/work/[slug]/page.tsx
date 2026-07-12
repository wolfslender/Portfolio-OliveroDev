import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { siteConfig } from "@/lib/config"
import type { Metadata } from "next"
import type { Project } from "@/lib/types"
import { ProjectDetail } from "@/components/project-detail"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }

  return {
    title: project.title,
    description: project.description,
    keywords: [
      project.title,
      project.industry,
      project.projectType,
      ...project.tags,
      "case study",
      "web development",
    ].filter(Boolean) as string[],
    alternates: {
      canonical: `${siteConfig.url}/work/${slug}/`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/work/${slug}/`,
      type: "article",
      images: [{ url: `${siteConfig.url}${project.image}`, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [`${siteConfig.url}${project.image}`],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug) as Project | undefined
  if (!project) notFound()

  const related = (projects as Project[])
    .filter((p) => p.slug !== slug && (p.category === project.category || p.industry === project.industry))
    .slice(0, 3)

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/work/${slug}/`,
    image: `${siteConfig.url}${project.image}`,
    author: { "@type": "Person", name: siteConfig.author },
    creator: { "@type": "Person", name: siteConfig.author, url: siteConfig.url },
    genre: project.projectType,
    keywords: project.tags.join(", "),
    about: project.industry,
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "Work", path: "/work/" },
        { name: project.title, path: `/work/${slug}/` },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProjectDetail project={project} related={related} />
    </>
  )
}
