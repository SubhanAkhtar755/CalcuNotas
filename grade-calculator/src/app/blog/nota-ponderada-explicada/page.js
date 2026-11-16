import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Nota Ponderada Explicada: Cómo Calcular tu Nota Final por Categorías",
  description:
    "Qué es una nota ponderada y cómo calcularla paso a paso cuando cada categoría (tareas, exámenes, proyectos) vale un porcentaje distinto de tu nota final.",
  keywords: [
    "nota ponderada",
    "que es una nota ponderada",
    "como calcular nota ponderada",
    "promedio ponderado",
    "calcular nota por categorias",
    "peso de las categorias en la nota",
    "formula nota ponderada",
    "ejemplo de nota ponderada",
    "calculadora nota ponderada",
  ],
  openGraph: {
    title: "Nota Ponderada Explicada: Cómo Calcular tu Nota Final por Categorías",
    description:
      "Guía completa de la nota ponderada: fórmula, ejemplos paso a paso y errores comunes al calcular el promedio por categorías.",
    url: "https://calcunotas.com/blog/nota-ponderada-explicada/",
    type: "article",
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/nota-ponderada-explicada/",
  },
};

const faqs = [
  {
    question: "¿Qué es una nota ponderada?",
    answer:
      "Es una nota final calculada dando distinto peso (importancia) a cada categoría de evaluación. En lugar de promediar todas las notas por igual, cada categoría se multiplica por el porcentaje que representa en el curso.",
  },
  {
    question: "¿Cuál es la fórmula de la nota ponderada?",
    answer:
      "Nota ponderada = Σ (Nota de la categoría × Peso de la categoría) ÷ Σ Pesos. Si los pesos suman 100%, el denominador es simplemente 100.",
  },
  {
    question: "¿Qué diferencia hay entre promedio simple y nota ponderada?",
    answer:
      "El promedio simple suma todas las notas y divide entre el número de evaluaciones, tratándolas como igual de importantes. La nota ponderada multiplica cada nota por su peso específico antes de sumarlas, reflejando que algunas evaluaciones cuentan más que otras.",
  },
  {
    question: "¿Qué pasa si los pesos de mis categorías no suman 100%?",
    answer:
      "Si tienes categorías pendientes (por ejemplo, el examen final aún no se ha hecho), la calculadora debe dividir entre la suma de los pesos ya evaluados, no entre 100. Eso te da tu nota actual basada solo en lo completado.",
  },
  {
    question: "¿Puedo tener notas en porcentaje y en puntos dentro de la misma nota ponderada?",
    answer:
      "Sí, pero primero debes convertir las notas por puntos a porcentaje (puntos obtenidos ÷ puntos posibles × 100) antes de aplicar los pesos, para que todas las categorías estén en la misma escala.",
  },
  {
    question: "¿Un peso más alto siempre significa una categoría más difícil?",
    answer:
      "No necesariamente. El peso refleja cuánto influye esa categoría en la nota final, no su nivel de dificultad. Un examen final puede valer 40% simplemente porque evalúa todo el contenido del curso, no porque sea más difícil que una tarea individual.",
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
    headline: "Nota Ponderada Explicada: Cómo Calcular tu Nota Final por Categorías",
    description:
      "Guía completa de la nota ponderada: fórmula, ejemplos paso a paso y errores comunes al calcular el promedio por categorías.",
    author: { "@type": "Organization", name: "CalcuNotas", url: "https://calcunotas.com" },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/nota-ponderada-explicada/",
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
        name: "Nota Ponderada Explicada",
        item: "https://calcunotas.com/blog/nota-ponderada-explicada/",
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
                <span>Inicio / Blog / Nota Ponderada Explicada</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">Nota Ponderada</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Promedio</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Calculadora de Notas</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Nota Ponderada Explicada: Cómo Calcular tu Nota Final Cuando Cada Categoría Vale Diferente
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <strong className="text-gray-700">Equipo CalcuNotas</strong></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                Casi ningún curso califica todas las evaluaciones por igual: las tareas, exámenes,
                proyectos y participación suelen valer porcentajes distintos. Esta guía explica qué
                es una nota ponderada, su fórmula exacta y cómo calcularla paso a paso con ejemplos
                reales.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Respuesta Rápida</h2>
                <p className="text-gray-700 leading-8">
                  <strong>Nota ponderada = Σ (Nota de la categoría × Peso de la categoría) ÷ Σ Pesos.</strong>{" "}
                  Multiplica cada nota por su porcentaje, suma todos los resultados y divide entre
                  la suma total de los pesos (100 si todas las categorías ya están evaluadas).
                </p>
              </div>

              <section className="mb-14" aria-labelledby="que-es-heading">
                <h2 id="que-es-heading" className="text-4xl font-black tracking-[-0.04em] mb-6">
                  ¿Qué es una Nota Ponderada?
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Una nota ponderada es el resultado de combinar varias evaluaciones dándole a
                    cada una un peso distinto según su importancia dentro del curso. Por ejemplo,
                    en un curso típico: tareas 20%, exámenes parciales 30%, proyecto 20% y examen
                    final 30%.
                  </p>
                  <p>
                    A diferencia de un promedio simple —donde todas las notas cuentan por igual—,
                    la nota ponderada refleja que un examen final que vale el 30% del curso tiene
                    mucho más impacto en tu calificación que una tarea individual que vale el 5%.
                  </p>
                </div>
              </section>

              <section className="mb-14" aria-labelledby="formula-heading">
                <h2 id="formula-heading" className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Fórmula de la Nota Ponderada
                </h2>
                <div className="rounded-2xl bg-[#111827] text-white p-7 text-center mb-8">
                  <div className="text-2xl md:text-3xl font-black tracking-[-0.03em]">
                    Nota = Σ (Nota × Peso) ÷ Σ Peso
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 mb-8">
                  {[
                    { var: "Nota de la categoría", def: "La calificación obtenida en esa categoría, generalmente en porcentaje." },
                    { var: "Peso de la categoría", def: "El porcentaje que esa categoría representa dentro de la nota total del curso." },
                  ].map((v) => (
                    <div key={v.var} className="rounded-xl border border-gray-200 p-5 bg-white">
                      <div className="font-semibold text-blue-600 mb-1">{v.var}</div>
                      <p className="text-gray-600 text-[14px] leading-6">{v.def}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-gray-200 bg-[#f8fafc] p-8">
                  <h3 className="text-2xl font-black tracking-[-0.03em] mb-5">Ejemplo Completo</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] border-collapse">
                      <thead>
                        <tr className="bg-[#111827] text-white">
                          <th className="px-4 py-4 text-left">Categoría</th>
                          <th className="px-4 py-4 text-left">Nota</th>
                          <th className="px-4 py-4 text-left">Peso</th>
                          <th className="px-4 py-4 text-left">Contribución</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Tareas", "90%", "20%", "18.0"],
                          ["Parciales", "82%", "30%", "24.6"],
                          ["Proyecto", "95%", "20%", "19.0"],
                          ["Examen Final", "78%", "30%", "23.4"],
                        ].map((row, index) => (
                          <tr key={index} className="border-b border-gray-200 bg-white">
                            {row.map((cell, i) => (
                              <td key={i} className="px-4 py-4 text-gray-700">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 rounded-2xl bg-[#111827] p-5 text-white">
                    <div className="text-lg font-semibold">18.0 + 24.6 + 19.0 + 23.4 = 85.0</div>
                    <div className="mt-4 text-2xl font-black">Nota Final = 85.0%</div>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  ¿Y si Aún No Tienes Todas las Categorías Evaluadas?
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Es habitual llegar a mitad de curso sin haber hecho el examen final todavía.
                    En ese caso, no debes dividir entre 100, sino entre la suma de los pesos que sí
                    tienen nota, para obtener tu nota actual con lo que llevas evaluado hasta el
                    momento.
                  </p>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6">
                    <h3 className="font-black text-xl mb-3">Ejemplo: examen final pendiente</h3>
                    <p className="mb-3">
                      Tareas 90% (peso 20%), Parciales 82% (peso 30%). El examen final (peso 30%)
                      todavía no se ha realizado.
                    </p>
                    <div className="space-y-1 font-mono text-[14px] text-gray-700">
                      <p>(90 × 20) + (82 × 30) = 1800 + 2460 = 4260</p>
                      <p>Peso evaluado hasta ahora = 20 + 30 = 50</p>
                      <p className="text-blue-700 font-bold">Nota actual = 4260 ÷ 50 = 85.2%</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Errores Comunes al Calcular la Nota Ponderada
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Promediar las categorías por igual en vez de aplicar el peso de cada una.</li>
                    <li>• Dividir entre 100 cuando todavía faltan categorías por evaluar.</li>
                    <li>• Mezclar puntos y porcentajes sin convertir primero a la misma escala.</li>
                    <li>• Olvidar incluir alguna categoría (por ejemplo, participación) que sí forma parte del peso total del curso.</li>
                    <li>• Usar pesos que no coinciden con el programa oficial del curso.</li>
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
                    Calcula tu Nota Ponderada Automáticamente
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Introduce tus categorías y pesos y obtén tu nota final al instante.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/calculadora-de-notas/" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#111827]">
                      Usar Calculadora de Notas
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