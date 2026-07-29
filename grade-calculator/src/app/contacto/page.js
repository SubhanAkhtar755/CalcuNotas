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

  // GAP FIX: robots + openGraph tags add kiye (pehle missing thay)
  
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

// FAQ data ko ek array me nikala taake schema aur UI dono isi se render ho
// (pehle ye sirf JSX ke andar hardcoded thay, schema ke liye reuse nahi ho sakte thay)
const contactFaqs = [
  {
    question: "¿Cuánto tiempo tardan en responder?",
    answer:
      "Generalmente respondemos dentro de 1 a 3 días hábiles. En períodos de mayor actividad puede tomar un poco más, pero intentamos contestar todos los mensajes.",
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

// ────────────────────────────────────────────────────────────
// GAP FIX: Contact page par pehle koi JSON-LD nahi tha.
// ContactPage + Organization (with contactPoint) + FAQPage + BreadcrumbList
// add kiya — contact/EEAT pages ke liye contactPoint sabse zyada zaroori signal hai.
// ────────────────────────────────────────────────────────────
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
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
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
      {/* GAP FIX: schema script tag page me pehli baar add hua */}
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

          {/* MAIN CONTENT */}
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-7 md:p-9">

            {/* INTRO BOX */}
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

            {/* CONTACT INFO */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Información de Contacto
              </h2>

              <p className="text-gray-700 leading-8 mb-6">
                Puedes comunicarte con nosotros a través de los siguientes medios. Respondemos
                a todos los mensajes lo antes posible.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:info@calcunotas.com"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition">
                    <FaEnvelope className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Correo Electrónico</div>
                    <div className="text-gray-800 font-semibold group-hover:text-blue-600 transition">info@calcunotas.com</div>
                  </div>
                </a>

                <a
                  href="https://calcunotas.com"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm transition group"
                >
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

            {/* REASONS TO CONTACT */}
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

            {/* WHAT TO INCLUDE */}
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
            </section>

            {/* DISCLAIMER */}
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

            {/* FAQ */}
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

            {/* DIRECT CONTACT */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Escríbenos Directamente
              </h2>

              <p className="text-gray-700 leading-8 mb-5">
                La forma más rápida de contactarnos es por correo electrónico. Respondemos
                a todos los mensajes de manera personal.
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