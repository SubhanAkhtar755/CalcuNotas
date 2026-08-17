import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GradeCalculatorLab from "@/app/components/GradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";


export const dynamic = "force-static";
export const revalidate = false;

/* ─────────────────────────────────────────────
   STEP 9 · ON-PAGE SEO — METADATA
   ───────────────────────────────────────────── */
export const metadata = {
  /* Title (chosen from 10 options — best CTR + keyword match) */
  title: "Calculadora de Notas Gratis | Porcentaje, Letras y Puntos",

  /* Meta description (chosen from 10 options) */
  description:
    "Calcula tu nota actual del curso por porcentaje, letra o puntos con pesos ponderados. Descubre la nota que necesitas en el examen final. Gratis y sin registro.",

  keywords: [
    // Primary
    "calculadora de notas",
    "calcular nota",
    "calculadora de calificaciones",
    // Secondary
    "calculadora de notas ponderadas",
    "calcular promedio con pesos",
    "calculadora nota final",
    "nota que necesito en el examen final",
    // Long-tail
    "cómo calcular mi nota actual del curso",
    "calculadora de notas por porcentaje online gratis",
    "calcular nota ponderada con porcentajes",
    "qué nota necesito para aprobar",
    "calculadora de promedio ponderado escolar",
    // Semantic / LSI
    "promedio ponderado",
    "calificación ponderada",
    "escala de calificaciones",
    "nota en letra",
    "calificación por puntos",
    "nota de examen final",
    // Country-specific
    "calculadora de notas Chile",
    "calculadora de notas Colombia",
    "calculadora de calificaciones México",
    "calculadora de notas España",
    "calcular nota Argentina",
  ],

  alternates: {
    canonical: "https://calcunotas.com/calculadora-de-notas/",
    languages: {
      es: "https://calcunotas.com/calculadora-de-notas/",
      "es-ES": "https://calcunotas.com/calculadora-de-notas/",
      "es-MX": "https://calcunotas.com/calculadora-de-notas/",
      "es-AR": "https://calcunotas.com/calculadora-de-notas/",
      "es-CO": "https://calcunotas.com/calculadora-de-notas/",
      "es-CL": "https://calcunotas.com/calculadora-de-notas/",
      "es-PE": "https://calcunotas.com/calculadora-de-notas/",
      "es-VE": "https://calcunotas.com/calculadora-de-notas/",
      "es-EC": "https://calcunotas.com/calculadora-de-notas/",
      "es-BO": "https://calcunotas.com/calculadora-de-notas/",
      "es-PY": "https://calcunotas.com/calculadora-de-notas/",
      "es-UY": "https://calcunotas.com/calculadora-de-notas/",
      "es-GT": "https://calcunotas.com/calculadora-de-notas/",
      "es-CU": "https://calcunotas.com/calculadora-de-notas/",
      "es-DO": "https://calcunotas.com/calculadora-de-notas/",
      "es-HN": "https://calcunotas.com/calculadora-de-notas/",
      "es-SV": "https://calcunotas.com/calculadora-de-notas/",
      "es-NI": "https://calcunotas.com/calculadora-de-notas/",
      "es-PA": "https://calcunotas.com/calculadora-de-notas/",
      "es-CR": "https://calcunotas.com/calculadora-de-notas/",
    },
  },

  openGraph: {
    title: "Calculadora de Notas Gratis | Porcentaje, Letras y Puntos",
    description:
      "Calcula tu nota actual del curso por porcentaje, letra o puntos con pesos ponderados. Descubre la nota que necesitas en el examen final.",
    url: "https://calcunotas.com/calculadora-de-notas/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Notas Gratis | Porcentaje, Letras y Puntos",
    description:
      "Calcula tu nota actual del curso por porcentaje, letra o puntos. Descubre la nota que necesitas en el examen final. Gratis, sin registro.",
  },
};

/* ─────────────────────────────────────────────
   STEP 11 · SCHEMA MARKUP — JSON-LD
   ───────────────────────────────────────────── */
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://calcunotas.com/calculadora-de-notas/",
      url: "https://calcunotas.com/calculadora-de-notas/",
      name: "Calculadora de Notas Gratis | Porcentaje, Letras y Puntos",
      description:
        "Calculadora de notas online gratuita para calcular tu calificación actual por porcentaje, nota en letra o puntos. Incluye cálculo de nota ponderada y nota necesaria en el examen final.",
      inLanguage: "es",
      isPartOf: { "@id": "https://calcunotas.com/" },
      breadcrumb: { "@id": "https://calcunotas.com/calculadora-de-notas/#breadcrumb" },
      potentialAction: {
        "@type": "UseAction",
        target: "https://calcunotas.com/calculadora-de-notas/",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://calcunotas.com/calculadora-de-notas/#breadcrumb",
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
          name: "Calculadora de Notas",
          item: "https://calcunotas.com/calculadora-de-notas/",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Calculadora de Notas CalcuNotas",
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: "https://calcunotas.com/calculadora-de-notas/",
      description:
        "Herramienta gratuita para calcular notas del curso por porcentaje, letra o puntos con soporte para pesos ponderados y cálculo de nota necesaria en el examen final.",
      featureList: [
        "Cálculo de nota por porcentaje",
        "Cálculo de nota en letra",
        "Cálculo de nota por puntos",
        "Promedio ponderado",
        "Nota necesaria en el examen final",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo calculo mi nota actual del curso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiplica cada nota de evaluación por su peso porcentual, suma todos los puntajes ponderados y divide entre el peso total. Por ejemplo: (85% × 30%) + (90% × 40%) + (78% × 30%) = 85.4%.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué nota necesito en el examen final para aprobar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usa la fórmula: Nota necesaria en el final = (Nota objetivo − Nota actual × (1 − Peso del final)) ÷ Peso del final. Por ejemplo, si tu nota actual es 75%, tu objetivo es 80% y el final vale 40%: (80 − 75 × 0.6) ÷ 0.4 = 87.5%.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo funciona una nota ponderada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una nota ponderada asigna diferente importancia a cada evaluación. Si los exámenes valen 50%, los trabajos 30% y la participación 20%, cada nota se multiplica por su peso antes de promediar. Esto refleja con más precisión el sistema real de calificación de tu curso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo calcular notas en letra (A, B, C, D, F)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La calculadora admite notas en letra. A equivale a 95%, A- a 92%, B+ a 88%, B a 85%, B- a 82%, C+ a 78%, C a 75%, C- a 72%, D+ a 68%, D a 65%, D- a 62% y F a 55% por defecto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo calcular notas por puntos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Divide los puntos obtenidos entre los puntos totales posibles y multiplica por 100. Por ejemplo, 45 de 50 puntos = (45 ÷ 50) × 100 = 90%. Si tienes varias evaluaciones por puntos, suma todos los puntos obtenidos y divídelos entre el total de puntos posibles.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué países sirve esta calculadora de notas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para todos los países de habla hispana: Chile (escala 1.0–7.0), Colombia (0.0–5.0), México (0–10), España (0–10), Argentina, Perú, Ecuador, Bolivia, Venezuela, Uruguay, Paraguay, Guatemala, Cuba, República Dominicana, Honduras, El Salvador, Nicaragua, Panamá y Costa Rica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es la fórmula del promedio ponderado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Promedio ponderado = Σ (Nota_i × Peso_i) ÷ Σ Peso_i. Cada nota se multiplica por su peso, se suman todos los productos y se divide entre la suma de todos los pesos. Si los pesos suman 100%, el denominador es 100.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué diferencia hay entre promedio simple y ponderado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El promedio simple suma todas las notas y divide entre el número de evaluaciones, tratándolas como igualmente importantes. El promedio ponderado asigna un peso distinto a cada evaluación, dando más importancia a ciertos trabajos, exámenes o proyectos según su valor en el curso.",
          },
        },
        {
          "@type": "Question",
          name: "¿La calculadora funciona en Chile con escala de 1.0 a 7.0?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes ingresar notas en escala chilena (1.0 a 7.0) usando la opción de puntos o porcentaje. La nota mínima de aprobación en Chile es generalmente 4.0, equivalente aproximado al 60% en escala porcentual.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo usar esta herramienta para calcular el promedio del semestre completo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Agrega todas tus evaluaciones del semestre (parciales, trabajos, proyectos, examen final) con sus pesos respectivos. La calculadora combina todo y te muestra tu promedio final del semestre automáticamente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiene que pesar el examen final para que me cambie la nota significativamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un examen final con peso del 30–40% puede cambiar tu nota entre 5 y 15 puntos porcentuales. Si el final vale solo 10–15%, el impacto es menor. Cuanto mayor sea el peso del examen, más determinante será para tu calificación final del curso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es la escala de notas en letra más usada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La escala A–F más común es: A (90–100%), B (80–89%), C (70–79%), D (60–69%), F (menos del 60%). Algunos sistemas incluyen signos + y − para mayor precisión, como A+ (97–100%), A (93–96%), A- (90–92%), y así sucesivamente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es fiable calcular notas online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, siempre que ingreses los datos correctamente. Las fórmulas de promedio ponderado y cálculo de nota necesaria son matemáticamente exactas. Verifica siempre los pesos del curso en el programa oficial para asegurarte de usar los valores correctos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo calcular la nota mínima que necesito para no reprobar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Usa la función de nota necesaria en el examen final ingresando la nota mínima de aprobación de tu institución como nota objetivo (4.0 en Chile, 3.0 en Colombia, 5.0 en muchas universidades de México). La calculadora te dirá exactamente qué necesitas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántas evaluaciones puedo agregar a la calculadora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes agregar tantas evaluaciones como necesites: tareas, quizzes, pruebas, exámenes parciales, proyectos, laboratorios, participación y examen final. No hay límite en el número de evaluaciones.",
          },
        },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */
export default function CalculadoraDeNotas() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <InvisibleHeader />

      {/* ── HERO ── */}
      <section
        aria-label="Encabezado de la calculadora de notas"
        className="pt-10 pb-10 px-8 bg-gradient-to-b from-blue-50 to-[#f7f9fc]"
      >
        <div className=" mx-auto">

          {/* Breadcrumb — STEP 9 */}
          <nav aria-label="Ruta de navegación" className="text-sm text-[#667085] mb-3">
            <ol className="flex flex-wrap gap-1 list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item" className="hover:text-blue-600 transition-colors">
                  <span itemProp="name">Inicio</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-[#111827] font-medium">Calculadora de Notas</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* H1 */}
          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Notas
          </h1>

          {/* Hero description — GEO/AEO optimized direct answer */}
          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Calcula tu <strong>nota actual del curso</strong> ingresando cada evaluación con su peso. Soporta tres métodos de entrada: <strong>porcentaje</strong>, <strong>nota en letra</strong> y <strong>puntos</strong>. También calcula la <strong>nota que necesitas en el examen final</strong> para alcanzar tu meta académica.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3" role="list" aria-label="Funciones disponibles">
            {[
              "✓ Notas en porcentaje",
              "✓ Notas en letra (A–F)",
              "✓ Notas por puntos",
              "✓ Promedio ponderado",
              "✓ Nota necesaria en el final",
            ].map((item, index) => (
              <span
                key={index}
                role="listitem"
                className="bg-white border border-gray-200 text-blue-700 px-4 py-2 rounded-full text-[13px] font-bold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATOR + SIDEBARS ── */}
      <section aria-label="Calculadora de notas interactiva" className="pb-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <GradeCalculatorLab />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* ── CONTENT ARTICLE ── */}
      <section aria-label="Guía completa de la calculadora de notas" className="pb-14">
        <div className=" mx-auto">
          <article
            className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden"
            itemScope
            itemType="https://schema.org/Article"
          >

            {/* ── QUICK INTRO / GEO KNOWLEDGE BLOCK ── */}
            <section className="p-7 md:p-9 border-b border-gray-200" aria-labelledby="intro-heading">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2
                  id="intro-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-4"
                >
                  Calculadora de Notas: Calcula tu Calificación Actual
                </h2>

                {/* GEO-optimized entity-rich paragraph */}
                <p className="text-gray-700 leading-8">
                  Esta <strong>calculadora de notas</strong> te permite calcular tu <strong>calificación actual del curso</strong> usando <strong>porcentajes</strong>, <strong>notas en letra</strong> o <strong>puntos</strong>, con soporte para <strong>evaluaciones ponderadas</strong>. Es compatible con los sistemas de calificación de Chile, Colombia, México, España, Argentina y toda Latinoamérica.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Agrega tus evaluaciones (tareas, pruebas, exámenes parciales, proyectos, participación y examen final), ingresa cada nota y su peso, y obtén tu <strong>promedio ponderado</strong> al instante. También puedes usar la función de <strong>nota necesaria en el examen final</strong> para planificar cuánto necesitas sacar en el último examen y alcanzar tu nota objetivo.
                </p>

                {/* Quick fact block — AEO/Featured Snippet target */}
                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Métodos de entrada", value: "Porcentaje · Letra · Puntos" },
                    { label: "Fórmula", value: "Σ (Nota × Peso) ÷ Peso Total" },
                    { label: "Costo", value: "Gratis, sin registro" },
                  ].map((fact, i) => (
                    <div key={i} className="bg-white rounded-xl border border-blue-100 p-4">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{fact.label}</p>
                      <p className="text-gray-800 font-semibold text-sm">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* ── WHAT IS — Definition Block (GEO/AEO) ── */}
              <section className="mb-12" aria-labelledby="que-es-heading">
                <h2 id="que-es-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es una calculadora de notas?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Una <strong>calculadora de notas</strong> es una herramienta digital que calcula tu <strong>calificación global del curso</strong> combinando las notas de cada evaluación según su peso en la nota final. A diferencia de un promedio simple, gestiona automáticamente las diferencias de valor entre tareas, pruebas, proyectos y exámenes.
                  </p>

                  <p>
                    En la mayoría de los cursos, no todas las evaluaciones valen lo mismo. Por ejemplo: las tareas pueden contar el <strong>20%</strong>, los parciales el <strong>30%</strong>, el proyecto el <strong>15%</strong> y el examen final el <strong>35%</strong>. Una calculadora de notas ponderadas multiplica cada calificación por su peso y produce un resultado más preciso que sumar y dividir.
                  </p>

                  <p>
                    Esta herramienta es especialmente útil para <strong>estudiantes de colegio y universidad</strong> que quieren conocer su nota real, identificar en qué evaluaciones deben enfocarse y planificar su desempeño antes del examen final.
                  </p>
                </div>
              </section>

              {/* ── HOW IT WORKS — Three Methods (UNIQUE vs competitors) ── */}
              <section className="mb-12" aria-labelledby="metodos-heading">
                <h2 id="metodos-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Tres formas de calcular tu nota: porcentaje, letra y puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  A diferencia de otras calculadoras, esta herramienta soporta <strong>tres métodos de entrada de notas</strong>. Elige el que usa tu profesor o institución.
                </p>

                <div className="grid gap-5 md:grid-cols-3">
                  {/* Percentage */}
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-blue-700 font-black text-sm">%</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Notas en Porcentaje</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ingresa notas como 85%, 92%, 76%. El método más común en universidades de EE.UU. y muchas instituciones latinoamericanas. Ingresa el porcentaje y el peso de cada evaluación.
                    </p>
                    <p className="mt-3 text-sm text-blue-700 font-semibold">Ejemplo: 88% con peso 30%</p>
                  </div>

                  {/* Letter */}
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <span className="text-green-700 font-black text-sm">A–F</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Notas en Letra</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa este método si tu clase califica con A, B, C, D o F (con o sin signos +/−). La calculadora convierte automáticamente cada letra a porcentaje para calcular el promedio ponderado.
                    </p>
                    <p className="mt-3 text-sm text-green-700 font-semibold">Ejemplo: B+ con peso 25%</p>
                  </div>

                  {/* Points */}
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <span className="text-purple-700 font-black text-sm">Pts</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Notas por Puntos</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ingresa los puntos obtenidos y los puntos totales posibles. Ideal para cursos donde cada evaluación se suma a un total general de puntos, como 45/50 o 180/200.
                    </p>
                    <p className="mt-3 text-sm text-purple-700 font-semibold">Ejemplo: 45 de 50 puntos</p>
                  </div>
                </div>
              </section>

              {/* ── HOW TO USE ── */}
              <section className="mb-12" aria-labelledby="como-usar-heading">
                <h2 id="como-usar-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Cómo usar la calculadora de notas paso a paso
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Usar la calculadora tarda menos de un minuto. Sigue estos pasos para obtener tu calificación actual del curso con precisión.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      step: 1,
                      title: "Elige el tipo de nota",
                      text: "Selecciona Porcentaje, Letra (A–F) o Puntos según cómo tu profesor registra las calificaciones del curso.",
                    },
                    {
                      step: 2,
                      title: "Agrega cada evaluación",
                      text: "Añade tareas, deberes, pruebas, exámenes parciales, proyectos, laboratorios y cualquier otra evaluación del curso.",
                    },
                    {
                      step: 3,
                      title: "Ingresa la nota y el peso",
                      text: "Escribe tu puntaje obtenido y el porcentaje que representa esa evaluación en la nota final del curso.",
                    },
                    {
                      step: 4,
                      title: "Ve tu nota actual al instante",
                      text: "La calculadora combina todas tus notas ponderadas y muestra tu calificación actual del curso en tiempo real.",
                    },
                    {
                      step: 5,
                      title: "Calcula la nota del examen final (opcional)",
                      text: "Ingresa tu nota objetivo y el peso del examen final para ver exactamente cuánto necesitas sacar en el último examen.",
                    },
                    {
                      step: 6,
                      title: "Planifica tu estrategia académica",
                      text: "Usa los resultados para enfocarte en las evaluaciones de mayor peso y tomar decisiones de estudio con información real.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="rounded-2xl border border-gray-200 p-5 bg-white"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FORMULA — Weighted Average (Featured Snippet target) ── */}
              <section className="mb-12" aria-labelledby="formula-heading">
                <h2 id="formula-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Fórmula del promedio ponderado de notas
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  La <strong>fórmula del promedio ponderado</strong> multiplica cada calificación por su peso, suma todos los productos y divide entre el peso total. Esta fórmula es la base del cálculo de nota que usan la mayoría de los cursos escolares y universitarios.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center" role="math" aria-label="Fórmula del promedio ponderado">
                  <p className="text-[15px] mb-1 text-slate-400 font-normal">Fórmula del Promedio Ponderado</p>
                  <p className="text-[17px]">Nota = Σ (Calificación<sub>i</sub> × Peso<sub>i</sub>) ÷ Σ Peso<sub>i</sub></p>
                </div>

                <p className="text-gray-700 leading-8">
                  Si los pesos de todas las evaluaciones suman exactamente el 100%, el denominador es 100 y no es necesario dividir de nuevo. Si algunos pesos están incompletos (porque el examen final aún no se ha realizado), la fórmula solo considera el peso de las evaluaciones ya completadas.
                </p>
              </section>

              {/* ── EXAMPLE — Weighted Grade Calculation ── */}
              <section className="mb-12" aria-labelledby="ejemplo-heading">
                <h2 id="ejemplo-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo de cálculo de nota ponderada
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Supón que tu curso tiene cuatro tipos de evaluaciones con los siguientes pesos y calificaciones:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[680px] border-collapse" aria-label="Ejemplo de cálculo de nota ponderada">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold" scope="col">Evaluación</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Nota Obtenida</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Peso en el Curso</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Puntaje Ponderado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Tareas", "90%", "20%", "90 × 0.20 = 18.00"],
                        ["Pruebas", "84%", "20%", "84 × 0.20 = 16.80"],
                        ["Proyecto", "95%", "25%", "95 × 0.25 = 23.75"],
                        ["Examen Final", "80%", "35%", "80 × 0.35 = 28.00"],
                      ].map((row, index) => (
                        <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                          {row.map((cell, i) => (
                            <td key={i} className="px-5 py-4 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                      <tr className="bg-blue-50 font-bold">
                        <td className="px-5 py-4 text-gray-900" colSpan={3}>Nota Final del Curso</td>
                        <td className="px-5 py-4 text-blue-700">18 + 16.80 + 23.75 + 28 = <strong>86.55%</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    <strong>Resultado:</strong> Con estas calificaciones, obtienes un <strong>86.55%</strong>, equivalente a una nota <strong>B</strong> en la escala estándar A–F. Cambia cualquier valor en la calculadora de arriba para ver cómo afecta tu nota final.
                  </p>
                </div>
              </section>

              {/* ── FINAL EXAM FORMULA ── */}
              <section className="mb-12" aria-labelledby="examen-final-heading">
                <h2 id="examen-final-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué nota necesito en el examen final? Fórmula y ejemplo
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Si tu examen final aún no se ha realizado, puedes calcular exactamente qué puntaje necesitas para alcanzar tu nota objetivo. Solo necesitas tres datos: tu <strong>nota actual</strong>, tu <strong>nota objetivo</strong> y el <strong>peso del examen final</strong>.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center" role="math" aria-label="Fórmula de nota necesaria en el examen final">
                  <p className="text-[15px] mb-1 text-slate-400 font-normal">Nota Necesaria en el Examen Final</p>
                  <p className="text-[16px]">Nota Final = (Nota Objetivo − Nota Actual × (1 − Peso Final)) ÷ Peso Final</p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 mb-5">
                  <h3 className="text-xl font-bold mb-3">Ejemplo paso a paso</h3>
                  <ul className="text-gray-700 leading-8 space-y-2">
                    <li>📌 <strong>Nota actual:</strong> 82%</li>
                    <li>🎯 <strong>Nota objetivo:</strong> 90%</li>
                    <li>⚖️ <strong>Peso del examen final:</strong> 40% (0.40)</li>
                    <li className="pt-2 border-t border-gray-100">
                      <strong>Cálculo:</strong> (90 − 82 × 0.60) ÷ 0.40 = (90 − 49.2) ÷ 0.40 = 40.8 ÷ 0.40 = <strong className="text-blue-700">102%</strong>
                    </li>
                    <li className="text-sm text-gray-500">
                      En este caso, la nota objetivo es demasiado alta y puede que no sea alcanzable. Ajusta tu meta a una nota más realista.
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-8">
                  Si el resultado es mayor al 100%, significa que la nota objetivo que buscas no es alcanzable con esas condiciones. Prueba ajustando tu nota objetivo para encontrar una meta realista.
                </p>
              </section>

              {/* ── POINTS FORMULA ── */}
              <section className="mb-12" aria-labelledby="puntos-heading">
                <h2 id="puntos-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Cómo calcular notas por puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Algunos cursos no usan porcentajes por evaluación; en cambio, acumulan todos los puntos posibles a lo largo del semestre. En ese sistema, tu nota se calcula dividiendo los <strong>puntos obtenidos totales</strong> entre los <strong>puntos posibles totales</strong>.
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center" role="math" aria-label="Fórmula de nota por puntos">
                  <p className="text-[15px] mb-1 text-blue-200 font-normal">Fórmula de Calificación por Puntos</p>
                  <p>Porcentaje = (Puntos Obtenidos ÷ Puntos Totales Posibles) × 100</p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
                  <table className="w-full min-w-[500px] border-collapse" aria-label="Ejemplos de calificación por puntos">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-5 py-3 text-left font-bold text-gray-700" scope="col">Puntos Obtenidos</th>
                        <th className="px-5 py-3 text-left font-bold text-gray-700" scope="col">Puntos Posibles</th>
                        <th className="px-5 py-3 text-left font-bold text-gray-700" scope="col">Porcentaje</th>
                        <th className="px-5 py-3 text-left font-bold text-gray-700" scope="col">Nota en Letra</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["450", "500", "90.0%", "A"],
                        ["400", "500", "80.0%", "B"],
                        ["350", "500", "70.0%", "C"],
                        ["300", "500", "60.0%", "D"],
                        ["240", "500", "48.0%", "F"],
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-5 py-3 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── LETTER GRADE CONVERSION TABLE ── */}
              <section className="mb-12" aria-labelledby="escala-letras-heading">
                <h2 id="escala-letras-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Tabla de conversión: notas en letra a porcentaje
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las <strong>notas en letra</strong> (A, B, C, D, F) se convierten a porcentaje para calcular el promedio ponderado. Esta es la conversión estándar más utilizada en EE.UU. y en muchas instituciones internacionales:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[600px] border-collapse" aria-label="Tabla de conversión de notas en letra a porcentaje">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold" scope="col">Nota en Letra</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Valor GPA</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Rendimiento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["A+", "97–100%", "4.0", "Sobresaliente"],
                        ["A", "93–96%", "4.0", "Excelente"],
                        ["A−", "90–92%", "3.7", "Excelente"],
                        ["B+", "87–89%", "3.3", "Muy bueno"],
                        ["B", "83–86%", "3.0", "Bueno"],
                        ["B−", "80–82%", "2.7", "Bueno"],
                        ["C+", "77–79%", "2.3", "Satisfactorio"],
                        ["C", "73–76%", "2.0", "Satisfactorio"],
                        ["C−", "70–72%", "1.7", "Suficiente"],
                        ["D+", "67–69%", "1.3", "Por debajo del promedio"],
                        ["D", "63–66%", "1.0", "Deficiente"],
                        ["D−", "60–62%", "0.7", "Deficiente"],
                        ["F", "Menos del 60%", "0.0", "Reprobado"],
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-5 py-4 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── GRADE SCALES BY COUNTRY ── */}
              <section className="mb-12" aria-labelledby="escalas-paises-heading">
                <h2 id="escalas-paises-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Escalas de calificación por país
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Cada país hispanohablante usa una escala de calificación distinta. Esta calculadora es compatible con todas ellas mediante el método de <strong>porcentaje</strong> o <strong>puntos</strong>.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[640px] border-collapse" aria-label="Escalas de calificación por país">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold" scope="col">País</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Escala</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Nota Mínima para Aprobar</th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">Nota Máxima</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Chile", "1.0 – 7.0", "4.0", "7.0"],
                        ["Colombia", "0.0 – 5.0", "3.0 – 3.5", "5.0"],
                        ["México", "0 – 10", "6.0", "10"],
                        ["España", "0 – 10", "5.0", "10"],
                        ["Argentina", "1 – 10", "4.0 – 7.0 (varía)", "10"],
                        ["Perú", "0 – 20", "10.5 – 11", "20"],
                        ["Ecuador", "0 – 10", "7.0", "10"],
                        ["Venezuela", "1 – 20", "10", "20"],
                        ["EE.UU.", "0 – 100% / A–F", "60% / D", "100% / A+"],
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-5 py-4 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── BENEFITS ── */}
              <section className="mb-12" aria-labelledby="ventajas-heading">
                <h2 id="ventajas-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Ventajas de usar una calculadora de notas online
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Ahorra tiempo",
                      text: "No necesitas hacer cálculos manuales complejos. La herramienta calcula tu promedio ponderado al instante.",
                    },
                    {
                      title: "Elimina errores de cálculo",
                      text: "Los cálculos ponderados son propensos a errores cuando se hacen a mano. La calculadora garantiza resultados matemáticamente exactos.",
                    },
                    {
                      title: "Ayuda a establecer metas realistas",
                      text: "Puedes saber con precisión qué puntaje necesitas en evaluaciones futuras para alcanzar tu nota objetivo.",
                    },
                    {
                      title: "Permite planificar el semestre",
                      text: "Enfoca tu esfuerzo en las evaluaciones de mayor peso para maximizar el impacto en tu nota final.",
                    },
                    {
                      title: "Compatible con todos los sistemas",
                      text: "Soporta porcentaje, notas en letra A–F y puntos. Funciona para colegios, universidades y cursos técnicos.",
                    },
                    {
                      title: "Accesible desde cualquier dispositivo",
                      text: "Funciona en computador, tablet y móvil. No requiere instalación ni registro. 100% gratuita.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── COMMON MISTAKES ── */}
              <section className="mb-12" aria-labelledby="errores-heading">
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <h2 id="errores-heading" className="text-[26px] font-black tracking-[-0.04em] mb-5">
                    Errores comunes al calcular notas (y cómo evitarlos)
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    {[
                      "Olvidar incluir todas las evaluaciones del curso (tareas, participación, quizzes).",
                      "Ingresar pesos que no suman el 100%, lo que distorsiona el promedio.",
                      "Mezclar puntos y porcentajes sin convertir primero.",
                      "Tratar evaluaciones ponderadas como si fueran un promedio simple.",
                      "Ignorar el peso del examen final al estimar la nota objetivo.",
                      "Asumir que todos los profesores o instituciones usan la misma escala de letras.",
                      "No actualizar la calculadora cuando recibes nuevas calificaciones.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-amber-600 font-bold flex-shrink-0">⚠</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              {/* ── SECTION 1 ── */}
              <section className="mb-12" aria-labelledby="como-calcular-heading">
                <h2
                  id="como-calcular-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Cómo Calcular una Nota
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Calcular una nota consiste en convertir tus resultados académicos en una
                    calificación final usando porcentajes, puntos o evaluaciones ponderadas.
                    La mayoría de escuelas y universidades utilizan sistemas donde cada
                    evaluación tiene un peso específico dentro de la nota total del curso.
                  </p>

                  <p>
                    Para conocer tu rendimiento real, debes multiplicar cada nota por su
                    porcentaje correspondiente y luego sumar todos los resultados. Este
                    método permite obtener una visión precisa de tu desempeño académico.
                  </p>

                  <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                    <p>
                      <strong>Ejemplo rápido:</strong> Si obtuviste 90% en una tarea que vale
                      20% y 80% en un examen que vale 80%, tu nota final será:
                    </p>
                    <p className="mt-3 font-bold">
                      (90 × 0.20) + (80 × 0.80) = 82%
                    </p>
                  </div>
                </div>
              </section>{/* ── GAP 1: NOTA MÁXIMA ALCANZABLE ──────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="maxima-nota-heading">
                <h2
                  id="maxima-nota-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  ¿Cuál es la nota máxima que todavía puedo obtener?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Antes de fijar una meta para el examen final, también puedes calcular
                    cuál es la <strong>nota máxima posible</strong> con las evaluaciones que
                    todavía quedan. Esto evita establecer un objetivo que matemáticamente
                    ya no sea alcanzable.
                  </p>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Ejemplo
                    </h3>

                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>Nota actual:</strong> 76%
                      </li>
                      <li>
                        <strong>Evaluaciones completadas:</strong> 70% del curso
                      </li>
                      <li>
                        <strong>Examen final pendiente:</strong> 30%
                      </li>
                      <li>
                        <strong>Mejor resultado posible en el final:</strong> 100%
                      </li>
                    </ul>

                    <p className="mt-4 font-bold text-blue-700">
                      (76 × 0.70) + (100 × 0.30) = 83.2%
                    </p>
                  </div>

                  <p>
                    En este escenario, incluso obteniendo un 100% en el examen final, la
                    nota máxima del curso sería <strong>83.2%</strong>. Si tu objetivo es
                    90%, necesitarías cambiar la meta o comprobar si existen otras
                    evaluaciones pendientes que puedan modificar el resultado.
                  </p>

                  <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                    <p>
                      <strong>Consejo:</strong> calcular primero tu límite máximo es una forma
                      rápida de distinguir entre una meta difícil y una meta que ya no es
                      matemáticamente posible.
                    </p>
                  </div>
                </div>
              </section>{/* ── GAP 2: COMPARACIÓN DE ESCENARIOS PARA EL EXAMEN FINAL ───────────── */}
              <section className="mb-12" aria-labelledby="escenarios-heading">
                <h2
                  id="escenarios-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Compara diferentes resultados del examen final
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Una forma práctica de planificar tus estudios es comprobar cómo cambiaría
                  tu nota final si obtienes diferentes resultados en el examen. Esto permite
                  establecer una meta realista en lugar de estudiar sin conocer el impacto
                  que tendrá cada punto.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table
                    className="w-full min-w-[600px] border-collapse"
                    aria-label="Escenarios de nota final"
                  >
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold" scope="col">
                          Nota Actual
                        </th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">
                          Peso del Final
                        </th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">
                          Nota en el Final
                        </th>
                        <th className="px-5 py-4 text-left font-bold" scope="col">
                          Nota Final
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {[
                        ["80%", "30%", "70%", "77.0%"],
                        ["80%", "30%", "80%", "80.0%"],
                        ["80%", "30%", "90%", "83.0%"],
                        ["80%", "30%", "100%", "86.0%"],
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }`}
                        >
                          {row.map((cell, j) => (
                            <td key={j} className="px-5 py-4 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5 mt-6">
                  <p className="text-gray-700 leading-8">
                    <strong>Interpretación:</strong> con una nota actual de 80% y un examen
                    final que representa el 30% del curso, obtener 90% en el final elevaría
                    la nota global a 83%. Este tipo de comparación te ayuda a decidir qué
                    resultado necesitas realmente antes de dedicar tiempo adicional al
                    estudio.
                  </p>
                </div>
              </section>{/* ── GAP 3: EXTRA CREDIT Y PUNTOS DE BONIFICACIÓN ───────────────────── */}
              <section className="mb-12" aria-labelledby="extra-credit-heading">
                <h2
                  id="extra-credit-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  ¿Cómo funcionan los puntos extra o extra credit?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Algunos profesores permiten obtener <strong>puntos extra</strong> mediante
                    actividades adicionales, tareas opcionales o preguntas de bonificación.
                    La forma de aplicarlos depende del sistema de evaluación del curso.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Se suman a los puntos obtenidos
                      </h3>
                      <p className="text-gray-700 leading-7 text-[15px]">
                        Por ejemplo, si tienes 90 puntos obtenidos de 100 posibles y recibes
                        5 puntos extra, tu puntuación podría convertirse en 95/100, siempre
                        que las reglas del curso permitan aplicar el bonus de esa manera.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Se aplican como porcentaje adicional
                      </h3>
                      <p className="text-gray-700 leading-7 text-[15px]">
                        Algunos cursos agregan el bonus después de calcular la nota base.
                        En ese caso, la bonificación debe aplicarse según la fórmula indicada
                        por el profesor y no como una evaluación normal.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-amber-50 border border-amber-100 p-5">
                    <p className="text-gray-700 leading-7">
                      <strong>Importante:</strong> no todos los sistemas permiten superar el
                      100%. Antes de introducir puntos extra en una calculadora ponderada,
                      revisa si el programa del curso establece un límite máximo o una regla
                      específica para el bonus.
                    </p>
                  </div>
                </div>
              </section>{/* ── GAP 4: DROP LOWEST GRADE ───────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="drop-grade-heading">
                <h2
                  id="drop-grade-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  ¿Qué pasa si el curso elimina la nota más baja?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Algunos cursos permiten eliminar la calificación más baja de una serie
                    de quizzes, tareas o exámenes. En ese caso, no debes incluir esa nota en
                    el promedio ponderado final, salvo que las instrucciones del curso
                    indiquen otra cosa.
                  </p>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Ejemplo con cuatro quizzes
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["60%", "80%", "90%", "95%"].map((grade) => (
                        <div
                          key={grade}
                          className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
                        >
                          <p className="font-bold text-gray-800">{grade}</p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 text-gray-700">
                      Si el curso elimina la nota más baja, el <strong>60%</strong> se
                      excluye y el cálculo continúa utilizando las otras tres evaluaciones,
                      de acuerdo con los pesos establecidos.
                    </p>
                  </div>

                  <p>
                    La regla de “drop lowest” puede cambiar de forma importante tu promedio,
                    especialmente si la evaluación eliminada tenía un peso alto. Por eso,
                    comprueba siempre qué actividades pueden eliminarse y si el peso de la
                    evaluación cambia después de eliminarla.
                  </p>

                  <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                    <p>
                      <strong>Consejo:</strong> no borres automáticamente una nota baja de
                      la calculadora. Primero confirma que el programa del curso permite
                      descartarla.
                    </p>
                  </div>
                </div>
              </section>{/* ── GAP 5: CRÉDITO PARCIAL ─────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="credito-parcial-heading">
                <h2
                  id="credito-parcial-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Cómo calcular una nota con crédito parcial
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    En preguntas abiertas, problemas matemáticos o proyectos, una respuesta
                    puede recibir solo una parte de los puntos disponibles. En estos casos,
                    contar únicamente cuántas preguntas fueron “correctas” puede dar una
                    imagen equivocada del rendimiento.
                  </p>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Ejemplo
                    </h3>

                    <p className="mb-4">
                      Un examen tiene <strong>50 puntos posibles</strong>. El estudiante
                      recibe:
                    </p>

                    <ul className="space-y-2 text-gray-700">
                      <li>Pregunta 1: 10/10 puntos</li>
                      <li>Pregunta 2: 6/10 puntos</li>
                      <li>Pregunta 3: 15/15 puntos</li>
                      <li>Pregunta 4: 9/15 puntos</li>
                    </ul>

                    <p className="mt-5 font-bold text-blue-700">
                      Puntos obtenidos: 40 de 50 = 80%
                    </p>
                  </div>

                  <p>
                    Aunque algunas respuestas no sean completamente correctas, los puntos
                    parciales permiten reflejar el trabajo realizado. Para este tipo de
                    evaluación, utiliza el total de puntos obtenidos y el total de puntos
                    posibles en lugar de contar solamente respuestas correctas.
                  </p>
                </div>
              </section>

              {/* ── SECTION 2 ── */}
              <section className="mb-12" aria-labelledby="promedio-heading">
                <h2
                  id="promedio-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Calculadora de Promedio Ponderado
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Un promedio ponderado asigna diferentes niveles de importancia a cada
                    evaluación. No todas las tareas o exámenes tienen el mismo impacto en tu
                    nota final, por lo que es necesario aplicar pesos específicos.
                  </p>

                  <p>
                    Este sistema es ampliamente utilizado en universidades, colegios y cursos
                    técnicos porque refleja de manera más justa el desempeño del estudiante.
                  </p>

                  <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 text-center">
                    <p className="text-slate-400 mb-2">
                      Fórmula del Promedio Ponderado
                    </p>
                    <p className="font-bold">
                      Σ (Nota × Peso) ÷ Σ Peso
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 3 ── */}
              <section className="mb-12" aria-labelledby="nota-final-heading">
                <h2
                  id="nota-final-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Cómo Calcular la Nota Final del Curso
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    La nota final representa el resultado global de todas las evaluaciones
                    realizadas durante el curso. Para calcularla correctamente es necesario
                    considerar tareas, exámenes, proyectos y cualquier actividad evaluada.
                  </p>

                  <p>
                    Cada elemento debe multiplicarse por su peso correspondiente. Después se
                    suman todos los resultados para obtener la calificación final.
                  </p>

                  <div className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold mb-3">Ejemplo</h3>
                    <ul className="space-y-2">
                      <li>Tareas: 90% (20%)</li>
                      <li>Pruebas: 85% (30%)</li>
                      <li>Proyecto: 95% (20%)</li>
                      <li>Examen Final: 80% (30%)</li>
                    </ul>

                    <p className="mt-4 font-bold text-blue-700">
                      Nota Final = 87.5%
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 4 ── */}
              <section className="mb-12" aria-labelledby="aprobar-heading">
                <h2
                  id="aprobar-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Qué Nota Necesito para Aprobar
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Muchos estudiantes desean saber exactamente qué nota necesitan en el
                    examen final para aprobar una materia o alcanzar una meta académica
                    específica.
                  </p>

                  <p>
                    Conociendo tu promedio actual y el peso del examen final, puedes calcular
                    fácilmente la puntuación requerida.
                  </p>

                  <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
                    <p>
                      <strong>Ejemplo:</strong> Si tienes 78% actualmente y deseas terminar
                      con 85%, mientras el examen final vale 40%, necesitarás aproximadamente
                      95.5% en el examen.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 5 ── */}
              <section className="mb-12" aria-labelledby="escalas-heading">
                <h2
                  id="escalas-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Escalas de Calificación Más Utilizadas
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Los sistemas educativos utilizan diferentes escalas de calificación según
                    el país o la institución. Sin embargo, todas pueden convertirse a
                    porcentajes para facilitar el cálculo.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="px-5 py-4 text-left">País</th>
                          <th className="px-5 py-4 text-left">Escala</th>
                          <th className="px-5 py-4 text-left">Aprobación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-5 py-4">Chile</td>
                          <td className="px-5 py-4">1.0 – 7.0</td>
                          <td className="px-5 py-4">4.0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-5 py-4">Colombia</td>
                          <td className="px-5 py-4">0.0 – 5.0</td>
                          <td className="px-5 py-4">3.0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-5 py-4">México</td>
                          <td className="px-5 py-4">0 – 10</td>
                          <td className="px-5 py-4">6.0</td>
                        </tr>
                        <tr>
                          <td className="px-5 py-4">España</td>
                          <td className="px-5 py-4">0 – 10</td>
                          <td className="px-5 py-4">5.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ── SECTION 6 ── */}
              <section className="mb-12" aria-labelledby="ventajas-heading">
                <h2
                  id="ventajas-heading"
                  className="text-[28px] font-black tracking-[-0.04em] mb-5"
                >
                  Ventajas de Utilizar una Calculadora de Notas
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Resultados instantáneos",
                    "Cálculos matemáticamente exactos",
                    "Compatible con cualquier sistema educativo",
                    "Permite planificar el examen final",
                    "Evita errores manuales",
                    "Gratis y accesible desde cualquier dispositivo",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-gray-200 p-5 bg-white"
                    >
                      <p className="font-semibold text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
              {/* ── TIPS ── */}
              <section className="mb-12" aria-labelledby="consejos-heading">
                <h2 id="consejos-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Consejos para mejorar tu nota del curso
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Prioriza las evaluaciones de mayor peso",
                      text: "Un examen final que vale el 40% impacta tu nota cuatro veces más que una tarea del 10%. Asigna tu tiempo de estudio en proporción al peso de cada evaluación.",
                    },
                    {
                      title: "Haz seguimiento semanal de tus notas",
                      text: "Actualiza la calculadora cada vez que recibes una calificación. Así evitas sorpresas al final del semestre y puedes actuar a tiempo.",
                    },
                    {
                      title: "Revisa las evaluaciones con puntaje bajo",
                      text: "Identifica los temas donde perdiste más puntos y refuerza esas áreas antes del próximo examen o evaluación parcial.",
                    },
                    {
                      title: "Calcula antes del examen final",
                      text: "Usa la función de nota necesaria con al menos dos semanas de anticipación. Así puedes planificar cuánto estudiar y si tu meta es realista.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 p-5">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── INTERNAL LINKING SECTION — STEP 10 ── */}
              <section className="mb-12" aria-labelledby="herramientas-heading">
                <h2 id="herramientas-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  Otras calculadoras académicas que te pueden ayudar
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  CalcuNotas ofrece herramientas adicionales para completar el seguimiento de tu rendimiento académico:
                </p>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    {
                      href: "/calculadora-gpa/",
                      title: "Calculadora de GPA",
                      desc: "Convierte tus notas en letra a GPA en escala 4.0. Ideal para becas y admisiones universitarias.",
                      color: "blue",
                    },
                    {
                      href: "/nota-final/",
                      title: "Calculadora de Nota Final",
                      desc: "Calcula cuánto necesitas en el examen final dado tu promedio actual y tu meta académica.",
                      color: "green",
                    },
                    {
                      href: "/",
                      title: "Calcular Puntaje de Examen",
                      desc: "Convierte respuestas correctas e incorrectas en porcentaje y nota en letra.",
                      color: "purple",
                    },
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className={`rounded-2xl border border-${link.color}-100 bg-${link.color}-50 p-5 block hover:shadow-md transition-shadow no-underline`}
                    >
                      <h3 className={`font-bold text-${link.color}-700 mb-2`}>{link.title}</h3>
                      <p className="text-gray-700 text-[14px] leading-6">{link.desc}</p>
                    </a>
                  ))}
                </div>
              </section>

              {/* ── WHO IS IT FOR ── */}
              <section className="mb-12" aria-labelledby="para-quien-heading">
                <h2 id="para-quien-heading" className="text-[28px] font-black tracking-[-0.04em] mb-5">
                  ¿Para quién es esta calculadora de notas?
                </h2>
                <div className="grid gap-5 md:grid-cols-3">
                  {[
                    {
                      title: "Estudiantes de colegio",
                      items: [
                        "Calcular promedio de todas las materias",
                        "Saber si están en riesgo de reprobar",
                        "Planificar la nota de la próxima prueba",
                        "Entender el impacto de cada evaluación",
                      ],
                    },
                    {
                      title: "Estudiantes universitarios",
                      items: [
                        "Cursos con muchas ponderaciones",
                        "Calcular promedio del semestre",
                        "Planificar para becas y admisiones",
                        "Estimar nota necesaria en el examen final",
                      ],
                    },
                    {
                      title: "Docentes y profesores",
                      items: [
                        "Verificar notas ponderadas de estudiantes",
                        "Crear escenarios de evaluación",
                        "Reducir errores de cálculo manual",
                        "Explicar el sistema de calificación al curso",
                      ],
                    },
                  ].map((group, i) => (
                    <div key={i} className="rounded-2xl border border-gray-200 p-6">
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">{group.title}</h3>
                      <ul className="space-y-2">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex gap-2 text-gray-700 text-[14px] leading-6">
                            <span className="text-blue-500 flex-shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ SECTION — STEP 7 · AEO — 15 FAQs ── */}
              <section
                className="bg-gray-50 py-14 border-t -mx-7 md:-mx-9 -mb-9"
                aria-labelledby="faq-heading"
              >
                <div className="xl:px-[69px] mx-auto px-6">
                  <h2
                    id="faq-heading"
                    className="text-3xl md:text-4xl font-bold text-black mb-3 text-center"
                  >
                    Preguntas Frecuentes sobre la Calculadora de Notas
                  </h2>
                  <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                    Respuestas directas a las preguntas más comunes sobre cómo calcular notas, promedios ponderados, nota necesaria en el examen final y escalas de calificación.
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      {
                        q: "¿Cómo calculo mi nota actual del curso?",
                        a: "Multiplica cada nota de evaluación por su peso porcentual, suma todos los puntajes ponderados y divide entre el peso total. Ejemplo: (90% × 20%) + (84% × 20%) + (95% × 25%) + (80% × 35%) = 18 + 16.8 + 23.75 + 28 = 86.55%.",
                      },
                      {
                        q: "¿Qué nota necesito en el examen final?",
                        a: "Usa la fórmula: (Nota objetivo − Nota actual × (1 − Peso del final)) ÷ Peso del final. Ingresa estos tres valores en la calculadora de arriba y obtendrás el resultado automáticamente.",
                      },
                      {
                        q: "¿Cómo funciona una nota ponderada?",
                        a: "Una nota ponderada asigna mayor importancia a ciertas evaluaciones. Si el examen final vale 40%, cuenta cuatro veces más que una tarea del 10%. La calculadora aplica estos pesos automáticamente al calcular tu promedio.",
                      },
                      {
                        q: "¿Puedo ingresar notas en letra (A, B, C, D, F)?",
                        a: "Sí. Selecciona el modo 'Letra' en la calculadora. A equivale a 95%, B a 85%, C a 75%, D a 65% y F a 55%. También soporta signos +/− como A− (92%) o B+ (88%).",
                      },
                      {
                        q: "¿Cómo calcular notas por puntos?",
                        a: "Divide los puntos obtenidos entre los puntos totales posibles y multiplica por 100. Ejemplo: 45 de 50 puntos = (45 ÷ 50) × 100 = 90%. Selecciona el modo 'Puntos' en la calculadora.",
                      },
                      {
                        q: "¿Esta calculadora sirve para Chile (escala 1.0–7.0)?",
                        a: "Sí. Puedes ingresar tus notas en escala 1.0–7.0 usando el modo de puntos (por ejemplo, 6.5 de 7.0). La nota mínima para aprobar en Chile es generalmente 4.0, equivalente al 60%.",
                      },
                      {
                        q: "¿Sirve para Colombia (escala 0.0–5.0)?",
                        a: "Sí. Ingresa tus notas en modo puntos (por ejemplo, 4.0 de 5.0). La nota mínima para aprobar en la mayoría de instituciones colombianas es 3.0 o 3.5.",
                      },
                      {
                        q: "¿Cuál es la diferencia entre promedio simple y promedio ponderado?",
                        a: "El promedio simple suma todas las notas y divide entre el número de evaluaciones. El promedio ponderado multiplica cada nota por su peso antes de promediar. Si las evaluaciones tienen distintos valores, el promedio ponderado es más preciso.",
                      },
                      {
                        q: "¿Qué pasa si mis pesos no suman 100%?",
                        a: "Si los pesos no suman 100% (por ejemplo, porque el examen final aún no ha ocurrido), la calculadora divide entre la suma de los pesos disponibles. Esto te da tu nota actual basada solo en las evaluaciones completadas.",
                      },
                      {
                        q: "¿Cuántas evaluaciones puedo agregar?",
                        a: "Puedes agregar tantas evaluaciones como necesites: tareas, quizzes, pruebas, parciales, proyectos, laboratorios, participación y examen final. No hay límite en el número de evaluaciones.",
                      },
                      {
                        q: "¿La nota necesaria en el examen final puede ser mayor al 100%?",
                        a: "Sí. Si la nota objetivo que buscas es matemáticamente inalcanzable con el peso actual del examen, el resultado será mayor al 100%. En ese caso, deberás ajustar tu nota objetivo a algo más realista.",
                      },
                      {
                        q: "¿Cómo afecta el peso del examen final a mi nota?",
                        a: "Un examen final con peso del 30–40% puede cambiar tu nota entre 5 y 15 puntos porcentuales. Cuanto mayor sea el peso del final, más determinante será para tu calificación. Por eso es clave calcularlo con anticipación.",
                      },
                      // ── GAP 6: ADVANCED GRADING FAQS ────────────────────────────────────────
                      {
                        q: "¿Qué pasa si mi curso elimina la nota más baja?",
                        a: "Si el programa del curso permite eliminar la calificación más baja, esa evaluación normalmente no debe incluirse en el cálculo después de aplicar la regla. Comprueba siempre qué evaluaciones pueden descartarse y cómo se redistribuyen sus pesos.",
                      },
                      {
                        q: "¿Cómo funcionan los puntos extra en una calificación?",
                        a: "Depende del sistema del curso. Los puntos extra pueden sumarse a los puntos obtenidos o aplicarse como una bonificación después de calcular la nota base. Revisa las instrucciones del profesor para saber si existe un límite del 100%.",
                      },
                      {
                        q: "¿Cómo calculo mi nota si recibo crédito parcial en una pregunta?",
                        a: "Utiliza los puntos obtenidos y los puntos posibles. Por ejemplo, si consigues 40 de 50 puntos, tu porcentaje es (40 ÷ 50) × 100 = 80%, aunque algunas preguntas solo hayan recibido crédito parcial.",
                      },
                      {
                        q: "¿Puedo usar esta calculadora para el promedio del semestre?",
                        a: "Sí. Agrega todas las evaluaciones del semestre con sus pesos. La calculadora calculará tu promedio ponderado del semestre completo. También puedes dejar pendiente el examen final y usar la función de nota necesaria.",
                      },
                      {
                        q: "¿Las escalas de calificación son iguales en todas las escuelas?",
                        a: "No. Cada institución puede tener su propia escala. Consulta siempre el programa del curso o reglamento de tu escuela para conocer los rangos exactos de calificación, nota mínima de aprobación y conversión a letras o GPA.",
                      },
                      {
                        q: "¿Cómo convierto mi nota a GPA?",
                        a: "Para convertir tu porcentaje a GPA en escala 4.0: A (90–100%) = 4.0, B (80–89%) = 3.0, C (70–79%) = 2.0, D (60–69%) = 1.0, F (menos del 60%) = 0.0. Usa nuestra Calculadora de GPA para una conversión más precisa con signos +/−.",
                      },
                    ].map((faq, i) => (
                      <details
                        key={i}
                        className="group rounded-2xl border border-gray-200 bg-white overflow-hidden"
                      >
                        <summary className="cursor-pointer list-none flex justify-between items-start gap-4 p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                          <h3 className="text-base leading-7">{faq.q}</h3>
                          <span
                            className="transition-transform group-open:rotate-180 text-blue-600 flex-shrink-0 mt-1"
                            aria-hidden="true"
                          >
                            ▼
                          </span>
                        </summary>
                        <div className="px-5 pb-5 pt-1">
                          <p className="text-gray-700 leading-7 text-[15px]">{faq.a}</p>
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