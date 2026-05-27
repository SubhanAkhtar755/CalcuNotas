import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GradeCalculatorLab from "@/app/components/GradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calculadora de Calificaciones | Calcula tu Nota del Curso Gratis",
  description:
    "Calcula tu nota actual del curso por porcentaje, letras o puntos con pesos por asignación. También calcula qué nota necesitas en el examen final para llegar a tu meta. Gratis y sin registro.",
  keywords: [
    "calculadora de calificaciones",
    "calcular nota actual del curso",
    "calculadora de promedio ponderado",
    "calculadora de notas con peso",
    "calcular calificacion por puntos",
    "calculadora de materias",
    "como calcular mi nota actual",
    "calculadora de notas universitarias",
  ],
 
 alternates: {
    canonical: "https://calcunotas.com/calculadora-clase/",
    languages: {
      "es": "https://calcunotas.com/calculadora-clase/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/calculadora-clase/", // Spain
      "es-MX": "https://calcunotas.com/calculadora-clase/", // Mexico
      "es-AR": "https://calcunotas.com/calculadora-clase/", // Argentina
      "es-CO": "https://calcunotas.com/calculadora-clase/", // Colombia
      "es-CL": "https://calcunotas.com/calculadora-clase/", // Chile
      "es-PE": "https://calcunotas.com/calculadora-clase/", // Peru
      "es-VE": "https://calcunotas.com/calculadora-clase/", // Venezuela
      "es-EC": "https://calcunotas.com/calculadora-clase/", // Ecuador
      "es-BO": "https://calcunotas.com/calculadora-clase/", // Bolivia
      "es-PY": "https://calcunotas.com/calculadora-clase/", // Paraguay
      "es-UY": "https://calcunotas.com/calculadora-clase/", // Uruguay
      "es-GT": "https://calcunotas.com/calculadora-clase/", // Guatemala
      "es-CU": "https://calcunotas.com/calculadora-clase/", // Cuba
      "es-DO": "https://calcunotas.com/calculadora-clase/", // Dominican Republic
      "es-HN": "https://calcunotas.com/calculadora-clase/", // Honduras
      "es-SV": "https://calcunotas.com/calculadora-clase/", // El Salvador
      "es-NI": "https://calcunotas.com/calculadora-clase/", // Nicaragua
      "es-PA": "https://calcunotas.com/calculadora-clase/", // Panama
      "es-CR": "https://calcunotas.com/calculadora-clase/", // Costa Rica
    },
  },

};

export default function CalculadoraClasePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Calculadora de calificaciones de clase
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de calificaciones de clase
          </h1>

          <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-5">
            Usa esta{" "}
            <a href="/calculadora-de-notas/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
              calculadora de calificaciones
            </a>{" "}
            para calcular tu nota actual del curso por porcentaje, letras o puntos. Agrega tus evaluaciones, ingresa la nota y el peso, y obtén tu calificación general al instante.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Calificaciones en porcentaje",
              "Notas con letras",
              "Calificaciones por puntos",
              "Promedio ponderado",
              "Nota requerida en el final",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-[13px] font-bold shadow-sm"
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

            {/* INTRO */}
            <section className="p-7 md:p-9 border-b border-gray-200">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-[32px] font-black tracking-[-0.04em] mb-4">
                  Calculadora de Calificaciones para Nota Actual, Promedio Ponderado y Examen Final
                </h2>

                <p className="text-gray-700 leading-8">
                  Esta{" "}
                  <a href="/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                    calculadora
                  </a>{" "}
                  ayuda a los estudiantes a calcular su nota actual en el curso usando porcentajes, notas con letras, puntos y pesos por asignación. Puedes agregar tareas, quizzes, exámenes, proyectos, participación y el examen final para estimar tu calificación general en el curso.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Es útil cuando tu profesor usa calificación ponderada, por puntos o por categorías. En lugar de adivinar tu promedio, ingresa tus notas y pesos para ver dónde estás parado y qué puntaje puedes necesitar en futuras tareas o en el examen final.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* COMO USAR */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo Usar la Calculadora de Calificaciones
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Usar la calculadora es simple. Elige cómo se ingresan las notas, agrega cada evaluación, ingresa el puntaje y el peso, y la calculadora estimará tu nota actual en el curso.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Elige el Tipo de Calificación
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Selecciona porcentaje, nota con letra o puntos según cómo tu profesor registra los puntajes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Agrega Tareas y Exámenes
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Agrega tareas, quizzes, pruebas, proyectos, laboratorios, participación o cualquier otro ítem calificado.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa Nota y Peso
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Escribe tu puntaje y cuánto cuenta ese ítem en la calificación final del curso.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ve tu Nota General
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La calculadora combina tus puntajes y pesos para mostrar tu nota actual en el curso al instante.
                    </p>
                  </div>
                </div>
              </section>

              {/* QUE ES */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es una Calculadora de Calificaciones?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    Una calculadora de calificaciones es una herramienta en línea que estima tu nota en el curso a partir de tareas, pruebas, quizzes, proyectos y exámenes completados. Te ayuda a entender tu progreso académico antes de que se publiquen las notas oficiales.
                  </p>

                  <p>
                    En algunos cursos, cada tarea cuenta por igual. En otros, evaluaciones más grandes como parciales, examen final y proyectos cuentan más que pequeñas tareas. Una calculadora de promedio ponderado maneja esas diferencias usando el peso de cada ítem calificado.
                  </p>

                  <p>
                    Esto la hace útil para estudiantes que quieren seguir sus notas actuales, planificar para una meta de calificación, calcular la nota necesaria en el examen final o ver cómo las futuras tareas pueden afectar el resultado final.
                  </p>
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula de la Calculadora de Calificaciones
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  La fórmula de promedio ponderado más común multiplica la nota de cada evaluación por su peso, suma todos los puntajes ponderados y divide por el peso total.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota = Suma de (Nota de Evaluación × Peso) ÷ Peso Total
                </div>

                <p className="text-gray-700 leading-8">
                  Si tu curso usa tareas con el mismo peso, la calculadora funciona como una calculadora de promedio simple. Si tu curso usa pesos distintos para tareas, exámenes, quizzes y proyectos, la fórmula ponderada da una nota más precisa del curso.
                </p>
              </section>

              {/* EJEMPLO PONDERADO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo de Cálculo de Promedio Ponderado
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Supón que tu curso incluye tareas, quizzes, un proyecto y un examen final. Cada categoría tiene un peso diferente en la nota final.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[720px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Evaluación</th>
                        <th className="px-5 py-4 text-left font-bold">Nota</th>
                        <th className="px-5 py-4 text-left font-bold">Peso</th>
                        <th className="px-5 py-4 text-left font-bold">Puntaje Ponderado</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Tareas</td>
                        <td className="px-5 py-4 text-gray-700">92%</td>
                        <td className="px-5 py-4 text-gray-700">20%</td>
                        <td className="px-5 py-4 text-gray-700">18.4</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Quizzes</td>
                        <td className="px-5 py-4 text-gray-700">85%</td>
                        <td className="px-5 py-4 text-gray-700">15%</td>
                        <td className="px-5 py-4 text-gray-700">12.75</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Proyecto</td>
                        <td className="px-5 py-4 text-gray-700">95%</td>
                        <td className="px-5 py-4 text-gray-700">25%</td>
                        <td className="px-5 py-4 text-gray-700">23.75</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Examen Final</td>
                        <td className="px-5 py-4 text-gray-700">80%</td>
                        <td className="px-5 py-4 text-gray-700">40%</td>
                        <td className="px-5 py-4 text-gray-700">32</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    Nota Final = 18.4 + 12.75 + 23.75 + 32 =
                    <strong> 86.9%</strong>. En muchas escalas comunes esto suele corresponder a una nota B, pero la nota exacta con letra depende de tu colegio o{" "}
                    <a href="/calculadora-profesores/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                      profesor
                    </a>.
                  </p>
                </div>
              </section>

              {/* FORMULA EXAMEN FINAL */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula para la Nota Requerida en el Examen Final
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Si tu examen final aún no ha ocurrido, puedes estimar el puntaje necesario para alcanzar tu meta en el curso. Necesitas tu nota actual, tu nota meta y el peso del examen final.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nota Requerida = (Nota Meta − Nota Actual × (1 − Peso del Final)) ÷ Peso del Final
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3">
                    Ejemplo del Examen Final
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Si tu nota actual es 84%, tu meta es 90% y el examen final vale el 30% del curso, la calculadora puede estimar el puntaje que necesitas en el examen final para llegar a esa meta. Esto te ayuda a saber si tu objetivo es realista antes de la semana de exámenes.
                  </p>
                </div>
              </section>

              {/* TIPOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Calificaciones por Porcentaje, Letra y Puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Distintos profesores usan diferentes métodos de calificación. Esta calculadora funciona con porcentajes, notas con letras y calificaciones por puntos.
                </p>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Calificaciones en Porcentaje
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa esta opción cuando tu nota se muestra como porcentaje, por ejemplo 88%, 92% o 76%.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Notas con Letras
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa esta opción cuando tu profesor da notas como A, B, C, D o F.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Calificaciones por Puntos
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Usa esta opción cuando tu puntaje se basa en puntos obtenidos sobre el total de puntos posibles.
                    </p>
                  </div>
                </div>
              </section>

              {/* FORMULA PUNTOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula de Calificación por Puntos
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Algunos cursos no usan pesos por asignación. En cambio, las notas se basan en el total de puntos obtenidos. En ese caso, divide los puntos obtenidos por el total de puntos posibles y multiplica por 100.
                </p>

                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Porcentaje de Calificación = Puntos Obtenidos ÷ Total de Puntos Posibles × 100
                </div>

                <p className="text-gray-700 leading-8">
                  Por ejemplo, si obtuviste 450 puntos de 500 posibles, tu nota sería 90%. Este método es común cuando cada tarea suma a un total general de puntos.
                </p>
              </section>

              {/* SIMPLE VS PONDERADO */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Promedio Simple vs Promedio Ponderado
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Promedio Simple
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Un promedio simple trata todas las notas por igual. Funciona mejor cuando todas las tareas, quizzes o exámenes tienen la misma importancia.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      Promedio Ponderado
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Un promedio ponderado da más importancia a exámenes mayores, proyectos o categorías que cuentan más en la nota final del curso.
                    </p>
                  </div>
                </div>
              </section>

              {/* ESCALA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Escala de Notas con Letras Más Común
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las escalas de notas con letras pueden variar según el colegio, el profesor, el distrito o el país. La tabla a continuación muestra una escala de calificación común basada en porcentajes.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Porcentaje</th>
                        <th className="px-5 py-4 text-left font-bold">Nota con Letra</th>
                        <th className="px-5 py-4 text-left font-bold">Rendimiento</th>
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

              {/* POR QUE USAR */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Por Qué los Estudiantes Usan una Calculadora de Calificaciones
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Seguir la Nota Actual del Curso
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ve tu nota estimada en el curso antes de que se publiquen las notas oficiales.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Planificar para una Nota Meta
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Descubre qué puntajes puedes necesitar en futuras tareas o exámenes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Entender las Categorías Ponderadas
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Aprende cómo las tareas, quizzes, exámenes y proyectos afectan tu nota final.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Reducir Errores de Cálculo
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Evita errores manuales cuando las notas tienen diferentes pesos.
                    </p>
                  </div>
                </div>
              </section>

              {/* ERRORES COMUNES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores Comunes al Calcular Calificaciones
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Olvidar incluir todas las tareas o exámenes calificados.</li>
                    <li>• Ingresar pesos que no suman correctamente.</li>
                    <li>• Mezclar puntos y porcentajes sin convertirlos.</li>
                    <li>• Tratar notas ponderadas como promedios simples.</li>
                    <li>• Usar el peso incorrecto del examen final.</li>
                    <li>• Asumir que todos los profesores usan la misma escala de notas con letras.</li>
                  </ul>
                </div>
              </section>

              {/* CONSEJOS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos para Mejorar tu Nota en el Curso
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Enfócate en las Tareas de Mayor Peso
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Los exámenes mayores y proyectos pueden mover tu nota más que pequeñas tareas, así que prioriza los ítems de mayor peso primero.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Actualiza tus Notas Regularmente
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Agrega nuevos puntajes tan pronto como se publiquen para que tu nota actual sea precisa.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Revisa los Puntajes Bajos
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Identifica las tareas donde perdiste más puntos y repasa esos temas antes del próximo examen.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Usa el Resultado de Nota Requerida en el Final
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Antes de la semana de exámenes, calcula el puntaje que necesitas para tener una meta de estudio clara y realista.
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
                      Los estudiantes suelen tener preguntas sobre notas actuales, promedios ponderados, calificación por puntos, puntajes de exámenes finales y escalas de notas con letras. Esta sección responde las dudas más comunes sobre el uso de una calculadora de calificaciones.
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculo mi nota actual?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Multiplica la nota de cada evaluación por su peso, suma los puntajes ponderados y divide por el peso total.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Qué es una nota ponderada?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Una nota ponderada significa que algunas tareas o exámenes cuentan más que otros. Por ejemplo, un examen final que vale el 40% afecta más tu nota que una tarea que vale el 10%.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Esta calculadora funciona con notas con letras?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Puedes usar notas con letras si tu clase usa A, B, C, D o F. El resultado depende de la escala de calificación de tu colegio o profesor.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Esta calculadora soporta calificaciones por puntos?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Si tu clase usa puntos, divide los puntos obtenidos por el total de puntos posibles y multiplica por 100 para obtener el porcentaje.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculo la nota que necesito en el examen final?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Ingresa tu nota actual, tu nota meta y el peso del examen final. La calculadora estima el puntaje que necesitas en el examen final para alcanzar tu objetivo.
                      </p>
                    </details>

                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Las escalas de calificación son iguales en todos lados?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        No. Colegios, universidades y profesores pueden usar diferentes sistemas de porcentaje, notas con letras o GPA. Siempre revisa el programa del curso para conocer la escala oficial.
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