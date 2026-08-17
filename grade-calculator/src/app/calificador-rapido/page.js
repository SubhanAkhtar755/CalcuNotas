import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import EasyGradeCalculatorLab from "@/app/components/EasyGradeCalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

// ─── SCHEMA MARKUP ────────────────────────────────────────────────────────────
// NUEVO: FAQPage (15 Qs) + HowTo + BreadcrumbList + WebApplication
const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calificador Rápido — Tabla de Calificaciones para Profesores",
    url: "https://calcunotas.com/calificador-rapido/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    description:
      "Genera una tabla de calificaciones completa desde el total de preguntas. Ve respuestas correctas, incorrectas, porcentajes y notas con letras al instante. Válido para España (0-10), Colombia (0-5), Chile (1-7) y sistema A-F.",
    featureList: [
      "Tabla de calificaciones completa al instante",
      "Respuestas correctas e incorrectas por puntaje",
      "Porcentajes exactos y redondeados",
      "Notas con letras A, B, C, D, F",
      "Escala con más y menos (A+, A-, B+...)",
      "Compatible con España, Colombia, Chile y LATAM",
      "100 % gratuita, sin registro",
    ],
  },
  // ── FAQPage — 15 preguntas ───────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un calificador rápido?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un calificador rápido es una herramienta que genera una tabla de calificaciones completa a partir del número total de preguntas de un examen. Muestra respuestas correctas, incorrectas, porcentaje y nota con letra para cada puntaje posible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se calcula la nota a partir de respuestas incorrectas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Resta las respuestas incorrectas del total de preguntas para obtener las correctas. Luego divide las correctas entre el total y multiplica por 100: Porcentaje = (Correctas ÷ Total) × 100.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántas preguntas puedo fallar en un examen de 20 preguntas para aprobar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En España (aprobado = 50%): puedes fallar hasta 10. En México (aprobado = 60%): puedes fallar hasta 8. En Chile (aprobado = 60%): puedes fallar hasta 8 de 20 preguntas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántas preguntas puedo fallar en un examen de 40 preguntas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con aprobado al 50%: puedes fallar hasta 20. Con aprobado al 60%: puedes fallar hasta 16. Con aprobado al 70% (notable): puedes fallar hasta 12 de 40 preguntas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántas preguntas puedo fallar en un examen de 100 preguntas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con aprobado al 50%: puedes fallar hasta 50. Con aprobado al 60%: puedes fallar hasta 40. Para un notable (70%): puedes fallar hasta 30 de 100 preguntas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué nota con letra corresponde al 85%?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un 85% equivale a una nota B en el sistema anglosajón (80-89% = B). En España equivale a un 8,5 sobre 10, que corresponde a Notable alto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los profesores pueden usar el calificador rápido para quizzes y exámenes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los profesores pueden usarlo para quizzes, exámenes, hojas de trabajo, pruebas de ortografía, tareas de matemáticas y cualquier evaluación con preguntas de igual valor.",
        },
      },
      {
        "@type": "Question",
        name: "¿El calificador rápido muestra notas con más y menos (A+, B-, C+)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La herramienta puede mostrar la escala básica (A, B, C, D, F) o la escala extendida con más y menos (A+, A, A-, B+, B, B-, C+, C, C-, D+, D, D-, F) según la configuración seleccionada.",
        },
      },
      {
        "@type": "Question",
        name: "¿Todas las escalas de calificación son iguales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. España usa 0-10 con aprobado en 5. México usa 0-10 con aprobado en 6. Colombia usa 0-5 con aprobado en 3,0. Chile usa 1-7 con aprobado en 4,0. El sistema USA usa porcentaje con letras A-F.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo afectan los puntos extra a la tabla de calificaciones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los puntos extra o preguntas de bonificación se suman al puntaje obtenido antes de calcular el porcentaje. Pueden elevar el porcentaje por encima del 100% si el examen los permite.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia hay entre respuestas incorrectas y preguntas en blanco en la calificación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las respuestas en blanco generalmente no restan en exámenes básicos y se tratan igual que las incorrectas (no suman). En exámenes tipo test con penalización, solo las incorrectas restan; los blancos no afectan la nota.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se genera una tabla de calificaciones para imprimir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ingresa el total de preguntas en el calificador rápido. La tabla generada muestra todos los puntajes posibles con respuestas correctas, incorrectas, porcentaje y nota con letra. Puedes imprimirla directamente desde el navegador con Ctrl+P.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántas incorrectas para sacar un 7 en Chile (escala 1-7)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Chile, un 7 equivale al 100% de las respuestas correctas. Para un 6 (Muy Bueno, aprox. 86%), en un examen de 30 preguntas puedes fallar hasta 4. Usa el calificador rápido para obtener la tabla exacta según tu examen.",
        },
      },
      {
        "@type": "Question",
        name: "¿El calificador rápido funciona para exámenes de 30 preguntas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Ingresa 30 en el campo de total de preguntas y la herramienta genera la tabla completa para todos los puntajes del 0 al 30, con porcentaje y nota con letra para cada uno.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la fórmula para calcular el porcentaje de un examen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Porcentaje = (Respuestas correctas ÷ Total de preguntas) × 100. Por ejemplo: 17 correctas de 20 preguntas = (17 ÷ 20) × 100 = 85%.",
        },
      },
    ],
  },
  // ── HowTo Schema — NUEVO ────────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo usar el calificador rápido para generar una tabla de calificaciones",
    step: [
      {
        "@type": "HowToStep",
        name: "Ingresa el total de preguntas",
        text: "Escribe el número de preguntas, problemas o puntos posibles del examen, quiz o tarea.",
      },
      {
        "@type": "HowToStep",
        name: "Revisa correctas e incorrectas",
        text: "La tabla muestra automáticamente cuántas respuestas son correctas e incorrectas para cada puntaje posible.",
      },
      {
        "@type": "HowToStep",
        name: "Lee los porcentajes",
        text: "Cada fila muestra el porcentaje de calificación sin necesidad de calcular manualmente.",
      },
      {
        "@type": "HowToStep",
        name: "Usa la nota con letra",
        text: "Consulta la nota con letra (A, B, C, D, F o escala 0-10) para calificar rápidamente cada examen.",
      },
    ],
  },
  // ── BreadcrumbList — NUEVO ──────────────────────────────────────────────
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
        name: "Calificador Rápido",
        item: "https://calcunotas.com/calificador-rapido/",
      },
    ],
  },
];

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata = {
  // MEJORADO: más específico, accionable, con keywords principales
  title: "Calificador Rápido | Tabla de Calificaciones para Profesores Gratis",

  // MEJORADO: más entidades, LATAM coverage, CTA claro
  description:
    "Genera una tabla de calificaciones completa desde el total de preguntas: incorrectas, porcentajes y nota con letra al instante. Para España (0-10), Colombia (0-5), Chile (1-7) y sistema A-F. Gratis, sin registro.",

  keywords: [
    // ── PRIMARY ──────────────────────────────────────────────────────────
    "calificador rapido",
    "tabla de calificaciones para profesores",
    "calculadora de porcentaje de calificacion",
    "generador de tabla de notas",
    // ── EASY-WIN NUEVOS ───────────────────────────────────────────────────
    "cuantas preguntas puedo fallar y pasar",
    "tabla calificaciones 20 preguntas",
    "tabla calificaciones 30 preguntas",
    "tabla calificaciones 40 preguntas",
    "tabla calificaciones 50 preguntas",
    "tabla calificaciones 100 preguntas",
    "calificador de examenes para maestros",
    "calificador rapido para maestros gratis",
    "generador tabla de notas gratis",
    // ── PAÍS ESPECÍFICO — NUEVO ───────────────────────────────────────────
    "calificador rapido escala españa 0-10",
    "calificador rapido colombia escala 0-5",
    "calificador rapido chile escala 1-7",
    "cuantas incorrectas para sacar un 7 en chile",
    "tabla de notas escala 1 a 7 chile",
    // ── SECONDARY ────────────────────────────────────────────────────────
    "calculadora de respuestas correctas e incorrectas",
    "convertir respuestas incorrectas a porcentaje",
    "convertir respuestas incorrectas a nota",
    "nota con letra porcentaje conversion",
    "tabla de calificaciones para imprimir",
    // ── SEMÁNTICO / LSI ───────────────────────────────────────────────────
    "cuantas puedo fallar en un examen de 20 preguntas",
    "cuantas puedo fallar en un examen de 40 preguntas",
    "cuantas puedo fallar en un examen de 100 preguntas",
    "porcentaje de nota por respuestas incorrectas",
    "escala de calificaciones con mas y menos",
  ],

  alternates: {
    canonical: "https://calcunotas.com/calificador-rapido/",
    languages: {
      es:      "https://calcunotas.com/calificador-rapido/",
      "es-ES": "https://calcunotas.com/calificador-rapido/",
      "es-MX": "https://calcunotas.com/calificador-rapido/",
      "es-AR": "https://calcunotas.com/calificador-rapido/",
      "es-CO": "https://calcunotas.com/calificador-rapido/",
      "es-CL": "https://calcunotas.com/calificador-rapido/",
      "es-PE": "https://calcunotas.com/calificador-rapido/",
      "es-VE": "https://calcunotas.com/calificador-rapido/",
      "es-EC": "https://calcunotas.com/calificador-rapido/",
      "es-BO": "https://calcunotas.com/calificador-rapido/",
      "es-PY": "https://calcunotas.com/calificador-rapido/",
      "es-UY": "https://calcunotas.com/calificador-rapido/",
      "es-GT": "https://calcunotas.com/calificador-rapido/",
      "es-CU": "https://calcunotas.com/calificador-rapido/",
      "es-DO": "https://calcunotas.com/calificador-rapido/",
      "es-HN": "https://calcunotas.com/calificador-rapido/",
      "es-SV": "https://calcunotas.com/calificador-rapido/",
      "es-NI": "https://calcunotas.com/calificador-rapido/",
      "es-PA": "https://calcunotas.com/calificador-rapido/",
      "es-CR": "https://calcunotas.com/calificador-rapido/",
    },
  },

  // ── NUEVO: OpenGraph ─────────────────────────────────────────────────────
  openGraph: {
    title: "Calificador Rápido — Tabla de Calificaciones para Profesores",
    description:
      "Genera tablas de calificaciones completas al instante. Respuestas correctas, porcentajes y notas con letras. Compatible con España, México, Colombia, Chile. Gratis.",
    url: "https://calcunotas.com/calificador-rapido/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "website",
  },

  // ── NUEVO: Twitter Card ──────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Calificador Rápido | CalcuNotas",
    description:
      "Genera tu tabla de calificaciones al instante. Ingresa el total de preguntas y obtén porcentajes y notas con letras para cada puntaje posible. Gratis.",
  },

  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

// ─── DATOS ESTÁTICOS ──────────────────────────────────────────────────────────

// NUEVO: "Cuántas puedo fallar" reference tables
const FALLOS_TABLE = [
  {
    total: "20",
    esp50: "10", mex60: "8",  notable70: "6",  col60: "8",  chi60: "8",
  },
  {
    total: "25",
    esp50: "12", mex60: "10", notable70: "7",  col60: "10", chi60: "10",
  },
  {
    total: "30",
    esp50: "15", mex60: "12", notable70: "9",  col60: "12", chi60: "12",
  },
  {
    total: "40",
    esp50: "20", mex60: "16", notable70: "12", col60: "16", chi60: "16",
  },
  {
    total: "50",
    esp50: "25", mex60: "20", notable70: "15", col60: "20", chi60: "20",
  },
  {
    total: "100",
    esp50: "50", mex60: "40", notable70: "30", col60: "40", chi60: "40",
  },
];

// NUEVO: Tabla muestra calificador 20 preguntas
const TABLA_20 = [
  { incorrectas: "0",  correctas: "20", porcentaje: "100 %", letra: "A+" },
  { incorrectas: "1",  correctas: "19", porcentaje: "95 %",  letra: "A"  },
  { incorrectas: "2",  correctas: "18", porcentaje: "90 %",  letra: "A-" },
  { incorrectas: "3",  correctas: "17", porcentaje: "85 %",  letra: "B+" },
  { incorrectas: "4",  correctas: "16", porcentaje: "80 %",  letra: "B"  },
  { incorrectas: "5",  correctas: "15", porcentaje: "75 %",  letra: "C+" },
  { incorrectas: "6",  correctas: "14", porcentaje: "70 %",  letra: "C"  },
  { incorrectas: "7",  correctas: "13", porcentaje: "65 %",  letra: "D"  },
  { incorrectas: "8",  correctas: "12", porcentaje: "60 %",  letra: "D"  },
  { incorrectas: "9",  correctas: "11", porcentaje: "55 %",  letra: "F"  },
  { incorrectas: "10", correctas: "10", porcentaje: "50 %",  letra: "F"  },
];

// NUEVO: Escalas por país (competitor gap)
const ESCALAS_PAISES = [
  {
    pais: "🇪🇸 España",
    escala: "0 – 10",
    aprobado: "5,0 (50 %)",
    notable: "7,0 (70 %)",
    sobresaliente: "9,0 (90 %)",
    color: "bg-blue-50 border-blue-200",
  },
  {
    pais: "🇲🇽 México",
    escala: "0 – 10",
    aprobado: "6,0 (60 %)",
    notable: "8,0 (80 %)",
    sobresaliente: "9,0 (90 %)",
    color: "bg-green-50 border-green-200",
  },
  {
    pais: "🇨🇴 Colombia",
    escala: "0 – 5",
    aprobado: "3,0 (60 %)",
    notable: "4,0 (80 %)",
    sobresaliente: "4,5 (90 %)",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    pais: "🇨🇱 Chile",
    escala: "1 – 7",
    aprobado: "4,0 (60 %)",
    notable: "5,5 (78 %)",
    sobresaliente: "6,5 (90 %)",
    color: "bg-red-50 border-red-200",
  },
  {
    pais: "🌎 USA / LATAM",
    escala: "A – F",
    aprobado: "D (60 %)",
    notable: "B (80 %)",
    sobresaliente: "A (90 %)",
    color: "bg-purple-50 border-purple-200",
  },
];

// Escala con más y menos
const ESCALA_MAS_MENOS = [
  { rango: "97 – 100 %", letra: "A+", sobre10: "9,7 – 10,0", color: "bg-emerald-50 text-emerald-800" },
  { rango: "93 – 96 %",  letra: "A",  sobre10: "9,3 – 9,6",  color: "bg-emerald-50 text-emerald-800" },
  { rango: "90 – 92 %",  letra: "A-", sobre10: "9,0 – 9,2",  color: "bg-emerald-50 text-emerald-800" },
  { rango: "87 – 89 %",  letra: "B+", sobre10: "8,7 – 8,9",  color: "bg-blue-50 text-blue-800" },
  { rango: "83 – 86 %",  letra: "B",  sobre10: "8,3 – 8,6",  color: "bg-blue-50 text-blue-800" },
  { rango: "80 – 82 %",  letra: "B-", sobre10: "8,0 – 8,2",  color: "bg-blue-50 text-blue-800" },
  { rango: "77 – 79 %",  letra: "C+", sobre10: "7,7 – 7,9",  color: "bg-yellow-50 text-yellow-800" },
  { rango: "73 – 76 %",  letra: "C",  sobre10: "7,3 – 7,6",  color: "bg-yellow-50 text-yellow-800" },
  { rango: "70 – 72 %",  letra: "C-", sobre10: "7,0 – 7,2",  color: "bg-yellow-50 text-yellow-800" },
  { rango: "67 – 69 %",  letra: "D+", sobre10: "6,7 – 6,9",  color: "bg-orange-50 text-orange-800" },
  { rango: "60 – 66 %",  letra: "D",  sobre10: "6,0 – 6,6",  color: "bg-orange-50 text-orange-800" },
  { rango: "< 60 %",     letra: "F",  sobre10: "< 6,0",      color: "bg-red-50 text-red-800" },
];

const CASOS_USO = [
  { titulo: "Quizzes diarios",       desc: "Califica revisiones de aula y preguntas cortas al instante." },
  { titulo: "Exámenes de capítulo",  desc: "Genera tablas para pruebas de unidad y exámenes semestrales." },
  { titulo: "Pruebas de ortografía", desc: "Convierte palabras incorrectas en porcentajes y letras." },
  { titulo: "Hojas de matemáticas",  desc: "Califica problemas y ejercicios de práctica con precisión." },
  { titulo: "Tareas y deberes",      desc: "Obtén la nota de cualquier tarea por número de fallos." },
  { titulo: "Exámenes de práctica",  desc: "Ayuda a los estudiantes a estimar su nota antes del oficial." },
];

const FAQS = [
  {
    q: "¿Qué es un calificador rápido?",
    a: "Un calificador rápido es una herramienta que genera una tabla de calificaciones completa a partir del número total de preguntas de un examen. Muestra respuestas correctas, incorrectas, porcentaje y nota con letra para cada puntaje posible.",
  },
  {
    q: "¿Cómo se calcula la nota a partir de respuestas incorrectas?",
    a: "Resta las respuestas incorrectas del total de preguntas para obtener las correctas. Luego divide las correctas entre el total y multiplica por 100: Porcentaje = (Correctas ÷ Total) × 100.",
  },
  {
    q: "¿Cuántas preguntas puedo fallar en un examen de 20 preguntas para aprobar?",
    a: "En España (aprobado = 50%): puedes fallar hasta 10. En México (60%): hasta 8. En Chile y Colombia (60%): también hasta 8 de 20 preguntas.",
  },
  {
    q: "¿Cuántas preguntas puedo fallar en un examen de 40 preguntas?",
    a: "Con aprobado al 50%: puedes fallar hasta 20. Con aprobado al 60%: hasta 16. Para un notable (70%): puedes fallar hasta 12 de 40 preguntas.",
  },
  {
    q: "¿Cuántas preguntas puedo fallar en un examen de 100 preguntas?",
    a: "Con aprobado al 50%: puedes fallar hasta 50. Con aprobado al 60%: hasta 40. Para un notable (70%): puedes fallar hasta 30 de 100 preguntas.",
  },
  {
    q: "¿Qué nota con letra corresponde al 85%?",
    a: "Un 85% equivale a una nota B en el sistema anglosajón (80-89%). En España equivale a un 8,5 sobre 10, que corresponde a Notable alto.",
  },
  {
    q: "¿Los profesores pueden usar el calificador rápido para quizzes y exámenes?",
    a: "Sí. Es ideal para quizzes, exámenes, hojas de trabajo, pruebas de ortografía, tareas de matemáticas y cualquier evaluación con preguntas de igual valor.",
  },
  {
    q: "¿El calificador rápido muestra notas con más y menos (A+, B-, C+)?",
    a: "Sí. La herramienta puede mostrar la escala básica (A, B, C, D, F) o la escala extendida con más y menos (A+, A-, B+, B-, C+...) según la configuración seleccionada.",
  },
  {
    q: "¿Todas las escalas de calificación son iguales?",
    a: "No. España usa 0-10 con aprobado en 5. México usa 0-10 con aprobado en 6. Colombia usa 0-5 con aprobado en 3,0. Chile usa 1-7 con aprobado en 4,0. USA usa porcentaje con letras A-F.",
  },
  {
    q: "¿Cómo afectan los puntos extra a la tabla de calificaciones?",
    a: "Los puntos extra o preguntas de bonificación se suman al puntaje obtenido antes de calcular el porcentaje. Pueden elevar el porcentaje por encima del 100% si el examen los permite.",
  },
  {
    q: "¿Qué diferencia hay entre respuestas incorrectas y preguntas en blanco?",
    a: "Las preguntas en blanco generalmente no restan en exámenes básicos. En exámenes tipo test con penalización, solo las incorrectas restan; los blancos no afectan la nota.",
  },
  {
    q: "¿Cómo se genera una tabla de calificaciones para imprimir?",
    a: "Ingresa el total de preguntas en el calificador rápido. La tabla generada muestra todos los puntajes posibles. Puedes imprimirla desde el navegador con Ctrl+P (o Cmd+P en Mac).",
  },
  {
    q: "¿Cuántas incorrectas para sacar un 7 en Chile (escala 1-7)?",
    a: "En Chile, un 7 sobre 7 equivale al 100% de correctas. Para un 6 (aprox. 86%), en un examen de 30 preguntas puedes fallar hasta 4. Usa el calificador para obtener la tabla exacta.",
  },
  {
    q: "¿El calificador rápido funciona para exámenes de 30 preguntas?",
    a: "Sí. Ingresa 30 en el campo de total de preguntas y la herramienta genera la tabla completa para todos los puntajes del 0 al 30, con porcentaje y nota con letra para cada uno.",
  },
  // ── GAP 8: FAQS ADICIONALES ─────────────────────────────────────────────
{
  q: "¿Puedo usar puntos en lugar de preguntas?",
  a: "Sí, si cada punto tiene el mismo valor. Si las preguntas tienen diferentes valores, es mejor calcular primero los puntos obtenidos y dividirlos entre los puntos máximos antes de convertir el resultado a porcentaje.",
},
{
  q: "¿Qué pasa si las preguntas del examen tienen diferente valor?",
  a: "Una tabla basada únicamente en preguntas correctas puede no representar correctamente la nota. Cuando cada pregunta tiene un valor diferente, debes utilizar los puntos obtenidos y los puntos totales del examen.",
},
{
  q: "¿Cómo convierto un porcentaje a una nota sobre 10?",
  a: "En una conversión directa, divide el porcentaje entre 10. Por ejemplo, 85 % equivale a 8,5 sobre 10. Sin embargo, la escala oficial de una institución puede utilizar reglas de redondeo o equivalencias diferentes.",
},
{
  q: "¿Debo redondear el porcentaje antes de calcular la nota?",
  a: "Depende de las reglas de tu institución. Para mantener la mayor precisión posible, puedes conservar el porcentaje con decimales durante el cálculo y aplicar el redondeo únicamente al mostrar o registrar la nota final.",
},
{
  q: "¿El calificador rápido funciona si el examen tiene penalización por errores?",
  a: "La tabla normal funciona para exámenes en los que una respuesta incorrecta simplemente no suma puntos. Si existe una penalización específica por error, debes aplicar primero la fórmula de puntuación negativa indicada por el examen antes de convertir el resultado a porcentaje.",
},
  {
    q: "¿Cuál es la fórmula para calcular el porcentaje de un examen?",
    a: "Porcentaje = (Respuestas correctas ÷ Total de preguntas) × 100. Ejemplo: 17 correctas de 20 preguntas = (17 ÷ 20) × 100 = 85%.",
  },
];

// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
export default function CalificadorRapidoPage() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* ── Schema JSON-LD ────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-10 pb-10 bg-gradient-to-b px-8 from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">

          {/* Breadcrumb — NUEVO con itemScope */}
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
                <span itemProp="name" aria-current="page">Calificador Rápido</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Calificador Rápido
          </h1>

          {/* AI Overview target */}
          <p
            data-ai-answer="true"
            className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-2"
          >
            El <strong>calificador rápido</strong> gratuito para{" "}
            <a href="/calculadora-profesores/" className="text-blue-600 hover:text-blue-700 font-semibold underline-offset-4 underline">
              profesores y estudiantes
            </a>. Ingresa el número total de preguntas y genera al instante una{" "}
            <strong>tabla de calificaciones completa</strong> con respuestas
            correctas, incorrectas, porcentajes y notas con letras.
          </p>
          <p className="max-w-[820px] text-[15px] leading-7 text-[#8a94a6] mb-5">
            Compatible con la <strong>escala española 0-10</strong>, la{" "}
            <strong>escala colombiana 0-5</strong>, la{" "}
            <strong>escala chilena 1-7</strong> y el{" "}
            <strong>sistema A-F</strong> anglosajón. Ideal para quizzes,
            exámenes, hojas de trabajo y pruebas de ortografía.
          </p>

          <div className="flex flex-wrap gap-3" role="list" aria-label="Funcionalidades del calificador">
            {[
              "Tabla completa al instante",
              "Respuestas correctas e incorrectas",
              "Porcentajes de calificación",
              "Notas con letras A–F",
              "Escala con más y menos",
              "España / Colombia / Chile / USA",
              "100 % gratis",
            ].map((item) => (
              <span
                key={item}
                role="listitem"
                className="bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

<section className="mb-12 px-8">
  <h2 className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    Calificador Rápido vs Calculadora de Notas
  </h2>

  <div className="grid md:grid-cols-2 gap-5">
    <div className="border rounded-2xl p-5 bg-blue-50">
      <h3 className="font-semibold mb-3">
        Calificador Rápido
      </h3>
      <ul className="space-y-2 text-gray-700">
        <li>✓ Genera una tabla completa</li>
        <li>✓ Ideal para profesores</li>
        <li>✓ Muestra todos los puntajes posibles</li>
        <li>✓ Útil para imprimir y corregir exámenes</li>
      </ul>
    </div>

    <div className="border rounded-2xl p-5 bg-green-50">
      <h3 className="font-semibold mb-3">
        Calculadora de Notas
      </h3>
      <ul className="space-y-2 text-gray-700">
        <li>✓ Calcula un resultado específico</li>
        <li>✓ Ideal para estudiantes</li>
        <li>✓ Solo muestra una nota</li>
        <li>✓ Útil para revisar resultados individuales</li>
      </ul>
    </div>
  </div>
</section><section className="mb-12 px-8">
  <h2 className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    Preguntas en Blanco y Penalización por Error
  </h2>

  <p className="text-gray-700 leading-8 mb-4">
    La mayoría de los exámenes escolares califican únicamente las respuestas
    correctas. En estos casos, las preguntas en blanco y las respuestas
    incorrectas tienen el mismo efecto: no suman puntos.
  </p>

  <p className="text-gray-700 leading-8">
    Algunos exámenes tipo test aplican penalización por error. Cuando existe
    penalización, cada respuesta incorrecta reduce parte del puntaje obtenido.
    En esos casos es recomendable utilizar una calculadora específica para
    exámenes con corrección negativa.
  </p>
</section><section className="mb-12 px-8">
  <h2 className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    Cómo Imprimir una Tabla de Calificaciones
  </h2>

  <p className="text-gray-700 leading-8 mb-4">
    Muchos profesores imprimen tablas de calificación para corregir exámenes
    más rápidamente en el aula o en casa.
  </p>

  <ol className="list-decimal pl-6 text-gray-700 space-y-2">
    <li>Ingresa el total de preguntas.</li>
    <li>Genera la tabla completa.</li>
    <li>Presiona Ctrl + P en Windows o Cmd + P en Mac.</li>
    <li>Selecciona guardar como PDF o imprimir.</li>
  </ol>
</section>


      {/* ── CALCULADORA + SIDEBAR ─────────────────────────────────────────── */}
      <section className="pb-8" aria-label="Calificador rápido de exámenes">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <EasyGradeCalculatorLab />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* ── CONTENIDO SEO / AEO ───────────────────────────────────────────── */}
      <section className="pb-14" aria-label="Guía completa: calificador rápido para profesores">
        <div className=" mx-auto">
          <article
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            itemScope
            itemType="https://schema.org/Article"
          >
            <div className="p-6 md:p-8">

              {/* ── AI OVERVIEW SNIPPET ───────────────────────────────────── */}
              <div
                className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10"
                data-ai-snippet="true"
              >
                <h2 className="text-[26px] font-bold tracking-[-0.02em] mb-4">
                  Respuesta directa: ¿qué es y cómo funciona un calificador rápido?
                </h2>
                <p className="text-gray-700 leading-8">
                  Un <strong>calificador rápido</strong> es una herramienta que
                  genera automáticamente una tabla de calificaciones completa a
                  partir del total de preguntas de un examen. Usa la fórmula{" "}
                  <strong>Porcentaje = (Correctas ÷ Total) × 100</strong> para
                  calcular el porcentaje de cada puntaje posible y lo convierte
                  en nota con letra. Los <strong>profesores</strong> lo usan
                  para calificar toda una clase en segundos; los{" "}
                  <strong>estudiantes</strong>, para saber cuántas preguntas
                  pueden fallar y seguir aprobando.
                </p>
              </div>

              {/* ── QUÉ ES ────────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="que-es-heading">
                <h2 id="que-es-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Qué es un Calificador Rápido?
                </h2>
                <div className="space-y-4 text-gray-700 leading-8">
                  <p>
                    Un calificador rápido es un generador de tablas de
                    calificación que convierte puntajes de exámenes en
                    porcentajes y notas con letras comparando las respuestas
                    correctas con el total de preguntas.
                  </p>
                  <p>
                    Por ejemplo, si un examen tiene 30 preguntas, el
                    calificador genera la nota exacta para 30 correctas, 29
                    correctas, 28 correctas, y así hasta cero. El profesor
                    obtiene una tabla lista para calificar toda la clase sin
                    repetir el mismo cálculo una y otra vez.
                  </p>
                  <p>
                    A diferencia de una calculadora de notas ponderadas, el
                    calificador rápido trabaja con{" "}
                    <strong>preguntas de igual valor</strong>, lo que lo hace
                    perfecto para quizzes, pruebas de ortografía, hojas de
                    matemáticas y exámenes de opción múltiple.
                  </p>
                </div>
              </section>

              {/* ── CÓMO USAR ─────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="como-usar-heading">
                <h2 id="como-usar-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Cómo Usar el Calificador Rápido
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      n: "1",
                      titulo: "Ingresa el Total de Preguntas",
                      texto: "Escribe el número de preguntas, problemas o puntos posibles del quiz, examen, hoja de trabajo o tarea.",
                    },
                    {
                      n: "2",
                      titulo: "Revisa Correctas e Incorrectas",
                      texto: "La tabla muestra cuántas respuestas son correctas e incorrectas para cada puntaje posible sin cálculo manual.",
                    },
                    {
                      n: "3",
                      titulo: "Ve los Porcentajes",
                      texto: "Cada fila muestra el porcentaje exacto de calificación para no tener que dividir manualmente examen por examen.",
                    },
                    {
                      n: "4",
                      titulo: "Usa la Nota con Letra",
                      texto: "Consulta la nota con letra (A, B, C, D, F o escala 0-10) para calificar rápidamente cada papel de examen.",
                    },
                  ].map((p) => (
                    <div key={p.n} className="rounded-2xl border border-gray-200 p-5 bg-white flex gap-4 items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm" aria-hidden="true">
                        {p.n}
                      </div>
                      <div>
                        <h3 className="text-[16px] font-semibold text-gray-800 mb-1">{p.titulo}</h3>
                        <p className="text-gray-600 text-[14px] leading-6">{p.texto}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>{/* ── GAP 1: EJEMPLOS PRÁCTICOS POR TAMAÑO DE EXAMEN ─────────────────── */}
<section className="mb-12" aria-labelledby="ejemplos-heading">
  <h2 id="ejemplos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    Ejemplos de Calificación: 20, 30, 40, 50 y 100 Preguntas
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    El cálculo funciona exactamente igual sin importar el tamaño del examen.
    Lo que cambia es el porcentaje que representa cada respuesta correcta o
    incorrecta. Estos ejemplos muestran cómo convertir un número de aciertos
    en porcentaje y nota.
  </p>

  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        examen: "20 preguntas",
        resultado: "17 correctas, 3 incorrectas",
        calculo: "(17 ÷ 20) × 100 = 85 %",
        nota: "8,5 / 10 en España",
      },
      {
        examen: "30 preguntas",
        resultado: "24 correctas, 6 incorrectas",
        calculo: "(24 ÷ 30) × 100 = 80 %",
        nota: "8,0 / 10 en España",
      },
      {
        examen: "40 preguntas",
        resultado: "32 correctas, 8 incorrectas",
        calculo: "(32 ÷ 40) × 100 = 80 %",
        nota: "8,0 / 10 en España",
      },
      {
        examen: "50 preguntas",
        resultado: "42 correctas, 8 incorrectas",
        calculo: "(42 ÷ 50) × 100 = 84 %",
        nota: "8,4 / 10 en España",
      },
      {
        examen: "100 preguntas",
        resultado: "73 correctas, 27 incorrectas",
        calculo: "(73 ÷ 100) × 100 = 73 %",
        nota: "7,3 / 10 en España",
      },
    ].map((ejemplo) => (
      <div
        key={ejemplo.examen}
        className="rounded-2xl border border-gray-200 p-5 bg-white"
      >
        <h3 className="font-semibold text-gray-800 mb-3">
          Examen de {ejemplo.examen}
        </h3>

        <div className="space-y-2 text-[14px] text-gray-600 leading-6">
          <p>
            <span className="font-semibold text-gray-800">Resultado:</span>{" "}
            {ejemplo.resultado}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Cálculo:</span>{" "}
            {ejemplo.calculo}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Equivalencia:</span>{" "}
            {ejemplo.nota}
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 mt-5">
    <h3 className="font-semibold text-gray-800 mb-2">
      Regla rápida
    </h3>
    <p className="text-gray-700 text-[14px] leading-7">
      Si todas las preguntas tienen el mismo valor, puedes obtener el
      porcentaje dividiendo las respuestas correctas entre el total de
      preguntas y multiplicando por 100. Después puedes convertir ese
      porcentaje a la escala de notas que utilice tu centro educativo.
    </p>
  </div>
</section>{/* ── GAP 2: IMPACTO DE CADA PREGUNTA EN EL PORCENTAJE ───────────────── */}
<section className="mb-12" aria-labelledby="impacto-heading">
  <h2 id="impacto-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    ¿Cuánto vale cada pregunta en un examen?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Cuando todas las preguntas tienen el mismo valor, cada respuesta representa
    una parte fija del porcentaje total. Cuantas menos preguntas tenga el
    examen, mayor será el impacto de una sola respuesta correcta o incorrecta.
  </p>

  <div className="overflow-x-auto rounded-2xl border border-gray-200">
    <table className="w-full min-w-[500px] border-collapse text-[14px]">
      <caption className="sr-only">
        Porcentaje que representa cada pregunta según el tamaño del examen
      </caption>

      <thead>
        <tr className="bg-blue-600 text-white">
          <th scope="col" className="px-4 py-3 text-left font-semibold">
            Total de preguntas
          </th>
          <th scope="col" className="px-4 py-3 text-center font-semibold">
            Valor de 1 pregunta
          </th>
          <th scope="col" className="px-4 py-3 text-center font-semibold">
            1 fallo equivale a
          </th>
        </tr>
      </thead>

      <tbody>
        {[
          { total: "10", valor: "10 %", impacto: "10 puntos porcentuales" },
          { total: "20", valor: "5 %", impacto: "5 puntos porcentuales" },
          { total: "25", valor: "4 %", impacto: "4 puntos porcentuales" },
          { total: "30", valor: "3,33 %", impacto: "3,33 puntos porcentuales" },
          { total: "40", valor: "2,5 %", impacto: "2,5 puntos porcentuales" },
          { total: "50", valor: "2 %", impacto: "2 puntos porcentuales" },
          { total: "100", valor: "1 %", impacto: "1 punto porcentual" },
        ].map((row) => (
          <tr key={row.total} className="border-t border-gray-100">
            <td className="px-4 py-3 font-medium text-gray-800">
              {row.total} preguntas
            </td>
            <td className="px-4 py-3 text-center font-semibold text-blue-700">
              {row.valor}
            </td>
            <td className="px-4 py-3 text-center text-gray-700">
              {row.impacto}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 mt-5">
    <h3 className="font-semibold text-gray-800 mb-2">
      Ejemplo: examen de 20 preguntas
    </h3>
    <p className="text-gray-700 text-[14px] leading-7">
      En un examen de 20 preguntas, cada respuesta vale{" "}
      <strong>5 %</strong>. Por eso pasar de 18 a 17 respuestas correctas
      reduce el resultado de 90 % a 85 %. En un examen de 100 preguntas, la
      misma pérdida de una respuesta solo cambia el resultado en 1 punto
      porcentual.
    </p>
  </div>
</section>{/* ── GAP 3: REDONDEO Y DECIMALES ─────────────────────────────────────── */}
<section className="mb-12" aria-labelledby="redondeo-heading">
  <h2 id="redondeo-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    Cómo redondear porcentajes y notas correctamente
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    No todos los resultados producen un porcentaje entero. Por ejemplo,
    17 respuestas correctas de 30 preguntas producen 56,666... %. Para evitar
    diferencias entre estudiantes, es importante establecer una regla de
    redondeo y utilizarla de forma consistente.
  </p>

  <div className="grid gap-4 md:grid-cols-3">
    {[
      {
        titulo: "Sin redondear",
        texto: "17 ÷ 30 × 100 = 56,666... %. Mantiene el resultado matemático completo.",
      },
      {
        titulo: "A 2 decimales",
        texto: "56,666... % se muestra como 56,67 %. Es útil cuando se necesitan resultados precisos.",
      },
      {
        titulo: "Al número entero",
        texto: "56,666... % se muestra como 57 %. Es más sencillo, pero reduce el nivel de detalle.",
      },
    ].map((item) => (
      <div
        key={item.titulo}
        className="rounded-2xl border border-gray-200 p-5 bg-white"
      >
        <h3 className="font-semibold text-gray-800 mb-2">
          {item.titulo}
        </h3>
        <p className="text-gray-600 text-[14px] leading-6">
          {item.texto}
        </p>
      </div>
    ))}
  </div>

  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 mt-5">
    <h3 className="font-semibold text-amber-900 mb-2">
      Consejo para profesores
    </h3>
    <p className="text-gray-700 text-[14px] leading-7">
      Define antes de corregir si las notas se registrarán con decimales,
      porcentajes enteros o una cantidad específica de posiciones decimales.
      Aplicar la misma regla a toda la clase evita diferencias de criterio
      entre estudiantes.
    </p>
  </div>
</section>{/* ── GAP 4: CUÁNDO USAR Y CUÁNDO NO USAR EL CALIFICADOR ─────────────── */}
<section className="mb-12" aria-labelledby="limites-heading">
  <h2 id="limites-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    ¿Cuándo funciona mejor un Calificador Rápido?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    El calificador rápido es especialmente preciso cuando cada pregunta tiene
    el mismo valor. Si todas las respuestas correctas aportan la misma cantidad
    de puntos, el número de aciertos puede convertirse directamente en un
    porcentaje.
  </p>

  <div className="grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
      <h3 className="text-[18px] font-semibold text-green-900 mb-3">
        ✓ Ideal para este calificador
      </h3>

      <ul className="space-y-2 text-gray-700 text-[14px] leading-7">
        <li>• Exámenes de opción múltiple con preguntas de igual valor.</li>
        <li>• Quizzes donde cada pregunta vale 1 punto.</li>
        <li>• Pruebas de ortografía con el mismo valor por palabra.</li>
        <li>• Hojas de ejercicios con puntos iguales.</li>
        <li>• Exámenes donde el porcentaje depende directamente de los aciertos.</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <h3 className="text-[18px] font-semibold text-amber-900 mb-3">
        ⚠ Revisa el sistema antes de usarlo
      </h3>

      <ul className="space-y-2 text-gray-700 text-[14px] leading-7">
        <li>• Preguntas con diferentes valores en puntos.</li>
        <li>• Exámenes con penalización por respuestas incorrectas.</li>
        <li>• Evaluaciones con preguntas de bonificación especiales.</li>
        <li>• Tareas donde cada actividad tiene un peso diferente.</li>
        <li>• Promedios finales calculados con porcentajes ponderados.</li>
      </ul>
    </div>
  </div>

  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 mt-5">
    <h3 className="font-semibold text-gray-800 mb-2">
      Ejemplo de por qué importa
    </h3>
    <p className="text-gray-700 text-[14px] leading-7">
      Si un examen tiene 10 preguntas de 1 punto cada una, 8 respuestas
      correctas representan 80 %. Pero si dos preguntas valen 5 puntos y las
      otras ocho valen 1 punto, contar únicamente las respuestas correctas puede
      producir un resultado incorrecto. En ese caso debe utilizarse el total de
      puntos obtenidos y el total de puntos posibles.
    </p>
  </div>
</section>{/* ── GAP 5: FÓRMULA DE PENALIZACIÓN POR ERROR ───────────────────────── */}
<section className="mb-12" aria-labelledby="penalizacion-formula-heading">
  <h2
    id="penalizacion-formula-heading"
    className="text-[28px] font-bold tracking-[-0.02em] mb-5"
  >
    Cómo calcular una nota con penalización por errores
  </h2>

  <p className="text-gray-700 leading-8 mb-4">
    Algunos exámenes tipo test descuentan puntos por cada respuesta incorrecta.
    En estos casos, no basta con restar los errores del total de preguntas.
    Primero debes conocer cuánto vale cada respuesta incorrecta según las
    reglas del examen.
  </p>

  <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-5">
    Puntuación = Correctas − (Incorrectas × Penalización)
  </div>

  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
    <h3 className="font-semibold text-gray-800 mb-3">
      Ejemplo sencillo
    </h3>

    <p className="text-gray-700 text-[15px] leading-7 mb-3">
      Supongamos un examen con 20 preguntas, 15 respuestas correctas,
      5 incorrectas y una penalización de 0,25 puntos por cada error.
    </p>

    <div className="space-y-1 text-[14px] font-mono text-gray-700">
      <p>Correctas = <strong>15</strong></p>
      <p>Penalización = 5 × 0,25 = <strong>1,25</strong></p>
      <p>Puntuación neta = 15 − 1,25 = <strong>13,75 puntos</strong></p>
    </div>

    <p className="text-gray-600 text-[13px] leading-6 mt-4">
      La conversión final de esa puntuación a porcentaje o nota depende de las
      reglas específicas del examen. Si tu prueba no aplica penalización,
      utiliza el cálculo normal de respuestas correctas sobre el total.
    </p>
  </div>
</section>{/* ── GAP 6: CALCULAR MÁXIMO DE FALLOS SEGÚN NOTA OBJETIVO ───────────── */}
<section className="mb-12" aria-labelledby="objetivo-heading">
  <h2 id="objetivo-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
    ¿Cuántas puedo fallar para conseguir una nota determinada?
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    También puedes hacer el cálculo al revés: en lugar de empezar por el número
    de errores, empieza por la nota o porcentaje que quieres conseguir. Si las
    preguntas tienen el mismo valor, primero determina cuántas respuestas
    correctas necesitas y después resta ese número del total.
  </p>

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-5">
    <h3 className="font-semibold text-gray-800 mb-3">
      Fórmula para encontrar el máximo de errores
    </h3>

    <div className="bg-white border border-blue-100 rounded-xl px-5 py-4 font-mono text-center text-[14px] text-gray-800">
      Máximo de errores = Total de preguntas − Correctas necesarias
    </div>

    <p className="text-gray-700 text-[14px] leading-7 mt-4">
      Por ejemplo, para conseguir al menos 80 % en un examen de 50 preguntas,
      necesitas 40 respuestas correctas. Por lo tanto, puedes tener hasta
      <strong> 10 respuestas incorrectas</strong>.
    </p>
  </div>

  <div className="overflow-x-auto rounded-2xl border border-gray-200">
    <table className="w-full min-w-[520px] border-collapse text-[14px]">
      <caption className="sr-only">
        Máximo de preguntas incorrectas para obtener al menos 80 por ciento
      </caption>

      <thead>
        <tr className="bg-blue-600 text-white">
          <th scope="col" className="px-4 py-3 text-left font-semibold">
            Total
          </th>
          <th scope="col" className="px-4 py-3 text-center font-semibold">
            Correctas para 80 %
          </th>
          <th scope="col" className="px-4 py-3 text-center font-semibold">
            Máximo de fallos
          </th>
        </tr>
      </thead>

      <tbody>
        {[
          { total: "20", correctas: "16", fallos: "4" },
          { total: "30", correctas: "24", fallos: "6" },
          { total: "40", correctas: "32", fallos: "8" },
          { total: "50", correctas: "40", fallos: "10" },
          { total: "100", correctas: "80", fallos: "20" },
        ].map((row) => (
          <tr key={row.total} className="border-t border-gray-100">
            <td className="px-4 py-3 font-medium text-gray-800">
              {row.total} preguntas
            </td>
            <td className="px-4 py-3 text-center font-semibold text-blue-700">
              {row.correctas}
            </td>
            <td className="px-4 py-3 text-center font-bold text-green-700">
              ≤ {row.fallos}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>{/* ── GAP 7: FLUJO REAL DE TRABAJO PARA PROFESORES ───────────────────── */}
<section className="mb-12" aria-labelledby="flujo-profesor-heading">
  <h2
    id="flujo-profesor-heading"
    className="text-[28px] font-bold tracking-[-0.02em] mb-5"
  >
    Ejemplo real: cómo un profesor puede corregir un examen de 30 preguntas
  </h2>

  <p className="text-gray-700 leading-8 mb-5">
    Imagina una clase en la que todos los estudiantes realizan el mismo examen
    de 30 preguntas y cada pregunta vale lo mismo. En lugar de calcular el
    porcentaje de cada examen manualmente, el profesor puede utilizar una única
    tabla como referencia.
  </p>

  <div className="grid gap-4 md:grid-cols-4">
    {[
      {
        n: "1",
        titulo: "Genera la tabla",
        texto: "Introduce 30 como total de preguntas y obtén todos los resultados posibles.",
      },
      {
        n: "2",
        titulo: "Cuenta los fallos",
        texto: "Durante la corrección, cuenta cuántas respuestas incorrectas tiene cada examen.",
      },
      {
        n: "3",
        titulo: "Busca la fila",
        texto: "Localiza ese número de errores en la tabla para conocer el porcentaje correspondiente.",
      },
      {
        n: "4",
        titulo: "Registra la nota",
        texto: "Aplica la escala de calificación establecida por el centro o profesor.",
      },
    ].map((paso) => (
      <div
        key={paso.n}
        className="rounded-2xl border border-gray-200 p-5 bg-white"
      >
        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-3">
          {paso.n}
        </div>

        <h3 className="font-semibold text-gray-800 mb-2">
          {paso.titulo}
        </h3>

        <p className="text-gray-600 text-[13px] leading-6">
          {paso.texto}
        </p>
      </div>
    ))}
  </div>

  <div className="rounded-2xl border border-green-100 bg-green-50 p-5 mt-5">
    <h3 className="font-semibold text-green-900 mb-2">
      Ventaja práctica
    </h3>
    <p className="text-gray-700 text-[14px] leading-7">
      Una vez creada la tabla para el examen, el profesor no necesita repetir
      la división para cada estudiante. Esto resulta especialmente útil cuando
      todos los exámenes tienen exactamente el mismo número de preguntas y
      utilizan la misma regla de calificación.
    </p>
  </div>
</section>

              {/* ── FÓRMULA (Featured Snippet target) ────────────────────── */}
              <section className="mb-12" aria-labelledby="formula-heading">
                <h2 id="formula-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Fórmula del Calificador Rápido
                </h2>
                <p className="text-gray-700 leading-8 mb-4">
                  El calificador usa dos fórmulas básicas encadenadas:
                </p>
                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-4">
                  Respuestas Correctas = Total de Preguntas − Respuestas Incorrectas
                </div>
                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-6">
                  Porcentaje = (Respuestas Correctas ÷ Total de Preguntas) × 100
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3">Ejemplo práctico</h3>
                  <p className="text-gray-700 text-[15px] leading-7 mb-2">
                    Quiz de <strong>20 preguntas</strong>. Estudiante falla <strong>3</strong>:
                  </p>
                  <div className="space-y-1 text-[14px] font-mono text-gray-700">
                    <p>Correctas = 20 − 3 = <strong>17</strong></p>
                    <p>Porcentaje = (17 ÷ 20) × 100 = <strong>85 % → Nota B</strong></p>
                    <p>Nota sobre 10 (España) = <strong>8,5 — Notable</strong></p>
                  </div>
                </div>
              </section>

              {/* ── TABLA DE MUESTRA — NUEVO (20 preguntas, keyword target) ─ */}
              <section className="mb-12" aria-labelledby="tabla20-heading">
                <h2 id="tabla20-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Tabla de calificaciones para examen de 20 preguntas
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Referencia rápida para un examen de 20 preguntas sin
                  penalización. Úsala directamente o genera la tuya con el
                  calificador de arriba.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[500px] border-collapse text-[14px]">
                    <caption className="sr-only">Tabla de calificaciones para examen de 20 preguntas</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Incorrectas</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Correctas</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Porcentaje</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Nota con Letra</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TABLA_20.map((row, i) => (
                        <tr key={i} className={`border-t border-gray-100 ${parseFloat(row.porcentaje) >= 90 ? "bg-emerald-50" : parseFloat(row.porcentaje) >= 80 ? "bg-blue-50" : parseFloat(row.porcentaje) >= 70 ? "bg-yellow-50" : parseFloat(row.porcentaje) >= 60 ? "bg-orange-50" : "bg-red-50"}`}>
                          <td className="px-4 py-3 font-medium text-gray-800">{row.incorrectas}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{row.correctas}</td>
                          <td className="px-4 py-3 text-center font-bold text-gray-800">{row.porcentaje}</td>
                          <td className="px-4 py-3 text-center font-bold text-gray-800">{row.letra}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-gray-500 mt-2">
                  * Para otros tamaños de examen usa el calificador de arriba
                  o consulta la sección de "cuántas puedo fallar" más abajo.
                </p>
              </section>

              {/* ── CUÁNTAS PUEDO FALLAR — NUEVO (easy-win keyword) ──────── */}
              <section className="mb-12" aria-labelledby="fallos-heading">
                <h2 id="fallos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  ¿Cuántas preguntas puedo fallar y seguir aprobando?
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Número máximo de respuestas incorrectas permitidas según el
                  umbral de aprobado de cada país (sin penalización).
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[600px] border-collapse text-[14px]">
                    <caption className="sr-only">Máximo de respuestas incorrectas para aprobar según país</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Total preguntas</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">España (50 %)</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">México / Col / Chile (60 %)</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Notable (70 %)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FALLOS_TABLE.map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-gray-800">{row.total} preguntas</td>
                          <td className="px-4 py-3 text-center font-semibold text-green-700">≤ {row.esp50} fallos</td>
                          <td className="px-4 py-3 text-center font-semibold text-blue-700">≤ {row.mex60} fallos</td>
                          <td className="px-4 py-3 text-center font-semibold text-purple-700">≤ {row.notable70} fallos</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-gray-500 mt-2">
                  * Sin penalización por errores. Para exámenes tipo test con
                  penalización, usa la{" "}
                  <a href="/" className="text-blue-600 underline underline-offset-2">
                    calculadora de notas de examen
                  </a>
                  .
                </p>
              </section>

              {/* ── ESCALA MÁS Y MENOS ────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="escala-heading">
                <h2 id="escala-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Escala completa de notas con más y menos
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  La escala con más y menos ofrece más detalle que la escala
                  básica A-F. Equivalencia con nota sobre 10 para referencia
                  con el sistema español.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[480px] border-collapse text-[14px]">
                    <caption className="sr-only">Escala de calificaciones con más y menos y equivalencia en nota sobre 10</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Porcentaje</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Letra</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Nota /10 (España)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ESCALA_MAS_MENOS.map((row, i) => (
                        <tr key={i} className={`border-t border-gray-100 ${row.color}`}>
                          <td className="px-4 py-3 font-semibold">{row.rango}</td>
                          <td className="px-4 py-3 text-center font-bold text-[16px]">{row.letra}</td>
                          <td className="px-4 py-3 text-center">{row.sobre10}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── ESCALAS POR PAÍS — NUEVO (competitor gap) ────────────── */}
              <section className="mb-12" aria-labelledby="paises-heading">
                <h2 id="paises-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Nota mínima para aprobar por país
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  El umbral de aprobado varía en cada país hispanohablante.
                  Usa la escala de tu institución al interpretar los resultados
                  del calificador.
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {ESCALAS_PAISES.map((e) => (
                    <div key={e.pais} className={`rounded-2xl border p-5 ${e.color}`}>
                      <div className="font-bold text-[16px] text-gray-800 mb-3">{e.pais}</div>
                      <div className="space-y-1 text-[13px] text-gray-700">
                        <p><span className="font-semibold">Escala:</span> {e.escala}</p>
                        <p><span className="font-semibold">Aprobado:</span> {e.aprobado}</p>
                        <p><span className="font-semibold">Notable:</span> {e.notable}</p>
                        <p><span className="font-semibold">Sobresaliente:</span> {e.sobresaliente}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── POR QUÉ PROFESORES ────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="profesores-heading">
                <h2 id="profesores-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Por Qué los Profesores Usan un Calificador Rápido
                </h2>
                <div className="space-y-4 text-gray-700 leading-8">
                  <p>
                    Los profesores suelen calificar muchos exámenes al mismo
                    tiempo. Cuando cada examen tiene el mismo número de
                    preguntas, una tabla de calificación rápida hace el proceso
                    mucho más ágil: el profesor solo mira el número de
                    respuestas incorrectas en el papel y encuentra el porcentaje
                    correspondiente en la tabla.
                  </p>
                  <p>
                    Es ideal para <strong>quizzes diarios</strong>, pruebas de
                    ortografía, hojas de trabajo de matemáticas, revisiones de
                    lectura, exámenes de ciencias, quizzes de vocabulario y
                    tareas de repaso. Mantiene la calificación consistente y
                    reduce los errores de cálculo manual.
                  </p>
                  <p>
                    También es útil cuando el profesor necesita{" "}
                    <strong>explicar la nota a los estudiantes</strong>: una
                    tabla clara muestra exactamente cómo se calculó el puntaje
                    y cómo cada respuesta incorrecta cambió el resultado final.
                  </p>
                </div>
              </section>

              {/* ── CASOS DE USO ──────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="casos-heading">
                <h2 id="casos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Qué Puedes Calificar con un Calificador Rápido?
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {CASOS_USO.map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <h3 className="font-semibold text-gray-800 mb-2">{c.titulo}</h3>
                      <p className="text-gray-600 text-[13px] leading-6">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CORRECTO VS INCORRECTO ────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="metodos-heading">
                <h2 id="metodos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Dos formas de usar el calificador: correctas o incorrectas
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-[18px] font-semibold text-gray-800 mb-3">
                      Usando Respuestas Incorrectas
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Los profesores suelen contar primero las preguntas
                      falladas mientras corrigen. La calculadora resta las
                      incorrectas del total y calcula el porcentaje
                      automáticamente.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-[18px] font-semibold text-gray-800 mb-3">
                      Usando Respuestas Correctas
                    </h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Los estudiantes suelen saber cuántas acertaron. La
                      calculadora divide las correctas entre el total y obtiene
                      el porcentaje y la nota con letra al instante.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── ERRORES COMUNES ───────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="errores-heading">
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <h2 id="errores-heading" className="text-[26px] font-bold tracking-[-0.02em] mb-5 text-amber-900">
                    Errores comunes al usar un calificador rápido
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    {[
                      "Ingresar un número total de preguntas incorrecto: una pregunta de diferencia cambia todos los porcentajes de la tabla.",
                      "Confundir respuestas correctas con respuestas incorrectas al introducir el dato.",
                      "Usar una escala de notas que no corresponde a la política del colegio o institución.",
                      "Redondear porcentajes de manera diferente para distintos estudiantes (inconsistencia de calificación).",
                      "Olvidar las reglas de preguntas de bonificación o puntos extra que pueden subir el porcentaje.",
                      "Tratar tareas con peso ponderado como exámenes simples por número de preguntas.",
                    ].map((error, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-amber-600 font-bold flex-shrink-0">⚠</span>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* ── CONSEJOS ──────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="consejos-heading">
                <h2 id="consejos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Consejos para calificar más rápido y con más justicia
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      titulo: "Confirma el total de preguntas primero",
                      texto: "Asegúrate de que el conteo total sea correcto antes de usar la tabla. Un error aquí cambia todos los porcentajes.",
                    },
                    {
                      titulo: "Usa una escala para toda la clase",
                      texto: "Aplica la misma escala y regla de redondeo a todos los estudiantes para una calificación consistente y justa.",
                    },
                    {
                      titulo: "Define las reglas de decimales claramente",
                      texto: "Decide si mostrarás decimales exactos o puntajes redondeados antes de finalizar las notas y comunicarlo a los estudiantes.",
                    },
                    {
                      titulo: "Calcula los puntos extra por separado",
                      texto: "Si la tarea incluye preguntas de bonificación, calcúlalas según la política de calificación de tu clase antes de aplicar la tabla.",
                    },
                  ].map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <h3 className="font-semibold text-gray-800 mb-2">{c.titulo}</h3>
                      <p className="text-gray-600 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── INTERNAL LINKING — NUEVO ──────────────────────────────── */}
              <section className="mb-12" aria-labelledby="herramientas-heading">
                <h2 id="herramientas-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Otras calculadoras académicas relacionadas
                </h2>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    {
                      href: "/",
                      titulo: "Calculadora de Notas de Examen",
                      desc: "Calcula porcentaje, nota sobre 10 y letra con penalización tipo test incluida.",
                      anchor: "calculadora de notas de examen con aciertos y errores",
                    },
                    {
                      href: "/nota-final/",
                      titulo: "Calculadora de Nota Final",
                      desc: "¿Cuánto necesitas en el examen final para aprobar? Resultado exacto al instante.",
                      anchor: "calcular nota necesaria examen final",
                    },
                    {
                      href: "/calculadora-de-notas/",
                      titulo: "Calculadora de Notas Ponderadas",
                      desc: "Calcula tu promedio con evaluaciones de diferente peso: tareas, parciales y examen final.",
                      anchor: "calcular promedio ponderado por porcentaje",
                    },
                    {
                      href: "/calculadora-profesores/",
                      titulo: "Calculadora para Profesores",
                      desc: "Corrige exámenes de toda la clase con tabla de calificaciones automática.",
                      anchor: "calculadora notas para maestros y profesores",
                    },
                  ].map((tool) => (
                    <a
                      key={tool.href}
                      href={tool.href}
                      title={tool.anchor}
                      className="rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm transition-all block"
                    >
                      <h3 className="font-semibold text-blue-600 text-[14px] mb-1">{tool.titulo}</h3>
                      <p className="text-gray-500 text-[13px] leading-5">{tool.desc}</p>
                    </a>
                  ))}
                </div>
              </section>

              {/* ── FAQ — 15 preguntas ────────────────────────────────────── */}
              <section aria-labelledby="faq-heading">
                <div className="bg-gray-50 py-12 px-6 rounded-2xl border border-gray-200">
                  <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
                    <div>
                      <h2 id="faq-heading" className="text-[28px] font-bold text-gray-900 mb-4">
                        Preguntas frecuentes
                      </h2>
                      <p className="text-gray-600 text-[15px] leading-7">
                        Dudas habituales de profesores y estudiantes sobre el
                        calificador rápido, tablas de calificación, respuestas
                        incorrectas, porcentajes y escalas de notas en distintos
                        países hispanohablantes.
                      </p>
                      <p className="text-gray-500 text-[13px] mt-4">
                        ¿No encuentras tu pregunta?{" "}
                        <a href="/contacto/" className="text-blue-600 underline underline-offset-2">
                          Escríbenos
                        </a>
                        .
                      </p>
                    </div>

                    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                      {FAQS.map((faq, idx) => (
                        <details
                          key={idx}
                          className="group rounded-xl border border-gray-200 bg-white overflow-hidden"
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                        >
                          <summary className="cursor-pointer flex justify-between items-center px-5 py-4 text-gray-900 font-medium text-[15px] select-none list-none">
                            <h3 className="flex-1 pr-4" itemProp="name">{faq.q}</h3>
                            <span className="text-gray-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" aria-hidden="true">▾</span>
                          </summary>
                          <div
                            className="px-5 pb-4 text-gray-600 text-[14px] leading-7"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                          >
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