import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GradeCalculatorLab from "@/app/components/GradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2026-07-25";

// TODO: keep this identical across all calcunotas.com pages — same entity.
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

const AUTHOR_SCHEMA = {
  "@type": "Person",
  name: "Equipo Editorial de CalcuNotas",
  jobTitle: "Especialistas en evaluación académica",
  url: "https://calcunotas.com/sobre-nosotros/",
  worksFor: { "@id": "https://calcunotas.com/#organization" },
};

const FAQS_DATA = [
  {
    q: "¿Cómo calculo mi nota actual?",
    a: "Multiplica la nota de cada evaluación por su peso, suma los puntajes ponderados y divide por el peso total.",
  },
  // ── GAP 8: ADVANCED FAQ COVERAGE ─────────────────────────────────────────
{
  q: "¿Cuál es la nota máxima que todavía puedo obtener?",
  a: "Puedes calcularla suponiendo que obtienes el 100% en todas las evaluaciones pendientes. El resultado depende de tu nota actual y del peso que todavía queda por completar.",
},
{
  q: "¿Qué pasa si mi profesor elimina la nota más baja?",
  a: "Si el curso permite descartar la calificación más baja, esa evaluación debe excluirse según las reglas del profesor antes de calcular el promedio. También debes comprobar si su peso se redistribuye entre las evaluaciones restantes.",
},
{
  q: "¿Cómo funcionan los puntos extra o extra credit?",
  a: "Depende del sistema de tu curso. Los puntos extra pueden sumarse a los puntos obtenidos o aplicarse como una bonificación después de calcular la nota base. Revisa las instrucciones del profesor para saber si existe un límite máximo.",
},
{
  q: "¿Cómo calculo una nota cuando recibo crédito parcial?",
  a: "Utiliza los puntos obtenidos y los puntos posibles. Por ejemplo, 40 puntos obtenidos de 50 posibles equivalen a 80%, aunque algunas preguntas hayan recibido solo crédito parcial.",
},
  {
    q: "¿Qué es una nota ponderada?",
    a: "Una nota ponderada significa que algunas tareas o exámenes cuentan más que otros. Por ejemplo, un examen final que vale el 40% afecta más tu nota que una tarea que vale el 10%.",
  },
  {
    q: "¿Esta calculadora funciona con notas con letras?",
    a: "Sí. Puedes usar notas con letras si tu clase usa A, B, C, D o F. El resultado depende de la escala de calificación de tu colegio o profesor.",
  },
  {
    q: "¿Esta calculadora soporta calificaciones por puntos?",
    a: "Sí. Si tu clase usa puntos, divide los puntos obtenidos por el total de puntos posibles y multiplica por 100 para obtener el porcentaje.",
  },
  {
    q: "¿Cómo calculo la nota que necesito en el examen final?",
    a: "Ingresa tu nota actual, tu nota meta y el peso del examen final. La calculadora estima el puntaje que necesitas en el examen final para alcanzar tu objetivo.",
  },
  {
    q: "¿Las escalas de calificación son iguales en todos lados?",
    a: "No. Colegios, universidades y profesores pueden usar diferentes sistemas de porcentaje, notas con letras o GPA. Siempre revisa el programa del curso para conocer la escala oficial.",
  },
];

// ── GAP FIX: this page had no schema markup — now has WebApplication,
//    FAQPage, HowTo, BreadcrumbList and Article, matching the other pages ──
const schemaMarkup = [
  ORG_SCHEMA,
  WEBSITE_SCHEMA,
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Calificaciones de Clase",
    url: "https://calcunotas.com/calculadora-clase/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": "https://calcunotas.com/#organization" },
    description:
      "Calcula tu nota actual del curso por porcentaje, letras o puntos con pesos por asignación. También calcula qué nota necesitas en el examen final para llegar a tu meta.",
    featureList: [
      "Nota actual del curso por porcentaje, letra o puntos",
      "Promedio ponderado por categoría",
      "Nota requerida en el examen final",
      "Compatible con distintas escalas de calificación",
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
    name: "Cómo usar la calculadora de calificaciones de clase",
    step: [
      {
        "@type": "HowToStep",
        name: "Elige el tipo de calificación",
        text: "Selecciona porcentaje, nota con letra o puntos según cómo tu profesor registra los puntajes.",
      },
      {
        "@type": "HowToStep",
        name: "Agrega tareas y exámenes",
        text: "Agrega tareas, quizzes, pruebas, proyectos, laboratorios, participación o cualquier otro ítem calificado.",
      },
      {
        "@type": "HowToStep",
        name: "Ingresa nota y peso",
        text: "Escribe tu puntaje y cuánto cuenta ese ítem en la calificación final del curso.",
      },
      {
        "@type": "HowToStep",
        name: "Ve tu nota general",
        text: "La calculadora combina tus puntajes y pesos para mostrar tu nota actual en el curso al instante.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      { "@type": "ListItem", position: 2, name: "Calculadora de calificaciones de clase", item: "https://calcunotas.com/calculadora-clase/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Calculadora de Calificaciones de Clase: guía y fórmula del promedio ponderado",
    description:
      "Guía completa sobre cómo calcular tu nota actual del curso: promedio ponderado, calificación por puntos, nota requerida en el examen final y errores comunes.",
    image: "https://calcunotas.com/og/calculadora-clase.png",
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
    mainEntityOfPage: "https://calcunotas.com/calculadora-clase/",
  },
];

export const metadata = {
  title: "Calculadora de Calificaciones | Calcula tu Nota del Curso Gratis",
  description:
    "Calcula tu nota actual del curso por porcentaje, letras o puntos con pesos por asignación. También calcula qué nota necesitas en el examen final para llegar a tu meta. Gratis y sin registro.",
  keywords: [
    "calculadora de calificaciones",
    "calcular nota actual del curso",
    "calculadora de promedio ponderado",
    "calculadora de notas con peso",
    "calcular calificacion por puntos",
    "calculadora de materias",
    "como calcular mi nota actual",
    "calculadora de notas universitarias",
  ],

  // ── GAP FIX: removed 19 fake per-country hreflang duplicates pointing to
  //    the same URL. Just declare canonical. ──────────────────────────────
  alternates: {
    canonical: "https://calcunotas.com/calculadora-clase/",
  },

  openGraph: {
    title: "Calculadora de Calificaciones | CalcuNotas",
    description:
      "Calcula tu nota actual del curso por porcentaje, letras o puntos, con pesos por asignación y la nota requerida en el examen final. Gratis, sin registro.",
    url: "https://calcunotas.com/calculadora-clase/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "article",
    // ── GAP FIX: og:image was missing ──────────────────────────────────
    images: [
      {
        url: "https://calcunotas.com/og/calculadora-clase.png",
        width: 1200,
        height: 630,
        alt: "Calculadora de Calificaciones de Clase — CalcuNotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Calificaciones | CalcuNotas",
    description:
      "Nota actual del curso por porcentaje, letra o puntos, más la nota requerida en el examen final. Gratis.",
    images: ["https://calcunotas.com/og/calculadora-clase.png"],
  },
  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

// ── GAP FIX: internal links + real outbound citation ────────────────────
const RELACIONADOS = [
  { nombre: "Calculadora de Nota Final", url: "/nota-final/" },
  { nombre: "Calculadora de Notas para Profesores", url: "/calculadora-profesores/" },
  { nombre: "Calculadora de GPA Acumulado", url: "/gpa-acumulado/" },
];
const FUENTES = [
  { nombre: "National Center for Education Statistics (NCES) — escalas de calificación", url: "https://nces.ed.gov/" },
];

export default function CalculadoraClasePage() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* ── GAP FIX: this page had no JSON-LD at all — now it does ───────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b px-8 from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">
          {/* ── GAP FIX: breadcrumb was plain text, now linked + schema ──── */}
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
                <span itemProp="name" aria-current="page">Calculadora de calificaciones de clase</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-2">
            Calculadora de calificaciones de clase
          </h1>

          {/* ── GAP FIX: visible last-updated + reviewed-by trust line ────── */}
          <p className="text-[13px] text-[#8a94a6] mb-4">
            Actualizado el 25 de julio de 2026 · Revisado por el{" "}
            <a href="/sobre-nosotros/" className="underline underline-offset-2 hover:text-blue-600">
              equipo editorial de CalcuNotas
            </a>
          </p>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta{" "}
            <a href="/calculadora-de-notas/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
              calculadora de calificaciones
            </a>{" "}
            para calcular tu nota actual del curso por porcentaje, letras o puntos. Agrega tus evaluaciones, ingresa la nota y el peso, y obtén tu calificación general al instante.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Calificaciones en porcentaje",
              "Notas con letras",
              "Calificaciones por puntos",
              "Promedio ponderado",
              "Nota requerida en el final",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-[13px] font-bold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="pb-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <GradeCalculatorLab />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-14">
        <div className=" mx-auto">
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden" itemScope itemType="https://schema.org/Article">

            {/* INTRO */}
            <section className="p-7 md:p-9 border-b border-gray-200">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-[32px] font-black tracking-[-0.04em] mb-4">
                  Calculadora de Calificaciones para Nota Actual, Promedio Ponderado y Examen Final
                </h2>

                <p className="text-gray-700 leading-8">
                  Esta{" "}
                  <a href="/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                    calculadora
                  </a>{" "}
                  ayuda a los estudiantes a calcular su nota actual en el curso usando porcentajes, notas con letras, puntos y pesos por asignación. Puedes agregar tareas, quizzes, exámenes, proyectos, participación y el examen final para estimar tu calificación general en el curso.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Es útil cuando tu profesor usa calificación ponderada, por puntos o por categorías. En lugar de adivinar tu promedio, ingresa tus notas y pesos para ver dónde estás parado y qué puntaje puedes necesitar en futuras tareas o en el examen final.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* COMO USAR */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo Usar la Calculadora de Calificaciones
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Usar la calculadora es simple. Elige cómo se ingresan las notas, agrega cada evaluación, ingresa el puntaje y el peso, y la calculadora estimará tu nota actual en el curso.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Elige el Tipo de Calificación
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Selecciona porcentaje, nota con letra o puntos según cómo tu profesor registra los puntajes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Agrega Tareas y Exámenes
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Agrega tareas, quizzes, pruebas, proyectos, laboratorios, participación o cualquier otro ítem calificado.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa Nota y Peso
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Escribe tu puntaje y cuánto cuenta ese ítem en la calificación final del curso.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ve tu Nota General
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La calculadora combina tus puntajes y pesos para mostrar tu nota actual en el curso al instante.
                    </p>
                  </div>
                </div>
              </section>

              {/* QUE ES */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es una Calculadora de Calificaciones?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Una calculadora de calificaciones es una herramienta en línea que estima tu nota en el curso a partir de tareas, pruebas, quizzes, proyectos y exámenes completados. Te ayuda a entender tu progreso académico antes de que se publiquen las notas oficiales.
                  </p>

                  <p>
                    En algunos cursos, cada tarea cuenta por igual. En otros, evaluaciones más grandes como parciales, examen final y proyectos cuentan más que pequeñas tareas. Una calculadora de promedio ponderado maneja esas diferencias usando el peso de cada ítem calificado.
                  </p>

                  <p>
                    Esto la hace útil para estudiantes que quieren seguir sus notas actuales, planificar para una meta de calificación, calcular la nota necesaria en el examen final o ver cómo las futuras tareas pueden afectar el resultado final.
                  </p>
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula de la Calculadora de Calificaciones
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  La fórmula de promedio ponderado más común multiplica la nota de cada evaluación por su peso, suma todos los puntajes ponderados y divide por el peso total.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota = Suma de (Nota de Evaluación × Peso) ÷ Peso Total
                </div>

                <p className="text-gray-700 leading-8">
                  Si tu curso usa tareas con el mismo peso, la calculadora funciona como una calculadora de promedio simple. Si tu curso usa pesos distintos para tareas, exámenes, quizzes y proyectos, la fórmula ponderada da una nota más precisa del curso.
                </p>
              </section>

              {/* EJEMPLO PONDERADO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo de Cálculo de Promedio Ponderado
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Supón que tu curso incluye tareas, quizzes, un proyecto y un examen final. Cada categoría tiene un peso diferente en la nota final.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[720px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Evaluación</th>
                        <th className="px-5 py-4 text-left font-bold">Nota</th>
                        <th className="px-5 py-4 text-left font-bold">Peso</th>
                        <th className="px-5 py-4 text-left font-bold">Puntaje Ponderado</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Tareas</td>
                        <td className="px-5 py-4 text-gray-700">92%</td>
                        <td className="px-5 py-4 text-gray-700">20%</td>
                        <td className="px-5 py-4 text-gray-700">18.4</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Quizzes</td>
                        <td className="px-5 py-4 text-gray-700">85%</td>
                        <td className="px-5 py-4 text-gray-700">15%</td>
                        <td className="px-5 py-4 text-gray-700">12.75</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Proyecto</td>
                        <td className="px-5 py-4 text-gray-700">95%</td>
                        <td className="px-5 py-4 text-gray-700">25%</td>
                        <td className="px-5 py-4 text-gray-700">23.75</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Examen Final</td>
                        <td className="px-5 py-4 text-gray-700">80%</td>
                        <td className="px-5 py-4 text-gray-700">40%</td>
                        <td className="px-5 py-4 text-gray-700">32</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    Nota Final = 18.4 + 12.75 + 23.75 + 32 =
                    <strong> 86.9%</strong>. En muchas escalas comunes esto suele corresponder a una nota B, pero la nota exacta con letra depende de tu colegio o{" "}
                    <a href="/calculadora-profesores/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                      profesor
                    </a>.
                  </p>
                </div>
              </section>

              {/* FORMULA EXAMEN FINAL */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula para la Nota Requerida en el Examen Final
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Si tu examen final aún no ha ocurrido, puedes estimar el puntaje necesario para alcanzar tu meta en el curso. Necesitas tu nota actual, tu nota meta y el peso del examen final.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota Requerida = (Nota Meta − Nota Actual × (1 − Peso del Final)) ÷ Peso del Final
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3">
                    Ejemplo del Examen Final
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Si tu nota actual es 84%, tu meta es 90% y el examen final vale el 30% del curso, la calculadora puede estimar el puntaje que necesitas en el examen final para llegar a esa meta. Esto te ayuda a saber si tu objetivo es realista antes de la semana de exámenes. Para un desglose completo de esta fórmula, revisa la{" "}
                    <a href="/nota-final/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                      calculadora de nota final
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* TIPOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Calificaciones por Porcentaje, Letra y Puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Distintos profesores usan diferentes métodos de calificación. Esta calculadora funciona con porcentajes, notas con letras y calificaciones por puntos.
                </p>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Calificaciones en Porcentaje
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa esta opción cuando tu nota se muestra como porcentaje, por ejemplo 88%, 92% o 76%.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Notas con Letras
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa esta opción cuando tu profesor da notas como A, B, C, D o F.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Calificaciones por Puntos
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa esta opción cuando tu puntaje se basa en puntos obtenidos sobre el total de puntos posibles.
                    </p>
                  </div>
                </div>
              </section>

              {/* FORMULA PUNTOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula de Calificación por Puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Algunos cursos no usan pesos por asignación. En cambio, las notas se basan en el total de puntos obtenidos. En ese caso, divide los puntos obtenidos por el total de puntos posibles y multiplica por 100.
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Porcentaje de Calificación = Puntos Obtenidos ÷ Total de Puntos Posibles × 100
                </div>

                <p className="text-gray-700 leading-8">
                  Por ejemplo, si obtuviste 450 puntos de 500 posibles, tu nota sería 90%. Este método es común cuando cada tarea suma a un total general de puntos.
                </p>
              </section>

              {/* SIMPLE VS PONDERADO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Promedio Simple vs Promedio Ponderado
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Promedio Simple
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Un promedio simple trata todas las notas por igual. Funciona mejor cuando todas las tareas, quizzes o exámenes tienen la misma importancia.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Promedio Ponderado
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Un promedio ponderado da más importancia a exámenes mayores, proyectos o categorías que cuentan más en la nota final del curso.
                    </p>
                  </div>
                </div>
              </section>

              {/* ESCALA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Escala de Notas con Letras Más Común
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las escalas de notas con letras pueden variar según el colegio, el profesor, el distrito o el país. La tabla a continuación muestra una escala de calificación común basada en porcentajes.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-bold">Nota con Letra</th>
                        <th className="px-5 py-4 text-left font-bold">Rendimiento</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">90% - 100%</td>
                        <td className="px-5 py-4 text-gray-700">A</td>
                        <td className="px-5 py-4 text-gray-700">Excelente</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">80% - 89%</td>
                        <td className="px-5 py-4 text-gray-700">B</td>
                        <td className="px-5 py-4 text-gray-700">Bien</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">70% - 79%</td>
                        <td className="px-5 py-4 text-gray-700">C</td>
                        <td className="px-5 py-4 text-gray-700">Regular</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">60% - 69%</td>
                        <td className="px-5 py-4 text-gray-700">D</td>
                        <td className="px-5 py-4 text-gray-700">Necesita mejorar</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Menos del 60%</td>
                        <td className="px-5 py-4 text-gray-700">F</td>
                        <td className="px-5 py-4 text-gray-700">Reprobado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* ── GAP FIX: real outbound citation ────────────────────── */}
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
                  . La escala exacta depende de tu colegio o profesor.
                </p>
              </section>

              {/* POR QUE USAR */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Por Qué los Estudiantes Usan una Calculadora de Calificaciones
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Seguir la Nota Actual del Curso
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ve tu nota estimada en el curso antes de que se publiquen las notas oficiales.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Planificar para una Nota Meta
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Descubre qué puntajes puedes necesitar en futuras tareas o exámenes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Entender las Categorías Ponderadas
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Aprende cómo las tareas, quizzes, exámenes y proyectos afectan tu nota final.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Reducir Errores de Cálculo
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Evita errores manuales cuando las notas tienen diferentes pesos.
                    </p>
                  </div>
                </div>
              </section>

              {/* ERRORES COMUNES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores Comunes al Calcular Calificaciones
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Olvidar incluir todas las tareas o exámenes calificados.</li>
                    <li>• Ingresar pesos que no suman correctamente.</li>
                    <li>• Mezclar puntos y porcentajes sin convertirlos.</li>
                    <li>• Tratar notas ponderadas como promedios simples.</li>
                    <li>• Usar el peso incorrecto del examen final.</li>
                    <li>• Asumir que todos los profesores usan la misma escala de notas con letras.</li>
                  </ul>
                </div>
              </section>{/* ── GAP 1: SECTION 3 — INTERPRETAR Y ANALIZAR CALIFICACIONES ────────── */}
<section className="mb-16">
  <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6 mb-8">
    <h2 className="text-[34px] font-black tracking-[-0.04em] mb-4">
      Comprender y Analizar tus Calificaciones
    </h2>

    <p className="text-gray-700 leading-8">
      Calcular tu nota es solo el primer paso. También es importante entender
      qué significa ese resultado, qué evaluaciones pueden cambiarlo y cómo
      interpretar tu progreso durante el curso.
    </p>
  </div>

  {/* ¿Cómo Interpretar tu Nota Actual? */}
  <section className="mb-8">
    <h3 className="text-[26px] font-black tracking-[-0.03em] mb-4">
      ¿Cómo Interpretar tu Nota Actual?
    </h3>

    <p className="text-gray-700 leading-8 mb-4">
      Tu nota actual representa el rendimiento de las evaluaciones que ya han
      sido calificadas. No siempre equivale a la nota final que aparecerá en tu
      expediente, especialmente si todavía quedan exámenes, proyectos o tareas
      importantes.
    </p>

    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Nota alta con mucho curso pendiente
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          Una nota de 90% puede cambiar bastante si todavía falta un examen que
          representa una parte importante de la calificación.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Nota media con evaluaciones pendientes
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          Una nota actual de 75% no significa necesariamente que terminarás
          con 75%. Las próximas evaluaciones pueden elevar o reducir el
          promedio.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Revisa los pesos restantes
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          Cuanto mayor sea el peso de una evaluación pendiente, mayor será su
          capacidad para cambiar tu nota final.
        </p>
      </div>
    </div>
  </section>

  {/* Cómo Afectan los Exámenes Finales a tu Calificación */}
  <section className="mb-8">
    <h3 className="text-[26px] font-black tracking-[-0.03em] mb-4">
      Cómo Afectan los Exámenes Finales a tu Calificación
    </h3>

    <p className="text-gray-700 leading-8 mb-5">
      El impacto del examen final depende de su peso. Un examen que representa
      el 10% del curso tendrá un efecto muy diferente al de uno que representa
      el 40%.
    </p>

    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h4 className="text-xl font-bold mb-4">
        Ejemplo rápido
      </h4>

      <p className="text-gray-700 leading-8">
        Si tienes un 80% antes del examen y el examen final vale el 20%,
        obtener 100% en el examen no convierte automáticamente tu nota en
        100%. La parte ya completada conserva el 80% de su peso y el examen
        aporta el 20% restante.
      </p>

      <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mt-5 text-center text-[15px]">
        Nota Final = (80 × 0.80) + (100 × 0.20) = 84%
      </div>
    </div>
  </section>

  {/* Diferencia entre GPA y Calificación Porcentual */}
  <section className="mb-8">
    <h3 className="text-[26px] font-black tracking-[-0.03em] mb-4">
      Diferencia entre GPA y Calificación Porcentual
    </h3>

    <p className="text-gray-700 leading-8 mb-5">
      Una calificación porcentual y un GPA no son exactamente lo mismo. El
      porcentaje describe el rendimiento dentro de una evaluación o curso,
      mientras que el GPA normalmente resume calificaciones de varias materias
      mediante una escala de puntos establecida por la institución.
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Calificación porcentual
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          Puede aparecer como 92%, 84% o 76% y normalmente se calcula a partir
          de las evaluaciones del curso.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          GPA
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          Resume el rendimiento académico mediante una escala de puntos y puede
          depender de los créditos, cursos y reglas de la institución.
        </p>
      </div>
    </div>

    <p className="text-gray-700 leading-8 mt-5">
      Por eso, no conviene convertir directamente cualquier porcentaje a GPA
      sin conocer la escala oficial de tu colegio o universidad.
    </p>
  </section>

  {/* Cómo Saber si Vas Aprobando una Materia */}
  <section>
    <h3 className="text-[26px] font-black tracking-[-0.03em] mb-4">
      Cómo Saber si Vas Aprobando una Materia
    </h3>

    <p className="text-gray-700 leading-8">
      Compara tu nota actual con la calificación mínima necesaria para aprobar
      según el programa de tu curso. Después, revisa cuánto peso queda por
      completar. Una nota actual por encima del mínimo no garantiza que la nota
      final también lo estará si todavía quedan evaluaciones importantes.
    </p>

    <div className="rounded-2xl bg-purple-50 border border-purple-100 p-5 mt-5">
      <p className="text-gray-700 leading-7">
        <strong>Consejo:</strong> no mires solamente tu porcentaje actual.
        Comprueba también cuánto del curso ya está calificado y qué peso tienen
        las evaluaciones restantes.
      </p>
    </div>
  </section>
</section>{/* ── GAP 2: SECTION 5 — SISTEMAS DE CALIFICACIÓN ─────────────────────── */}
<section className="mb-16">
  <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 mb-8">
    <h2 className="text-[34px] font-black tracking-[-0.04em] mb-4">
      Sistemas de Calificación y Educación
    </h2>

    <p className="text-gray-700 leading-8">
      Las instituciones pueden utilizar porcentajes, letras, puntos, categorías
      ponderadas o GPA. Entender qué sistema utiliza tu curso es fundamental
      para introducir correctamente tus notas y evitar resultados incorrectos.
    </p>
  </div>

  {/* Cómo Calcular una Nota Acumulada del Semestre */}
  <section className="mb-8">
    <h3 className="text-[26px] font-black tracking-[-0.03em] mb-4">
      Cómo Calcular una Nota Acumulada del Semestre
    </h3>

    <p className="text-gray-700 leading-8 mb-5">
      Para calcular una nota acumulada del semestre, primero necesitas conocer
      las calificaciones de cada materia y, cuando corresponda, los créditos o
      pesos asociados. No siempre es correcto hacer un promedio simple de todas
      las notas si las materias tienen diferente número de créditos.
    </p>

    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h4 className="text-xl font-bold mb-3">
        Ejemplo
      </h4>

      <p className="text-gray-700 leading-8">
        Supón que una materia tiene 4 créditos y otra tiene 2 créditos. Si ambas
        tienen notas diferentes, la materia de 4 créditos puede tener mayor
        influencia en el promedio acumulado cuando el sistema de tu institución
        utiliza créditos para calcularlo.
      </p>

      <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5 mt-5">
        <p className="text-gray-700 leading-7">
          <strong>Importante:</strong> el cálculo exacto del promedio acumulado
          depende de las reglas de tu institución y de cómo convierte las notas
          a puntos de GPA.
        </p>
      </div>
    </div>
  </section>

  {/* Métodos de Calificación Más Utilizados */}
  <section className="mb-8">
    <h3 className="text-[26px] font-black tracking-[-0.03em] mb-4">
      Métodos de Calificación Más Utilizados en Escuelas y Universidades
    </h3>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Porcentaje
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          La nota se expresa como un porcentaje, como 85% o 92%, y puede
          calcularse mediante puntos o categorías ponderadas.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Notas con letras
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          El resultado se representa con letras como A, B, C, D o F según la
          escala definida por la institución.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Sistema por puntos
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          Cada evaluación aporta puntos a un total acumulado. La calificación
          puede obtenerse dividiendo los puntos obtenidos entre los puntos
          posibles.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="font-bold text-gray-900 mb-2">
          Categorías ponderadas
        </h4>
        <p className="text-gray-700 leading-7 text-[15px]">
          Tareas, quizzes, proyectos y exámenes reciben diferentes pesos dentro
          de la calificación final del curso.
        </p>
      </div>
    </div>
  </section>

  {/* Conclusión */}
  <section>
    <h3 className="text-[26px] font-black tracking-[-0.03em] mb-4">
      Conclusión
    </h3>

    <p className="text-gray-700 leading-8">
      Conocer el sistema de calificación de tu curso te permite interpretar
      mejor tu rendimiento y utilizar la calculadora correctamente. Antes de
      calcular una meta, confirma si tu profesor utiliza porcentajes, puntos,
      categorías ponderadas, letras o un sistema específico de GPA.
    </p>

    <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5 mt-5">
      <p className="text-gray-700 leading-7">
        <strong>Regla práctica:</strong> utiliza siempre las reglas oficiales
        del curso como referencia cuando exista una diferencia entre tu cálculo
        personal y la nota publicada por tu profesor.
      </p>
    </div>
  </section>
</section>{/* ── GAP 3: NOTA MÁXIMA ALCANZABLE ───────────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Cuál es la Nota Máxima que Puedo Obtener?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Antes de establecer una meta para el examen final, también puedes calcular
    la nota máxima que todavía puedes alcanzar. Esto es especialmente útil
    cuando ya has completado una gran parte del curso.
  </p>

  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
    <h3 className="text-2xl font-bold mb-4">
      Ejemplo de Nota Máxima
    </h3>

    <p className="text-gray-700 leading-8">
      Si tienes una nota actual de 76%, ya completaste el 70% del curso y el
      examen final representa el 30%, incluso un 100% en el examen tendría un
      límite específico.
    </p>

    <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mt-5 text-center text-[15px]">
      (76 × 0.70) + (100 × 0.30) = 83.2%
    </div>

    <p className="text-gray-700 leading-8 mt-5">
      En este ejemplo, 83.2% sería la nota máxima posible si no quedan otras
      evaluaciones. Por eso, una meta de 90% no sería alcanzable únicamente
      mediante ese examen final.
    </p>
  </div>

  <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5 mt-5">
    <p className="text-gray-700 leading-7">
      <strong>Consejo:</strong> calcula primero tu límite máximo y después la
      nota requerida. Así sabrás si tu objetivo es difícil, realista o
      matemáticamente imposible.
    </p>
  </div>
</section>{/* ── GAP 5: DROP LOWEST GRADE ────────────────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Qué Pasa si se Elimina la Nota Más Baja?
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">
    <p>
      Algunos profesores permiten eliminar la calificación más baja de una
      serie de quizzes, tareas o exámenes. Esta regla puede cambiar tu promedio
      de forma importante y debe aplicarse antes de realizar el cálculo final.
    </p>

    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
      <h3 className="text-xl font-bold mb-4">
        Ejemplo
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {["60%", "80%", "90%", "95%"].map((grade) => (
          <div
            key={grade}
            className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
          >
            <p className="font-bold text-gray-800">
              {grade}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-8 mt-5">
        Si el curso permite eliminar la nota más baja, el 60% se excluye y se
        utilizan las demás calificaciones según las reglas y pesos del curso.
      </p>
    </div>

    <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
      <p className="text-gray-700 leading-7">
        <strong>Importante:</strong> no elimines automáticamente una nota baja.
        Primero confirma en el programa del curso si la regla permite descartar
        esa evaluación y cómo se redistribuye su peso.
      </p>
    </div>
  </div>
</section>{/* ── GAP 6: EXTRA CREDIT ─────────────────────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    Cómo Funcionan los Puntos Extra o Extra Credit
  </h2>

  <p className="text-gray-700 leading-8 mb-6">
    Los puntos extra pueden utilizarse en algunos cursos para recompensar
    actividades adicionales, preguntas de bonificación o trabajos opcionales.
    Sin embargo, no existe una única forma de aplicar el extra credit.
  </p>

  <div className="grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Bonus añadido a los puntos
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Algunos sistemas agregan los puntos extra a los puntos obtenidos. Por
        ejemplo, 90 puntos obtenidos más 5 puntos de bonus pueden producir 95
        puntos antes de aplicar cualquier límite establecido.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Bonus aplicado después del cálculo
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Otros profesores añaden una bonificación después de calcular la nota
        base. En ese caso, no debes tratar el extra credit como una evaluación
        normal con peso propio.
      </p>
    </div>
  </div>

  <div className="rounded-2xl bg-amber-50 border border-amber-100 p-5 mt-6">
    <p className="text-gray-700 leading-7">
      <strong>Importante:</strong> revisa si el curso permite superar el 100%
      y cómo deben aplicarse los puntos extra antes de introducirlos en una
      calculadora.
    </p>
  </div>
</section>{/* ── GAP 7: CRÉDITO PARCIAL ──────────────────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    Cómo Calcular una Nota con Crédito Parcial
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    En algunos exámenes y proyectos, una pregunta puede recibir solo una parte
    de los puntos disponibles. En estos casos, contar solamente el número de
    respuestas correctas no siempre representa la nota real.
  </p>

  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
    <h3 className="text-xl font-bold mb-4">
      Ejemplo de Crédito Parcial
    </h3>

    <ul className="space-y-2 text-gray-700 leading-7">
      <li>Pregunta 1: 10/10 puntos</li>
      <li>Pregunta 2: 6/10 puntos</li>
      <li>Pregunta 3: 15/15 puntos</li>
      <li>Pregunta 4: 9/15 puntos</li>
    </ul>

    <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mt-5 text-center text-[15px]">
      40 ÷ 50 × 100 = 80%
    </div>

    <p className="text-gray-700 leading-8 mt-5">
      Aunque algunas respuestas recibieron crédito parcial, el estudiante
      obtuvo 40 de 50 puntos posibles, por lo que la calificación es 80%.
    </p>
  </div>
</section>
{/* SECTION 3 */}
<section className="mb-16">
  <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6 mb-8">
    <h2 className="text-[34px] font-black tracking-[-0.04em] mb-4">
      Comprender y Analizar tus Calificaciones
    </h2>

    <p className="text-gray-700 leading-8">
      Aprende a interpretar tu nota actual, entender cómo afectan los exámenes finales a tu promedio y conocer la diferencia entre porcentajes, GPA y otros sistemas de evaluación académica.
    </p>
  </div>

  {/* ¿Cómo Interpretar tu Nota Actual? */}
  {/* Cómo Afectan los Exámenes Finales a tu Calificación */}
  {/* Diferencia entre GPA y Calificación Porcentual */}
  {/* Cómo Saber si Vas Aprobando una Materia */}
</section>{/* SECTION 5 */}
<section className="mb-16">
  <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 mb-8">
    <h2 className="text-[34px] font-black tracking-[-0.04em] mb-4">
      Sistemas de Calificación y Educación
    </h2>

    <p className="text-gray-700 leading-8">
      Explora los métodos de evaluación más utilizados en escuelas y universidades, cómo calcular promedios acumulados y cómo se comparan diferentes escalas de calificación.
    </p>
  </div>

  {/* Cómo Calcular una Nota Acumulada del Semestre */}
  {/* Métodos de Calificación Más Utilizados en Escuelas y Universidades */}
  {/* Conclusión */}
</section>
              {/* CONSEJOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos para Mejorar tu Nota en el Curso
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Enfócate en las Tareas de Mayor Peso
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Los exámenes mayores y proyectos pueden mover tu nota más que pequeñas tareas, así que prioriza los ítems de mayor peso primero.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Actualiza tus Notas Regularmente
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Agrega nuevos puntajes tan pronto como se publiquen para que tu nota actual sea precisa.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Revisa los Puntajes Bajos
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Identifica las tareas donde perdiste más puntos y repasa esos temas antes del próximo examen.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Usa el Resultado de Nota Requerida en el Final
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Antes de la semana de exámenes, calcula el puntaje que necesitas para tener una meta de estudio clara y realista.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── GAP FIX: visible author/E-E-A-T block ────────────────── */}
              <section className="mb-12" aria-labelledby="autor-heading">
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
                    vez el 25 de julio de 2026.
                  </p>
                </div>
              </section>

              {/* ── GAP FIX: internal links for topical authority ──────────── */}
              <section className="mb-12" aria-labelledby="relacionados-heading">
                <h2 id="relacionados-heading" className="text-[20px] font-bold tracking-[-0.02em] mb-3">
                  Herramientas relacionadas
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {RELACIONADOS.map((r) => (
                    <li key={r.url}>
                      <a href={r.url} className="inline-block bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm hover:bg-blue-50">
                        {r.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ — now wrapped in FAQPage microdata to match JSON-LD ──── */}
              <section className="bg-gray-50 py-14 border-t -mx-7 md:-mx-9 -mb-9">
                <div className="xl:px-[69px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Preguntas Frecuentes
                    </h2>

                    <p className="text-gray-700 text-base leading-relaxed">
                      Los estudiantes suelen tener preguntas sobre notas actuales, promedios ponderados, calificación por puntos, puntajes de exámenes finales y escalas de notas con letras. Esta sección responde las dudas más comunes sobre el uso de una calculadora de calificaciones.
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