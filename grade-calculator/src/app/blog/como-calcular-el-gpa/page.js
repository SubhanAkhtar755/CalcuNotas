import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import BlogSidebar from "@/app/components/BlogSidebar";
import RightSidebar from "@/app/components/RightSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Cómo Calcular el GPA Fácilmente | Guía Completa de GPA",
  description:
    "Aprende cómo calcular el GPA paso a paso con fórmulas, ejemplos, consejos de GPA ponderado, cálculos de GPA semestral y estrategias académicas expertas.",
  keywords: [
    "cómo calcular el GPA",
    "calculadora GPA",
    "GPA universitario",
    "GPA semestral",
    "GPA acumulado",
    "GPA ponderado",
    "fórmula GPA",
    "calcular GPA",
    "promedio de calificaciones",
    "GPA preparatoria",
    "GPA universidad",
    "horas crédito",
    "rendimiento académico",
    "guía GPA",
    "consejos GPA estudiantes",
  ],

  // GAP FIX: robots + openGraph tags add kiye (pehle missing thay)

  openGraph: {
    title: "Cómo Calcular el GPA Fácilmente | Guía Completa de GPA",
    description:
      "Guía completa sobre cómo calcular el GPA: fórmulas, ejemplos y consejos.",
    url: "https://calcunotas.com/blog/como-calcular-el-gpa/",
    type: "article",
  },

  alternates: {
    canonical: "https://calcunotas.com/blog/como-calcular-el-gpa/",
    languages: {
      "es": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-ES": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-MX": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-AR": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-CO": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-CL": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-PE": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-VE": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-EC": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-BO": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-PY": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-UY": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-GT": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-CU": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-DO": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-HN": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-SV": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-NI": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-PA": "https://calcunotas.com/blog/como-calcular-el-gpa/",
      "es-CR": "https://calcunotas.com/blog/como-calcular-el-gpa/",
    },
  },
};

const faqs = [
  {
    question: "¿Qué es el GPA?",
    answer:
      "GPA son las siglas de Grade Point Average (Promedio de Puntos de Calificación). Es una representación numérica del rendimiento académico de un estudiante basada en las calificaciones obtenidas en los cursos.",
  },
  {
    question: "¿Cómo calculo el GPA manualmente?",
    answer:
      "Multiplica los puntos de cada materia por sus horas crédito, suma todos los puntos y divide entre el total de horas crédito.",
  },
  {
    question: "¿Qué es un buen GPA en la universidad?",
    answer:
      "Un GPA superior a 3.0 generalmente se considera bueno, mientras que 3.5 o más se considera excelente para becas y programas competitivos.",
  },
  {
    question: "¿Cuál es la diferencia entre GPA ponderado y no ponderado?",
    answer:
      "El GPA no ponderado usa la escala estándar de 4.0, mientras que el GPA ponderado otorga puntos adicionales por cursos avanzados como AP u Honores.",
  },
  // GAP #8: Advanced calculation questions missing from the current FAQ.
// PASTE: Dentro de "const faqs = [...]" después del último FAQ existente.

{
  question: "¿Cómo calculo mi GPA acumulado de varios semestres?",
  answer:
    "Multiplica el GPA de cada período por los créditos correspondientes para obtener los puntos de calidad de cada semestre. Después suma todos los puntos de calidad y divide entre el total de créditos incluidos.",
},
{
  question: "¿Cómo sé qué GPA necesito para alcanzar una meta?",
  answer:
    "Necesitas conocer tu GPA actual, los créditos ya completados, los créditos futuros y el GPA objetivo. Con esos datos puedes calcular el promedio necesario en los próximos créditos.",
},
{
  question: "¿Existe una conversión universal de porcentaje a GPA?",
  answer:
    "No. Las conversiones entre porcentajes y GPA pueden variar según la institución y la escala utilizada. Para una conversión oficial debes consultar la tabla de tu escuela o universidad.",
},
{
  question: "¿Repetir una materia siempre mejora mi GPA?",
  answer:
    "No necesariamente. El efecto depende de la política de repetición de la institución. Algunas reemplazan la calificación anterior, mientras que otras pueden incluir ambos intentos.",
},
{
  question: "¿Las materias Pass/Fail cuentan para el GPA?",
  answer:
    "Depende de la institución y del curso. Algunas materias Pass/Fail quedan fuera del cálculo numérico del GPA, pero debes comprobar la política académica oficial.",
},
{
  question: "¿Una materia de más créditos afecta más mi GPA?",
  answer:
    "Sí, cuando el GPA se calcula ponderando por créditos. Una materia con más créditos genera más puntos de calidad y, por tanto, tiene mayor peso matemático en el promedio.",
},
{
  question: "¿Por qué mi cálculo de GPA puede ser diferente al del expediente?",
  answer:
    "Puede haber diferencias por cursos excluidos, materias repetidas, reglas de redondeo, créditos transferidos, escalas institucionales u otras políticas académicas.",
},
{
  question: "¿Debo usar una calculadora de GPA para una solicitud oficial?",
  answer:
    "Una calculadora puede servir para comprobar o estimar el resultado, pero cuando una solicitud exige un GPA oficial debes utilizar el valor indicado por tu expediente o las instrucciones de la institución.",
},
  {
    question: "¿El GPA acumulado incluye todos los semestres?",
    answer:
      "Sí, el GPA acumulado combina las calificaciones de todos los semestres y cursos completados a lo largo de tu trayectoria académica.",
  },
  {
    question: "¿Puede el GPA afectar las becas?",
    answer:
      "Sí, muchas becas, subvenciones y programas académicos utilizan el GPA como requisito clave de elegibilidad.",
  },
];

// ────────────────────────────────────────────────────────────
// GAP FIX #1: Is page ka apna JSON-LD pehle inject hi nahi ho raha tha.
// FAQPage + Article + BreadcrumbList yahan add kiya taake jo FAQs
// screen par visible hain wo rich results me bhi eligible hon.
// ────────────────────────────────────────────────────────────
const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo Calcular el GPA Fácilmente",
    description:
      "Guía completa sobre cómo calcular el GPA paso a paso con fórmulas, ejemplos y consejos.",
    image: "https://calcunotas.com/og/como-calcular-el-gpa.jpg",
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
      logo: {
        "@type": "ImageObject",
        url: "https://calcunotas.com/logo.png",
      },
    },
    datePublished: "2024-02-10",
    dateModified: "2026-07-25",
    mainEntityOfPage: "https://calcunotas.com/blog/como-calcular-el-gpa/",
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
        name: "Cómo Calcular el GPA Fácilmente",
        item: "https://calcunotas.com/blog/como-calcular-el-gpa/",
      },
    ],
  },
];

export default function BlogPostPage() {
  return (
    <main className=" min-h-screen bg-[#f5f7fb] text-[#111827]">
      {/* GAP FIX: schema script tag page me pehli baar add hua */}
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
                <span>Inicio / Blog / Cómo Calcular el GPA Fácilmente</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">
                  Calcular GPA
                </span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">
                  Calificador Rápido
                </span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">
                  Calculadora de Notas
                </span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">
                  Calificación en el Aula
                </span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Cómo Calcular el GPA Fácilmente
              </h1>

              {/* GAP FIX: visible author + date byline — E-E-A-T sirf schema me
                  nahi, user ko bhi dikhna chahiye ke content kis ne likha/review kiya */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>
                  Por <strong className="text-gray-700">Equipo CalcuNotas</strong>
                </span>
                <span>•</span>
                <span>Publicado: 10 feb 2024</span>
                <span>•</span>
                <span>Actualizado: 25 jul 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                Aprende cómo calcular el GPA manualmente usando calificaciones, horas crédito,
                sistemas de GPA ponderado, fórmulas de <a href="/nota-semestral/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">GPA semestral</a> y cálculos de GPA acumulado.
                Esta guía detallada explica todo lo que los estudiantes necesitan para mejorar
                el rendimiento académico, calificar para becas y entender cómo funciona el
                Promedio de Puntos en escuelas, colegios y universidades.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">
                  Resumen Rápido
                </h2>
                <p className="text-gray-700 leading-8">
                  El GPA, o Promedio de Puntos de Calificación, es una medida del rendimiento
                  académico calculada usando calificaciones y horas crédito. Las escuelas y
                  universidades usan el GPA para evaluar el éxito estudiantil, elegibilidad
                  para becas, reconocimiento de honores y requisitos de graduación. Entender
                  los cálculos de GPA puede ayudar a los estudiantes a mejorar la planificación
                  académica y tomar decisiones educativas más inteligentes.
                </p>
              </div>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Introducción al GPA
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    El GPA, también conocido como Promedio de Puntos de Calificación, es una
                    de las medidas académicas más importantes usadas por escuelas, colegios,
                    universidades, organizaciones de becas y empleadores. Refleja qué tan bien
                    se desempeña un estudiante en múltiples materias durante un período académico específico.
                  </p>
                  <p>
                    Muchos estudiantes escuchan sobre el GPA constantemente pero no entienden
                    completamente cómo funciona. Algunos creen que el GPA es simplemente un
                    promedio de porcentajes, mientras que otros asumen que todas las escuelas
                    usan el mismo sistema de calificación. En realidad, los sistemas de GPA
                    varían entre instituciones, países y niveles educativos.
                  </p>
                  <p>
                    Ya sea que estés en preparatoria preparándote para la admisión universitaria,
                    en la universidad buscando becas, o simplemente quieras mejorar tu rendimiento
                    académico, aprender a calcular el GPA manualmente es extremadamente valioso.
                  </p>
                  <blockquote className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6 italic text-gray-700">
                    "Los estudiantes que monitorean regularmente su GPA suelen tomar decisiones
                    académicas más inteligentes porque entienden cómo cada curso afecta su
                    rendimiento a largo plazo."
                  </blockquote>
                  <p>
                    Los cálculos de GPA también son esenciales al transferirse de escuela,
                    solicitar pasantías, calificar para programas de honores o mantener el
                    estatus académico.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Por Qué Importa el GPA
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "Las admisiones universitarias suelen evaluar el GPA para medir la consistencia académica.",
                    "Muchas becas requieren un GPA mínimo como requisito.",
                    "Los posgrados analizan el GPA durante el proceso de admisión.",
                    "Las pasantías y empleadores pueden considerar el GPA para puestos de nivel inicial.",
                    "Los honores académicos dependen en gran medida del GPA.",
                    "Algunos programas deportivos exigen estándares mínimos de GPA.",
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="leading-7 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    El GPA importa porque actúa como un resumen rápido del logro académico.
                    Los oficiales de admisiones revisan miles de solicitudes. El GPA les ayuda
                    a identificar estudiantes con rendimiento académico consistente.
                  </p>
                  <p>
                    Un GPA sólido puede abrir puertas a becas, sociedades de honores, programas
                    de liderazgo, oportunidades de investigación y programas de estudio en el extranjero.
                  </p>
                  <p>
                    Sin embargo, el GPA no debe verse como el único indicador de inteligencia o éxito.
                    Habilidades como comunicación, liderazgo, creatividad y disciplina son igualmente
                    valiosas en entornos del mundo real.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Puntos Clave
                  </h2>
                  <ul className="space-y-4 text-gray-700 leading-8">
                    <li>• El GPA se calcula usando puntos de calificación y horas crédito.</li>
                    <li>• El GPA ponderado premia los cursos avanzados o de honores.</li>
                    <li>• El GPA acumulado combina todos los semestres académicos.</li>
                    <li>• Monitorear el GPA regularmente ayuda a mejorar el rendimiento académico.</li>
                    <li>• Diferentes instituciones pueden usar escalas de GPA distintas.</li>
                    <li>• Un GPA sólido apoya becas y oportunidades profesionales.</li>
                  </ul>
                </div>
              </section>

              <section id="formula-gpa" className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Fórmula del GPA Explicada
                </h2>
                <div className="rounded-2xl bg-[#111827] text-white p-7 text-center mb-8">
                  <div className="text-3xl font-black tracking-[-0.03em]">
                    GPA = Total de Puntos de Calificación ÷ Total de Horas Crédito
                  </div>
                </div>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    La fórmula del GPA puede parecer simple, pero entender cómo funciona cada
                    parte es esencial. A cada curso se le asigna un número determinado de horas
                    crédito. Cada calificación corresponde a un valor en puntos basado en la
                    escala de GPA de la institución.
                  </p>
                  <p>
                    Para calcular el GPA, los estudiantes multiplican los <a href="/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">puntos de calificación</a> obtenidos
                    en cada curso por las horas crédito de ese curso. Luego suman todos los puntos
                    y dividen entre el total de horas crédito intentadas.
                  </p>
                  <p>
                    Por ejemplo, obtener una A en un curso de 4 créditos contribuye más positivamente
                    al GPA que obtener una A en un curso de 1 crédito.
                  </p>
                </div>

                <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">Calificación</th>
                        <th className="px-5 py-4 text-left">Puntos GPA</th>
                        <th className="px-5 py-4 text-left">Nivel de Rendimiento</th>
                        <th className="px-5 py-4 text-left">Porcentaje Típico</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["A+", "4.0", "Excelente", "90-100%"],
                        ["A", "4.0", "Sobresaliente", "85-89%"],
                        ["A-", "3.7", "Muy Fuerte", "80-84%"],
                        ["B+", "3.3", "Bueno", "75-79%"],
                        ["B", "3.0", "Por Encima del Promedio", "70-74%"],
                        ["C", "2.0", "Promedio", "60-69%"],
                        ["D", "1.0", "Por Debajo del Promedio", "50-59%"],
                        ["F", "0.0", "Reprobado", "Menos del 50%"],
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
                  Guía Paso a Paso para Calcular el GPA
                </h2>
                <div className="space-y-5">
                  {[
                    { title: "Paso 1: Lista Todos los Cursos", text: "Anota cada curso completado durante el semestre o año académico." },
                    { title: "Paso 2: Identifica las Horas Crédito", text: "Verifica cuántas horas crédito tiene cada curso, ya que afectan el peso en el GPA." },
                    { title: "Paso 3: Convierte las Calificaciones a Puntos", text: "Usa la escala GPA de tu institución para convertir las letras en valores numéricos." },
                    { title: "Paso 4: Multiplica Puntos por Créditos", text: "Calcula los puntos obtenidos en cada curso individualmente." },
                    { title: "Paso 5: Suma el Total de Puntos", text: "Combina todos los puntos obtenidos en cada materia." },
                    { title: "Paso 6: Divide entre el Total de Horas Crédito", text: "Divide el total de puntos entre el total de horas crédito para obtener el GPA final." },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-black mb-2">{item.title}</h3>
                          <p className="text-gray-700 leading-8">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl border border-gray-200 bg-[#f8fafc] p-8">
                  <h3 className="text-2xl font-black tracking-[-0.03em] mb-5">
                    Ejemplo de Cálculo de GPA
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] border-collapse">
                      <thead>
                        <tr className="bg-[#111827] text-white">
                          <th className="px-4 py-4 text-left">Materia</th>
                          <th className="px-4 py-4 text-left">Créditos</th>
                          <th className="px-4 py-4 text-left">Calificación</th>
                          <th className="px-4 py-4 text-left">Puntos GPA</th>
                          <th className="px-4 py-4 text-left">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Matemáticas", "3", "A", "4.0", "12.0"],
                          ["Español", "3", "B+", "3.3", "9.9"],
                          ["Ciencias", "4", "B", "3.0", "12.0"],
                          ["Historia", "2", "A-", "3.7", "7.4"],
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
                    <div className="text-lg font-semibold">Total de Puntos = 41.3</div>
                    <div className="mt-2 text-lg font-semibold">Total de Horas Crédito = 12</div>
                    <div className="mt-4 text-2xl font-black">GPA = 41.3 ÷ 12 = 3.44</div>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  GPA Ponderado vs. No Ponderado
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-gray-200 bg-white p-8">
                    <h3 className="text-2xl font-black mb-4">GPA No Ponderado</h3>
                    <ul className="space-y-3 text-gray-700 leading-8">
                      <li>• Usa la escala estándar de 4.0.</li>
                      <li>• Trata todas las materias por igual.</li>
                      <li>• Más fácil de comparar entre estudiantes.</li>
                      <li>• Común en muchos colegios y escuelas.</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-gray-200 bg-white p-8">
                    <h3 className="text-2xl font-black mb-4">GPA Ponderado</h3>
                    <ul className="space-y-3 text-gray-700 leading-8">
                      <li>• Otorga puntos extra por cursos AP, IB u Honores.</li>
                      <li>• Premia los cursos más desafiantes.</li>
                      <li>• Puede superar la escala estándar de 4.0.</li>
                      <li>• Común en sistemas de preparatoria competitivos.</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Los sistemas de GPA ponderado están diseñados para motivar a los estudiantes
                    a desafiarse académicamente. Los cursos avanzados generalmente requieren más
                    esfuerzo, pensamiento crítico y gestión de carga de trabajo.
                  </p>
                  <p>
                    Sin embargo, los estudiantes no deben sobrecargarse con cursos difíciles
                    únicamente para aumentar el GPA. Mantener un rendimiento sólido mientras
                    se equilibra la carga de trabajo es más importante.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Beneficios de Entender el GPA
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Mejor planificación académica",
                    "Mayores oportunidades de becas",
                    "Solicitudes universitarias más sólidas",
                    "Motivación para un rendimiento constante",
                    "Seguimiento claro del progreso",
                    "Mejor gestión del semestre",
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <div className="mb-3 text-3xl">📘</div>
                      <h3 className="font-bold text-lg text-gray-800">{item}</h3>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Errores Comunes al Calcular el GPA
                  </h2>
                  <div className="space-y-5 text-gray-700 leading-8">
                    <p>
                      Muchos estudiantes cometen errores evitables porque no entienden
                      completamente los sistemas de calificación o el peso de los créditos.
                    </p>
                    <ul className="space-y-3">
                      <li>• Olvidar incluir todas las horas crédito en los cálculos.</li>
                      <li>• Usar valores incorrectos de puntos para las letras de calificación.</li>
                      <li>• Confundir el GPA ponderado con el no ponderado.</li>
                      <li>• Ignorar los cursos reprobados que aún afectan el GPA.</li>
                      <li>• Asumir que todas las escuelas usan la misma escala de GPA.</li>
                      <li>• Calcular el GPA usando porcentajes en lugar de puntos.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Tabla Comparativa de GPA
                </h2>
                <div className="overflow-x-auto rounded-3xl border border-gray-200">
                  <table className="w-full min-w-[850px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">Rango GPA</th>
                        <th className="px-5 py-4 text-left">Nivel Académico</th>
                        <th className="px-5 py-4 text-left">Potencial de Beca</th>
                        <th className="px-5 py-4 text-left">Admisiones Competitivas</th>
                        <th className="px-5 py-4 text-left">Evaluación General</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["3.8 - 4.0", "Excelente", "Muy Alto", "Fuerte", "Rendimiento académico sobresaliente"],
                        ["3.5 - 3.7", "Muy Bueno", "Alto", "Competitivo", "Consistencia académica sólida"],
                        ["3.0 - 3.4", "Bueno", "Moderado", "Promedio", "Posición académica estable"],
                        ["2.5 - 2.9", "Promedio", "Limitado", "Menos Competitivo", "Necesita mejorar"],
                        ["Menos de 2.5", "Por Debajo del Promedio", "Bajo", "Débil", "Se recomienda apoyo académico"],
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
                  Consejos Expertos para Mejorar el GPA
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Mejorar el GPA requiere consistencia, planificación y hábitos de estudio efectivos.
                  </p>
                  <div className="grid gap-5 md:grid-cols-2">
                    {[
                      "Asiste a clases de manera constante y participa activamente.",
                      "Usa agendas para organizar tareas y exámenes.",
                      "Dedica más tiempo a los cursos de mayor crédito.",
                      "Busca apoyo de tutoría temprano cuando tengas dificultades.",
                      "Repasa las notas regularmente en lugar de estudiar todo al final.",
                      "Practica la gestión del tiempo para reducir el estrés.",
                    ].map((item, index) => (
                      <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5">
                        <div className="font-semibold text-gray-800">✔ {item}</div>
                      </div>
                    ))}
                  </div>
                  <p>
                    Identificar las materias débiles temprano es otra estrategia importante.
                    Muchos estudiantes esperan hasta los exámenes finales para buscar ayuda.
                  </p>
                  <p>
                    La mejora académica también requiere equilibrio: el sueño, la salud física
                    y el bienestar mental influyen fuertemente en los resultados académicos.
                  </p>
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-gray-200 bg-[#111827] p-8 text-white">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Estadísticas e Información Académica
                  </h2>
                  <div className="grid gap-5 md:grid-cols-3">
                    {[
                      ["85%", "Estudiantes que monitorean el GPA para becas"],
                      ["3.0+", "Requisito mínimo de GPA más común"],
                      ["4.0", "Escala estándar de GPA no ponderado"],
                    ].map((item, index) => (
                      <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="text-4xl font-black">{item[0]}</div>
                        <div className="mt-2 text-gray-300">{item[1]}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-gray-300 leading-8">
                    Las instituciones educativas de todo el mundo continúan usando el GPA como
                    una forma estandarizada de evaluar el rendimiento académico.
                  </p>
                </div>
              </section>{/* GAP #1: Missing real multi-semester cumulative GPA calculation.
    PASTE: Después de "GPA Semestral vs GPA Acumulado". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    Ejemplo de GPA Acumulado en Varios Semestres
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      El GPA acumulado no se obtiene simplemente promediando los GPA de cada
      semestre. Cuando los semestres tienen diferentes cantidades de créditos,
      cada uno debe aportar según las horas crédito cursadas.
    </p>

    <div className="overflow-x-auto rounded-3xl border border-gray-200">
      <table className="w-full min-w-[700px] border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-5 py-4 text-left">Semestre</th>
            <th className="px-5 py-4 text-left">GPA</th>
            <th className="px-5 py-4 text-left">Créditos</th>
            <th className="px-5 py-4 text-left">Puntos de Calidad</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Semestre 1", "3.20", "15", "48.0"],
            ["Semestre 2", "3.60", "12", "43.2"],
            ["Semestre 3", "3.80", "15", "57.0"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-gray-200 bg-white">
              {row.map((cell, i) => (
                <td key={i} className="px-5 py-4 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="rounded-2xl bg-[#111827] p-6 text-white">
      <div className="text-lg font-semibold">
        Puntos Totales = 48.0 + 43.2 + 57.0 = 148.2
      </div>
      <div className="mt-2 text-lg font-semibold">
        Créditos Totales = 15 + 12 + 15 = 42
      </div>
      <div className="mt-4 text-2xl font-black">
        GPA Acumulado = 148.2 ÷ 42 = 3.53
      </div>
    </div>

    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
      <h3 className="text-xl font-black mb-3">
        La diferencia importante
      </h3>
      <p>
        No sería correcto calcular simplemente (3.20 + 3.60 + 3.80) ÷ 3,
        porque cada semestre tiene una cantidad diferente de créditos. El
        método basado en créditos refleja mejor cuánto contribuyó cada período
        al historial académico.
      </p>
    </div>
  </div>
</section>{/* GAP #2: Missing target-GPA planning calculation.
    PASTE: Después de "Ejemplo de GPA Acumulado en Varios Semestres". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    ¿Qué GPA Necesito para Alcanzar mi GPA Objetivo?
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      Una de las preguntas más útiles para un estudiante es saber qué promedio
      necesita en el próximo semestre para alcanzar un GPA acumulado específico.
      Este cálculo depende del GPA actual, los créditos ya completados y los
      créditos que planeas cursar.
    </p>

    <div className="rounded-2xl bg-[#111827] text-white p-7 text-center">
      <div className="text-xl md:text-2xl font-black tracking-[-0.03em]">
        GPA Necesario = (GPA Objetivo × Créditos Totales Futuros − Puntos Actuales)
        ÷ Créditos Futuros
      </div>
    </div>

    <div className="rounded-3xl border border-gray-200 bg-white p-8">
      <h3 className="text-2xl font-black mb-5">
        Ejemplo: subir de 3.00 a 3.25
      </h3>

      <div className="space-y-4">
        <p>
          Supongamos que tienes un GPA acumulado de <strong>3.00</strong> con
          <strong> 60 créditos</strong> completados y quieres alcanzar
          <strong> 3.25</strong> después de cursar otros <strong>15 créditos</strong>.
        </p>

        <div className="rounded-2xl bg-[#f8fafc] p-6">
          <p className="font-semibold">
            Puntos actuales = 3.00 × 60 = 180
          </p>
          <p className="font-semibold mt-2">
            Puntos necesarios = 3.25 × 75 = 243.75
          </p>
          <p className="font-semibold mt-2">
            Puntos adicionales necesarios = 243.75 − 180 = 63.75
          </p>
          <p className="font-black text-xl mt-4">
            GPA necesario = 63.75 ÷ 15 = 4.25
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
      <h3 className="text-xl font-black mb-3">
        ¿Qué nos dice este resultado?
      </h3>
      <p>
        En una escala máxima de 4.0, un GPA requerido de 4.25 no sería posible
        durante esos 15 créditos. Esto muestra algo importante: cuanto más
        créditos acumulados tienes, más difícil puede ser mover rápidamente tu
        GPA general. Por eso conviene planificar objetivos con suficiente
        anticipación.
      </p>
    </div>
  </div>
</section>{/* GAP #3: Missing warning that GPA-to-percentage conversions are not universal.
    PASTE: Después de "Fórmula del GPA Explicada". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    ¿Cómo Convertir GPA a Porcentaje?
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      No existe una fórmula universal que convierta cualquier GPA en un
      porcentaje exacto. El significado de un GPA depende de la escala utilizada
      por la institución, las reglas de conversión y, en algunos casos, el
      sistema educativo del país.
    </p>

    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "Escala institucional",
          text: "Primero identifica si tu institución utiliza una escala de 4.0, otra escala numérica o un sistema propio."
        },
        {
          title: "Tabla oficial",
          text: "Si necesitas una conversión formal, utiliza la tabla publicada por tu escuela o universidad en lugar de una conversión genérica."
        },
        {
          title: "Uso informativo",
          text: "Las conversiones aproximadas pueden servir para comprender el rendimiento, pero no siempre son válidas para admisiones o documentos oficiales."
        },
      ].map((item, index) => (
        <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-xl font-black mb-3">{item.title}</h3>
          <p className="text-gray-700 leading-7">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
      <h3 className="text-xl font-black mb-3">
        Importante para solicitudes académicas
      </h3>
      <p>
        Si una universidad, beca o agencia solicita una conversión específica,
        sigue sus instrucciones. No sustituyas una conversión oficial por una
        fórmula genérica simplemente porque produce un número más conveniente.
      </p>
    </div>
  </div>
</section>{/* GAP #4: Missing course-repeat / grade-replacement explanation.
    PASTE: Después de "GPA Ponderado vs. No Ponderado". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    ¿Qué Pasa con el GPA Cuando Repites una Materia?
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      Repetir una materia no siempre produce el mismo efecto en el GPA. Algunas
      instituciones reemplazan la calificación anterior, otras mantienen ambas
      calificaciones en el historial y algunas aplican reglas específicas según
      el curso o el programa académico.
    </p>

    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "Reemplazo de calificación",
          text: "En determinadas políticas, la nueva calificación puede sustituir total o parcialmente el efecto de la anterior."
        },
        {
          title: "Ambas calificaciones cuentan",
          text: "Algunas instituciones incluyen los intentos anteriores y nuevos en el cálculo del GPA."
        },
        {
          title: "Reglas específicas",
          text: "Puede haber límites de repetición, cursos excluidos o condiciones especiales que cambian el cálculo."
        },
      ].map((item, index) => (
        <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
            {index + 1}
          </div>
          <h3 className="text-xl font-black mb-3">{item.title}</h3>
          <p className="text-gray-700 leading-7">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
      <h3 className="text-xl font-black mb-3">
        Antes de recalcular
      </h3>
      <p>
        Comprueba la política oficial de repetición de tu institución. Para
        estimar el nuevo GPA correctamente necesitas saber si la calificación
        anterior permanece, se reemplaza o se calcula de otra manera.
      </p>
    </div>
  </div>
</section>{/* GAP #5: Missing transcript-status edge cases.
    PASTE: Después de "¿Qué Pasa con el GPA Cuando Repites una Materia?". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    ¿Las Materias Pass/Fail, Withdrawals e Incomplete Afectan el GPA?
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      No todas las materias aparecen en el GPA de la misma manera. Algunos
      cursos utilizan estados como aprobado/reprobado, retiro o calificación
      incompleta. El tratamiento exacto depende de la política académica.
    </p>

    <div className="grid gap-5 md:grid-cols-3">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-xl font-black mb-3">
          Pass / Fail
        </h3>
        <p className="leading-7">
          Un curso aprobado/reprobado puede estar excluido del cálculo numérico
          del GPA en algunas instituciones, pero no debes asumirlo sin revisar
          las reglas oficiales.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-xl font-black mb-3">
          Withdrawal
        </h3>
        <p className="leading-7">
          Un retiro puede aparecer en el expediente sin comportarse como una
          calificación tradicional. Su efecto académico depende de cuándo y
          cómo se realizó el retiro.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-xl font-black mb-3">
          Incomplete
        </h3>
        <p className="leading-7">
          Una calificación incompleta puede tener reglas temporales o convertirse
          posteriormente en una calificación definitiva.
        </p>
      </div>
    </div>

    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
      <h3 className="text-xl font-black mb-3">
        Regla práctica
      </h3>
      <p>
        Si una materia aparece en tu expediente con una letra o estado especial,
        no la introduzcas automáticamente como A, B, C o F en una calculadora
        genérica. Primero confirma cómo la institución la incluye en el GPA.
      </p>
    </div>
  </div>
</section>{/* GAP #6: Missing numerical demonstration of credit-hour impact.
    PASTE: Después de "Cómo las Horas Crédito Afectan el GPA". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    Ejemplo: Una Misma Calificación con Diferentes Créditos
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      Para entender realmente el peso de los créditos, compara dos materias
      con la misma calificación pero diferente cantidad de horas crédito.
    </p>

    <div className="overflow-x-auto rounded-3xl border border-gray-200">
      <table className="w-full min-w-[650px] border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-5 py-4 text-left">Materia</th>
            <th className="px-5 py-4 text-left">Créditos</th>
            <th className="px-5 py-4 text-left">Calificación</th>
            <th className="px-5 py-4 text-left">Puntos GPA</th>
            <th className="px-5 py-4 text-left">Puntos de Calidad</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Curso A", "1", "B", "3.0", "3.0"],
            ["Curso B", "4", "B", "3.0", "12.0"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-gray-200 bg-white">
              {row.map((cell, i) => (
                <td key={i} className="px-5 py-4 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-xl font-black mb-3">
          Curso de 1 crédito
        </h3>
        <p className="leading-7">
          La calificación B aporta 3 puntos de calidad porque el curso tiene
          una sola hora crédito.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-xl font-black mb-3">
          Curso de 4 créditos
        </h3>
        <p className="leading-7">
          La misma B aporta 12 puntos de calidad porque 3.0 × 4 créditos = 12.
          Por eso tiene cuatro veces más peso matemático en el cálculo.
        </p>
      </div>
    </div>

    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <p className="text-gray-700 leading-8">
        <strong>Conclusión:</strong> una materia con más créditos no tiene una
        calificación “más importante”, pero sí tiene un mayor peso matemático
        dentro del promedio ponderado por créditos.
      </p>
    </div>
  </div>
</section>{/* GAP #7: Missing pre-submission GPA verification checklist.
    PASTE: Antes de "Preguntas Frecuentes". */}
    {/* GAP #9: Missing original scenario-planning framework.
    PASTE: Después de "Herramientas para Calcular el GPA Más Rápido". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    Planifica tu GPA en Lugar de Solo Calcularlo
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      Calcular el GPA muestra dónde estás ahora. Planificarlo te ayuda a decidir
      qué necesitas hacer después. Esta diferencia es especialmente útil cuando
      tienes una meta concreta de beca, admisión o rendimiento académico.
    </p>

    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "1. Define el objetivo",
          text: "Establece un GPA concreto, por ejemplo 3.25, 3.50 o el mínimo indicado por un programa."
        },
        {
          title: "2. Calcula tu punto de partida",
          text: "Utiliza tu GPA actual junto con el número de créditos que ya has completado."
        },
        {
          title: "3. Mide la distancia",
          text: "Determina cuánto debe cambiar tu promedio y cuántos créditos todavía puedes utilizar para hacerlo."
        },
        {
          title: "4. Simula escenarios",
          text: "Compara qué ocurre si obtienes principalmente A, una combinación de A y B, o resultados inferiores."
        },
        {
          title: "5. Prioriza por créditos",
          text: "Recuerda que las materias con más créditos pueden producir un efecto mayor sobre el GPA."
        },
        {
          title: "6. Revisa cada semestre",
          text: "Actualiza el cálculo después de cada período para saber si todavía estás encaminado hacia tu objetivo."
        },
      ].map((item) => (
        <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-xl font-black mb-3">{item.title}</h3>
          <p className="text-gray-700 leading-7">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
      <h3 className="text-2xl font-black mb-4">
        Consejo de planificación
      </h3>
      <p>
        Si tu GPA objetivo requiere un promedio superior al máximo disponible
        en tu escala, no significa que el cálculo esté mal. Significa que la
        meta puede no ser alcanzable dentro del número de créditos restantes.
        En ese caso, conviene establecer una meta progresiva y revisar otras
        formas de fortalecer tu expediente académico.
      </p>
    </div>
  </div>
</section>{/* GAP #10: Missing regional/institutional GPA context.
    PASTE: Después de "Tabla Comparativa de GPA". */}
<section className="mb-14">
  <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
    El GPA Puede Interpretarse de Forma Diferente Según la Institución
  </h2>

  <div className="space-y-6 text-[17px] leading-8 text-gray-700">
    <p>
      Un GPA no debe interpretarse fuera de su contexto académico. La escala,
      los cursos incluidos, los créditos y las políticas de la institución
      pueden cambiar el significado del resultado.
    </p>

    <div className="overflow-x-auto rounded-3xl border border-gray-200">
      <table className="w-full min-w-[800px] border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-5 py-4 text-left">Contexto</th>
            <th className="px-5 py-4 text-left">Qué Debes Comprobar</th>
            <th className="px-5 py-4 text-left">Por Qué Importa</th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Preparatoria / Escuela",
              "Escala utilizada y cursos ponderados",
              "Los cursos avanzados pueden tener reglas de ponderación diferentes."
            ],
            [
              "Universidad",
              "Escala institucional y horas crédito",
              "El GPA suele calcularse ponderando los cursos por créditos."
            ],
            [
              "Transferencia",
              "Política de créditos transferidos",
              "No todas las instituciones tratan las calificaciones transferidas de la misma manera."
            ],
            [
              "Beca o admisión",
              "Requisitos oficiales del programa",
              "El mínimo de GPA puede variar según el programa y el año académico."
            ],
          ].map((row, index) => (
            <tr key={index} className="border-b border-gray-200 bg-white">
              {row.map((cell, i) => (
                <td key={i} className="px-5 py-4 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
      <h3 className="text-xl font-black mb-3">
        Regla de oro
      </h3>
      <p>
        Si una universidad, beca o programa proporciona su propia definición de
        GPA, esa información tiene prioridad sobre cualquier tabla general de
        Internet.
      </p>
    </div>
  </div>
</section>
<section className="mb-14">
  <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
    <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
      Lista de Verificación Antes de Confiar en tu Cálculo de GPA
    </h2>

    <p className="text-[17px] leading-8 text-gray-700 mb-6">
      Antes de utilizar un GPA para una solicitud, beca o decisión académica,
      comprueba estos puntos:
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      {[
        "Confirmé la escala de GPA utilizada por mi institución.",
        "Introduje las horas crédito correctas de cada curso.",
        "Convertí las letras a los puntos GPA oficiales.",
        "Comprobé si alguna materia repetida tiene reglas especiales.",
        "Verifiqué si cursos Pass/Fail, Withdrawals o Incomplete cuentan.",
        "No mezclé porcentajes directamente con puntos GPA.",
        "Revisé si existe una regla específica de redondeo.",
        "Comparé el resultado con mi expediente académico oficial cuando sea necesario.",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
            ✓
          </div>
          <span className="font-medium text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>

              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Perspectivas Avanzadas sobre el GPA
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    La planificación académica avanzada implica más que simplemente obtener
                    buenas calificaciones. La selección estratégica de cursos, el equilibrio
                    de la carga de trabajo y entender las políticas de calificación institucionales
                    afectan los resultados del GPA.
                  </p>
                  <p>
                    Los estudiantes que buscan programas competitivos como medicina, ingeniería,
                    derecho o investigación de posgrado suelen necesitar un GPA más sólido.
                  </p>
                  <p>
                    Algunas universidades también calculan el "GPA de especialidad", que solo
                    incluye cursos directamente relacionados con el campo de estudio del estudiante.
                  </p>
                  <div className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-6">
                    <h3 className="text-2xl font-black mb-4">Casos de Uso en el Mundo Real</h3>
                    <ul className="space-y-3">
                      <li>• Comités de becas que evalúan la excelencia académica.</li>
                      <li>• Reclutadores de pasantías que filtran solicitudes de estudiantes.</li>
                      <li>• Posgrados que evalúan la elegibilidad de admisión.</li>
                      <li>• Asesores académicos que monitorean el progreso estudiantil.</li>
                      <li>• Estudiantes que planifican la carga de materias del semestre.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Lista de Verificación para el Éxito en el GPA
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      "Monitorear el GPA después de cada semestre",
                      "Entender la escala de calificación de tu institución",
                      "Revisar cuidadosamente las horas crédito",
                      "Priorizar los cursos de mayor impacto",
                      "Buscar apoyo académico cuando sea necesario",
                      "Mantener hábitos de estudio consistentes",
                      "Usar calculadoras de GPA para verificación",
                      "Monitorear el progreso del GPA acumulado",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">✓</div>
                        <span className="font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="preguntas-frecuentes" className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-8">
                  Preguntas Frecuentes
                </h2>
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
              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  GPA Semestral vs GPA Acumulado
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-gray-200 bg-white p-8">
                    <h3 className="text-2xl font-black mb-4">
                      GPA Semestral
                    </h3>
                    <p className="text-gray-700 leading-8">
                      El GPA semestral mide el rendimiento académico durante un único
                      semestre. Solo incluye los cursos completados en ese período
                      específico.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-white p-8">
                    <h3 className="text-2xl font-black mb-4">
                      GPA Acumulado
                    </h3>
                    <p className="text-gray-700 leading-8">
                      El GPA acumulado combina todos los cursos completados a lo largo
                      de varios semestres y proporciona una visión más completa del
                      rendimiento académico general.
                    </p>
                  </div>
                </div>
              </section><section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Cómo las Horas Crédito Afectan el GPA
                </h2>

                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    No todas las materias tienen el mismo impacto en el GPA.
                    Los cursos con más horas crédito influyen más en el promedio final.
                  </p>

                  <p>
                    Por ejemplo, una calificación baja en una materia de 5 créditos
                    puede afectar más el GPA que una calificación baja en una materia
                    de 1 crédito.
                  </p>

                  <p>
                    Comprender el peso de las horas crédito ayuda a los estudiantes
                    a planificar mejor su carga académica.
                  </p>
                </div>
              </section><section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  GPA Requerido para Becas
                </h2>

                <div className="overflow-x-auto rounded-3xl border border-gray-200">
                  <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">GPA</th>
                        <th className="px-5 py-4 text-left">Elegibilidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["3.8 - 4.0", "Excelente para becas competitivas"],
                        ["3.5 - 3.7", "Fuerte para muchas becas"],
                        ["3.0 - 3.4", "Elegible para algunas ayudas"],
                        ["Menos de 3.0", "Opciones más limitadas"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          {row.map((cell, i) => (
                            <td key={i} className="px-5 py-4">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section><section className="mb-14">
                <div className="rounded-3xl border border-purple-200 bg-purple-50 p-8">
                  <h2 className="text-3xl font-black tracking-[-0.03em] mb-5">
                    Factores que Pueden Reducir tu GPA
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Faltar frecuentemente a clases.</li>
                    <li>• Entregar tareas fuera de plazo.</li>
                    <li>• Reprobar cursos obligatorios.</li>
                    <li>• Mala gestión del tiempo.</li>
                    <li>• Sobrecargar el horario académico.</li>
                    <li>• No buscar ayuda cuando aparecen dificultades.</li>
                  </ul>
                </div>
              </section><section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Herramientas para Calcular el GPA Más Rápido
                </h2>

                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Aunque es importante entender la fórmula manual, muchos estudiantes
                    utilizan calculadoras GPA para ahorrar tiempo y evitar errores.
                  </p>

                  <p>
                    Estas herramientas permiten ingresar calificaciones, créditos y
                    cursos para obtener resultados instantáneos.
                  </p>

                  <p>
                    Las calculadoras GPA también son útiles para planificar escenarios
                    futuros y estimar el GPA necesario para alcanzar objetivos académicos.
                  </p>
                </div>
              </section><section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Preguntas que los Estudiantes Hacen Sobre el GPA
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "¿Qué GPA necesito para una beca?",
                    "¿Cómo aumentar mi GPA rápidamente?",
                    "¿Un curso reprobado afecta el GPA?",
                    "¿Cuál es un GPA universitario competitivo?",
                    "¿Las materias AP mejoran el GPA?",
                    "¿Cómo calcular el GPA acumulado?",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-white p-6"
                    >
                      <p className="font-semibold text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Reflexiones Finales
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Entender cómo calcular el GPA es una habilidad académica esencial para
                    estudiantes en todos los niveles educativos.
                  </p>
                  <p>
                    Al aprender la fórmula del GPA, entender los sistemas ponderados y no
                    ponderados, y hacer seguimiento del progreso académico, los estudiantes
                    pueden tomar decisiones más informadas y mejorar su rendimiento con el tiempo.
                  </p>
                  <p>
                    El éxito académico no se logra con atajos. Proviene del esfuerzo constante,
                    hábitos de estudio efectivos y planificación inteligente.
                  </p>
                </div>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 text-white">
                <div className="max-w-3xl">
                  <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                    El Crecimiento Académico Comienza Aquí
                  </div>
                  <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] leading-tight">
                    Calcula tu GPA con Mayor Precisión y Planifica de Forma Inteligente
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Usa herramientas de GPA, estrategias de planificación académica y métodos
                    de seguimiento semestral para mejorar tu rendimiento educativo.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/calculadora-gpa/" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#111827]">
                      Usar Calculadora GPA
                    </a>
                    <a href="#" className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur">
                      Explorar Más Guías
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