import type { LandingPageData } from "./landing-pages"

export const landingPagesEs: LandingPageData[] = [
  {
    slug: "website-audit",
    hero: {
      eyebrow: "Auditoría Web",
      title: "Descubre exactamente qué está frenando tu sitio web",
      description:
        "Una auditoría técnica y de conversión enfocada en velocidad, seguridad, SEO, UX, plugins, alojamiento y mantenimiento, entregada como un plan escrito y priorizado.",
      primaryCta: { label: "Solicitar una auditoría", href: "/es/contact?service=Auditor%C3%ADa%20web%20y%20plan%20de%20acci%C3%B3n" },
      secondaryCta: { label: "Ver mi trabajo", href: "/es/work" },
    },
    problem: {
      title: "¿Te suena familiar?",
      symptoms: [
        "Tu sitio se siente lento, pero no sabes si el problema es el alojamiento, las imágenes, los plugins o el tema.",
        "No tienes claro si debes optimizar, reconstruir, migrar o asegurar la web primero.",
        "Escuchas sobre PageSpeed, Core Web Vitals y riesgos de seguridad, pero nada se está midiendo.",
        "No tienes una lista de prioridades clara — todo parece urgente y nada se hace.",
      ],
    },
    whatICheck: {
      title: "Qué cubre la auditoría",
      items: [
        "Medición de rendimiento y Core Web Vitals",
        "Fundamentos de seguridad: plugins, usuarios, accesos y puntos de entrada expuestos",
        "Revisión de riesgos de WordPress y plugins",
        "Fundamentos técnicos de SEO: sitemap, robots, datos estructurados",
        "Fricción de UX y bloqueantes de conversión",
        "Señales de alerta en alojamiento y servidor",
        "Hoja de ruta priorizada con próximos pasos claros",
      ],
    },
    process: {
      title: "Cómo funciona",
      steps: [
        { number: "01", title: "Revisión", description: "Analizo el rendimiento, seguridad, plugins, alojamiento y configuración técnica de tu sitio." },
        { number: "02", title: "Priorización", description: "Separo los riesgos urgentes de las mejoras secundarias según impacto en el negocio." },
        { number: "03", title: "Entrega", description: "Recibes una auditoría escrita clara con un plan de acción priorizado." },
        { number: "04", title: "Decisión", description: "Eliges si implementas las correcciones, me contratas o guardas el plan como referencia." },
      ],
    },
    proof: {
      title: "Por qué funciona",
      items: [
        { company: "Co-Active Training Institute", description: "Trabajo de revisión de seguridad y accesos en una plataforma WordPress global con 150K+ usuarios." },
        { company: "Truenorth Corporation", description: "Auditorías técnicas en WordPress, Webflow y sitios de sector público durante 3 años de empleo." },
        { company: "Departamento de Educación PR", description: "Revisión de rendimiento y accesibilidad para un sitio web WordPress de sector público." },
      ],
    },
    deliverables: {
      title: "Qué recibes",
      items: ["Resumen de auditoría", "Lista de prioridades", "Notas de riesgo", "Siguiente paso recomendado"],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { question: "¿En qué se diferencia de la revisión web gratuita?", answer: "La revisión gratuita es una primera mirada breve y general con algunas observaciones. Esta auditoría profesional es un servicio de pago con análisis profundo, hallazgos documentados, notas de riesgo y un plan de acción priorizado." },
        { question: "¿Qué incluye la auditoría?", answer: "Rendimiento, seguridad, fundamentos técnicos de SEO, riesgo de plugins, accesos de usuario, hosting y fricción de UX. Todo se documenta en un plan de acción priorizado." },
        { question: "¿También implementas las correcciones?", answer: "Sí. Después de la auditoría, puedes implementarlas por tu cuenta o contratarme para hacerlo." },
        { question: "¿Cuánto tiempo tarda?", answer: "La mayoría de las auditorías se entregan dentro de 3-5 días laborables después de recibir acceso completo a tu sitio y alojamiento." },
        { question: "¿Esto es solo para WordPress?", answer: "No. La auditoría cubre cualquier plataforma: WordPress, Webflow, Next.js o desarrollos personalizados." },
        { question: "¿Recibiré un informe escrito?", answer: "Sí. Recibes un documento claro con hallazgos, notas de riesgo y una hoja de ruta priorizada." },
      ],
    },
    finalCta: {
      title: "¿Listo para saber qué está frenando tu sitio web?",
      description: "Solicita tu auditoría y recibe un plan de acción priorizado en días.",
      primaryCta: { label: "Solicitar una auditoría", href: "/es/contact?service=Auditor%C3%ADa%20web%20y%20plan%20de%20acci%C3%B3n" },
    },
  },
  {
    slug: "wordpress-speed-optimization",
    hero: {
      eyebrow: "Optimización de Velocidad WordPress",
      title: "Haz que tu sitio WordPress sea más rápido sin reconstruir todo",
      description:
        "Identifico y corrijo los cuellos de botella detrás de la carga lenta, PageSpeed bajo y un WordPress pesado, sin recurrir automáticamente a una reconstrucción.",
      primaryCta: { label: "Solicitar optimización", href: "/es/contact?service=Optimizaci%C3%B3n%20de%20velocidad%20WordPress" },
      secondaryCta: { label: "Ver mi trabajo", href: "/es/work" },
    },
    problem: {
      title: "¿Tu sitio está frenando tu negocio?",
      symptoms: [
        "Tus páginas tardan demasiado en cargar y los visitantes se van antes de ver tu contenido.",
        "Los puntajes de PageSpeed son bajos y no sabes cuál es la causa.",
        "Constructores de páginas pesados, imágenes grandes y demasiados plugins están arrastrando el rendimiento.",
        "Tu alojamiento se siente lento, pero no estás seguro de si el servidor o el sitio es la causa.",
      ],
    },
    whatICheck: {
      title: "Qué optimizo",
      items: [
        "Auditoría de rendimiento con medición de Core Web Vitals",
        "Revisión de cuellos de botella en plugins y temas",
        "Optimización de imágenes y recursos",
        "Revisión de configuración de caché y CDN",
        "Mejoras a nivel de base de datos y servidor",
        "Mediciones antes y después",
      ],
    },
    process: {
      title: "Cómo funciona",
      steps: [
        { number: "01", title: "Auditoría", description: "Mido tu rendimiento actual e identifico los cuellos de botella más grandes." },
        { number: "02", title: "Priorización", description: "Me enfoco en cambios con mayor impacto primero — sin reconstrucciones innecesarias." },
        { number: "03", title: "Implementación", description: "Aplico correcciones específicas en imágenes, plugins, caché, código y configuración del servidor." },
        { number: "04", title: "Medición", description: "Recibes comparativas antes y después que muestran mejoras reales." },
      ],
    },
    proof: {
      title: "Probado en proyectos reales",
      items: [
        { company: "Co-Active Training Institute", description: "Optimización de rendimiento para una plataforma WordPress global que sirve a 150K+ usuarios en 60 países." },
        { company: "Truenorth Corporation", description: "Logramos puntajes de PageSpeed de hasta 98 en sitios de sector público durante 3 años de empleo." },
      ],
    },
    deliverables: {
      title: "Qué recibes",
      items: ["Auditoría de rendimiento", "Correcciones de optimización", "Informes antes y después", "Recomendaciones para mantener la velocidad"],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { question: "¿Qué tan rápido quedará mi sitio?", answer: "Los resultados dependen del estado actual, pero la mayoría de los sitios mejora significativamente después de correcciones específicas. Mido antes y después para que puedas ver la diferencia." },
        { question: "¿Reconstruyes el sitio?", answer: "No. Me enfoco en optimización específica — arreglar los cuellos de botella reales sin reconstrucciones innecesarias." },
        { question: "¿Esto es solo para WordPress?", answer: "Este servicio está enfocado en WordPress, pero puedo optimizar otras plataformas también." },
        { question: "¿Arreglas los Core Web Vitals?", answer: "Sí. Reviso y mejoro LCP, INP y CLS como parte del proceso de optimización." },
      ],
    },
    finalCta: {
      title: "¿Listo para hacer que tu sitio WordPress sea más rápido?",
      description: "Solicita una auditoría de rendimiento y recibe un plan claro para mejorar los tiempos de carga.",
      primaryCta: { label: "Solicitar optimización", href: "/es/contact?service=Optimizaci%C3%B3n%20de%20velocidad%20WordPress" },
    },
  },
  {
    slug: "wordpress-security",
    hero: {
      eyebrow: "Seguridad WordPress",
      title: "Refuerza WordPress antes de que un riesgo se convierta en incidente",
      description:
        "Reviso software desactualizado, accesos expuestos y mantenimiento débil, y refuerzo el sitio alrededor de los riesgos más importantes.",
      primaryCta: { label: "Solicitar revisión de seguridad", href: "/es/contact?service=Seguridad%20WordPress" },
      secondaryCta: { label: "Ver mi trabajo", href: "/es/work" },
    },
    problem: {
      title: "¿Tu sitio WordPress está expuesto?",
      symptoms: [
        "Tienes plugins, temas o versiones de WordPress core desactualizados sin actualizar en meses.",
        "Miembros anteriores del equipo o usuarios inactivos aún tienen acceso de administrador.",
        "Puntos de entrada públicos o páginas de inicio de sesión están expuestos sin protección.",
        "No tienes visibilidad de los riesgos de seguridad, las copias de respaldo o los cambios recientes.",
      ],
    },
    whatICheck: {
      title: "Qué reviso",
      items: [
        "Revisión de seguridad de plugins, temas y núcleo de WordPress",
        "Limpieza de accesos de usuario y revisión de roles",
        "Evaluación de riesgo de actualización de plugins y temas",
        "Refuerzo básico: protección del inicio de sesión, cabeceras y permisos de archivos",
        "Verificación de copias de respaldo y capacidad de restauración",
        "Recomendaciones de mantenimiento",
      ],
    },
    process: {
      title: "Cómo funciona",
      steps: [
        { number: "01", title: "Revisión", description: "Escaneo tu sitio en busca de plugins desactualizados, puntos de entrada expuestos y riesgos de acceso." },
        { number: "02", title: "Priorización", description: "Clasifico las vulnerabilidades por nivel de riesgo para que sepas qué necesita atención primero." },
        { number: "03", title: "Refuerzo", description: "Aplico correcciones específicas para reducir la exposición y mejorar tu postura de seguridad." },
        { number: "04", title: "Documentación", description: "Recibes un resumen de lo que se encontró, lo que se arregló y qué mantener." },
      ],
    },
    proof: {
      title: "Basado en trabajo real de seguridad",
      items: [
        { company: "Co-Active Training Institute", description: "Refuerzo de seguridad en una plataforma WordPress global: puntos de entrada expuestos, plugins desactualizados, usuarios inactivos y revisiones de acceso." },
        { company: "Truenorth Corporation", description: "Mantenimiento y refuerzo de seguridad en entornos WordPress y Azure durante 3 años." },
      ],
    },
    deliverables: {
      title: "Qué recibes",
      items: ["Informe de revisión de seguridad", "Lista priorizada de vulnerabilidades", "Correcciones de seguridad", "Recomendaciones de mantenimiento"],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { question: "¿Esto garantiza que mi sitio no será hackeado?", answer: "Ningún servicio puede garantizar cero riesgo. Esta revisión reduce vulnerabilidades conocidas y mejora significativamente tu postura de seguridad." },
        { question: "¿Corriges los problemas durante la revisión?", answer: "Sí. Aplico correcciones de seguridad específicas durante el proceso. El alcance depende de lo que encuentre." },
        { question: "¿Esto es solo para WordPress?", answer: "Este servicio está enfocado en WordPress, pero los principios de seguridad aplican en todas las plataformas." },
        { question: "¿Cada cuánto debo hacer esto?", answer: "Recomiendo al menos una vez al año, o siempre que haya cambios en plugins, usuarios o hosting." },
      ],
    },
    finalCta: {
      title: "¿Listo para reducir el riesgo de seguridad en tu WordPress?",
      description: "Solicita una revisión de seguridad y obtén una imagen clara de dónde estás parado.",
      primaryCta: { label: "Solicitar revisión de seguridad", href: "/es/contact?service=Seguridad%20WordPress" },
    },
  },
  {
    slug: "hacked-wordpress-recovery",
    hero: {
      eyebrow: "Recuperación de WordPress Hackeado",
      title: "Recupera tu WordPress hackeado y cierra la puerta detrás del atacante",
      description:
        "Elimino malware, usuarios sospechosos, redirecciones y spam, y después refuerzo el sitio para reducir la posibilidad de otro incidente.",
      primaryCta: { label: "Solicitar ayuda de recuperación", href: "/es/contact?service=Recuperaci%C3%B3n%20WordPress%20hackeado" },
      secondaryCta: { label: "Ver mi trabajo", href: "/es/work" },
    },
    problem: {
      title: "¿Tu sitio WordPress está comprometido?",
      symptoms: [
        "Tu sitio muestra advertencias del navegador, redirige visitantes o muestra contenido de spam.",
        "Ves usuarios de administrador que no reconoces o intentos de acceso desde ubicaciones desconocidas.",
        "Google ha marcado tu sitio como inseguro o lo ha eliminado de los resultados de búsqueda.",
        "No puedes acceder a tu dashboard, o los archivos cambian sin tu acción.",
      ],
    },
    whatICheck: {
      title: "Qué manejo",
      items: [
        "Limpieza de malware y eliminación de archivos sospechosos",
        "Revisión y limpieza de cuentas de usuario comprometidas",
        "Parcheo de vulnerabilidades y revisión de riesgo de plugins/temas",
        "Copia de seguridad y restauración si es necesario",
        "Refuerzo posterior a la recuperación para reducir riesgos futuros",
        "Comunicación con hosting si se requiere",
      ],
    },
    process: {
      title: "Cómo funciona",
      steps: [
        { number: "01", title: "Evaluación", description: "Reviso el estado actual de tu sitio, accesos, copias de respaldo y gravedad de la infección." },
        { number: "02", title: "Limpieza", description: "Elimino malware, archivos sospechosos y cuentas de usuario comprometidas." },
        { number: "03", title: "Refuerzo", description: "Aplico correcciones de seguridad para cerrar las vulnerabilidades que usó el atacante." },
        { number: "04", title: "Verificación", description: "Verifico que el sitio esté limpio y proporciono documentación de lo que se hizo." },
      ],
    },
    proof: {
      title: "Basado en trabajo real de recuperación",
      items: [
        { company: "GovValue", description: "Recuperé un WordPress después de un backdoor en base de datos que inyectaba páginas spam y redirecciones externas; limpié la infección, reforcé el sitio y gestioné la remediación en Google Search Console." },
        { company: "Co-Active Training Institute", description: "Limpieza de seguridad en entornos WordPress con plugins desactualizados, puntos de entrada expuestos y accesos de usuario abandonados." },
        { company: "Cybernetips", description: "Trabajo de respuesta a incidentes y recuperación digital en entornos WordPress y de servidores." },
      ],
    },
    deliverables: {
      title: "Qué recibes",
      items: ["Limpieza de malware", "Informe de vulnerabilidades", "Refuerzo de seguridad", "Documentación de recuperación"],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { question: "¿Puedes garantizar la recuperación?", answer: "La mayoría de los casos pueden atenderse rápidamente, pero el resultado depende de los accesos, el alojamiento, las copias de seguridad y la gravedad de la infección. Evaluaré tu situación con honestidad." },
        { question: "¿Cuánto tiempo toma la recuperación?", answer: "La mayoría de los sitios pueden ser limpiados y reforzados dentro de 24-72 horas. Los casos complejos pueden tomar más." },
        { question: "¿Mi sitio será hackeado de nuevo?", answer: "Ningún servicio de recuperación puede garantizar esto. Me enfoco en cerrar las vulnerabilidades usadas y reforzar el sitio para reducir el riesgo futuro." },
        { question: "¿Necesito dar acceso al hosting?", answer: "Sí. Necesito acceso a los archivos del sitio, base de datos y idealmente panel de hosting para una limpieza completa." },
      ],
    },
    finalCta: {
      title: "¿Necesitas ayuda para recuperar tu WordPress hackeado?",
      description: "Solicita asistencia de recuperación y obtén una evaluación clara de tu situación.",
      primaryCta: { label: "Solicitar ayuda de recuperación", href: "/es/contact?service=Recuperaci%C3%B3n%20WordPress%20hackeado" },
    },
  },
  {
    slug: "website-migration",
    hero: {
      eyebrow: "Migración Web",
      title: "Migra o reconstruye tu sitio web sin perder lo que importa",
      description:
        "Migro contenido, señales SEO, redirecciones, analítica e integraciones con cuidado, y verifico la nueva plataforma después del lanzamiento.",
      primaryCta: { label: "Solicitar plan de migración", href: "/es/contact?service=Migraci%C3%B3n%20web" },
      secondaryCta: { label: "Ver mi trabajo", href: "/es/work" },
    },
    problem: {
      title: "¿Tu plataforma actual te está frenando?",
      symptoms: [
        "Tu instalación de WordPress usa un tema desactualizado o un constructor frágil que se rompe constantemente.",
        "Temes miedo de perder contenido, rankings o integraciones durante una migración.",
        "Tu CMS actual es difícil de usar y tu equipo lucha para hacer actualizaciones.",
        "Los costos de rendimiento y mantenimiento siguen aumentando sin mejoras claras.",
      ],
    },
    whatICheck: {
      title: "Qué planifico y ejecuto",
      items: [
        "Estrategia de migración e inventario de contenido",
        "Plan de redirecciones para preservar fundamentos SEO",
        "Migración de analítica y tracking",
        "Revisión de integraciones: formularios, APIs, herramientas de terceros",
        "Control de calidad y soporte de lanzamiento",
        "Supervisión y correcciones posteriores al lanzamiento",
      ],
    },
    process: {
      title: "Cómo funciona",
      steps: [
        { number: "01", title: "Planificación", description: "Audito tu sitio actual, mapeo contenido y creo una estrategia de migración." },
        { number: "02", title: "Migración", description: "Transfiero contenido, configuro redirecciones y establezco la nueva plataforma." },
        { number: "03", title: "Pruebas", description: "Verifico contenido, SEO, integraciones y rendimiento antes del lanzamiento." },
        { number: "04", title: "Lanzamiento", description: "Apoyo el lanzamiento y monitoreo problemas en los primeros días." },
      ],
    },
    proof: {
      title: "Experiencia probada en migraciones",
      items: [
        { company: "Truenorth Corporation", description: "Migración de sitio corporativo de WordPress a Webflow como parte de un equipo de entrega de 3 personas." },
        { company: "CST Puerto Rico", description: "Migración de WordPress a Webflow para un sitio gubernamental de seguridad vial con integraciones API." },
      ],
    },
    deliverables: {
      title: "Qué recibes",
      items: ["Estrategia de migración", "Transferencia de contenido", "Plan de redirecciones", "Preservación SEO", "Soporte post-lanzamiento"],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { question: "¿Perderé mis posiciones de SEO?", answer: "Planifico migraciones para preservar fundamentos SEO — contenido, metadatos, redirecciones y analítica. Los rankings nunca se pueden garantizar, pero la migración se maneja con cuidado y se mide." },
        { question: "¿Cuánto tiempo toma una migración?", answer: "Depende del tamaño y complejidad. Migraciones simples toman 2-4 semanas. Migraciones complejas entre CMS pueden tomar 6-8 semanas." },
        { question: "¿Habrá tiempo de inactividad?", answer: "Planifico migraciones para reducir riesgo de inactividad. La mayoría se ejecutan con inactividad mínima o invisible." },
        { question: "¿Manejas la migración completa?", answer: "Sí. Me encargo de la estrategia, transferencia de contenido, redirecciones, control de calidad y soporte de lanzamiento de principio a fin." },
      ],
    },
    finalCta: {
      title: "¿Listo para migrar tu sitio web con confianza?",
      description: "Solicita un plan de migración y obtén una estrategia clara antes de mover algo.",
      primaryCta: { label: "Solicitar plan de migración", href: "/es/contact?service=Migraci%C3%B3n%20web" },
    },
  },
  {
    slug: "wordpress-maintenance",
    hero: {
      eyebrow: "Mantenimiento WordPress",
      title: "Mantén WordPress en buen estado sin un desarrollador a tiempo completo",
      description:
        "Me encargo de actualizaciones, pequeños arreglos, revisiones de seguridad y rendimiento para que la web tenga un responsable técnico confiable.",
      primaryCta: { label: "Solicitar plan de mantenimiento", href: "/es/contact?service=Mantenimiento%20WordPress" },
      secondaryCta: { label: "Ver mi trabajo", href: "/es/work" },
    },
    problem: {
      title: "¿Tu WordPress te está consumiendo el tiempo?",
      symptoms: [
        "Las actualizaciones de plugins se acumulan y tienes miedo de romper algo.",
        "Pequeños problemas de diseño, formularios rotos o fallos de rendimiento aparecen regularmente.",
        "No tienes a nadie técnicamente responsable del sitio web.",
        "Las preocupaciones de seguridad siguen creciendo pero nada se está monitoreando.",
      ],
    },
    whatICheck: {
      title: "Qué manejo mensualmente",
      items: [
        "Actualizaciones de WordPress, plugins y temas",
        "Revisión de seguridad y accesos",
        "Arreglos pequeños y resolución de bugs",
        "Monitoreo de rendimiento",
        "Recomendaciones técnicas",
        "Coordinación con equipos de hosting y servidores",
      ],
    },
    process: {
      title: "Cómo funciona",
      steps: [
        { number: "01", title: "Evaluación", description: "Reviso el estado actual de tu sitio, plugins y necesidades de mantenimiento." },
        { number: "02", title: "Planificación", description: "Creo un plan de mantenimiento mensual basado en prioridad y riesgo." },
        { number: "03", title: "Mantenimiento", description: "Gestiono actualizaciones, correcciones, revisiones de seguridad y supervisión del rendimiento." },
        { number: "04", title: "Reporte", description: "Recibes un resumen mensual de lo que se hizo y qué necesita atención." },
      ],
    },
    proof: {
      title: "Basado en trabajo continuo de mantenimiento",
      items: [
        { company: "Co-Active Training Institute", description: "Soporte continuo como contratista en WordPress, PHP, SEO, servidores, seguridad, correcciones visuales y mantenimiento — contrato hasta marzo 2027." },
      ],
    },
    deliverables: {
      title: "Qué recibes",
      items: ["Lista mensual de prioridades", "Tareas de mantenimiento", "Revisión de seguridad y accesos", "Recomendaciones técnicas"],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { question: "¿Qué incluye el mantenimiento mensual?", answer: "Actualizaciones, revisiones de seguridad, pequeñas correcciones, supervisión del rendimiento y recomendaciones técnicas. El alcance depende de las necesidades de tu sitio." },
        { question: "¿Cuántas horas por mes?", answer: "Depende de la complejidad y necesidades de tu sitio. Recomiendo empezar con una auditoría para determinar el nivel adecuado." },
        { question: "¿Atiendes correcciones de emergencia?", answer: "Sí. Los clientes de mantenimiento reciben respuesta prioritaria para problemas urgentes." },
        { question: "¿Puedo cancelar cuando quiera?", answer: "Sí. No te blogeo en contratos a largo plazo. El objetivo es proporcionar valor cada mes." },
      ],
    },
    finalCta: {
      title: "¿Listo para mantener tu WordPress saludable?",
      description: "Solicita un plan de mantenimiento y obtén un alcance mensual claro.",
      primaryCta: { label: "Solicitar plan de mantenimiento", href: "/es/contact?service=Mantenimiento%20WordPress" },
    },
  },
]

export function getLandingPageEsBySlug(slug: string): LandingPageData | undefined {
  return landingPagesEs.find((page) => page.slug === slug)
}

export const landingPageSlugsEs = landingPagesEs.map((page) => page.slug)
