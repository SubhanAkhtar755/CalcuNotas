import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GPACalculatorLab from "@/app/components/GPACalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calculadora GPA (Escala 4.0) | Calcula tu GPA Semestral y Acumulado",
  description:
    "Usa esta calculadora GPA gratuita para calcular tu GPA semestral, GPA acumulado y GPA ponderado en línea. Ingresa calificaciones y créditos para obtener tu GPA en escala 4.0 al instante.",
  keywords: [
    "calculadora gpa",
    "calcular gpa",
    "gpa calculadora",
    "calculadora gpa escala 4.0",
    "calculadora gpa semestral",
    "calculadora gpa acumulado",
    "gpa ponderado calculadora",
    "calculadora gpa universidad",
    "promedio de calificaciones gpa",
    "calculadora de puntos de grado",
    "calcular promedio universitario gpa",
    "gpa en escala 4.0",
    "calculadora gpa horas credito",
    "herramienta gpa estudiante",
    "calcular gpa bachillerato",
  ],

 alternates: {
    canonical: "https://calcunotas.com/calculadora-gpa/",
    languages: {
      "es": "https://calcunotas.com/calculadora-gpa/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/calculadora-gpa/", // Spain
      "es-MX": "https://calcunotas.com/calculadora-gpa/", // Mexico
      "es-AR": "https://calcunotas.com/calculadora-gpa/", // Argentina
      "es-CO": "https://calcunotas.com/calculadora-gpa/", // Colombia
      "es-CL": "https://calcunotas.com/calculadora-gpa/", // Chile
      "es-PE": "https://calcunotas.com/calculadora-gpa/", // Peru
      "es-VE": "https://calcunotas.com/calculadora-gpa/", // Venezuela
      "es-EC": "https://calcunotas.com/calculadora-gpa/", // Ecuador
      "es-BO": "https://calcunotas.com/calculadora-gpa/", // Bolivia
      "es-PY": "https://calcunotas.com/calculadora-gpa/", // Paraguay
      "es-UY": "https://calcunotas.com/calculadora-gpa/", // Uruguay
      "es-GT": "https://calcunotas.com/calculadora-gpa/", // Guatemala
      "es-CU": "https://calcunotas.com/calculadora-gpa/", // Cuba
      "es-DO": "https://calcunotas.com/calculadora-gpa/", // Dominican Republic
      "es-HN": "https://calcunotas.com/calculadora-gpa/", // Honduras
      "es-SV": "https://calcunotas.com/calculadora-gpa/", // El Salvador
      "es-NI": "https://calcunotas.com/calculadora-gpa/", // Nicaragua
      "es-PA": "https://calcunotas.com/calculadora-gpa/", // Panama
      "es-CR": "https://calcunotas.com/calculadora-gpa/", // Costa Rica
    },
  },

};

export default function CalculadoraGPAPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-6 items-center">
            <div>
              <div className="text-sm text-[#667085] mb-3">
                Inicio / Calculadora GPA
              </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Calculadora GPA
              </h1>

              <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-6">
                Usa esta calculadora GPA gratuita para calcular tu GPA semestral,
                GPA acumulado y GPA ponderado al instante. Ingresa tus materias,
                calificaciones y horas crédito para calcular tu GPA en escala 4.0
                para bachillerato, preparatoria, universidad y posgrado.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "GPA Semestral",
                  "GPA Acumulado",
                  "GPA Ponderado",
                  "Escala 4.0",
                  "Horas Crédito",
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

            <div className="hidden lg:block">
              <div className="bg-white border border-gray-200 rounded-[18px] p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] text-center">
                <div className="w-[90px] h-[90px] mx-auto mb-4 rounded-[24px] bg-[#eff6ff] text-[#2563eb] grid place-items-center text-[36px] font-black">
                  4.0
                </div>

                <strong className="block text-[18px] mb-1">
                  Calculadora Escala GPA
                </strong>

                <span className="text-[#667085] text-[14px]">
                  Calcula tu GPA al instante en escala 4.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="pb-8 pt-8">
        <div className="w-[min(1120px,94%)] mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">
          <GPACalculatorLab />

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
                  Calculadora GPA para Semestral, Acumulado y Ponderado
                </h2>

                <p className="text-gray-700 leading-8">
                  Esta{" "}
                  <a
                    href="/calculadora-gpa/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    calculadora GPA
                  </a>{" "}
                  te ayuda a calcular tu GPA usando calificaciones de materias,
                  horas crédito y puntos de grado. Puedes usarla para el GPA
                  semestral, GPA acumulado, GPA ponderado, GPA universitario,
                  GPA de bachillerato y cálculos de GPA de preparatoria.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  En lugar de calcular los puntos de grado manualmente, ingresa
                  tus materias, selecciona tus calificaciones, agrega las horas
                  crédito y obtén tu GPA al instante. Esto facilita el seguimiento
                  del rendimiento académico, la planificación de calificaciones
                  futuras, el control de metas de becas y entender cómo cada
                  materia afecta tu GPA general.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* HOW TO USE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo Usar la Calculadora GPA
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Para calcular tu GPA, ingresa el nombre de cada materia, elige
                  la calificación en letra y agrega el número de horas crédito.
                  La calculadora convierte cada calificación en puntos de grado,
                  multiplica los puntos por los créditos y divide el total entre
                  todas las horas crédito.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Agrega tus Materias
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ingresa cada clase, asignatura o materia que deseas incluir
                      en el cálculo de tu GPA.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Selecciona Calificaciones en Letra
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Elige la calificación que obtuviste o esperas obtener,
                      como A, B+, B, C, D o F.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa las Horas Crédito
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Agrega el valor en créditos de cada materia. Una materia
                      con más créditos tiene mayor impacto en tu GPA.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Calcula tu GPA
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La calculadora muestra tu GPA al instante usando el total
                      de puntos de grado y las horas crédito ingresadas.
                    </p>
                  </div>
                </div>
              </section>

              {/* WHAT IS GPA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es el GPA?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    GPA significa Grade Point Average o Promedio de Puntos de
                    Grado. Es un número que resume tu rendimiento académico en
                    múltiples materias. En lugar de mostrar cada calificación por
                    separado, el GPA combina calificaciones y horas crédito en
                    un solo promedio.
                  </p>

                  <p>
                    La mayoría de escuelas, preparatorias y universidades usan
                    el GPA para determinar estatus académico, requisitos de
                    graduación, becas, admisiones, programas de honor y
                    evaluaciones de transferencia. Un GPA más alto generalmente
                    refleja un mejor rendimiento, aunque el significado exacto
                    puede variar según la institución y el sistema de calificación.
                  </p>

                  <p>
                    Muchas instituciones utilizan una escala GPA de 4.0, donde
                    una A equivale a 4.0 puntos de grado, una B a 3.0, una C a
                    2.0, una D a 1.0 y una F a 0.0. Algunas escuelas también
                    usan calificaciones con más/menos, GPA ponderado o escalas
                    de calificación personalizadas.
                  </p>
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula del GPA
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  El GPA se{" "}
                  <a
                    href="/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    calcula
                  </a>{" "}
                  convirtiendo cada calificación en puntos de grado, multiplicando
                  esos puntos por las horas crédito de la materia, sumando todos
                  los puntos de calidad y dividiendo entre el total de horas crédito.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  GPA = Total de Puntos de Calidad ÷ Total de Horas Crédito
                </div>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Puntos de Calidad = Puntos de Grado × Horas Crédito
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Puntos de Grado
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      El valor numérico de una calificación en letra, como 4.0
                      para A o 3.0 para B.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Horas Crédito
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      El peso académico de una materia. Más créditos significan
                      mayor impacto en el GPA.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Puntos de Calidad
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Puntos de grado multiplicados por horas crédito para cada
                      materia.
                    </p>
                  </div>
                </div>
              </section>

              {/* EXAMPLE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo de Cálculo de GPA
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Aquí tienes un ejemplo sencillo de GPA con cuatro materias. Cada
                  materia tiene una calificación en letra, valor en puntos de grado,
                  horas crédito y puntos de calidad.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[760px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Materia</th>
                        <th className="px-5 py-4 text-left font-bold">Calificación</th>
                        <th className="px-5 py-4 text-left font-bold">Puntos de Grado</th>
                        <th className="px-5 py-4 text-left font-bold">Créditos</th>
                        <th className="px-5 py-4 text-left font-bold">Puntos de Calidad</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Matemáticas</td>
                        <td className="px-5 py-4 text-gray-700">A</td>
                        <td className="px-5 py-4 text-gray-700">4.0</td>
                        <td className="px-5 py-4 text-gray-700">3</td>
                        <td className="px-5 py-4 text-gray-700">12.0</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Ciencias</td>
                        <td className="px-5 py-4 text-gray-700">B</td>
                        <td className="px-5 py-4 text-gray-700">3.0</td>
                        <td className="px-5 py-4 text-gray-700">4</td>
                        <td className="px-5 py-4 text-gray-700">12.0</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Español</td>
                        <td className="px-5 py-4 text-gray-700">A-</td>
                        <td className="px-5 py-4 text-gray-700">3.7</td>
                        <td className="px-5 py-4 text-gray-700">3</td>
                        <td className="px-5 py-4 text-gray-700">11.1</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Historia</td>
                        <td className="px-5 py-4 text-gray-700">B+</td>
                        <td className="px-5 py-4 text-gray-700">3.3</td>
                        <td className="px-5 py-4 text-gray-700">2</td>
                        <td className="px-5 py-4 text-gray-700">6.6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-gray-700 leading-8">
                    Total de Puntos de Calidad = 41.7 y Total de Horas Crédito =
                    12. GPA = 41.7 ÷ 12 = <strong>GPA de 3.48</strong>.
                  </p>
                </div>
              </section>

              {/* SEMESTER VS CUMULATIVE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  GPA Semestral vs GPA Acumulado
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  El{" "}
                  <a
                    href="/nota-semestral/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    GPA semestral
                  </a>{" "}
                  y el GPA acumulado usan calificaciones y horas crédito, pero
                  miden períodos distintos del rendimiento académico.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      GPA Semestral
                    </h3>
                    <p className="text-gray-700 leading-8">
                      El GPA semestral mide únicamente un período. Incluye las
                      materias, calificaciones y horas crédito de un solo semestre
                      o cuatrimestre.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      GPA Acumulado
                    </h3>
                    <p className="text-gray-700 leading-8">
                      El GPA acumulado combina todos los períodos completados.
                      Refleja tu rendimiento académico general a lo largo de
                      múltiples semestres.
                    </p>
                  </div>
                </div>
              </section>

              {/* CUMULATIVE FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula del GPA Acumulado
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Para calcular el GPA acumulado, combina los puntos de calidad
                  y las horas crédito de todos los semestres. Si ya conoces tu
                  GPA anterior y los créditos completados, puedes combinarlos con
                  los resultados del semestre actual.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  GPA Acumulado = Total de Puntos de Calidad de Todos los Semestres ÷ Total de Horas Crédito de Todos los Semestres
                </div>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nuevo GPA Acumulado = (GPA Anterior × Créditos Anteriores + Puntos de Calidad Actuales) ÷ Total de Créditos
                </div>

                <p className="text-gray-700 leading-8">
                  Esto es útil cuando quieres saber cómo el semestre actual puede
                  aumentar o reducir tu GPA general.
                </p>
              </section>

              {/* GPA SCALE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Escala GPA 4.0 Común
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las escalas GPA pueden variar según la escuela, el país y la
                  política de calificación. La siguiente tabla muestra una escala
                  4.0 común para estimaciones rápidas.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Calificación en Letra</th>
                        <th className="px-5 py-4 text-left font-bold">Puntos de Grado</th>
                        <th className="px-5 py-4 text-left font-bold">Significado General</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">A</td>
                        <td className="px-5 py-4 text-gray-700">4.0</td>
                        <td className="px-5 py-4 text-gray-700">Excelente</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">B</td>
                        <td className="px-5 py-4 text-gray-700">3.0</td>
                        <td className="px-5 py-4 text-gray-700">Bueno</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">C</td>
                        <td className="px-5 py-4 text-gray-700">2.0</td>
                        <td className="px-5 py-4 text-gray-700">Regular</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">D</td>
                        <td className="px-5 py-4 text-gray-700">1.0</td>
                        <td className="px-5 py-4 text-gray-700">Por debajo del promedio</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">F</td>
                        <td className="px-5 py-4 text-gray-700">0.0</td>
                        <td className="px-5 py-4 text-gray-700">Reprobado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* WEIGHTED GPA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  GPA Ponderado vs GPA No Ponderado
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  El GPA ponderado y el no ponderado miden el rendimiento académico,
                  pero el GPA ponderado otorga mayor valor a las materias más difíciles.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      GPA No Ponderado
                    </h3>

                    <p className="text-gray-700 leading-8">
                      Generalmente usa una escala estándar de 4.0. Una A vale 4.0
                      sin importar si la clase es regular, de honor, AP o IB.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      GPA Ponderado
                    </h3>

                    <p className="text-gray-700 leading-8">
                      El GPA ponderado puede agregar puntos de grado adicionales
                      para cursos avanzados como Honores, AP, IB o materias de
                      doble inscripción. Esto puede llevar el GPA ponderado por
                      encima de 4.0 en algunas escuelas.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-8 mt-6">
                  Dado que las reglas del GPA ponderado varían, siempre consulta
                  la escala oficial de tu institución antes de usar los resultados
                  para becas, admisiones o planificación académica.
                </p>
              </section>

              {/* CREDIT HOURS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Por Qué Son Importantes las Horas Crédito
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Las horas crédito funcionan como peso en el cálculo del GPA.
                  Una materia de 4 créditos afecta tu GPA más que una de 1 crédito
                  porque aporta más puntos de calidad.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Tipo de Materia</th>
                        <th className="px-5 py-4 text-left font-bold">Créditos de Ejemplo</th>
                        <th className="px-5 py-4 text-left font-bold">Impacto en GPA</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Laboratorio o materia práctica</td>
                        <td className="px-5 py-4 text-gray-700">1 crédito</td>
                        <td className="px-5 py-4 text-gray-700">Impacto menor</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Materia estándar</td>
                        <td className="px-5 py-4 text-gray-700">3 créditos</td>
                        <td className="px-5 py-4 text-gray-700">Impacto normal</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Materia mayor o intensiva</td>
                        <td className="px-5 py-4 text-gray-700">4 o más créditos</td>
                        <td className="px-5 py-4 text-gray-700">Mayor impacto</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* INCLUDED EXCLUDED */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué Materias Incluir en el GPA?
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  Para una estimación de GPA más precisa, incluye las materias
                  que cuentan para tu GPA. Algunas escuelas no cuentan las materias
                  de aprobado/reprobado, retiros, auditorías o calificaciones
                  incompletas de la misma manera.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Generalmente Incluidas
                    </h3>

                    <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                      <li>• Materias con calificación en letra</li>
                      <li>• Materias con créditos GPA</li>
                      <li>• Materias reprobadas si tu escuela las cuenta</li>
                      <li>• Materias repetidas según la política de la escuela</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      A Veces Excluidas
                    </h3>

                    <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                      <li>• Materias de aprobado/reprobado</li>
                      <li>• Materias con retiro oficial</li>
                      <li>• Calificaciones incompletas</li>
                      <li>• Materias auditadas o sin crédito</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* WHY USE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Por Qué los Estudiantes Usan una Calculadora GPA
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Seguimiento del Rendimiento Académico
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Consulta tu GPA antes de que se actualicen las boletas
                      oficiales de calificaciones.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Planificar Calificaciones Futuras
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Estima cómo las calificaciones próximas pueden afectar
                      tu GPA semestral o acumulado.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Metas de Becas
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Monitorea si tu GPA está cerca de los requisitos de beca
                      o programa de honor.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Reducir Errores de Cálculo
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Evita errores manuales al convertir calificaciones y
                      horas crédito.
                    </p>
                  </div>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores Comunes al Calcular el GPA
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Ingresar las horas crédito incorrectas para una materia.</li>
                    <li>• Usar una escala GPA que no coincide con la política de tu escuela.</li>
                    <li>• Confundir el GPA semestral con el GPA acumulado.</li>
                    <li>• Incluir materias de aprobado/reprobado o retiros cuando no cuentan.</li>
                    <li>• Tratar todas las materias igual cuando los créditos son diferentes.</li>
                    <li>• Olvidar las reglas de materias repetidas o de perdón de calificaciones.</li>
                  </ul>
                </div>
              </section>

              {/* TIPS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos para Mejorar tu GPA
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Enfócate en Materias de Alto Crédito
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Una buena calificación en una materia de 4 créditos puede
                      ayudar más a tu GPA que la misma calificación en una de 1 crédito.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Revisa tu GPA Cada Período
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Revisar tu GPA regularmente te ayuda a detectar problemas
                      a tiempo y planificar antes de que termine el semestre.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Atiende las Calificaciones Bajas Rápido
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Si una materia está bajando tu GPA, solicita ayuda, tutoría
                      o retroalimentación antes de que se publiquen las calificaciones finales.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Conoce las Reglas de tu Institución
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Las materias repetidas, los retiros, las calificaciones de
                      aprobado/reprobado y las clases ponderadas pueden cambiar
                      los resultados del GPA.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ SECTION */}
              <section className="bg-gray-50 py-14 border-t -mx-7 md:-mx-9 -mb-9">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                  {/* LEFT SIDE */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Preguntas Frecuentes
                    </h2>

                    <p className="text-gray-700 text-base leading-relaxed">
                      Los estudiantes suelen tener dudas sobre las fórmulas del GPA,
                      el GPA semestral, el GPA acumulado, las horas crédito, el GPA
                      ponderado y las escalas 4.0. Esta sección responde las preguntas
                      más comunes sobre el uso de una calculadora GPA.
                    </p>
                  </div>

                  {/* RIGHT SIDE - FAQ ACCORDION */}
                  <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculo mi GPA?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Convierte cada calificación en letra a puntos de grado,
                        multiplica por las horas crédito de la materia, suma todos
                        los puntos de calidad y divide entre el total de horas crédito.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cuál es la diferencia entre GPA semestral y GPA acumulado?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        El GPA semestral mide un período académico. El GPA acumulado
                        combina todos los semestres completados y muestra tu promedio
                        académico general.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Por qué afectan las horas crédito al GPA?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Las horas crédito funcionan como peso. Una materia de 4
                        créditos afecta el GPA más que una de 1 crédito porque
                        aporta más puntos de calidad.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Esta calculadora puede calcular el GPA acumulado?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Puedes calcular el GPA acumulado combinando el GPA y
                        créditos anteriores con las materias y calificaciones del
                        semestre actual.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Esta calculadora GPA admite GPA ponderado?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. El GPA ponderado se puede estimar cuando los cursos
                        avanzados como Honores, AP, IB o doble inscripción reciben
                        puntos de grado adicionales.
                      </p>
                    </details>

                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Las escalas GPA son iguales en todas las escuelas?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        No. Las escalas GPA pueden variar según la escuela,
                        universidad, país y programa. Siempre consulta la política
                        oficial de calificaciones de tu institución.
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