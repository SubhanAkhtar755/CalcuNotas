// page.jsx — calcunotas.com/calculadora-profesores/
// Calculadora de Notas para Profesores — Spanish SEO + AEO Optimized

import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import TestGradeCalculator from "@/app/components/TestGradeCalculator";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2026-08-30";

// TODO: replace sameAs URLs and logo with real assets — same entity used
// across all calcunotas.com pages, so keep this identical everywhere.
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://calcunotas.com/#organization",
  name: "CalcuNotas",
  url: "https://calcunotas.com",
  logo: {
    "@type": "ImageObject",
    url: "https://calcunotas.com/logo.png",
    width: 512,
    height: 512,
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://calcunotas.com/#website",
  url: "https://calcunotas.com",
  name: "CalcuNotas",
  publisher: { "@id": "https://calcunotas.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://calcunotas.com/buscar/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// TODO: replace with a real team member's name/credentials/profile URL.
const AUTHOR_SCHEMA = {
  "@type": "Person",
  name: "Equipo Editorial de CalcuNotas",
  jobTitle: "Especialistas en evaluación académica",
  url: "https://calcunotas.com/sobre-nosotros/",
  worksFor: { "@id": "https://calcunotas.com/#organization" },
};

// FAQ recortado: se eliminaron 2 preguntas que duplicaban al 100% una
// sección completa del cuerpo del artículo (redondeo, escala por país ya
// están cubiertas en prosa con tabla). El resto se mantiene porque cada
// FAQ responde algo que no se repite en otra parte de la página.
const FAQS_DATA = [
  {
    q: "¿Cómo calculan los profesores las notas de los exámenes?",
    a: "Los profesores dividen las respuestas correctas entre el total de preguntas y multiplican el resultado por 100 para obtener el porcentaje de la nota.",
  },
  {
    q: "¿Pueden usar esta calculadora los estudiantes?",
    a: "Sí. Los estudiantes pueden usarla para estimar su nota, porcentaje y calificación en letra antes de recibir los resultados oficiales.",
  },
  {
    q: "¿Cómo calculo una nota si las preguntas tienen diferentes valores?",
    a: "Utiliza los puntos obtenidos y los puntos posibles en lugar de contar únicamente las preguntas. La fórmula es: (Puntos obtenidos ÷ Puntos posibles) × 100.",
  },
  {
    q: "¿Cómo se calcula una nota ponderada?",
    a: "Multiplica cada nota por el peso que tiene dentro de la evaluación y suma los resultados. Por ejemplo, un examen que vale 50 % y una tarea que vale 30 % deben contribuir a la nota final según esos porcentajes.",
  },
  {
    q: "¿Las preguntas sin responder cuentan como incorrectas?",
    a: "Depende de las reglas del examen. En algunos sistemas una pregunta en blanco recibe 0 puntos, mientras que otros pueden aplicar reglas diferentes. Comprueba siempre las instrucciones de la evaluación.",
  },
  {
    q: "¿Funciona para pruebas cortas y tareas?",
    a: "Sí. La calculadora es válida para pruebas cortas, exámenes, tareas, ejercicios de clase y hojas de práctica.",
  },
  {
    q: "¿Qué escala de calificación usa esta herramienta?",
    a: "Usa el sistema de porcentajes más habitual en colegios y universidades hispanohablantes. La escala puede variar según el país o institución.",
  },
  {
    q: "¿Puedo calcular notas usando puntos en lugar de preguntas?",
    a: "Sí. Puedes calcular la nota introduciendo los puntos obtenidos y el total de puntos posibles del examen o tarea.",
  },
];

const schemaMarkup = [
  ORG_SCHEMA,
  WEBSITE_SCHEMA,
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Notas para Profesores",
    url: "https://calcunotas.com/calculadora-profesores/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@id": "https://calcunotas.com/#organization" },
    description:
      "Herramienta gratuita para profesores: calcula porcentajes de examen, respuestas correctas, incorrectas y calificación en letra al instante.",
    featureList: [
      "Porcentaje de examen al instante",
      "Respuestas correctas e incorrectas",
      "Calificación en letra automática",
      "Válida para pruebas, tareas y exámenes",
      "Sin registro, 100 % gratuita",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    dateModified: DATE_MODIFIED,
    mainEntity: FAQS_DATA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo usar la calculadora de notas para profesores",
    step: [
      {
        "@type": "HowToStep",
        name: "Introduce el total de preguntas",
        text: "Escribe el número total de preguntas o puntos que tiene el examen o tarea.",
      },
      {
        "@type": "HowToStep",
        name: "Indica las respuestas correctas",
        text: "Ingresa cuántas respuestas acertó el estudiante, o los puntos obtenidos si trabajas por puntaje.",
      },
      {
        "@type": "HowToStep",
        name: "Obtén el resultado al instante",
        text: "La calculadora muestra el porcentaje y la calificación en letra correspondiente de forma automática.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      { "@type": "ListItem", position: 2, name: "Calculadora de Notas para Profesores", item: "https://calcunotas.com/calculadora-profesores/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Calculadora de Notas para Profesores: guía y fórmula",
    description:
      "Guía completa sobre cómo calcular porcentajes de examen y calificaciones en letra para profesores: fórmula, escala de notas y errores frecuentes.",
    image: "https://calcunotas.com/og/calculadora-profesores.png",
    author: AUTHOR_SCHEMA,
    reviewedBy: AUTHOR_SCHEMA,
    publisher: {
      "@type": "Organization",
      "@id": "https://calcunotas.com/#organization",
      name: "CalcuNotas",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    mainEntityOfPage: "https://calcunotas.com/calculadora-profesores/",
  },
];

export const metadata = {
  title: "Calculadora de Notas para Profesores | Califica Exámenes Gratis",

  description:
    "Herramienta gratuita para profesores: calcula porcentajes de examen, respuestas correctas, incorrectas y calificación en letra al instante. Rápida y sin errores.",

  keywords: [
    "calculadora de notas para profesores",
    "calculadora de calificaciones para docentes",
    "calcular porcentaje de examen",
    "como sacan las notas los profesores",
    "como los profesores sacan las notas",
    "calificador de pruebas",
    "nota en letra para profesores",
    "corregir examen online",
    "calcular nota examen online",
  ],

  alternates: {
    canonical: "https://calcunotas.com/calculadora-profesores/",
  },

  openGraph: {
    title: "Calculadora de Notas para Profesores | CalcuNotas",
    description:
      "Califica exámenes, pruebas y tareas al instante: porcentaje, respuestas correctas e incorrectas y calificación en letra. Gratis, sin registro.",
    url: "https://calcunotas.com/calculadora-profesores/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: "https://calcunotas.com/og/calculadora-profesores.png",
        width: 1200,
        height: 630,
        alt: "Calculadora de Notas para Profesores — CalcuNotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Notas para Profesores | CalcuNotas",
    description:
      "Herramienta gratuita para profesores: porcentaje, respuestas correctas e incorrectas y calificación en letra al instante.",
    images: ["https://calcunotas.com/og/calculadora-profesores.png"],
  },
  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

const FUENTES = [
  { nombre: "Ministerio de Educación, Formación Profesional y Deportes — España", url: "https://www.educacionfpydeportes.gob.es/" },
];

export default function CalculadoraProfesores() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── HERO ── */}
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
                <span itemProp="name" aria-current="page">Calculadora de Notas para Profesores</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-2">
            Calculadora de Notas para Profesores
          </h1>

          <p className="text-[13px] text-[#8a94a6] mb-4">
            Actualizado el 30 de agosto de 2026 · Revisado por el{" "}
            <a href="/sobre-nosotros/" className="underline underline-offset-2 hover:text-blue-600">
              equipo editorial de CalcuNotas
            </a>
          </p>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta calculadora de notas para profesores y califica exámenes,
            pruebas, tareas y ejercicios al instante. Obtén el porcentaje,
            las respuestas correctas e incorrectas y la calificación en letra
            sin hacer cálculos manuales.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Porcentaje de examen al instante",
              "Respuestas correctas e incorrectas",
              "Calificación en letra",
              "Cálculo de nota de prueba",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-bold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATOR + SIDEBAR ── */}
      <section className="pb-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <TestGradeCalculator />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* ── CONTENT ARTICLE ── */}
      <section className="pb-14">
        <div className=" mx-auto">
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.05)] overflow-hidden" itemScope itemType="https://schema.org/Article">
            <div className="p-7 md:p-9">

              {/* RESUMEN RÁPIDO — AEO Featured Snippet */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-[26px] font-bold tracking-[-0.03em] mb-4">
                  Resumen Rápido
                </h2>
                <p className="text-gray-700 leading-8">
                  Una calculadora de notas para profesores permite calcular
                  porcentajes de examen, resultados de pruebas, calificaciones
                  en letra y notas de tareas de forma inmediata. En lugar de
                  hacer los cálculos a mano, el docente introduce el total de
                  preguntas y las respuestas correctas, y obtiene el resultado
                  al instante.{" "}
                  <a
                    href="/nota-final/"
                    className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-4"
                  >
                    Calcula también la nota final
                  </a>{" "}
                  que necesita el alumno para aprobar.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Cómo calculan las notas los profesores
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    Los profesores calculan las notas comparando las respuestas
                    correctas con el total de preguntas del examen. El resultado se
                    convierte en un porcentaje que permite evaluar el rendimiento del
                    estudiante de forma objetiva y consistente.
                  </p>

                  <p>
                    Este método se utiliza en colegios, institutos, universidades y
                    plataformas de aprendizaje online porque facilita la corrección de
                    pruebas y reduce los errores de cálculo manual.
                  </p>

                  <p>
                    Una calculadora de notas automatiza este proceso y muestra el
                    porcentaje final, las respuestas incorrectas y la calificación en
                    letra en cuestión de segundos.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Cómo calcular respuestas incorrectas
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    Además del porcentaje, muchos profesores necesitan conocer el
                    número de respuestas incorrectas para analizar los resultados de
                    una prueba. El cálculo es sencillo y puede realizarse en pocos
                    segundos.
                  </p>

                  <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold text-center">
                    Respuestas Incorrectas = Total de Preguntas − Respuestas Correctas
                  </div>

                  <p>
                    Por ejemplo, si un examen tiene 50 preguntas y el estudiante
                    respondió correctamente 42, entonces existen 8 respuestas
                    incorrectas. Esta información ayuda a identificar áreas de mejora
                    y temas que requieren más práctica.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Ejemplos de cálculo de notas
                </h2>

                <div className="grid gap-5 md:grid-cols-3">
                  {[
                    { preguntas: "20 preguntas", resultado: "18 correctas = 90%" },
                    { preguntas: "50 preguntas", resultado: "42 correctas = 84%" },
                    { preguntas: "100 preguntas", resultado: "76 correctas = 76%" },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <h3 className="font-semibold text-gray-800 mb-3">{item.preguntas}</h3>
                      <p className="text-gray-700">{item.resultado}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Tipos de evaluaciones compatibles
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "Exámenes finales",
                    "Pruebas cortas",
                    "Tareas académicas",
                    "Cuestionarios online",
                    "Proyectos escolares",
                    "Actividades prácticas",
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-slate-50 p-5">
                      <div className="text-gray-800 font-medium">✓ {item}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Diferencia entre porcentaje y nota final
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    El porcentaje representa el resultado obtenido en una prueba
                    específica. Por ejemplo, responder correctamente 45 de 50 preguntas
                    equivale a un 90%.
                  </p>

                  <p>
                    La nota final, en cambio, puede incluir varios elementos como
                    exámenes, tareas, participación en clase y proyectos. Cada uno de
                    estos componentes puede tener un peso diferente dentro de la
                    evaluación general del estudiante.
                  </p>

                  <p>
                    Comprender esta diferencia ayuda a interpretar correctamente los
                    resultados académicos y a planificar mejor el rendimiento futuro.
                  </p>
                </div>
              </section>

              {/* Cómo usar — visible steps matching the HowTo schema */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Cómo usar la calculadora de notas para profesores
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "Introduce el total de preguntas",
                      text: "Indica cuántas preguntas tiene el examen, prueba, cuestionario o tarea. Si la evaluación se califica por puntos, utiliza el total de puntos posibles.",
                    },
                    {
                      step: "2",
                      title: "Añade las respuestas correctas",
                      text: "Escribe cuántas preguntas respondió correctamente el estudiante. El número de respuestas correctas no puede ser mayor que el total de preguntas.",
                    },
                    {
                      step: "3",
                      title: "Comprueba el porcentaje",
                      text: "La herramienta convierte automáticamente el resultado en un porcentaje. Por ejemplo, 24 respuestas correctas de 30 preguntas equivalen a un 80%.",
                    },
                    {
                      step: "4",
                      title: "Interpreta la calificación",
                      text: "Utiliza el porcentaje obtenido junto con la escala de calificación de tu centro educativo para determinar la nota correspondiente.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="rounded-2xl border border-gray-200 bg-white p-6 flex gap-5 items-start">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-[18px] font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-700 leading-8">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Puntos-based grading — unique formula, not covered elsewhere */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Cómo calcular una nota cuando el examen usa puntos
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    No todos los exámenes tienen preguntas con el mismo valor. En algunas
                    evaluaciones, cada ejercicio puede tener una cantidad diferente de
                    puntos. En ese caso, el porcentaje se calcula comparando los puntos
                    obtenidos con el total de puntos posibles.
                  </p>

                  <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto text-center text-[16px]">
                    Porcentaje = (Puntos Obtenidos ÷ Puntos Posibles) × 100
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                      <h3 className="font-semibold text-gray-800 mb-3">Ejemplo</h3>
                      <p>Un examen tiene un máximo de 80 puntos y el estudiante obtiene 68 puntos.</p>
                    </div>

                    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                      <h3 className="font-semibold text-gray-800 mb-3">Resultado</h3>
                      <p className="font-bold text-gray-800">(68 ÷ 80) × 100 = 85%</p>
                    </div>
                  </div>

                  <p>
                    Este método es especialmente útil cuando una pregunta de desarrollo,
                    problema matemático o proyecto vale más puntos que una pregunta de
                    respuesta corta. Lo importante es utilizar el total real de puntos
                    posibles de la evaluación.
                  </p>
                </div>
              </section>

              {/* Weighted grading — unique formula, not covered elsewhere */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Cómo calcular una nota ponderada
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    Cuando un profesor utiliza diferentes porcentajes para cada actividad,
                    no basta con promediar las notas directamente. Cada componente debe
                    multiplicarse por el peso que tiene dentro de la calificación final.
                  </p>

                  <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto text-center text-[16px]">
                    Nota Final = (Nota × Peso) + (Nota × Peso) + ...
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    {[
                      { title: "Examen", result: "85% × 50% = 42,5%" },
                      { title: "Tareas", result: "90% × 30% = 27%" },
                      { title: "Participación", result: "80% × 20% = 16%" },
                    ].map((item, index) => (
                      <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                        <h3 className="font-semibold text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.result}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold text-center">
                    42,5% + 27% + 16% = 85,5%
                  </div>

                  <p>
                    En este ejemplo, la calificación final ponderada sería del 85,5%.
                    La escala utilizada para convertir ese porcentaje en una letra o nota
                    numérica debe coincidir con las reglas de la institución educativa.
                  </p>
                </div>
              </section>

              {/* Regional scale awareness — unique table, referenced by FAQ */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  ¿La misma nota significa lo mismo en todos los países?
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    No necesariamente. El porcentaje obtenido en un examen puede ser el
                    mismo, pero la forma de convertirlo en una letra, una nota numérica o
                    una categoría de rendimiento puede cambiar según el país, el colegio,
                    la universidad o el profesor.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full min-w-[700px] border-collapse">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="px-5 py-4 text-left font-semibold">Elemento</th>
                          <th className="px-5 py-4 text-left font-semibold">Puede variar</th>
                          <th className="px-5 py-4 text-left font-semibold">Qué comprobar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Escala de porcentaje", "Sí", "Intervalos definidos por la institución"],
                          ["Nota en letra", "Sí", "Correspondencia entre porcentaje y letra"],
                          ["Redondeo", "Sí", "Número de decimales permitido"],
                          ["Penalización", "Sí", "Reglas para errores o preguntas en blanco"],
                        ].map((row, index) => (
                          <tr key={index} className="border-b border-gray-200 bg-white">
                            {row.map((cell, i) => (
                              <td key={i} className="px-5 py-4 text-gray-700">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    Por eso, el porcentaje calculado por esta herramienta debe considerarse
                    el resultado matemático de la evaluación. Para asignar una letra o una
                    nota oficial, utiliza siempre la escala publicada por tu centro
                    educativo.
                  </p>
                </div>
              </section>

              {/* QUÉ ES */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  ¿Qué es una calculadora de notas para profesores?
                </h2>
                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    Una calculadora de notas para profesores es una herramienta
                    en línea que convierte el número de respuestas correctas en
                    un porcentaje y una calificación en letra de forma
                    automática. Los docentes que gestionan varias clases y
                    corrigen muchas pruebas cada semana la usan para ahorrar
                    tiempo y evitar errores de cálculo.
                  </p>
                  <p>
                    En lugar de calcular porcentajes manualmente después de cada
                    examen o quiz, el profesor introduce el total de preguntas y
                    las respuestas correctas, y la herramienta genera el
                    resultado de inmediato. Esto agiliza la corrección y hace
                    que las calificaciones sean más consistentes.{" "}
                    <a
                      href="/"
                      className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-4"
                    >
                      Ver la calculadora de notas principal
                    </a>
                    .
                  </p>
                  <p className="text-gray-700 leading-8">
                    Este tipo de herramientas digitales de calificación es
                    cada vez más común en la gestión de aula: reduce el tiempo
                    de corrección y ayuda a mantener criterios de evaluación
                    consistentes entre distintos grupos y exámenes.
                  </p>
                </div>
              </section>

              {/* FÓRMULA */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Fórmula de la calculadora de notas para profesores
                </h2>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-7 text-center text-[16px]">
                  Porcentaje = (Respuestas Correctas ÷ Total de Preguntas) × 100
                </div>

                <p className="text-gray-700 leading-8 mb-5">
                  Esta fórmula es la más utilizada en colegios, universidades
                  y plataformas de aprendizaje en línea para calcular
                  porcentajes de examen y notas de clase en países
                  hispanohablantes.
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold mb-7 text-center">
                  (45 ÷ 50) × 100 = 90%
                </div>

                <p className="text-gray-700 leading-8">
                  En este ejemplo, el alumno respondió 45 preguntas correctamente
                  de un total de 50, obteniendo un 90%. Eso equivale a una nota
                  de sobresaliente o excelente en la mayoría de sistemas
                  educativos de habla hispana.
                </p>
              </section>

              {/* BENEFICIOS */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Ventajas de usar esta herramienta de calificación
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "Corrección de clase más rápida",
                    "Cálculo de porcentaje sin errores",
                    "Conversión fácil a calificación en letra",
                    "Útil para profesores y estudiantes",
                    "Válida para pruebas, tareas y exámenes",
                    "Reduce los errores de cálculo manual",
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <div className="font-medium text-gray-800">✓ {item}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TABLA */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Escala de{" "}
                  <a
                    href="/calificador-rapido/"
                    className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-4"
                  >
                    calificaciones en letra
                  </a>{" "}
                  más usada
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-semibold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-semibold">Calificación</th>
                        <th className="px-5 py-4 text-left font-semibold">Rendimiento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["90% - 100%", "A / Sobresaliente", "Excelente"],
                        ["80% - 89%", "B / Notable", "Bueno"],
                        ["70% - 79%", "C / Bien", "Aceptable"],
                        ["60% - 69%", "D / Suficiente", "Por debajo de la media"],
                        ["Menos del 60%", "F / Suspenso", "Insuficiente"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                          {row.map((cell, i) => (
                            <td key={i} className="px-5 py-4 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-gray-500 mt-3">
                  Fuente de referencia:{" "}
                  {FUENTES.map((f, i) => (
                    <span key={f.url}>
                      <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2">
                        {f.nombre}
                      </a>
                      {i < FUENTES.length - 1 ? " · " : ""}
                    </span>
                  ))}
                  . La escala exacta puede variar según país e institución.
                </p>
              </section>

              {/* ERRORES COMUNES */}
              <section className="mb-14">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
                  <h2 className="text-[28px] font-bold tracking-[-0.03em] mb-5">
                    Errores frecuentes al calificar exámenes
                  </h2>
                  <ul className="space-y-4 text-gray-700 leading-8">
                    <li>• Ingresar un número total de preguntas incorrecto.</li>
                    <li>• Olvidar los sistemas de calificación ponderada.</li>
                    <li>• Confundir preguntas sin responder con respuestas incorrectas.</li>
                    <li>• Usar escalas de calificación distintas sin darse cuenta.</li>
                    <li>• Errores de redondeo al calcular porcentajes a mano.</li>
                  </ul>
                </div>
              </section>

              {/* CONSEJOS */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Consejos de estudio para mejorar las notas
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "Practica exámenes de simulacro cada semana",
                    "Lleva un seguimiento de las materias con más errores",
                    "Revisa los fallos después de cada prueba",
                    "Mejora la gestión del tiempo en el examen",
                    "Empieza por los temas más difíciles",
                    "Estudia de forma constante antes de los exámenes",
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-slate-50 p-5">
                      <div className="text-gray-800 font-medium">✔ {item}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CALCULADORAS RELACIONADAS */}
              <section className="mb-14">
                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-7">
                  <h2 className="text-[28px] font-bold tracking-[-0.03em] mb-5">
                    Otras calculadoras de notas
                  </h2>
                  <div className="grid gap-5 md:grid-cols-3">
                    {[
                      {
                        title: "Calificador Rápido",
                        text: "Genera tablas de calificación rápidas para pruebas y tareas.",
                        href: "/calificador-rapido/",
                      },
                      {
                        title: "Calculadora de Nota Final",
                        text: "Estima la nota que necesitas en el examen final para aprobar.",
                        href: "/nota-final/",
                      },
                      {
                        title: "Calculadora de GPA",
                        text: "Calcula el GPA semestral y acumulado de forma sencilla.",
                        href: "/calculadora-gpa/",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
                      >
                        <h3 className="text-[18px] font-semibold mb-3 text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-7 text-[15px]">
                          {item.text}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              {/* Author / E-E-A-T block */}
              <section className="mb-14" aria-labelledby="autor-heading">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h2 id="autor-heading" className="text-[22px] font-bold tracking-[-0.02em] mb-3">
                    Quién escribe y revisa este contenido
                  </h2>
                  <p className="text-gray-700 text-[14px] leading-7">
                    Este artículo ha sido redactado y revisado por el{" "}
                    <a href="/sobre-nosotros/" className="text-blue-600 underline underline-offset-2">
                      equipo editorial de CalcuNotas
                    </a>
                    , especializado en herramientas de cálculo académico.
                    Publicado el 15 de enero de 2024 y actualizado por última
                    vez el 30 de agosto de 2026.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-gray-50 py-14 border-t">
                <div className="xl:px-[69px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Profesores y estudiantes tienen dudas habituales sobre
                      cómo calcular notas de examen, porcentajes de prueba,
                      tareas y calificaciones en letra. Aquí respondemos las
                      preguntas más comunes sobre esta calculadora de notas
                      para docentes.
                    </p>
                  </div>

                  <div
                    className="bg-slate-800 rounded p-6 space-y-4 shadow-xl"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                  >
                    {FAQS_DATA.map((faq, idx) => (
                      <details
                        key={idx}
                        className={`group ${idx < FAQS_DATA.length - 1 ? "border-b border-slate-700 pb-4" : ""}`}
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3 itemProp="name">{faq.q}</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <p className="mt-4 text-slate-400" itemProp="text">
                            {faq.a}
                          </p>
                        </div>
                      </details>
                    ))}
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