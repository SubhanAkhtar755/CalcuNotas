import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import TestGradeCalculator from "@/app/components/TestGradeCalculator";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

// ─── SITE IDENTITY — FILL THIS IN WITH A REAL PERSON ──────────────────────────
// AdSense reviewers and Google's quality raters treat "Equipo CalcuNotas"
// reviewing its own "Equipo CalcuNotas" content as a fake/anonymous E-E-A-T
// signal. Put a real first name (and last initial if you want) here once,
// and it flows through the whole page instead of being hardcoded in 3 places.
const SITE_AUTHOR = "CalcuNotas"; // TODO: replace with a real name, e.g. "Carlos M."
const SITE_AUTHOR_ROLE = "Web Developer and Researcher"; // TODO: e.g. "Desarrollador y creador de CalcuNotas" — leave null if not ready to claim a title

// ─── QUICK ANSWERS ────────────────────────────────────────────────────────────
// Sourced directly from Search Console "top queries" with impressions but
// 0 clicks (e.g. "38 de 50", "76 de 100 que nota es", "40*0,7", "14 de 20").
// These are people typing a specific score into Google expecting an instant
// answer. Giving that answer in a short, scannable block (not buried in a
// 4,000-word guide) is what turns those impressions into clicks.
const QUICK_ANSWERS = [
  { q: "38 de 50", a: "76 % → 7,6 sobre 10 → Notable (C en escala anglosajona)" },
  { q: "76 de 100", a: "76 % → 7,6 sobre 10 → Notable (C)" },
  { q: "35 de 40", a: "87,5 % → 8,75 sobre 10 → Notable/Sobresaliente (B)" },
  { q: "35 de 50", a: "70 % → 7,0 sobre 10 → Notable (C)" },
  { q: "14 de 20", a: "70 % → 7,0 sobre 10 → Notable (C)" },
  { q: "13 de 20", a: "65 % → 6,5 sobre 10 → Aprobado (C-)" },
  { q: "70 de 100", a: "70 % → 7,0 sobre 10 → Notable (C)" },
  { q: "75 de 100", a: "75 % → 7,5 sobre 10 → Notable (C+)" },
  { q: "85 de 100", a: "85 % → 8,5 sobre 10 → Notable/Sobresaliente (B)" },
  { q: "40 × 0,7", a: "= 28 (aciertos necesarios para un 7/10 en un examen de 40 preguntas)" },
  { q: "70 × 0,3", a: "= 21" },
  { q: "55 × 0,7", a: "= 38,5" },
];

// ─── FAQS (single source of truth — also feeds the JSON-LD schema below) ─────
const FAQS = [
  {
    q: "¿Cómo se calcula la nota de un examen?",
    a: "Divide las respuestas correctas entre el total de preguntas y multiplica por 10 (España) o por 100 (porcentaje). Por ejemplo: 35 aciertos en 50 preguntas = (35 ÷ 50) × 10 = 7,0 sobre 10.",
  },
  {
    q: "¿Cuántos aciertos necesito para aprobar un examen de 40 preguntas?",
    a: "En España el aprobado está en 5/10 (50%), así que necesitas 20 aciertos de 40. Si el examen exige 6/10 (60%), necesitas 24. En México el mínimo es 6/10, también 24 aciertos de 40.",
  },
  {
    q: "¿Cómo afectan los errores en un examen tipo test con penalización?",
    a: "La fórmula es: Nota = (Aciertos − Errores × Factor) ÷ Total × 10. El factor más habitual en España es 0,25 por error (exámenes con 4 opciones). Nuestra calculadora incluye este campo.",
  },
  {
    q: "¿Cómo se calcula la nota si las preguntas tienen diferente puntuación?",
    a: "Cuando las preguntas tienen distinto valor, no debes contar únicamente los aciertos. Suma los puntos obtenidos, divide esa cantidad entre la puntuación máxima posible y multiplica por 100 para obtener el porcentaje. Después puedes convertir el resultado a la escala de tu examen.",
  },
  {
    q: "¿Qué pasa si mi nota está justo cerca del aprobado?",
    a: "El resultado puede depender de las reglas de redondeo aplicadas por tu centro o convocatoria. Por ejemplo, una nota calculada de 4,96 podría mostrarse como 5,0 si se redondea a una cifra decimal, pero no todos los sistemas utilizan la misma regla. Si estás cerca del límite, consulta los criterios oficiales.",
  },
  {
    q: "¿Cómo puedo saber cuántos aciertos necesito para sacar un 7?",
    a: "Sin penalización, multiplica el número total de preguntas por 0,70. Por ejemplo, en un examen de 50 preguntas necesitas 35 aciertos para alcanzar el 70%. Si existe penalización por errores, necesitas tener en cuenta también los puntos descontados.",
  },
  {
    q: "¿Puedo calcular un examen con preguntas de distinto valor?",
    a: "Si las preguntas tienen diferente puntuación, debes trabajar con los puntos obtenidos y los puntos máximos del examen en lugar de contar únicamente preguntas correctas. La fórmula general es: porcentaje = (puntos obtenidos ÷ puntos máximos) × 100.",
  },
  {
    q: "¿Qué nota es un 75 % en escala española?",
    a: "Un 75 % equivale a un 7,5 sobre 10, que en España se llama Notable. En el sistema de letras anglosajón correspondería a una C+.",
  },
  {
    q: "¿Las respuestas en blanco restan puntos?",
    a: "En la mayoría de exámenes tipo test las preguntas en blanco no restan. Solo restan si lo indican explícitamente las bases del examen o la convocatoria de oposición.",
  },
  {
    q: "¿Funciona esta calculadora para exámenes de oposiciones?",
    a: "Sí. Las oposiciones españolas usan penalización habitualmente de −1/3 o −1/4 por error. Introduce el factor de tu convocatoria en el campo de penalización y obtén la nota neta al instante.",
  },
  {
    q: "¿Cuál es la diferencia entre nota sobre 10 y porcentaje?",
    a: "Son la misma escala con diferente factor. Un 7/10 equivale al 70%. La escala 0-10 es estándar en España y México; el porcentaje (0-100) es más común en Latinoamérica y el sistema anglosajón.",
  },
  {
    q: "¿Cómo se calcula la nota del examen MIR?",
    a: "El MIR aplica una penalización de 1/3 por respuesta incorrecta. Fórmula: Nota MIR = (Aciertos − Errores × 0,333) ÷ Total × 10. Las preguntas en blanco no restan.",
  },
  {
    q: "¿Cuántos fallos puedo tener en un examen de 100 preguntas para aprobar?",
    a: "Sin penalización: puedes fallar hasta 50 preguntas si el aprobado es 50% (España). Con penalización de 0,25: la nota neta = (Aciertos − Errores × 0,25) ÷ 100 × 10. Para un aprobado de 5, la combinación óptima es responder solo lo que sepas seguro.",
  },
  {
    q: "¿Qué nota es un 6 sobre 10 en porcentaje?",
    a: "Un 6 sobre 10 equivale al 60%. En España es Aprobado. En el sistema anglosajón correspondería a una D (60-69%).",
  },
  {
    q: "¿Cuántos aciertos necesito para un notable en 50 preguntas?",
    a: "El notable en España empieza en 7/10 (70%). En 50 preguntas sin penalización necesitas 35 aciertos. Con penalización de 0,25 necesitas aproximadamente 37 aciertos para compensar posibles fallos.",
  },
  {
    q: "¿Qué nota mínima se necesita para aprobar en Colombia?",
    a: "En Colombia la escala es de 0 a 5 y el aprobado mínimo es 3,0 sobre 5 (equivale al 60%). Algunas instituciones tienen el aprobado en 3,5.",
  },
  {
    q: "¿Cómo se convierte una nota de porcentaje a nota sobre 10?",
    a: "Divide el porcentaje entre 10. Ejemplo: 75% ÷ 10 = 7,5 sobre 10. O al revés: multiplica la nota por 10 para obtener el porcentaje: 8,5 × 10 = 85%.",
  },
  {
    q: "¿Qué diferencia hay entre nota bruta y nota neta?",
    a: "La nota bruta es el número de aciertos sin penalización. La nota neta es el resultado después de aplicar el descuento por errores: Nota neta = Aciertos − (Errores × Factor). La calificación final siempre se calcula sobre la nota neta.",
  },
  {
    q: "¿Puedo usar esta calculadora para corregir exámenes como profesor?",
    a: "Sí. Permite definir el total de preguntas, la nota mínima de aprobado y el factor de penalización. Calcula la nota de cada alumno en segundos y muestra la tabla completa de calificaciones.",
  },
  // ── NUEVO: entradas derivadas directamente de queries reales en GSC ──────
  {
    q: "¿Cuánto es 38 de 50 en un examen?",
    a: "38 de 50 es un 76 % (38 ÷ 50 × 100), lo que equivale a 7,6 sobre 10 — Notable en España, o una C en escala anglosajona.",
  },
  {
    q: "¿76 de 100 qué nota es?",
    a: "76 de 100 es un 76 %, equivalente a 7,6 sobre 10 (Notable) o una C en la escala A–F.",
  },
  {
    q: "¿14 de 20 qué nota es?",
    a: "14 de 20 equivale al 70 % (14 ÷ 20 × 100), es decir 7,0 sobre 10 — Notable en España.",
  },
  {
    q: "¿Qué significa una nota C en un examen?",
    a: "En la escala anglosajona A–F, la letra C corresponde normalmente a un 70–79 % de aciertos, equivalente a un 7,0–7,9 sobre 10 (Notable en España). El rango exacto puede variar ligeramente según la institución.",
  },
  {
    q: "¿Qué significa una nota F en un examen?",
    a: "La letra F corresponde a un resultado por debajo del mínimo de aprobado, normalmente menos del 60 % (o menos del 5/10 en España). Significa que el examen no se ha superado.",
  },
];

// ─── SCHEMA MARKUP ────────────────────────────────────────────────────────────
const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Notas de Examen",
    url: "https://calcunotas.com",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    description:
      "Herramienta gratuita para calcular la nota de cualquier examen: porcentaje, escala 0-10, nota con letra y penalización por errores. Compatible con España, México, Colombia, Chile, Argentina y todo LATAM.",
    featureList: [
      "Cálculo instantáneo de porcentaje",
      "Escala 0-10 para España y México",
      "Escala porcentual para Latinoamérica",
      "Penalización por errores tipo test y oposiciones",
      "Nota mínima de aprobado configurable",
      "Conversión a nota con letra A-F",
      "Fórmula MIR y oposiciones administrativas",
      "Sin registro, 100 % gratuita",
    ],
  },
  // ── FAQPage — generado desde FAQS, ya no puede desincronizarse ─────────
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo calcular la nota de un examen paso a paso",
    step: [
      {
        "@type": "HowToStep",
        name: "Introduce el total de preguntas",
        text: "Escribe el número total de preguntas o puntos que tiene el examen.",
      },
      {
        "@type": "HowToStep",
        name: "Indica tus aciertos o errores",
        text: "Puedes introducir directamente el número de respuestas correctas o el de incorrectas.",
      },
      {
        "@type": "HowToStep",
        name: "Ajusta la penalización si la hay",
        text: "Para exámenes tipo test con penalización, introduce el factor (0,25; 0,33; 0,5). Para exámenes sin penalización déjalo en 0.",
      },
      {
        "@type": "HowToStep",
        name: "Lee tu nota al instante",
        text: "La calculadora muestra el porcentaje, la nota sobre 10 y la nota con letra según la escala seleccionada.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Calculadora de Notas de Examen",
        item: "https://calcunotas.com",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Calculadora de Notas de Examen: Guía completa de cálculo y escalas",
    description:
      "Guía completa sobre cómo calcular la nota de un examen: fórmulas, penalización por errores, escalas por país y tabla de conversión.",
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
      url: "https://calcunotas.com/sobre-nosotros/",
    },
    reviewedBy: {
      "@type": "Person",
      name: SITE_AUTHOR,
      url: "https://calcunotas.com/sobre-nosotros/",
    },
    publisher: {
      "@type": "Organization",
      name: "CalcuNotas",
      url: "https://calcunotas.com",
    },
    datePublished: "2024-01-15",
    dateModified: "2026-07-25",
    mainEntityOfPage: "https://calcunotas.com",
  },
];

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Calculadora de Notas de Examen | Nota, % y Letra al Instante",
  description:
    "Calcula la nota de tu examen en segundos: porcentaje, nota sobre 10 y letra. Con penalización tipo test y oposiciones (MIR, 1/3, 1/4). España, México, Colombia, Chile y LATAM. Gratis, sin registro.",
  keywords: [
    "calculadora de notas de examen",
    "calcular nota examen",
    "calculadora de calificaciones",
    "calcular nota de prueba",
    "calcular nota examen con aciertos y errores",
    "calculadora nota tipo test con penalización",
    "calcular porcentaje nota examen",
    "calculadora nota examen sobre 10",
    "calcular cuántos aciertos necesito para aprobar",
    "nota de examen porcentaje a letra",
    "calculadora nota examen oposiciones",
    "calcular nota MIR penalización",
    "calculadora nota examen tipo test penalización 1/4",
    "calculadora nota oposiciones administrativas",
    "fórmula nota examen MIR",
    "cuántos fallos puedo tener en el examen",
    "cuántos fallos para aprobar examen 100 preguntas",
    "cuántos aciertos necesito para un notable",
    "cuántas preguntas puedo fallar en el examen",
    "calculadora nota examen colombia escala 0-5",
    "calculadora nota examen chile escala 1-7",
    "nota mínima para aprobar en España México Colombia",
    "calculadora notas para maestros",
    "convertir porcentaje a nota con letra",
    "escala de calificaciones españa",
    "fórmula calcular nota examen",
    "cuánto es un 7 en porcentaje",
    "nota bruta y nota neta examen",
    "tabla conversión notas porcentaje a 10",
    // ── NUEVO: cola larga real observada en Search Console ────────────────
    "cuanto es 38 de 50 en un examen",
    "76 de 100 que nota es",
    "14 de 20 que nota es",
    "cuanto es 35 de 40 en un examen",
    "que es una nota c",
    "que es una nota f en un examen",
  ],
  authors: [{ name: SITE_AUTHOR, url: "https://calcunotas.com/sobre-nosotros/" }],
  creator: "CalcuNotas",
  publisher: "CalcuNotas",
  alternates: {
    canonical: "https://calcunotas.com",
    languages: {
      es: "https://calcunotas.com",
      "es-ES": "https://calcunotas.com",
      "es-MX": "https://calcunotas.com",
      "es-AR": "https://calcunotas.com",
      "es-CO": "https://calcunotas.com",
      "es-CL": "https://calcunotas.com",
      "es-PE": "https://calcunotas.com",
      "es-VE": "https://calcunotas.com",
      "es-EC": "https://calcunotas.com",
      "es-BO": "https://calcunotas.com",
      "es-PY": "https://calcunotas.com",
      "es-UY": "https://calcunotas.com",
      "es-GT": "https://calcunotas.com",
      "es-CU": "https://calcunotas.com",
      "es-DO": "https://calcunotas.com",
      "es-HN": "https://calcunotas.com",
      "es-SV": "https://calcunotas.com",
      "es-NI": "https://calcunotas.com",
      "es-PA": "https://calcunotas.com",
      "es-CR": "https://calcunotas.com",
    },
  },
  openGraph: {
    title: "Calculadora de Notas de Examen — Nota, % y Letra al Instante",
    description:
      "Calcula la nota de cualquier examen en segundos. Penalización tipo test, escala 0-10 y A-F. Compatible con España, México, Colombia, Chile y todo LATAM. Gratis.",
    url: "https://calcunotas.com",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Notas de Examen | CalcuNotas",
    description:
      "Calcula tu nota al instante: porcentaje, nota sobre 10 y letra. Con penalización tipo test y oposiciones. Gratis, sin registro.",
  },
  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

// ─── DATOS ESTÁTICOS ──────────────────────────────────────────────────────────

const ESCALA_ESPANA = [
  { rango: "9 – 10", letra: "A / Sobresaliente", nivel: "Excelente", porcentaje: "90 – 100 %", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  { rango: "7 – 8,99", letra: "B / Notable", nivel: "Muy bueno", porcentaje: "70 – 89 %", color: "bg-blue-50 text-blue-800 border-blue-200" },
  { rango: "5 – 6,99", letra: "C / Aprobado", nivel: "Suficiente", porcentaje: "50 – 69 %", color: "bg-yellow-50 text-yellow-800 border-yellow-200" },
  { rango: "4 – 4,99", letra: "D / Suspenso", nivel: "Por debajo del mínimo", porcentaje: "40 – 49 %", color: "bg-orange-50 text-orange-800 border-orange-200" },
  { rango: "0 – 3,99", letra: "F / Suspenso grave", nivel: "Insuficiente", porcentaje: "0 – 39 %", color: "bg-red-50 text-red-800 border-red-200" },
];

const ESCALA_PORCENTAJE = [
  { rango: "90 – 100 %", letra: "A", nivel: "Excelente", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  { rango: "80 – 89 %", letra: "B", nivel: "Bueno", color: "bg-blue-50 text-blue-800 border-blue-200" },
  { rango: "70 – 79 %", letra: "C", nivel: "Regular / Aprobado", color: "bg-yellow-50 text-yellow-800 border-yellow-200" },
  { rango: "60 – 69 %", letra: "D", nivel: "Bajo", color: "bg-orange-50 text-orange-800 border-orange-200" },
  { rango: "< 60 %", letra: "F", nivel: "Reprobado", color: "bg-red-50 text-red-800 border-red-200" },
];

const NOTA_MINIMA_PAISES = [
  { pais: "🇪🇸 España", escala: "0 – 10", minimo: "5,0", porcentaje: "50 %", recuperacion: "Segunda convocatoria" },
  { pais: "🇲🇽 México", escala: "0 – 10", minimo: "6,0", porcentaje: "60 %", recuperacion: "Examen extraordinario" },
  { pais: "🇨🇴 Colombia", escala: "0 – 5", minimo: "3,0", porcentaje: "60 %", recuperacion: "Habilitación" },
  { pais: "🇨🇱 Chile", escala: "1 – 7", minimo: "4,0", porcentaje: "60 %", recuperacion: "Examen de repetición" },
  { pais: "🇦🇷 Argentina", escala: "0 – 10", minimo: "4,0", porcentaje: "40 %", recuperacion: "Recuperatorio" },
  { pais: "🇵🇪 Perú / 🇻🇪 Venezuela", escala: "0 – 20", minimo: "10,5", porcentaje: "52 %", recuperacion: "Examen sustitutorio" },
  { pais: "🌎 USA / LATAM (%)", escala: "0 – 100 %", minimo: "50–60 %", porcentaje: "50–60 %", recuperacion: "Varía por institución" },
];

const TABLA_CONVERSION = [
  { porcentaje: "100 %", sobre10: "10,0", letra: "A+", calificacion: "Sobresaliente" },
  { porcentaje: "90 %", sobre10: "9,0", letra: "A", calificacion: "Sobresaliente" },
  { porcentaje: "80 %", sobre10: "8,0", letra: "B", calificacion: "Notable" },
  { porcentaje: "75 %", sobre10: "7,5", letra: "C+", calificacion: "Notable" },
  { porcentaje: "70 %", sobre10: "7,0", letra: "C", calificacion: "Notable" },
  { porcentaje: "65 %", sobre10: "6,5", letra: "C-", calificacion: "Aprobado" },
  { porcentaje: "60 %", sobre10: "6,0", letra: "D", calificacion: "Aprobado" },
  { porcentaje: "50 %", sobre10: "5,0", letra: "D-", calificacion: "Aprobado (mín. España)" },
  { porcentaje: "40 %", sobre10: "4,0", letra: "F", calificacion: "Suspenso" },
  { porcentaje: "< 40 %", sobre10: "< 4,0", letra: "F", calificacion: "Suspenso grave" },
];

const PENALIZACION_DATA = [
  { opciones: "4 opciones (A/B/C/D)", factor: "0,25 (1/4)", uso: "MIR, oposiciones administrativas, Guardia Civil", color: "bg-blue-50 border-blue-200" },
  { opciones: "3 opciones (A/B/C)", factor: "0,33 (1/3)", uso: "Algunas pruebas universitarias, PIR", color: "bg-purple-50 border-purple-200" },
  { opciones: "2 opciones (V/F)", factor: "0,50 (1/2)", uso: "Exámenes verdadero/falso", color: "bg-yellow-50 border-yellow-200" },
  { opciones: "Sin penalización", factor: "0", uso: "Mayoría de exámenes escolares y universitarios", color: "bg-green-50 border-green-200" },
];

const FALLOS_REFERENCIA = [
  { total: "20", aprobado5: "10", aprobado6: "12", notable7: "14", penalizacion: "Sin penalización" },
  { total: "40", aprobado5: "20", aprobado6: "24", notable7: "28", penalizacion: "Sin penalización" },
  { total: "50", aprobado5: "25", aprobado6: "30", notable7: "35", penalizacion: "Sin penalización" },
  { total: "100", aprobado5: "50", aprobado6: "60", notable7: "70", penalizacion: "Sin penalización" },
];

const PASOS = [
  { n: "1", titulo: "Introduce el total de preguntas", texto: "Escribe cuántas preguntas o puntos tiene el examen. Puede ser 10, 40, 100 o cualquier valor.", icon: "📝" },
  { n: "2", titulo: "Indica tus aciertos o errores", texto: "Puedes introducir directamente los aciertos o los errores. La calculadora convierte ambos automáticamente.", icon: "✅" },
  { n: "3", titulo: "Ajusta la penalización (si la hay)", texto: "Para exámenes tipo test u oposiciones, introduce el factor de penalización (0,25; 0,33; 0,5…). Para exámenes sin penalización déjalo en 0.", icon: "⚙️" },
  { n: "4", titulo: "Obtén tu nota al instante", texto: "Verás el porcentaje, la nota sobre 10 y la nota con letra según la escala seleccionada. Sin esperas ni registros.", icon: "🎯" },
];

const VENTAJAS = [
  { titulo: "Doble escala incluida", texto: "España (0-10) y porcentaje (0-100) en un solo clic." },
  { titulo: "Penalización configurable", texto: "Factor de descuento por error para tipo test, MIR y oposiciones." },
  { titulo: "Nota de aprobado personalizable", texto: "Ajusta el umbral mínimo (5, 6 o el que tu examen exija)." },
  { titulo: "Cálculo instantáneo", texto: "Resultado en tiempo real mientras escribes, sin pulsar ningún botón." },
  { titulo: "100 % gratuita, sin registro", texto: "Ningún dato personal requerido. Funciona en móvil y ordenador." },
  { titulo: "Válida para cualquier país hispanohablante", texto: "España, México, Argentina, Colombia, Chile y el resto de LATAM." },
];

// ── Herramientas relacionadas — SOLO páginas que realmente existen ─────────
// (antes apuntaban a /calculadora-nota-media/, /calculadora-nota-final/ y
// /conversor-gpa/, ninguna de las cuales existe → 404. Corregido.)
const RELACIONADAS = [
  { titulo: "Calculadora de Nota Final", texto: "Encuentra la nota que necesitas en el examen final para llegar a tu meta.", href: "/nota-final/" },
  { titulo: "Calculadora GPA", texto: "Convierte tus notas al sistema GPA americano (0-4.0).", href: "/calculadora-gpa/" },
  { titulo: "GPA Acumulado", texto: "Calcula tu GPA combinando varios semestres con distintos créditos.", href: "/gpa-acumulado/" },
];

// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-10 px-8 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">
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
                <span itemProp="name" aria-current="page">Calculadora de Notas de Examen</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calculadora de Notas de Examen
          </h1>

          <p data-ai-answer="true" className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-2">
            Calcula tu <strong>nota de examen</strong> al instante: porcentaje
            de aciertos, nota sobre 10, nota con letra y{" "}
            <strong>penalización por errores</strong> incluida. Válida para
            cualquier examen, prueba, test u oposición —en España, México,
            Argentina, Colombia, Chile y toda Latinoamérica.
          </p>
          <p className="max-w-[820px] text-[15px] leading-7 text-[#8a94a6] mb-5">
            Tanto si eres estudiante que quiere saber qué ha sacado, maestro
            que corrige en clase o preparador de{" "}
            <strong>oposiciones (MIR, administrativo, Guardia Civil)</strong>,
            esta herramienta te da la respuesta en segundos y sin registro.
          </p>

          <div className="flex flex-wrap gap-3" role="list" aria-label="Funcionalidades destacadas">
            {[
              "Nota sobre 10 (España / México)",
              "Porcentaje (LATAM)",
              "Penalización tipo test",
              "Fórmula MIR y oposiciones",
              "Nota mínima configurable",
              "Conversión A–F incluida",
              "100 % gratis",
            ].map((item) => (
              <span key={item} role="listitem" className="bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULADORA + SIDEBAR ─────────────────────────────────────────── */}
      <section className="pb-8" aria-label="Calculadora de notas de examen">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <TestGradeCalculator />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* ── CONTENIDO SEO / AEO ───────────────────────────────────────────── */}
      <section className="pb-14" aria-label="Guía completa: calculadora notas examen">
        <div className=" mx-auto">
          <article className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" itemScope itemType="https://schema.org/Article">
            <div className="p-6 md:p-8">

              {/* ── AUTOR / REVISIÓN / ACTUALIZACIÓN ──────────────────────── */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-gray-500 mb-8 pb-5 border-b border-gray-100">
                <span className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-[12px] font-bold" aria-hidden="true">
                    CN
                  </span>
                  Escrito por{" "}
                  <strong className="text-gray-700" itemProp="author">
                    {SITE_AUTHOR}
                  </strong>
                  {SITE_AUTHOR_ROLE ? <span className="text-gray-400">· {SITE_AUTHOR_ROLE}</span> : null}
                </span>
                <span>
                  Última actualización:{" "}
                  <time dateTime="2026-07-25" className="text-gray-700 font-medium">
                    25 de julio de 2026
                  </time>
                </span>
              </div>

              {/* ── AI OVERVIEW SNIPPET ───────────────────────────────────── */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-8" data-ai-snippet="true">
                <h2 className="text-[26px] font-bold tracking-[-0.02em] mb-4">
                  Respuesta directa: ¿cómo se calcula la nota de un examen?
                </h2>
                <p className="text-gray-700 leading-8">
                  La <strong>nota de un examen</strong> se calcula dividiendo
                  las respuestas correctas entre el total de preguntas y
                  multiplicando por 10 (escala 0-10) o por 100 (porcentaje):
                  <strong> Nota = (Aciertos ÷ Total) × 10</strong>. Si el
                  examen tiene <strong>penalización por errores</strong>, se
                  aplica: <strong>Nota = (Aciertos − Errores × Factor) ÷ Total × 10</strong>.
                  Esta calculadora hace el cálculo automáticamente para
                  cualquier escala y cualquier factor de penalización.
                </p>
              </div>

              {/* ── RESPUESTAS RÁPIDAS — NUEVO ─────────────────────────────
                  Responde directamente a búsquedas puntuales tipo
                  "38 de 50", "76 de 100 que nota es", "40*0,7" que ya
                  reciben impresiones en Search Console pero 0 clics porque
                  la respuesta estaba enterrada en la guía larga. */}
              <section className="mb-12" aria-labelledby="rapidas-heading">
                <h2 id="rapidas-heading" className="text-[22px] font-bold tracking-[-0.02em] mb-1">
                  Respuestas rápidas a notas concretas
                </h2>
                <p className="text-gray-500 text-[14px] mb-4">
                  ¿Buscas una nota concreta? Aquí tienes las conversiones más consultadas.
                </p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {QUICK_ANSWERS.map((item) => (
                    <div key={item.q} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                      <div className="font-semibold text-gray-800 text-[14px]">{item.q}</div>
                      <div className="text-gray-600 text-[13px] leading-5">{item.a}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-[13px] mt-3">
                  ¿No encuentras tu combinación exacta? Usa la calculadora arriba — funciona para cualquier número de preguntas.
                </p>
              </section>

              {/* ── COMMON MISTAKES ───────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="mistakes-heading">
                <h2 id="mistakes-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Errores comunes al calcular la nota de un examen
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: "No contar las penalizaciones", text: "Muchos estudiantes calculan únicamente los aciertos y olvidan descontar los errores cuando el examen aplica penalización." },
                    { title: "Usar una escala incorrecta", text: "No todos los países utilizan la escala 0–10. Colombia, Chile o Perú emplean sistemas distintos." },
                    { title: "Confundir porcentaje con nota", text: "Un 70 % no siempre significa un 7 sobre 10 dependiendo del sistema de evaluación utilizado." },
                    { title: "Ignorar el mínimo de aprobado", text: "Algunas universidades aprueban con 5, otras con 6 o incluso 7 sobre 10." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-[14px] leading-6">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── WHY USE THIS CALCULATOR ───────────────────────────── */}
              <section className="mb-12" aria-labelledby="why-heading">
                <h2 id="why-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Por qué usar una calculadora de notas online?
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  Calcular la nota manualmente puede provocar errores, especialmente cuando
                  existen penalizaciones, escalas diferentes o conversiones entre porcentaje
                  y nota final. Una calculadora automática elimina esos errores y ofrece el
                  resultado en segundos.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ Resultados instantáneos.</li>
                  <li>✅ Evita errores de cálculo.</li>
                  <li>✅ Compatible con cualquier número de preguntas.</li>
                  <li>✅ Funciona con y sin penalización.</li>
                  <li>✅ Conversión automática entre porcentaje y nota.</li>
                </ul>
              </section>

              {/* ── GRADE VS PERCENTAGE ───────────────────────────────── */}
              <section className="mb-12" aria-labelledby="compare-heading">
                <h2 id="compare-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Diferencia entre porcentaje, nota y calificación
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-4 py-3 text-left">Concepto</th>
                        <th className="px-4 py-3 text-left">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Porcentaje</td>
                        <td className="px-4 py-3">Muestra el porcentaje de respuestas correctas.</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Nota</td>
                        <td className="px-4 py-3">Conversión del porcentaje a una escala como 0–10 o 1–7.</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Calificación</td>
                        <td className="px-4 py-3">Resultado final como Aprobado, Notable, Sobresaliente o A–F.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── GPA GUIDE ─────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="gpa-heading">
                <h2 id="gpa-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Conversión aproximada de nota a GPA
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  Algunas universidades internacionales convierten la nota final a un GPA
                  (Grade Point Average). La equivalencia puede variar según la institución,
                  pero esta tabla sirve como referencia.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-4 py-3">Nota</th>
                        <th className="px-4 py-3">GPA aprox.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t"><td className="px-4 py-3">9–10</td><td className="px-4 py-3">4.0</td></tr>
                      <tr className="border-t"><td className="px-4 py-3">8–8.9</td><td className="px-4 py-3">3.5</td></tr>
                      <tr className="border-t"><td className="px-4 py-3">7–7.9</td><td className="px-4 py-3">3.0</td></tr>
                      <tr className="border-t"><td className="px-4 py-3">6–6.9</td><td className="px-4 py-3">2.5</td></tr>
                      <tr className="border-t"><td className="px-4 py-3">&lt;6</td><td className="px-4 py-3">&lt;2.0</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── RESUMEN (antes duplicado — ahora aparece una sola vez) ── */}
              <section className="mb-6" aria-labelledby="summary-heading">
                <h2 id="summary-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Resumen
                </h2>
                <p className="text-gray-700 leading-8">
                  Esta calculadora permite obtener la nota de cualquier examen de forma
                  rápida y precisa. Es compatible con porcentajes, escalas nacionales,
                  sistemas internacionales, penalización por errores y conversiones entre
                  nota, porcentaje y calificación. Tanto estudiantes como profesores pueden
                  utilizarla para calcular resultados en cuestión de segundos sin necesidad
                  de realizar operaciones manuales.
                </p>
              </section>

              {/* ── DIFERENCIA FRENTE A COMPETIDORES ─────────────────────── */}
              <section className="mb-12" aria-labelledby="diferencia-heading">
                <h2 id="diferencia-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Qué hace especial a esta calculadora?
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  La mayoría de calculadoras solo trabajan con porcentajes y la
                  escala A–F anglosajona. Esta herramienta incluye la{" "}
                  <strong>escala 0-10 de España y México</strong>, permite
                  configurar la <strong>penalización por errores</strong> propia de
                  oposiciones y tests universitarios, cubre las escalas de{" "}
                  <strong>Colombia (0-5), Chile (1-7) y Perú (0-20)</strong>, y
                  permite ajustar la <strong>nota mínima de aprobado</strong> al umbral de tu
                  institución.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { titulo: "Escala española 0-10", texto: "Resultado directo en la escala oficial de España y México: Suspenso, Aprobado, Notable, Sobresaliente.", badge: "España / México", badgeColor: "bg-blue-100 text-blue-700" },
                    { titulo: "Penalización tipo test y oposiciones", texto: "Introduce el factor de penalización (0,25 para MIR; 0,33 para PIR) y obtén la nota neta real.", badge: "Oposiciones / MIR / Selectividad", badgeColor: "bg-purple-100 text-purple-700" },
                    { titulo: "Porcentaje + Nota con letra", texto: "Conversión automática al sistema A–F para universidades latinoamericanas y entornos bilingües.", badge: "LATAM / Sistema anglosajón", badgeColor: "bg-emerald-100 text-emerald-700" },
                  ].map((card) => (
                    <div key={card.titulo} className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <span className={`text-[11px] font-bold px-2 py-1 rounded-full mb-3 inline-block ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                      <h3 className="text-[16px] font-semibold text-gray-800 mb-2">{card.titulo}</h3>
                      <p className="text-gray-600 text-[14px] leading-6">{card.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CASOS DE USO POR PERFIL ──────────────────────────────── */}
              <section className="mb-12" aria-labelledby="casos-uso-heading">
                <h2 id="casos-uso-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Para quién sirve esta calculadora?
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { icon: "🎓", titulo: "Estudiantes", texto: "Comprueba al instante qué nota has sacado en un examen o simulacro, sin esperar a que el profesor corrija. Útil para exámenes de Selectividad, EBAU, universidad o secundaria." },
                    { icon: "🧑‍🏫", titulo: "Maestros y profesores", texto: "Corrige exámenes tipo test de toda una clase en minutos. Define el total de preguntas, la nota mínima de aprobado y el factor de penalización una sola vez." },
                    { icon: "📚", titulo: "Opositores", texto: "Calcula la nota neta real de tus simulacros de oposición (MIR, administrativo, Guardia Civil, Policía) aplicando el factor de penalización exacto de tu convocatoria." },
                  ].map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <div className="text-[26px] mb-2" aria-hidden="true">{c.icon}</div>
                      <h3 className="font-semibold text-gray-800 mb-2">{c.titulo}</h3>
                      <p className="text-gray-600 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FÓRMULA ───────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="formula-heading">
                <h2 id="formula-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Fórmula para calcular la nota de un examen
                </h2>
                <p className="text-gray-700 leading-8 mb-4">La fórmula fundamental para calcular el porcentaje:</p>
                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-4" role="math" aria-label="Nota en porcentaje igual a respuestas correctas dividido total por cien">
                  Nota (%) = (Respuestas correctas ÷ Total de preguntas) × 100
                </div>
                <p className="text-gray-700 leading-8 mb-4">Para la nota sobre 10 (escala española):</p>
                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-7">
                  Nota /10 = (Respuestas correctas ÷ Total de preguntas) × 10
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 mb-7">
                  <h3 className="font-semibold text-gray-800 mb-3">Ejemplo práctico paso a paso</h3>
                  <p className="text-gray-700 leading-7 text-[15px] mb-3">
                    Estudiante con <strong>38 aciertos en 50 preguntas</strong> (sin penalización):
                  </p>
                  <div className="space-y-1 text-[14px] font-mono text-gray-700">
                    <p>Porcentaje:   (38 ÷ 50) × 100 = <strong>76 %</strong></p>
                    <p>Nota /10:     (38 ÷ 50) × 10  = <strong>7,6 — Notable</strong></p>
                    <p>Nota con letra (A–F): <strong>C (70–79 %)</strong></p>
                  </div>
                </div>

                <h3 className="text-[20px] font-semibold text-gray-800 mb-3">
                  Fórmula con penalización por errores (tipo test y oposiciones)
                </h3>
                <p className="text-gray-700 leading-8 mb-4">
                  En exámenes con penalización —habitual en oposiciones, MIR,
                  Selectividad y muchos tests universitarios— la fórmula es:
                </p>
                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[14px] mb-5">
                  Nota neta = (Aciertos − Errores × Factor) ÷ Total × 10
                </div>

                <div className="grid gap-3 md:grid-cols-2 mb-6">
                  {PENALIZACION_DATA.map((p) => (
                    <div key={p.opciones} className={`rounded-xl border p-4 ${p.color}`}>
                      <div className="font-semibold text-gray-800 text-[14px] mb-1">{p.opciones}</div>
                      <div className="text-blue-700 font-bold text-[16px] mb-1">Factor: {p.factor}</div>
                      <div className="text-gray-500 text-[12px]">{p.uso}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                  <h4 className="font-semibold text-purple-800 mb-2">Ejemplo real: Examen MIR (factor 1/3)</h4>
                  <p className="text-gray-700 text-[14px] leading-6 mb-2">
                    Examen de 235 preguntas. Estudiante con 180 aciertos y 30 errores (25 en blanco):
                  </p>
                  <div className="font-mono text-[13px] text-gray-700 space-y-1">
                    <p>Nota neta = (180 − 30 × 0,333) ÷ 235 × 10</p>
                    <p>         = (180 − 9,99) ÷ 235 × 10</p>
                    <p className="text-purple-700 font-bold">         = 170,01 ÷ 235 × 10 = <strong>7,23 sobre 10</strong></p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 mt-6">
                  <h4 className="font-semibold text-gray-800 mb-2">¿Puede la penalización dar una nota negativa?</h4>
                  <p className="text-gray-600 text-[14px] leading-6">
                    Sí, matemáticamente es posible si el número de errores es
                    muy alto en relación con los aciertos: la resta{" "}
                    <strong>Aciertos − (Errores × Factor)</strong> puede dar un
                    resultado por debajo de cero. La convocatoria oficial del
                    examen indica si en ese caso la nota se fija en{" "}
                    <strong>0 como mínimo</strong> (lo más habitual) o si se
                    permite el valor negativo a efectos de nota media. La
                    calculadora muestra el resultado real del cálculo para que
                    puedas verificarlo con las bases de tu examen.
                  </p>
                </div>
              </section>

              {/* ── CUÁNTOS FALLOS ────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="fallos-heading">
                <h2 id="fallos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  ¿Cuántos fallos puedo tener en el examen para aprobar?
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Referencia rápida sin penalización. El número de{" "}
                  <strong>aciertos mínimos necesarios</strong> varía según el
                  total de preguntas y el umbral de aprobado de tu institución.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[540px] border-collapse text-[14px]">
                    <caption className="sr-only">Aciertos mínimos para aprobar según el total de preguntas</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Total preguntas</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Aprobar (5/10 — España)</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Aprobar (6/10 — México)</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Notable (7/10)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FALLOS_REFERENCIA.map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-gray-800">{row.total} preguntas</td>
                          <td className="px-4 py-3 text-center text-green-700 font-semibold">≥ {row.aprobado5} aciertos</td>
                          <td className="px-4 py-3 text-center text-blue-700 font-semibold">≥ {row.aprobado6} aciertos</td>
                          <td className="px-4 py-3 text-center text-purple-700 font-semibold">≥ {row.notable7} aciertos</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-gray-500 mt-2">
                  * Sin penalización por errores. Con penalización, el número
                  de aciertos mínimos sube. Usa la calculadora para tu caso exacto.
                </p>
              </section>

              {/* ── PREGUNTAS DE DISTINTO VALOR ───────────────────────────── */}
              <section className="mb-12" aria-labelledby="puntuacion-diferente-heading">
                <h2 id="puntuacion-diferente-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Cómo calcular la nota si cada pregunta vale puntos diferentes?
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  No todos los exámenes asignan el mismo valor a cada pregunta. En algunos,
                  una respuesta puede valer 1 punto, mientras que un ejercicio de desarrollo
                  puede valer 2, 3 o incluso más puntos. En estos casos no conviene contar
                  simplemente los aciertos: primero hay que sumar los <strong>puntos obtenidos</strong>
                  {" "}y compararlos con la puntuación máxima posible.
                </p>
                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[14px] mb-5">
                  Nota (%) = (Puntos obtenidos ÷ Puntos máximos) × 100
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 mb-5">
                  <h3 className="font-semibold text-gray-800 mb-3">Ejemplo práctico</h3>
                  <p className="text-gray-600 text-[14px] leading-6 mb-3">
                    Un examen tiene 10 puntos en total. Un estudiante obtiene 7 puntos en
                    preguntas tipo test y 1,5 puntos en ejercicios de desarrollo.
                  </p>
                  <div className="font-mono text-[13px] text-gray-700 space-y-1">
                    <p>Puntos obtenidos = 7 + 1,5 = <strong>8,5 puntos</strong></p>
                    <p>Porcentaje = (8,5 ÷ 10) × 100 = <strong>85 %</strong></p>
                    <p className="text-blue-700 font-bold">Nota /10 = (8,5 ÷ 10) × 10 = <strong>8,5</strong></p>
                  </div>
                </div>
                <p className="text-gray-600 text-[14px] leading-7">
                  Si tu examen utiliza preguntas con diferente puntuación, utiliza los
                  puntos reales obtenidos y la puntuación máxima indicada en las instrucciones
                  del examen. No asumas que todas las preguntas tienen el mismo peso.
                </p>
              </section>

              {/* ── CÁLCULO INVERSO ───────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="aciertos-necesarios-heading">
                <h2 id="aciertos-necesarios-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Cuántos aciertos necesito para conseguir una nota determinada?
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  También puedes hacer el cálculo al revés: en lugar de saber qué nota
                  obtienes con tus aciertos, puedes calcular cuántos <strong>aciertos netos</strong>
                  {" "}necesitas para alcanzar un 5, 6, 7 u otra nota objetivo.
                </p>
                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-mono text-center text-[14px] mb-5">
                  Aciertos netos necesarios = Total × (Nota objetivo ÷ 10)
                </div>
                <div className="grid gap-4 md:grid-cols-3 mb-5">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">Aprobar con 5/10</h3>
                    <p className="text-gray-600 text-[14px] leading-6 mb-2">En un examen de 40 preguntas sin penalización:</p>
                    <p className="font-mono text-[13px] text-gray-700">40 × 0,50 = <strong className="text-green-700">20 aciertos</strong></p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">Llegar a 6/10</h3>
                    <p className="text-gray-600 text-[14px] leading-6 mb-2">En el mismo examen:</p>
                    <p className="font-mono text-[13px] text-gray-700">40 × 0,60 = <strong className="text-blue-700">24 aciertos</strong></p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">Llegar a 7/10</h3>
                    <p className="text-gray-600 text-[14px] leading-6 mb-2">Para conseguir un notable:</p>
                    <p className="font-mono text-[13px] text-gray-700">40 × 0,70 = <strong className="text-purple-700">28 aciertos</strong></p>
                  </div>
                </div>
                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                  <h3 className="font-semibold text-purple-800 mb-2">¿Y si existe penalización?</h3>
                  <p className="text-gray-700 text-[14px] leading-7">
                    En ese caso no basta con alcanzar el número bruto de aciertos. Hay que
                    conseguir suficientes puntos después de restar los errores. Por ejemplo,
                    con un factor de 0,25, cuatro errores equivalen a perder un acierto neto.
                    Por eso el número de aciertos brutos necesario puede ser superior al
                    indicado en una tabla sin penalización.
                  </p>
                </div>
              </section>

              {/* ── ESTRATEGIA CON PENALIZACIÓN ───────────────────────────── */}
              <section className="mb-12" aria-labelledby="estrategia-penalizacion-heading">
                <h2 id="estrategia-penalizacion-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Conviene responder si el examen penaliza los errores?
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  Cuando una respuesta incorrecta resta puntos, la decisión de responder al
                  azar depende del factor de penalización y de cuánta información tengas.
                  No existe una regla universal para todos los exámenes: debes comprobar
                  siempre las instrucciones oficiales de tu prueba.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="text-[24px] mb-2" aria-hidden="true">✅</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Si estás seguro</h3>
                    <p className="text-gray-600 text-[14px] leading-6">
                      Responder tiene sentido cuando conoces la respuesta o puedes descartar
                      claramente las alternativas incorrectas.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="text-[24px] mb-2" aria-hidden="true">🤔</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Si dudas entre opciones</h3>
                    <p className="text-gray-600 text-[14px] leading-6">
                      El riesgo cambia cuando puedes eliminar una o más alternativas. Antes
                      de responder, comprueba cuánto resta exactamente cada error.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="text-[24px] mb-2" aria-hidden="true">⚠️</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Si no tienes ninguna pista</h3>
                    <p className="text-gray-600 text-[14px] leading-6">
                      Si las respuestas en blanco no restan y la penalización es importante,
                      responder completamente al azar puede reducir tu puntuación neta.
                      Revisa primero las reglas de la convocatoria.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 mt-5">
                  <h3 className="font-semibold text-blue-800 mb-2">Consejo práctico</h3>
                  <p className="text-gray-700 text-[14px] leading-7">
                    Haz un simulacro con el mismo factor de penalización que tendrá tu examen.
                    Después compara tu número de aciertos, errores y blancos. La nota neta
                    suele ser mucho más útil para evaluar tu preparación que mirar solamente
                    los aciertos brutos.
                  </p>
                </div>
              </section>

              {/* ── REDONDEO ──────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="redondeo-heading">
                <h2 id="redondeo-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Cómo afecta el redondeo a la nota final?
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  Una nota calculada puede tener muchos decimales, aunque el resultado que
                  aparece en el boletín o acta se muestre con uno o dos. Por ejemplo, un
                  resultado matemático de 4,96 puede mostrarse como 5,0 si las reglas del
                  centro aplican redondeo a una cifra decimal.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
                  <table className="w-full min-w-[520px] border-collapse text-[14px]">
                    <caption className="sr-only">Ejemplos de redondeo de notas calculadas</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left">Resultado calculado</th>
                        <th scope="col" className="px-4 py-3 text-center">A 1 decimal</th>
                        <th scope="col" className="px-4 py-3 text-left">Importancia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="px-4 py-3 font-semibold">4,94</td>
                        <td className="px-4 py-3 text-center font-bold text-orange-700">4,9</td>
                        <td className="px-4 py-3 text-gray-600">Puede seguir siendo suspenso.</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-4 py-3 font-semibold">4,96</td>
                        <td className="px-4 py-3 text-center font-bold text-blue-700">5,0</td>
                        <td className="px-4 py-3 text-gray-600">Depende de las reglas de redondeo.</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-4 py-3 font-semibold">6,95</td>
                        <td className="px-4 py-3 text-center font-bold text-blue-700">7,0</td>
                        <td className="px-4 py-3 text-gray-600">Puede cruzar un límite de calificación.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                  <h3 className="font-semibold text-amber-900 mb-2">Importante: el redondeo no es universal</h3>
                  <p className="text-gray-700 text-[14px] leading-7">
                    La calculadora puede mostrar el resultado matemático, pero la calificación
                    oficial puede aplicar reglas específicas de truncamiento, redondeo o
                    límites mínimos. Si estás cerca del aprobado, consulta siempre los
                    criterios publicados por tu centro, universidad, convocatoria o profesor.
                  </p>
                </div>
              </section>

              {/* ── CASO PRÁCTICO AVANZADO ───────────────────────────────── */}
              <section className="mb-12" aria-labelledby="caso-avanzado-heading">
                <h2 id="caso-avanzado-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Caso práctico: aciertos, errores y preguntas en blanco
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  Para entender mejor la diferencia entre nota bruta y nota neta, imagina
                  un examen de <strong>100 preguntas</strong> con una penalización de
                  <strong> 0,25 puntos por cada error</strong>.
                </p>
                <div className="grid gap-4 md:grid-cols-3 mb-5">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">Aciertos</h3>
                    <p className="text-[28px] font-bold text-green-700">62</p>
                    <p className="text-gray-500 text-[13px]">Respuestas correctas</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">Errores</h3>
                    <p className="text-[28px] font-bold text-red-700">20</p>
                    <p className="text-gray-500 text-[13px]">Respuestas incorrectas</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">En blanco</h3>
                    <p className="text-[28px] font-bold text-gray-700">18</p>
                    <p className="text-gray-500 text-[13px]">No respondidas</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                  <h3 className="font-semibold text-purple-800 mb-3">Cálculo paso a paso</h3>
                  <div className="font-mono text-[13px] text-gray-700 space-y-2">
                    <p>Nota bruta = 62 aciertos</p>
                    <p>Penalización = 20 × 0,25 = 5 puntos</p>
                    <p>Nota neta = 62 − 5 = <strong>57 puntos</strong></p>
                    <p>Porcentaje neto = (57 ÷ 100) × 100 = <strong>57 %</strong></p>
                    <p className="text-purple-700 font-bold">Nota /10 = 57 ÷ 10 = <strong>5,7 sobre 10</strong></p>
                  </div>
                  <p className="text-gray-600 text-[14px] leading-7 mt-4">
                    Este ejemplo muestra por qué dos estudiantes con el mismo número de
                    aciertos pueden terminar con notas diferentes si uno acumula más errores.
                    Las preguntas en blanco no modifican la nota cuando la convocatoria
                    establece que no tienen penalización.
                  </p>
                </div>
              </section>

              {/* ── CÓMO USAR ─────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="como-usar-heading">
                <h2 id="como-usar-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Cómo usar esta calculadora paso a paso
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {PASOS.map((paso) => (
                    <div key={paso.n} className="rounded-2xl border border-gray-200 p-5 bg-white flex gap-4 items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm" aria-hidden="true">
                        {paso.n}
                      </div>
                      <div>
                        <h3 className="text-[16px] font-semibold text-gray-800 mb-1">{paso.titulo}</h3>
                        <p className="text-gray-600 text-[14px] leading-6">{paso.texto}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── TABLA DE ESCALAS DOBLE ────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="escalas-heading">
                <h2 id="escalas-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Escalas de calificación: España y sistema internacional
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-6">
                  Las calificaciones no son iguales en todos los países. Estas
                  son las dos escalas más utilizadas en el mundo hispanohablante.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[17px] font-semibold text-gray-800 mb-3">🇪🇸 España y México — escala 0 a 10</h3>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="w-full border-collapse text-[14px]">
                        <caption className="sr-only">Escala de calificaciones española 0 a 10</caption>
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            <th scope="col" className="px-4 py-3 text-left">Nota</th>
                            <th scope="col" className="px-4 py-3 text-left">Calificación</th>
                            <th scope="col" className="px-4 py-3 text-left">Porcentaje</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ESCALA_ESPANA.map((row) => (
                            <tr key={row.rango} className={`border-t border-gray-100 ${row.color} border`}>
                              <td className="px-4 py-3 font-semibold">{row.rango}</td>
                              <td className="px-4 py-3">{row.letra}</td>
                              <td className="px-4 py-3">{row.porcentaje}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[12px] text-gray-500 mt-2">
                      * En España el aprobado mínimo es 5/10. En oposiciones y
                      algunas universidades se eleva a 6/10 o 7/10.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-gray-800 mb-3">🌎 Latinoamérica y sistema anglosajón — escala A–F</h3>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="w-full border-collapse text-[14px]">
                        <caption className="sr-only">Escala de calificaciones anglosajona A a F</caption>
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            <th scope="col" className="px-4 py-3 text-left">Porcentaje</th>
                            <th scope="col" className="px-4 py-3 text-left">Letra</th>
                            <th scope="col" className="px-4 py-3 text-left">Nivel</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ESCALA_PORCENTAJE.map((row) => (
                            <tr key={row.rango} className={`border-t border-gray-100 ${row.color} border`}>
                              <td className="px-4 py-3 font-semibold">{row.rango}</td>
                              <td className="px-4 py-3 font-bold">{row.letra}</td>
                              <td className="px-4 py-3">{row.nivel}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[12px] text-gray-500 mt-2">
                      * En la mayoría de países latinoamericanos el aprobado
                      mínimo está en el 50–60 %. Consulta las normas de tu institución.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── TABLA CONVERSIÓN RÁPIDA ───────────────────────────────── */}
              <section className="mb-12" aria-labelledby="conversion-heading">
                <h2 id="conversion-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Tabla de conversión: porcentaje a nota sobre 10 y letra
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Referencia rápida para convertir cualquier porcentaje a nota
                  española y letra anglosajona sin necesidad de calcular.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[500px] border-collapse text-[14px]">
                    <caption className="sr-only">Tabla de conversión de porcentaje a nota sobre 10 y letra</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Porcentaje</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Nota /10</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Letra</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Calificación España</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TABLA_CONVERSION.map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-semibold text-gray-800">{row.porcentaje}</td>
                          <td className="px-4 py-3 text-center font-bold text-blue-700">{row.sobre10}</td>
                          <td className="px-4 py-3 text-center font-bold text-gray-700">{row.letra}</td>
                          <td className="px-4 py-3 text-gray-600">{row.calificacion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── NOTA MÍNIMA POR PAÍS ──────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="paises-heading">
                <h2 id="paises-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Nota mínima para aprobar por país y sistema de recuperación
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  El umbral de aprobado y el nombre del examen de recuperación
                  varían en cada país hispanohablante.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[600px] border-collapse text-[14px]">
                    <caption className="sr-only">Nota mínima de aprobado y sistema de recuperación por país</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">País</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Escala</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Mínimo aprobado</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Equivalencia %</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Recuperación</th>
                      </tr>
                    </thead>
                    <tbody>
                      {NOTA_MINIMA_PAISES.map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-gray-800">{row.pais}</td>
                          <td className="px-4 py-3 text-gray-700">{row.escala}</td>
                          <td className="px-4 py-3 text-center font-bold text-blue-700">{row.minimo}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{row.porcentaje}</td>
                          <td className="px-4 py-3 text-gray-500 text-[12px]">{row.recuperacion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── EJEMPLOS RESUELTOS POR PAÍS ───────────────────────────── */}
              <section className="mb-12" aria-labelledby="ejemplos-pais-heading">
                <h2 id="ejemplos-pais-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Ejemplos resueltos en las escalas de Chile, Colombia y Perú
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-6">
                  Cada país convierte el porcentaje de aciertos a su propia
                  escala. Aquí tienes un ejemplo calculado paso a paso para cada una.
                </p>
                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">🇨🇱 Chile (escala 1 – 7)</h3>
                    <p className="text-gray-600 text-[13px] leading-6 mb-3">30 aciertos de 40 preguntas, sin penalización.</p>
                    <div className="font-mono text-[12.5px] text-gray-700 space-y-1">
                      <p>% = (30 ÷ 40) × 100 = 75 %</p>
                      <p>Nota = 1 + (% ÷ 100) × 6</p>
                      <p className="text-blue-700 font-bold">Nota = 1 + 4,5 = 5,5</p>
                    </div>
                    <p className="text-gray-500 text-[12px] mt-2">Aprobado (mínimo 4,0).</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">🇨🇴 Colombia (escala 0 – 5)</h3>
                    <p className="text-gray-600 text-[13px] leading-6 mb-3">42 aciertos de 60 preguntas, sin penalización.</p>
                    <div className="font-mono text-[12.5px] text-gray-700 space-y-1">
                      <p>% = (42 ÷ 60) × 100 = 70 %</p>
                      <p>Nota = (% ÷ 100) × 5</p>
                      <p className="text-blue-700 font-bold">Nota = 3,5 sobre 5</p>
                    </div>
                    <p className="text-gray-500 text-[12px] mt-2">Aprobado (mínimo 3,0).</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">🇵🇪 Perú (escala 0 – 20)</h3>
                    <p className="text-gray-600 text-[13px] leading-6 mb-3">55 aciertos de 80 preguntas, sin penalización.</p>
                    <div className="font-mono text-[12.5px] text-gray-700 space-y-1">
                      <p>% = (55 ÷ 80) × 100 = 68,75 %</p>
                      <p>Nota = (% ÷ 100) × 20</p>
                      <p className="text-blue-700 font-bold">Nota = 13,75 sobre 20</p>
                    </div>
                    <p className="text-gray-500 text-[12px] mt-2">Aprobado (mínimo 10,5).</p>
                  </div>
                </div>
              </section>

              {/* ── SELECTIVIDAD / EBAU ───────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="selectividad-heading">
                <h2 id="selectividad-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Cómo calcular la nota en Selectividad (EBAU / EvAU)
                </h2>
                <p className="text-gray-700 leading-8 mb-4">
                  La <strong>Selectividad (EBAU o EvAU)</strong> en España no
                  se corrige igual que un examen tipo test: cada pregunta o
                  bloque tiene una <strong>ponderación en puntos</strong>{" "}
                  definida por el examen (por ejemplo, 4 preguntas de 2,5
                  puntos cada una en un examen de Lengua). La nota de cada
                  ejercicio se calcula sumando los puntos obtenidos en cada
                  bloque, no dividiendo aciertos entre total de preguntas.
                </p>
                <p className="text-gray-700 leading-8 mb-4">
                  La <strong>nota de acceso a la universidad</strong> combina dos partes:
                </p>
                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[14px] mb-4">
                  Nota de acceso = (Nota de Bachillerato × 0,6) + (Nota EBAU × 0,4)
                </div>
                <p className="text-gray-700 leading-8">
                  Para calcular únicamente el porcentaje de aciertos de un
                  examen tipo test de práctica de Selectividad (no el examen
                  oficial por bloques), puedes usar la calculadora de esta
                  página igual que con cualquier otro test.
                </p>
              </section>

              {/* ── GLOSARIO ──────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="glosario-heading">
                <h2 id="glosario-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Glosario de términos sobre notas y calificaciones
                </h2>
                <dl className="grid gap-4 md:grid-cols-2">
                  {[
                    { t: "Nota bruta", d: "Resultado de dividir los aciertos entre el total, sin restar ninguna penalización por errores." },
                    { t: "Nota neta", d: "Resultado final después de aplicar la penalización por errores. Es la nota que cuenta como calificación oficial." },
                    { t: "Penalización", d: "Fracción de punto que se resta por cada respuesta incorrecta en exámenes tipo test, para desincentivar las respuestas al azar." },
                    { t: "Factor de penalización", d: "Valor numérico (0,25; 0,33; 0,5…) que se multiplica por el número de errores para calcular el descuento en la nota." },
                    { t: "Nota de aprobado", d: "Umbral mínimo que hay que alcanzar para superar el examen. Varía según el país y la institución (5/10, 6/10, 60 %, etc.)." },
                    { t: "Ponderación", d: "Peso o porcentaje que aporta cada parte de una evaluación (examen, trabajos, prácticas) a la nota final de la asignatura." },
                    { t: "Recuperación", d: "Segunda oportunidad para aprobar un examen o asignatura suspendida, con nombres distintos según el país (recuperatorio, habilitación, extraordinario)." },
                    { t: "Escala A–F", d: "Sistema de calificación con letras (A, B, C, D, F) usado principalmente en el mundo anglosajón y parte de Latinoamérica." },
                  ].map((item) => (
                    <div key={item.t} className="rounded-xl border border-gray-200 bg-white p-4">
                      <dt className="font-semibold text-gray-800 text-[14px] mb-1">{item.t}</dt>
                      <dd className="text-gray-600 text-[13px] leading-6 m-0">{item.d}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* ── NOTA FINAL VS NOTA DE EXAMEN ──────────────────────────── */}
              <section className="mb-12" aria-labelledby="ponderacion-heading">
                <h2 id="ponderacion-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Nota del examen vs. nota final de la asignatura
                </h2>
                <p className="text-gray-700 leading-8 mb-4">
                  Esta calculadora obtiene la <strong>nota de un examen concreto</strong>. Sin embargo, en muchas asignaturas la
                  <strong> nota final</strong> combina el examen con otros
                  componentes (trabajos, prácticas, participación) mediante
                  una <strong>ponderación</strong>: un porcentaje que indica
                  cuánto pesa cada parte.
                </p>
                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-mono text-center text-[14px] mb-4">
                  Nota final = (Nota examen × % examen) + (Nota trabajos × % trabajos) + ...
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 text-[15px]">Ejemplo</h3>
                  <p className="text-gray-600 text-[14px] leading-6 mb-2">
                    Examen con nota 7,0 (70 % del total) y trabajos con nota 8,5 (30 % del total):
                  </p>
                  <div className="font-mono text-[13px] text-gray-700 space-y-1">
                    <p>Nota final = (7,0 × 0,70) + (8,5 × 0,30)</p>
                    <p className="text-blue-700 font-bold">Nota final = 4,9 + 2,55 = 7,45 sobre 10</p>
                  </div>
                </div>
              </section>

              {/* ── VENTAJAS ──────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="ventajas-heading">
                <h2 id="ventajas-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Ventajas de usar esta calculadora de notas
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {VENTAJAS.map((v) => (
                    <div key={v.titulo} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="font-semibold text-gray-800 mb-1">✔ {v.titulo}</h3>
                      <p className="text-gray-600 text-[13px] leading-6">{v.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── ERRORES FRECUENTES ────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="errores-heading">
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <h2 id="errores-heading" className="text-[26px] font-bold tracking-[-0.02em] mb-5 text-amber-900">
                    Errores frecuentes al calcular la nota de un examen
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    {[
                      "Olvidar activar la penalización en exámenes tipo test: la nota neta baja más de lo esperado y puede pasar de aprobado a suspenso.",
                      "Confundir preguntas en blanco con respuestas incorrectas al contar los fallos: en la mayoría de exámenes los blancos no restan.",
                      "Usar la escala anglosajona (A = 90%) cuando el examen es español (A = Sobresaliente, ≥ 9/10): son umbrales distintos.",
                      "Asumir que el aprobado siempre está en el 50%: en España es 5/10 (50%), en México 6/10 (60%), en Colombia 3/5 (60%).",
                      "Calcular la nota bruta y olvidar aplicar la penalización antes de convertirla a escala 0-10.",
                      "No diferenciar entre nota del examen parcial y nota final de la asignatura, que incluye ponderaciones de otros componentes.",
                    ].map((error) => (
                      <li key={error} className="flex gap-2">
                        <span className="text-amber-500 font-bold flex-shrink-0">⚠</span>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* ── CONSEJOS MEJORA NOTA ──────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="consejos-heading">
                <h2 id="consejos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Cómo mejorar tu nota en el próximo examen
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  Calcular la nota es solo el primer paso. La mejora real viene
                  de analizar qué fallaste y por qué.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { titulo: "Analiza cada error por categoría", texto: "Agrupa los fallos por tema o tipo de pregunta. Si el 70% de tus errores son de un solo bloque, ahí está la palanca de mejora más rápida." },
                    { titulo: "Practica con simulacros temporizados", texto: "La presión del tiempo es una variable oculta en muchos exámenes. Simular las condiciones reales reduce errores por agobio y mejora la gestión del tiempo." },
                    { titulo: "Usa la recuperación activa", texto: "Estudiar sin mirar el libro (cerrar los apuntes e intentar recordar) consolida la memoria mucho mejor que releer el mismo texto." },
                    { titulo: "Registra tu evolución con porcentajes", texto: "Anota el porcentaje de cada simulacro. Ver la progresión en un gráfico sencillo es uno de los mejores motivadores que existen." },
                  ].map((consejo) => (
                    <div key={consejo.titulo} className="rounded-2xl border border-gray-200 bg-white p-5">
                      <h3 className="font-semibold text-gray-800 mb-2">{consejo.titulo}</h3>
                      <p className="text-gray-600 text-[14px] leading-6">{consejo.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── HERRAMIENTAS RELACIONADAS (enlaces corregidos) ────────── */}
              <section className="mb-12" aria-labelledby="relacionadas-heading">
                <h2 id="relacionadas-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Otras calculadoras y recursos relacionados
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {RELACIONADAS.map((r) => (
                    <a key={r.titulo} href={r.href} className="rounded-2xl border border-gray-200 bg-white p-5 block hover:border-blue-300 hover:shadow-sm transition">
                      <h3 className="font-semibold text-blue-700 mb-1 text-[15px]">{r.titulo} →</h3>
                      <p className="text-gray-600 text-[13px] leading-6">{r.texto}</p>
                    </a>
                  ))}
                </div>
              </section>

              {/* ── FAQ (usa el mismo array FAQS que alimenta el schema) ──── */}
              <section aria-labelledby="faq-heading">
                <div className="bg-gray-50 py-12 px-6 rounded-2xl border border-gray-200">
                  <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
                    <div>
                      <h2 id="faq-heading" className="text-[28px] font-bold text-gray-900 mb-4">
                        Preguntas frecuentes
                      </h2>
                      <p className="text-gray-600 text-[15px] leading-7">
                        Dudas habituales sobre cómo calcular la nota de un
                        examen, qué es la penalización tipo test, cómo funciona
                        el MIR y cómo interpretar calificaciones en España y Latinoamérica.
                      </p>
                      <p className="text-gray-500 text-[13px] mt-4">
                        ¿No encuentras tu pregunta?{" "}
                        <a href="/contacto/" className="text-blue-600 underline underline-offset-2">Escríbenos</a>.
                      </p>
                    </div>
                    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                      {FAQS.map((faq, idx) => (
                        <details key={idx} className="group rounded-xl border border-gray-200 bg-white overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                          <summary className="cursor-pointer flex justify-between items-center px-5 py-4 text-gray-900 font-medium text-[15px] select-none list-none">
                            <h3 className="flex-1 pr-4" itemProp="name">{faq.q}</h3>
                            <span className="text-gray-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" aria-hidden="true">▾</span>
                          </summary>
                          <div className="px-5 pb-4 text-gray-600 text-[14px] leading-7" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">{faq.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
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