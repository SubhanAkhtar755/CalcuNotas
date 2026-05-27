import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GradeCalculatorLab from "@/app/components/GradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calculadora de Notas | Calcula tu Calificación Actual Gratis",
  description:
    "Calcula tu nota actual del curso por porcentaje, calificación en letra o puntos con pesos por evaluación. También calcula la nota que necesitas en el examen final para alcanzar tu meta.",
  keywords: [
    "calculadora de notas",
    "calcular nota actual",
    "calculadora de calificaciones ponderadas",
    "calculadora de notas del curso",
    "calcular promedio con pesos",
    "calculadora de notas online gratis",
    "calcular calificacion por porcentaje",
    "calculadora de nota final necesaria",
    "calculadora de promedios escolares",
    "calcular nota con letra",
  ],
  
 alternates: {
    canonical: "https://calcunotas.com/calculadora-de-notas/",
    languages: {
      "es": "https://calcunotas.com/calculadora-de-notas/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/calculadora-de-notas/", // Spain
      "es-MX": "https://calcunotas.com/calculadora-de-notas/", // Mexico
      "es-AR": "https://calcunotas.com/calculadora-de-notas/", // Argentina
      "es-CO": "https://calcunotas.com/calculadora-de-notas/", // Colombia
      "es-CL": "https://calcunotas.com/calculadora-de-notas/", // Chile
      "es-PE": "https://calcunotas.com/calculadora-de-notas/", // Peru
      "es-VE": "https://calcunotas.com/calculadora-de-notas/", // Venezuela
      "es-EC": "https://calcunotas.com/calculadora-de-notas/", // Ecuador
      "es-BO": "https://calcunotas.com/calculadora-de-notas/", // Bolivia
      "es-PY": "https://calcunotas.com/calculadora-de-notas/", // Paraguay
      "es-UY": "https://calcunotas.com/calculadora-de-notas/", // Uruguay
      "es-GT": "https://calcunotas.com/calculadora-de-notas/", // Guatemala
      "es-CU": "https://calcunotas.com/calculadora-de-notas/", // Cuba
      "es-DO": "https://calcunotas.com/calculadora-de-notas/", // Dominican Republic
      "es-HN": "https://calcunotas.com/calculadora-de-notas/", // Honduras
      "es-SV": "https://calcunotas.com/calculadora-de-notas/", // El Salvador
      "es-NI": "https://calcunotas.com/calculadora-de-notas/", // Nicaragua
      "es-PA": "https://calcunotas.com/calculadora-de-notas/", // Panama
      "es-CR": "https://calcunotas.com/calculadora-de-notas/", // Costa Rica
    },
  },

};

export default function CalculadoraDeNotas() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Calculadora de Notas
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Notas
          </h1>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta calculadora de notas para calcular tu calificación actual
            del curso por porcentaje, nota en letra o puntos. Agrega tus
            evaluaciones, ingresa la nota y el peso, y obtén tu promedio
            general al instante.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Notas en porcentaje",
              "Notas en letra",
              "Notas por puntos",
              "Promedio ponderado",
              "Nota necesaria en el final",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 text-blue-700 px-4 py-2 rounded-full text-[13px] font-bold shadow-sm"
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
          <GradeCalculatorLab />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-14">
        <div className="w-[min(1120px,94%)] mx-auto">
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden">

            {/* QUICK INTRO */}
            <section className="p-7 md:p-9 border-b border-gray-200">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-4">
                  Calculadora de Notas para tu Calificación Actual
                </h2>

                <p className="text-gray-700 leading-8">
                  Esta calculadora de notas te ayuda a calcular tu calificación
                  actual del curso usando porcentajes, notas en letra, puntos y
                  evaluaciones ponderadas. Es útil cuando tu curso incluye
                  tareas, pruebas, exámenes, proyectos, participación, parciales
                  o exámenes finales con distintos pesos en la nota.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  En lugar de adivinar tu promedio, puedes ingresar cada
                  evaluación, añadir su nota y peso, y ver tu calificación
                  general con claridad. Los estudiantes pueden usarla para
                  planificar una nota objetivo, y los profesores pueden
                  verificar notas ponderadas más rápido y reducir errores de
                  cálculo manual.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* WHAT IS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es una calculadora de notas?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Una calculadora de notas es una herramienta en línea que
                    calcula tu calificación global del curso a partir de las
                    notas que ya obtuviste. Funciona combinando cada tarea,
                    prueba, examen o proyecto según su valor en el curso.
                  </p>

                  <p>
                    En muchas clases, no todas las evaluaciones cuentan igual.
                    Por ejemplo, las tareas pueden contar el 20% del curso, las
                    pruebas el 15%, los proyectos el 25% y el examen final el
                    40%. Una calculadora de notas ponderadas gestiona esas
                    diferencias de forma automática.
                  </p>

                  <p>
                    Esto la hace útil para revisar tu nota actual, entender
                    cuánto afecta cada evaluación a tu promedio y planificar
                    qué puntaje necesitas en trabajos futuros para alcanzar tu
                    meta.
                  </p>
                </div>
              </section>

              {/* HOW TO USE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo usar la calculadora de notas
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Usar la calculadora es sencillo. Ingresa las evaluaciones del
                  curso una por una, elige el tipo de nota, añade el peso o los
                  puntos, y la calculadora estimará tu calificación global.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      step: 1,
                      title: "Elige el tipo de nota",
                      text: "Selecciona porcentaje, nota en letra o puntos según cómo registra las calificaciones tu profesor.",
                    },
                    {
                      step: 2,
                      title: "Agrega cada evaluación",
                      text: "Añade tareas, deberes, pruebas, exámenes, proyectos, parciales o cualquier otro elemento del curso.",
                    },
                    {
                      step: 3,
                      title: "Ingresa la nota y el peso",
                      text: "Escribe tu puntaje y cuánto cuenta esa evaluación en la nota final del curso.",
                    },
                    {
                      step: 4,
                      title: "Visualiza tu nota actual",
                      text: "La calculadora combina tus notas y muestra tu calificación actual del curso al instante.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="rounded-2xl border border-gray-200 p-5 bg-white"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">
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

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula de la calculadora de notas
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  La fórmula más común para una nota ponderada se basa en la
                  nota y el peso de cada evaluación. Cada nota se multiplica
                  por su peso, luego se suman todos los puntajes ponderados y
                  se dividen entre el peso total.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota = Suma de (Nota de Evaluación × Peso) ÷ Peso Total
                </div>

                <p className="text-gray-700 leading-8">
                  Si tu curso usa evaluaciones con igual valor, la calculadora
                  funciona como un promedio simple. Si tu curso usa categorías
                  ponderadas, la fórmula ponderada da un resultado más preciso.
                </p>
              </section>

              {/* EXAMPLE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo de cálculo de nota ponderada
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  A continuación un ejemplo sencillo de cómo funciona el
                  cálculo de nota ponderada. Supón que tu curso tiene tareas,
                  pruebas, un proyecto y un examen final.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Evaluación</th>
                        <th className="px-5 py-4 text-left font-bold">Nota</th>
                        <th className="px-5 py-4 text-left font-bold">Peso</th>
                        <th className="px-5 py-4 text-left font-bold">Puntaje Ponderado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Tareas", "90%", "20%", "18"],
                        ["Pruebas", "84%", "20%", "16.8"],
                        ["Proyecto", "95%", "25%", "23.75"],
                        ["Examen Final", "80%", "35%", "28"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
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

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    <a
                      href="/nota-final/"
                      className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                    >
                      Nota Final
                    </a>{" "}
                    = 18 + 16.8 + 23.75 + 28 = <strong>86.55%</strong>. En
                    muchas escalas de calificación habituales, esto equivale a
                    una nota B, aunque tu calificación exacta en letra depende
                    de tu escuela o profesor.
                  </p>
                </div>
              </section>

              {/* FINAL EXAM */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula para calcular la nota necesaria en el examen final
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Si tu examen final aún no se ha realizado, puedes estimar qué
                  puntaje necesitas para alcanzar tu nota objetivo en el curso.
                  Solo necesitas tres valores: tu nota actual, tu nota objetivo
                  y el peso del examen final.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota Necesaria en el Final = (Nota Objetivo − Nota Actual × (1 − Peso Final)) ÷ Peso Final
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    Ejemplo del examen final
                  </h3>
                  <p className="text-gray-700 leading-8">
                    Si tu nota actual es 82%, tu nota objetivo es 90% y el
                    examen final vale el 40%, la calculadora puede estimar el
                    puntaje que necesitas en el final. Esto te ayuda a saber si
                    tu meta es realista y cuánta preparación se requiere.
                  </p>
                </div>
              </section>

              {/* TYPES */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cálculo por porcentaje, nota en letra y puntos
                </h2>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">Notas en Porcentaje</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa porcentajes cuando tu profesor da puntajes como 85%,
                      92% o 76%. Es el método más sencillo para la mayoría de
                      los estudiantes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">Notas en Letra</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa notas en letra cuando tus calificaciones aparecen
                      como A, B, C, D o F. Las notas en letra generalmente se
                      convierten a porcentaje para{" "}
                      <a
                        href="/"
                        className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                      >
                        calcular el puntaje del examen
                      </a>
                      , porcentajes y{" "}
                      <a
                        href="/calculadora-gpa/"
                        className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                      >
                        valores de GPA
                      </a>
                      .
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">Notas por Puntos</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa puntos cuando tu clase registra puntos obtenidos y
                      puntos totales posibles, como 45 de 50 o 180 de 200.
                    </p>
                  </div>
                </div>
              </section>

              {/* POINTS FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula de nota por puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Algunas clases no usan pesos por categoría; en cambio, usan
                  puntos. En ese caso, tu nota se basa en los puntos totales
                  obtenidos en comparación con los puntos totales posibles.
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Porcentaje de Nota = Puntos Obtenidos ÷ Total de Puntos Posibles × 100
                </div>

                <p className="text-gray-700 leading-8">
                  Por ejemplo, si obtuviste 450 puntos de 500 posibles, tu nota
                  sería del 90%. Este método es común en clases donde cada
                  evaluación se suma a un total general de puntos.
                </p>
              </section>

              {/* GRADE SCALE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Escala de calificaciones más común
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las escalas de calificación no son iguales en todos lados. Tu
                  escuela, universidad o profesor puede usar una escala
                  diferente. La tabla a continuación muestra una escala habitual
                  basada en porcentajes para referencia rápida.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-bold">Nota en Letra</th>
                        <th className="px-5 py-4 text-left font-bold">Rendimiento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["90% - 100%", "A / Sobresaliente", "Excelente"],
                        ["80% - 89%", "B / Notable", "Bueno"],
                        ["70% - 79%", "C / Bien", "Regular"],
                        ["60% - 69%", "D / Suficiente", "Por debajo del promedio"],
                        ["Menos del 60%", "F / Suspenso", "Reprobado"],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
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

              {/* BENEFITS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ventajas de usar una calculadora de notas
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Ahorra tiempo",
                      text: "No necesitas calcular manualmente cada evaluación y su peso.",
                    },
                    {
                      title: "Reduce errores",
                      text: "Los cálculos ponderados pueden ser confusos, y la calculadora ayuda a evitar equivocaciones matemáticas.",
                    },
                    {
                      title: "Ayuda a establecer metas",
                      text: "Puedes ver qué puntaje necesitas en trabajos futuros para alcanzar tu nota objetivo.",
                    },
                    {
                      title: "Mejora la planificación",
                      text: "Puedes enfocarte más en los exámenes, proyectos o tareas de mayor peso.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores comunes al calcular notas
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Olvidar incluir todas las tareas, exámenes o proyectos.</li>
                    <li>• Ingresar pesos que no suman correctamente.</li>
                    <li>• Mezclar puntos y porcentajes sin convertirlos.</li>
                    <li>• Tratar notas ponderadas como promedios simples.</li>
                    <li>• Ignorar el peso del examen final al planificar una nota objetivo.</li>
                    <li>• Asumir que todos los profesores usan la misma escala de calificación.</li>
                  </ul>
                </div>
              </section>

              {/* TIPS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos para mejorar tu nota
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Enfócate en las evaluaciones de mayor peso",
                      text: "Un examen final o proyecto importante puede afectar tu nota más que una tarea pequeña. Prioriza los elementos con mayor peso.",
                    },
                    {
                      title: "Lleva un seguimiento semanal de tu nota",
                      text: "Actualizar tus puntajes con regularidad te ayuda a evitar sorpresas al final del semestre.",
                    },
                    {
                      title: "Repasa los puntajes bajos",
                      text: "Revisa las pruebas o tareas donde perdiste puntos y estudia esos temas antes del próximo examen.",
                    },
                    {
                      title: "Planifica antes del examen final",
                      text: "Usa el cálculo de nota necesaria con anticipación para saber si tu nota objetivo es alcanzable.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 p-5">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-7 text-[15px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-gray-50 py-14 border-t -mx-7 md:-mx-9 -mb-9">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                  {/* LEFT */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Estudiantes y profesores suelen tener preguntas sobre
                      notas actuales, promedios ponderados, puntajes de examen
                      final, calificación por puntos y escalas de notas en
                      letra. Esta sección responde las preguntas más comunes
                      sobre cómo funciona esta calculadora de notas.
                    </p>
                  </div>

                  {/* RIGHT — Accordion */}
                  <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculo mi nota actual?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Multiplica cada nota de evaluación por su peso, suma
                        los puntajes ponderados y divide entre el peso total.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Esta calculadora funciona con notas en letra?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Puedes usar notas en letra si tu clase usa A, B, C,
                        D o F. El resultado puede depender de la escala de
                        notas de tu escuela.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Esta calculadora admite notas por puntos?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Si tu clase usa puntos, calcula tu nota dividiendo
                        los puntos obtenidos entre los puntos totales posibles
                        y multiplica por 100.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculo la nota que necesito en el examen final?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Ingresa tu nota actual, tu nota objetivo y el peso del
                        examen final. La calculadora estima el puntaje que
                        necesitas en el final para alcanzar tu meta.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Qué es una nota ponderada?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Una nota ponderada significa que algunas evaluaciones o
                        exámenes cuentan más que otros. Por ejemplo, un examen
                        final con peso del 40% afecta tu nota más que una tarea
                        con peso del 10%.
                      </p>
                    </details>

                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Las escalas de calificación son iguales en todas las escuelas?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        No. Colegios, universidades y profesores pueden usar
                        sistemas distintos de porcentaje, nota en letra o GPA.
                        Consulta siempre el programa del curso para la escala
                        oficial.
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