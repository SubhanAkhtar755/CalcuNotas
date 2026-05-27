// page.jsx — calcunotas.com/calculadora-profesores/
// Calculadora de Notas para Profesores — Spanish SEO + AEO Optimized

import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import TestGradeCalculator from "@/app/components/TestGradeCalculator";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calculadora de Notas para Profesores | Califica Exámenes Gratis",

  description:
    "Herramienta gratuita para profesores: calcula porcentajes de examen, respuestas correctas, incorrectas y calificación en letra al instante. Rápida y sin errores.",

  keywords: [
    "calculadora de notas para profesores",
    "calculadora de calificaciones para docentes",
    "calcular porcentaje de examen",
    "herramienta de calificacion para profesores",
    "calificador de pruebas",
    "nota en letra para profesores",
    "calculadora de notas gratis",
    "corregir examen online",
    "calculadora de test para docentes",
    "calcular nota examen online",
  ],

 
  alternates: {
    canonical: "https://calcunotas.com/calculadora-profesores/",
    languages: {
      "es": "https://calcunotas.com/calculadora-profesores/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/calculadora-profesores/", // Spain
      "es-MX": "https://calcunotas.com/calculadora-profesores/", // Mexico
      "es-AR": "https://calcunotas.com/calculadora-profesores/", // Argentina
      "es-CO": "https://calcunotas.com/calculadora-profesores/", // Colombia 
      "es-CL": "https://calcunotas.com/calculadora-profesores/", // Chile
      "es-PE": "https://calcunotas.com/calculadora-profesores/", // Peru
      "es-VE": "https://calcunotas.com/calculadora-profesores/", // Venezuela
      "es-EC": "https://calcunotas.com/calculadora-profesores/", // Ecuador
      "es-BO": "https://calcunotas.com/calculadora-profesores/", // Bolivia
      "es-PY": "https://calcunotas.com/calculadora-profesores/", // Paraguay
      "es-UY": "https://calcunotas.com/calculadora-profesores/", // Uruguay
      "es-GT": "https://calcunotas.com/calculadora-profesores/", // Guatemala
      "es-CU": "https://calcunotas.com/calculadora-profesores/", // Cuba
      "es-DO": "https://calcunotas.com/calculadora-profesores/", // Dominican Republic
      "es-HN": "https://calcunotas.com/calculadora-profesores/", // Honduras
      "es-SV": "https://calcunotas.com/calculadora-profesores/", // El Salvador
      "es-NI": "https://calcunotas.com/calculadora-profesores/", // Nicaragua
      "es-PA": "https://calcunotas.com/calculadora-profesores/", // Panama
      "es-CR": "https://calcunotas.com/calculadora-profesores/", // Costa Rica
    },
  },

};

export default function CalculadoraProfesores() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* ── HERO ── */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">

          {/* Breadcrumb */}
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Calculadora de Notas para Profesores
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Notas para Profesores
          </h1>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta calculadora de notas para profesores y califica exámenes,
            pruebas, tareas y ejercicios al instante. Obtén el porcentaje,
            las respuestas correctas e incorrectas y la calificación en letra
            sin hacer cálculos manuales.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Porcentaje de examen al instante",
              "Respuestas correctas e incorrectas",
              "Calificación en letra",
              "Cálculo de nota de prueba",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-bold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATOR + SIDEBAR ── */}
      <section className="pb-8">
        <div className="w-[min(1120px,94%)] mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">
          <TestGradeCalculator />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* ── CONTENT ARTICLE ── */}
      <section className="pb-14">
        <div className="w-[min(1120px,94%)] mx-auto">
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.05)] overflow-hidden">
            <div className="p-7 md:p-9">

              {/* RESUMEN RÁPIDO — AEO Featured Snippet */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-[26px] font-bold tracking-[-0.03em] mb-4">
                  Resumen Rápido
                </h2>
                <p className="text-gray-700 leading-8">
                  Una calculadora de notas para profesores permite calcular
                  porcentajes de examen, resultados de pruebas, calificaciones
                  en letra y notas de tareas de forma inmediata. En lugar de
                  hacer los cálculos a mano, el docente introduce el total de
                  preguntas y las respuestas correctas, y obtiene el resultado
                  al instante.{" "}
                  <a
                    href="/nota-final/"
                    className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-4"
                  >
                    Calcula también la nota final
                  </a>{" "}
                  que necesita el alumno para aprobar.
                </p>
              </div>

              {/* QUÉ ES */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  ¿Qué es una calculadora de notas para profesores?
                </h2>
                <div className="space-y-6 text-gray-700 leading-8 text-[17px]">
                  <p>
                    Una calculadora de notas para profesores es una herramienta
                    en línea que convierte el número de respuestas correctas en
                    un porcentaje y una calificación en letra de forma
                    automática. Los docentes que gestionan varias clases y
                    corrigen muchas pruebas cada semana la usan para ahorrar
                    tiempo y evitar errores de cálculo.
                  </p>
                  <p>
                    En lugar de calcular porcentajes manualmente después de cada
                    examen o quiz, el profesor introduce el total de preguntas y
                    las respuestas correctas, y la herramienta genera el
                    resultado de inmediato. Esto agiliza la corrección y hace
                    que las calificaciones sean más consistentes.{" "}
                    <a
                      href="/"
                      className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-4"
                    >
                      Ver la calculadora de notas principal
                    </a>
                    .
                  </p>
                  <blockquote className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 px-6 py-5 italic text-gray-700">
                    "Las herramientas digitales de calificación ayudan a los
                    docentes a ahorrar tiempo y a hacer la corrección más
                    precisa y uniforme."
                  </blockquote>
                </div>
              </section>

              {/* FÓRMULA */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Fórmula de la calculadora de notas para profesores
                </h2>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-7 text-center text-[16px]">
                  Porcentaje = (Respuestas Correctas ÷ Total de Preguntas) × 100
                </div>

                <p className="text-gray-700 leading-8 mb-5">
                  Esta fórmula es la más utilizada en colegios, universidades
                  y plataformas de aprendizaje en línea para calcular
                  porcentajes de examen y notas de clase en países
                  hispanohablantes.
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold mb-7 text-center">
                  (45 ÷ 50) × 100 = 90%
                </div>

                <p className="text-gray-700 leading-8">
                  En este ejemplo, el alumno respondió 45 preguntas correctamente
                  de un total de 50, obteniendo un 90%. Eso equivale a una nota
                  de sobresaliente o excelente en la mayoría de sistemas
                  educativos de habla hispana.
                </p>
              </section>

              {/* BENEFICIOS */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Ventajas de usar esta herramienta de calificación
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "Corrección de clase más rápida",
                    "Cálculo de porcentaje sin errores",
                    "Conversión fácil a calificación en letra",
                    "Útil para profesores y estudiantes",
                    "Válida para pruebas, tareas y exámenes",
                    "Reduce los errores de cálculo manual",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-white p-5"
                    >
                      <div className="font-medium text-gray-800">✓ {item}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TABLA */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Escala de{" "}
                  <a
                    href="/calificador-rapido/"
                    className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-4"
                  >
                    calificaciones en letra
                  </a>{" "}
                  más usada
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-semibold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-semibold">Calificación</th>
                        <th className="px-5 py-4 text-left font-semibold">Rendimiento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["90% - 100%", "A / Sobresaliente", "Excelente"],
                        ["80% - 89%", "B / Notable", "Bueno"],
                        ["70% - 79%", "C / Bien", "Aceptable"],
                        ["60% - 69%", "D / Suficiente", "Por debajo de la media"],
                        ["Menos del 60%", "F / Suspenso", "Insuficiente"],
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
              </section>

              {/* ERRORES COMUNES */}
              <section className="mb-14">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
                  <h2 className="text-[28px] font-bold tracking-[-0.03em] mb-5">
                    Errores frecuentes al calificar exámenes
                  </h2>
                  <ul className="space-y-4 text-gray-700 leading-8">
                    <li>• Ingresar un número total de preguntas incorrecto.</li>
                    <li>• Olvidar los sistemas de calificación ponderada.</li>
                    <li>• Confundir preguntas sin responder con respuestas incorrectas.</li>
                    <li>• Usar escalas de calificación distintas sin darse cuenta.</li>
                    <li>• Errores de redondeo al calcular porcentajes a mano.</li>
                  </ul>
                </div>
              </section>

              {/* CONSEJOS */}
              <section className="mb-14">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Consejos de estudio para mejorar las notas
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "Practica exámenes de simulacro cada semana",
                    "Lleva un seguimiento de las materias con más errores",
                    "Revisa los fallos después de cada prueba",
                    "Mejora la gestión del tiempo en el examen",
                    "Empieza por los temas más difíciles",
                    "Estudia de forma constante antes de los exámenes",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-slate-50 p-5"
                    >
                      <div className="text-gray-800 font-medium">✔ {item}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CALCULADORAS RELACIONADAS */}
              <section className="mb-14">
                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-7">
                  <h2 className="text-[28px] font-bold tracking-[-0.03em] mb-5">
                    Otras calculadoras de notas
                  </h2>
                  <div className="grid gap-5 md:grid-cols-3">
                    {[
                      {
                        title: "Calificador Rápido",
                        text: "Genera tablas de calificación rápidas para pruebas y tareas.",
                        href: "/calificador-rapido/",
                      },
                      {
                        title: "Calculadora de Nota Final",
                        text: "Estima la nota que necesitas en el examen final para aprobar.",
                        href: "/nota-final/",
                      },
                      {
                        title: "Calculadora de GPA",
                        text: "Calcula el GPA semestral y acumulado de forma sencilla.",
                        href: "/calculadora-gpa/",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
                      >
                        <h3 className="text-[18px] font-semibold mb-3 text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-7 text-[15px]">
                          {item.text}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ — AEO Schema Ready */}
              <section className="bg-gray-50 py-14 border-t">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                  {/* LEFT */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Profesores y estudiantes tienen dudas habituales sobre
                      cómo calcular notas de examen, porcentajes de prueba,
                      tareas y calificaciones en letra. Aquí respondemos las
                      preguntas más comunes sobre esta calculadora de notas
                      para docentes.
                    </p>
                  </div>

                  {/* RIGHT — Accordion */}
                  <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculan los profesores las notas de los exámenes?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Los profesores dividen las respuestas correctas entre el
                        total de preguntas y multiplican el resultado por 100
                        para obtener el porcentaje de la nota.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Pueden usar esta calculadora los estudiantes?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Los estudiantes pueden usarla para estimar su nota,
                        porcentaje y calificación en letra antes de recibir los
                        resultados oficiales.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Funciona para pruebas cortas y tareas?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. La calculadora es válida para pruebas cortas,
                        exámenes, tareas, ejercicios de clase y hojas de
                        práctica.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Qué escala de calificación usa esta herramienta?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Usa el sistema de porcentajes más habitual en colegios y
                        universidades hispanohablantes. La escala puede variar
                        según el país o institución.
                      </p>
                    </details>

                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Puedo calcular notas usando puntos en lugar de preguntas?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Puedes calcular la nota introduciendo los puntos
                        obtenidos y el total de puntos posibles del examen o
                        tarea.
                      </p>
                    </details>

                  </div>
                </div>
              </section>

            </div>
          </article>
        </div>
      </section>

      <InvisibleFooter />
    </main>
  );
}