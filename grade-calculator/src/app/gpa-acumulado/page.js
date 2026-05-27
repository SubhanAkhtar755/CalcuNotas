import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GPACalculatorLab from "@/app/components/GPACalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Calculadora GPA Acumulado | Calcula tu GPA Acumulado Gratis",
  description:
    "Calcula tu GPA acumulado fácilmente con esta calculadora gratuita. Ingresa tu GPA anterior, créditos completados y calificaciones del semestre actual para obtener tu nuevo GPA acumulado.",
  keywords: [
    "calculadora gpa acumulado",
    "calcular gpa acumulado",
    "gpa acumulado calculadora",
    "como calcular el gpa acumulado",
    "calcular promedio acumulado universitario",
    "gpa acumulado universidad",
    "calculadora promedio acumulado",
    "nuevo gpa acumulado",
    "gpa total semestres",
    "calcular gpa de varios semestres",
    "promedio acumulado carrera universitaria",
    "calcular gpa historico",
    "gpa acumulado escala 4.0",
    "actualizar gpa acumulado",
    "gpa acumulado con creditos anteriores",
  ],
 
  alternates: {
    canonical: "https://calcunotas.com/gpa-acumulado/",
    languages: {
      "es": "https://calcunotas.com/gpa-acumulado/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/gpa-acumulado/", // Spain
      "es-MX": "https://calcunotas.com/gpa-acumulado/", // Mexico
      "es-AR": "https://calcunotas.com/gpa-acumulado/", // Argentina
      "es-CO": "https://calcunotas.com/gpa-acumulado/", // Colombia
      "es-CL": "https://calcunotas.com/gpa-acumulado/", // Chile
      "es-PE": "https://calcunotas.com/gpa-acumulado/", // Peru
      "es-VE": "https://calcunotas.com/gpa-acumulado/", // Venezuela
      "es-EC": "https://calcunotas.com/gpa-acumulado/", // Ecuador
      "es-BO": "https://calcunotas.com/gpa-acumulado/", // Bolivia
      "es-PY": "https://calcunotas.com/gpa-acumulado/", // Paraguay
      "es-UY": "https://calcunotas.com/gpa-acumulado/", // Uruguay
      "es-GT": "https://calcunotas.com/gpa-acumulado/", // Guatemala
      "es-CU": "https://calcunotas.com/gpa-acumulado/", // Cuba
      "es-DO": "https://calcunotas.com/gpa-acumulado/", // Dominican Republic
      "es-HN": "https://calcunotas.com/gpa-acumulado/", // Honduras
      "es-SV": "https://calcunotas.com/gpa-acumulado/", // El Salvador
      "es-NI": "https://calcunotas.com/gpa-acumulado/", // Nicaragua
      "es-PA": "https://calcunotas.com/gpa-acumulado/", // Panama
      "es-CR": "https://calcunotas.com/gpa-acumulado/", // Costa Rica
    },
  },

};

export default function GPAAcumuladoPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-6 items-center">
            <div>
              <div className="text-sm text-[#667085] mb-3">
                Inicio / GPA Acumulado
              </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Calculadora GPA Acumulado
              </h1>

              <p className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-6">
                Usa esta calculadora de GPA acumulado gratuita para combinar tu
                GPA anterior con el semestre actual y obtener tu nuevo promedio
                acumulado al instante. Ingresa tu GPA previo, los créditos ya
                completados y las materias del semestre en curso para calcular
                tu GPA acumulado en escala 4.0.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "GPA Acumulado",
                  "Múltiples Semestres",
                  "Escala 4.0",
                  "GPA Anterior + Actual",
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
                  ∑
                </div>

                <strong className="block text-[18px] mb-1">
                  GPA Acumulado
                </strong>

                <span className="text-[#667085] text-[14px]">
                  Todos tus semestres en un solo número
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
                  Calculadora de GPA Acumulado para Todos tus Semestres
                </h2>

                <p className="text-gray-700 leading-8">
                  Esta{" "}
                  <a
                    href="/gpa-acumulado/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    calculadora de GPA acumulado
                  </a>{" "}
                  te permite combinar el rendimiento de semestres anteriores con
                  el semestre actual para obtener tu GPA total de carrera. Ingresa
                  tu GPA previo junto con los créditos ya aprobados, agrega las
                  materias del semestre en curso y calcula al instante tu nuevo
                  promedio acumulado universitario.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Es útil para estudiantes universitarios que quieren saber cómo
                  el semestre actual afecta su historial académico completo, para
                  planificar si pueden alcanzar un GPA objetivo antes de graduarse,
                  o para verificar si cumplen los requisitos de becas, programas de
                  honor o admisiones a posgrado.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* WHAT IS CUMULATIVE GPA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué es el GPA Acumulado?
                </h2>

                <div className="space-y-5 text-gray-700 leading-8">
                  <p>
                    El GPA acumulado es el promedio de puntos de grado que incluye
                    todas las materias cursadas desde el inicio de tu carrera
                    universitaria o programa académico. A diferencia del GPA
                    semestral — que solo mide un período — el GPA acumulado refleja
                    tu rendimiento académico total a lo largo del tiempo.
                  </p>

                  <p>
                    Las universidades y colegios utilizan el GPA acumulado para
                    evaluar el estatus académico, la elegibilidad para becas, los
                    programas de honor, las solicitudes de posgrado y los requisitos
                    de graduación. Cuanto más créditos hayas completado, más estable
                    se vuelve tu GPA acumulado, ya que cada nuevo semestre tiene
                    menos peso relativo sobre el total.
                  </p>

                  <p>
                    Si tu GPA acumulado es bajo pero quieres mejorarlo, la clave
                    está en obtener buenas calificaciones en materias con muchos
                    créditos durante los semestres restantes. Usar esta calculadora
                    te ayuda a estimar cuánto puede subir tu GPA acumulado según
                    los resultados que obtengas.
                  </p>
                </div>
              </section>

              {/* HOW TO USE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Cómo Calcular tu GPA Acumulado
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Para calcular tu GPA acumulado, necesitas dos datos de semestres
                  anteriores: tu GPA previo y el total de créditos ya completados.
                  Luego ingresas las materias del semestre actual con sus calificaciones
                  y créditos.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa tu GPA Anterior
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Escribe el GPA acumulado que tenías al terminar el semestre
                      anterior. Lo encuentras en tu historial académico o boleta
                      oficial.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Ingresa los Créditos Anteriores
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Escribe el total de horas crédito que ya completaste antes
                      del semestre actual. Esto define el peso de tu historial
                      académico.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Agrega las Materias Actuales
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Ingresa cada materia del semestre en curso con su calificación
                      en letra y horas crédito correspondientes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Obtén tu Nuevo GPA Acumulado
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La calculadora combina todo y muestra tu nuevo GPA acumulado
                      al instante, incluyendo el impacto del semestre actual.
                    </p>
                  </div>
                </div>
              </section>

              {/* FORMULA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Fórmula del GPA Acumulado
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  El{" "}
                  <a
                    href="/calculadora-gpa/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    GPA acumulado
                  </a>{" "}
                  se obtiene sumando todos los puntos de calidad de los semestres
                  completados y dividiendo entre el total de horas crédito. Si ya
                  conoces tu GPA previo y los créditos anteriores, puedes usar la
                  fórmula simplificada.
                </p>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  GPA Acumulado = Total de Puntos de Calidad de Todos los Semestres ÷ Total de Horas Crédito de Todos los Semestres
                </div>

                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
                  Nuevo GPA Acumulado = (GPA Anterior × Créditos Anteriores + Puntos de Calidad Actuales) ÷ Total de Créditos
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5 mt-4">
                  <p className="text-gray-700 leading-8">
                    <strong>Puntos de Calidad Actuales</strong> = suma de (Puntos
                    de Grado × Créditos) de cada materia del semestre en curso.
                    Los Puntos de Grado son: A = 4.0, B = 3.0, C = 2.0, D = 1.0,
                    F = 0.0.
                  </p>
                </div>
              </section>

              {/* EXAMPLE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Ejemplo de Cálculo de GPA Acumulado
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Supongamos que terminaste el semestre anterior con un GPA
                  acumulado de 3.20 y 45 créditos completados. En el semestre
                  actual cursas cuatro materias.
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
                        <td className="px-5 py-4 text-gray-700">Cálculo</td>
                        <td className="px-5 py-4 text-gray-700">A</td>
                        <td className="px-5 py-4 text-gray-700">4.0</td>
                        <td className="px-5 py-4 text-gray-700">4</td>
                        <td className="px-5 py-4 text-gray-700">16.0</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Química</td>
                        <td className="px-5 py-4 text-gray-700">B+</td>
                        <td className="px-5 py-4 text-gray-700">3.3</td>
                        <td className="px-5 py-4 text-gray-700">3</td>
                        <td className="px-5 py-4 text-gray-700">9.9</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">Literatura</td>
                        <td className="px-5 py-4 text-gray-700">B</td>
                        <td className="px-5 py-4 text-gray-700">3.0</td>
                        <td className="px-5 py-4 text-gray-700">3</td>
                        <td className="px-5 py-4 text-gray-700">9.0</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">Economía</td>
                        <td className="px-5 py-4 text-gray-700">A-</td>
                        <td className="px-5 py-4 text-gray-700">3.7</td>
                        <td className="px-5 py-4 text-gray-700">3</td>
                        <td className="px-5 py-4 text-gray-700">11.1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5 space-y-3">
                  <p className="text-gray-700 leading-8">
                    <strong>Puntos de Calidad Actuales</strong> = 16.0 + 9.9 +
                    9.0 + 11.1 = <strong>46.0</strong>
                  </p>
                  <p className="text-gray-700 leading-8">
                    <strong>Créditos del Semestre Actual</strong> = 4 + 3 + 3 +
                    3 = <strong>13</strong>
                  </p>
                  <p className="text-gray-700 leading-8">
                    <strong>Nuevo GPA Acumulado</strong> = (3.20 × 45 + 46.0) ÷
                    (45 + 13) = (144.0 + 46.0) ÷ 58 = 190.0 ÷ 58 ={" "}
                    <strong>3.28 GPA Acumulado</strong>
                  </p>
                </div>
              </section>

              {/* SEMESTER VS CUMULATIVE */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Diferencia entre GPA Semestral y GPA Acumulado
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Muchos estudiantes confunden el{" "}
                  <a
                    href="/nota-semestral/"
                    className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline"
                  >
                    GPA semestral
                  </a>{" "}
                  con el GPA acumulado. Aunque ambos usan la misma fórmula base,
                  miden períodos de tiempo distintos.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      GPA Semestral
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Solo incluye las materias, calificaciones y créditos de un
                      único período académico. Puede subir o bajar significativamente
                      cada semestre sin afectar demasiado el historial total si ya
                      tienes muchos créditos acumulados.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-3">
                      GPA Acumulado
                    </h3>
                    <p className="text-gray-700 leading-8">
                      Incluye todos los semestres completados desde el inicio de
                      tu carrera. Es el número que aparece en tu expediente académico
                      oficial y el que las universidades y empleadores suelen
                      solicitar.
                    </p>
                  </div>
                </div>
              </section>

              {/* HOW MUCH CAN YOU RAISE GPA */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Cuánto Puedes Subir tu GPA Acumulado?
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Cuantos más créditos hayas completado, más difícil es mover el
                  GPA acumulado con un solo semestre. La siguiente tabla muestra
                  estimaciones de cuánto puede subir el GPA acumulado según los
                  créditos previos y el GPA del semestre actual.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[720px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left font-bold">Créditos Previos</th>
                        <th className="px-5 py-4 text-left font-bold">GPA Acumulado Actual</th>
                        <th className="px-5 py-4 text-left font-bold">GPA Este Semestre (15 cr.)</th>
                        <th className="px-5 py-4 text-left font-bold">Nuevo GPA Acumulado</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">30 créditos</td>
                        <td className="px-5 py-4 text-gray-700">2.80</td>
                        <td className="px-5 py-4 text-gray-700">4.0</td>
                        <td className="px-5 py-4 text-gray-700">3.14</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">60 créditos</td>
                        <td className="px-5 py-4 text-gray-700">2.80</td>
                        <td className="px-5 py-4 text-gray-700">4.0</td>
                        <td className="px-5 py-4 text-gray-700">3.00</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="px-5 py-4 text-gray-700">90 créditos</td>
                        <td className="px-5 py-4 text-gray-700">2.80</td>
                        <td className="px-5 py-4 text-gray-700">4.0</td>
                        <td className="px-5 py-4 text-gray-700">2.95</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 text-gray-700">120 créditos</td>
                        <td className="px-5 py-4 text-gray-700">2.80</td>
                        <td className="px-5 py-4 text-gray-700">4.0</td>
                        <td className="px-5 py-4 text-gray-700">2.92</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-8 mt-5">
                  Como se ve, con 30 créditos previos un semestre perfecto puede
                  subir el GPA acumulado más de 0.30 puntos. Con 120 créditos,
                  el mismo semestre perfecto solo lo sube alrededor de 0.12 puntos.
                </p>
              </section>

              {/* WHO USES */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Quién Necesita Calcular el GPA Acumulado?
                </h2>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Estudiantes Universitarios
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Para verificar el estatus académico, planificar semestres
                      futuros y monitorear metas antes de la graduación.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Solicitantes de Becas
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Muchas becas requieren un GPA acumulado mínimo de 3.0 o
                      3.5. Esta calculadora ayuda a saber si cumples el requisito.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Aspirantes a Posgrado
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Los programas de maestría y doctorado suelen revisar el GPA
                      acumulado de licenciatura como criterio de admisión.
                    </p>
                  </div>
                </div>
              </section>

              {/* INCLUDED EXCLUDED */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  ¿Qué Materias Cuentan para el GPA Acumulado?
                </h2>

                <p className="text-gray-700 leading-8 mb-5">
                  No todas las materias entran automáticamente en el GPA acumulado.
                  Las políticas varían por institución, por lo que siempre conviene
                  revisar el reglamento académico de tu universidad.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Generalmente Incluidas
                    </h3>

                    <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                      <li>• Materias con calificación en letra (A, B, C, D, F)</li>
                      <li>• Materias reprobadas si la escuela las cuenta</li>
                      <li>• Materias repetidas según la política institucional</li>
                      <li>• Cursos de crédito obligatorio del plan de estudios</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Frecuentemente Excluidas
                    </h3>

                    <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                      <li>• Materias de aprobado/reprobado sin calificación en letra</li>
                      <li>• Materias con retiro oficial (W)</li>
                      <li>• Calificaciones incompletas (I)</li>
                      <li>• Cursos auditados o sin valor en créditos</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section className="mb-12">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                    Errores Comunes al Calcular el GPA Acumulado
                  </h2>

                  <ul className="space-y-3 text-gray-700 leading-8">
                    <li>• Usar el GPA semestral anterior en lugar del GPA acumulado como punto de partida.</li>
                    <li>• Ingresar los créditos del último semestre en vez del total de créditos completados.</li>
                    <li>• Olvidar incluir materias reprobadas que sí cuentan según la política de la escuela.</li>
                    <li>• No considerar las reglas de repetición de materias o perdón de calificaciones.</li>
                    <li>• Confundir créditos con horas de clase semanales.</li>
                    <li>• Usar una escala GPA diferente a la que aplica tu institución.</li>
                  </ul>
                </div>
              </section>

              {/* TIPS */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
                  Consejos para Mejorar tu GPA Acumulado
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Actúa Temprano en tu Carrera
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Cuando tienes pocos créditos acumulados, cada semestre tiene
                      más peso. Subir el GPA es más fácil en los primeros años que
                      al final de la carrera.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Prioriza Materias de Alto Crédito
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Una buena calificación en una materia de 4 o 5 créditos
                      impacta más el GPA acumulado que sacar la misma nota en
                      una materia de 1 crédito.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Repite Materias Clave si es Posible
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Algunas universidades permiten reemplazar una calificación
                      baja al repetir la materia. Esto puede mejorar el GPA
                      acumulado si la política lo permite.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <h3 className="text-xl font-bold mb-3">
                      Monitorea tu Progreso Cada Semestre
                    </h3>

                    <p className="text-gray-700 leading-7 text-[15px]">
                      Calcula tu GPA acumulado al inicio de cada semestre para
                      saber exactamente qué calificaciones necesitas para alcanzar
                      tu meta académica.
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
                      Preguntas comunes sobre cómo calcular el GPA acumulado,
                      cuánto puede subir en un semestre, qué materias cuentan
                      y cómo usar el GPA anterior junto con los créditos completados.
                    </p>
                  </div>

                  {/* RIGHT SIDE - FAQ ACCORDION */}
                  <div className="bg-slate-800 rounded p-6 space-y-4 shadow-xl">

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cómo calculo mi GPA acumulado?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Multiplica tu GPA anterior por los créditos completados,
                        suma los puntos de calidad del semestre actual y divide
                        entre el total de créditos de todos los semestres.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cuánto puede subir mi GPA acumulado en un semestre?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Depende de cuántos créditos tengas acumulados. Con 30
                        créditos previos un semestre de 4.0 puede subirlo más de
                        0.30 puntos. Con 90 créditos, el mismo semestre lo sube
                        solo alrededor de 0.15 puntos.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿El GPA acumulado incluye materias reprobadas?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        En la mayoría de universidades sí, a menos que la
                        institución aplique políticas de repetición de materias o
                        perdón de calificaciones. Consulta el reglamento de tu
                        escuela para confirmarlo.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Necesito mi GPA anterior para usar esta calculadora?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        Sí. Para calcular el GPA acumulado necesitas tu GPA del
                        historial anterior y el total de créditos ya completados.
                        Los encuentras en tu boleta oficial o sistema académico.
                      </p>
                    </details>

                    <details className="group border-b border-slate-700 pb-4">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Cuál GPA piden las becas, el semestral o el acumulado?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        La mayoría de becas y programas de admisión solicitan el
                        GPA acumulado, ya que refleja el rendimiento académico
                        total y no solo de un período.
                      </p>
                    </details>

                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                        <h3>¿Es lo mismo GPA acumulado que promedio general?</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400">
                        En muchos países latinoamericanos se usa "promedio general"
                        en lugar de GPA acumulado, pero el concepto es similar:
                        un número que resume el rendimiento académico total de
                        todos los períodos completados.
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