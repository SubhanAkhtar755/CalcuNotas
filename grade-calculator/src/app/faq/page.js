import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Preguntas Frecuentes | CalcuNotas",
  description:
    "Encuentra respuestas a preguntas comunes sobre CalcuNotas, calculadoras de notas, calculadoras GPA, calculadoras de nota final, calculadoras de nota semestral, calculadoras de examen y herramientas de calificación rápida.",
  keywords: [
    "preguntas frecuentes calculadora de notas",
    "faq calculadora gpa",
    "faq calculadora nota final",
    "faq calculadora nota semestral",
    "faq calculadora de examen",
    "faq calificador rapido",
    "preguntas calculo de notas",
    "preguntas calculo gpa",
    "preguntas frecuentes calcunotas",
    "ayuda calculadora academica",
  ],

   alternates: {
    canonical: "https://calcunotas.com/faq/",
    languages: {
      "es": "https://calcunotas.com/faq/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/faq/", // Spain
      "es-MX": "https://calcunotas.com/faq/", // Mexico
      "es-AR": "https://calcunotas.com/faq/", // Argentina
      "es-CO": "https://calcunotas.com/faq/", // Colombia
      "es-CL": "https://calcunotas.com/faq/", // Chile
      "es-PE": "https://calcunotas.com/faq/", // Peru
      "es-VE": "https://calcunotas.com/faq/", // Venezuela
      "es-EC": "https://calcunotas.com/faq/", // Ecuador
      "es-BO": "https://calcunotas.com/faq/", // Bolivia
      "es-PY": "https://calcunotas.com/faq/", // Paraguay
      "es-UY": "https://calcunotas.com/faq/", // Uruguay
      "es-GT": "https://calcunotas.com/faq/", // Guatemala
      "es-CU": "https://calcunotas.com/faq/", // Cuba
      "es-DO": "https://calcunotas.com/faq/", // Dominican Republic
      "es-HN": "https://calcunotas.com/faq/", // Honduras
      "es-SV": "https://calcunotas.com/faq/", // El Salvador
      "es-NI": "https://calcunotas.com/faq/", // Nicaragua
      "es-PA": "https://calcunotas.com/faq/", // Panama
      "es-CR": "https://calcunotas.com/faq/", // Costa Rica
    },
  },

};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-gray-500 mb-3">
            Inicio / Preguntas Frecuentes
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Preguntas Frecuentes
          </h1>

          <p className="max-w-[850px] text-gray-600 leading-8 text-[16px] md:text-[17px]">
            Encuentra respuestas a preguntas comunes sobre CalcuNotas, incluyendo
            calculadoras de notas, calculadoras GPA, calculadoras de nota final,
            herramientas de nota semestral, calculadoras de examen, notas ponderadas,
            calificación por puntos y herramientas de calificación rápida.
          </p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12">
        <div className="w-[min(1120px,94%)] mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

          {/* MAIN CONTENT */}
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden">

            {/* INTRO */}
            <section className="p-7 md:p-9 border-b border-gray-200">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                  Ayuda con el Cálculo de Notas y GPA
                </h2>

                <p className="text-gray-700 leading-8">
                  CalcuNotas ofrece calculadoras académicas gratuitas para
                  estudiantes, profesores, padres y educadores. Estas preguntas frecuentes explican
                  cómo funcionan nuestras calculadoras, qué información necesitas, cómo se
                  calculan las fórmulas de notas y por qué los resultados oficiales pueden diferir
                  de las estimaciones de la calculadora.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Los resultados de la calculadora están diseñados para planificación y aprendizaje. Para
                  notas oficiales, registros de GPA, expedientes académicos o decisiones académicas,
                  consulta siempre el portal de tu institución, las instrucciones del profesor, el
                  programa del curso o tu asesor académico.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* GENERAL FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas Generales
                </h2>

                <div className="bg-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">

                  <details className="group border-b border-slate-700 pb-4">
                    <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium gap-4">
                      <h3>¿Qué es CalcuNotas?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-400 leading-7">
                      CalcuNotas es un sitio web gratuito de calculadoras educativas
                      que ayuda a los usuarios a calcular notas, GPA, puntajes de examen final,
                      notas semestrales, porcentajes de examen, promedios ponderados y
                      tablas de calificación rápida.
                    </p>
                  </details>

                  <details className="group border-b border-slate-700 pb-4">
                    <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium gap-4">
                      <h3>¿Quién puede usar estas calculadoras?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-400 leading-7">
                      Los estudiantes pueden usarlas para hacer seguimiento de notas y GPA, los profesores
                      pueden usarlas para calcular puntajes o crear tablas de calificación, y
                      los padres pueden usarlas para entender el progreso académico y los
                      objetivos de notas.
                    </p>
                  </details>

                  <details className="group border-b border-slate-700 pb-4">
                    <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium gap-4">
                      <h3>¿Las calculadoras son gratuitas?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-400 leading-7">
                      Sí. Las calculadoras de CalcuNotas son gratuitas para uso
                      educativo e informativo.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium gap-4">
                      <h3>¿Los resultados de la calculadora son oficiales?</h3>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-400 leading-7">
                      No. Los resultados son estimaciones basadas en los valores que
                      ingresas. Las notas oficiales, registros de GPA, expedientes académicos y
                      situación académica son determinados por tu profesor, escuela, colegio o
                      universidad.
                    </p>
                  </details>

                </div>
              </section>

              {/* GRADE CALCULATOR FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre la Calculadora de Notas
                </h2>

                <div className="space-y-4">

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Cómo funciona la calculadora de notas?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      La calculadora combina tus notas de evaluación con sus pesos.
                      Multiplica cada nota por su peso, suma las puntuaciones ponderadas
                      y divide entre el peso total para estimar tu nota actual en la materia.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Qué información necesito para calcular mi nota actual?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Generalmente necesitas las notas de tareas, cuestionarios, exámenes,
                      proyectos y el peso de cada categoría. Si tu clase usa puntos en lugar
                      de pesos, necesitas los puntos obtenidos y el total de puntos posibles.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Qué es una nota ponderada?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Una nota ponderada significa que algunas tareas o exámenes cuentan más
                      que otros. Por ejemplo, un examen final con valor del 40% tiene mayor
                      impacto en tu nota que una tarea con valor del 10%.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Puedo calcular notas usando puntos?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Sí. Para calificación por puntos, divide los puntos obtenidos entre el
                      total de puntos posibles y multiplica por 100. Por ejemplo, 180 puntos
                      obtenidos de 200 posibles equivale al 90%.
                    </p>
                  </details>

                </div>
              </section>

              {/* GPA FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre la Calculadora GPA
                </h2>

                <div className="space-y-4">

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Cómo calculo el GPA?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Convierte cada calificación en puntos de nota, multiplica los puntos
                      por los créditos, suma todos los puntos de calidad y divide entre el
                      total de créditos. La fórmula básica es: GPA = Total de Puntos de Calidad ÷ Total de Créditos.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Cuál es la diferencia entre el GPA semestral y el GPA acumulado?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      El GPA semestral mide solo un período académico. El GPA acumulado
                      combina todos los semestres completados y muestra tu promedio académico
                      general a lo largo de tu programa.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Por qué los créditos afectan el GPA?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Los créditos actúan como peso. Una materia de 4 créditos afecta más
                      tu GPA que una de 1 crédito, porque aporta más puntos de calidad al
                      cálculo final del GPA.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿La calculadora GPA soporta GPA ponderado?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Sí. El GPA ponderado puede estimarse cuando cursos avanzados
                      como Honors, AP, IB o materias de doble inscripción reciben
                      puntos de nota adicionales. Las reglas exactas dependen de tu institución.
                    </p>
                  </details>

                </div>
              </section>

              {/* FINAL GRADE FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre la Calculadora de Nota Final
                </h2>

                <div className="space-y-4">

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Cómo calculo la nota que necesito en el examen final?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Ingresa tu nota actual, la nota objetivo y el peso del examen final.
                      La calculadora estima el puntaje que necesitas en el examen final
                      para alcanzar tu nota objetivo en la materia.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Qué significa el peso del examen final?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      El peso del examen final es el porcentaje de tu nota total del curso
                      que controla el examen final. Un examen final del 30% significa que
                      cuenta el 30% de tu nota final en la materia.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Qué pasa si la nota requerida en el examen final supera el 100%?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Si la nota requerida supera el 100%, es posible que tu nota objetivo
                      no sea alcanzable sin crédito extra, curva de calificación o puntos adicionales.
                      Considera establecer un objetivo más realista o consultar con tu profesor.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Puede la calculadora estimar mi nota final del curso?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Sí. Si conoces tu nota actual, la nota del examen final y el peso del
                      examen final, puedes estimar tu nota final del curso después del examen.
                    </p>
                  </details>

                </div>
              </section>

              {/* EASY GRADER FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre el Calificador Rápido
                </h2>

                <div className="space-y-4">

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Qué es un calificador rápido?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Un calificador rápido crea una tabla de notas a partir del
                      total de preguntas. Muestra respuestas incorrectas, correctas,
                      porcentajes y calificaciones de letras para cada puntaje posible.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Cómo calculan los profesores las notas a partir de respuestas incorrectas?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Resta las respuestas incorrectas del total de preguntas para obtener
                      las respuestas correctas. Luego divide las respuestas correctas entre
                      el total de preguntas y multiplica por 100 para obtener el porcentaje.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Se puede usar el calificador rápido para cuestionarios y tareas?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Sí. Los profesores pueden usarlo para cuestionarios, exámenes, hojas de trabajo,
                      pruebas de ortografía, tareas, exámenes de práctica y trabajos de clase.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿El calificador rápido muestra calificaciones de letras?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Sí. El calificador rápido puede mostrar calificaciones de letras junto
                      con porcentajes, según la escala de calificación que se esté usando.
                    </p>
                  </details>

                </div>
              </section>

              {/* ACCURACY FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre Precisión y Políticas de Calificación
                </h2>

                <div className="space-y-4">

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Por qué mi nota oficial puede diferir del resultado de la calculadora?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Las notas oficiales pueden diferir porque los profesores e instituciones pueden
                      usar reglas de redondeo, crédito extra, curvas de calificación, notas eliminadas,
                      pesos de categoría personalizados, penalizaciones por retraso o políticas
                      especiales de calificación.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Las escalas de calificación son iguales en todos lados?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      No. Escuelas, colegios, universidades, profesores y países
                      pueden usar diferentes cortes de porcentaje, escalas de GPA, sistemas
                      de calificación por letras y políticas de calificación ponderada.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Debo usar los resultados de la calculadora para decisiones académicas oficiales?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Los resultados son estimaciones útiles, pero las decisiones académicas
                      importantes deben confirmarse con tu profesor, secretaría académica,
                      asesor, programa del curso o portal oficial de notas.
                    </p>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                    <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                      <h3>¿Qué hago si no estoy seguro de los pesos o las reglas de calificación?</h3>
                      <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-8">
                      Revisa el programa del curso, la política de calificación de tu institución,
                      o pregunta a tu profesor. Los pesos y reglas precisas son importantes para
                      obtener resultados confiables de la calculadora.
                    </p>
                  </details>

                </div>
              </section>

              {/* CONTACT CTA */}
              <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                  ¿Tienes Más Preguntas?
                </h2>

                <p className="text-gray-700 leading-8">
                  Si tienes preguntas sobre CalcuNotas, resultados de calculadoras,
                  fórmulas de notas o comentarios sobre el sitio, puedes contactarnos en{" "}
                  <a
                    href="mailto:info@calcunotas.com"
                    className="text-blue-600 underline hover:text-blue-700 transition"
                  >
                    info@calcunotas.com
                  </a>
                  .
                </p>
              </section>

            </div>
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