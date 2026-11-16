import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Guía para Profesores: Cómo Crear una Tabla de Calificación Rápida y Justa",
  description:
    "Guía práctica para profesores: cómo crear una tabla de calificación rápida a partir del número de preguntas, mantener consistencia y evitar errores comunes al calificar.",
  keywords: [
    "tabla de calificacion rapida",
    "guia para profesores calificar",
    "como crear tabla de calificacion",
    "calificador rapido para profesores",
    "tabla de notas por preguntas",
    "como calificar examenes rapido",
    "calificacion justa examenes",
  ],
  openGraph: {
    title: "Guía para Profesores: Cómo Crear una Tabla de Calificación Rápida y Justa",
    description:
      "Cómo crear una tabla de calificación rápida y consistente a partir del número de preguntas de un examen.",
    url: "https://calcunotas.com/blog/guia-profesores-tabla-calificacion-rapida/",
    type: "article",
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/guia-profesores-tabla-calificacion-rapida/",
  },
};

const faqs = [
  {
    question: "¿Qué es una tabla de calificación rápida?",
    answer:
      "Es una tabla que muestra, para un número fijo de preguntas, qué porcentaje y calificación corresponde a cada cantidad posible de respuestas correctas o incorrectas, evitando calcular cada examen manualmente uno por uno.",
  },
  {
    question: "¿Cómo se calcula cada fila de la tabla?",
    answer:
      "Para cada número de respuestas incorrectas, se calculan las correctas restando del total de preguntas, se divide entre el total y se multiplica por 100 para obtener el porcentaje. Luego se aplica la escala de letras de la institución.",
  },
  {
    question: "¿Por qué usar una tabla en vez de calcular cada examen individualmente?",
    answer:
      "Ahorra tiempo cuando se corrigen muchos exámenes con el mismo número de preguntas, y garantiza que todos los estudiantes sean calificados con exactamente la misma escala, evitando inconsistencias.",
  },
  {
    question: "¿Debo usar la misma tabla para exámenes con distinto número de preguntas?",
    answer:
      "No. Cada tabla es específica para un número fijo de preguntas, porque el porcentaje que representa cada pregunta cambia según el total. Genera una tabla nueva para cada examen con un número distinto de ítems.",
  },
  {
    question: "¿Cómo mantengo la calificación justa entre distintos grupos?",
    answer:
      "Usa la misma escala de conversión de porcentaje a letra para todos los grupos que rindan el mismo examen, y documenta cualquier ajuste (como una curva) de forma que se aplique de manera uniforme a todos los estudiantes.",
  },
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Guía para Profesores: Cómo Crear una Tabla de Calificación Rápida y Justa",
    description:
      "Cómo crear una tabla de calificación rápida y consistente a partir del número de preguntas de un examen.",
    author: { "@type": "Organization", name: "CalcuNotas", url: "https://calcunotas.com" },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/guia-profesores-tabla-calificacion-rapida/",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://calcunotas.com/blog/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Guía para Profesores: Tabla de Calificación Rápida",
        item: "https://calcunotas.com/blog/guia-profesores-tabla-calificacion-rapida/",
      },
    ],
  },
];

export default function BlogPostPage() {
  return (
    <main className=" min-h-screen bg-[#f5f7fb] text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <InvisibleHeader />

      <section className="py-10 px-8">
        <div className=" mx-auto grid gap-6 lg:grid-cols-[1fr_320px] items-start">
          <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="p-6 md:p-10">
              <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span>Inicio / Blog / Guía para Profesores: Tabla de Calificación Rápida</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">Profesores</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Calificador Rápido</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Guía para Profesores: Cómo Crear una Tabla de Calificación Rápida y Justa
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <strong className="text-gray-700">Equipo CalcuNotas</strong></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                Corregir examen tras examen calculando el porcentaje manualmente consume tiempo
                valioso. Una tabla de calificación rápida resuelve esto de una vez: muestra, para
                un número fijo de preguntas, el porcentaje y la letra correspondiente a cada
                posible cantidad de aciertos.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Respuesta Rápida</h2>
                <p className="text-gray-700 leading-8">
                  Para crear la tabla: fija el número total de preguntas del examen, calcula el
                  porcentaje para cada cantidad posible de respuestas correctas (correctas ÷ total
                  × 100) y aplica la escala de letras de tu institución a cada fila.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Por Qué Usar una Tabla en Lugar de Calcular Cada Examen
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Cuando corriges 30 exámenes con el mismo número de preguntas, calcular el
                    porcentaje uno por uno multiplica el riesgo de error humano y consume tiempo
                    innecesario. Una tabla generada una sola vez elimina ese trabajo repetitivo:
                    solo cuentas los aciertos de cada estudiante y buscas la fila correspondiente.
                  </p>
                  <p>
                    Además, garantiza consistencia: todos los estudiantes del mismo examen son
                    evaluados con exactamente la misma conversión de porcentaje a letra, sin
                    variaciones accidentales entre exámenes corregidos en momentos distintos.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Ejemplo de Tabla: Examen de 20 Preguntas
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">Correctas</th>
                        <th className="px-5 py-4 text-left">Incorrectas</th>
                        <th className="px-5 py-4 text-left">Porcentaje</th>
                        <th className="px-5 py-4 text-left">Letra</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["20", "0", "100%", "A+"],
                        ["19", "1", "95%", "A"],
                        ["18", "2", "90%", "A"],
                        ["17", "3", "85%", "B"],
                        ["16", "4", "80%", "B"],
                        ["15", "5", "75%", "C"],
                        ["14", "6", "70%", "C"],
                        ["13", "7", "65%", "D"],
                        ["12", "8", "60%", "D"],
                        ["11", "9", "55%", "F"],
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
                <p className="text-gray-500 text-[13px] mt-3">
                  Escala de ejemplo. Ajusta los cortes de letra (A, B, C, D, F) según la política
                  oficial de calificación de tu institución.
                </p>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Cómo Generar tu Propia Tabla en 3 Pasos
                </h2>
                <div className="space-y-5">
                  {[
                    { title: "Paso 1: Define el total de preguntas", text: "Fija el número exacto de ítems del examen; la tabla solo es válida para ese total." },
                    { title: "Paso 2: Calcula el porcentaje de cada fila", text: "Para cada cantidad posible de aciertos, divide entre el total de preguntas y multiplica por 100." },
                    { title: "Paso 3: Aplica tu escala de letras", text: "Convierte cada porcentaje a la calificación de letra según los cortes oficiales de tu institución (por ejemplo, 90%+ = A)." },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-black">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-black mb-2">{item.title}</h3>
                          <p className="text-gray-700 leading-7">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Errores Comunes al Crear una Tabla de Calificación
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Reutilizar la misma tabla para exámenes con distinto número de preguntas.</li>
                    <li>• Usar cortes de letra distintos a los que exige la política oficial de la institución.</li>
                    <li>• No documentar si se aplicó una curva de calificación adicional sobre la tabla base.</li>
                    <li>• Redondear el porcentaje de forma inconsistente entre distintas filas de la tabla.</li>
                  </ul>
                </div>
              </section>

              <section id="preguntas-frecuentes" className="mb-10">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-8">Preguntas Frecuentes</h2>
                <div className="space-y-5">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-6">
                      <summary className="cursor-pointer list-none text-lg font-black text-gray-800">
                        {faq.question}
                      </summary>
                      <p className="mt-4 leading-8 text-gray-700">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 text-white">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-black tracking-[-0.04em] leading-tight">
                    Genera tu Tabla de Calificación al Instante
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Introduce el número de preguntas y obtén la tabla completa de porcentajes y letras.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/calificador-rapido/" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#111827]">
                      Abrir Calificador Rápido
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </article>

          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      <InvisibleFooter />
    </main>
  );
}