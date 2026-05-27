import InvisibleFooter from "@/app/components/InvisibleFooter";
import InvisibleHeader from "@/app/components/InvisibleHeader";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Política de Privacidad | CalcuNotas",
  description:
    "Lee la Política de Privacidad de CalcuNotas para entender cómo manejamos la información cuando usas nuestra calculadora de notas, calculadora GPA, calculadora de nota final, calculadora de nota semestral y herramientas de calificación rápida.",
  keywords: [
    "política de privacidad",
    "política de privacidad calcunotas",
    "privacidad calculadora de notas",
    "privacidad calculadora gpa",
    "privacidad calculadora nota final",
    "privacidad calculadora nota semestral",
    "privacidad calificador rapido",
    "política de privacidad sitio web calculadora",
    "privacidad calculadora notas estudiantes",
  ],
  alternates: {
    canonical: "https://calcunotas.com/privacidad/",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-gray-500 mb-3">
            Inicio / Política de Privacidad
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Política de Privacidad
          </h1>

          <p className="max-w-[840px] text-gray-600 leading-8 text-[16px] md:text-[17px]">
            Esta Política de Privacidad explica cómo CalcuNotas maneja la
            información cuando usas nuestras calculadoras de notas en línea, calculadoras
            GPA, calculadoras de nota final, calculadoras de nota semestral,
            herramientas de calificación rápida y recursos educativos.
          </p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12">
        <div className="w-[min(1120px,94%)] mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

          {/* MAIN CONTENT */}
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-7 md:p-9">

            {/* UPDATED INFO */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
              <p className="text-gray-700 leading-8">
                <strong>Última actualización:</strong> Enero 2026
                <br />
                <strong>Aplica a:</strong>{" "}
                <a
                  href="https://calcunotas.com"
                  className="text-blue-600 underline hover:text-blue-700 transition"
                >
                  calcunotas.com
                </a>{" "}
                y todas las calculadoras, herramientas, páginas y recursos educativos
                disponibles en este sitio web.
                <br />
                <strong>Contacto:</strong>{" "}
                <a
                  href="mailto:info@calcunotas.com"
                  className="text-blue-600 underline hover:text-blue-700 transition"
                >
                  info@calcunotas.com
                </a>
              </p>
            </div>

            {/* 1 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                1. Quiénes Somos
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas es un sitio web de calculadoras educativas que ofrece
                herramientas gratuitas en línea para calcular notas, GPA, notas
                semestrales, puntajes de examen final, porcentajes de exámenes,
                notas ponderadas y tablas de calificación rápida.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Nuestro objetivo es ayudar a estudiantes, profesores, padres y educadores
                a estimar resultados académicos con mayor facilidad. Las herramientas están
                diseñadas únicamente para uso educativo e informativo.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                2. Alcance de Esta Política de Privacidad
              </h2>
              <p className="text-gray-700 leading-8">
                Esta Política de Privacidad aplica al uso de CalcuNotas,
                incluyendo páginas como calculadora de notas, calculadora GPA,
                calculadora de nota final, calculadora de nota semestral, calculadora
                de examen, calificador rápido y contenido educativo relacionado.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Al usar este sitio web, aceptas las prácticas descritas en esta
                Política de Privacidad. Si no estás de acuerdo, por favor no uses
                el sitio web ni sus herramientas de calculadora.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                3. Datos Ingresados en la Calculadora
              </h2>
              <p className="text-gray-700 leading-8">
                Nuestras calculadoras pueden pedirte que ingreses información como notas,
                porcentajes, pesos de tareas, créditos, peso del examen final, notas
                objetivo, total de preguntas, respuestas correctas o incorrectas.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Estos datos se usan para generar resultados directamente para tu comodidad.
                CalcuNotas no requiere que ingreses tu nombre, nombre de institución,
                número de estudiante, dirección u otra información de identidad personal
                para usar las calculadoras básicas.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Debes evitar ingresar información personal privada, sensible o confidencial
                en cualquier campo de la calculadora a menos que sea necesario y entiendas
                los riesgos de ingresar información en línea.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                4. Información que Podemos Recopilar
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                Podemos recopilar información limitada necesaria para operar, proteger
                y mejorar el sitio web. Esto puede incluir:
              </p>
              <ul className="space-y-3 text-gray-700 leading-8">
                <li>
                  • <strong>Información técnica:</strong> tipo de navegador,
                  tipo de dispositivo, sistema operativo, páginas visitadas, hora
                  aproximada de visita y datos generales de uso.
                </li>
                <li>
                  • <strong>Registros del servidor:</strong> registros estándar de
                  alojamiento como dirección IP, página solicitada, fecha, hora y
                  registros de errores para seguridad y confiabilidad.
                </li>
                <li>
                  • <strong>Preferencias locales:</strong> configuraciones guardadas
                  en tu navegador, como opciones seleccionadas de calculadora o
                  preferencias de visualización.
                </li>
                <li>
                  • <strong>Información de contacto:</strong> si nos envías un correo,
                  recibimos tu dirección de email y el contenido del mensaje para
                  poder responder a tu consulta.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                5. Información que No Recopilamos Intencionalmente
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                CalcuNotas está diseñado para ser simple y educativo. No recopilamos
                intencionalmente:
              </p>
              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• Números de estudiante ni registros oficiales de expedientes.</li>
                <li>• Credenciales de acceso escolar ni contraseñas de portales académicos.</li>
                <li>• Números de identificación gubernamental.</li>
                <li>• Datos de tarjetas de pago a través de páginas de calculadora.</li>
                <li>• Información personal sensible de forma intencional.</li>
                <li>• Información personal de menores de edad de forma consciente.</li>
              </ul>
            </section>

            {/* 6 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                6. Cómo Usamos la Información
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                Usamos información limitada para la operación del sitio web y el soporte
                al usuario. Los principales propósitos incluyen:
              </p>
              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• Operar y mostrar las herramientas de calculadora.</li>
                <li>• Mejorar la velocidad, usabilidad y rendimiento del sitio web.</li>
                <li>• Corregir errores y problemas técnicos.</li>
                <li>• Proteger el sitio web de abuso, spam o amenazas de seguridad.</li>
                <li>• Entender qué páginas y herramientas son útiles para los visitantes.</li>
                <li>• Responder a correos, preguntas o solicitudes de soporte.</li>
              </ul>
            </section>

            {/* 7 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                7. Cookies y Almacenamiento Local
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas puede usar cookies, almacenamiento local u otras tecnologías
                del navegador para recordar preferencias, mejorar la funcionalidad del
                sitio web, analizar el uso o dar soporte a funciones básicas del sitio.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                El almacenamiento local puede usarse para guardar preferencias o
                configuraciones de la calculadora en tu navegador. Generalmente puedes
                borrar las cookies y el almacenamiento local desde la configuración
                de tu navegador.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                8. Herramientas de Análisis y Rendimiento
              </h2>
              <p className="text-gray-700 leading-8">
                Podemos usar herramientas de análisis o rendimiento para entender cómo
                los visitantes usan el sitio web. Estas herramientas pueden ayudarnos a
                identificar las calculadoras más populares, mejorar la velocidad de
                carga, corregir errores y hacer el contenido educativo más útil.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Los datos de análisis generalmente se usan de forma agregada y no están
                destinados a identificar a estudiantes o usuarios individuales.
              </p>
            </section>

            {/* 9 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                9. Publicidad y Servicios de Terceros
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas puede mostrar publicidad o usar servicios de terceros en el
                futuro. Estos terceros pueden usar cookies o tecnologías similares para
                mostrar anuncios, medir el rendimiento o prevenir abusos.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Los servicios de terceros operan bajo sus propias políticas de privacidad.
                No controlamos cómo las plataformas de terceros procesan la información,
                por lo que debes revisar sus políticas cuando corresponda.
              </p>
            </section>

            {/* 10 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                10. Compartir Datos
              </h2>
              <p className="text-gray-700 leading-8">
                No vendemos información personal. La información limitada puede
                compartirse con proveedores de servicios que nos ayudan a operar el
                sitio web, como proveedores de alojamiento, herramientas de seguridad,
                proveedores de análisis, servicios de correo electrónico o servicios
                de infraestructura técnica.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                También podemos divulgar información si lo exige la ley, un proceso
                legal, o para proteger los derechos, la seguridad del sitio web,
                los usuarios u otras personas.
              </p>
            </section>

            {/* 11 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                11. Retención de Datos
              </h2>
              <p className="text-gray-700 leading-8">
                Los registros del servidor y los datos técnicos pueden conservarse
                durante un período limitado por motivos de seguridad, resolución de
                problemas y confiabilidad del sitio web. Los mensajes de correo
                electrónico pueden conservarse el tiempo necesario para responder a
                tu consulta o mantener registros de soporte.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Los resultados de la calculadora están destinados al uso educativo
                inmediato. Recomendamos guardar o registrar tus propios resultados
                si los necesitas más adelante.
              </p>
            </section>

            {/* 12 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                12. Seguridad de los Datos
              </h2>
              <p className="text-gray-700 leading-8">
                Usamos medidas técnicas y organizativas razonables para ayudar a
                proteger el sitio web y cualquier información limitada que procesamos.
                Sin embargo, ningún sitio web, servidor o transmisión por internet
                puede garantizarse completamente seguro.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Por tu propia seguridad, no ingreses registros escolares confidenciales,
                datos de acceso privados, información financiera ni información personal
                sensible en los campos de la calculadora.
              </p>
            </section>

            {/* 13 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                13. Privacidad de Menores
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas está destinado al uso educativo general. No recopilamos
                conscientemente información personal de menores de 13 años. Si crees
                que un menor nos ha proporcionado información personal, contáctanos
                para que podamos revisarla y eliminarla si corresponde.
              </p>
            </section>

            {/* 14 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                14. Tus Derechos de Privacidad
              </h2>
              <p className="text-gray-700 leading-8">
                Dependiendo de tu ubicación, puedes tener derechos para acceder,
                corregir, eliminar o restringir el uso de información personal.
                También puedes tener el derecho de oponerte a ciertos procesamientos
                o solicitar información sobre cómo se manejan tus datos.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Para hacer una solicitud de privacidad, contáctanos en{" "}
                <a
                  href="mailto:info@calcunotas.com"
                  className="text-blue-600 underline hover:text-blue-700 transition"
                >
                  info@calcunotas.com
                </a>
                .
              </p>
            </section>

            {/* 15 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                15. Enlaces a Terceros
              </h2>
              <p className="text-gray-700 leading-8">
                Nuestro sitio web puede contener enlaces a sitios web de terceros,
                recursos educativos, instituciones, calculadoras o referencias.
                No somos responsables de las prácticas de privacidad, el contenido
                ni las políticas de sitios web de terceros.
              </p>
            </section>

            {/* 16 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                16. Cambios en Esta Política de Privacidad
              </h2>
              <p className="text-gray-700 leading-8">
                Podemos actualizar esta Política de Privacidad de vez en cuando.
                La versión más reciente siempre estará disponible en esta página.
                Si se realizan cambios, la fecha de &quot;Última actualización&quot;
                puede ser revisada.
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                17. Contáctanos
              </h2>
              <p className="text-gray-700 leading-8">
                Si tienes preguntas sobre esta Política de Privacidad, el manejo de
                datos de la calculadora o las prácticas de privacidad del sitio web,
                contáctanos en{" "}
                <a
                  href="mailto:info@calcunotas.com"
                  className="text-blue-600 underline hover:text-blue-700 transition"
                >
                  info@calcunotas.com
                </a>
                .
              </p>
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