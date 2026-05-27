import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import TestGradeCalculator from "@/app/components/TestGradeCalculator";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calculadora de Notas de Examen | Calcular Calificación Gratis",

  description:
    "Calcula tus notas de examen, porcentaje de aciertos, respuestas correctas e incorrectas y calificación con letra al instante. Calculadora de notas gratis para estudiantes y maestros.",

  keywords: [
    "calculadora de notas",
    "calculadora de notas de examen",
    "calcular nota examen",
    "calculadora de calificaciones",
    "calcular calificaciones",
    "calculadora escolar",
    "calculadora de porcentaje de examen",
    "calculadora de notas para maestros",
    "calculadora de notas para estudiantes",
    "calcular nota de prueba",
  ],



 alternates: {
    canonical: "https://calcunotas.com",
    languages: {
      "es": "https://calcunotas.com", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com", // Spain
      "es-MX": "https://calcunotas.com", // Mexico
      "es-AR": "https://calcunotas.com", // Argentina
      "es-CO": "https://calcunotas.com", // Colombia
      "es-CL": "https://calcunotas.com", // Chile
      "es-PE": "https://calcunotas.com", // Peru
      "es-VE": "https://calcunotas.com", // Venezuela
      "es-EC": "https://calcunotas.com", // Ecuador
      "es-BO": "https://calcunotas.com", // Bolivia
      "es-PY": "https://calcunotas.com", // Paraguay
      "es-UY": "https://calcunotas.com", // Uruguay
      "es-GT": "https://calcunotas.com", // Guatemala
      "es-CU": "https://calcunotas.com", // Cuba
      "es-DO": "https://calcunotas.com", // Dominican Republic
      "es-HN": "https://calcunotas.com", // Honduras
      "es-SV": "https://calcunotas.com", // El Salvador
      "es-NI": "https://calcunotas.com", // Nicaragua
      "es-PA": "https://calcunotas.com", // Panama
      "es-CR": "https://calcunotas.com", // Costa Rica
    },
  },

};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Calculadora de Notas de Examen
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Notas de Examen
          </h1>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta calculadora de notas de examen para calcular tu
            puntuación, porcentaje de calificación, respuestas correctas e
            incorrectas y la nota con letra al instante. Funciona para
            exámenes, pruebas, tareas, evaluaciones de clase y sistemas de
            calificación por puntos.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Resultados en porcentaje",
              "Aciertos y errores",
              "Conversión a nota con letra",
              "Cálculo de puntaje de examen",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="pb-8">
        <div className="w-[min(1120px,94%)] mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">
          <TestGradeCalculator />

          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-14">
        <div className="w-[min(1120px,94%)] mx-auto">
          <article className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">

              {/* QUICK SUMMARY */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-[28px] font-bold tracking-[-0.03em] mb-4">
                  Resumen Rápido
                </h2>

                <p className="text-gray-700 leading-8">
                  Una calculadora de notas ayuda a estudiantes y{" "}
                  <a
                    href="/calculadora-profesores/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    maestros a calcular
                  </a>{" "}
                  las notas de exámenes, porcentajes, respuestas correctas e
                  incorrectas y calificaciones con letra al instante. En lugar
                  de calcular porcentajes de forma manual, los usuarios pueden
                  determinar rápidamente el rendimiento en el examen usando una
                  fórmula de calificación simple.
                </p>
              </div>

              {/* HOW IT WORKS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Cómo Funciona la Calculadora de Notas
                </h2>

                <div className="space-y-5 text-[16px] leading-8 text-gray-700">
                  <p>
                    Una{" "}
                    <a
                      href="/calculadora-de-notas/"
                      className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                    >
                      calculadora de calificaciones
                    </a>{" "}
                    está diseñada para simplificar el proceso de calificación
                    para estudiantes, maestros, tutores, educadores en casa e
                    instituciones académicas. En lugar de calcular porcentajes
                    manualmente después de cada examen o prueba, la calculadora
                    convierte al instante las respuestas en notas y porcentajes.
                  </p>

                  <p>
                    La mayoría de las calculadoras de notas funcionan
                    solicitando al usuario ingresar el total de preguntas y las
                    respuestas correctas o incorrectas. Una vez ingresados, la
                    calculadora calcula automáticamente el porcentaje de
                    calificación y la nota con letra estimada según los sistemas
                    de evaluación más comunes.
                  </p>

                  <blockquote className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5 italic text-gray-700">
                    "Las calculadoras de notas reducen errores manuales y
                    ayudan a los maestros a ahorrar tiempo valioso de
                    corrección cada semana."
                  </blockquote>

                  <p>
                    Las calculadoras de notas se utilizan habitualmente en
                    escuelas, universidades, plataformas de aprendizaje en
                    línea, programas de tutoría y entornos de capacitación para
                    certificaciones.
                  </p>
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Fórmula para Calcular la Nota del Examen
                </h2>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-semibold overflow-x-auto mb-7 text-center text-[16px]">
                  Porcentaje de Nota = (Respuestas Correctas ÷ Total de Preguntas) × 100
                </div>

                <div className="space-y-5 text-[16px] leading-8 text-gray-700">
                  <p>
                    La fórmula de calificación es sencilla pero muy útil.
                    Primero, divide el número de respuestas correctas entre el
                    total de preguntas del examen. Luego multiplica el resultado
                    por 100 para convertirlo en porcentaje.
                  </p>

                  <p>
                    Por ejemplo, si un estudiante responde correctamente 45
                    preguntas de un total de 50, el cálculo es el siguiente:
                  </p>
                </div>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-semibold mt-6 mb-7 text-center">
                  (45 ÷ 50) × 100 = 90%
                </div>

                <p className="text-gray-700 leading-8">
                  Una calificación del 90% generalmente equivale a una nota A
                  en muchos sistemas educativos. Sin embargo, las escalas de
                  calificación pueden variar según la escuela o institución
                  educativa.
                </p>
              </section>

              {/* WHY IT MATTERS */}
              <section className="mb-12">
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                    Por Qué Son Importantes las Calculadoras de Notas
                  </h2>

                  <div className="space-y-5 text-[16px] leading-8 text-gray-700">
                    <p>
                      Los maestros suelen gestionar múltiples aulas, tareas,
                      pruebas y exámenes cada semana. La corrección manual puede
                      llevar mucho tiempo, especialmente cuando se calculan
                      porcentajes repetidamente para grupos grandes de
                      estudiantes.
                    </p>

                    <p>
                      Una calculadora de notas agiliza el proceso y reduce los
                      errores de calificación. En lugar de dedicar tiempo extra
                      a cálculos matemáticos, los educadores pueden enfocarse
                      más en la planificación de clases, la retroalimentación a
                      los estudiantes y la mejora del aula.
                    </p>

                    <p>
                      Los estudiantes también usan calculadoras de notas para
                      estimar sus puntajes antes de que se publiquen los
                      resultados oficiales. Esto les ayuda a comprender su
                      progreso académico e identificar áreas débiles que
                      requieren más estudio.
                    </p>
                  </div>
                </div>
              </section>

              {/* STEP GUIDE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Guía Paso a Paso para Calcular tu Nota
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Ingresa el Total de Preguntas",
                      text: "Comienza añadiendo el número total de preguntas o puntos disponibles en el examen.",
                    },
                    {
                      title: "Agrega las Respuestas Correctas",
                      text: "Ingresa el número de respuestas correctas o usa las incorrectas según el método de calificación.",
                    },
                    {
                      title: "Calcula el Porcentaje",
                      text: "La calculadora convierte al instante la puntuación en un resultado porcentual.",
                    },
                    {
                      title: "Visualiza la Nota con Letra",
                      text: "El porcentaje final se compara con una escala de calificación para estimar la nota con letra.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 p-5 bg-white"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-[18px] font-semibold text-gray-800">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-7 text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* BENEFITS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Ventajas de Usar una Calculadora de Notas
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Cálculos de porcentaje al instante",
                    "Flujo de corrección más rápido",
                    "Menos errores manuales",
                    "Conversión fácil a nota con letra",
                    "Útil para pruebas y tareas",
                    "Ayuda a los estudiantes a seguir su progreso",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-white p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-gray-800">{item}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 space-y-5 text-[16px] leading-8 text-gray-700">
                  <p>
                    Los maestros suelen corregir decenas o incluso cientos de
                    pruebas cada semana. Calcular porcentajes manualmente de
                    forma repetida puede ser agotador y llevar mucho tiempo.
                  </p>

                  <p>
                    Los estudiantes también se benefician porque pueden estimar
                    sus notas antes de que se publiquen las calificaciones
                    oficiales.
                  </p>
                </div>
              </section>

              {/* TABLE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Escala de Calificaciones con Letra más Común
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-semibold">
                          Porcentaje
                        </th>
                        <th className="px-5 py-4 text-left font-semibold">
                          Nota con Letra
                        </th>
                        <th className="px-5 py-4 text-left font-semibold">
                          Rendimiento
                        </th>
                        <th className="px-5 py-4 text-left font-semibold">
                          Significado Académico
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["90% - 100%", "A", "Excelente", "Comprensión sobresaliente"],
                        ["80% - 89%", "B", "Bueno", "Rendimiento sólido"],
                        ["70% - 79%", "C", "Regular", "Trabajo satisfactorio"],
                        ["60% - 69%", "D", "Por debajo del promedio", "Necesita mejorar"],
                        ["Menos del 60%", "F", "Reprobado", "Rendimiento insuficiente"],
                      ].map((row, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-200 bg-white"
                        >
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className="px-5 py-4 text-gray-700 text-[15px]"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[28px] font-bold tracking-[-0.03em] mb-5">
                    Errores Comunes al Calificar Exámenes
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Ingresar incorrectamente el total de preguntas.</li>
                    <li>• Confundir respuestas incorrectas con preguntas sin responder.</li>
                    <li>• Usar escalas de calificación distintas por error.</li>
                    <li>• Olvidar las preguntas ponderadas en exámenes avanzados.</li>
                    <li>• Calcular porcentajes manualmente de forma incorrecta.</li>
                    <li>• Suponer que todas las escuelas usan el mismo sistema de calificación.</li>
                  </ul>
                </div>
              </section>

              {/* TIPS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-5">
                  Consejos de Expertos para Mejorar tus Notas
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Repasa los errores después de cada prueba",
                    "Practica la recuperación activa regularmente",
                    "Usa exámenes de práctica con tiempo límite",
                    "Enfócate más en las materias débiles",
                    "Mejora tus técnicas de toma de apuntes",
                    "Registra las tendencias de tu rendimiento",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-white p-5"
                    >
                      <div className="font-medium text-gray-800">✔ {item}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-gray-700 leading-8">
                  La mejora académica generalmente proviene de la constancia y
                  no de la preparación de último minuto.
                </p>
              </section>

              {/* FAQ */}
              <section>
                <div className="space-y-4">
                  <section className="bg-gray-50 py-14 border-t">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                      {/* LEFT SIDE */}
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                          Preguntas Frecuentes
                        </h2>
                        <p className="text-gray-700 text-base leading-relaxed">
                          Estudiantes y maestros suelen tener preguntas sobre
                          cómo calcular porcentajes de notas, puntajes basados
                          en puntos, resultados de exámenes finales y
                          calificaciones con letra. Esta sección responde las
                          preguntas más comunes sobre cómo funciona esta
                          calculadora de notas.
                        </p>
                      </div>

                      {/* RIGHT SIDE - FAQ ACCORDION */}
                      <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                        <details className="group border-b border-slate-700 pb-4">
                          <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                            <h3>¿Cómo se calcula el porcentaje de nota de un examen?</h3>
                            <span className="transition-transform group-open:rotate-180">▼</span>
                          </summary>
                          <p className="mt-4 text-slate-400">
                            Divide las respuestas correctas entre el total de
                            preguntas y multiplica el resultado por 100 para
                            obtener el porcentaje de calificación.
                          </p>
                        </details>

                        <details className="group border-b border-slate-700 pb-4">
                          <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                            <h3>¿Pueden los maestros usar esta calculadora de notas?</h3>
                            <span className="transition-transform group-open:rotate-180">▼</span>
                          </summary>
                          <p className="mt-4 text-slate-400">
                            Sí. Los maestros usan habitualmente calculadoras de
                            notas para pruebas, tareas, exámenes y la
                            calificación en clase.
                          </p>
                        </details>

                        <details className="group border-b border-slate-700 pb-4">
                          <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                            <h3>¿Funciona esta calculadora para sistemas de calificación por puntos?</h3>
                            <span className="transition-transform group-open:rotate-180">▼</span>
                          </summary>
                          <p className="mt-4 text-slate-400">
                            Sí. Puedes calcular notas usando los puntos obtenidos
                            y el total de puntos posibles.
                          </p>
                        </details>

                        <details className="group border-b border-slate-700 pb-4">
                          <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                            <h3>¿Pueden los estudiantes calcular las notas de su examen final?</h3>
                            <span className="transition-transform group-open:rotate-180">▼</span>
                          </summary>
                          <p className="mt-4 text-slate-400">
                            Sí. Los estudiantes pueden estimar sus puntajes,
                            porcentajes y notas con letra al instante.
                          </p>
                        </details>

                        <details className="group">
                          <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                            <h3>¿Las escalas de calificación son iguales en todos lados?</h3>
                            <span className="transition-transform group-open:rotate-180">▼</span>
                          </summary>
                          <p className="mt-4 text-slate-400">
                            No. Las escuelas y universidades pueden usar
                            diferentes escalas de calificación, porcentajes o
                            sistemas de promedio (GPA).
                          </p>
                        </details>

                      </div>
                    </div>
                  </section>
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