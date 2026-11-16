import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Cómo Calcular tu Nota Semestral Paso a Paso: Guía para Universitarios",
  description:
    "Guía paso a paso para calcular tu nota semestral combinando parciales, trabajos, prácticas y examen final, con ejemplos y fórmula explicada para universitarios.",
  keywords: [
    "como calcular nota semestral",
    "nota semestral universidad",
    "calcular promedio del semestre",
    "nota semestral paso a paso",
    "calculadora nota semestral",
    "promedio semestral universitario",
    "como sacar la nota del semestre",
  ],
  openGraph: {
    title: "Cómo Calcular tu Nota Semestral Paso a Paso: Guía para Universitarios",
    description:
      "Guía completa para calcular la nota semestral combinando parciales, trabajos, prácticas y examen final.",
    url: "https://calcunotas.com/blog/como-calcular-nota-semestral/",
    type: "article",
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/como-calcular-nota-semestral/",
  },
};

const faqs = [
  {
    question: "¿Cómo se calcula la nota semestral?",
    answer:
      "Se calcula multiplicando la nota de cada evaluación (parciales, trabajos, prácticas, examen final) por su peso correspondiente, sumando los resultados y dividiendo entre el peso total (100% si todas las evaluaciones ya se realizaron).",
  },
  {
    question: "¿La nota semestral es lo mismo que el GPA semestral?",
    answer:
      "No exactamente. La nota semestral suele referirse a la calificación de una sola asignatura durante el semestre. El GPA semestral combina las notas de todas las asignaturas cursadas ese semestre, ponderadas por sus créditos.",
  },
  {
    question: "¿Qué hago si no sé el peso exacto de cada evaluación?",
    answer:
      "Consulta el programa o guía docente de la asignatura, donde normalmente se detalla el porcentaje de cada componente. Si no está disponible, pregunta directamente al profesor antes de hacer el cálculo.",
  },
  {
    question: "¿Puedo calcular mi nota semestral antes de rendir el examen final?",
    answer:
      "Sí. Puedes calcular tu nota acumulada usando solo el peso de las evaluaciones ya realizadas, o usar una calculadora de nota final para saber qué necesitas en el examen para alcanzar tu objetivo.",
  },
  {
    question: "¿Se puede calcular la nota semestral con distintas escalas (0-10, 0-5, 0-20)?",
    answer:
      "Sí, la fórmula de promedio ponderado es universal. Solo debes mantener todos los valores en la misma escala que usa tu institución al hacer el cálculo.",
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
    "@type": "HowTo",
    name: "Cómo calcular la nota semestral",
    step: [
      { "@type": "HowToStep", name: "Lista tus evaluaciones", text: "Anota todos los componentes: parciales, trabajos, prácticas y examen final." },
      { "@type": "HowToStep", name: "Anota el peso de cada una", text: "Consulta la guía docente para el porcentaje exacto de cada componente." },
      { "@type": "HowToStep", name: "Multiplica nota por peso", text: "Calcula la contribución de cada componente a la nota total." },
      { "@type": "HowToStep", name: "Suma y divide", text: "Suma todas las contribuciones y divide entre el peso total evaluado." },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo Calcular tu Nota Semestral Paso a Paso: Guía para Universitarios",
    description:
      "Guía completa para calcular la nota semestral combinando parciales, trabajos, prácticas y examen final.",
    author: { "@type": "Organization", name: "CalcuNotas", url: "https://calcunotas.com" },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/como-calcular-nota-semestral/",
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
        name: "Cómo Calcular tu Nota Semestral",
        item: "https://calcunotas.com/blog/como-calcular-nota-semestral/",
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
                <span>Inicio / Blog / Cómo Calcular tu Nota Semestral</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">Nota Semestral</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Universidad</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Cómo Calcular tu Nota Semestral Paso a Paso: Guía para Universitarios
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <strong className="text-gray-700">Equipo CalcuNotas</strong></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                Tu nota semestral en una asignatura combina parciales, trabajos, prácticas y examen
                final, cada uno con un peso distinto. Esta guía te muestra el proceso completo,
                paso a paso, con un ejemplo real de universidad.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Respuesta Rápida</h2>
                <p className="text-gray-700 leading-8">
                  Multiplica la nota de cada componente (parciales, trabajos, examen final) por su
                  peso en porcentaje, suma todos los resultados y divide entre el peso total
                  evaluado. Si todas las evaluaciones ya se hicieron y los pesos suman 100%, el
                  resultado es directamente tu nota semestral.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Guía Paso a Paso
                </h2>
                <div className="space-y-5">
                  {[
                    { title: "Paso 1: Lista todos los componentes de tu nota", text: "Parciales, trabajos, prácticas, participación y examen final. Revisa la guía docente para no dejar ninguno fuera." },
                    { title: "Paso 2: Anota el peso de cada componente", text: "Cada componente tiene un porcentaje específico dentro de la nota total del curso, indicado en el programa de la asignatura." },
                    { title: "Paso 3: Multiplica cada nota por su peso", text: "Convierte el peso a decimal (por ejemplo, 30% = 0.30) y multiplícalo por la nota obtenida en ese componente." },
                    { title: "Paso 4: Suma todas las contribuciones", text: "Combina el resultado de cada componente para obtener el total acumulado." },
                    { title: "Paso 5: Divide entre el peso total evaluado", text: "Si ya tienes todas las notas, divide entre 100. Si aún faltan evaluaciones, divide entre la suma de los pesos ya completados." },
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
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Ejemplo Real de Nota Semestral Universitaria
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  Asignatura con cuatro componentes: dos parciales, un trabajo grupal y el examen
                  final.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[650px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">Componente</th>
                        <th className="px-5 py-4 text-left">Nota</th>
                        <th className="px-5 py-4 text-left">Peso</th>
                        <th className="px-5 py-4 text-left">Contribución</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Parcial 1", "7.0", "20%", "1.40"],
                        ["Parcial 2", "6.5", "20%", "1.30"],
                        ["Trabajo grupal", "8.5", "20%", "1.70"],
                        ["Examen Final", "7.2", "40%", "2.88"],
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
                <div className="rounded-2xl bg-[#111827] p-6 text-white">
                  <div className="text-lg font-semibold">1.40 + 1.30 + 1.70 + 2.88 = 7.28</div>
                  <div className="mt-4 text-2xl font-black">Nota Semestral = 7.28 sobre 10</div>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Nota Semestral vs. GPA Semestral: No Son lo Mismo
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-gray-200 bg-white p-8">
                    <h3 className="text-xl font-black mb-3">Nota Semestral</h3>
                    <p className="text-gray-700 leading-7">
                      Es la calificación de <strong>una sola asignatura</strong> a lo largo del
                      semestre, combinando sus componentes internos (parciales, trabajos, examen).
                    </p>
                  </div>
                  <div className="rounded-3xl border border-gray-200 bg-white p-8">
                    <h3 className="text-xl font-black mb-3">GPA Semestral</h3>
                    <p className="text-gray-700 leading-7">
                      Combina las notas finales de <strong>todas las asignaturas</strong> que
                      cursaste ese semestre, ponderadas por sus créditos, para dar un promedio
                      general del período.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Errores Comunes al Calcular la Nota Semestral
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Usar los pesos del semestre pasado en lugar de los de la guía docente actual.</li>
                    <li>• Olvidar algún componente que la institución sí incluye, como participación o asistencia.</li>
                    <li>• Confundir la nota semestral de una asignatura con el GPA semestral de todo el período.</li>
                    <li>• No verificar si existe una nota mínima obligatoria en el examen final, independiente del promedio ponderado.</li>
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
                    Calcula tu Nota Semestral Automáticamente
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Introduce tus componentes y pesos y obtén el resultado al instante.
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