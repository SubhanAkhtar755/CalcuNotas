import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import EasyGradeCalculatorLab from "@/app/components/EasyGradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calificador Rápido | Tabla de Calificaciones para Profesores Gratis",
  description:
    "Genera una tabla de calificaciones completa desde el total de preguntas. Ve respuestas correctas, incorrectas, porcentajes y notas con letras al instante. Gratis para profesores y estudiantes.",
  keywords: [
    "calificador rapido",
    "tabla de calificaciones para profesores",
    "calculadora de porcentaje de calificacion",
    "generador de tabla de notas",
    "cuantas puedo fallar y pasar",
    "calculadora de respuestas correctas e incorrectas",
    "calificador de examenes para maestros",
    "convertir respuestas incorrectas a porcentaje",
  ],

  alternates: {
    canonical: "https://calcunotas.com/calificador-rapido/",
    languages: {
      "es": "https://calcunotas.com/calificador-rapido/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/calificador-rapido/", // Spain
      "es-MX": "https://calcunotas.com/calificador-rapido/", // Mexico
      "es-AR": "https://calcunotas.com/calificador-rapido/", // Argentina
      "es-CO": "https://calcunotas.com/calificador-rapido/", // Colombia
      "es-CL": "https://calcunotas.com/calificador-rapido/", // Chile
      "es-PE": "https://calcunotas.com/calificador-rapido/", // Peru
      "es-VE": "https://calcunotas.com/calificador-rapido/", // Venezuela
      "es-EC": "https://calcunotas.com/calificador-rapido/", // Ecuador
      "es-BO": "https://calcunotas.com/calificador-rapido/", // Bolivia
      "es-PY": "https://calcunotas.com/calificador-rapido/", // Paraguay
      "es-UY": "https://calcunotas.com/calificador-rapido/", // Uruguay
      "es-GT": "https://calcunotas.com/calificador-rapido/", // Guatemala
      "es-CU": "https://calcunotas.com/calificador-rapido/", // Cuba
      "es-DO": "https://calcunotas.com/calificador-rapido/", // Dominican Republic
      "es-HN": "https://calcunotas.com/calificador-rapido/", // Honduras
      "es-SV": "https://calcunotas.com/calificador-rapido/", // El Salvador
      "es-NI": "https://calcunotas.com/calificador-rapido/", // Nicaragua
      "es-PA": "https://calcunotas.com/calificador-rapido/", // Panama
      "es-CR": "https://calcunotas.com/calificador-rapido/", // Costa Rica
    },
  },

};

export default function CalificadorRapidoPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Calificador Rápido
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calificador Rápido
          </h1>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            El calificador rápido gratuito para{" "}
            <a href="/calculadora-profesores/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
              profesores y estudiantes
            </a>. Ingresa el número total de preguntas y genera una tabla de calificaciones completa con respuestas correctas, incorrectas, porcentajes y notas con letras.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Respuestas correctas e incorrectas",
              "Porcentajes de calificación",
              "Notas con letras",
              "Escala con más y menos",
              "Tabla para profesores",
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
          <EasyGradeCalculatorLab />
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
                  Calificador Rápido para Profesores y Estudiantes
                </h2>

                <p className="text-gray-700 leading-8">
                  Este calificador rápido te ayuda a generar una tabla de calificaciones completa a partir del número total de preguntas de un quiz, examen, hoja de trabajo o tarea. En lugar de calcular cada puntaje manualmente, ingresa el total de preguntas y ve al instante las respuestas correctas, incorrectas, porcentajes y notas con letras.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Los profesores pueden usarlo mientras califican exámenes o crean tablas de puntaje rápidas. Los estudiantes también pueden usarlo para estimar su{" "}
                  <a href="/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                    nota en el examen
                  </a>, ver cuántas preguntas fallaron y entender cómo cada respuesta incorrecta afecta el porcentaje final.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* QUE ES */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es un Calificador Rápido?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Un calificador rápido es un generador simple de tablas de calificación. Convierte puntajes de exámenes en porcentajes y notas con letras comparando las respuestas correctas con el total de preguntas.
                  </p>

                  <p>
                    Por ejemplo, si un examen tiene 20 preguntas, el calificador puede mostrar el porcentaje para 20 correctas, 19 correctas, 18 correctas, y así sucesivamente. Esto le da al profesor una tabla lista para cada puntaje posible.
                  </p>

                  <p>
                    La herramienta es especialmente útil cuando se califican varios exámenes con el mismo número de preguntas. En lugar de dividir cada puntaje por el total una y otra vez, el profesor puede usar una sola tabla y calificar más rápido con menos errores.
                  </p>
                </div>
              </section>

              {/* COMO USAR */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo Usar el Calificador Rápido
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Usar el calificador es simple. Ingresa el total de preguntas del examen, elige tus opciones de calificación y la herramienta generará una tabla de notas completa.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa el Total de Preguntas
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Escribe el número de preguntas, problemas o puntos posibles del quiz, examen, hoja de trabajo o tarea.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Revisa Correctas e Incorrectas
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La tabla muestra cuántas respuestas son correctas e incorrectas para cada puntaje posible.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ve los Porcentajes de Calificación
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Cada fila muestra el porcentaje de calificación para no tener que calcular los puntajes manualmente.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Usa la Nota con Letra
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa la nota con letra para marcar rápidamente los exámenes, quizzes y tareas de los estudiantes.
                    </p>
                  </div>
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula del Calificador Rápido
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  El calificador rápido usa una fórmula de porcentaje básica. Primero, resta las respuestas incorrectas del total de preguntas para encontrar las correctas. Luego divide las correctas por el total de preguntas y multiplica por 100.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Respuestas Correctas = Total de Preguntas − Respuestas Incorrectas
                </div>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Porcentaje de Calificación = (Respuestas Correctas ÷ Total de Preguntas) × 100
                </div>

                <p className="text-gray-700 leading-8">
                  Esta fórmula funciona para la mayoría de quizzes, pruebas de ortografía, hojas de práctica, revisiones de tareas, evaluaciones de aula y exámenes de opción múltiple.
                </p>
              </section>

              {/* EJEMPLO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo del Calificador Rápido
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Supón que un quiz tiene 20 preguntas. Si un estudiante falla 3 preguntas, respondió correctamente 17. El porcentaje se calcula así:
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  (17 ÷ 20) × 100 = 85%
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    En este ejemplo, el estudiante obtuvo <strong>85%</strong>. En muchas escalas de calificación comunes, el 85% corresponde a una nota B, pero la nota exacta con letra depende de la escala del colegio o del profesor.
                  </p>
                </div>
              </section>

              {/* TABLA DE MUESTRA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Tabla de Calificación de Muestra
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Una tabla de calificación muestra todos los puntajes posibles para un examen. Aquí hay un ejemplo simple para un quiz de 10 preguntas.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Respuestas Incorrectas</th>
                        <th className="px-5 py-4 text-left font-bold">Respuestas Correctas</th>
                        <th className="px-5 py-4 text-left font-bold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-bold">Nota con Letra</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">0</td>
                        <td className="px-5 py-4 text-gray-700">10</td>
                        <td className="px-5 py-4 text-gray-700">100%</td>
                        <td className="px-5 py-4 text-gray-700">A</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">1</td>
                        <td className="px-5 py-4 text-gray-700">9</td>
                        <td className="px-5 py-4 text-gray-700">90%</td>
                        <td className="px-5 py-4 text-gray-700">A</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">2</td>
                        <td className="px-5 py-4 text-gray-700">8</td>
                        <td className="px-5 py-4 text-gray-700">80%</td>
                        <td className="px-5 py-4 text-gray-700">B</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">3</td>
                        <td className="px-5 py-4 text-gray-700">7</td>
                        <td className="px-5 py-4 text-gray-700">70%</td>
                        <td className="px-5 py-4 text-gray-700">C</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">4</td>
                        <td className="px-5 py-4 text-gray-700">6</td>
                        <td className="px-5 py-4 text-gray-700">60%</td>
                        <td className="px-5 py-4 text-gray-700">D</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">5</td>
                        <td className="px-5 py-4 text-gray-700">5</td>
                        <td className="px-5 py-4 text-gray-700">50%</td>
                        <td className="px-5 py-4 text-gray-700">F</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* POR QUE PROFESORES */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Por Qué los Profesores Usan un Calificador Rápido
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Los profesores suelen calificar muchos exámenes al mismo tiempo. Cuando cada examen tiene el mismo número de preguntas, una tabla de calificación rápida hace el proceso más ágil. El profesor puede ver el número de respuestas incorrectas y encontrar el porcentaje correspondiente.
                  </p>

                  <p>
                    Es útil para quizzes diarios, pruebas de ortografía, hojas de trabajo de matemáticas, revisiones de lectura, exámenes de ciencias, quizzes de vocabulario y tareas de repaso. Mantiene la calificación consistente y reduce las posibilidades de errores de cálculo.
                  </p>

                  <p>
                    El calificador rápido también es útil cuando los profesores necesitan explicar las notas a los estudiantes. Una tabla clara muestra exactamente cómo se calculó el puntaje y cómo cada respuesta incorrecta cambió el resultado final.
                  </p>
                </div>
              </section>

              {/* CALIFICADOR VS MANUAL */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Calificador Rápido vs Calificación Manual
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Calificación Manual
                    </h3>
                    <p className="text-gray-700 leading-8">
                      La calificación manual requiere dividir el número de respuestas correctas por el total de preguntas para cada estudiante. Esto puede ser lento cuando se califica a toda una clase.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Tabla del Calificador Rápido
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Un calificador rápido crea una tabla ya preparada para que el profesor pueda relacionar rápidamente las respuestas incorrectas con los porcentajes y las notas con letras.
                    </p>
                  </div>
                </div>
              </section>

              {/* ESCALA DE LETRAS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Escala de Notas con Letras Más Común
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las notas con letras pueden variar según el colegio, el profesor, el distrito o el país. La tabla a continuación muestra una escala de calificación común basada en porcentajes para referencia rápida.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-bold">Nota con Letra</th>
                        <th className="px-5 py-4 text-left font-bold">Significado</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">90% - 100%</td>
                        <td className="px-5 py-4 text-gray-700">A</td>
                        <td className="px-5 py-4 text-gray-700">Excelente</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">80% - 89%</td>
                        <td className="px-5 py-4 text-gray-700">B</td>
                        <td className="px-5 py-4 text-gray-700">Bien</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">70% - 79%</td>
                        <td className="px-5 py-4 text-gray-700">C</td>
                        <td className="px-5 py-4 text-gray-700">Regular</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">60% - 69%</td>
                        <td className="px-5 py-4 text-gray-700">D</td>
                        <td className="px-5 py-4 text-gray-700">Necesita mejorar</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Menos del 60%</td>
                        <td className="px-5 py-4 text-gray-700">F</td>
                        <td className="px-5 py-4 text-gray-700">Reprobado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* MAS Y MENOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Notas con Más y Menos
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Algunos salones usan notas con más y menos, como A−, B+ o C+. Esto ofrece un resultado de calificación más detallado que una escala simple de A, B, C, D o F.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Escala Básica</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa notas simples con letras como A, B, C, D y F.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Escala con Más y Menos</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Agrega más detalle con notas como A−, B+, B− y C+.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Escala Personalizada</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Algunos colegios usan sus propios criterios de calificación, así que siempre verifica la política oficial.
                    </p>
                  </div>
                </div>
              </section>

              {/* CORRECTAS VS INCORRECTAS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Respuestas Correctas vs Respuestas Incorrectas
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  El calificador rápido puede trabajar tanto con respuestas correctas como incorrectas. Ambos métodos llevan al mismo porcentaje siempre que el total de preguntas sea correcto.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Usando Respuestas Incorrectas
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Los profesores suelen contar primero las preguntas falladas. La calculadora resta las respuestas incorrectas del total de preguntas para encontrar las correctas.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Usando Respuestas Correctas
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Los estudiantes suelen saber cuántas respuestas acertaron. La calculadora divide las respuestas correctas por el total de preguntas para encontrar el porcentaje.
                    </p>
                  </div>
                </div>
              </section>

              {/* DECIMALES Y REDONDEO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Decimales y Redondeo en las Tablas de Calificación
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Algunos puntajes producen porcentajes con decimales. Por ejemplo, 17 correctas de 23 preguntas es igual al 73.91%. Los profesores pueden mostrar decimales, redondear al número entero más cercano o seguir las reglas de redondeo del colegio.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    Consejo Simple de Redondeo
                  </h3>
                  <p className="text-gray-700 leading-8">
                    Usa decimales cuando necesites puntajes exactos. Usa porcentajes redondeados cuando quieras una tabla de calificación más limpia para la revisión rápida en clase. Siempre sigue la política de calificación de tu colegio si existe una requerida.
                  </p>
                </div>
              </section>

              {/* CASOS DE USO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué Puedes Calificar con un Calificador Rápido?
                </h2>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Quizzes</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Califica rápidamente quizzes cortos y revisiones de aula.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Exámenes</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Genera tablas completas para exámenes de capítulo, unidad y finales.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Tareas</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Calcula notas para hojas de trabajo, tareas y actividades de práctica.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Pruebas de Ortografía</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Convierte palabras incorrectas en porcentajes y notas con letras.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Hojas de Matemáticas</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Califica problemas, ejercicios y preguntas de práctica con precisión.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">Exámenes de Práctica</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ayuda a los estudiantes a estimar puntajes antes de los exámenes oficiales.
                    </p>
                  </div>
                </div>
              </section>

              {/* BENEFICIOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ventajas de Usar un Calificador Rápido
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Ahorra Tiempo al Profesor
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Las tablas de calificación permiten revisar exámenes rápidamente sin repetir los mismos cálculos.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Reduce Errores de Cálculo
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La herramienta calcula los porcentajes automáticamente, lo que ayuda a evitar errores manuales.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Muestra Todos los Puntajes
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Una tabla completa permite ver cada puntaje posible, desde respuestas perfectas hasta cero correctas.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Ayuda a los Estudiantes a Entender sus Notas
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Los estudiantes pueden ver cómo cada pregunta incorrecta cambia el porcentaje y la nota con letra final.
                    </p>
                  </div>
                </div>
              </section>

              {/* ERRORES COMUNES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores Comunes al Usar un Calificador Rápido
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Ingresar un número total de preguntas incorrecto.</li>
                    <li>• Confundir respuestas correctas con respuestas incorrectas.</li>
                    <li>• Usar una escala de notas que no corresponde a la política del colegio.</li>
                    <li>• Redondear porcentajes de manera diferente para distintos estudiantes.</li>
                    <li>• Olvidar las reglas de preguntas de bonificación o puntos extra.</li>
                    <li>• Tratar tareas con peso ponderado como exámenes simples por preguntas.</li>
                  </ul>
                </div>
              </section>

              {/* CONSEJOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos para Calificar más Rápido y con Más Justicia
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Confirma el Total de Preguntas Primero
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Asegúrate de que el conteo total de preguntas sea correcto antes de usar la tabla. Una pregunta de diferencia puede cambiar todos los porcentajes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Usa una Escala para Toda la Clase
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Aplica la misma escala de calificación y regla de redondeo a todos los estudiantes para una calificación consistente.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Define las Reglas de Decimales Claramente
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Decide si mostrarás decimales exactos o puntajes redondeados antes de finalizar las notas.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Revisa los Puntos Extra por Separado
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Si la tarea incluye preguntas de bonificación, calcúlalas según la política de calificación de tu clase.
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
                      Profesores y estudiantes suelen tener preguntas sobre el calificador rápido, las tablas de calificación, las respuestas incorrectas, los puntajes en porcentaje y las notas con letras. Esta sección responde las dudas más comunes.
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Qué es un calificador rápido?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Un calificador rápido es una herramienta que crea una tabla de calificación a partir del total de preguntas. Muestra respuestas correctas, incorrectas, porcentajes y notas con letras.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo se calcula la nota a partir de respuestas incorrectas?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Resta las respuestas incorrectas del total de preguntas para encontrar las correctas. Luego divide las correctas por el total de preguntas y multiplica por 100.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Los profesores pueden usarlo para quizzes y exámenes?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Los profesores pueden usarlo para quizzes, exámenes, hojas de trabajo, pruebas de ortografía, tareas y evaluaciones de aula.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿El calificador rápido muestra notas con letras?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. La calculadora puede mostrar notas con letras junto con los porcentajes, según la escala de calificación seleccionada.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Los estudiantes pueden usar un calificador rápido?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Los estudiantes pueden usarlo para estimar puntajes en exámenes, revisar resultados de quizzes de práctica y entender cómo las preguntas incorrectas afectan su nota final.
                      </p>
                    </details>

                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Todas las escalas de calificación son iguales?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        No. Los colegios, profesores y distritos pueden usar diferentes criterios de porcentaje, notas con más y menos, reglas de redondeo o políticas de calificación personalizadas.
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