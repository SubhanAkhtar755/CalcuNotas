import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GPACalculatorLab from "@/app/components/GPACalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2026-07-25";

// ─── GAP FIX: standalone Organization entity (sameAs + logo) ───────────────
// TODO: replace with real social profile URLs and a real logo asset.
const ORG_SCHEMA = {
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
  
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://calcunotas.com/#website",
  url: "https://calcunotas.com",
  name: "CalcuNotas",
  publisher: { "@id": "https://calcunotas.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://calcunotas.com/buscar/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// TODO: replace with a real team member's name/credentials/profile URL.
const AUTHOR_SCHEMA = {
  "@type": "Person",
  name: "Equipo Editorial de CalcuNotas",
  jobTitle: "Especialistas en evaluación académica",
  url: "https://calcunotas.com/sobre-nosotros/",
  worksFor: { "@id": "https://calcunotas.com/#organization" },
};

// ─── GAP FIX: this page had ZERO schema markup — now has WebApplication,
//    FAQPage, HowTo, BreadcrumbList and Article, matching the other pages ──
const FAQS_DATA = [
  {
    q: "¿Cómo calculo mi GPA acumulado?",
    a: "Multiplica tu GPA anterior por los créditos completados, suma los puntos de calidad del semestre actual y divide entre el total de créditos de todos los semestres.",
  },
  {
    q: "¿Cuánto puede subir mi GPA acumulado en un semestre?",
    a: "Depende de cuántos créditos tengas acumulados. Con 30 créditos previos un semestre de 4.0 puede subirlo más de 0.30 puntos. Con 90 créditos, el mismo semestre lo sube solo alrededor de 0.15 puntos.",
  },
  {
    q: "¿El GPA acumulado incluye materias reprobadas?",
    a: "En la mayoría de universidades sí, a menos que la institución aplique políticas de repetición de materias o perdón de calificaciones. Consulta el reglamento de tu escuela para confirmarlo.",
  },
  {
    q: "¿Necesito mi GPA anterior para usar esta calculadora?",
    a: "Sí. Para calcular el GPA acumulado necesitas tu GPA del historial anterior y el total de créditos ya completados. Los encuentras en tu boleta oficial o sistema académico.",
  },
  // ── GAP 9: FAQS LONG-TAIL ADICIONALES ─────────────────────────────────
{
  q: "¿Cómo calcular el GPA que necesito para llegar a 3.5?",
  a: "Multiplica tu GPA objetivo por el total de créditos que tendrás al finalizar, resta los puntos de calidad que ya tienes y divide el resultado entre los créditos que todavía te faltan. El resultado es el GPA promedio que necesitarías obtener en los créditos restantes.",
},
{
  q: "¿Cuál es el GPA máximo que todavía puedo alcanzar?",
  a: "Para calcularlo, supone que obtendrás un 4.0 en todos los créditos restantes. Después combina esos puntos de calidad con los que ya tienes y divide entre el total de créditos. Si el resultado máximo está por debajo de tu objetivo, esa meta no puede alcanzarse únicamente con los créditos restantes.",
},
{
  q: "¿Cuánto puede subir mi GPA con 15 créditos de 4.0?",
  a: "Depende de tu GPA actual y de cuántos créditos hayas completado. Con pocos créditos previos, 15 créditos de 4.0 pueden producir un cambio considerable; con muchos créditos acumulados, el mismo semestre tendrá un impacto menor.",
},
{
  q: "¿Las materias repetidas cambian mi GPA acumulado?",
  a: "Depende de la política de tu universidad. Algunas instituciones reemplazan la calificación anterior, mientras que otras contabilizan ambos intentos o aplican reglas especiales. Consulta siempre el reglamento académico antes de estimar el efecto de repetir una materia.",
},
{
  q: "¿Los créditos transferidos cuentan para mi GPA?",
  a: "No existe una regla universal. Una universidad puede aceptar los créditos transferidos para cumplir requisitos de graduación sin incorporar las calificaciones transferidas al GPA institucional. Revisa cómo aparecen en tu expediente y la política de transferencia de tu institución.",
},
{
  q: "¿Por qué mi GPA calculado no coincide exactamente con el de mi universidad?",
  a: "Puede haber diferencias por la escala utilizada, reglas de redondeo, materias repetidas, cursos transferidos, asignaturas Pass/Fail u otras políticas institucionales. Para solicitudes oficiales, utiliza el GPA que figure en tu expediente académico.",
},
{
  q: "¿Es lo mismo el GPA acumulado y el GPA de un semestre?",
  a: "No. El GPA semestral solo incluye las materias de un período concreto, mientras que el GPA acumulado combina los créditos y puntos de calidad de todos los períodos que cuentan para el promedio.",
},
{
  q: "¿Qué materias no suelen afectar el GPA acumulado?",
  a: "Dependiendo de la universidad, cursos Pass/Fail, retiros oficiales, incompletos, auditorías o determinadas materias transferidas pueden quedar fuera del cálculo. Las reglas exactas dependen de cada institución.",
},
  {
    q: "¿Cuál GPA piden las becas, el semestral o el acumulado?",
    a: "La mayoría de becas y programas de admisión solicitan el GPA acumulado, ya que refleja el rendimiento académico total y no solo de un período.",
  },
  {
    q: "¿Es lo mismo GPA acumulado que promedio general?",
    a: "En muchos países latinoamericanos se usa \"promedio general\" en lugar de GPA acumulado, pero el concepto es similar: un número que resume el rendimiento académico total de todos los períodos completados.",
  },
];

const schemaMarkup = [
  ORG_SCHEMA,
  WEBSITE_SCHEMA,
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de GPA Acumulado",
    url: "https://calcunotas.com/gpa-acumulado/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": "https://calcunotas.com/#organization" },
    description:
      "Calcula tu GPA acumulado gratis combinando tu GPA anterior, créditos completados y las calificaciones del semestre actual, en escala 4.0.",
    featureList: [
      "Combina GPA anterior con el semestre actual",
      "Escala 4.0 estándar universitaria",
      "Cálculo de puntos de calidad por materia",
      "Detecta cuánto puede subir o bajar tu GPA acumulado",
      "Sin registro, 100 % gratuita",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    dateModified: DATE_MODIFIED,
    mainEntity: FAQS_DATA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo calcular tu GPA acumulado",
    step: [
      {
        "@type": "HowToStep",
        name: "Ingresa tu GPA anterior",
        text: "Escribe el GPA acumulado que tenías al terminar el semestre anterior, según tu historial académico oficial.",
      },
      {
        "@type": "HowToStep",
        name: "Ingresa los créditos anteriores",
        text: "Escribe el total de horas crédito ya completadas antes del semestre actual.",
      },
      {
        "@type": "HowToStep",
        name: "Agrega las materias actuales",
        text: "Ingresa cada materia del semestre en curso con su calificación en letra y horas crédito.",
      },
      {
        "@type": "HowToStep",
        name: "Obtén tu nuevo GPA acumulado",
        text: "La calculadora combina todo y muestra tu nuevo GPA acumulado al instante.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      { "@type": "ListItem", position: 2, name: "GPA Acumulado", item: "https://calcunotas.com/gpa-acumulado/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Calculadora de GPA Acumulado: guía completa y fórmula",
    description:
      "Guía completa sobre cómo calcular tu GPA acumulado: fórmula, ejemplo paso a paso, diferencia con el GPA semestral y errores comunes.",
    image: "https://calcunotas.com/og/gpa-acumulado.png",
    author: AUTHOR_SCHEMA,
    reviewedBy: AUTHOR_SCHEMA,
    publisher: {
      "@type": "Organization",
      "@id": "https://calcunotas.com/#organization",
      name: "CalcuNotas",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    mainEntityOfPage: "https://calcunotas.com/gpa-acumulado/",
  },
];

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

  // ─── GAP FIX: removed 19 fake per-country hreflang duplicates. All of
  //    them pointed to the exact same URL — that's not localization, it's
  //    a duplicate-content signal. Just declare the canonical. Add real
  //    hreflang entries later only if genuinely distinct localized pages
  //    exist. ───────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://calcunotas.com/gpa-acumulado/",
  },

  openGraph: {
    title: "Calculadora GPA Acumulado | CalcuNotas",
    description:
      "Combina tu GPA anterior con el semestre actual y obtén tu nuevo GPA acumulado al instante. Gratis, sin registro.",
    url: "https://calcunotas.com/gpa-acumulado/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "article",
    // ─── GAP FIX: og:image was missing ──────────────────────────────────
    images: [
      {
        url: "https://calcunotas.com/og/gpa-acumulado.png",
        width: 1200,
        height: 630,
        alt: "Calculadora de GPA Acumulado — CalcuNotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora GPA Acumulado | CalcuNotas",
    description:
      "Calcula tu GPA acumulado gratis: GPA anterior + semestre actual = nuevo promedio, en escala 4.0.",
    images: ["https://calcunotas.com/og/gpa-acumulado.png"],
  },
  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

// ─── GAP FIX: outbound citations + internal links (topical authority) ──────
const FUENTES = [
  { nombre: "National Center for Education Statistics (NCES) — GPA scales", url: "https://nces.ed.gov/" },
];
const RELACIONADOS = [
  { nombre: "Calculadora de Notas de Examen", url: "/" },
  { nombre: "Calculadora de Nota Final", url: "/nota-final/" },
  { nombre: "Sobre nosotros y metodología editorial", url: "/sobre-nosotros/" },
];

export default function GPAAcumuladoPage() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* ── GAP FIX: this page had no JSON-LD at all — now it does ───────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b px-8 from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-6 items-center">
            <div>
              {/* ── GAP FIX: breadcrumb was plain text, now a real linked +
                  itemScope breadcrumb like the other pages ────────────── */}
              <nav aria-label="Ruta de navegación" className="text-sm text-[#667085] mb-3">
                <ol className="flex flex-wrap gap-1 list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
                  <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <a href="/" itemProp="item" className="hover:text-blue-600">
                      <span itemProp="name">Inicio</span>
                    </a>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li aria-hidden="true" className="mx-1">/</li>
                  <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <span itemProp="name" aria-current="page">GPA Acumulado</span>
                    <meta itemProp="position" content="2" />
                  </li>
                </ol>
              </nav>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-2">
                Calculadora GPA Acumulado
              </h1>

              {/* ── GAP FIX: visible last-updated + reviewed-by trust line ── */}
              <p className="text-[13px] text-[#8a94a6] mb-4">
                Actualizado el 25 de julio de 2026 · Revisado por el{" "}
                <a href="/sobre-nosotros/" className="underline underline-offset-2 hover:text-blue-600">
                  equipo editorial de CalcuNotas
                </a>
              </p>

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
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <GPACalculatorLab />

          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-14">
        <div className=" mx-auto">
          <article
            className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden"
            itemScope
            itemType="https://schema.org/Article"
          >

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
{/* ── GAP 1: CÓMO CALCULAR EL GPA NECESARIO PARA ALCANZAR UNA META ───── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Qué GPA Necesitas en los Próximos Semestres para Alcanzar tu Meta?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Si ya tienes un GPA acumulado y quieres llegar a una meta concreta,
    puedes calcular qué promedio necesitas obtener en los créditos que
    todavía te faltan. Este cálculo es especialmente útil para planificar
    una beca, un programa de honor, una admisión de posgrado o una meta
    personal antes de graduarte.
  </p>

  <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
    GPA Necesario = (GPA Objetivo × Créditos Totales − GPA Actual × Créditos Completados) ÷ Créditos Restantes
  </div>

  <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
    <h3 className="text-xl font-bold mb-3">
      Ejemplo: subir de 2.80 a 3.20
    </h3>

    <p className="text-gray-700 leading-8 mb-4">
      Supongamos que tienes un GPA acumulado de <strong>2.80</strong>,
      has completado <strong>60 créditos</strong> y todavía te faltan
      <strong> 60 créditos</strong> para terminar.
    </p>

    <div className="space-y-2 text-gray-700 leading-7 text-[15px]">
      <p>
        Puntos actuales = 2.80 × 60 = <strong>168</strong>
      </p>
      <p>
        Puntos necesarios para terminar con 3.20 = 3.20 × 120 ={" "}
        <strong>384</strong>
      </p>
      <p>
        Puntos que faltan = 384 − 168 = <strong>216</strong>
      </p>
      <p>
        GPA necesario en los 60 créditos restantes = 216 ÷ 60 ={" "}
        <strong>3.60</strong>
      </p>
    </div>

    <p className="text-gray-700 leading-8 mt-4">
      En este escenario necesitarías mantener aproximadamente un{" "}
      <strong>3.60 GPA</strong> en los créditos restantes para terminar
      con un GPA acumulado de 3.20.
    </p>
  </div>

  <p className="text-[13px] text-gray-500 mt-4 leading-6">
    Este cálculo supone que todos los créditos y puntos se contabilizan de
    acuerdo con la política de tu institución. Las reglas de repetición,
    transferencia y reemplazo de calificaciones pueden cambiar el resultado.
  </p>
</section>{/* ── GAP 2: MÁXIMO GPA POSIBLE ──────────────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Todavía Puedes Alcanzar un GPA de 3.5 o Más?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Antes de fijar una meta académica, conviene comprobar si todavía es
    matemáticamente posible. La forma más sencilla es calcular tu GPA máximo
    suponiendo que obtendrás un <strong>4.0 en todos los créditos restantes</strong>.
  </p>

  <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-bold overflow-x-auto mb-6 text-center text-[15px]">
    GPA Máximo Posible = (GPA Actual × Créditos Completados + 4.0 × Créditos Restantes) ÷ Créditos Totales
  </div>

  <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
    <table className="w-full min-w-[680px] border-collapse">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-5 py-4 text-left font-bold">
            GPA Actual
          </th>
          <th className="px-5 py-4 text-left font-bold">
            Créditos Completados
          </th>
          <th className="px-5 py-4 text-left font-bold">
            Créditos Restantes
          </th>
          <th className="px-5 py-4 text-left font-bold">
            Máximo Aproximado
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-gray-200">
          <td className="px-5 py-4 text-gray-700">2.50</td>
          <td className="px-5 py-4 text-gray-700">60</td>
          <td className="px-5 py-4 text-gray-700">60</td>
          <td className="px-5 py-4 font-bold text-blue-700">3.25</td>
        </tr>

        <tr className="border-b border-gray-200">
          <td className="px-5 py-4 text-gray-700">2.80</td>
          <td className="px-5 py-4 text-gray-700">60</td>
          <td className="px-5 py-4 text-gray-700">60</td>
          <td className="px-5 py-4 font-bold text-blue-700">3.40</td>
        </tr>

        <tr>
          <td className="px-5 py-4 text-gray-700">3.00</td>
          <td className="px-5 py-4 text-gray-700">60</td>
          <td className="px-5 py-4 text-gray-700">60</td>
          <td className="px-5 py-4 font-bold text-blue-700">3.50</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-gray-700 leading-8">
    Esta comprobación es útil porque evita perseguir una meta que ya no es
    alcanzable con los créditos restantes. Si tu objetivo es superior al GPA
    máximo posible, necesitarías revisar si tu institución permite repetir
    materias, reemplazar calificaciones u otras opciones académicas.
  </p>
</section>{/* ── GAP 3: PROYECCIÓN DE VARIOS SEMESTRES ──────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    Proyección del GPA Durante Varios Semestres
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Un solo semestre no siempre muestra el efecto real de una estrategia para
    mejorar el GPA. Si todavía te quedan varios períodos académicos, puedes
    proyectar cómo evolucionaría tu promedio suponiendo un rendimiento
    determinado en cada semestre.
  </p>

  <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 mb-5">
    <h3 className="text-xl font-bold mb-3">
      Ejemplo de planificación
    </h3>

    <p className="text-gray-700 leading-8 mb-4">
      Un estudiante tiene un GPA de <strong>2.80</strong> después de
      <strong> 60 créditos</strong> y todavía necesita completar
      <strong> 60 créditos</strong>. Si obtiene aproximadamente un
      <strong> 3.50</strong> en esos créditos restantes, su GPA final se
      acercaría a:
    </p>

    <div className="bg-white rounded-xl border border-blue-100 p-4 text-center font-bold text-gray-800">
      (2.80 × 60 + 3.50 × 60) ÷ 120 = <strong>3.15</strong>
    </div>
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Primer Semestre
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Concéntrate en conseguir un GPA alto sin asumir que un único semestre
        cambiará por completo el promedio acumulado.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Semestres Intermedios
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Revisa tu GPA después de cada período y vuelve a calcular cuánto
        necesitas en los créditos restantes.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Últimos Créditos
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Cuando quedan pocos créditos, cada semestre tiene menos capacidad para
        modificar un historial académico que ya contiene muchos créditos.
      </p>
    </div>
  </div>
</section>{/* ── GAP 4: IMPACTO DE LAS HORAS CRÉDITO ────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Por Qué las Materias con Más Créditos Tienen Mayor Impacto?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    En un GPA ponderado por créditos, una materia no tiene el mismo peso que
    otra si sus horas crédito son diferentes. Una calificación de 4.0 en una
    materia de cuatro créditos aporta más puntos de calidad que un 4.0 en una
    materia de un solo crédito.
  </p>

  <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
    <table className="w-full min-w-[620px] border-collapse">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-5 py-4 text-left font-bold">Materia</th>
          <th className="px-5 py-4 text-left font-bold">GPA</th>
          <th className="px-5 py-4 text-left font-bold">Créditos</th>
          <th className="px-5 py-4 text-left font-bold">Puntos de Calidad</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-gray-200">
          <td className="px-5 py-4 text-gray-700">Materia A</td>
          <td className="px-5 py-4 text-gray-700">4.0</td>
          <td className="px-5 py-4 text-gray-700">4</td>
          <td className="px-5 py-4 font-bold text-blue-700">16.0</td>
        </tr>

        <tr>
          <td className="px-5 py-4 text-gray-700">Materia B</td>
          <td className="px-5 py-4 text-gray-700">4.0</td>
          <td className="px-5 py-4 text-gray-700">1</td>
          <td className="px-5 py-4 font-bold text-blue-700">4.0</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-gray-700 leading-8">
    Ambas materias tienen la misma calificación, pero la primera aporta
    <strong> 16 puntos de calidad</strong> frente a solo <strong>4</strong>.
    Por eso, cuando planifiques tu carga académica, el número de créditos es
    tan importante como la calificación obtenida.
  </p>
</section>{/* ── GAP 5: REPETICIÓN DE MATERIAS Y GPA ────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Cómo Afecta Repetir una Materia al GPA Acumulado?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Repetir una materia puede cambiar el GPA acumulado de formas muy
    diferentes según las reglas de la universidad. No debes asumir que la
    nueva calificación reemplazará automáticamente a la anterior.
  </p>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Reemplazo de Calificación
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Algunas instituciones permiten que la nueva calificación sustituya a
        la anterior para el cálculo del GPA. Si obtienes una nota mucho mejor,
        el impacto puede ser significativo.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Ambas Calificaciones Cuentan
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Otras instituciones mantienen ambos intentos dentro del historial y
        ambos pueden contribuir al cálculo del promedio.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Regla Especial
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Algunas universidades aplican límites de repetición, reglas por
        asignatura o políticas específicas para cursos reprobados.
      </p>
    </div>
  </div>

  <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 mt-5">
    <p className="text-gray-700 leading-7 text-[15px]">
      <strong>Consejo:</strong> antes de modificar tu GPA usando una materia
      repetida, comprueba en tu reglamento académico si se reemplaza la nota,
      se promedian ambos intentos o se mantienen los dos resultados.
    </p>
  </div>
</section>{/* ── GAP 6: CRÉDITOS TRANSFERIDOS ──────────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Los Créditos Transferidos Cuentan para el GPA Acumulado?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Los créditos transferidos pueden contar para tu progreso hacia el título
    sin necesariamente utilizarse de la misma forma para calcular tu GPA
    institucional. La respuesta depende de cómo tu universidad evalúe las
    materias transferidas.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Créditos que se Aceptan
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Una universidad puede aceptar una materia transferida para cumplir
        requisitos del programa y sumar esos créditos hacia la graduación.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-3">
        Créditos que no Cambian el GPA
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        En algunas instituciones, las materias transferidas aparecen en el
        expediente pero sus calificaciones no se incorporan al GPA institucional.
      </p>
    </div>
  </div>

  <p className="text-[13px] text-gray-500 mt-4 leading-6">
    Si tienes créditos de otra universidad, utiliza los datos de tu expediente
    actual y sigue la política oficial de transferencia de tu institución antes
    de introducirlos en una estimación.
  </p>
</section>{/* ── GAP 7: REDONDEO DEL GPA ────────────────────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Cómo se Redondea el GPA Acumulado?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    El resultado matemático puede contener más decimales de los que aparecen
    normalmente en un expediente académico. Por ejemplo, un cálculo puede
    producir <strong>3.276</strong>, mientras que tu universidad podría mostrar
    <strong> 3.28</strong> o utilizar otra regla de presentación.
  </p>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-2">
        Cálculo Interno
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Mantén todos los decimales posibles durante las operaciones para evitar
        acumular errores de redondeo.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-2">
        Resultado Mostrado
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Una calculadora puede mostrar el resultado con dos decimales para que
        sea fácil de interpretar.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <h3 className="text-xl font-bold mb-2">
        Expediente Oficial
      </h3>
      <p className="text-gray-700 leading-7 text-[15px]">
        Para becas, graduación o admisiones, utiliza siempre el GPA que figure
        en tu expediente y las reglas oficiales de tu institución.
      </p>
    </div>
  </div>
</section>{/* ── GAP 8: LIMITACIONES DE LA ESCALA 4.0 ───────────────────────────── */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿La Escala GPA 4.0 es Igual en Todas las Universidades?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    No necesariamente. La escala 4.0 es una referencia ampliamente utilizada,
    pero las universidades pueden asignar valores diferentes a calificaciones
    como A-, B+ o B. Algunas instituciones también utilizan escalas ponderadas,
    sistemas propios o reglas especiales para determinados cursos.
  </p>

  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
    <h3 className="text-xl font-bold mb-3">
      Antes de calcular tu GPA
    </h3>

    <ul className="space-y-2 text-gray-700 leading-7 text-[15px]">
      <li>• Comprueba qué valor GPA asigna tu universidad a cada letra.</li>
      <li>• Verifica si las materias repetidas reemplazan la calificación anterior.</li>
      <li>• Comprueba cómo se tratan los cursos transferidos.</li>
      <li>• Revisa si las materias Pass/Fail afectan el promedio.</li>
      <li>• Utiliza el expediente oficial cuando el cálculo sea para una solicitud académica.</li>
    </ul>
  </div>

  <p className="text-gray-700 leading-8 mt-5">
    Por eso, esta herramienta debe utilizarse como una estimación basada en la
    escala indicada. Si tu institución utiliza reglas diferentes, adapta los
    valores a su reglamento académico antes de tomar una decisión.
  </p>
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

                {/* ── GAP FIX: outbound citation to authoritative source ──── */}
                <p className="text-[12px] text-gray-500 mt-3">
                  Fuente de referencia sobre escalas GPA:{" "}
                  {FUENTES.map((f, i) => (
                    <span key={f.url}>
                      <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2">
                        {f.nombre}
                      </a>
                      {i < FUENTES.length - 1 ? " · " : ""}
                    </span>
                  ))}
                  . Las políticas exactas siempre dependen de tu institución.
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
{/* GPA OBJETIVO */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Qué GPA Necesitas para Alcanzar tu Objetivo?
  </h2>

  <p className="text-gray-700 leading-8 mb-4">
    Muchos estudiantes utilizan una calculadora de GPA acumulado para saber
    si pueden alcanzar un GPA objetivo antes de graduarse. Esto es común
    cuando se busca mantener una beca, ingresar a un programa de honor o
    cumplir requisitos de admisión para estudios de posgrado.
  </p>

  <p className="text-gray-700 leading-8">
    Cuanto más cerca estés de terminar la carrera, más difícil será modificar
    significativamente tu GPA acumulado porque cada nuevo semestre representa
    una parte menor de todos los créditos completados.
  </p>
</section>{/* ESCALA GPA */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    Escala GPA 4.0 Más Utilizada
  </h2>

  <div className="overflow-x-auto rounded-2xl border border-gray-200">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-5 py-4 text-left">Calificación</th>
          <th className="px-5 py-4 text-left">Puntos GPA</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="px-5 py-4">A</td><td className="px-5 py-4">4.0</td></tr>
        <tr><td className="px-5 py-4">A-</td><td className="px-5 py-4">3.7</td></tr>
        <tr><td className="px-5 py-4">B+</td><td className="px-5 py-4">3.3</td></tr>
        <tr><td className="px-5 py-4">B</td><td className="px-5 py-4">3.0</td></tr>
        <tr><td className="px-5 py-4">C</td><td className="px-5 py-4">2.0</td></tr>
        <tr><td className="px-5 py-4">D</td><td className="px-5 py-4">1.0</td></tr>
        <tr><td className="px-5 py-4">F</td><td className="px-5 py-4">0.0</td></tr>
      </tbody>
    </table>
  </div>
</section>{/* GPA ACUMULADO BAJO */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    ¿Qué Hacer si tu GPA Acumulado es Bajo?
  </h2>

  <p className="text-gray-700 leading-8 mb-4">
    Un GPA acumulado bajo no significa necesariamente que no puedas mejorar
    tu expediente académico. Muchos estudiantes aumentan su promedio con una
    planificación adecuada durante los semestres restantes.
  </p>

  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li>Prioriza materias con más créditos.</li>
    <li>Evita repetir errores en cursos básicos.</li>
    <li>Consulta las políticas de reemplazo de calificaciones.</li>
    <li>Monitorea tu GPA después de cada semestre.</li>
  </ul>
</section>{/* GLOSARIO */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-5">
    Glosario de Términos GPA
  </h2>

  <div className="space-y-4">
    <div>
      <h3 className="font-bold">GPA</h3>
      <p className="text-gray-700">
        Promedio de puntos de grado utilizado por universidades y colegios.
      </p>
    </div>

    <div>
      <h3 className="font-bold">Horas Crédito</h3>
      <p className="text-gray-700">
        Valor académico asignado a cada materia.
      </p>
    </div>

    <div>
      <h3 className="font-bold">Puntos de Calidad</h3>
      <p className="text-gray-700">
        Resultado de multiplicar puntos de grado por créditos.
      </p>
    </div>
  </div>
</section>



              {/* ── GAP FIX: visible author/E-E-A-T block ──────────────────── */}
              <section className="mb-12" aria-labelledby="autor-heading">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h2 id="autor-heading" className="text-[22px] font-bold tracking-[-0.02em] mb-3">
                    Quién escribe y revisa este contenido
                  </h2>
                  <p className="text-gray-700 text-[14px] leading-7">
                    Este artículo ha sido redactado y revisado por el{" "}
                    <a href="/sobre-nosotros/" className="text-blue-600 underline underline-offset-2">
                      equipo editorial de CalcuNotas
                    </a>
                    , especializado en herramientas de cálculo académico.
                    Publicado el 15 de enero de 2024 y actualizado por última
                    vez el 25 de julio de 2026.
                  </p>
                </div>
              </section>

              {/* ── GAP FIX: internal links for topical authority ──────────── */}
              <section className="mb-12" aria-labelledby="relacionados-heading">
                <h2 id="relacionados-heading" className="text-[20px] font-bold tracking-[-0.02em] mb-3">
                  Herramientas relacionadas
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {RELACIONADOS.map((r) => (
                    <li key={r.url}>
                      <a href={r.url} className="inline-block bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm hover:bg-blue-50">
                        {r.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ SECTION — now wrapped in FAQPage microdata to match
                  the JSON-LD, so it's eligible for FAQ rich results ──────── */}
              <section className="bg-gray-50 py-14 border-t -mx-7 md:-mx-9 -mb-9">
                <div className="xl:px-[69px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

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
                  <div
                    className="bg-slate-800 rounded p-6 space-y-4 shadow-xl"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                  >
                    {FAQS_DATA.map((faq, idx) => (
                      <details
                        key={idx}
                        className={`group ${idx < FAQS_DATA.length - 1 ? "border-b border-slate-700 pb-4" : ""}`}
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          <h3 itemProp="name">{faq.q}</h3>
                          <span className="transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <p className="mt-4 text-slate-400" itemProp="text">
                            {faq.a}
                          </p>
                        </div>
                      </details>
                    ))}
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