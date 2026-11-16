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
  // FIX: comment claimed robots was added but the field was missing.
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de Privacidad | CalcuNotas",
    description:
      "Cómo CalcuNotas maneja la información en sus calculadoras de notas, GPA, nota final y calificación rápida.",
    url: "https://calcunotas.com/privacidad/",
    type: "website",
  },
  alternates: {
    canonical: "https://calcunotas.com/privacidad/",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Política de Privacidad | CalcuNotas",
    url: "https://calcunotas.com/privacidad/",
    description:
      "Política de Privacidad de CalcuNotas: cómo manejamos la información en nuestras calculadoras de notas, GPA, nota final y calificación rápida.",
    dateModified: "2026-01-01",
    isPartOf: {
      "@type": "WebSite",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Política de Privacidad",
        item: "https://calcunotas.com/privacidad/",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b px-8 from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">
          <div className="text-sm text-gray-500 mb-3">Inicio / Política de Privacidad</div>
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
      <section className="py-12 px-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-7 md:p-9">

            {/* UPDATED INFO */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
              <p className="text-gray-700 leading-8">
                <strong>Última actualización:</strong> Enero 2026
                <br />
                <strong>Aplica a:</strong>{" "}
                <a href="https://calcunotas.com" className="text-blue-600 underline hover:text-blue-700 transition">calcunotas.com</a>{" "}
                y todas las calculadoras, herramientas, páginas y recursos educativos
                disponibles en este sitio web.
                <br />
                <strong>Contacto:</strong>{" "}
                <a href="mailto:info@calcunotas.com" className="text-blue-600 underline hover:text-blue-700 transition">info@calcunotas.com</a>
              </p>
            </div>

            {/* PRIVACIDAD DE UN VISTAZO — now correctly right after UPDATED
                INFO and before section 1, as its comment specified */}
            <section className="mb-10">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                  Privacidad de un Vistazo
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  Queremos que sea fácil entender qué ocurre cuando utilizas CalcuNotas.
                  En términos sencillos, nuestras calculadoras están diseñadas para permitirte
                  introducir datos académicos y obtener cálculos sin necesidad de crear una
                  cuenta ni proporcionar información personal para las funciones básicas.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Lo que normalmente necesitas proporcionar</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Datos necesarios para el cálculo, como notas, porcentajes, créditos,
                      pesos de categorías, objetivos de calificación, preguntas correctas
                      o incorrectas y otros valores académicos introducidos por ti.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Lo que no necesitas para usar las calculadoras</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Para las funciones básicas no necesitas crear una cuenta ni introducir
                      un número de estudiante, contraseña escolar o expediente académico
                      oficial.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Información técnica</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Como ocurre con muchos sitios web, determinados proveedores técnicos
                      pueden procesar información como registros del servidor, datos del
                      navegador, dispositivo, dirección IP y datos necesarios para seguridad,
                      rendimiento y funcionamiento.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">No somos tu institución educativa</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      CalcuNotas no administra expedientes académicos, no controla las notas
                      oficiales de los estudiantes y no está conectado a los sistemas internos
                      de escuelas, colegios o universidades.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 1 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">1. Quiénes Somos</h2>
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
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">2. Alcance de Esta Política de Privacidad</h2>
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
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">3. Datos Ingresados en la Calculadora</h2>
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
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">4. Información que Podemos Recopilar</h2>
              <p className="text-gray-700 leading-8 mb-4">
                Podemos recopilar información limitada necesaria para operar, proteger
                y mejorar el sitio web. Esto puede incluir:
              </p>
              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• <strong>Información técnica:</strong> tipo de navegador, tipo de dispositivo, sistema operativo, páginas visitadas, hora aproximada de visita y datos generales de uso.</li>
                <li>• <strong>Registros del servidor:</strong> registros estándar de alojamiento como dirección IP, página solicitada, fecha, hora y registros de errores para seguridad y confiabilidad.</li>
                <li>• <strong>Preferencias locales:</strong> configuraciones guardadas en tu navegador, como opciones seleccionadas de calculadora o preferencias de visualización.</li>
                <li>• <strong>Información de contacto:</strong> si nos envías un correo, recibimos tu dirección de email y el contenido del mensaje para poder responder a tu consulta.</li>
              </ul>
            </section>

            {/* 5 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">5. Información que No Recopilamos Intencionalmente</h2>
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
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">6. Cómo Usamos la Información</h2>
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

            {/* PRIVACIDAD POR DISEÑO — now correctly right after section 6 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Privacidad por Diseño y Minimización de Datos
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas intenta seguir un principio sencillo: una calculadora académica
                debe solicitar principalmente los datos necesarios para realizar el cálculo.
                Por eso, las funciones básicas del sitio no requieren que proporciones
                información personal que no sea necesaria para obtener el resultado.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Por ejemplo, para calcular un porcentaje de examen normalmente necesitas
                introducir los puntos obtenidos y los puntos posibles, no tu nombre completo,
                número de estudiante o contraseña institucional. De manera similar, una
                calculadora de GPA necesita información relacionada con cursos, calificaciones
                y créditos, pero no necesita acceso a tu expediente académico oficial.
              </p>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Qué significa esto para ti</h3>
                <ul className="space-y-3 text-gray-700 leading-7">
                  <li>• Introduce únicamente los valores necesarios para realizar tu cálculo.</li>
                  <li>• No introduzcas contraseñas, credenciales escolares o información financiera.</li>
                  <li>• Evita introducir información personal sensible en campos que no la necesitan.</li>
                  <li>• Si un cálculo puede realizarse sin identificarte, no necesitas identificarte para ese cálculo.</li>
                </ul>
              </div>
            </section>

            {/* 7 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">7. Cookies y Almacenamiento Local</h2>
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

            {/* TIPOS DE COOKIES — now correctly right after section 7 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Tipos de Cookies y Tecnologías Similares
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Dependiendo de las funciones disponibles en el sitio, CalcuNotas o sus
                proveedores técnicos pueden utilizar cookies, almacenamiento local,
                etiquetas, identificadores u otras tecnologías similares. Estas tecnologías
                pueden tener diferentes finalidades.
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cookies o almacenamiento necesarios</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Pueden utilizarse para funciones esenciales del sitio, seguridad,
                    estabilidad, navegación o funcionamiento técnico de determinadas
                    herramientas.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Preferencias</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Pueden utilizarse para recordar determinadas opciones de funcionamiento
                    o preferencias que hayas seleccionado durante tu visita.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Análisis y rendimiento</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Si se utilizan herramientas de análisis, determinadas tecnologías pueden
                    ayudar a comprender cómo se utilizan las páginas y herramientas para
                    mejorar rendimiento, contenido y experiencia de usuario.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Publicidad</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Si CalcuNotas muestra publicidad de terceros, los proveedores de
                    publicidad pueden utilizar cookies o tecnologías similares según sus
                    propias políticas y configuraciones aplicables.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-8 mt-5">
                Puedes controlar o eliminar cookies y datos almacenados localmente desde
                la configuración de tu navegador. Desactivar determinadas tecnologías puede
                afectar algunas funciones del sitio.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">8. Herramientas de Análisis y Rendimiento</h2>
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
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">9. Publicidad y Servicios de Terceros</h2>
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

            {/* CÓMO PARTICIPAN LOS PROVEEDORES — now correctly right after section 9 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Cómo Pueden Participar los Proveedores de Terceros
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Para mantener un sitio web moderno, seguro y funcional, determinados servicios
                técnicos pueden ser proporcionados por empresas externas. Estos proveedores
                no reciben automáticamente acceso a toda la información de los usuarios;
                el tipo de información disponible depende del servicio que proporcionen.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Alojamiento e infraestructura</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Pueden proporcionar servidores, redes, almacenamiento y otros servicios
                    necesarios para entregar las páginas y herramientas de CalcuNotas.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Seguridad y protección</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Pueden ayudar a detectar tráfico abusivo, errores, ataques automatizados
                    y otras amenazas contra la disponibilidad o seguridad del sitio.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Análisis y rendimiento</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Cuando se utilizan, estas herramientas pueden proporcionar información
                    estadística sobre visitas, rendimiento y uso de páginas para ayudar a
                    mejorar el sitio.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Publicidad y monetización</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Si se muestran anuncios, los proveedores publicitarios pueden procesar
                    información relacionada con la entrega, medición y seguridad de la
                    publicidad de acuerdo con sus propias políticas.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-8 mt-5">
                Los proveedores externos pueden tener sus propias políticas de privacidad,
                tecnologías de cookies y mecanismos de control. Cuando corresponda, recomendamos
                revisar directamente la información de privacidad proporcionada por dichos
                servicios.
              </p>
            </section>

            {/* 10 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">10. Compartir Datos</h2>
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

            {/* PROCESAMIENTO INTERNACIONAL — now correctly right after section 10 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Procesamiento y Transferencias Internacionales
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas puede ser utilizado por personas de diferentes países. Algunos
                proveedores técnicos que participan en el funcionamiento de un sitio web
                pueden procesar información en servidores ubicados fuera del país desde
                el que accedes al sitio.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Cuando intervienen proveedores externos, el procesamiento de información
                puede estar sujeto a las leyes y normas de las jurisdicciones donde dichos
                proveedores operan. Intentamos utilizar servicios adecuados para las funciones
                necesarias del sitio y limitar la información compartida a lo necesario para
                cada finalidad.
              </p>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Para usuarios internacionales</h3>
                <p className="text-gray-700 leading-7">
                  Si accedes a CalcuNotas desde otro país, debes tener en cuenta que las
                  normas de privacidad y protección de datos pueden variar según tu ubicación.
                  Esta política describe nuestras prácticas generales y no sustituye los
                  derechos o requisitos legales específicos que puedan aplicarse en tu
                  jurisdicción.
                </p>
              </div>
            </section>

            {/* 11 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">11. Retención de Datos</h2>
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

            {/* RESUMEN DE RETENCIÓN — now correctly right after section 11 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Resumen de Retención de Información
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                El tiempo durante el cual puede conservarse determinada información depende
                de su finalidad, de las necesidades técnicas y de las obligaciones legales
                aplicables. No toda la información se conserva durante el mismo período.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-5 py-4 font-bold text-gray-900">Tipo de información</th>
                      <th className="px-5 py-4 font-bold text-gray-900">Finalidad principal</th>
                      <th className="px-5 py-4 font-bold text-gray-900">Conservación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-5 py-4 text-gray-700">Datos introducidos para un cálculo</td>
                      <td className="px-5 py-4 text-gray-700">Generar el resultado solicitado</td>
                      <td className="px-5 py-4 text-gray-700">Según el funcionamiento de la herramienta y las tecnologías utilizadas</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-700">Datos almacenados en el navegador</td>
                      <td className="px-5 py-4 text-gray-700">Recordar preferencias o configuraciones</td>
                      <td className="px-5 py-4 text-gray-700">Hasta que se eliminen, expiren o se borren desde el navegador</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-700">Registros técnicos y del servidor</td>
                      <td className="px-5 py-4 text-gray-700">Seguridad, funcionamiento y resolución de problemas</td>
                      <td className="px-5 py-4 text-gray-700">Durante el período necesario según los sistemas técnicos aplicables</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-700">Mensajes enviados por correo electrónico</td>
                      <td className="px-5 py-4 text-gray-700">Responder y gestionar solicitudes</td>
                      <td className="px-5 py-4 text-gray-700">Durante el tiempo necesario para gestionar la comunicación</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-8 mt-5">
                Estos períodos son orientativos y no sustituyen las políticas de retención
                específicas de proveedores externos que puedan intervenir en el funcionamiento
                del sitio.
              </p>
            </section>

            {/* CÓMO ELIMINAR DATOS — adjacent to retention summary, as its
                comment specified */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Cómo Eliminar Datos Guardados en Tu Navegador
              </h2>
              <p className="text-gray-700 leading-8">
                Si una calculadora o una función del sitio guarda preferencias o información
                localmente en tu navegador, normalmente puedes eliminar esos datos desde las
                opciones de configuración del navegador que estés utilizando.
              </p>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Para borrar datos locales</h3>
                <ol className="space-y-3 text-gray-700 leading-7 list-decimal list-inside">
                  <li>Abre la configuración o privacidad de tu navegador.</li>
                  <li>Busca las opciones relacionadas con cookies o datos almacenados del sitio.</li>
                  <li>Localiza los datos asociados con calcunotas.com.</li>
                  <li>Elimina los datos del sitio si deseas restablecer las preferencias locales.</li>
                  <li>Vuelve a cargar la página para comprobar el funcionamiento de la herramienta.</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-8 mt-5">
                Eliminar datos del navegador no necesariamente elimina información que ya
                haya sido procesada por proveedores externos, registros técnicos o comunicaciones
                por correo electrónico. Para solicitudes relacionadas con información personal,
                utiliza los datos de contacto indicados en esta política.
              </p>
            </section>

            {/* 12 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">12. Seguridad de los Datos</h2>
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
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">13. Privacidad de Menores</h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas está destinado al uso educativo general. No recopilamos
                conscientemente información personal de menores de 13 años. Si crees
                que un menor nos ha proporcionado información personal, contáctanos
                para que podamos revisarla y eliminarla si corresponde.
              </p>
            </section>

            {/* 14 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">14. Tus Derechos de Privacidad</h2>
              <p className="text-gray-700 leading-8">
                Dependiendo de tu ubicación, puedes tener derechos para acceder,
                corregir, eliminar o restringir el uso de información personal.
                También puedes tener el derecho de oponerte a ciertos procesamientos
                o solicitar información sobre cómo se manejan tus datos.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Para hacer una solicitud de privacidad, contáctanos en{" "}
                <a href="mailto:info@calcunotas.com" className="text-blue-600 underline hover:text-blue-700 transition">info@calcunotas.com</a>.
              </p>
            </section>

            {/* CÓMO PRESENTAR UNA SOLICITUD — now correctly right after
                section 14, instead of appearing before it explained what
                the rights even were */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Cómo Presentar una Solicitud de Privacidad
              </h2>
              <p className="text-gray-700 leading-8">
                Si deseas realizar una solicitud relacionada con información personal,
                puedes escribirnos a{" "}
                <a href="mailto:info@calcunotas.com" className="text-blue-600 underline hover:text-blue-700 transition">info@calcunotas.com</a>.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Para ayudarnos a entender y procesar tu solicitud, intenta indicar el tipo
                de solicitud que deseas realizar y proporciona información suficiente para
                que podamos identificar razonablemente el contexto de tu comunicación.
              </p>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Una solicitud puede incluir</h3>
                <ul className="space-y-3 text-gray-700 leading-7">
                  <li>• El tipo de solicitud que deseas realizar.</li>
                  <li>• La dirección de correo utilizada para contactar con nosotros, si corresponde.</li>
                  <li>• Una explicación clara de la información o acción que estás solicitando.</li>
                  <li>• Cualquier contexto necesario para localizar razonablemente la solicitud.</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-8 mt-5">
                Por razones de seguridad, podemos necesitar verificar una solicitud antes
                de realizar determinadas acciones. No envíes contraseñas, documentos de
                identidad ni información sensible por correo electrónico salvo que sea
                específicamente necesario y se te indique un método apropiado para hacerlo.
              </p>
            </section>

            {/* 15 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">15. Enlaces a Terceros</h2>
              <p className="text-gray-700 leading-8">
                Nuestro sitio web puede contener enlaces a sitios web de terceros,
                recursos educativos, instituciones, calculadoras o referencias.
                No somos responsables de las prácticas de privacidad, el contenido
                ni las políticas de sitios web de terceros.
              </p>
            </section>

            {/* 16 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">16. Cambios en Esta Política de Privacidad</h2>
              <p className="text-gray-700 leading-8">
                Podemos actualizar esta Política de Privacidad de vez en cuando.
                La versión más reciente siempre estará disponible en esta página.
                Si se realizan cambios, la fecha de &quot;Última actualización&quot;
                puede ser revisada.
              </p>
            </section>

            {/* HISTORIAL DE ACTUALIZACIONES — now correctly right after section 16 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Historial de Actualizaciones
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Mantenemos la fecha de actualización de esta página para que puedas
                identificar cuándo fue revisada la Política de Privacidad. Cuando una
                modificación sea relevante, procuraremos explicar claramente qué parte
                de la política ha cambiado.
              </p>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-sm font-bold text-blue-600 mb-1">Enero 2026</div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Publicación y revisión de la Política de Privacidad para explicar
                      las prácticas generales relacionadas con calculadoras, información
                      técnica, cookies, servicios de terceros, seguridad y solicitudes
                      de privacidad.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-sm font-bold text-gray-600 mb-1">Próximas revisiones</div>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      La política puede actualizarse cuando cambien las funciones del sitio,
                      los servicios utilizados o los requisitos aplicables.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PREGUNTAS FRECUENTES SOBRE PRIVACIDAD — now correctly right
                before section 17 "Contáctanos", as its comment specified */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Preguntas Frecuentes sobre Privacidad
              </h2>
              <div className="space-y-4">
                <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                  <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                    <h3>¿Necesito crear una cuenta para usar las calculadoras?</h3>
                    <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-8">
                    No se requiere una cuenta para las funciones básicas de las calculadoras.
                    Puedes introducir los valores necesarios para realizar un cálculo sin
                    crear un perfil académico en CalcuNotas.
                  </p>
                </details>
                <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                  <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                    <h3>¿CalcuNotas tiene acceso a mis notas oficiales?</h3>
                    <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-8">
                    No. CalcuNotas no es un sistema escolar ni un portal universitario y
                    no tiene acceso a tus expedientes académicos oficiales. Los resultados
                    de las calculadoras se basan en los valores que introduces.
                  </p>
                </details>
                <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                  <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                    <h3>¿Debo introducir mi nombre o número de estudiante?</h3>
                    <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-8">
                    No es necesario para realizar los cálculos básicos. Introduce únicamente
                    la información necesaria para que la herramienta produzca el resultado
                    que buscas.
                  </p>
                </details>
                <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                  <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                    <h3>¿Puedo pedir que se elimine información relacionada conmigo?</h3>
                    <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-8">
                    Puedes enviar una solicitud a{" "}
                    <a href="mailto:info@calcunotas.com" className="text-blue-600 underline hover:text-blue-700 transition">info@calcunotas.com</a>.
                    Revisaremos la solicitud y determinaremos qué acciones corresponden
                    según la información disponible y las obligaciones legales aplicables.
                  </p>
                </details>
                <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                  <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                    <h3>¿Qué ocurre si encuentro un problema de privacidad?</h3>
                    <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-8">
                    Puedes contactarnos directamente en{" "}
                    <a href="mailto:info@calcunotas.com" className="text-blue-600 underline hover:text-blue-700 transition">info@calcunotas.com</a>.
                    Describe el problema de forma clara y evita enviar información
                    confidencial innecesaria.
                  </p>
                </details>
              </div>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">17. Contáctanos</h2>
              <p className="text-gray-700 leading-8">
                Si tienes preguntas sobre esta Política de Privacidad, el manejo de
                datos de la calculadora o las prácticas de privacidad del sitio web,
                contáctanos en{" "}
                <a href="mailto:info@calcunotas.com" className="text-blue-600 underline hover:text-blue-700 transition">info@calcunotas.com</a>.
              </p>
            </section>

          </article>

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