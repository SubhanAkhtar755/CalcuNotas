import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  metadataBase: new URL("https://calcunotas.com"),

  title: "Términos de Servicio | CalcuNotas",

  description:
    "Lee los Términos de Servicio para usar CalcuNotas, incluyendo calculadora de notas, calculadora GPA, calculadora de nota final, calculadora de nota semestral, calculadora de examen y herramientas de calificación rápida.",

  keywords: [
    "términos de servicio",
    "términos calculadora de notas",
    "términos calculadora gpa",
    "términos calculadora nota final",
    "términos calculadora nota semestral",
    "términos calculadora de examen",
    "términos calificador rapido",
    "términos calcunotas",
    "términos sitio web calculadora",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Términos de Servicio | CalcuNotas",
    description:
      "Reglas y condiciones para usar las calculadoras de notas, GPA, nota final y calificación rápida de CalcuNotas.",
    url: "https://calcunotas.com/terminos/",
    siteName: "CalcuNotas",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "https://calcunotas.com/logo.png",
        width: 1200,
        height: 630,
        alt: "CalcuNotas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Términos de Servicio | CalcuNotas",
    description:
      "Reglas y condiciones para usar las calculadoras educativas de CalcuNotas.",
    images: ["https://calcunotas.com/logo.png"],
  },

  alternates: {
    canonical: "https://calcunotas.com/terminos/",
  },
};
// ────────────────────────────────────────────────────────────
// GAP FIX: Terms page par pehle koi JSON-LD nahi tha.
// WebPage (with machine-readable dateModified) + BreadcrumbList add kiya,
// bilkul Privacy page ke pattern ki tarah — dono legal pages consistent rahen.
// ────────────────────────────────────────────────────────────
const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://calcunotas.com/terminos/#webpage",
    name: "Términos de Servicio | CalcuNotas",
    url: "https://calcunotas.com/terminos/",
    description:
      "Términos de Servicio de CalcuNotas: reglas y condiciones para usar nuestras calculadoras de notas, GPA, nota final y calificación rápida.",
    inLanguage: "es",
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",

    isPartOf: {
      "@type": "WebSite",
      "@id": "https://calcunotas.com/#website",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },

    mainEntity: {
      "@id": "https://calcunotas.com/#organization",
    },

    publisher: {
      "@id": "https://calcunotas.com/#organization",
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://calcunotas.com/#organization",
    name: "CalcuNotas",
    url: "https://calcunotas.com",
    logo: {
      "@type": "ImageObject",
      url: "https://calcunotas.com/logo.png",
      width: 512,
      height: 512,
    },
    email: "info@calcunotas.com",
    description:
      "CalcuNotas es un sitio web gratuito de calculadoras educativas para notas, GPA, exámenes, promedios ponderados y otras necesidades académicas.",

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@calcunotas.com",
      availableLanguage: ["Spanish", "English"],
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://calcunotas.com/terminos/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://calcunotas.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Términos de Servicio",
        item: "https://calcunotas.com/terminos/",
      },
    ],
  },
];

export default function Terms() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      {/* GAP FIX: schema script tag page me pehli baar add hua */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 px-8 to-[#f7f9fc]">
        <div className=" mx-auto">
          <div className="text-sm text-gray-500 mb-3">
            Inicio / Términos de Servicio
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Términos de Servicio
          </h1>

          <p className="max-w-[840px] text-gray-600 leading-8 text-[16px] md:text-[17px]">
            Por favor lee estos Términos de Servicio cuidadosamente antes de usar
            CalcuNotas. Estos términos explican las reglas y condiciones para
            usar nuestras calculadoras de notas, calculadoras GPA, herramientas de
            nota final, tablas de calificación rápida, recursos educativos y
            funciones relacionadas del sitio web.
          </p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12 px-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

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
                1. Aceptación de los Términos
              </h2>
              <p className="text-gray-700 leading-8">
                Al acceder o usar CalcuNotas, aceptas seguir estos Términos de Servicio.
                Si no estás de acuerdo con estos términos, por favor no uses este sitio
                web, sus calculadoras ni ninguna herramienta educativa relacionada.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Podemos actualizar estos Términos en cualquier momento. Cuando se realicen
                actualizaciones, la versión más reciente se publicará en esta página. El
                uso continuado del sitio web después de los cambios significa que aceptas
                los Términos actualizados.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                2. Qué Ofrece CalcuNotas
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas ofrece calculadoras educativas gratuitas en línea y herramientas
                relacionadas con calificaciones. Estas pueden incluir calculadoras de notas,
                calculadoras GPA, calculadoras de nota semestral, calculadoras de nota final,
                calculadoras de examen, calculadoras de notas ponderadas, calificadores
                rápidos y herramientas similares de cálculo académico.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Nuestras calculadoras están diseñadas para ayudar a estudiantes, profesores,
                padres y educadores a estimar notas, porcentajes, promedios ponderados,
                resultados de GPA, puntajes de examen final y progreso académico. Estas
                herramientas son únicamente para uso informativo y educativo.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                3. Solo para Uso Educativo
              </h2>
              <p className="text-gray-700 leading-8">
                Las calculadoras y el contenido de CalcuNotas se proporcionan para fines
                educativos generales. Están destinados a ayudar a los usuarios a entender
                el cálculo de notas, fórmulas de GPA, puntajes en porcentaje y situaciones
                de planificación académica.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Los resultados generados por nuestras herramientas deben tratarse como
                estimaciones. Las notas oficiales, registros de GPA, expedientes académicos,
                clasificaciones, decisiones de becas y situación académica son determinados
                por tu escuela, colegio, universidad, profesor o institución académica.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                4. Sin Garantía de Exactitud Oficial
              </h2>
              <p className="text-gray-700 leading-8">
                Procuramos que nuestras calculadoras sean precisas y fáciles de usar, pero
                no garantizamos que cada resultado coincida con tu libro de notas oficial o
                expediente académico. Diferentes instituciones y profesores pueden usar
                distintas escalas de calificación, reglas de redondeo, sistemas de ponderación,
                políticas de crédito extra, reglas de notas eliminadas o métodos de conversión
                de GPA.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Antes de basarte en cualquier resultado, debes consultar el programa del curso,
                la política de calificación de tu institución, las instrucciones del profesor
                o el portal académico oficial.
              </p>
            </section>

            {/* 5 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                5. Responsabilidad del Usuario
              </h2>
              <p className="text-gray-700 leading-8">
                Eres responsable de ingresar información precisa en las calculadoras. Notas
                incorrectas, pesos erróneos, tareas faltantes, créditos incorrectos o
                porcentajes de examen final inexactos pueden producir resultados incorrectos.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                También eres responsable de entender el sistema de calificación de tu
                institución. CalcuNotas no reemplaza la orientación de profesores, asesores
                académicos, secretarías ni funcionarios escolares.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                6. Uso Permitido
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                Puedes usar CalcuNotas para fines legales y educativos, incluyendo:
              </p>
              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• Calcular notas actuales de materias y promedios ponderados.</li>
                <li>• Estimar el GPA semestral o el GPA acumulado.</li>
                <li>• Calcular los puntajes de examen final necesarios para notas objetivo.</li>
                <li>• Crear tablas de calificación para cuestionarios, exámenes y tareas.</li>
                <li>• Aprender cómo funcionan las fórmulas de notas y GPA.</li>
                <li>• Planificar objetivos de estudio y estrategias de mejora académica.</li>
              </ul>
            </section>

            {/* 7 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                7. Uso Prohibido
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                Aceptas no hacer mal uso de CalcuNotas ni interferir con el sitio web.
                Los usos prohibidos incluyen:
              </p>
              <ul className="space-y-3 text-gray-700 leading-8">
                <li>• Usar el sitio web para fines ilegales, dañinos o engañosos.</li>
                <li>• Intentar hackear, dañar, sobrecargar o interrumpir el sitio web.</li>
                <li>• Extraer, copiar o republicar nuestro contenido a gran escala sin permiso.</li>
                <li>• Presentar resultados de calculadoras como registros escolares oficiales.</li>
                <li>• Usar nuestras herramientas para crear reclamaciones académicas falsas o documentos fraudulentos.</li>
                <li>• Eliminar la marca, copiar el contenido de páginas o presentar nuestras herramientas como propias.</li>
              </ul>
            </section>

            {/* 8 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                8. Resultados de Calculadora y Decisiones Académicas
              </h2>
              <p className="text-gray-700 leading-8">
                Los resultados de la calculadora no deben usarse como única base para
                decisiones académicas importantes. Esto incluye retiro de materias,
                solicitudes de becas, planificación de graduación, decisiones de admisión,
                apelaciones académicas o requisitos de elegibilidad.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Si una nota o resultado de GPA es importante, confírmalo con tu profesor,
                asesor académico, secretaría o sistema oficial de notas antes de tomar
                cualquier acción.
              </p>
            </section>

            {/* 9 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                9. No Se Requiere Cuenta
              </h2>
              <p className="text-gray-700 leading-8">
                CalcuNotas generalmente no requiere que los usuarios creen una cuenta para
                usar las herramientas básicas de calculadora. La mayoría de los cálculos
                se realizan directamente a través de la interfaz del sitio web.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Debes evitar ingresar información personal privada, sensible o confidencial
                en cualquier calculadora en línea a menos que sea necesario y entiendas
                cómo puede manejarse la información.
              </p>
            </section>

            {/* 10 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                10. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 leading-8">
                El diseño del sitio web, las interfaces de calculadora, el contenido de
                texto, la marca, el diseño y otros materiales de CalcuNotas son propiedad
                de o están licenciados a este sitio web, salvo que se indique lo contrario.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Puedes usar nuestras calculadoras para fines personales, en el aula o
                educativos. No puedes copiar, reproducir, redistribuir ni republicar el
                contenido de nuestro sitio web o las herramientas de calculadora como
                propios sin permiso.
              </p>
            </section>

            {/* 11 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                11. Enlaces y Recursos de Terceros
              </h2>
              <p className="text-gray-700 leading-8">
                Nuestro sitio web puede incluir enlaces a sitios web de terceros, recursos,
                referencias educativas o herramientas. Estos enlaces se proporcionan solo
                por conveniencia y con fines informativos.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                No controlamos los sitios web de terceros y no somos responsables de su
                contenido, precisión, prácticas de privacidad ni términos de uso.
              </p>
            </section>

            {/* 12 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                12. Disponibilidad del Sitio Web
              </h2>
              <p className="text-gray-700 leading-8">
                Nuestro objetivo es mantener CalcuNotas disponible y funcionando
                correctamente, pero no garantizamos el acceso ininterrumpido. El sitio
                web puede no estar disponible en ocasiones debido a mantenimiento,
                actualizaciones, problemas técnicos, problemas de alojamiento u otras razones.
              </p>
            </section>

            {/* 13 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                13. Exclusión de Garantías
              </h2>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-gray-700 leading-8 uppercase">
                  CalcuNotas y sus calculadoras se proporcionan &quot;tal cual&quot; y
                  &quot;según disponibilidad&quot;. No ofrecemos garantías de que el sitio
                  web, las calculadoras, las fórmulas o los resultados estén libres de
                  errores, sean ininterrumpidos, completos o adecuados para cada sistema
                  de calificación académica.
                </p>
              </div>
            </section>

            {/* 14 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                14. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 leading-8">
                En la máxima medida permitida por la ley, CalcuNotas no es responsable
                de ningún daño directo, indirecto, incidental, especial, consecuente o
                punitivo que resulte del uso de este sitio web o sus calculadoras.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Esto incluye, entre otros, errores de cálculo de notas, errores de
                planificación académica, decisiones sobre becas, resultados de admisiones
                o dependencia de resultados estimados de calculadoras.
              </p>
            </section>

            {/* 15 */}
            <section className="mb-9">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                15. Cambios en Estos Términos
              </h2>
              <p className="text-gray-700 leading-8">
                Podemos actualizar estos Términos de Servicio de vez en cuando. La versión
                más reciente siempre estará disponible en esta página. La fecha de
                &quot;Última actualización&quot; puede cambiarse cuando se realicen revisiones.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                16. Contáctanos
              </h2>
              <p className="text-gray-700 leading-8">
                Si tienes preguntas sobre estos Términos de Servicio, el uso de la
                calculadora o las políticas del sitio web, puedes contactarnos en{" "}
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