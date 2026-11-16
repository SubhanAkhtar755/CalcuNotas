import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";
import { FaEnvelope, FaGlobe, FaClock, FaQuestionCircle } from "react-icons/fa";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Contacto | CalcuNotas",
  description:
    "Contáctanos en CalcuNotas. Si tienes preguntas, sugerencias o detectas algún error en nuestras calculadoras de notas, GPA o nota final, estamos aquí para ayudarte.",
  keywords: [
    "contacto calcunotas",
    "contactar calcunotas",
    "soporte calcunotas",
    "preguntas calcunotas",
    "ayuda calculadora de notas",
    "contacto calculadora gpa",
    "sugerencias calcunotas",
    "reportar error calculadora notas",
  ],
  // FIX: comment claimed robots was added but the field was missing.
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contacto | CalcuNotas",
    description:
      "Contáctanos en CalcuNotas para preguntas, sugerencias o reportar errores en nuestras calculadoras.",
    url: "https://calcunotas.com/contacto/",
    type: "website",
  },
  alternates: {
    canonical: "https://calcunotas.com/contacto/",
  },
};

const contactFaqs = [
  {
    question: "¿Cuánto tiempo tardan en responder?",
    answer:
      "Generalmente respondemos dentro de 1 a 3 días hábiles. En períodos de mayor actividad puede tomar un poco más, pero intentamos contestar todos los mensajes.",
  },
  {
    question: "¿Qué hago si el resultado de una calculadora parece incorrecto?",
    answer:
      "Primero revisa los valores introducidos, los pesos, créditos y la escala de calificación de tu curso. Si el resultado sigue pareciendo incorrecto, envíanos la URL de la calculadora, los valores utilizados, el resultado obtenido y el resultado esperado para que podamos revisar el caso.",
  },
  {
    question: "¿CalcuNotas puede confirmar mi nota oficial?",
    answer:
      "No. CalcuNotas puede realizar estimaciones y cálculos a partir de los datos que introduces, pero solamente tu profesor o institución educativa puede confirmar una nota oficial, un GPA registrado o una decisión académica.",
  },
  {
    question: "¿Necesito enviar mis datos personales para reportar un problema?",
    answer:
      "No. Para investigar un problema normalmente basta con proporcionar los datos necesarios para reproducir el cálculo, como la calculadora utilizada, los valores introducidos y el resultado observado. No envíes contraseñas, números de identificación, documentos académicos completos ni otra información privada que no sea necesaria.",
  },
  {
    question: "¿Por qué mi institución puede mostrar una nota diferente a la calculadora?",
    answer:
      "Una institución puede aplicar reglas específicas de redondeo, crédito extra, curvas, categorías ponderadas, sustitución de notas u otras políticas. Una calculadora general puede producir una estimación diferente cuando no conoce esas reglas institucionales.",
  },
  {
    question: "¿Puedo sugerir una nueva calculadora para CalcuNotas?",
    answer:
      "Sí. Puedes enviarnos una sugerencia explicando qué cálculo necesitas, quién podría beneficiarse de la herramienta y qué reglas o fórmula debería tener en cuenta. Las sugerencias pueden ayudarnos a identificar nuevas herramientas educativas útiles.",
  },
  {
    question: "¿Pueden calcular mis notas por mí?",
    answer:
      "Nuestras calculadoras están diseñadas para que tú mismo puedas ingresar tus datos y obtener el resultado al instante mediante la calculadora de notas del sitio.",
  },
  {
    question: "¿Puedo colaborar o contribuir al sitio?",
    answer:
      "Si tienes ideas, herramientas o contenido que crees que podría beneficiar a la comunidad de CalcuNotas, puedes escribirnos y evaluaremos tu propuesta con gusto.",
  },
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto | CalcuNotas",
    url: "https://calcunotas.com/contacto/",
    description:
      "Página de contacto de CalcuNotas para preguntas, sugerencias y reportes de error sobre nuestras calculadoras académicas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CalcuNotas",
    url: "https://calcunotas.com",
    logo: "https://calcunotas.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "info@calcunotas.com",
        contactType: "customer support",
        areaServed: "ES-419",
        availableLanguage: ["Spanish"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      { "@type": "ListItem", position: 2, name: "Contacto", item: "https://calcunotas.com/contacto/" },
    ],
  },
];

export default function ContactPage() {
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
          <div className="text-sm text-gray-500 mb-3">
            <a href="/" className="hover:text-blue-600 transition">Inicio</a> / Contacto
          </div>
          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Contacto
          </h1>
          <p className="max-w-[840px] text-gray-600 leading-8 text-[16px] md:text-[17px]">
            Si tienes preguntas, sugerencias, comentarios o detectas un problema con alguna
            de nuestras <a href="/calculadora-de-notas/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">calculadoras de notas</a>,
            puedes contactarnos en cualquier momento. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12 px-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-7 md:p-9">

            {/* 1. INTRO BOX */}
            <section className="mb-10">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                  Estamos Aquí para Ayudarte
                </h2>
                <p className="text-gray-700 leading-8">
                  En CalcuNotas nos importa que tengas la mejor experiencia posible al usar
                  nuestras herramientas de cálculo académico. Si algo no funciona como esperabas,
                  tienes una sugerencia de mejora o simplemente quieres hacernos llegar un comentario,
                  no dudes en escribirnos.
                </p>
              </div>
            </section>

            {/* 2. SOBRE CALCUNOTAS — FIX: this used to be a full restatement
                of the About page's mission (3+ paragraphs, near-duplicate
                wording). The full version belongs on one page only; here
                it's now two sentences pointing to the canonical source. */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Sobre CalcuNotas
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas es un recurso educativo gratuito con herramientas para calcular
                notas, porcentajes, GPA y notas finales. Es una ayuda para el cálculo y la
                planificación, no un sustituto de tu profesor o institución educativa —
                lee más sobre{" "}
                <a href="/sobre-nosotros/" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">
                  quiénes somos y cómo trabajamos
                </a>.
              </p>
            </section>

            {/* 3. CONTACT INFO */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Información de Contacto
              </h2>
              <p className="text-gray-700 leading-8 mb-6">
                Puedes comunicarte con nosotros a través de los siguientes medios. Respondemos
                a todos los mensajes lo antes posible.
              </p>
              <div className="space-y-4">
                <a href="mailto:info@calcunotas.com" className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm transition group">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition">
                    <FaEnvelope className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Correo Electrónico</div>
                    <div className="text-gray-800 font-semibold group-hover:text-blue-600 transition">info@calcunotas.com</div>
                  </div>
                </a>
                <a href="https://calcunotas.com" className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm transition group">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition">
                    <FaGlobe className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Sitio Web</div>
                    <div className="text-gray-800 font-semibold group-hover:text-blue-600 transition">calcunotas.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Tiempo de Respuesta</div>
                    <div className="text-gray-800 font-semibold">Generalmente dentro de 1 a 3 días hábiles</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. EN QUÉ PODEMOS AYUDARTE — moved here (was buried after
                three other sections; belongs right after contact info,
                before listing reasons to contact) */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                En Qué Podemos Ayudarte
              </h2>
              <p className="text-gray-700 leading-8 mb-6">
                El equipo detrás de CalcuNotas puede recibir comentarios relacionados con
                el funcionamiento, contenido y utilidad de las herramientas del sitio.
                Para que tengas expectativas claras, estas son algunas de las consultas
                que encajan mejor con nuestro servicio de contacto.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Sí podemos ayudarte con</h3>
                  <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                    <li>• Problemas técnicos de una calculadora.</li>
                    <li>• Resultados que parecen incorrectos.</li>
                    <li>• Dudas sobre el funcionamiento de una herramienta.</li>
                    <li>• Sugerencias para nuevas calculadoras.</li>
                    <li>• Errores de contenido, texto o funcionamiento.</li>
                    <li>• Comentarios sobre la experiencia de uso.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">No podemos sustituir a tu institución</h3>
                  <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                    <li>• No podemos modificar tus notas oficiales.</li>
                    <li>• No podemos acceder a tu expediente académico.</li>
                    <li>• No podemos confirmar requisitos de graduación.</li>
                    <li>• No podemos decidir qué escala utiliza tu institución.</li>
                    <li>• No podemos emitir documentos académicos oficiales.</li>
                    <li>• No podemos garantizar una calificación determinada en un curso.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. REASONS TO CONTACT */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                ¿Por Qué Contactarnos?
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Recibimos mensajes de estudiantes, profesores y padres. Aquí algunos motivos
                comunes por los que nos escriben:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Reportar un Error</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Si encuentras un cálculo incorrecto, un error de visualización o algún
                    problema técnico en nuestras calculadoras, por favor avísanos para
                    poder corregirlo cuanto antes.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Sugerir una Herramienta</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    ¿Hay alguna calculadora académica que necesitas y no encuentras en
                    nuestro sitio? Compártenos tu idea y la consideraremos para
                    futuras actualizaciones.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Comentarios Generales</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Nos interesa saber qué piensas sobre CalcuNotas. Tu opinión nos
                    ayuda a mejorar el sitio y a crear herramientas más útiles para
                    la comunidad educativa.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <h3 className="text-xl font-bold mb-3">Preguntas Frecuentes</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Si tienes dudas sobre cómo usar alguna de nuestras calculadoras
                    o cómo interpretar los resultados, escríbenos y te explicamos
                    con gusto.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. CÓMO REVISAMOS LOS ERRORES REPORTADOS (correct position,
                already followed REASONS TO CONTACT in the original) */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Cómo Revisamos los Errores Reportados
              </h2>
              <p className="text-gray-700 leading-8 mb-6">
                Los reportes de errores nos ayudan a detectar problemas de cálculo,
                presentación o funcionamiento que pueden no aparecer durante una revisión
                normal. Cuando recibimos un reporte relacionado con una calculadora,
                necesitamos suficiente información para reproducir el problema y
                comprobarlo de forma independiente.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <div className="text-sm font-bold text-blue-600 mb-2">01</div>
                  <h3 className="text-xl font-bold mb-3">Revisamos los datos</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Comprobamos la calculadora, los valores introducidos, los pesos,
                    porcentajes o créditos utilizados y el resultado que muestra la
                    herramienta.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <div className="text-sm font-bold text-blue-600 mb-2">02</div>
                  <h3 className="text-xl font-bold mb-3">Comprobamos el cálculo</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Contrastamos el resultado con la fórmula o método de cálculo que
                    corresponde al tipo de herramienta. También verificamos si el problema
                    depende de una regla específica introducida por el usuario.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <div className="text-sm font-bold text-blue-600 mb-2">03</div>
                  <h3 className="text-xl font-bold mb-3">Corregimos cuando corresponde</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Si identificamos un problema real en la herramienta o en su
                    funcionamiento, podemos actualizar la calculadora o el contenido
                    relacionado para mejorar la precisión y claridad del sitio.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Importante sobre las diferencias de resultados
                </h3>
                <p className="text-gray-700 leading-7">
                  No toda diferencia significa que exista un error. Dos calculadoras pueden
                  producir resultados distintos si utilizan diferentes escalas, reglas de
                  redondeo, pesos, créditos o políticas académicas. Por eso, cuando
                  reportes un problema, es especialmente útil indicar qué resultado
                  esperabas y qué fórmula o regla utiliza tu curso.
                </p>
              </div>
            </section>

            {/* 7. WHAT TO INCLUDE + example, now together in the right place */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Qué Incluir en Tu Mensaje
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                Para que podamos atenderte de la mejor manera, te recomendamos incluir
                la siguiente información en tu correo:
              </p>
              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• El nombre o URL de la calculadora con la que tuviste el problema.</li>
                <li>• Una descripción clara del error o la situación.</li>
                <li>• El resultado que obtuviste y el resultado que esperabas.</li>
                <li>• El dispositivo o navegador que estabas usando, si es relevante.</li>
                <li>• Tu sugerencia o comentario con el mayor detalle posible.</li>
              </ul>
              <p className="text-gray-700 leading-8 mt-4">
                No es necesario incluir datos personales como tu nombre completo, número
                de matrícula ni información académica privada para reportar un problema
                o hacer una sugerencia.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ejemplo de un Buen Reporte</h3>
                <p className="text-gray-700 leading-7 mb-4">
                  Un reporte específico nos permite entender el problema mucho más rápido.
                  Por ejemplo, en lugar de escribir únicamente "la calculadora da mal el
                  resultado", puedes explicar qué introdujiste y qué resultado esperabas.
                </p>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <p className="text-gray-700 leading-7 text-[15px]">
                    <strong>Calculadora:</strong> Calculadora de Nota Final<br />
                    <strong>Nota actual:</strong> 82%<br />
                    <strong>Peso del examen final:</strong> 30%<br />
                    <strong>Objetivo:</strong> 85%<br />
                    <strong>Resultado mostrado:</strong> 92%<br />
                    <strong>Problema:</strong> El resultado parece diferente al cálculo que obtengo manualmente.
                  </p>
                </div>
                <p className="text-gray-700 leading-7 mt-4">
                  Con esta información es posible comprobar los valores, revisar la fórmula
                  utilizada y determinar si existe un error real o si la diferencia se debe
                  a una regla de redondeo, ponderación o configuración diferente.
                </p>
              </div>
            </section>

            {/* 8. PROTEGE TU INFORMACIÓN PERSONAL — moved here, right after
                WHAT TO INCLUDE and before DISCLAIMER, as its comment said */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Protege Tu Información Personal
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Para ayudarnos a investigar una calculadora o responder una pregunta, no
                necesitas enviarnos información académica privada. Comparte únicamente los
                datos necesarios para explicar el problema.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Información que puede ser útil</h3>
                  <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                    <li>• URL o nombre de la calculadora.</li>
                    <li>• Valores de ejemplo necesarios para reproducir el cálculo.</li>
                    <li>• Resultado mostrado por la herramienta.</li>
                    <li>• Resultado que esperabas obtener.</li>
                    <li>• Navegador o dispositivo cuando exista un problema técnico.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Información que no debes enviar</h3>
                  <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
                    <li>• Contraseñas o códigos de acceso.</li>
                    <li>• Números de identificación estudiantil.</li>
                    <li>• Datos bancarios o información financiera.</li>
                    <li>• Documentos académicos completos si no son necesarios.</li>
                    <li>• Cualquier información personal que no sea relevante para tu consulta.</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 leading-8 mt-5">
                Si necesitas reportar un problema, puedes utilizar datos de ejemplo
                siempre que permitan reproducir el mismo comportamiento de la calculadora.
                Para preguntas sobre registros académicos oficiales, debes contactar
                directamente con tu institución educativa.
              </p>
            </section>

            {/* 9. DISCLAIMER (correct position, unchanged) */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Aviso Importante
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                CalcuNotas es una herramienta de apoyo académico y no tiene acceso a
                registros académicos oficiales, sistemas escolares, plataformas
                institucionales ni datos personales de estudiantes.
              </p>
              <p className="text-gray-700 leading-8">
                Si tienes dudas sobre tus notas oficiales, GPA, estado de graduación
                o requisitos académicos, te recomendamos contactar directamente a tu
                institución educativa, profesor o asesor académico.
              </p>
            </section>

            {/* 10. CÓMO FUNCIONAN NUESTRAS CALCULADORAS — moved here, right
                after DISCLAIMER and before FAQ, as its comment said */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Cómo Funcionan Nuestras Calculadoras
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                Las calculadoras de CalcuNotas utilizan los datos que introduces para
                realizar operaciones matemáticas relacionadas con notas, porcentajes,
                pesos, créditos y objetivos académicos. El resultado depende directamente
                de que los valores introducidos y las reglas seleccionadas sean correctos.
              </p>
              <p className="text-gray-700 leading-8 mb-6">
                Por ejemplo, una calculadora de nota ponderada puede combinar diferentes
                categorías según su porcentaje, mientras que una calculadora GPA puede
                utilizar créditos y puntos de calificación para obtener un promedio
                ponderado. Una calculadora de examen final, por otro lado, puede estimar
                qué puntuación necesitas para alcanzar una nota objetivo.
              </p>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tres aspectos que debes comprobar antes de usar un resultado
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">1. La escala de calificación</h4>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Comprueba si tu institución utiliza porcentajes, letras, puntos,
                      GPA de 4.0 u otra escala.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">2. Los pesos y créditos</h4>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Asegúrate de introducir correctamente el peso de cada categoría o
                      los créditos de cada asignatura. Un valor incorrecto puede cambiar
                      significativamente el resultado.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">3. Las reglas de tu institución</h4>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Algunas instituciones aplican redondeos, curvas, crédito extra,
                      escalas de GPA especiales o políticas propias. Cuando exista una
                      regla institucional, esa regla debe utilizarse para interpretar el
                      resultado final.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. FAQ (correct position, unchanged) */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Preguntas Frecuentes de Contacto
              </h2>
              <div className="space-y-4">
                {contactFaqs.map((faq, index) => (
                  <div key={index} className="rounded-2xl border border-gray-200 p-5 bg-white">
                    <div className="flex items-start gap-3">
                      <FaQuestionCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-700 leading-7 text-[15px]">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 12. RECURSOS ÚTILES — moved here, right after FAQ and before
                DIRECT CONTACT, as its comment said */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Recursos Útiles de CalcuNotas
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                Si tu pregunta está relacionada con un cálculo específico, es posible que
                encuentres una respuesta más detallada directamente en una de nuestras
                herramientas o guías educativas.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <a href="/calculadora-de-notas/" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-blue-300 hover:shadow-sm transition group">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">Calculadora de Notas</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Calcula porcentajes y resultados de notas utilizando los valores y
                    pesos correspondientes a tus evaluaciones.
                  </p>
                </a>
                <a href="/calculadora-gpa/" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-blue-300 hover:shadow-sm transition group">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">Calculadora GPA</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Calcula un GPA estimado utilizando puntos de calificación y créditos
                    según la escala correspondiente.
                  </p>
                </a>
                <a href="/faq/" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-blue-300 hover:shadow-sm transition group">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">Preguntas Frecuentes</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Consulta respuestas sobre GPA, notas ponderadas, exámenes finales,
                    calificación por puntos y otras herramientas académicas.
                  </p>
                </a>
                <a href="/blog/" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-blue-300 hover:shadow-sm transition group">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">Guías y Recursos Académicos</h3>
                  <p className="text-gray-700 leading-7 text-[15px]">
                    Aprende cómo funcionan diferentes cálculos académicos mediante guías
                    explicativas y ejemplos prácticos.
                  </p>
                </a>
              </div>
            </section>

            {/* 13. DIRECT CONTACT (correct position, unchanged) */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Escríbenos Directamente
              </h2>
              <p className="text-gray-700 leading-8 mb-5">
                La forma más rápida de contactarnos es por correo electrónico. Respondemos
                a todos los mensajes de manera personal.
              </p>
              <div className="space-y-3">
                <a href="mailto:info@calcunotas.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <FaEnvelope className="text-blue-600" />
                  info@calcunotas.com
                </a>
                <a href="https://calcunotas.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <FaGlobe className="text-blue-600" />
                  calcunotas.com
                </a>
              </div>
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