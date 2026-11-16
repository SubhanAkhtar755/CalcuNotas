import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Qué Es un Buen GPA: Qué Significa Realmente un 3.0, 3.5 o 4.0",
  description:
    "¿Qué se considera un buen GPA? Guía por rango (2.0 a 4.0) explicando qué significa cada nivel para becas, admisiones universitarias y programas de posgrado.",
  keywords: [
    "que es un buen gpa",
    "que significa un gpa de 3.0",
    "que significa un gpa de 3.5",
    "que significa un gpa de 4.0",
    "gpa bueno o malo",
    "gpa competitivo",
    "gpa para becas",
    "gpa minimo universidad",
    "es bueno un gpa de 3.0",
  ],
  openGraph: {
    title: "Qué Es un Buen GPA: Qué Significa Realmente un 3.0, 3.5 o 4.0",
    description:
      "Guía por rango de GPA explicando qué significa cada nivel para becas, admisiones y posgrado.",
    url: "https://calcunotas.com/blog/que-es-un-buen-gpa/",
    type: "article",
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/que-es-un-buen-gpa/",
  },
};

const faqs = [
  {
    question: "¿Es bueno un GPA de 3.0?",
    answer:
      "Un GPA de 3.0 (equivalente a B, o 80-89% en muchas escalas) se considera un GPA sólido y por encima del promedio en la mayoría de instituciones. Es suficiente para muchas becas y admisiones, aunque no siempre para programas muy competitivos.",
  },
  {
    question: "¿Qué significa un GPA de 3.5?",
    answer:
      "Un GPA de 3.5 se considera muy bueno o excelente en la mayoría de escalas. Suele cumplir los requisitos de becas de mérito, sociedades de honor y admisiones competitivas, aunque algunos programas de élite piden 3.7 o más.",
  },
  {
    question: "¿Qué significa tener un GPA de 4.0?",
    answer:
      "Un GPA de 4.0 representa el máximo en la escala no ponderada estándar: significa haber obtenido A (o equivalente) en todos los cursos. Es poco común mantenerlo durante varios semestres y es sumamente competitivo para cualquier proceso de admisión.",
  },
  {
    question: "¿Qué GPA piden normalmente las becas?",
    answer:
      "Varía mucho según la beca. Muchas becas de mérito piden un mínimo de 3.0 a 3.5, mientras que becas altamente competitivas o de investigación pueden pedir 3.7 o más. Siempre debes verificar el requisito específico de cada programa.",
  },
  {
    question: "¿Un GPA bajo en un semestre arruina mi GPA acumulado?",
    answer:
      "No necesariamente. El GPA acumulado se calcula con puntos de calidad ponderados por créditos de todos los semestres, así que un semestre débil pesa menos cuantos más créditos totales hayas acumulado. Aun así, mientras antes mejores, más fácil será recuperar el promedio.",
  },
  {
    question: "¿El GPA es lo único que importa para las admisiones?",
    answer:
      "No. El GPA es un factor importante, pero las admisiones universitarias y de posgrado también consideran ensayos, cartas de recomendación, actividades extracurriculares, exámenes estandarizados y experiencia relevante.",
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
    headline: "Qué Es un Buen GPA: Qué Significa Realmente un 3.0, 3.5 o 4.0",
    description:
      "Guía por rango de GPA explicando qué significa cada nivel para becas, admisiones y posgrado.",
    author: { "@type": "Organization", name: "CalcuNotas", url: "https://calcunotas.com" },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/que-es-un-buen-gpa/",
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
        name: "Qué Es un Buen GPA",
        item: "https://calcunotas.com/blog/que-es-un-buen-gpa/",
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
                <span>Inicio / Blog / Qué Es un Buen GPA</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">GPA</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Becas</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Admisiones</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Qué Es un Buen GPA (y Qué Significa Realmente un 3.0, 3.5 o 4.0)
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <strong className="text-gray-700">Equipo CalcuNotas</strong></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                "Buen GPA" significa cosas distintas según el contexto: una beca, un posgrado
                competitivo o una simple validación de progreso académico. Esta guía desglosa cada
                rango de la escala de 4.0 y explica qué representa realmente para becas,
                admisiones y programas de posgrado.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Respuesta Rápida</h2>
                <p className="text-gray-700 leading-8">
                  En la escala estándar de 4.0: un GPA de <strong>3.0</strong> es sólido/por
                  encima del promedio, <strong>3.5</strong> es muy bueno y competitivo, y{" "}
                  <strong>4.0</strong> es el máximo posible (equivalente a A en todos los cursos).
                  Lo que se considera "bueno" depende del programa, la institución y tu objetivo
                  específico.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Tabla de Interpretación del GPA por Rango
                </h2>
                <div className="overflow-x-auto rounded-3xl border border-gray-200">
                  <table className="w-full min-w-[850px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">Rango GPA</th>
                        <th className="px-5 py-4 text-left">Nivel</th>
                        <th className="px-5 py-4 text-left">Elegibilidad para Becas</th>
                        <th className="px-5 py-4 text-left">Competitividad en Admisiones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["3.8 - 4.0", "Excelente", "Muy alta — la mayoría de becas de mérito", "Fuerte para programas de élite"],
                        ["3.5 - 3.7", "Muy Bueno", "Alta — la mayoría de becas académicas", "Competitivo en la mayoría de programas"],
                        ["3.0 - 3.4", "Bueno", "Moderada — cumple muchos mínimos de beca", "Sólido para admisiones generales"],
                        ["2.5 - 2.9", "Promedio", "Limitada — algunas ayudas específicas", "Menos competitivo en procesos selectivos"],
                        ["Menos de 2.5", "Por Debajo del Promedio", "Baja — pocas opciones disponibles", "Se recomienda reforzar el expediente"],
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
                  ¿Qué Significa Cada Nivel en la Práctica?
                </h2>
                <div className="grid gap-5 md:grid-cols-3">
                  {[
                    {
                      titulo: "GPA 3.0",
                      texto: "Equivale aproximadamente a una B (80-89%) en la mayoría de cursos. Es un GPA respetable que demuestra consistencia, aunque programas altamente selectivos suelen pedir más.",
                    },
                    {
                      titulo: "GPA 3.5",
                      texto: "Está entre B+ y A- en la mayoría de escalas. Es considerado muy competitivo y suele cumplir los requisitos de la mayoría de becas de mérito y sociedades de honor.",
                    },
                    {
                      titulo: "GPA 4.0",
                      texto: "Representa el máximo en la escala no ponderada: A en absolutamente todos los cursos. Es difícil de mantener durante varios semestres consecutivos.",
                    },
                  ].map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <h3 className="font-black text-xl mb-2">{c.titulo}</h3>
                      <p className="text-gray-700 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  "Buen GPA" Depende del Contexto
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    No existe un único número que sea "bueno" en todos los contextos. Un GPA de
                    3.2 puede ser excelente para admisión a una universidad de perfil general, pero
                    insuficiente para un programa de medicina o ingeniería altamente competitivo.
                  </p>
                  <p>
                    Del mismo modo, algunas instituciones usan GPA ponderado (que puede superar
                    4.0 gracias a cursos avanzados), lo que hace que comparar números entre
                    estudiantes de distintas escuelas sin contexto pueda ser engañoso.
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h3 className="text-xl font-black mb-3">Regla práctica</h3>
                  <p className="text-gray-700 leading-7">
                    En lugar de preguntarte "¿es bueno mi GPA?" en abstracto, pregunta "¿cumple el
                    requisito mínimo del programa o beca específica que me interesa?". Esa
                    respuesta suele estar publicada directamente en los requisitos oficiales del
                    programa.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Cómo Mejorar tu GPA si Está Por Debajo de tu Objetivo
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Prioriza los cursos con más créditos: tienen mayor peso matemático en tu GPA.",
                    "Repite materias con calificaciones bajas si tu institución permite reemplazo de nota.",
                    "Distribuye tu carga académica evitando semestres sobrecargados que afecten tu rendimiento general.",
                    "Busca apoyo académico temprano en cursos difíciles, en lugar de esperar a estar en riesgo.",
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <div className="font-semibold text-gray-800">✔ {item}</div>
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
                    Calcula tu GPA Exacto en Segundos
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Introduce tus calificaciones y créditos y descubre en qué rango te encuentras.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/calculadora-gpa/" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#111827]">
                      Usar Calculadora GPA
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