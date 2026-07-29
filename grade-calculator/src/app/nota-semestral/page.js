import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import SemesterGradeCalculatorLab from "@/app/components/SemesterGradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

// ─── SCHEMA MARKUP ────────────────────────────────────────────────────────────
const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Nota Semestral",
    url: "https://calcunotas.com/nota-semestral/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
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
    author: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },
    datePublished: "2024-02-10",
    dateModified: "2026-07-25",
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
    "calculadora de notas del curso",
    "calcular promedio con pesos",
    "nota necesaria examen final",
  ],

  authors: [{ name: "CalcuNotas", url: "https://calcunotas.com" }],
  creator: "CalcuNotas",
  publisher: "CalcuNotas",

  alternates: {
    canonical: "https://calcunotas.com/nota-semestral/",
    languages: {
      "es": "https://calcunotas.com/nota-semestral/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/nota-semestral/", // Spain
      "es-MX": "https://calcunotas.com/nota-semestral/", // Mexico
      "es-AR": "https://calcunotas.com/nota-semestral/", // Argentina
      "es-CO": "https://calcunotas.com/nota-semestral/", // Colombia
      "es-CL": "https://calcunotas.com/nota-semestral/", // Chile
      "es-PE": "https://calcunotas.com/nota-semestral/", // Peru
      "es-VE": "https://calcunotas.com/nota-semestral/", // Venezuela
      "es-EC": "https://calcunotas.com/nota-semestral/", // Ecuador
      "es-BO": "https://calcunotas.com/nota-semestral/", // Bolivia
      "es-PY": "https://calcunotas.com/nota-semestral/", // Paraguay
      "es-UY": "https://calcunotas.com/nota-semestral/", // Uruguay
      "es-GT": "https://calcunotas.com/nota-semestral/", // Guatemala
      "es-CU": "https://calcunotas.com/nota-semestral/", // Cuba
      "es-DO": "https://calcunotas.com/nota-semestral/", // Dominican Republic
      "es-HN": "https://calcunotas.com/nota-semestral/", // Honduras
      "es-SV": "https://calcunotas.com/nota-semestral/", // El Salvador
      "es-NI": "https://calcunotas.com/nota-semestral/", // Nicaragua
      "es-PA": "https://calcunotas.com/nota-semestral/", // Panama
      "es-CR": "https://calcunotas.com/nota-semestral/", // Costa Rica
    },
  },

};

export default function NotaSemestral() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 px-8 to-[#f7f9fc]">
        <div className=" mx-auto">
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Calculadora de Nota Semestral
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Nota Semestral
          </h1>

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
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-white p-5"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-[18px] font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-7 text-[15px]">
                        {item.text}
                      </p>
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
                            <td key={i} className="px-5 py-4 text-gray-700 text-[15px]">
                              {cell}
                            </td>
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
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-8 mt-6">
                  La calificación ponderada es común en bachillerato,
                  universidad y posgrado, ya que los exámenes y proyectos
                  importantes suelen afectar más la{" "}
                  <a
                    href="/nota-final/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
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

                <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3">Ejemplo</h3>
                  <p className="text-gray-700 leading-8">
                    Si tu nota actual es 84%, tu nota objetivo es 90% y el
                    examen final vale el 30% del curso, la calculadora estima
                    el puntaje que necesitas en el examen final para alcanzar
                    esa meta. Esto ayuda a los estudiantes a planificar cuánto
                    deben mejorar antes de la semana de finales.
                  </p>
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
                            <td key={i} className="px-5 py-4 text-gray-700 text-[15px]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

              {/* BENEFITS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ventajas de usar una calculadora de nota semestral
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Calcula tu nota semestral actual al instante",
                    "Comprende cómo las categorías ponderadas afectan tu resultado",
                    "Estima la nota que necesitas en el examen final para tu meta",
                    "Compara resultados en porcentaje, letra y puntos",
                    "Evita errores de cálculo manual",
                    "Planifica el tiempo de estudio antes de exámenes y proyectos finales",
                    "Sigue tu progreso académico durante todo el semestre",
                    "Toma mejores decisiones sobre recuperaciones, crédito extra y tareas",
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                          ✓
                        </div>
                        <h3 className="font-bold text-gray-900">{item}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* REAL WORLD USE CASES */}
              <section className="mb-12">

                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Casos reales donde calcular la nota semestral resulta útil
                </h2>

                <p className="text-gray-700 leading-8 mb-8">
                  La mayoría de los estudiantes utilizan una calculadora de nota semestral únicamente antes de los exámenes finales, pero también puede ayudarte durante todo el semestre. Conocer tu promedio actualizado facilita la planificación del estudio, permite detectar materias en riesgo y ayuda a establecer objetivos realistas antes de cada evaluación.
                </p>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="rounded-2xl border border-gray-200 p-6">
                    <h3 className="font-bold text-xl mb-3">Antes de un examen parcial</h3>
                    <p className="text-gray-700 leading-7">
                      Calcula cuánto influirá el próximo examen en tu promedio y decide cuánto tiempo dedicar a cada asignatura.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6">
                    <h3 className="font-bold text-xl mb-3">Antes del examen final</h3>
                    <p className="text-gray-700 leading-7">
                      Descubre la nota mínima que necesitas para aprobar o alcanzar una determinada calificación final.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6">
                    <h3 className="font-bold text-xl mb-3">Durante todo el semestre</h3>
                    <p className="text-gray-700 leading-7">
                      Actualiza tus resultados después de cada tarea, proyecto o prueba para controlar tu progreso académico.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6">
                    <h3 className="font-bold text-xl mb-3">Al finalizar el curso</h3>
                    <p className="text-gray-700 leading-7">
                      Comprueba si tu promedio coincide con la nota oficial publicada por el profesor o la universidad.
                    </p>
                  </div>

                </div>

              </section>{/* HOW UNIVERSITIES CALCULATE */}
              <section className="mb-12">

                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Cómo suelen calcular las universidades la nota semestral
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Cada institución utiliza un sistema diferente, aunque la mayoría combina tareas, proyectos, exámenes parciales, participación y un examen final mediante porcentajes ponderados.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">

                  <table className="w-full">

                    <thead>

                      <tr className="bg-blue-600 text-white">

                        <th className="px-5 py-4 text-left">Elemento</th>

                        <th className="px-5 py-4 text-left">Peso habitual</th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="border-b">

                        <td className="px-5 py-4">Tareas</td>

                        <td className="px-5 py-4">10%–30%</td>

                      </tr>

                      <tr className="border-b">

                        <td className="px-5 py-4">Proyectos</td>

                        <td className="px-5 py-4">15%–30%</td>

                      </tr>

                      <tr className="border-b">

                        <td className="px-5 py-4">Exámenes parciales</td>

                        <td className="px-5 py-4">20%–40%</td>

                      </tr>

                      <tr>

                        <td className="px-5 py-4">Examen final</td>

                        <td className="px-5 py-4">20%–40%</td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              </section>{/* WHEN RESULTS ARE DIFFERENT */}
              <section className="mb-12">

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">

                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    ¿Por qué tu resultado puede ser diferente al de tu profesor?
                  </h2>

                  <p className="text-gray-700 leading-8 mb-5">
                    Si el resultado obtenido con la calculadora no coincide exactamente con la nota publicada por tu profesor, normalmente se debe a diferencias en el sistema de evaluación utilizado.
                  </p>

                  <ul className="space-y-3 text-gray-700">

                    <li>• Créditos adicionales.</li>

                    <li>• Redondeo de decimales.</li>

                    <li>• Participación en clase.</li>

                    <li>• Asistencia.</li>

                    <li>• Penalizaciones.</li>

                    <li>• Escalas propias de la institución.</li>

                  </ul>

                </div>

              </section>{/* GLOSSARY */}
              <section className="mb-12">

                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Glosario de términos
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="rounded-xl border p-5">

                    <h3 className="font-bold mb-2">
                      Promedio ponderado
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Sistema donde cada evaluación tiene un peso diferente.
                    </p>

                  </div>

                  <div className="rounded-xl border p-5">

                    <h3 className="font-bold mb-2">
                      Nota objetivo
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Calificación que deseas conseguir al finalizar el semestre.
                    </p>

                  </div>

                  <div className="rounded-xl border p-5">

                    <h3 className="font-bold mb-2">
                      Créditos
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Valor académico asignado a una asignatura.
                    </p>

                  </div>

                  <div className="rounded-xl border p-5">

                    <h3 className="font-bold mb-2">
                      GPA
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Promedio académico utilizado principalmente en universidades.
                    </p>

                  </div>

                </div>

              </section>{/* FINAL NOTE */}
              <section className="mb-12">

                <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-8 text-white">

                  <h2 className="text-3xl font-black mb-4">
                    Planifica tu semestre con mayor precisión
                  </h2>

                  <p className="leading-8 text-blue-100">
                    Utilizar una calculadora de nota semestral de forma regular te permite conocer tu rendimiento académico en cualquier momento del curso. En lugar de esperar al resultado final, puedes calcular tu promedio después de cada evaluación, identificar las asignaturas que requieren más atención y tomar decisiones basadas en datos antes de que sea demasiado tarde.
                  </p>

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

              {/* FAQ */}
              <section>
                <section className="bg-gray-50 py-14 border-t">
                  <div className="xl:px-[69px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
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

                    {/* RIGHT — Accordion */}
                    <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                      <details className="group border-b border-slate-700 pb-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3>¿Qué es una calculadora de nota semestral?</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-400">
                          Es una herramienta que te ayuda a calcular tu nota
                          semestral global usando puntajes de tareas, notas de
                          exámenes, pesos por categoría, créditos o puntos.
                        </p>
                      </details>

                      <details className="group border-b border-slate-700 pb-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3>¿Cómo calculo mi nota del semestre?</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-400">
                          Multiplica cada nota por su peso, suma todos los
                          puntajes ponderados y divide entre el peso total. Eso
                          te da tu porcentaje semestral final.
                        </p>
                      </details>

                      <details className="group border-b border-slate-700 pb-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3>¿Esta calculadora funciona con notas ponderadas?</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-400">
                          Sí. Puedes ingresar tareas, pruebas, proyectos,
                          parciales y exámenes finales con sus pesos en
                          porcentaje para obtener tu nota global.
                        </p>
                      </details>

                      <details className="group border-b border-slate-700 pb-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3>¿Cómo calculo la nota que necesito en el examen final?</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-400">
                          Necesitas tu nota actual, tu nota objetivo y el peso
                          del examen final. La calculadora usa esos valores para
                          estimar el puntaje que necesitas en el final para
                          alcanzar tu nota deseada.
                        </p>
                      </details>

                      <details className="group border-b border-slate-700 pb-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3>¿Cuál es la diferencia entre nota actual y nota semestral?</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-400">
                          Tu nota actual incluye solo el trabajo completado. Tu
                          nota semestral puede incluir trabajos completados más
                          exámenes, proyectos, participación y el examen final
                          que aún no has presentado.
                        </p>
                      </details>

                      <details className="group border-b border-slate-700 pb-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3>¿Puedo usar puntos en lugar de porcentajes?</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-400">
                          Sí. Si tu clase usa puntos, divide los puntos
                          obtenidos entre el total posible y multiplica por 100.
                          Eso te da tu nota en porcentaje.
                        </p>
                      </details>

                      <details className="group">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3>¿Todas las escuelas usan la misma escala de calificación semestral?</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-400">
                          No. Colegios, universidades y profesores pueden usar
                          escalas de calificación distintas. Consulta siempre
                          el programa del curso o la política oficial de
                          calificación para la escala correcta.
                        </p>
                      </details>

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