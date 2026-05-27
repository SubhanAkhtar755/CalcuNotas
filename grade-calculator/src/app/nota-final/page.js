import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import FinalGradeCalculatorLab from "@/app/components/FinalGradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calculadora de Nota Final | ¿Qué Nota Necesito en el Examen Final?",
  description:
    "Calcula qué nota necesitas en el examen final para aprobar o alcanzar tu calificación deseada. Ingresa tu nota actual, meta y peso del examen final. Gratis y sin registro.",
  keywords: [
    "calculadora de nota final",
    "que nota necesito en el examen final",
    "calcular nota necesaria para aprobar",
    "calculadora examen final",
    "cuanto necesito en el final para pasar",
    "nota minima para aprobar examen final",
    "calcular nota final del curso",
    "calculadora de calificacion final",
  ],
 
   alternates: {
    canonical: "https://calcunotas.com/nota-final/",
    languages: {
      "es": "https://calcunotas.com/nota-final/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/nota-final/", // Spain
      "es-MX": "https://calcunotas.com/nota-final/", // Mexico
      "es-AR": "https://calcunotas.com/nota-final/", // Argentina
      "es-CO": "https://calcunotas.com/nota-final/", // Colombia
      "es-CL": "https://calcunotas.com/nota-final/", // Chile
      "es-PE": "https://calcunotas.com/nota-final/", // Peru
      "es-VE": "https://calcunotas.com/nota-final/", // Venezuela
      "es-EC": "https://calcunotas.com/nota-final/", // Ecuador
      "es-BO": "https://calcunotas.com/nota-final/", // Bolivia
      "es-PY": "https://calcunotas.com/nota-final/", // Paraguay
      "es-UY": "https://calcunotas.com/nota-final/", // Uruguay
      "es-GT": "https://calcunotas.com/nota-final/", // Guatemala
      "es-CU": "https://calcunotas.com/nota-final/", // Cuba
      "es-DO": "https://calcunotas.com/nota-final/", // Dominican Republic
      "es-HN": "https://calcunotas.com/nota-final/", // Honduras
      "es-SV": "https://calcunotas.com/nota-final/", // El Salvador
      "es-NI": "https://calcunotas.com/nota-final/", // Nicaragua
      "es-PA": "https://calcunotas.com/nota-final/", // Panama
      "es-CR": "https://calcunotas.com/nota-final/", // Costa Rica
    },
  },


};

export default function NotaFinalPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Calculadora de Nota Final
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Nota Final
          </h1>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta calculadora de nota final para saber qué puntaje necesitas en tu examen final y alcanzar tu{" "}
            <a href="/calculadora-clase/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
              calificación final del curso
            </a>. Ingresa tu nota actual, tu nota meta y el peso del examen final.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Nota requerida en el final",
              "Nota actual del curso",
              "Meta de calificación",
              "Opción de múltiples notas",
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
          <FinalGradeCalculatorLab />
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

            {/* INTRO */}
            <section className="p-7 md:p-9 border-b border-gray-200">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-4">
                  Calculadora de Nota Final para Planificar tu Examen
                </h2>

                <p className="text-gray-700 leading-8">
                  Esta calculadora de nota final te ayuda a descubrir qué puntaje necesitas en tu examen final para alcanzar la calificación que deseas. Solo necesitas tres datos: tu nota actual, tu nota meta y el porcentaje que representa el examen final en el curso.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Es especialmente útil antes de la semana de exámenes porque te da una meta concreta en lugar de adivinar. Ya sea que quieras aprobar el curso, mantener una buena nota o subir de calificación, esta herramienta te entrega una estimación rápida y práctica.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* QUE ES */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es una Calculadora de Nota Final?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Una calculadora de nota final es una herramienta que calcula el puntaje que necesitas en el examen final para obtener una calificación específica en el curso. Utiliza tu nota actual, tu nota meta y el peso del examen final.
                  </p>

                  <p>
                    La mayoría de los estudiantes la usan cuando el semestre está por terminar y el examen final es la última nota importante que queda. Si ya conoces tu nota actual, la calculadora puede mostrarte si tu meta es fácil, difícil o imposible según el peso del examen.
                  </p>

                  <p>
                    Por ejemplo, si tu examen final vale el 30% del curso, puede tener un impacto fuerte en tu calificación final. Si solo vale el 10%, tu nota actual tendrá más peso en el resultado. Por eso el porcentaje del examen final es uno de los valores más importantes en el cálculo.
                  </p>
                </div>
              </section>

              {/* COMO USAR */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo Usar la Calculadora de Nota Final
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  La calculadora es simple. Ingresa tu nota actual, tu nota meta y cuánto vale el examen final. El resultado te mostrará qué puntaje necesitas en el examen para alcanzar tu objetivo.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa tu Nota Actual
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Escribe tu calificación actual en el curso antes del examen final. Por lo general es la nota que aparece en el sistema de calificaciones de tu institución.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa tu Nota Meta
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Escribe la calificación final del curso que deseas obtener, por ejemplo 60%, 70%, 80% o cualquier meta personalizada.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Agrega el Peso del Examen Final
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ingresa qué porcentaje del curso representa el examen final. Por ejemplo, 20%, 30% o 40%.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Revisa el Puntaje Requerido
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La calculadora mostrará el puntaje que necesitas en el examen final para alcanzar tu calificación meta en el curso.
                    </p>
                  </div>
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula de la Calculadora de Nota Final
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  La nota requerida en el examen final se calcula comparando tu nota actual con tu nota meta, teniendo en cuenta el peso del examen final.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota Requerida = (Nota Meta − Nota Actual × (1 − Peso del Final)) ÷ Peso del Final
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Nota Actual
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Tu calificación en el curso antes de rendir el examen final.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Nota Meta
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La calificación final del curso que deseas alcanzar.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Peso del Final
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      El porcentaje del curso que depende del resultado del examen final.
                    </p>
                  </div>
                </div>
              </section>

              {/* EJEMPLO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo: ¿Qué Nota Necesito en el Examen Final?
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Supón que tu nota actual es 85%, tu meta es llegar al 90% y tu examen final vale el 30% del curso. La calculadora estima qué puntaje necesitas en el examen final.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Dato</th>
                        <th className="px-5 py-4 text-left font-bold">Valor</th>
                        <th className="px-5 py-4 text-left font-bold">Significado</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Nota Actual</td>
                        <td className="px-5 py-4 text-gray-700">85%</td>
                        <td className="px-5 py-4 text-gray-700">Calificación antes del examen final</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Nota Meta</td>
                        <td className="px-5 py-4 text-gray-700">90%</td>
                        <td className="px-5 py-4 text-gray-700">Calificación final deseada en el curso</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Peso del Examen Final</td>
                        <td className="px-5 py-4 text-gray-700">30%</td>
                        <td className="px-5 py-4 text-gray-700">Porcentaje que representa el examen final</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Nota Requerida en el Final</td>
                        <td className="px-5 py-4 text-gray-700">101.67%</td>
                        <td className="px-5 py-4 text-gray-700">Puntaje necesario para alcanzar el 90%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    En este ejemplo, la nota requerida en el examen final supera el 100%, lo que significa que alcanzar un 90% en el curso puede no ser posible sin puntos extra o una curva de calificación. La calculadora te ayuda a verlo con anticipación para que puedas ajustar tu meta o tu plan de estudio.
                  </p>
                </div>
              </section>

              {/* CALCULAR NOTA FINAL DEL CURSO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Calcular la Nota Final del Curso Después del Examen
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Si ya conoces tu puntaje en el examen final, también puedes estimar tu calificación final en el curso. Esto es útil cuando el examen ya terminó pero el profesor aún no ha publicado la nota oficial.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota Final del Curso = Nota del Examen × Peso del Final + Nota Actual × (1 − Peso del Final)
                </div>

                <p className="text-gray-700 leading-8">
                  Por ejemplo, si tu nota actual es 82%, tu puntaje en el examen final fue 90% y el examen vale el 25% del curso, la nota final se calcula combinando el 25% del puntaje del examen con el 75% de tu nota actual.
                </p>
              </section>

              {/* SIGNIFICADO DEL RESULTADO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué Significa el Resultado de tu Nota Final?
                </h2>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Si el Resultado es Menor al 100%
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Tu meta es alcanzable si obtienes al menos ese porcentaje en el examen final.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Si el Resultado Supera el 100%
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Tu meta puede ser imposible sin puntos extra, curva de calificación u otras notas adicionales.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Si el Resultado es Muy Bajo
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Puede que ya estés cerca de tu meta, por lo que el examen final tiene menos presión sobre tu resultado.
                    </p>
                  </div>
                </div>
              </section>

              {/* PESO DEL EXAMEN */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Por Qué Importa el Peso del Examen Final
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  El peso del examen final indica qué parte de tu calificación total depende de él. Un peso alto significa que el examen puede cambiar mucho tu nota. Un peso bajo significa que tu desempeño previo tiene más influencia en el resultado final.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Peso del Examen Final</th>
                        <th className="px-5 py-4 text-left font-bold">Impacto en la Nota</th>
                        <th className="px-5 py-4 text-left font-bold">Lo que Significa</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">10%</td>
                        <td className="px-5 py-4 text-gray-700">Impacto bajo</td>
                        <td className="px-5 py-4 text-gray-700">Tu nota actual tiene más peso en el resultado</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">20% - 30%</td>
                        <td className="px-5 py-4 text-gray-700">Impacto moderado</td>
                        <td className="px-5 py-4 text-gray-700">El examen puede mover visiblemente tu calificación</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">40% o más</td>
                        <td className="px-5 py-4 text-gray-700">Impacto alto</td>
                        <td className="px-5 py-4 text-gray-700">El examen final puede afectar fuertemente tu calificación final</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* NOTA ACTUAL VS META */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Nota Actual vs Nota Meta
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Nota Actual
                    </h3>

                    <p className="text-gray-700 leading-8">
                      Tu nota actual es la calificación en el curso antes del examen final. Puede incluir tareas, quizzes, proyectos,{" "}
                      <a href="/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                        pruebas
                      </a>{" "}
                      y otros trabajos ya entregados.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Nota Meta
                    </h3>

                    <p className="text-gray-700 leading-8">
                      Tu nota meta es la calificación final del curso que deseas obtener después del examen final. Los estudiantes suelen elegir una meta como aprobar el curso, mantener una buena nota o mejorar su promedio.
                    </p>
                  </div>
                </div>
              </section>

              {/* MULTIPLES NOTAS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Usar Múltiples Notas Antes del Examen Final
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Si aún no conoces tu nota actual, es posible que debas calcularla primero a partir de varias actividades. Suma tus tareas, quizzes, proyectos, pruebas y otras calificaciones para encontrar tu nota actual antes de usar la fórmula del examen final.
                </p>

                <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3">
                    Ejemplo
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Si las tareas valen 20%, los quizzes 15%, los proyectos 25% y el examen final 40%, calcula primero el 60% ya completado. Luego usa esa nota actual junto con tu nota meta y el peso del examen final.
                  </p>
                </div>
              </section>

              {/* QUIEN PUEDE USAR */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Quién Puede Usar Esta Calculadora de Nota Final?
                </h2>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Estudiantes</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Estima el puntaje necesario en el examen final y organiza tu plan de estudio con una meta concreta.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Docentes</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Explica escenarios del examen final y muestra a los alumnos cómo el peso del examen afecta su calificación.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Padres</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Comprende qué puntaje necesita un estudiante para alcanzar una meta de calificación final en el curso.
                    </p>
                  </div>
                </div>
              </section>

              {/* ERRORES COMUNES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores Comunes al Calcular la Nota Final
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Ingresar el peso del examen final como decimal en lugar de porcentaje.</li>
                    <li>• Establecer una nota meta demasiado alta para el peso del examen final.</li>
                    <li>• Confundir la nota actual con la calificación final del curso.</li>
                    <li>• Olvidar que algunos profesores aplican puntos extra o curvas de calificación.</li>
                    <li>• Usar una nota no oficial en lugar del valor más reciente del sistema de notas.</li>
                    <li>• Asumir que todas las materias usan la misma escala de calificación.</li>
                  </ul>
                </div>
              </section>

              {/* CONSEJOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos Antes de Rendir tu Examen Final
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Establece una Meta Realista
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa la calculadora para ver qué es posible. Si el puntaje requerido supera el 100%, elige una meta más alcanzable o pregunta sobre puntos extra.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Enfócate en los Temas Débiles
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Repasa los quizzes anteriores, las preguntas que fallaste y los capítulos difíciles antes de hacer una revisión general.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Estudia Según el Peso del Examen
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Si el examen final representa un porcentaje alto del curso, dedícale más tiempo de preparación que a actividades de menor peso.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Revisa tu Sistema de Notas Primero
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Asegúrate de que tu nota actual incluya todas las actividades calificadas recientemente antes de calcular el puntaje necesario en el examen final.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-gray-50 py-14 border-t -mx-7 md:-mx-9 -mb-9">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Preguntas Frecuentes
                    </h2>

                    <p className="text-gray-700 text-base leading-relaxed">
                      Los estudiantes suelen tener dudas sobre el puntaje del examen final, las notas meta, la calificación actual y el peso del examen. Esta sección responde las preguntas más comunes sobre el uso de una calculadora de nota final.
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculo la nota que necesito en el examen final?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Ingresa tu nota actual, tu nota meta y el peso del examen final. La calculadora te mostrará el puntaje que necesitas en el examen para alcanzar tu calificación deseada en el curso.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Qué significa el peso del examen final?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        El peso del examen final es el porcentaje de tu calificación total que proviene del examen final. Si el examen vale un 30%, significa que controla el 30% de tu nota final en el curso.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Qué pasa si el puntaje requerido supera el 100%?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Si el puntaje requerido es mayor al 100%, tu nota meta puede no ser alcanzable sin puntos extra, una curva de calificación o notas adicionales.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Esta calculadora puede decirme mi nota final del curso?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Si conoces tu puntaje en el examen final, tu nota actual y el peso del examen, puedes estimar tu calificación final en el curso después del examen.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Puedo usar calificaciones con letras en esta calculadora?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Puedes usar calificaciones con letras si las conviertes a valores porcentuales según la escala de calificación de tu institución o profesor.
                      </p>
                    </details>

                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Los resultados de la calculadora son siempre exactos?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        El resultado es una estimación basada en los datos que ingresas. Las notas oficiales pueden variar si tu profesor aplica redondeo, curvas, puntos extra, notas eliminadas o una política de calificación diferente.
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