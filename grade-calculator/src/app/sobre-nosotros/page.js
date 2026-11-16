import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";
import { FaEnvelope, FaGlobe, FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Sobre Nosotros | CalcuNotas",
  description:
    "Conoce CalcuNotas, un sitio web gratuito de calculadoras educativas para calcular notas, GPA, nota final, nota semestral, calificación de exámenes y herramientas de calificación rápida. Fundado en 2024 por Subhan Akhtar.",
  keywords: [
    "sobre calcunotas",
    "sitio web calculadora de notas",
    "calculadora de notas gratis",
    "herramienta calculadora gpa",
    "calculadora nota final",
    "calculadora nota semestral",
    "calificador rapido",
    "herramientas de notas para estudiantes",
    "calculadora de calificacion para profesores",
    "calculadoras educativas",
  ],

  openGraph: {
    title: "Sobre Nosotros | CalcuNotas",
    description:
      "Conoce CalcuNotas, un sitio web gratuito de calculadoras educativas para notas, GPA y exámenes. Fundado por Subhan Akhtar.",
    url: "https://calcunotas.com/sobre-nosotros/",
    type: "website",
  },

  alternates: {
    canonical: "https://calcunotas.com/sobre-nosotros/",
  },
};

// ────────────────────────────────────────────────────────────
// E-E-A-T: AboutPage + Organization + Person (founder) + BreadcrumbList
// Person schema is what was missing vs. the InvisibleMsg pattern —
// ties the site to a real, named, verifiable individual.
// ────────────────────────────────────────────────────────────
const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Sobre Nosotros | CalcuNotas",
    url: "https://calcunotas.com/sobre-nosotros/",
    description:
      "CalcuNotas es un sitio web gratuito de calculadoras educativas para calcular notas, GPA, nota final, nota semestral y calificación de exámenes.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Subhan Akhtar",
    url: "https://calcunotas.com/sobre-nosotros/",
    worksFor: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },
    jobTitle: "Fundador y Desarrollador",
    sameAs: [
      "https://www.linkedin.com/in/subhan-akhtar-109246329/",
      "https://github.com/SubhanAkhtar755",
    ],
    knowsAbout: [
      "Cálculo de notas",
      "GPA",
      "Promedios ponderados",
      "Desarrollo web",
      "Herramientas educativas",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CalcuNotas",
    url: "https://calcunotas.com",
    logo: "https://calcunotas.com/logo.png",
    description:
      "Sitio web gratuito de calculadoras educativas para estudiantes, profesores y padres: notas, GPA, nota final y calificación rápida.",
    email: "info@calcunotas.com",
    founder: {
      "@type": "Person",
      name: "Subhan Akhtar",
    },
    author: {
      "@type": "Person",
      name: "Subhan Akhtar",
      url: "https://calcunotas.com/sobre-nosotros/",
    },
    sameAs: [
      "https://www.linkedin.com/in/subhan-akhtar-109246329/",
      "https://github.com/SubhanAkhtar755",
    ],
    knowsAbout: [
      "Cálculo de notas",
      "GPA",
      "Nota final",
      "Nota semestral",
      "Calificación de exámenes",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      { "@type": "ListItem", position: 2, name: "Sobre Nosotros", item: "https://calcunotas.com/sobre-nosotros/" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b px-8 from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">
          <div className="text-sm text-gray-500 mb-3">
            Inicio / Sobre Nosotros
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Sobre CalcuNotas
          </h1>

          <p className="max-w-[840px] text-gray-600 leading-8 text-[16px] md:text-[17px]">
            CalcuNotas es un sitio web gratuito de calculadoras educativas creado para
            ayudar a estudiantes, profesores, padres y <a href="/calculadora-de-notas/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">educadores a calcular notas</a>,
            GPA, puntajes de exámenes, resultados de examen final, notas semestrales y
            promedios ponderados de forma rápida y clara.
          </p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12 px-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

          {/* MAIN CONTENT */}
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-7 md:p-9">

            {/* INTRO */}
            <section className="mb-10">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                  Calculadoras de Notas Simples para el Uso Académico Diario
                </h2>

                <p className="text-gray-700 leading-8">
                  Nuestro objetivo es facilitar el cálculo de notas para todos.
                  Ya sea que necesites calcular la nota actual de una materia, estimar
                  el puntaje necesario en el examen final, consultar el GPA semestral, crear
                  una tabla de calificación para profesores o entender las notas ponderadas,
                  CalcuNotas ofrece herramientas simples que ahorran tiempo y
                  reducen errores de cálculo manual.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Nos enfocamos en fórmulas claras, ejemplos prácticos, explicaciones
                  amigables para estudiantes y calculadoras rápidas que funcionan para
                  situaciones comunes de calificación en escuelas, colegios y universidades.
                </p>
              </div>
            </section>

            {/* ══════════════════════════════════════════════════
                FOUNDER SECTION — E-E-A-T (Experience)
                Real named person, matches InvisibleMsg pattern
            ══════════════════════════════════════════════════ */}
            <section className="mb-10 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Detrás de CalcuNotas
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <FaUser className="text-white text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-0.5">
                    Subhan Akhtar
                  </p>
                  <p className="text-xs text-blue-600 font-semibold mb-3">
                    Fundador de CalcuNotas
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    CalcuNotas nació de un problema simple: calcular notas ponderadas,
                    GPA o la nota necesaria en un examen final manualmente es lento y
                    fácil de hacer mal, y la mayoría de calculadoras existentes solo
                    trabajaban con la escala 0-100 o A-F, sin cubrir las escalas usadas
                    en España, México y el resto de Latinoamérica.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Ese problema se convirtió en un proyecto: construir calculadoras
                    claras, gratuitas y sin registro, que expliquen la fórmula detrás
                    de cada resultado en lugar de mostrar solo un número.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Cada calculadora y guía publicada en CalcuNotas se revisa
                    manualmente para comprobar que las fórmulas sean correctas antes
                    de publicarse.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <a
                      href="mailto:info@calcunotas.com"
                      className="inline-flex items-center gap-2 text-xs text-blue-600 hover:underline"
                    >
                      <FaEnvelope /> info@calcunotas.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/subhan-akhtar-109246329/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-blue-700 hover:underline"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                    <a
                      href="https://github.com/SubhanAkhtar755"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-gray-800 hover:underline"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* WHY THIS SITE EXISTS */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Por Qué Existe Este Sitio
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                El cálculo de notas puede ser confuso cuando las tareas tienen
                diferentes pesos, los exámenes cuentan más que las tareas, o las
                instituciones usan escalas de calificación distintas. Muchos estudiantes
                conocen sus puntajes pero aún tienen dificultades para entender qué
                significan para su nota final.
              </p>

              <p className="text-gray-700 leading-8">
                CalcuNotas fue creado para resolver ese problema. Nuestras herramientas
                convierten las fórmulas de notas en calculadoras fáciles, para que los
                usuarios puedan ingresar sus números y entender el resultado sin hacer
                cada cálculo a mano.
              </p>
            </section>

            {/* WHAT WE PROVIDE */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Qué Ofrecemos
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                CalcuNotas ofrece calculadoras académicas gratuitas en línea y
                recursos educativos para necesidades comunes de calificación.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Calculadora de Notas</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Calcula las notas actuales de la materia usando porcentajes, puntos,
                    calificaciones de letras y categorías ponderadas.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Calculadora GPA</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Estima el GPA semestral, GPA acumulado, GPA ponderado y
                    resultados de GPA basados en créditos.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Calculadora de Nota Final</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Encuentra el puntaje necesario en el examen final para alcanzar
                    la nota objetivo en la materia.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Calificador Rápido</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Genera tablas de calificación para profesores con respuestas correctas,
                    incorrectas, porcentajes y calificaciones de letras.
                  </p>
                </div>
              </div>
            </section>

            {/* E-E-A-T — CALCULATION REVIEW AND QUALITY CONTROL */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Cómo Revisamos la Precisión de las Calculadoras
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                La precisión es una parte fundamental del desarrollo de CalcuNotas. Antes
                de publicar o modificar una calculadora, comprobamos que las fórmulas,
                entradas y resultados sean coherentes con el método matemático que la
                herramienta pretende representar.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Revisión de Fórmulas
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Revisamos las operaciones utilizadas para porcentajes, promedios
                    ponderados, GPA, notas objetivo y conversiones de puntuaciones para
                    comprobar que correspondan al propósito de cada calculadora.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Pruebas con Ejemplos
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Probamos las herramientas con diferentes combinaciones de valores,
                    incluyendo resultados sencillos y casos en los que los pesos o
                    puntuaciones cambian.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Validación de Entradas
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Las calculadoras deben manejar correctamente valores incompletos,
                    límites numéricos y diferentes combinaciones de datos para reducir
                    resultados inesperados.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Revisión Después de Cambios
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Cuando una herramienta recibe cambios importantes, volvemos a comprobar
                    sus cálculos y comportamiento para reducir el riesgo de introducir
                    errores durante una actualización.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-8 mt-5">
                Estas comprobaciones ayudan a mejorar la confiabilidad de las herramientas,
                pero no convierten los resultados en registros académicos oficiales. Las
                políticas de calificación de cada institución siempre tienen prioridad.
              </p>
            </section>

            {/* E-E-A-T — EDITORIAL STANDARDS */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Nuestros Estándares de Contenido
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                El contenido educativo de CalcuNotas busca explicar los cálculos de forma
                práctica, clara y verificable. No queremos publicar páginas que simplemente
                repitan una fórmula; nuestro objetivo es explicar cuándo utilizarla, qué
                datos necesitas y cómo interpretar el resultado.
              </p>

              <ul className="space-y-3 text-gray-700 leading-8">
                <li>
                  • <strong>Claridad:</strong> explicamos los términos y pasos importantes
                  con lenguaje sencillo.
                </li>
                <li>
                  • <strong>Transparencia:</strong> indicamos cuándo un resultado depende
                  de una escala o política específica.
                </li>
                <li>
                  • <strong>Utilidad práctica:</strong> utilizamos ejemplos y situaciones
                  comunes para mostrar cómo funcionan los cálculos.
                </li>
                <li>
                  • <strong>Precisión matemática:</strong> las fórmulas deben ser coherentes
                  con el tipo de cálculo que realiza cada herramienta.
                </li>
                <li>
                  • <strong>Actualización:</strong> revisamos el contenido cuando una
                  herramienta, fórmula, explicación o política descrita necesita cambios.
                </li>
                <li>
                  • <strong>Independencia:</strong> el contenido no pretende representar
                  las políticas oficiales de una escuela, universidad o sistema educativo
                  específico.
                </li>
              </ul>
            </section>

            {/* E-E-A-T — CONTENT AND TOOL UPDATE POLICY */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Cómo Mantenemos Actualizado CalcuNotas
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                Las herramientas educativas deben mantenerse claras y funcionales a medida
                que cambian las necesidades de los usuarios. Por eso revisamos periódicamente
                nuestras calculadoras, explicaciones y páginas informativas.
              </p>

              <p className="text-gray-700 leading-8 mb-4">
                Las actualizaciones pueden incluir correcciones de errores, mejoras de
                funcionamiento, cambios en la explicación de una fórmula, nuevos ejemplos,
                mejoras de accesibilidad o ajustes de contenido cuando una explicación
                anterior puede resultar confusa.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qué buscamos con cada actualización
                </h3>

                <ul className="space-y-3 text-gray-700 leading-7">
                  <li>• Mantener las fórmulas y cálculos coherentes.</li>
                  <li>• Hacer las instrucciones más fáciles de seguir.</li>
                  <li>• Corregir errores técnicos o de contenido cuando se detecten.</li>
                  <li>• Añadir ejemplos que ayuden a comprender los resultados.</li>
                  <li>• Mantener una experiencia rápida y clara en dispositivos móviles.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-8 mt-5">
                Cuando una institución utiliza una política de calificación diferente,
                recomendamos comprobar siempre sus reglas oficiales antes de tomar una
                decisión académica basada en una estimación.
              </p>
            </section>

            {/* E-E-A-T — CORRECTIONS AND ERROR REPORTING */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Correcciones y Reporte de Errores
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                Aunque probamos nuestras herramientas, ningún sitio web está completamente
                libre de errores. Si encuentras un resultado inesperado, una explicación
                confusa, un enlace roto o un problema técnico, agradecemos que nos lo
                informes.
              </p>

              <p className="text-gray-700 leading-8 mb-5">
                Cuando recibimos un reporte útil, podemos revisar la fórmula, los datos de
                entrada, el comportamiento de la calculadora o el contenido relacionado.
                Si confirmamos un problema, trabajamos para corregirlo y mejorar la
                explicación para evitar confusiones similares en el futuro.
              </p>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Encontraste un problema?
                </h3>

                <p className="text-gray-700 leading-7 mb-4">
                  Indica qué calculadora estabas utilizando, los valores que introdujiste,
                  el resultado obtenido y qué resultado esperabas. Esta información nos
                  ayuda a reproducir el problema y revisarlo con mayor precisión.
                </p>

                <a
                  href="/contacto/"
                  className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  Reportar un Problema →
                </a>
              </div>
            </section>

            {/* E-E-A-T — FORMULA AND METHODOLOGY TRANSPARENCY */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Transparencia de Fórmulas y Métodos
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                CalcuNotas utiliza métodos matemáticos comunes para convertir puntuaciones,
                porcentajes, pesos y créditos en resultados académicos estimados. Siempre
                que sea útil, nuestras páginas explican la fórmula utilizada para que el
                usuario pueda comprobar cómo se obtiene el resultado.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Porcentajes
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Los cálculos de porcentaje normalmente comparan los puntos obtenidos
                    con los puntos posibles para determinar el porcentaje de rendimiento.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Promedios Ponderados
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Las categorías se combinan teniendo en cuenta el peso asignado a cada
                    una, de modo que una evaluación con mayor peso tenga mayor influencia.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    GPA
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Los cálculos de GPA pueden utilizar puntos de calificación y créditos,
                    pero la escala exacta debe coincidir con las reglas de la institución.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Nota Objetivo
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Las calculadoras de nota final utilizan la nota actual, el peso
                    restante y la nota objetivo para estimar el resultado necesario.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-8 mt-5">
                Una fórmula matemática puede ser correcta y aun así producir un resultado
                diferente al de una institución si esta utiliza redondeos, curvas,
                créditos extra, categorías especiales o una escala personalizada. Por
                eso explicamos también las limitaciones cuando son relevantes.
              </p>
            </section>

            {/* TRUST — INDEPENDENCE AND LIMITATIONS */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Qué Es y Qué No Es CalcuNotas
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    CalcuNotas Es
                  </h3>

                  <ul className="space-y-3 text-gray-700 leading-7">
                    <li>• Una colección de herramientas educativas gratuitas.</li>
                    <li>• Un recurso para estimar notas, porcentajes y GPA.</li>
                    <li>• Una ayuda para comprender fórmulas de calificación.</li>
                    <li>• Un recurso de apoyo para estudiantes y profesores.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    CalcuNotas No Es
                  </h3>

                  <ul className="space-y-3 text-gray-700 leading-7">
                    <li>• Un sistema oficial de registros académicos.</li>
                    <li>• Una universidad, escuela o autoridad educativa.</li>
                    <li>• Un sustituto de las políticas de calificación institucionales.</li>
                    <li>• Una fuente que puede modificar o confirmar tus notas oficiales.</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-8 mt-5">
                Las instituciones educativas pueden utilizar escalas, políticas y reglas
                diferentes. Cuando exista una diferencia entre una estimación de CalcuNotas
                y el sistema oficial de tu institución, la información institucional debe
                considerarse la fuente de referencia.
              </p>
            </section>

            {/* E-E-A-T — TRUST AND TRANSPARENCY SUMMARY */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Nuestro Compromiso con la Transparencia
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Queremos que los usuarios sepan no solo qué calcula CalcuNotas, sino también
                cuáles son los límites de sus resultados. Por eso procuramos explicar las
                fórmulas, indicar cuándo las reglas pueden variar y ofrecer una forma directa
                de reportar errores o solicitar mejoras.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Fórmulas Explicadas
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Siempre que sea relevante, explicamos cómo se obtiene un resultado y qué
                    valores necesita la calculadora.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Límites Claros
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    No presentamos las estimaciones como sustituto de las notas o registros
                    oficiales de una institución educativa.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Correcciones
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Los usuarios pueden informar errores o resultados inesperados para que
                    podamos revisarlos.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">
                    Comunicación Directa
                  </h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Mantenemos un canal de contacto para preguntas, sugerencias y problemas
                    relacionados con nuestras herramientas.
                  </p>
                </div>
              </div>
            </section>

            {/* MISSION */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Nuestra Misión
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                Nuestra misión es hacer que los cálculos académicos sean simples, precisos
                y fáciles de entender. Queremos que los estudiantes se sientan más seguros
                sobre sus notas y que los profesores ahorren tiempo al calcular puntajes.
              </p>

              <p className="text-gray-700 leading-8">
                Creemos que las calculadoras de notas no deben ser complicadas. Una buena
                calculadora debe explicar el resultado, mostrar la fórmula y ayudar
                a los usuarios a tomar mejores decisiones académicas.
              </p>
            </section>

            {/* WHO USES */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                ¿Quién Usa CalcuNotas?
              </h2>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Estudiantes</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Los estudiantes usan nuestras herramientas para estimar notas, calcular
                    el GPA, planificar objetivos de examen final y hacer seguimiento del
                    progreso académico.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Profesores</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Los profesores usan tablas de calificación y calculadoras para calificar
                    cuestionarios, tareas, exámenes y pruebas de clase de forma más eficiente.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Padres</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Los padres usan nuestras calculadoras para entender el progreso del
                    estudiante, notas finales, resultados de GPA y necesidades de
                    planificación académica.
                  </p>
                </div>
              </div>
            </section>

            {/* METHODOLOGY */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Nuestra Metodología de Cálculo
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                Nuestras calculadoras usan fórmulas educativas comunes para notas, GPA,
                promedios ponderados, puntajes de examen final y resultados en porcentaje.
                Diseñamos cada herramienta para que sea clara, transparente y fácil de verificar.
              </p>

              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• Fórmulas de porcentaje de notas para exámenes y tareas.</li>
                <li>• Fórmulas de promedio ponderado para el cálculo de la nota del curso.</li>
                <li>• Fórmulas de GPA usando puntos de calificación y créditos.</li>
                <li>• Fórmulas de examen final usando nota actual, nota objetivo y peso del examen.</li>
                <li>• Tablas de calificación rápida basadas en total de preguntas y respuestas correctas.</li>
              </ul>

              <p className="text-gray-700 leading-8 mt-4">
                Dado que las políticas de calificación pueden variar según la institución,
                profesor, país o distrito, nuestros resultados deben tratarse como
                estimaciones útiles y no como registros académicos oficiales.
              </p>
            </section>

            {/* WHAT MAKES US DIFFERENT */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Qué Nos Hace Diferentes
              </h2>

              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• Calculadoras gratuitas creadas para estudiantes, profesores y educadores.</li>
                <li>• Diseños simples fáciles de usar en escritorio y móvil.</li>
                <li>• Fórmulas claras para que los usuarios entiendan cómo se calculan los resultados.</li>
                <li>• Explicaciones amigables en lugar de resultados solo con fórmulas matemáticas.</li>
                <li>• Herramientas para notas actuales, notas finales, GPA, notas semestrales y puntajes de exámenes.</li>
                <li>• Contenido útil que explica errores comunes de calificación y consejos de planificación académica.</li>
              </ul>
            </section>

            {/* RESPONSIBLE USE */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Uso Responsable de Nuestras Calculadoras
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                CalcuNotas está diseñado para apoyar el aprendizaje y la planificación,
                pero los resultados de la calculadora no deben reemplazar los libros de
                notas oficiales, expedientes, políticas institucionales, instrucciones del
                profesor ni orientación del asesor académico.
              </p>

              <p className="text-gray-700 leading-8">
                Si una nota, GPA, requisito de beca, estado de graduación o decisión
                académica es importante, siempre confirma el resultado con tu profesor,
                escuela, colegio, universidad o sistema académico oficial.
              </p>
            </section>

            {/* PRIVACY */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Privacidad y Experiencia de Usuario
              </h2>

              <p className="text-gray-700 leading-8">
                Nuestras calculadoras están diseñadas para ser simples y rápidas. Los usuarios
                pueden calcular notas y GPA sin crear una cuenta. También recomendamos no
                ingresar información personal sensible en los campos de la calculadora
                a menos que sea necesario.
              </p>
            </section>

            {/* ACCESSIBILITY */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Accesibilidad y Rendimiento
              </h2>

              <p className="text-gray-700 leading-8">
                Nuestro objetivo es mantener CalcuNotas rápido, legible, compatible con
                dispositivos móviles y fácil de usar. Nuestras páginas están estructuradas
                con encabezados claros, formularios simples, explicaciones útiles y diseños
                responsivos para que los usuarios puedan acceder a las calculadoras desde
                diferentes dispositivos.
              </p>
            </section>

            {/* CONTACT */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Contáctanos
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                Si tienes preguntas, sugerencias, comentarios o detectas un problema
                con alguna de nuestras calculadoras, puedes contactarnos en cualquier momento.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:info@calcunotas.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                >
                  <FaEnvelope className="text-blue-600" />
                  info@calcunotas.com
                </a>

                <a
                  href="https://calcunotas.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                >
                  <FaGlobe className="text-blue-600" />
                  calcunotas.com
                </a>
              </div>
            </section>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-5">
            <RightSidebar />
            <BlogSidebar />
          </aside>

        </div>
      </section>

      <InvisibleFooter />
    </main>
  );
}