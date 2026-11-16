import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Cómo Saber Qué Nota Necesitas en el Examen Final Para Aprobar o Sacar un Notable",
  description:
    "Tres escenarios reales para saber cuánto necesitas en el examen final: aprobar por poco, alcanzar un notable, o saber si tu meta ya es matemáticamente inalcanzable.",
  keywords: [
    "que nota necesito para aprobar",
    "que nota necesito para sacar un notable",
    "cuanto necesito en el examen final",
    "como saber si puedo aprobar el examen final",
    "escenarios examen final",
    "nota necesaria para aprobar la materia",
  ],
  openGraph: {
    title: "Cómo Saber Qué Nota Necesitas en el Examen Final Para Aprobar o Sacar un Notable",
    description:
      "Tres escenarios reales de examen final: aprobar por poco, alcanzar un notable, o saber si la meta ya es inalcanzable.",
    url: "https://calcunotas.com/blog/que-nota-necesitas-examen-final/",
    type: "article",
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/que-nota-necesitas-examen-final/",
  },
};

const faqs = [
  {
    question: "¿Cómo sé si ya es imposible aprobar antes de hacer el examen final?",
    answer:
      "Calcula tu nota máxima posible suponiendo que sacas el 100% en el examen final. Si ese resultado sigue estando por debajo de la nota mínima de aprobación, ya no es matemáticamente posible aprobar solo con ese examen, y necesitarías otra vía (recuperación, puntos extra, etc.).",
  },
  {
    question: "¿Sacar justo la nota mínima requerida es una buena estrategia?",
    answer:
      "No es recomendable como objetivo de estudio. La nota mínima calculada es un resultado matemático exacto, sin margen de error. Es más seguro apuntar unos puntos por encima para absorber preguntas difíciles o pequeños errores el día del examen.",
  },
  {
    question: "¿Qué pasa si mi profesor exige una nota mínima en el examen final aparte del promedio?",
    answer:
      "Algunas asignaturas exigen sacar al menos, por ejemplo, un 4/10 en el examen final para que el promedio ponderado sea válido, incluso si matemáticamente el promedio ya te daría aprobado. Consulta siempre la guía docente de tu curso para confirmarlo.",
  },
  {
    question: "¿El peso del examen final cambia mucho la nota que necesito?",
    answer:
      "Sí, significativamente. Cuanto mayor sea el peso del examen final, menos protege tu nota acumulada y más determinante se vuelve el resultado del examen para tu calificación final.",
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
    headline: "Cómo Saber Qué Nota Necesitas en el Examen Final Para Aprobar o Sacar un Notable",
    description:
      "Tres escenarios reales de examen final: aprobar por poco, alcanzar un notable, o saber si la meta ya es inalcanzable.",
    author: { "@type": "Organization", name: "CalcuNotas", url: "https://calcunotas.com" },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/que-nota-necesitas-examen-final/",
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
        name: "Qué Nota Necesitas en el Examen Final",
        item: "https://calcunotas.com/blog/que-nota-necesitas-examen-final/",
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
                <span>Inicio / Blog / Qué Nota Necesitas en el Examen Final</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">Examen Final</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Escenarios Reales</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Cómo Saber Qué Nota Necesitas en el Examen Final Para Aprobar (o Sacar un Notable)
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <strong className="text-gray-700">Equipo CalcuNotas</strong></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                No todos los estudiantes llegan al examen final con la misma situación. Algunos
                solo necesitan aprobar por poco; otros aspiran a subir su promedio a notable; y
                algunos, sin saberlo, ya tienen una meta matemáticamente inalcanzable. Estos tres
                escenarios reales te ayudan a identificar en cuál te encuentras.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Respuesta Rápida</h2>
                <p className="text-gray-700 leading-8">
                  <strong>Nota necesaria = (Meta − Nota actual × (1 − Peso)) ÷ Peso.</strong>{" "}
                  Introduce tu nota actual, el peso del examen final y tu meta para conocer el
                  puntaje exacto que necesitas. Si el resultado supera el máximo de tu escala, la
                  meta no es alcanzable solo con ese examen.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Escenario 1: Aprobar por Poco
                </h2>
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-gray-700 leading-8 mb-4">
                    Situación: nota actual <strong>4.2/10</strong>, el examen final vale{" "}
                    <strong>40%</strong> y tu único objetivo es alcanzar el <strong>5.0</strong> de
                    aprobado.
                  </p>
                  <div className="space-y-1 font-mono text-[14px] text-gray-700">
                    <p>(5.0 − 4.2 × 0.60) ÷ 0.40</p>
                    <p>(5.0 − 2.52) ÷ 0.40</p>
                    <p className="text-blue-700 font-bold">= 6.20 sobre 10</p>
                  </div>
                  <p className="text-gray-600 text-[14px] mt-4">
                    Necesitas un 6.2 en el examen final, un resultado perfectamente alcanzable con
                    una preparación normal, ya que está por encima del aprobado pero lejos del
                    máximo.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Escenario 2: Subir a Notable
                </h2>
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-gray-700 leading-8 mb-4">
                    Situación: nota actual <strong>6.8/10</strong>, examen final vale{" "}
                    <strong>35%</strong>, objetivo <strong>7.5</strong> (notable).
                  </p>
                  <div className="space-y-1 font-mono text-[14px] text-gray-700">
                    <p>(7.5 − 6.8 × 0.65) ÷ 0.35</p>
                    <p>(7.5 − 4.42) ÷ 0.35</p>
                    <p className="text-blue-700 font-bold">= 8.80 sobre 10</p>
                  </div>
                  <p className="text-gray-600 text-[14px] mt-4">
                    Necesitas un 8.8, un resultado exigente pero realista con estudio enfocado en
                    los temas de mayor peso del examen.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Escenario 3: Meta Ya Inalcanzable
                </h2>
                <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                  <p className="text-gray-700 leading-8 mb-4">
                    Situación: nota actual <strong>3.5/10</strong>, examen final vale solo{" "}
                    <strong>20%</strong> (poco peso), objetivo <strong>7.0</strong>.
                  </p>
                  <div className="space-y-1 font-mono text-[14px] text-gray-700">
                    <p>(7.0 − 3.5 × 0.80) ÷ 0.20</p>
                    <p>(7.0 − 2.80) ÷ 0.20</p>
                    <p className="text-red-700 font-bold">= 21.0 sobre 10 (imposible)</p>
                  </div>
                  <p className="text-gray-600 text-[14px] mt-4">
                    Cuando el examen final pesa poco y la nota acumulada está muy baja, incluso un
                    resultado perfecto en el examen no alcanza para llegar a metas altas. En este
                    caso conviene ajustar el objetivo a algo realista, o buscar otras vías como
                    recuperación o puntos extra.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Qué Hacer Según tu Escenario
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { titulo: "Meta fácil (< 60%)", texto: "Repasa lo esencial, cuida el descanso y evita el exceso de estudio de última hora." },
                    { titulo: "Meta exigente (60-90%)", texto: "Prioriza los temas con más peso en el examen y practica con exámenes anteriores." },
                    { titulo: "Meta imposible (> 100%)", texto: "Ajusta el objetivo, consulta si hay recuperación o puntos extra, y habla con tu profesor cuanto antes." },
                  ].map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <h3 className="font-black text-lg mb-2">{c.titulo}</h3>
                      <p className="text-gray-700 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
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
                    Calcula tu Propio Escenario al Instante
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Introduce tu nota actual, peso del examen y meta para saber exactamente cuánto necesitas.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/nota-final/" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#111827]">
                      Usar Calculadora de Nota Final
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