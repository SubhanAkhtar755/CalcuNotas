import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Penalización en Exámenes Tipo Test: Fórmula MIR y Oposiciones",
  description:
    "¿Cuánto restan las preguntas falladas en un examen tipo test? Fórmula exacta de penalización usada en el MIR, oposiciones y exámenes con respuesta múltiple, con ejemplos paso a paso.",
  keywords: [
    "calculadora nota mir",
    "cuanto restan las preguntas tipo test",
    "penalizacion examen tipo test",
    "formula mir",
    "cuanto resta una pregunta mal en el mir",
    "penalizacion oposiciones",
    "formula de correccion examen tipo test",
    "aciertos y errores examen",
    "nota examen tipo test con penalizacion",
    "cuanto vale cada pregunta mir",
  ],
  openGraph: {
    title: "Penalización en Exámenes Tipo Test: Fórmula MIR y Oposiciones",
    description:
      "Fórmula exacta de penalización por errores en exámenes tipo test: MIR, oposiciones y exámenes de opción múltiple.",
    url: "https://calcunotas.com/blog/penalizacion-examenes-tipo-test/",
    type: "article",
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/penalizacion-examenes-tipo-test/",
  },
};

const faqs = [
  {
    question: "¿Cuánto resta una pregunta mal en el examen MIR?",
    answer:
      "En el examen MIR (España), cada tres preguntas falladas restan el valor de una pregunta acertada. La fórmula es: Nota = Aciertos − (Errores ÷ 3). Las preguntas en blanco no puntúan ni penalizan.",
  },
  {
    question: "¿Todas las oposiciones usan la misma penalización?",
    answer:
      "No. Cada convocatoria de oposición fija su propia fórmula en las bases oficiales. Las más comunes son restar 1/3, 1/2 o el valor completo de un acierto por cada error, pero siempre debes confirmarlo en la convocatoria específica.",
  },
  {
    question: "¿Las preguntas en blanco penalizan?",
    answer:
      "En la gran mayoría de exámenes tipo test con corrección negativa, las preguntas dejadas en blanco no suman ni restan puntos. Solo los errores (preguntas contestadas incorrectamente) penalizan.",
  },
  {
    question: "¿Por qué existe la penalización por errores?",
    answer:
      "La penalización desincentiva contestar al azar. Sin ella, un aspirante podría acertar por pura probabilidad; con penalización, adivinar sin ningún conocimiento tiende a no mejorar la nota en el largo plazo.",
  },
  {
    question: "¿Cómo sé si me conviene arriesgarme a responder cuando dudo?",
    answer:
      "Depende de cuántas opciones puedas descartar. Con una penalización de 1/3 y 4 opciones de respuesta, si logras descartar al menos una opción, la respuesta ya no perjudica tu nota esperada a largo plazo. Con menos opciones descartadas, el riesgo aumenta.",
  },
  {
    question: "¿Cómo calculo el porcentaje final a partir de la nota con penalización?",
    answer:
      "Divide la nota obtenida (aciertos menos la penalización) entre el número total de preguntas del examen y multiplica por 100. Por ejemplo, con una nota de 72 sobre 100 preguntas: 72 ÷ 100 × 100 = 72%.",
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
    headline: "Penalización en Exámenes Tipo Test: Fórmula MIR y Oposiciones",
    description:
      "Fórmula exacta de penalización por errores en exámenes tipo test: MIR, oposiciones y exámenes de opción múltiple.",
    author: { "@type": "Organization", name: "CalcuNotas", url: "https://calcunotas.com" },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/penalizacion-examenes-tipo-test/",
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
        name: "Penalización en Exámenes Tipo Test",
        item: "https://calcunotas.com/blog/penalizacion-examenes-tipo-test/",
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
                <span>Inicio / Blog / Penalización en Exámenes Tipo Test</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">MIR</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Oposiciones</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Examen Tipo Test</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Penalización en Exámenes Tipo Test: Fórmula MIR, Oposiciones y Cuántos Puntos Restan
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <strong className="text-gray-700">Equipo CalcuNotas</strong></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                En exámenes tipo test con corrección negativa —como el MIR, EIR, oposiciones y muchos
                exámenes de opción múltiple— cada pregunta fallada resta puntos a tu nota. Esta guía
                explica la fórmula exacta, cuánto vale cada error y cómo calcular tu nota real cuando
                el examen penaliza los fallos.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Respuesta Rápida</h2>
                <p className="text-gray-700 leading-8">
                  La fórmula más habitual de penalización, usada en el examen MIR español, es:{" "}
                  <strong>Nota = Aciertos − (Errores ÷ 3)</strong>. Es decir, cada tres preguntas
                  falladas restan el equivalente a una pregunta acertada. Las preguntas en blanco
                  no suman ni restan.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  ¿Por Qué los Exámenes Tipo Test Penalizan los Errores?
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Cuando un examen tiene preguntas de opción múltiple, un aspirante podría
                    intentar acertar al azar sin estudiar el contenido. Para desincentivar esta
                    estrategia, muchas instituciones aplican una penalización: cada respuesta
                    incorrecta resta una fracción del valor de un acierto.
                  </p>
                  <p>
                    El objetivo es que, estadísticamente, adivinar sin ningún conocimiento previo
                    no mejore la nota esperada. Este sistema es habitual en exámenes de acceso a
                    especialidades médicas (MIR, EIR, FIR, BIR, QIR, PIR), oposiciones públicas y
                    algunos exámenes universitarios de opción múltiple.
                  </p>
                </div>
              </section>

              <section className="mb-14" aria-labelledby="formula-mir-heading">
                <h2 id="formula-mir-heading" className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Fórmula de Penalización del Examen MIR
                </h2>
                <div className="rounded-2xl bg-[#111827] text-white p-7 text-center mb-8">
                  <div className="text-2xl md:text-3xl font-black tracking-[-0.03em]">
                    Nota = Aciertos − (Errores ÷ 3)
                  </div>
                </div>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    En el examen MIR de España, cada <strong>3 preguntas falladas</strong> restan
                    el equivalente a <strong>1 pregunta acertada</strong>. Esto significa que cada
                    error individual resta 0.33 puntos aproximadamente. Las preguntas dejadas en
                    blanco no puntúan ni penalizan: simplemente no cuentan.
                  </p>
                </div>

                <div className="mt-10 rounded-3xl border border-gray-200 bg-[#f8fafc] p-8">
                  <h3 className="text-2xl font-black tracking-[-0.03em] mb-5">Ejemplo Completo</h3>
                  <p className="text-gray-700 leading-8 mb-4">
                    Examen de 210 preguntas. Un aspirante contesta 180 preguntas: acierta 150,
                    falla 30, y deja 30 en blanco.
                  </p>
                  <div className="space-y-2 text-[15px] font-mono text-gray-700">
                    <p>Nota = 150 − (30 ÷ 3)</p>
                    <p>Nota = 150 − 10</p>
                    <p className="text-blue-700 font-bold">Nota = 140 puntos sobre 210 preguntas</p>
                  </div>
                  <p className="text-gray-600 text-[14px] mt-4">
                    Para expresarlo en porcentaje: 140 ÷ 210 × 100 = <strong>66.7%</strong>.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Otras Fórmulas de Penalización Comunes en Oposiciones
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  No todas las oposiciones usan la misma fracción de penalización. Estas son las
                  más frecuentes; siempre debes confirmar la fórmula exacta en las bases oficiales
                  de tu convocatoria.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[650px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">Penalización</th>
                        <th className="px-5 py-4 text-left">Fórmula</th>
                        <th className="px-5 py-4 text-left">Uso Habitual</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1/3 (un tercio)", "Aciertos − (Errores ÷ 3)", "Examen MIR, EIR y otras especialidades sanitarias"],
                        ["1/2 (un medio)", "Aciertos − (Errores ÷ 2)", "Algunas oposiciones de cuerpos generales del Estado"],
                        ["1/4 (un cuarto)", "Aciertos − (Errores ÷ 4)", "Exámenes con 5 opciones de respuesta por pregunta"],
                        ["Resta completa", "Aciertos − Errores", "Oposiciones con penalización estricta (menos común)"],
                        ["Sin penalización", "Aciertos únicamente", "Muchos exámenes universitarios y de certificación"],
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
                  La fracción de penalización suele estar relacionada con el número de opciones de
                  respuesta: cuantas más opciones, menor suele ser la penalización por error,
                  porque acertar al azar es matemáticamente menos probable.
                </p>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  ¿Conviene Arriesgarse Cuando Dudas Entre Dos Respuestas?
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Esta es una de las decisiones más comunes durante un examen tipo test. La
                    respuesta depende de cuántas opciones puedas descartar con seguridad antes de
                    responder.
                  </p>
                  <p>
                    Con una penalización de 1/3 y 4 opciones de respuesta por pregunta, la
                    probabilidad de acertar al azar entre 4 opciones es 25%, y la penalización
                    esperada por error es exactamente compensada por esa probabilidad: es un punto
                    de equilibrio. Si logras descartar al menos una opción (quedando 3 posibles),
                    la probabilidad de acertar sube a 33%, lo que hace que responder sea
                    estadísticamente favorable.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "0 opciones descartadas",
                      texto: "Con penalización 1/3, es un punto de equilibrio: no mejora ni empeora la nota esperada.",
                    },
                    {
                      title: "1 opción descartada",
                      texto: "Responder empieza a ser estadísticamente favorable frente a dejar en blanco.",
                    },
                    {
                      title: "2 o más opciones descartadas",
                      texto: "Responder es claramente favorable: la probabilidad de acertar supera el umbral de penalización.",
                    },
                  ].map((c) => (
                    <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <h3 className="font-black text-lg mb-2">{c.title}</h3>
                      <p className="text-gray-700 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Errores Comunes al Calcular la Nota con Penalización
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Confundir la fracción de penalización de tu examen con la del MIR (1/3): siempre verifica las bases oficiales de tu convocatoria.</li>
                    <li>• Contar las preguntas en blanco como errores: normalmente no penalizan.</li>
                    <li>• Redondear la penalización antes de restar el total, en vez de mantener el decimal exacto hasta el resultado final.</li>
                    <li>• Olvidar convertir la nota final a porcentaje o a la escala oficial de corte de tu convocatoria.</li>
                    <li>• Asumir que todas las preguntas valen lo mismo cuando el examen incluye preguntas de reserva o anuladas.</li>
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
                    Calcula tu Nota de Examen Tipo Test al Instante
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Introduce tus aciertos y errores y aplica la fórmula de penalización correcta
                    automáticamente.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#111827]">
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