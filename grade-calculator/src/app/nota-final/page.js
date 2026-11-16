import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import FinalGradeCalculatorLab from "@/app/components/FinalGradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

// ─── SCHEMA MARKUP (AEO / AI Overview / Google Rich Results) ────────────────
const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Nota Final — ¿Qué necesito en el examen final?",
    url: "https://calcunotas.com/nota-final/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    description:
      "Calcula qué nota necesitas en tu examen final para aprobar o alcanzar tu calificación objetivo. Compatible con escalas 0-10 (España/México/Argentina), 0-5 (Colombia), 1-7 (Chile), 0-20 (Venezuela/Perú/Francia) y porcentaje (USA/LATAM).",
    featureList: [
      "Nota requerida en el examen final al instante",
      "Cálculo de nota final del curso después del examen",
      "Compatible con escalas 0-10, 0-5, 1-7, 0-20 y porcentaje",
      "Tabla multi-meta: ve qué necesitas para 5, 6, 7, 8 y 9 de golpe",
      "Detección automática de metas imposibles (>máximo)",
      "Sin registro, 100 % gratuita",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo calculo qué nota necesito en el examen final?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aplica esta fórmula: Nota necesaria = (Meta − Nota actual × (1 − Peso del final)) ÷ Peso del final. Por ejemplo, si tienes 6,5, quieres un 7 y el final vale el 40 %: (7 − 6,5 × 0,6) ÷ 0,4 = 7,75. Necesitas un 7,75 en el examen final.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la nota que necesito supera el máximo posible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si el resultado supera la nota máxima de tu escala (p. ej. más de 10 en España o más del 100 % en LATAM), tu meta es matemáticamente inalcanzable solo con el examen final. Debes ajustar tu objetivo o consultar si hay trabajos extra, recuperación u otras evaluaciones pendientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ya saqué el examen final. Cómo calculo mi nota definitiva del curso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usa la fórmula: Nota del curso = Nota actual × (1 − Peso del final) + Nota del examen × Peso del final. Ejemplo: nota actual 7, examen final 8, peso del final 40 % → 7 × 0,6 + 8 × 0,4 = 4,2 + 3,2 = 7,4.",
        },
      },
      {
        "@type": "Question",
        name: "¿Las notas parciales de distintos pesos afectan el cálculo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Si tienes varios parciales con distintos porcentajes, primero calcula tu nota acumulada ponderada (suma de cada nota × su peso). Ese resultado es tu 'nota actual' para introducir en la calculadora del examen final.",
        },
      },
      {
        "@type": "Question",
        name: "¿Existe un examen de recuperación si no apruebo el final?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del país e institución. En España existe la segunda convocatoria ordinaria y extraordinaria. En México el examen extraordinario. En Perú el examen sustitutorio. En Colombia la habilitación. Consulta el reglamento académico de tu centro.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hay una nota mínima obligatoria en el examen final independientemente del promedio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muchas asignaturas exigen una nota mínima en el examen final para que el promedio ponderado sea válido (p. ej. al menos 4/10 en España o 3/5 en Colombia). Si no alcanzas esa nota mínima, suspendes aunque el promedio dé aprobado. Revisa la guía docente de tu asignatura.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia hay entre nota mínima y nota de corte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La nota mínima es el umbral para aprobar una asignatura (p. ej. 5/10 en España). La nota de corte es la calificación mínima para acceder a un programa universitario o plaza concreta, generalmente en el proceso de admisión. Son conceptos distintos.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo calcular la nota que necesitas en el examen final",
    step: [
      {
        "@type": "HowToStep",
        name: "Introduce tu nota actual",
        text: "Escribe la calificación acumulada que tienes antes del examen final (parciales, prácticas, trabajos entregados). Esta es tu nota de presentación.",
      },
      {
        "@type": "HowToStep",
        name: "Indica el peso del examen final",
        text: "Escribe qué porcentaje representa el examen final en la nota total (p. ej. 40 %). Lo encontrarás en la guía docente o programa del curso.",
      },
      {
        "@type": "HowToStep",
        name: "Fija tu nota objetivo",
        text: "Introduce la calificación final del curso que quieres obtener (p. ej. 5 para aprobar, 7 para notable, 9 para sobresaliente).",
      },
      {
        "@type": "HowToStep",
        name: "Obtén el resultado",
        text: "La calculadora aplica la fórmula ponderada y te muestra la nota exacta que necesitas sacar en el examen final, o avisa si la meta es matemáticamente imposible.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://calcunotas.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculadora de Nota Final",
        item: "https://calcunotas.com/nota-final/",
      },
    ],
  },
];

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Calculadora Nota Final | ¿Qué Nota Necesito en el Examen?",
  description:
    "¿Cuánto necesitas en el examen final para aprobar? Fórmula exacta, tabla multi-objetivo y escalas de España, México, Colombia, Chile, Perú y más. Gratis, sin registro.",
  keywords: [
    "calculadora de nota final",
    "qué nota necesito en el examen final",
    "cuánto necesito en el examen final para aprobar",
    "calcular nota necesaria examen final",
    "calculadora nota final chile escala 1-7",
    "calculadora nota final colombia escala 0-5",
    "calculadora nota final mexico",
    "formula nota necesaria examen final",
    "nota de presentación examen final",
  ],
  alternates: {
    canonical: "https://calcunotas.com/nota-final/",
    languages: {
      es: "https://calcunotas.com/nota-final/",
      "es-ES": "https://calcunotas.com/nota-final/",
      "es-MX": "https://calcunotas.com/nota-final/",
      "es-AR": "https://calcunotas.com/nota-final/",
      "es-CO": "https://calcunotas.com/nota-final/",
      "es-CL": "https://calcunotas.com/nota-final/",
      "es-PE": "https://calcunotas.com/nota-final/",
      "es-VE": "https://calcunotas.com/nota-final/",
    },
  },
  openGraph: {
    title: "Calculadora de Nota Final — ¿Qué necesitas en el examen?",
    description:
      "Descubre al instante qué nota necesitas en tu examen final. Compatible con España, México, Colombia, Chile, Perú y más. Fórmula exacta, tabla multi-objetivo, detección de metas imposibles.",
    url: "https://calcunotas.com/nota-final/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Nota Final | CalcuNotas",
    description:
      "¿Cuánto necesitas en el examen final? Calcula al instante con fórmula exacta. Compatible con todas las escalas hispanohablantes.",
  },
  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

// ─── STATIC DATA ─────────────────────────────────────────────────────────────

const ESCALAS = [
  {
    pais: "🇪🇸 España",
    escala: "0 – 10",
    aprobado: "5,0",
    maximo: "10",
    sistema: "Suspenso / Aprobado / Notable / Sobresaliente",
    pesoHabitual: "40 – 60 %",
  },
  {
    pais: "🇲🇽 México",
    escala: "0 – 10",
    aprobado: "6,0",
    maximo: "10",
    sistema: "Reprobado / Aprobado / Bueno / Excelente",
    pesoHabitual: "30 – 50 %",
  },
  {
    pais: "🇨🇴 Colombia",
    escala: "0 – 5",
    aprobado: "3,0",
    maximo: "5",
    sistema: "Reprobado / Aprobado / Bueno / Sobresaliente",
    pesoHabitual: "30 – 40 %",
  },
  {
    pais: "🇨🇱 Chile",
    escala: "1 – 7",
    aprobado: "4,0",
    maximo: "7",
    sistema: "Reprobado / Suficiente / Bueno / Excelente",
    pesoHabitual: "50 – 70 %",
  },
  {
    pais: "🇵🇪 Perú / 🇻🇪 Venezuela",
    escala: "0 – 20",
    aprobado: "10,5",
    maximo: "20",
    sistema: "Desaprobado / Aprobado / Bueno / Excelente",
    pesoHabitual: "40 – 60 %",
  },
  {
    pais: "🇦🇷 Argentina",
    escala: "0 – 10",
    aprobado: "4,0",
    maximo: "10",
    sistema: "Insuficiente / Aprobado / Bueno / Distinguido / Sobresaliente",
    pesoHabitual: "40 – 60 %",
  },
  {
    pais: "🌎 USA / LATAM (%)",
    escala: "0 – 100 %",
    aprobado: "50 – 60 %",
    maximo: "100 %",
    sistema: "F / D / C / B / A",
    pesoHabitual: "20 – 40 %",
  },
];

const IMPACTO_PESO = [
  {
    peso: "10 – 20 %",
    impacto: "Bajo",
    descripcion:
      "Tu nota acumulada domina el resultado. El examen final apenas puede mover la calificación 1–2 puntos en cualquier dirección.",
    color: "bg-green-50 border-green-200 text-green-800",
    badge: "bg-green-100 text-green-700",
  },
  {
    peso: "30 – 40 %",
    impacto: "Moderado",
    descripcion:
      "El examen puede subir o bajar tu nota final entre 1 y 2 puntos. Representa una oportunidad real de mejorar y vale la pena una preparación seria.",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    peso: "50 – 60 %",
    impacto: "Alto",
    descripcion:
      "El examen pesa más que todo lo anterior. Un mal día puede hacerte suspender aunque vayas con buena nota acumulada. Planifica con antelación.",
    color: "bg-orange-50 border-orange-200 text-orange-800",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    peso: "70 %+",
    impacto: "Decisivo",
    descripcion:
      "El examen final es prácticamente el único factor determinante. El trabajo previo actúa apenas como colchón de partida. Típico en Chile y algunos sistemas europeos.",
    color: "bg-red-50 border-red-200 text-red-800",
    badge: "bg-red-100 text-red-700",
  },
];

const ESCENARIOS = [
  {
    pais: "🇪🇸 España",
    nota_actual: "4,0",
    meta: "5,0",
    peso: "40 %",
    resultado: "6,67",
    estado: "Alcanzable",
    color: "text-green-700 bg-green-50",
  },
  {
    pais: "🇲🇽 México",
    nota_actual: "5,5",
    meta: "7,0",
    peso: "40 %",
    resultado: "9,17",
    estado: "Difícil pero posible",
    color: "text-yellow-700 bg-yellow-50",
  },
  {
    pais: "🇨🇴 Colombia",
    nota_actual: "3,5",
    meta: "4,0",
    peso: "35 %",
    resultado: "4,93",
    estado: "Alcanzable",
    color: "text-green-700 bg-green-50",
  },
  {
    pais: "🇨🇱 Chile",
    nota_actual: "3,5",
    meta: "4,0",
    peso: "60 %",
    resultado: "4,33",
    estado: "Alcanzable",
    color: "text-green-700 bg-green-50",
  },
  {
    pais: "🇪🇸 España",
    nota_actual: "5,5",
    meta: "8,0",
    peso: "30 %",
    resultado: "12,83",
    estado: "Imposible",
    color: "text-red-700 bg-red-50",
  },
  {
    pais: "🇵🇪 Perú",
    nota_actual: "12",
    meta: "14",
    peso: "50 %",
    resultado: "16",
    estado: "Alcanzable",
    color: "text-green-700 bg-green-50",
  },
];

// Multi-goal table: nota actual = 4,5 sobre 10
const MULTI_META_EJEMPLO = [
  { meta: "5 (Aprobado)", peso40: "5,75", peso50: "5,50", peso60: "5,33" },
  { meta: "6 (Bien)", peso40: "8,25", peso50: "7,50", peso60: "7,00" },
  { meta: "7 (Notable)", peso40: "10,75", peso50: "9,50", peso60: "8,67" },
  { meta: "8 (Notable alto)", peso40: "13,25", peso50: "11,50", peso60: "10,33" },
  { meta: "9 (Sobresaliente)", peso40: "15,75", peso50: "13,50", peso60: "12,00" },
];

const PASOS = [
  {
    n: "1",
    titulo: "Introduce tu nota de presentación",
    texto:
      "Es la calificación acumulada antes del examen final: parciales, prácticas, tareas y cualquier otra evaluación ya entregada. Usa la misma escala que el resto (0-10, 0-5, etc.).",
  },
  {
    n: "2",
    titulo: "Indica el peso del examen final",
    texto:
      "El porcentaje que representa el examen final en la nota total de la asignatura. Lo encontrarás en la guía docente o programa del curso. Suele ser entre el 30 % y el 60 %.",
  },
  {
    n: "3",
    titulo: "Fija tu nota objetivo",
    texto:
      "La calificación final del curso que quieres alcanzar: el mínimo para aprobar, un notable (7) o cualquier meta personalizada. Usa la misma escala que los demás campos.",
  },
  {
    n: "4",
    titulo: "Lee el resultado y actúa",
    texto:
      "Verás la nota exacta que necesitas en el examen. Si supera el máximo de tu escala, recibirás una alerta con opciones concretas: ajustar la meta, buscar recuperación o consultar puntos extra.",
  },
];

const GLOSARIO = [
  {
    termino: "Nota de presentación",
    definicion:
      "La calificación acumulada que llevas antes del examen final, incluyendo todos los parciales, prácticas y trabajos entregados. Es el dato que debes usar como 'nota actual' en la calculadora.",
  },
  {
    termino: "Peso del examen final",
    definicion:
      "El porcentaje que representa el examen final en la calificación total de la asignatura. Si el final vale el 40 %, su peso es 0,40 en la fórmula.",
  },
  {
    termino: "Meta imposible",
    definicion:
      "Situación en la que ninguna nota en el examen final permite alcanzar el objetivo, porque el resultado requerido supera el máximo de la escala de calificación.",
  },
  {
    termino: "Nota mínima por componente",
    definicion:
      "Calificación mínima obligatoria en el examen final (p. ej. 4/10) para que el promedio ponderado sea válido. Si no se alcanza, se suspende la asignatura aunque el promedio dé aprobado.",
  },
  {
    termino: "Examen de recuperación",
    definicion:
      "Segunda oportunidad para superar una asignatura tras suspender: segunda convocatoria (España), examen extraordinario (México), examen sustitutorio (Perú) o habilitación (Colombia).",
  },
  {
    termino: "Nota de corte",
    definicion:
      "Calificación mínima para acceder a un programa universitario o plaza. No confundir con nota mínima para aprobar una asignatura: son conceptos distintos.",
  },
];

const FAQS = [
  {
    q: "¿Cómo calculo qué nota necesito en el examen final?",
    a: "Aplica: Nota necesaria = (Meta − Nota actual × (1 − Peso)) ÷ Peso. Ejemplo: nota actual 6,5, meta 7, peso 40 % → (7 − 6,5 × 0,6) ÷ 0,4 = 7,75. Necesitas un 7,75 en el final.",
  },
  {
    q: "¿Qué pasa si la nota requerida supera el máximo de la escala?",
    a: "Tu objetivo es matemáticamente inalcanzable solo con el examen final. Opciones: bajar tu meta, preguntar si hay trabajos de recuperación, o consultar si el docente aplica redondeo o puntos extra.",
  },
  {
    q: "¿Sirve esta calculadora para la escala colombiana (0-5)?",
    a: "Sí, la fórmula es universal. Introduce tus valores en la escala 0-5 y el resultado saldrá en esa misma escala. Con nota actual 3,5, meta 4,0 y peso 35 %, necesitas: (4,0 − 3,5 × 0,65) ÷ 0,35 = 4,93.",
  },
  {
    q: "Ya rendí el examen. ¿Cómo calculo mi nota definitiva?",
    a: "Fórmula inversa: Nota final = Nota actual × (1 − Peso) + Nota examen × Peso. Ejemplo: nota actual 7, examen 8, peso 40 % → 7 × 0,6 + 8 × 0,4 = 4,2 + 3,2 = 7,4.",
  },
  {
    q: "¿Las notas parciales de distintos porcentajes afectan el cálculo?",
    a: "Sí. Si tienes varios parciales con distintos pesos, calcula primero tu promedio ponderado acumulado (cada nota × su porcentaje, suma todo). Ese total es tu 'nota actual' para la calculadora.",
  },
  {
    q: "¿Hay alguna nota mínima obligatoria en el examen final?",
    a: "Muchas asignaturas exigen una nota mínima en el examen final para que cuente el promedio (p. ej. necesitas al menos un 4/10 en el examen aunque el promedio ponderado dé 5). Consulta la guía docente de tu asignatura.",
  },
  {
    q: "¿Qué nota necesito en el examen final en Chile (escala 1-7)?",
    a: "Usa la misma fórmula con tu escala. Ejemplo: nota de presentación 3,5, meta 4,0, peso 60 % → (4,0 − 3,5 × 0,4) ÷ 0,6 = 4,33. Necesitas un 4,33 sobre 7 en el examen final.",
  },
  {
    q: "¿Existe un examen de recuperación si no apruebo el final?",
    a: "Depende del país e institución. España: segunda convocatoria. México: examen extraordinario. Perú: examen sustitutorio. Colombia: habilitación. Consulta el reglamento académico de tu centro.",
  },
  {
    q: "¿Cuál es la nota mínima para aprobar en México?",
    a: "En la mayoría de universidades e institutos de México la calificación mínima aprobatoria es 6,0 sobre 10. En educación básica y media superior puede variar entre 5,0 y 6,0 según la institución.",
  },
  {
    q: "¿Cuál es la diferencia entre nota mínima y nota de corte?",
    a: "La nota mínima es el umbral para aprobar una asignatura (p. ej. 5/10 en España). La nota de corte es la calificación mínima para acceder a un programa universitario en el proceso de admisión: la fija el docente frente a la institución o el sistema de acceso.",
  },
  {
    q: "¿Es mejor apuntar exactamente a la nota mínima requerida?",
    a: "La calculadora muestra el mínimo matemático exacto, pero apuntar justo a esa cifra deja poco margen ante errores o diferencias de corrección. Es recomendable estudiar para una puntuación algo superior al resultado exacto.",
  },
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
export default function NotaFinalPage() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* ── SCHEMA JSON-LD ────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-10 pb-10 bg-gradient-to-b px-8 from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">
          <nav aria-label="Ruta de navegación" className="text-sm text-[#667085] mb-3">
            <ol className="flex flex-wrap gap-1 list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item" className="hover:text-blue-600">
                  <span itemProp="name">Inicio</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true" className="mx-1">/</li>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Calculadora de Nota Final</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Nota Final
          </h1>

          <div data-ai-answer="true" className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-2">
            <p>
              ¿Cuánto necesitas en el examen final para aprobar? Introduce tu{" "}
              <strong>nota de presentación</strong> (la calificación acumulada),
              el <strong>peso del examen final</strong> y tu{" "}
              <strong>nota objetivo</strong>: obtendrás el resultado exacto al
              instante, con alerta automática si la meta es matemáticamente
              imposible de alcanzar.
            </p>
          </div>

          <p className="max-w-[820px] text-[15px] leading-7 text-[#8a94a6] mb-5">
            Compatible con todas las escalas: <strong>0-10</strong> (España, México, Argentina),{" "}
            <strong>0-5</strong> (Colombia), <strong>1-7</strong> (Chile),{" "}
            <strong>0-20</strong> (Perú, Venezuela, Francia) y{" "}
            <strong>porcentaje</strong> (USA y LATAM). Gratuita y sin registro.
          </p>

          <div className="flex flex-wrap gap-3" role="list" aria-label="Características de la calculadora">
            {[
              "Nota requerida en el final",
              "Tabla multi-objetivo",
              "Alerta de meta imposible",
              "Escalas 0-10 / 0-5 / 1-7 / 0-20 / %",
              "Cálculo directo e inverso",
              "100 % gratis",
            ].map((item) => (
              <span
                key={item}
                role="listitem"
                className="bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULADORA + SIDEBAR ─────────────────────────────────────────── */}
      <section className="pb-8" aria-label="Calculadora de nota para el examen final">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <FinalGradeCalculatorLab />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* ── CONTENIDO SEO / AEO ───────────────────────────────────────────── */}
      <section className="pb-14" aria-label="Guía completa: calculadora nota examen final">
        <div className=" mx-auto">
          <article
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            itemScope
            itemType="https://schema.org/Article"
          >
            <div className="p-6 md:p-8">

              {/* ── AI OVERVIEW SNIPPET ───────────────────────────────────── */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10" data-ai-snippet="true">
                <h2 className="text-[26px] font-bold tracking-[-0.02em] mb-4">
                  Respuesta directa: ¿qué nota necesito en el examen final?
                </h2>
                <p className="text-gray-700 leading-8 mb-3">
                  Para saber cuánto necesitas en el examen final, aplica esta
                  fórmula: <strong>Nota necesaria = (Meta − Nota actual ×
                    (1 − Peso)) ÷ Peso</strong>. Solo necesitas tres datos: tu
                  calificación acumulada (nota de presentación), el porcentaje
                  que vale el examen y la nota global que quieres alcanzar. Si
                  el resultado supera el máximo de tu escala, la meta es
                  imposible con el examen final solo.
                </p>
                <p className="text-gray-600 text-[14px]">
                  Esta calculadora aplica la fórmula automáticamente y además
                  incluye una tabla que muestra de una vez qué necesitas para
                  aprobar, para notable y para sobresaliente.
                </p>
              </div>

              {/* ── FÓRMULA (Featured Snippet target) ────────────────────── */}
              <section className="mb-12" aria-labelledby="formula-heading">
                <h2 id="formula-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-4">
                  Fórmula para calcular la nota que necesitas en el examen final
                </h2>
                <p className="text-gray-700 leading-8 mb-4">
                  La fórmula matemática del promedio ponderado que calcula la
                  nota necesaria en el examen final es:
                </p>

                <div
                  className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-6"
                  role="math"
                  aria-label="Fórmula: Nota necesaria igual a (Meta menos Nota actual por (uno menos Peso)) dividido entre Peso"
                >
                  Nota necesaria = (Meta − Nota actual × (1 − Peso)) ÷ Peso
                </div>

                <div className="grid gap-3 md:grid-cols-3 mb-6">
                  {[
                    {
                      var: "Meta",
                      def: "La calificación final del curso que quieres obtener (p. ej. 5 para aprobar, 7 para notable).",
                    },
                    {
                      var: "Nota actual",
                      def: "Tu promedio acumulado antes del examen final (nota de presentación): parciales, prácticas, trabajos ya entregados.",
                    },
                    {
                      var: "Peso",
                      def: "La fracción del examen final (p. ej. 0,40 si vale el 40 %). Si te dan el porcentaje, divídelo entre 100.",
                    },
                  ].map((v) => (
                    <div key={v.var} className="rounded-xl border border-gray-200 p-4">
                      <div className="font-semibold text-blue-600 mb-1">{v.var}</div>
                      <p className="text-gray-600 text-[13px] leading-5">{v.def}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Ejemplo completo paso a paso</h3>
                  <p className="text-gray-700 text-[15px] leading-7 mb-3">
                    Situación: nota actual <strong>6,5 / 10</strong>, meta{" "}
                    <strong>7 / 10</strong> (notable), examen final vale{" "}
                    <strong>40 %</strong>.
                  </p>
                  <div className="space-y-1 text-[14px] font-mono text-gray-700">
                    <p>Paso 1 — Peso en fracción: 40 ÷ 100 = 0,40</p>
                    <p>Paso 2 — Nota necesaria = (7 − 6,5 × (1 − 0,40)) ÷ 0,40</p>
                    <p>         = (7 − 6,5 × 0,60) ÷ 0,40</p>
                    <p>         = (7 − 3,90) ÷ 0,40</p>
                    <p className="text-blue-700 font-bold">
                      Resultado: 3,10 ÷ 0,40 = <strong>7,75</strong>
                    </p>
                  </div>
                  <p className="text-gray-600 text-[13px] mt-3">
                    Necesitas un <strong>7,75 sobre 10</strong> en el examen final para terminar con notable.
                  </p>
                </div>

                <h3 className="text-[20px] font-semibold text-gray-800 mb-3">
                  Fórmula inversa: ya hice el examen, ¿cuál es mi nota final?
                </h3>
                <p className="text-gray-700 leading-8 mb-4">
                  Si ya conoces tu resultado en el examen final, usa esta
                  fórmula para calcular tu calificación definitiva del curso:
                </p>
                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-4">
                  Nota del curso = Nota actual × (1 − Peso) + Nota examen × Peso
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-[14px] text-gray-700 leading-6">
                  <strong>Ejemplo:</strong> nota actual 7, examen 8, peso 40 %
                  <br />
                  → 7 × 0,60 + 8 × 0,40 = 4,20 + 3,20 = <strong>7,40 — Notable</strong>
                </div>
              </section>

              {/* ── TABLA MULTI-OBJETIVO ──────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="multi-meta-heading">
                <h2 id="multi-meta-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Tabla multi-objetivo: qué necesitas para cada calificación
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Ejemplo con <strong>nota de presentación = 4,5 sobre 10</strong>{" "}
                  (escala española). Compara de un vistazo qué nota del examen
                  necesitas para cada meta según el peso del final. Las celdas{" "}
                  <span className="text-red-600 font-semibold">en rojo</span>{" "}
                  indican que la meta es inalcanzable (supera el 10).
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[560px] border-collapse text-[14px]">
                    <caption className="sr-only">
                      Nota necesaria en el examen final para cada meta, con
                      nota de presentación de 4,5 sobre 10
                    </caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Meta final</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Peso 40 %</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Peso 50 %</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Peso 60 %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MULTI_META_EJEMPLO.map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-gray-800">{row.meta}</td>
                          <td className={`px-4 py-3 text-center font-semibold ${parseFloat(row.peso40) > 10 ? "bg-red-50 text-red-600" : "text-green-700"}`}>
                            {row.peso40}
                          </td>
                          <td className={`px-4 py-3 text-center font-semibold ${parseFloat(row.peso50) > 10 ? "bg-red-50 text-red-600" : "text-green-700"}`}>
                            {row.peso50}
                          </td>
                          <td className={`px-4 py-3 text-center font-semibold ${parseFloat(row.peso60) > 10 ? "bg-red-50 text-red-600" : "text-green-700"}`}>
                            {row.peso60}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-gray-500 mt-2">
                  🔴 Rojo = nota requerida supera el 10 (imposible sin
                  evaluación adicional). 🟢 Verde = alcanzable si obtienes esa
                  puntuación en el examen.
                </p>
              </section>

              {/* ── CÓMO USAR ─────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="como-usar-heading">
                <h2 id="como-usar-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Cómo usar la calculadora, paso a paso
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {PASOS.map((p) => (
                    <div key={p.n} className="rounded-2xl border border-gray-200 p-5 bg-white flex gap-4 items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm" aria-hidden="true">
                        {p.n}
                      </div>
                      <div>
                        <h3 className="text-[16px] font-semibold text-gray-800 mb-1">{p.titulo}</h3>
                        <p className="text-gray-600 text-[14px] leading-6">{p.texto}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── ESCALAS POR PAÍS ──────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="escalas-heading">
                <h2 id="escalas-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Escalas de calificación y nota mínima por país
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  La nota mínima para aprobar varía según el país e institución.
                  Usa siempre la escala de tu centro al introducir los datos en
                  la calculadora.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[700px] border-collapse text-[14px]">
                    <caption className="sr-only">
                      Escalas de calificación académica por país hispanohablante
                    </caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">País</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Escala</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Mínimo aprobado</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Máximo</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Peso habitual del final</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Sistema</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ESCALAS.map((e, i) => (
                        <tr key={i} className="border-t border-gray-100 bg-white">
                          <td className="px-4 py-3 font-medium text-gray-800">{e.pais}</td>
                          <td className="px-4 py-3 text-gray-700">{e.escala}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{e.aprobado}</td>
                          <td className="px-4 py-3 text-gray-700">{e.maximo}</td>
                          <td className="px-4 py-3 text-gray-700">{e.pesoHabitual}</td>
                          <td className="px-4 py-3 text-gray-500 text-[12px]">{e.sistema}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── CUÁNTO CAMBIA TU NOTA SEGÚN EL PESO ────────────────────── */}
              <section className="mb-12" aria-labelledby="comparacion-peso-heading">
                <h2 id="comparacion-peso-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-4">
                  ¿Cómo cambia tu nota según el peso del examen final?
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  El mismo resultado en un examen puede tener un impacto muy
                  diferente dependiendo de su porcentaje. Por ejemplo, si
                  tienes una nota actual de <strong>6,0 sobre 10</strong>,
                  observa cómo cambia la nota definitiva si obtienes un{" "}
                  <strong>8,0</strong> en el examen.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[620px] border-collapse text-[14px]">
                    <caption className="sr-only">
                      Impacto del peso del examen final sobre una nota actual de 6 y un examen de 8
                    </caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Peso del final</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Nota actual</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Nota examen</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Nota definitiva</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Cambio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["20 %", "6,0", "8,0", "6,40", "+0,40"],
                        ["30 %", "6,0", "8,0", "6,60", "+0,60"],
                        ["40 %", "6,0", "8,0", "6,80", "+0,80"],
                        ["50 %", "6,0", "8,0", "7,00", "+1,00"],
                        ["60 %", "6,0", "8,0", "7,20", "+1,20"],
                      ].map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-gray-800">{row[0]}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{row[1]}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{row[2]}</td>
                          <td className="px-4 py-3 text-center font-bold text-gray-800">{row[3]}</td>
                          <td className="px-4 py-3 text-center font-semibold text-green-700">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[13px] text-gray-500 mt-2">
                  Cuanto mayor sea el peso del examen, mayor será el efecto de
                  cada punto que obtengas en esa prueba sobre tu calificación
                  definitiva.
                </p>
              </section>

              {/* ── ESCENARIOS REALES ─────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="escenarios-heading">
                <h2 id="escenarios-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Escenarios reales por país: ejemplos calculados
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Ejemplos con las escalas reales de cada país. Comprueba si tu
                  situación es alcanzable.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[640px] border-collapse text-[14px]">
                    <caption className="sr-only">
                      Escenarios de cálculo de nota necesaria en el examen
                      final para distintos países
                    </caption>
                    <thead>
                      <tr className="bg-gray-100 text-gray-700">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">País</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Nota actual</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Meta</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Peso final</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Necesitas</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ESCENARIOS.map((s, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 text-gray-700">{s.pais}</td>
                          <td className="px-4 py-3 text-gray-700">{s.nota_actual}</td>
                          <td className="px-4 py-3 text-gray-700">{s.meta}</td>
                          <td className="px-4 py-3 text-gray-700">{s.peso}</td>
                          <td className="px-4 py-3 font-bold text-gray-800">{s.resultado}</td>
                          <td className="px-4 py-3">
                            <span className={`text-[12px] font-semibold px-2 py-1 rounded-full ${s.color}`}>
                              {s.estado}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── IMPACTO DEL PESO ──────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="peso-heading">
                <h2 id="peso-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Cuánto importa el peso del examen final en tu nota?
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  El peso del examen final determina cuánto puede cambiar tu
                  calificación en función de un solo resultado. Un peso alto
                  significa más riesgo y más oportunidad de remontar; un peso
                  bajo significa que la nota acumulada ya prácticamente define
                  el resultado.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {IMPACTO_PESO.map((ip) => (
                    <div key={ip.peso} className={`rounded-2xl border p-5 ${ip.color}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-[16px]">{ip.peso}</span>
                        <span className={`text-[12px] font-semibold px-2 py-0.5 rounded-full ${ip.badge}`}>
                          {ip.impacto}
                        </span>
                      </div>
                      <p className="text-[14px] leading-6">{ip.descripcion}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CUÁNDO ES IMPOSIBLE ───────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="imposible-heading">
                <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                  <h2 id="imposible-heading" className="text-[26px] font-bold tracking-[-0.02em] mb-4 text-red-900">
                    ¿Cuándo es imposible alcanzar tu meta en el examen final?
                  </h2>
                  <p className="text-gray-700 leading-8 mb-4">
                    La calculadora te avisa cuando el resultado supera la nota
                    máxima posible en tu escala. Esto ocurre en tres situaciones
                    principales:
                  </p>
                  <ul className="space-y-2 text-gray-700 leading-8">
                    {[
                      "Tu nota actual está muy por debajo de la meta y el examen final tiene poco peso (p. ej. solo el 20 %).",
                      "La diferencia entre tu nota acumulada y tu objetivo es mayor a lo que el examen puede compensar.",
                      "Ya rendiste el examen y obtuviste una nota insuficiente para llegar al nivel deseado.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-xl border border-red-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      ¿Qué puedes hacer si la meta es imposible?
                    </h3>
                    <ul className="space-y-1 text-[14px] text-gray-700">
                      <li>→ Ajusta tu meta a una calificación alcanzable.</li>
                      <li>→ Pregunta al docente si hay trabajos de recuperación o puntos extra disponibles.</li>
                      <li>
                        → Comprueba si tu institución tiene examen de
                        recuperación (segunda convocatoria en España, examen
                        extraordinario en México, sustitutorio en Perú,
                        habilitación en Colombia).
                      </li>
                      <li>→ Verifica si hay nota mínima por componente que puedas consultar antes de que cierre el acta.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── ERRORES COMUNES ───────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="errores-heading">
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <h2 id="errores-heading" className="text-[26px] font-bold tracking-[-0.02em] mb-5 text-amber-900">
                    Errores frecuentes al calcular la nota del examen final
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    {[
                      "Introducir el peso como decimal (0,40) en vez de porcentaje (40): el resultado sale multiplicado por 100 y parece imposible.",
                      "Usar la nota de un solo parcial como 'nota actual' en vez del promedio ponderado acumulado de todas las evaluaciones.",
                      "Confundir puntos acumulados dentro del porcentaje ya evaluado con la nota de presentación normalizada sobre la escala completa (10, 7, 5 o 20).",
                      "Olvidar que algunas asignaturas exigen nota mínima en el examen (p. ej. ≥ 4/10 en España o ≥ 3/5 en Colombia) aunque el promedio ponderado dé aprobado.",
                      "Asumir que todas las escalas tienen el aprobado en el 50 %: en España es el 5/10 (50 %), en México el 6/10 (60 %), en Argentina el 4/10 (40 %).",
                      "Esperar al último momento para hacer el cálculo, cuando ya no hay tiempo suficiente para ajustar el plan de estudio.",
                    ].map((e, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-amber-600 font-bold flex-shrink-0">⚠</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* ── CONSEJOS DE ESTUDIO ───────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="consejos-heading">
                <h2 id="consejos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Cómo planificar el estudio según tu resultado
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      titulo: "Si necesitas menos del 50 %",
                      texto:
                        "Estás en posición cómoda. Repasa los temas principales, descansa bien antes del examen y no te agobies. El margen de error es amplio.",
                    },
                    {
                      titulo: "Si necesitas entre el 50 % y el 70 %",
                      texto:
                        "Es perfectamente alcanzable con una semana de preparación seria. Prioriza los temas con más peso en el examen y practica con ejercicios de años anteriores.",
                    },
                    {
                      titulo: "Si necesitas entre el 70 % y el 90 %",
                      texto:
                        "Requiere esfuerzo intensivo. Practica con exámenes anteriores, céntrate en los errores más frecuentes y organiza bien el tiempo disponible.",
                    },
                    {
                      titulo: "Si necesitas más del 90 %",
                      texto:
                        "Es difícil pero no imposible. Habla con el docente sobre opciones adicionales, busca si hay trabajos extra y dedica al máximo las horas que quedan.",
                    },
                  ].map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="font-semibold text-gray-800 mb-2">{c.titulo}</h3>
                      <p className="text-gray-600 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── GLOSARIO (entity-rich, AI Overview target) ───────────── */}
              <section className="mb-12" aria-labelledby="glosario-heading">
                <h2 id="glosario-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Glosario: términos clave del examen final y la evaluación
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Definiciones precisas de los conceptos más importantes para
                  calcular tu nota.
                </p>
                <dl className="grid gap-4 md:grid-cols-2">
                  {GLOSARIO.map((g) => (
                    <div key={g.termino} className="rounded-xl border border-gray-200 bg-white p-5">
                      <dt className="font-semibold text-blue-700 text-[15px] mb-1">{g.termino}</dt>
                      <dd className="text-gray-600 text-[14px] leading-6">{g.definicion}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* ── FAQ — 11 preguntas (AEO / PAA / AI Overview) ─────────── */}
              <section aria-labelledby="faq-heading">
                <div className="bg-gray-50 py-12 px-6 rounded-2xl border border-gray-200">
                  <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">

                    <div>
                      <h2 id="faq-heading" className="text-[28px] font-bold text-gray-900 mb-4">
                        Preguntas frecuentes sobre el examen final
                      </h2>
                      <p className="text-gray-600 text-[15px] leading-7">
                        Dudas habituales sobre la fórmula, las escalas de
                        calificación, metas imposibles, nota de presentación,
                        exámenes de recuperación y cómo calcular la nota
                        definitiva del curso.
                      </p>
                      <p className="text-gray-500 text-[13px] mt-4">
                        ¿Tienes otra pregunta?{" "}
                        <a href="/contacto/" className="text-blue-600 underline underline-offset-2">
                          Escríbenos
                        </a>
                        .
                      </p>
                    </div>

                    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                      {FAQS.map((faq, idx) => (
                        <details
                          key={idx}
                          className="group rounded-xl border border-gray-200 bg-white overflow-hidden"
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                        >
                          <summary className="cursor-pointer flex justify-between items-center px-5 py-4 text-gray-900 font-medium text-[15px] select-none list-none">
                            <h3 className="flex-1 pr-4" itemProp="name">{faq.q}</h3>
                            <span
                              className="text-gray-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                              aria-hidden="true"
                            >
                              ▾
                            </span>
                          </summary>
                          <div
                            className="px-5 pb-4 text-gray-600 text-[14px] leading-7"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                          >
                            <p itemProp="text">{faq.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>

                  </div>
                </div>
              </section>

            </div>
          </article>
        </div>
      </section>

      <InvisibleFooter />
    </main>
  );
}