from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Alexis_Olivero_Senior_Frontend_CV.pdf"

NAVY = colors.HexColor("#101827")
INK = colors.HexColor("#1f2937")
MUTED = colors.HexColor("#5f6b7a")
TEAL = colors.HexColor("#0f9d8b")
LINE = colors.HexColor("#d9e1e8")
PALE = colors.HexColor("#eef8f6")
SOFT = colors.HexColor("#f4f7f9")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=26, leading=29, textColor=colors.white, spaceAfter=3))
styles.add(ParagraphStyle(name="Role", fontName="Helvetica-Bold", fontSize=11.5, leading=15, textColor=colors.HexColor("#61d7c8"), spaceAfter=4))
styles.add(ParagraphStyle(name="Contact", fontName="Helvetica", fontSize=8.1, leading=11, textColor=colors.HexColor("#e5eaf0")))
styles.add(ParagraphStyle(name="Snapshot", fontName="Helvetica-Bold", fontSize=8.2, leading=11, textColor=NAVY))
styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=NAVY, spaceBefore=6, spaceAfter=4, borderWidth=0, borderPadding=0))
styles.add(ParagraphStyle(name="BodySmall", fontName="Helvetica", fontSize=8.65, leading=11.7, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Job", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=NAVY, spaceAfter=1))
styles.add(ParagraphStyle(name="Meta", fontName="Helvetica", fontSize=8.15, leading=10.8, textColor=MUTED, alignment=TA_LEFT, spaceAfter=3))
styles.add(ParagraphStyle(name="BulletResume", fontName="Helvetica", fontSize=8.35, leading=11.25, textColor=INK, leftIndent=10, firstLineIndent=-7, bulletIndent=1, spaceAfter=2))
styles.add(ParagraphStyle(name="Skill", fontName="Helvetica", fontSize=8.4, leading=11.5, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="SmallMuted", fontName="Helvetica", fontSize=7.7, leading=10, textColor=MUTED))


def section(title):
    return [Paragraph(title.upper(), styles["Section"]), Table([[""]], colWidths=[174 * mm], rowHeights=[0.5], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), TEAL)])), Spacer(1, 3)]


def job(title, company, dates, location, bullets):
    # A single logical text column keeps reading order predictable for ATS parsers.
    blocks = [
        Paragraph(f"{title} | <font color='#0f9d8b'>{company}</font>", styles["Job"]),
        Paragraph(f"{dates} | {location}", styles["Meta"]),
    ]
    blocks.extend(Paragraph(f"- {item}", styles["BulletResume"]) for item in bullets)
    blocks.append(Spacer(1, 4))
    return KeepTogether(blocks)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 12 * mm, 192 * mm, 12 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 7.5 * mm, "Alexis Olivero Canario | Senior Frontend Developer")
    canvas.drawRightString(192 * mm, 7.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm,
    topMargin=16 * mm, bottomMargin=17 * mm, title="Alexis Olivero Canario - Senior Frontend Developer Resume",
    author="Alexis Olivero Canario",
)

story = []
header = Table(
    [[Paragraph("Alexis Olivero Canario", styles["Name"])], [Paragraph("Senior Frontend Developer", styles["Role"])],
     [Paragraph("<link href='mailto:olivero_canario@hotmail.com' color='#e5eaf0'>olivero_canario@hotmail.com</link>  |  +1 (829) 983-2502  |  Santo Domingo, Dominican Republic<br/><link href='https://oliverodev.com' color='#e5eaf0'>oliverodev.com</link>  |  <link href='https://github.com/wolfslender' color='#e5eaf0'>github.com/wolfslender</link>  |  <link href='https://www.linkedin.com/in/alexis-olivero' color='#e5eaf0'>linkedin.com/in/alexis-olivero</link>", styles["Contact"])]],
    colWidths=[174 * mm],
)
header.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("LEFTPADDING", (0, 0), (-1, -1), 10 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 10 * mm), ("TOPPADDING", (0, 0), (-1, 0), 7 * mm), ("BOTTOMPADDING", (0, 2), (-1, 2), 7 * mm)]))
story += [header, Spacer(1, 7)]

story += section("Professional profile")
story.append(Paragraph(
    "Senior frontend developer with 8+ years of experience delivering responsive, accessible, and maintainable web platforms for government, healthcare, enterprise, and global training organizations. Skilled in React, Next.js, TypeScript, JavaScript, WordPress, and Webflow, with hands-on experience in web performance, technical SEO, CMS architecture, security, maintenance, and remote cross-functional delivery.",
    styles["BodySmall"],
))
snapshot = Table(
    [[Paragraph("8+ YEARS EXPERIENCE   |   GOVERNMENT, HEALTHCARE & GLOBAL PLATFORMS   |   REMOTE DELIVERY", styles["Snapshot"])]],
    colWidths=[174 * mm],
)
snapshot.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), PALE),
    ("BOX", (0, 0), (-1, -1), 0.5, LINE),
    ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ("TOPPADDING", (0, 0), (-1, -1), 6),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
]))
story += [Spacer(1, 3), snapshot, Spacer(1, 2)]

story += section("Core skills")
story += [
    Paragraph("<b>Frontend:</b> React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, responsive design", styles["Skill"]),
    Paragraph("<b>CMS and platforms:</b> WordPress, Webflow CMS, Sanity, WooCommerce, PHP templates, plugin maintenance", styles["Skill"]),
    Paragraph("<b>Quality:</b> WCAG-aware accessibility, semantic HTML, Core Web Vitals, Lighthouse, technical SEO, cross-browser QA", styles["Skill"]),
    Paragraph("<b>Delivery:</b> REST APIs, Git, GitHub, Agile collaboration, CI/CD concepts, Azure, Vercel, Cloudflare", styles["Skill"]),
    Spacer(1, 3),
]

story += section("Professional experience")
story.append(job("Frontend Web Developer - Part-time", "Co-Active Training Institute", "Sep 2025 - Present", "Remote | Contract through March 2027", [
    "Support a global WordPress training platform with a reported community of 150K+ users across 60+ countries.",
    "Improve responsive UI, navigation, performance, accessibility, SEO, maintenance, and platform stability.",
    "Coordinate with Arlo, Moodle, server operations, marketing, and content stakeholders on cross-system delivery.",
    "Contribute to access reviews, plugin maintenance, technical risk reduction, and production troubleshooting.",
]))
story.append(job("Frontend Web Developer", "Truenorth Corporation", "Feb 2022 - May 2025", "Santo Domingo | Remote", [
    "Administered the Puerto Rico Department of Education website for three years, publishing daily government updates and documents based on agency requirements.",
    "Created new landing pages and responsive content experiences using WordPress, Webflow, PHP, JavaScript, HTML, and CSS.",
    "Performed recurring website maintenance, plugin updates, content QA, security implementation, and production troubleshooting.",
    "Supported additional corporate and public-sector projects across CMS architecture, API integrations, migrations, performance, accessibility, technical SEO, and Azure-hosted environments.",
]))
story.append(job("Frontend Developer", "D.MED Healthcare Group", "May 2021 - Sep 2022", "Germany | Remote", [
    "Designed and implemented responsive healthcare interfaces using WordPress, PHP, JavaScript, HTML, and CSS.",
    "Improved content hierarchy, service journeys, reusable UI patterns, and cross-device behavior.",
    "Built JavaScript-powered forms and collaborated remotely on production content and interface updates.",
]))
story.append(PageBreak())
story += section("Additional experience")
story.append(job("IT & Intelligence Analyst", "DNCD", "Jun 2018 - Feb 2023", "Santo Domingo", [
    "Supported security audits, incident response, policy updates, infrastructure hardening, and access controls.",
    "Worked with Azure Active Directory and delivered cybersecurity awareness training to internal teams.",
    "Applied security discipline that now informs frontend, CMS, access, and production-delivery decisions.",
]))
story.append(job("Full-stack Web Developer - Part-time", "Cybernetips", "Nov 2017 - Jul 2018", "Miami, FL | Remote", [
    "Built client-facing web experiences and integrated frontend interfaces with APIs and backend services.",
    "Supported hosting, server administration, availability, and security for client platforms.",
]))

story += section("Selected work")
selected = [
    ("Puerto Rico Department of Education", "Three years of government website administration, including landing pages, daily content, document publishing, plugin updates, maintenance, and web security implementation."),
    ("Media Audit", "Independent WordPress plugin product with PHP, MySQL, JavaScript/AJAX, batch processing, filtering, exports, page-builder integrations, and recoverable cleanup workflows."),
    ("Co-Active Training Institute", "Ongoing frontend and WordPress support for responsive UI, navigation, performance, accessibility, SEO, maintenance, and connected platform coordination."),
]
for name, description in selected:
    story.append(Paragraph(f"<b>{name}</b> - {description}", styles["BodySmall"]))

story += section("Education & certifications")
story += [
    Paragraph("<b>Technical secondary studies in Computer Science</b> | Liceo Minerva Mirabal | 2012-2015", styles["BodySmall"]),
    Paragraph("<b>Certifications:</b> CompTIA Security+ | AWS Cloud Practitioner Essentials | Webflow 101 | Scrum Fundamentals | IBM IT Fundamentals", styles["BodySmall"]),
    Spacer(1, 5),
]

story += section("Languages & availability")
story.append(Paragraph("Spanish: Native | English: Professional working proficiency | Based in Santo Domingo | Open to remote roles and relocation opportunities", styles["BodySmall"]))

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
