import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

// ─── SITE IDENTITY — same constant used across the rest of the site ───────
const SITE_AUTHOR = "CalcuNotas";
const SITE_AUTHOR_ROLE = "Web Developer and Researcher";

export const metadata = {
  title: "GPA en México: Cómo Convertir tu Promedio | CalcuNotas",
  description:
    "Aprende cómo convertir tu promedio mexicano (escala 0-10) al GPA americano (0-4.0). Tabla de equivalencias, ejemplos y qué hacer si aplicas a EE. UU.",
  keywords: [
    "gpa en méxico",
    "como saber mi gpa en mexico",
    "convertir promedio mexicano a gpa",
    "promedio a gpa",
    "escala 0-10 a 4.0",
    "gpa universidad méxico",
    "resultado general gpa",
    "promedio general universidad",
    "wes evaluacion de credenciales",
  ],
  openGraph: {
    title: "GPA en México: Cómo Convertir tu Promedio | CalcuNotas",
    description:
      "Cómo convertir tu promedio mexicano (0-10) al GPA americano (0-4.0): tabla de referencia, ejemplos y qué hacer para trámites oficiales.",
    url: "https://calcunotas.com/blog/gpa-en-mexico/",
    type: "article",
    images: [
      {
        url: "https://calcunotas.com/og/gpa-en-mexico.jpg",
        width: 1200,
        height: 630,
        alt: "GPA en México: guía de conversión — CalcuNotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPA en México: Cómo Convertir tu Promedio | CalcuNotas",
    description:
      "Tabla de equivalencias, ejemplos y pasos para convertir tu promedio mexicano al GPA americano.",
    images: ["https://calcunotas.com/og/gpa-en-mexico.jpg"],
  },
  alternates: {
    canonical: "https://calcunotas.com/blog/gpa-en-mexico/",
  },
};

const faqs = [
  {
    question: "¿Cuál es el equivalente de un promedio de 9 en México a GPA?",
    answer:
      "Usando las tablas de referencia más comunes, un 9 sobre 10 suele equivaler aproximadamente a 3.7 en la escala de 4.0, aunque esto puede variar según el evaluador.",
  },
  {
    question: "¿Las universidades mexicanas emiten un GPA en mi historial académico?",
    answer:
      "Generalmente no. Tu Kardex o historial oficial mostrará tu \"promedio general\" en escala 0–10 (o 0–100). El GPA es una conversión que se hace específicamente para procesos de admisión en instituciones que usan ese sistema.",
  },
  {
    question: "¿Puedo usar la conversión de esta página en un documento oficial?",
    answer:
      "No se recomienda. Esta tabla es una referencia general para entender aproximadamente dónde te ubicas. Para documentos oficiales, usa el servicio de evaluación de credenciales que tu universidad de destino indique.",
  },
  {
    question: "¿Qué pasa si mi universidad usa escala 0–100 en vez de 0–10?",
    answer:
      "El principio es el mismo: divide tu promedio entre 10 para obtener la escala 0–10 equivalente (por ejemplo, 86/100 = 8.6/10), y después usa la tabla de referencia de la misma forma.",
  },
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GPA en México: Cómo Convertir tu Promedio a la Escala Americana",
    description:
      "Guía sobre cómo convertir un promedio mexicano (0-10) al GPA americano (0-4.0), con tabla de referencia y pasos para trámites oficiales.",
    image: "https://calcunotas.com/og/gpa-en-mexico.jpg",
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
      jobTitle: SITE_AUTHOR_ROLE,
      url: "https://calcunotas.com/sobre-nosotros/",
    },
    reviewedBy: {
      "@type": "Person",
      name: SITE_AUTHOR,
      jobTitle: SITE_AUTHOR_ROLE,
      url: "https://calcunotas.com/sobre-nosotros/",
    },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
      logo: { "@type": "ImageObject", url: "https://calcunotas.com/logo.png" },
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: "https://calcunotas.com/blog/gpa-en-mexico/",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calcunotas.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://calcunotas.com/blog/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "GPA en México",
        item: "https://calcunotas.com/blog/gpa-en-mexico/",
      },
    ],
  },
];

const TABLA_CONVERSION = [
  { mx: "10", gpa: "4.0" },
  { mx: "9", gpa: "3.7" },
  { mx: "8", gpa: "3.0 – 3.3" },
  { mx: "7", gpa: "2.0 – 2.3" },
  { mx: "6", gpa: "1.0 – 1.3" },
  { mx: "Menos de 6", gpa: "0.0 (reprobatorio)" },
];

export default function GPAEnMexicoPage() {
  return (
    <main className=" min-h-screen bg-[#f5f7fb] text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <InvisibleHeader />

      <section className="py-10 px-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_320px] gap-6 items-start">
          <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="p-6 md:p-10">

              <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-gray-500">
                <ol className="flex flex-wrap items-center gap-1 list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
                  <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <a href="/" itemProp="item" className="hover:text-blue-600">
                      <span itemProp="name">Inicio</span>
                    </a>
                    <meta itemProp="position" content="1" />
                  </li>
                  <span aria-hidden="true">/</span>
                  <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <a href="/blog/" itemProp="item" className="hover:text-blue-600">
                      <span itemProp="name">Blog</span>
                    </a>
                    <meta itemProp="position" content="2" />
                  </li>
                  <span aria-hidden="true">/</span>
                  <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <span itemProp="name" aria-current="page">GPA en México</span>
                    <meta itemProp="position" content="3" />
                  </li>
                </ol>
              </nav>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold">GPA</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">México</span>
                <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold">Admisiones Internacionales</span>
              </div>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                GPA en México
                <span className="block text-blue-600 mt-2">Cómo Convertir tu Promedio a la Escala Americana</span>
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>Por <a href="/sobre-nosotros/" className="text-gray-700 font-semibold hover:text-blue-600">{SITE_AUTHOR}</a></span>
                <span>•</span>
                <span>Publicado: 1 sep 2026</span>
                <span>•</span>
                <span>Actualizado: 1 sep 2026</span>
              </div>

              <p className="text-[18px] text-gray-600 leading-8 mb-10 max-w-4xl">
                Si estudias en México y necesitas presentar tu expediente académico para un
                intercambio, una maestría en Estados Unidos o Canadá, o una beca internacional,
                es muy probable que te hayan pedido un "GPA" — un término que, en realidad, no
                se usa oficialmente en el sistema educativo mexicano. Esta guía explica esa
                diferencia, cómo se convierte un promedio mexicano al GPA americano y qué debes
                tener en cuenta antes de reportar un número.
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">Resumen Rápido</h2>
                <p className="text-gray-700 leading-8">
                  México usa una escala de 0 a 10 llamada "promedio general", no un GPA de 0
                  a 4.0. No existe una tabla de conversión oficial única — las universidades
                  y servicios de evaluación como WES aplican sus propias equivalencias. Esta
                  guía te da una tabla de referencia común y te explica qué hacer si necesitas
                  un GPA verificado para un trámite oficial.
                </p>
              </div>

              {/* 1. POR QUÉ MÉXICO NO USA GPA */}
              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Por Qué México No Usa "GPA"
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    En Estados Unidos, el GPA (<em>Grade Point Average</em>) es un promedio
                    ponderado en una escala de 0 a 4.0, donde cada calificación con letra
                    (A, B, C, D, F) corresponde a un valor numérico fijo.
                  </p>
                  <p>
                    En México, la mayoría de las universidades califican en una <strong>escala
                    de 0 a 10</strong> (algunas usan 0 a 100), y el término que se utiliza es
                    <strong> "promedio general"</strong>, no GPA. La nota mínima aprobatoria
                    suele ser 6 o 7 sobre 10, dependiendo de la institución y del nivel educativo.
                  </p>
                  <p>
                    Esto significa que cuando un formulario de admisión estadounidense pide tu
                    "GPA", en realidad está pidiendo la <strong>conversión</strong> de tu
                    promedio mexicano a esa escala — no un dato que tu universidad emita
                    directamente.
                  </p>
                </div>
              </section>

              {/* 2. TABLA DE REFERENCIA */}
              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  No Existe una Tabla de Conversión Oficial Única
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700 mb-8">
                  <p>
                    Es importante ser claros en esto: <strong>no hay una sola tabla de
                    conversión "oficial" reconocida por todas las universidades de EE. UU.</strong>{" "}
                    Cada institución, y cada servicio de evaluación de credenciales (como WES —
                    World Education Services, ECE, o el propio departamento de admisiones de la
                    universidad), puede aplicar una equivalencia ligeramente distinta.
                  </p>
                  <p>
                    Lo que sí existe son <strong>tablas de referencia comunes</strong>, ampliamente
                    utilizadas como punto de partida por evaluadores de credenciales y oficinas
                    de admisión. La más habitual se ve así:
                  </p>
                </div>
                <div className="overflow-x-auto rounded-3xl border border-gray-200">
                  <table className="w-full min-w-[400px] border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-5 py-4 text-left">Promedio México (0–10)</th>
                        <th className="px-5 py-4 text-left">GPA aproximado (0–4.0)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TABLA_CONVERSION.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 bg-white">
                          <td className="px-5 py-4 font-semibold text-gray-800">{row.mx}</td>
                          <td className="px-5 py-4 text-gray-700">{row.gpa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 mt-6">
                  <p className="text-gray-700 leading-8">
                    <strong>Esta tabla es una referencia general, no un estándar universal.</strong>{" "}
                    Algunas instituciones usan escalas más generosas (por ejemplo, tratando un 8
                    como 3.5), y otras más estrictas. Si tu proceso de admisión es formal, la
                    universidad casi siempre te dirá si acepta tu promedio mexicano directamente,
                    si requiere una evaluación de WES/ECE, o si tiene su propia fórmula de
                    conversión.
                  </p>
                </div>
              </section>

              {/* 3. EJEMPLO */}
              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Ejemplo de Conversión
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Supongamos que tu promedio general en la licenciatura es{" "}
                    <strong>8.6 sobre 10</strong>.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-6">
                  <p className="text-gray-700 leading-7">
                    Usando la tabla de referencia: 8.6 está entre el rango de "8" (3.0–3.3),
                    pero al estar más cerca de 9 que de 8, muchos evaluadores lo situarían
                    alrededor de <strong>3.4–3.5</strong>. Este tipo de interpolación es
                    precisamente la razón por la que dos evaluadores pueden darte números
                    ligeramente distintos para el mismo promedio.
                  </p>
                </div>
                <p className="text-[17px] leading-8 text-gray-700 mt-6">
                  Si necesitas un número exacto para un formulario oficial, <strong>no
                  calcules tu propia equivalencia informal</strong>: usa el servicio de
                  evaluación de credenciales que la universidad te indique, o pregunta
                  directamente a la oficina de admisiones qué tabla utilizan.
                </p>
              </section>

              {/* 4. CÓMO USAR NUESTRA CALCULADORA */}
              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Cómo Puedes Usar Nuestra Calculadora Mientras Tanto
                </h2>
                <div className="space-y-6 text-[17px] leading-8 text-gray-700">
                  <p>
                    Si lo que necesitas es una <strong>referencia rápida</strong> — por ejemplo,
                    para saber aproximadamente dónde te ubicas antes de solicitar una evaluación
                    oficial — puedes usar nuestra{" "}
                    <a href="/calculadora-gpa/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                      calculadora GPA
                    </a>{" "}
                    introduciendo tus materias con una equivalencia aproximada de letra según la
                    tabla de arriba. Si cursas varios semestres y quieres ver cómo cambia tu
                    promedio acumulado con el tiempo, la{" "}
                    <a href="/gpa-acumulado/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">
                      calculadora de GPA acumulado
                    </a>{" "}
                    te permite combinar tu historial con el semestre actual.
                  </p>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                    <p className="text-gray-700 leading-7">
                      Ten en cuenta que el resultado será una <strong>estimación</strong>, útil
                      para planificación personal, pero no un documento válido para trámites
                      oficiales de admisión.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. QUÉ HACER SI NECESITAS UN GPA VERIFICADO */}
              <section className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-6">
                  Qué Hacer si tu Proceso de Admisión Requiere un GPA Verificado
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: "1. Pregunta si aceptan tu promedio directamente", text: "Muchas universidades procesan el promedio en escala 0–10 internamente y hacen la conversión ellas mismas." },
                    { title: "2. Si piden una evaluación de credenciales", text: "Servicios como WES (wes.org) o ECE (ece.org) son los más reconocidos en EE. UU. y Canadá; ellos emiten el GPA equivalente de forma oficial." },
                    { title: "3. Guarda tu Kardex o historial oficial", text: "La mayoría de evaluadores lo solicitan directamente de tu universidad, no una copia que tú mismo generes." },
                    { title: "4. No reportes un GPA autocalculado", text: "Verifica primero que la institución acepta un cálculo propio — algunos procesos exigen específicamente la evaluación de un tercero." },
                  ].map((item, index) => (
                    <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                      <div className="font-bold text-blue-600 mb-2">{item.title}</div>
                      <p className="text-gray-700 leading-7">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="preguntas-frecuentes" className="mb-14">
                <h2 className="text-4xl font-black tracking-[-0.04em] mb-8">Preguntas Frecuentes</h2>
                <div className="space-y-5">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-6">
                      <summary className="cursor-pointer list-none text-lg font-black text-gray-800">{faq.question}</summary>
                      <p className="mt-4 leading-8 text-gray-700">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 text-white">
                <div className="max-w-3xl">
                  <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                    Herramientas GPA
                  </div>
                  <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] leading-tight">
                    Calcula tu GPA Estimado en Segundos
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-blue-100">
                    Introduce tus materias y créditos para obtener una referencia rápida de
                    tu GPA, o combina varios semestres con tu GPA acumulado.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/calculadora-gpa/" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#111827]">
                      Usar Calculadora GPA
                    </a>
                    <a href="/gpa-acumulado/" className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur">
                      GPA Acumulado
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </article>

          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      <InvisibleFooter />
    </main>
  );
}