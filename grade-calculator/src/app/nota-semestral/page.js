import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import SemesterGradeCalculatorLab from "@/app/components/SemesterGradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

const DATE_PUBLISHED = "2024-02-10";
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

// ─── SCHEMA MARKUP ────────────────────────────────────────────────────────────
const schemaMarkup = [
  ORG_SCHEMA,
  WEBSITE_SCHEMA,
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Nota Semestral",
    url: "https://calcunotas.com/nota-semestral/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@id": "https://calcunotas.com/#organization" },
    description:
      "Calculadora gratuita para calcular tu nota semestral por porcentaje, letra o puntos, con pesos por categoría y estimación de la nota necesaria en el examen final.",
    featureList: [
      "Cálculo de promedio ponderado por categoría",
      "Conversión entre porcentaje, letra y puntos",
      "Estimación de la nota necesaria en el examen final",
      "Comparación entre nota ponderada y no ponderada",
      "Sin registro, 100 % gratuita",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una calculadora de nota semestral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una herramienta que te ayuda a calcular tu nota semestral global usando puntajes de tareas, notas de exámenes, pesos por categoría, créditos o puntos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo calculo mi nota del semestre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiplica cada nota por su peso, suma todos los puntajes ponderados y divide entre el peso total. Eso te da tu porcentaje semestral final.",
        },
      },
      {
        "@type": "Question",
        name: "¿Esta calculadora funciona con notas ponderadas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Puedes ingresar tareas, pruebas, proyectos, parciales y exámenes finales con sus pesos en porcentaje para obtener tu nota global.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo calculo la nota que necesito en el examen final?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Necesitas tu nota actual, tu nota objetivo y el peso del examen final. La calculadora usa esos valores para estimar el puntaje que necesitas en el final para alcanzar tu nota deseada.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre nota actual y nota semestral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu nota actual incluye solo el trabajo completado. Tu nota semestral puede incluir trabajos completados más exámenes, proyectos, participación y el examen final que aún no has presentado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo usar puntos en lugar de porcentajes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Si tu clase usa puntos, divide los puntos obtenidos entre el total posible y multiplica por 100. Eso te da tu nota en porcentaje.",
        },
      },
      {
        "@type": "Question",
        name: "¿Todas las escuelas usan la misma escala de calificación semestral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Colegios, universidades y profesores pueden usar escalas de calificación distintas. Consulta siempre el programa del curso o la política oficial de calificación para la escala correcta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se convierte una nota en letra a puntos GPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cada letra corresponde a un valor en la escala GPA de 4.0: A equivale a 4.0, B a 3.0, C a 2.0, D a 1.0 y F a 0.0. El GPA final es el promedio de esos valores, ponderado por los créditos de cada curso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si los pesos de mis categorías no suman 100%?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La fórmula de promedio ponderado sigue funcionando: se divide la suma de (nota × peso) entre la suma total de los pesos, aunque no sumen 100%. Aun así, es recomendable verificar los pesos con el programa oficial del curso.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo calcular la nota semestral paso a paso",
    step: [
      {
        "@type": "HowToStep",
        name: "Agrega tus evaluaciones",
        text: "Ingresa cada tarea, prueba, examen, proyecto o examen final incluido en tu nota semestral.",
      },
      {
        "@type": "HowToStep",
        name: "Ingresa tu calificación",
        text: "Añade la nota que obtuviste en cada evaluación, en porcentaje, letra o puntos.",
      },
      {
        "@type": "HowToStep",
        name: "Agrega el peso de cada categoría",
        text: "Indica cuánto cuenta cada categoría en tu nota semestral final.",
      },
      {
        "@type": "HowToStep",
        name: "Calcula tu resultado",
        text: "La calculadora combina tus notas y pesos para mostrar tu calificación semestral al instante.",
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
        name: "Calculadora de Nota Semestral",
        item: "https://calcunotas.com/nota-semestral/",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Calculadora de Nota Semestral: Guía completa de promedio ponderado",
    description:
      "Guía completa sobre cómo calcular la nota semestral: fórmula de promedio ponderado, nota necesaria en el examen final, escalas de letra y GPA.",
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
    mainEntityOfPage: "https://calcunotas.com/nota-semestral/",
  },
];

export const metadata = {
  title: "Calculadora de Nota Semestral | Calcula tu Promedio del Semestre",
  description:
    "Calcula tu nota del semestre por porcentaje, calificación en letra o puntos con pesos por categoría. También calcula la nota que necesitas en el examen final para aprobar.",
  keywords: [
    "calculadora de nota semestral",
    "calcular promedio semestral",
    "calculadora de calificaciones ponderadas",
    "calculadora de examen final",
    "calcular nota del semestre",
    "promedio semestral calculadora",
    "nota ponderada semestre",
    "calcular promedio con pesos",
    "nota necesaria examen final",
  ],

  authors: [{ name: "CalcuNotas", url: "https://calcunotas.com" }],
  creator: "CalcuNotas",
  publisher: "CalcuNotas",

  // ── GAP FIX: removed 19 fake per-country hreflang duplicates pointing to
  //    the same URL. Just declare canonical. ──────────────────────────────
  alternates: {
    canonical: "https://calcunotas.com/nota-semestral/",
  },

  openGraph: {
    title: "Calculadora de Nota Semestral | CalcuNotas",
    description:
      "Calcula tu promedio del semestre por porcentaje, letra o puntos, con pesos por categoría y la nota requerida en el examen final. Gratis, sin registro.",
    url: "https://calcunotas.com/nota-semestral/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Nota Semestral | CalcuNotas",
    description:
      "Promedio del semestre por porcentaje, letra o puntos, más la nota requerida en el examen final. Gratis.",
  },

  // ── GAP FIX: schemaMarkup was built but never injected anywhere on the
  //    page (no <script> tag, no `other` field) — it was fully dead code,
  //    so Google was receiving zero structured data from this page. ──────
  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

const CASOS_ESPECIALES = [
  {
    titulo: "Crédito extra (extra credit)",
    texto:
      "No hay una fórmula universal: algunos profesores suman los puntos extra directamente al total de puntos, otros los aplican como un porcentaje adicional sobre la nota final. Confirma la regla exacta antes de sumarlo a tu cálculo.",
  },
  {
    titulo: "Si se elimina la nota más baja",
    texto:
      "Excluye esa evaluación antes de calcular el promedio. Ejemplo: con notas de 82%, 91%, 68% y 88% del mismo peso, al eliminar el 68% el promedio queda en (82+91+88) ÷ 3 = 87%.",
  },
  {
    titulo: "Notas que todavía faltan",
    texto:
      "Calcula tu promedio actual solo con lo ya calificado, y usa una nota estimada para las evaluaciones pendientes si quieres proyectar cómo cambiaría tu resultado.",
  },
  {
    titulo: "Si necesitas más de 100% en el final",
    texto:
      "Significa que tu meta es matemáticamente inalcanzable solo con esa evaluación — no que la calculadora esté mal. Revisa si hay crédito extra, recuperación u otras evaluaciones pendientes.",
  },
];

export default function NotaSemestral() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 px-8 to-[#f7f9fc]">
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
                <span itemProp="name" aria-current="page">Calculadora de Nota Semestral</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-2">
            Calculadora de Nota Semestral
          </h1>

          <p className="text-[13px] text-[#8a94a6] mb-4">
            Actualizado el 25 de julio de 2026 · Revisado por el{" "}
            <a href="/sobre-nosotros/" className="underline underline-offset-2 hover:text-blue-600">
              equipo editorial de CalcuNotas
            </a>
          </p>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta{" "}
            <a
              href="/calculadora-de-notas/"
              className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
            >
              calculadora de notas
            </a>{" "}
            para calcular tu calificación actual del curso por porcentaje,
            nota en letra o puntos. Agrega tus evaluaciones, ingresa la nota
            y el peso de cada una, y obtén tu promedio semestral al instante.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Notas en porcentaje",
              "Notas en letra",
              "Notas por puntos",
              "Promedio ponderado",
              "Nota necesaria en el final",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 text-blue-700 px-4 py-2 rounded-full text-[13px] font-bold shadow-sm"
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
          <SemesterGradeCalculatorLab />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-14">
        <div className=" mx-auto">
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="p-7 md:p-9">

              {/* QUICK SUMMARY */}
              <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-4">
                  Calculadora de Nota Semestral: Resumen Rápido
                </h2>
                <p className="text-gray-700 leading-8">
                  El{" "}
                  <a
                    href="/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    cálculo de nota semestral
                  </a>{" "}
                  ayuda a los estudiantes a estimar su calificación global
                  combinando tareas, pruebas, exámenes, proyectos, participación
                  y el peso del examen final. En lugar de calcular cada puntaje
                  manualmente, puedes ingresar notas y pesos para ver tu
                  promedio semestral actual, tu nota ponderada y la calificación
                  que necesitas en el examen final para alcanzar tu meta.
                </p>
              </section>

              {/* HOW TO USE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo usar la calculadora de nota semestral
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Agrega tus evaluaciones",
                      text: "Ingresa cada tarea, prueba, examen, proyecto, categoría de deberes, parcial o examen final incluido en tu nota semestral.",
                    },
                    {
                      title: "Ingresa tu calificación",
                      text: "Añade la nota que obtuviste en cada evaluación. Puedes usar porcentajes, notas en letra o puntos según el método de calificación.",
                    },
                    {
                      title: "Agrega el peso o créditos",
                      text: "Si tu curso usa calificación ponderada, ingresa cuánto cuenta cada categoría en tu nota semestral final.",
                    },
                    {
                      title: "Calcula tu resultado",
                      text: "La calculadora combina tus notas y pesos para estimar tu calificación semestral actual al instante.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-[18px] font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula para calcular la nota semestral
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  La fórmula semestral más común usa promedios ponderados. Cada
                  nota se multiplica por su peso, luego se suman todas las
                  puntuaciones ponderadas y se dividen entre el peso total.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota Semestral = Suma de (Nota × Peso) ÷ Peso Total
                </div>

                <p className="text-gray-700 leading-8">
                  Si todas las evaluaciones tienen el mismo valor, la
                  calculadora también funciona como un promedio simple. Si tu
                  curso usa pesos distintos para tareas, pruebas, exámenes y
                  proyectos, la fórmula de nota semestral ponderada da un
                  resultado más preciso.
                </p>
              </section>

              {/* EXAMPLE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo de cálculo de nota semestral
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Supón que tu nota semestral incluye tareas, pruebas, un
                  parcial, proyectos y un examen final, cada uno con un peso
                  distinto en el curso.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Categoría</th>
                        <th className="px-5 py-4 text-left font-bold">Nota</th>
                        <th className="px-5 py-4 text-left font-bold">Peso</th>
                        <th className="px-5 py-4 text-left font-bold">Puntaje Ponderado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Tareas", "92%", "20%", "18.4"],
                        ["Pruebas", "85%", "15%", "12.75"],
                        ["Parcial", "88%", "25%", "22"],
                        ["Proyecto", "95%", "20%", "19"],
                        ["Examen Final", "90%", "20%", "18"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                          {row.map((cell, i) => (
                            <td key={i} className="px-5 py-4 text-gray-700 text-[15px]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    Nota Semestral Final = 18.4 + 12.75 + 22 + 19 + 18 ={" "}
                    <strong>90.15%</strong>. En la mayoría de escalas de
                    calificación, esto equivale a una nota A o sobresaliente,
                    aunque la calificación exacta en letra depende de tu escuela
                    o profesor.
                  </p>
                </div>
              </section>

              {/* WEIGHTED VS UNWEIGHTED */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Nota semestral ponderada vs. no ponderada
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">Nota No Ponderada</h3>
                    <p className="text-gray-700 leading-8">
                      Una nota semestral no ponderada trata cada calificación
                      por igual. Este método es útil cuando todas las tareas o
                      exámenes tienen la misma importancia en el curso.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">Nota Ponderada</h3>
                    <p className="text-gray-700 leading-8">
                      Una nota semestral ponderada asigna diferente importancia
                      a cada categoría. Por ejemplo, el examen final puede
                      contar un 30%, las tareas un 20% y los proyectos un 25%.
                      Cada institución decide sus propios pesos habituales —
                      exámenes parciales y proyectos suelen representar entre
                      el 15 % y el 40 % de la nota.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-8 mt-6">
                  La calificación ponderada es común en bachillerato,
                  universidad y posgrado, ya que los exámenes y proyectos
                  importantes suelen afectar más la{" "}
                  <a href="/nota-final/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                    nota final
                  </a>{" "}
                  que las tareas menores.
                </p>
              </section>

              {/* FINAL EXAM NEEDED */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo calcular la nota necesaria en el examen final
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Si ya conoces tu nota actual, tu nota objetivo y el peso del
                  examen final, puedes estimar qué puntaje necesitas en el
                  final para alcanzar tu meta.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota Necesaria en el Final = (Nota Objetivo − Nota Actual × (1 − Peso Final)) ÷ Peso Final
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 bg-white mb-6">
                  <h3 className="text-2xl font-bold mb-3">Ejemplo</h3>
                  <p className="text-gray-700 leading-8">
                    Si tu nota actual es 84%, tu nota objetivo es 90% y el
                    examen final vale el 30% del curso, la calculadora estima
                    el puntaje que necesitas en el examen final para alcanzar
                    esa meta. Esto ayuda a los estudiantes a planificar cuánto
                    deben mejorar antes de la semana de finales.
                  </p>
                </div>

                <h3 className="text-[22px] font-bold mb-4">
                  Cómo cambia tu nota según el resultado del final
                </h3>
                <p className="text-gray-700 leading-8 mb-5">
                  Con un promedio actual del 84% (70% del curso ya evaluado) y
                  un examen final que vale el 30%, así se vería tu nota final
                  según distintos resultados posibles en el examen:
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[620px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Nota en el final</th>
                        <th className="px-5 py-4 text-left font-bold">Aporte del final</th>
                        <th className="px-5 py-4 text-left font-bold">Nota final estimada</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["60%", "18 puntos", "79,2%"],
                        ["70%", "21 puntos", "82,2%"],
                        ["80%", "24 puntos", "85,2%"],
                        ["90%", "27 puntos", "88,2%"],
                        ["100%", "30 puntos", "91,2%"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                          {row.map((cell, i) => (
                            <td key={i} className="px-5 py-4 text-gray-700 text-[15px]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* POINTS BASED */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cálculo de nota semestral por puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Algunos profesores usan puntos en lugar de porcentajes. En un
                  sistema por puntos, tu nota depende de cuántos puntos
                  obtuviste del total posible.
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Porcentaje de Nota = Puntos Obtenidos ÷ Total de Puntos Posibles × 100
                </div>

                <p className="text-gray-700 leading-8">
                  Por ejemplo, si obtuviste 450 puntos de 500 posibles, tu nota
                  semestral sería del 90%. Esta calculadora es útil para
                  estudiantes cuyas clases incluyen puntos de tareas, exámenes,
                  participación, laboratorio o proyectos.
                </p>
              </section>

              {/* LETTER GRADES TABLE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Escala de calificaciones en letra más común
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las notas en letra pueden variar según la escuela, la
                  universidad, el profesor o el país. La tabla a continuación
                  muestra una escala habitual utilizada por muchos estudiantes.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-bold">Nota en Letra</th>
                        <th className="px-5 py-4 text-left font-bold">Significado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["90% - 100%", "A / Sobresaliente", "Rendimiento excelente"],
                        ["80% - 89%", "B / Notable", "Buen rendimiento"],
                        ["70% - 79%", "C / Bien", "Rendimiento regular"],
                        ["60% - 69%", "D / Suficiente", "Rendimiento por debajo del promedio"],
                        ["Menos del 60%", "F / Suspenso", "Calificación reprobatoria"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                          {row.map((cell, i) => (
                            <td key={i} className="px-5 py-4 text-gray-700 text-[15px]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CASOS ESPECIALES (consolidated from 4 separate mega-sections) */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Casos especiales: crédito extra, notas eliminadas y metas imposibles
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  Algunas situaciones no encajan directamente en la fórmula
                  estándar del promedio ponderado y requieren un ajuste previo.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {CASOS_ESPECIALES.map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{c.titulo}</h3>
                      <p className="text-gray-700 leading-7 text-[15px]">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CREDIT-HOUR WEIGHTED AVERAGE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Cómo influyen los créditos de cada asignatura en el promedio?
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  En algunas universidades, las asignaturas no tienen todas el mismo número
                  de créditos. Una materia de 4 créditos puede influir más en el promedio
                  académico que una materia de 2 créditos. En estos casos se utiliza un
                  promedio ponderado por créditos.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[650px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Asignatura</th>
                        <th className="px-5 py-4 text-left font-bold">Nota</th>
                        <th className="px-5 py-4 text-left font-bold">Créditos</th>
                        <th className="px-5 py-4 text-left font-bold">Nota × Créditos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Matemáticas", "90", "4", "360"],
                        ["Historia", "80", "3", "240"],
                        ["Biología", "85", "2", "170"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                          {row.map((cell, i) => (
                            <td key={i} className="px-5 py-4 text-gray-700 text-[15px]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    Promedio ponderado =
                    <strong> (360 + 240 + 170) ÷ (4 + 3 + 2) = 85,56%</strong>.
                    De esta forma, una asignatura con más créditos tiene una influencia
                    proporcionalmente mayor sobre el promedio.
                  </p>
                </div>
              </section>

              {/* WHO CAN USE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Quién puede usar esta calculadora de nota semestral?
                </h2>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Estudiantes",
                      text: "Controla tus notas actuales, estima los resultados finales y entiende cómo los próximos exámenes afectan tu promedio semestral.",
                    },
                    {
                      title: "Profesores",
                      text: "Verifica los totales ponderados por categoría, explica los resultados de calificación y calcula promedios semestrales con más rapidez.",
                    },
                    {
                      title: "Padres de familia",
                      text: "Comprende el progreso académico y ayuda a los estudiantes a planificar sus metas de estudio antes de que se publiquen las notas finales.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* WHEN RESULTS ARE DIFFERENT */}
              <section className="mb-12">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    ¿Por qué tu resultado puede ser diferente al de tu profesor?
                  </h2>
                  <p className="text-gray-700 leading-8 mb-5">
                    Si el resultado obtenido con la calculadora no coincide exactamente con la nota publicada por tu profesor, normalmente se debe a diferencias en el sistema de evaluación utilizado:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Créditos adicionales no contemplados en tu cálculo.</li>
                    <li>• Redondeo de decimales aplicado por la institución.</li>
                    <li>• Participación en clase o asistencia con peso propio.</li>
                    <li>• Penalizaciones específicas del curso.</li>
                    <li>• Escalas de calificación propias de la institución.</li>
                  </ul>
                </div>
              </section>

              {/* GLOSSARY */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Glosario de términos
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { t: "Promedio ponderado", d: "Sistema donde cada evaluación tiene un peso diferente." },
                    { t: "Nota objetivo", d: "Calificación que deseas conseguir al finalizar el semestre." },
                    { t: "Créditos", d: "Valor académico asignado a una asignatura." },
                    { t: "GPA", d: "Promedio académico utilizado principalmente en universidades." },
                  ].map((g) => (
                    <div key={g.t} className="rounded-xl border p-5">
                      <h3 className="font-bold mb-2">{g.t}</h3>
                      <p className="text-gray-700 leading-7">{g.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores comunes al calcular la nota semestral
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Olvidar ingresar todas las tareas, exámenes o categorías de calificación.</li>
                    <li>• Mezclar puntos y porcentajes sin convertirlos correctamente.</li>
                    <li>• Ingresar pesos que no suman 100%.</li>
                    <li>• Confundir la nota actual con la nota semestral final.</li>
                    <li>• Ignorar el peso del examen final al planificar una nota objetivo.</li>
                    <li>• Asumir que todos los profesores usan la misma escala de calificaciones.</li>
                  </ul>
                </div>
              </section>

              {/* IMPROVEMENT TIPS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos para mejorar tu nota semestral
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Enfócate en las categorías de mayor peso",
                      text: "Dedica más tiempo de estudio a los exámenes, proyectos o tareas que cuentan con un porcentaje mayor en tu nota semestral.",
                    },
                    {
                      title: "Usa el resultado de nota necesaria en el final",
                      text: "Revisa qué puntaje necesitas en el examen final para establecer una meta de estudio realista antes de la semana de finales.",
                    },
                    {
                      title: "Repasa las preguntas falladas",
                      text: "Analiza las pruebas y exámenes anteriores para identificar errores repetidos y temas débiles.",
                    },
                    {
                      title: "Lleva un seguimiento de notas semanalmente",
                      text: "Actualiza tus puntajes con regularidad para saber siempre cómo estás en el curso.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* AUTHOR / E-E-A-T */}
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
                    Publicado el 10 de febrero de 2024 y actualizado por última
                    vez el 25 de julio de 2026.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <section className="bg-gray-50 py-14 border-t">
                  <div className="xl:px-[69px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        Preguntas Frecuentes
                      </h2>
                      <p className="text-gray-700 text-base leading-relaxed">
                        Muchos estudiantes tienen dudas al calcular notas
                        semestrales, promedios ponderados, puntajes de examen
                        final y notas objetivo. Esta sección responde las
                        preguntas más comunes sobre cómo se calculan las notas
                        semestrales y cómo esta calculadora puede ayudarte a
                        estimar tu rendimiento general en el curso.
                      </p>
                    </div>

                    <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl" itemScope itemType="https://schema.org/FAQPage">

                      {[
                        {
                          q: "¿Qué es una calculadora de nota semestral?",
                          a: "Es una herramienta que te ayuda a calcular tu nota semestral global usando puntajes de tareas, notas de exámenes, pesos por categoría, créditos o puntos.",
                        },
                        {
                          q: "¿Cómo calculo mi nota del semestre?",
                          a: "Multiplica cada nota por su peso, suma todos los puntajes ponderados y divide entre el peso total. Eso te da tu porcentaje semestral final.",
                        },
                        {
                          q: "¿Esta calculadora funciona con notas ponderadas?",
                          a: "Sí. Puedes ingresar tareas, pruebas, proyectos, parciales y exámenes finales con sus pesos en porcentaje para obtener tu nota global.",
                        },
                        {
                          q: "¿Cómo calculo la nota que necesito en el examen final?",
                          a: "Necesitas tu nota actual, tu nota objetivo y el peso del examen final. La calculadora usa esos valores para estimar el puntaje que necesitas en el final para alcanzar tu nota deseada.",
                        },
                        {
                          q: "¿Cuál es la diferencia entre nota actual y nota semestral?",
                          a: "Tu nota actual incluye solo el trabajo completado. Tu nota semestral puede incluir trabajos completados más exámenes, proyectos, participación y el examen final que aún no has presentado.",
                        },
                        {
                          q: "¿Puedo usar puntos en lugar de porcentajes?",
                          a: "Sí. Si tu clase usa puntos, divide los puntos obtenidos entre el total posible y multiplica por 100. Eso te da tu nota en porcentaje.",
                        },
                        {
                          q: "¿Todas las escuelas usan la misma escala de calificación semestral?",
                          a: "No. Colegios, universidades y profesores pueden usar escalas de calificación distintas. Consulta siempre el programa del curso o la política oficial de calificación para la escala correcta.",
                        },
                        {
                          q: "¿Cómo se convierte una nota en letra a puntos GPA?",
                          a: "Cada letra corresponde a un valor en la escala GPA de 4.0: A equivale a 4.0, B a 3.0, C a 2.0, D a 1.0 y F a 0.0. El GPA final es el promedio de esos valores, ponderado por los créditos de cada curso.",
                        },
                        {
                          q: "¿Qué pasa si los pesos de mis categorías no suman 100%?",
                          a: "La fórmula sigue funcionando: se divide la suma de (nota × peso) entre la suma total de los pesos, aunque no sumen 100%. Aun así, verifica los pesos con el programa oficial del curso.",
                        },
                      ].map((faq, idx, arr) => (
                        <details
                          key={idx}
                          className={`group ${idx < arr.length - 1 ? "border-b border-slate-700 pb-4" : ""}`}
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                        >
                          <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                            <h3 itemProp="name">{faq.q}</h3>
                            <span className="transition-transform group-open:rotate-180">▼</span>
                          </summary>
                          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="mt-4 text-slate-400" itemProp="text">{faq.a}</p>
                          </div>
                        </details>
                      ))}

                    </div>
                  </div>
                </section>
              </section>

            </div>
          </article>
        </div>
      </section>

      <InvisibleFooter />
    </main>
  );
}