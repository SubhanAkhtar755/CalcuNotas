import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";
import { FaEnvelope, FaGlobe } from "react-icons/fa";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Sobre Nosotros | CalcuNotas",
  description:
    "Conoce CalcuNotas, un sitio web gratuito de calculadoras educativas para calcular notas, GPA, nota final, nota semestral, calificación de exámenes y herramientas de calificación rápida.",
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
  alternates: {
    canonical: "https://calcunotas.com/sobre-nosotros/",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
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
      <section className="py-12">
        <div className="w-[min(1120px,94%)] mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

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