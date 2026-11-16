import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Escalas de Calificación en el Mundo Hispanohablante: España vs. México vs. Colombia vs. Chile vs. Perú",
  description:
    "Comparativa completa de las escalas de calificación de España, México, Colombia, Chile, Perú, Argentina y Venezuela: rangos, nota mínima de aprobación y equivalencias.",
  keywords: [
    "escalas de calificacion españa mexico colombia",
    "escala de notas chile",
    "escala de notas colombia",
    "escala de notas mexico",
    "escala de notas peru",
    "nota minima para aprobar por pais",
    "comparacion escalas de notas",
    "equivalencia notas paises hispanohablantes",
  ],
  openGraph: {
    title: "Escalas de Calificación en el Mundo Hispanohablante",
    description:
      "Comparativa de las escalas de calificación de España, México, Colombia, Chile, Perú, Argentina y Venezuela.",
    url: "https://calcunotas.com/blog/escalas-calificacion-hispanohablante/",
    type: "article",
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/escalas-calificacion-hispanohablante/",
  },
};

const faqs = [
  {
    question: "¿Cuál es la nota mínima para aprobar en España?",
    answer:
      "En España la escala va de 0 a 10, y la nota mínima para aprobar es 5.0. Suspenso es por debajo de 5, Aprobado entre 5 y 6.9, Notable entre 7 y 8.9, y Sobresaliente de 9 a 10.",
  },
  {
    question: "¿Cuál es la escala de notas en Chile?",
    answer:
      "Chile usa una escala de 1.0 a 7.0. La nota mínima de aprobación es generalmente 4.0. Es una de las pocas escalas hispanohablantes que no empieza en 0.",
  },
  {
    question: "¿Cuál es la escala de notas en Colombia?",
    answer:
      "Colombia usa una escala de 0.0 a 5.0. La nota mínima para aprobar suele ser 3.0, aunque algunas instituciones exigen 3.5.",
  },
  {
    question: "¿Cuál es la escala de notas en México?",
    answer:
      "México usa una escala de 0 a 10, similar a España, pero con nota mínima de aprobación de 6.0 en la mayoría de universidades e institutos, más alta que la española.",
  },
  {
    question: "¿Cuál es la escala de notas en Perú y Venezuela?",
    answer:
      "Ambos países usan una escala de 0 a 20. En Perú la nota mínima aprobatoria suele ser 10.5 u 11, y en Venezuela generalmente 10.",
  },
  {
    question: "¿Se pueden convertir notas directamente entre países?",
    answer:
      "No de forma exacta y universal. Aunque puedes convertir proporcionalmente (por ejemplo, un 7/10 español equivale aproximadamente a un 3.5/5 colombiano), la nota mínima de aprobación varía como porcentaje, así que la conversión más fiable siempre es en base al porcentaje sobre el máximo de cada escala.",
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
    headline: "Escalas de Calificación en el Mundo Hispanohablante",
    description:
      "Comparativa de las escalas de calificación de España, México, Colombia, Chile, Perú, Argentina y Venezuela.",
    author: { "@type": "Organization", name: "CalcuNotas", url: "https://calcunotas.com" },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/escalas-calificacion-hispanohablante/",
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
        name: "Escalas de Calificación en el Mundo Hispanohablante",
        item: "https://calcunotas.com/blog/escalas-calificacion-hispanohablante/",
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
                <span>Inicio / Blog / Escalas de Calificación en el Mundo Hispanohablante</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">Escalas de Notas</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Comparativa por País</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Escalas de Calificación en el Mundo Hispanohablante: España vs. México vs. Colombia vs. Chile vs. Perú
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <strong className="text-gray-700">Equipo CalcuNotas</strong></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                Cada país hispanohablante usa una escala de calificación distinta, con su propio
                rango numérico y nota mínima de aprobación. Esta guía compara las principales
                escalas para que sepas exactamente cómo se traduce tu rendimiento entre sistemas.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Respuesta Rápida</h2>
                <p className="text-gray-700 leading-8">
                  España y México usan 0-10, Colombia usa 0-5, Chile usa 1-7, y Perú y Venezuela
                  usan 0-20. La nota mínima de aprobación varía entre el 50% y el 60% del máximo
                  de cada escala, dependiendo del país e institución.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Tabla Comparativa de Escalas por País
                </h2>
                <div className="overflow-x-auto rounded-3xl border border-gray-200">
                  <table className="w-full min-w-[750px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">País</th>
                        <th className="px-5 py-4 text-left">Escala</th>
                        <th className="px-5 py-4 text-left">Nota Mínima Aprobado</th>
                        <th className="px-5 py-4 text-left">% Equivalente</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["🇪🇸 España", "0 – 10", "5.0", "50%"],
                        ["🇲🇽 México", "0 – 10", "6.0", "60%"],
                        ["🇨🇴 Colombia", "0.0 – 5.0", "3.0", "60%"],
                        ["🇨🇱 Chile", "1.0 – 7.0", "4.0", "50% (sobre el rango 1-7)"],
                        ["🇵🇪 Perú", "0 – 20", "10.5 – 11", "≈53-55%"],
                        ["🇻🇪 Venezuela", "0 – 20", "10", "50%"],
                        ["🇦🇷 Argentina", "0 – 10", "4.0 (varía)", "40%"],
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
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Detalle por País
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    { pais: "España", texto: "Escala 0-10 con decimales. Suspenso (0-4.9), Aprobado (5-6.9), Notable (7-8.9), Sobresaliente (9-10). El examen final suele valer entre 40% y 60% de la nota." },
                    { pais: "México", texto: "Escala 0-10, similar a España pero con nota mínima más alta (6.0). Muy usada tanto en educación básica como universitaria." },
                    { pais: "Colombia", texto: "Escala 0.0-5.0 con un decimal. La nota mínima varía entre instituciones (3.0 a 3.5), y es común usar 'habilitación' como examen de recuperación." },
                    { pais: "Chile", texto: "Única escala que no empieza en 0: va de 1.0 a 7.0. El examen final suele tener un peso alto (50-70%), haciendo que el resultado final sea muy decisivo." },
                    { pais: "Perú", texto: "Escala 0-20, generalmente sin decimales. La nota mínima aprobatoria (10.5 u 11) equivale a apenas más del 50% del máximo." },
                    { pais: "Venezuela", texto: "Escala 0-20, con nota mínima de aprobación de 10, equivalente al 50% del máximo posible." },
                  ].map((c) => (
                    <div key={c.pais} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <h3 className="font-black text-xl mb-2">{c.pais}</h3>
                      <p className="text-gray-700 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Cómo Convertir Notas Entre Escalas Distintas
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    La forma más fiable de comparar notas entre países es convertir cada una a
                    porcentaje sobre el máximo de su propia escala, en lugar de intentar una
                    conversión numérica directa.
                  </p>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6">
                    <h3 className="font-black text-xl mb-3">Ejemplo: convertir 6.0/7.0 (Chile) a escala colombiana</h3>
                    <div className="space-y-1 font-mono text-[14px] text-gray-700">
                      <p>Paso 1 — Porcentaje: 6.0 ÷ 7.0 × 100 = 85.7%</p>
                      <p className="text-blue-700 font-bold">Paso 2 — Escala colombiana: 85.7% × 5.0 = 4.29 sobre 5.0</p>
                    </div>
                  </div>
                  <p>
                    Esta conversión es aproximada y sirve para orientación general. Para trámites
                    oficiales (transferencias, convalidaciones, becas internacionales), siempre
                    solicita la conversión formal de la institución receptora.
                  </p>
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
                    Calcula tu Nota en Cualquier Escala
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Nuestra calculadora admite porcentaje, puntos y notas ponderadas para cualquier país.
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