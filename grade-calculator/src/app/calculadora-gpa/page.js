import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import GPACalculatorLab from "@/app/components/GPACalculatorLab";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

// ─── SCHEMA MARKUP ────────────────────────────────────────────────────────────
// NUEVO: WebApp + FAQPage (15 Qs) + HowTo + BreadcrumbList
const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora GPA — Semestral, Acumulado y Ponderado",
    url: "https://calcunotas.com/calculadora-gpa/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Calcula tu GPA semestral, acumulado y ponderado en escala 4.0. Ingresa calificaciones en letra y horas crédito para obtener tu Grade Point Average al instante. Compatible con sistemas AP, IB y Honores. Incluye conversión a nota española, colombiana y chilena.",
    featureList: [
      "GPA semestral al instante",
      "GPA acumulado con semestres anteriores",
      "GPA ponderado para clases AP, IB y Honores",
      "Escala 4.0 estándar y con más/menos",
      "Conversión GPA a nota española (0-10)",
      "Conversión GPA a nota colombiana (0-5)",
      "Planificación de GPA objetivo futuro",
      "Sin registro, 100 % gratuita",
    ],
  },
  // ── FAQPage — 15 preguntas ───────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo se calcula el GPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El GPA se calcula convirtiendo cada calificación en letra a puntos de grado (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0), multiplicando por las horas crédito de cada materia, sumando todos los puntos de calidad y dividiendo entre el total de horas crédito. Fórmula: GPA = Total de Puntos de Calidad ÷ Total de Horas Crédito.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué GPA es bueno para la universidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En escala 4.0: un GPA de 3.5 a 4.0 se considera excelente (equivale a A). Un GPA de 3.0 a 3.49 es bueno (B). Un GPA de 2.0 a 2.99 es aceptable (C). Por debajo de 2.0 suele implicar riesgo académico o probation. Para becas competitivas generalmente se requiere 3.0 o más.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto equivale un GPA de 3.5 en nota española?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un GPA de 3.5 equivale aproximadamente a un 8,75 sobre 10 en la escala española (Notable alto). La conversión aproximada es: GPA ÷ 4.0 × 10. Así: 3.5 ÷ 4.0 × 10 = 8.75. Un GPA de 4.0 = 10 (Sobresaliente), 3.0 = 7.5 (Notable), 2.0 = 5.0 (Aprobado).",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre GPA semestral y GPA acumulado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El GPA semestral mide únicamente un período académico (un semestre o cuatrimestre). El GPA acumulado combina todos los semestres completados y refleja el rendimiento académico general a lo largo de toda la carrera.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre GPA ponderado y no ponderado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El GPA no ponderado usa la escala estándar de 4.0 para todas las clases. El GPA ponderado asigna puntos adicionales a clases avanzadas: AP y doble inscripción suman +1.0 punto, clases Honores suman +0.5 punto. Esto puede llevar el GPA ponderado por encima de 4.0.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto GPA necesito para mantener una beca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende de la institución. La mayoría de becas universitarias requieren un GPA mínimo de 2.0 a 3.0. Las becas competitivas o de honor suelen exigir 3.5 o más. Siempre consulta los requisitos específicos de tu beca o institución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es la probation académica y qué GPA la desencadena?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La probation académica (o período de prueba académico) es una advertencia que emite la institución cuando el GPA cae por debajo del mínimo requerido. La mayoría de universidades aplican probation cuando el GPA acumulado baja de 2.0 (equivalente a promedio C).",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se calcula el GPA acumulado incluyendo semestres anteriores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fórmula: Nuevo GPA Acumulado = (GPA Anterior × Créditos Anteriores + Puntos de Calidad del Semestre Actual) ÷ Total de Créditos. Ejemplo: GPA anterior 3.2 con 30 créditos, semestre actual 12 puntos de calidad con 4 créditos → (3.2 × 30 + 12) ÷ 34 = 3.18.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué afectan las horas crédito al GPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las horas crédito funcionan como peso en el cálculo. Una materia de 4 créditos con A aporta 16 puntos de calidad (4.0 × 4), mientras que una de 1 crédito con A solo aporta 4 puntos (4.0 × 1). Por eso las materias de más créditos tienen mayor impacto en el GPA final.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto GPA necesito en cursos futuros para subir mi promedio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fórmula: GPA requerido = (GPA objetivo × Total créditos futuros − GPA actual × Créditos actuales) ÷ Créditos futuros. Esta calculadora incluye una sección de planificación que lo calcula automáticamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se convierte el GPA a nota colombiana (0-5)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conversión aproximada es: Nota colombiana = GPA ÷ 4.0 × 5. Ejemplos: GPA 4.0 = 5.0 (Sobresaliente), GPA 3.6 = 4.5 (Excelente), GPA 2.4 = 3.0 (Aprobado mínimo), GPA 1.6 = 2.0 (Reprobado en Colombia).",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se convierte el GPA a nota chilena (1-7)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conversión aproximada es: Nota chilena = GPA ÷ 4.0 × 6 + 1. Ejemplos: GPA 4.0 = 7.0 (máximo), GPA 3.0 = 5.5 (Bueno), GPA 1.2 = 4.0 (Aprobado mínimo en Chile), GPA 0.0 = 1.0 (mínimo).",
        },
      },
      {
        "@type": "Question",
        name: "¿Las materias de aprobado/reprobado (Pass/Fail) afectan el GPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente no. Las materias con calificación Aprobado (P) o Reprobado (NP/F) suelen excluirse del cálculo del GPA. Sin embargo, si se reprueba una materia P/F en algunas instituciones sí puede afectarlo. Siempre consulta la política de tu institución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa con el GPA si repito una materia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende de la política de la institución. Algunas escuelas aplican 'grade forgiveness' (perdón de calificación) y reemplazan la nota original con la nueva. Otras promedian ambas notas. Consulta el reglamento académico de tu universidad antes de repetir una materia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Esta calculadora GPA es válida para bachillerato y universidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La calculadora funciona para bachillerato, preparatoria, universidad y posgrado. El sistema de cálculo GPA en escala 4.0 es el mismo en todos los niveles, aunque los puntos de grado adicionales para clases AP o IB solo aplican en bachillerato.",
        },
      },
    ],
  },
  // ── HowTo Schema — NUEVO ────────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo calcular tu GPA paso a paso",
    step: [
      {
        "@type": "HowToStep",
        name: "Agrega tus materias",
        text: "Ingresa cada clase o asignatura que quieres incluir en el cálculo del GPA.",
      },
      {
        "@type": "HowToStep",
        name: "Selecciona la calificación en letra",
        text: "Elige la calificación que obtuviste (A, B+, B, C, D, F) o la que esperas obtener.",
      },
      {
        "@type": "HowToStep",
        name: "Ingresa las horas crédito",
        text: "Agrega el valor en créditos de cada materia. Las materias de más créditos tienen mayor impacto en el GPA.",
      },
      {
        "@type": "HowToStep",
        name: "Lee tu GPA al instante",
        text: "La calculadora convierte las calificaciones a puntos de grado, calcula los puntos de calidad y divide entre el total de créditos para darte el GPA.",
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
        name: "Calculadora GPA",
        item: "https://calcunotas.com/calculadora-gpa/",
      },
    ],
  },
];

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata = {
  // MEJORADO: más específico, incluye "acumulado" y "ponderado"
  title: "Calculadora GPA Escala 4.0 | Semestral, Acumulado y Ponderado",

  // MEJORADO: más entidades, conversión a nota española/LATAM, CTA
  description:
    "Calcula tu GPA semestral, acumulado y ponderado en escala 4.0 al instante. Con conversión a nota española (0-10) y LATAM. Compatible con clases AP, IB y Honores. Gratis, sin registro.",

  keywords: [
    // ── PRIMARY ──────────────────────────────────────────────────────────
    "calculadora gpa",
    "calcular gpa",
    "calculadora gpa escala 4.0",
    "calculadora gpa semestral",
    "calculadora gpa acumulado",
    "gpa ponderado calculadora",
    // ── NUEVOS EASY-WIN ───────────────────────────────────────────────────
    "qué gpa es bueno para la universidad",
    "convertir gpa a nota española",
    "convertir gpa a nota colombiana",
    "convertir gpa a nota chilena",
    "gpa 3.5 equivalente nota española",
    "gpa 4.0 equivalente en españa",
    "cuánto gpa necesito para una beca",
    "gpa mínimo honor roll",
    "probation académica gpa mínimo",
    "calculadora gpa ap ib honores",
    "calcular gpa acumulado semestres anteriores",
    "gpa ponderado vs no ponderado diferencia",
    "cuánto gpa necesito para subir mi promedio",
    // ── SECONDARY ────────────────────────────────────────────────────────
    "calculadora gpa universidad",
    "promedio de calificaciones gpa",
    "calculadora de puntos de grado",
    "calcular promedio universitario gpa",
    "calculadora gpa horas credito",
    "calcular gpa bachillerato preparatoria",
    // ── SEMÁNTICO / LSI ───────────────────────────────────────────────────
    "puntos de calidad gpa",
    "horas credito calculo gpa",
    "escala gpa 4.0 letras",
    "gpa objetivo planificacion",
    "grade point average calculadora",
  ],

  alternates: {
    canonical: "https://calcunotas.com/calculadora-gpa/",
    languages: {
      es: "https://calcunotas.com/calculadora-gpa/",
      "es-ES": "https://calcunotas.com/calculadora-gpa/",
      "es-MX": "https://calcunotas.com/calculadora-gpa/",
      "es-AR": "https://calcunotas.com/calculadora-gpa/",
      "es-CO": "https://calcunotas.com/calculadora-gpa/",
      "es-CL": "https://calcunotas.com/calculadora-gpa/",
      "es-PE": "https://calcunotas.com/calculadora-gpa/",
      "es-VE": "https://calcunotas.com/calculadora-gpa/",
      "es-EC": "https://calcunotas.com/calculadora-gpa/",
      "es-BO": "https://calcunotas.com/calculadora-gpa/",
      "es-PY": "https://calcunotas.com/calculadora-gpa/",
      "es-UY": "https://calcunotas.com/calculadora-gpa/",
      "es-GT": "https://calcunotas.com/calculadora-gpa/",
      "es-CU": "https://calcunotas.com/calculadora-gpa/",
      "es-DO": "https://calcunotas.com/calculadora-gpa/",
      "es-HN": "https://calcunotas.com/calculadora-gpa/",
      "es-SV": "https://calcunotas.com/calculadora-gpa/",
      "es-NI": "https://calcunotas.com/calculadora-gpa/",
      "es-PA": "https://calcunotas.com/calculadora-gpa/",
      "es-CR": "https://calcunotas.com/calculadora-gpa/",
    },
  },

  // ── NUEVO: OpenGraph ─────────────────────────────────────────────────────
  openGraph: {
    title: "Calculadora GPA Escala 4.0 — Semestral, Acumulado y Ponderado",
    description:
      "Calcula tu GPA en segundos: semestral, acumulado y ponderado. Con conversión a nota española, colombiana y chilena. Compatible con AP, IB y Honores. Gratis.",
    url: "https://calcunotas.com/calculadora-gpa/",
    siteName: "CalcuNotas",
    locale: "es_ES",
    type: "website",
  },

  // ── NUEVO: Twitter Card ──────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Calculadora GPA | CalcuNotas",
    description:
      "Calcula tu GPA semestral, acumulado y ponderado en escala 4.0. Con conversión a nota española y LATAM. Gratis, sin registro.",
  },

  other: {
    "application/ld+json": JSON.stringify(schemaMarkup),
  },
};

// ─── DATOS ESTÁTICOS ──────────────────────────────────────────────────────────

// Escala GPA completa con más y menos
const ESCALA_GPA = [
  { letra: "A+", puntos: "4.3", porcentaje: "97–100 %", espana: "10,0", nivel: "Sobresaliente", color: "bg-emerald-50 text-emerald-800" },
  { letra: "A", puntos: "4.0", porcentaje: "93–96 %", espana: "9,3–9,6", nivel: "Sobresaliente", color: "bg-emerald-50 text-emerald-800" },
  { letra: "A-", puntos: "3.7", porcentaje: "90–92 %", espana: "9,0–9,2", nivel: "Sobresaliente", color: "bg-emerald-50 text-emerald-800" },
  { letra: "B+", puntos: "3.3", porcentaje: "87–89 %", espana: "8,7–8,9", nivel: "Notable", color: "bg-blue-50 text-blue-800" },
  { letra: "B", puntos: "3.0", porcentaje: "83–86 %", espana: "8,3–8,6", nivel: "Notable", color: "bg-blue-50 text-blue-800" },
  { letra: "B-", puntos: "2.7", porcentaje: "80–82 %", espana: "8,0–8,2", nivel: "Notable", color: "bg-blue-50 text-blue-800" },
  { letra: "C+", puntos: "2.3", porcentaje: "77–79 %", espana: "7,7–7,9", nivel: "Aprobado", color: "bg-yellow-50 text-yellow-800" },
  { letra: "C", puntos: "2.0", porcentaje: "73–76 %", espana: "7,3–7,6", nivel: "Aprobado", color: "bg-yellow-50 text-yellow-800" },
  { letra: "C-", puntos: "1.7", porcentaje: "70–72 %", espana: "7,0–7,2", nivel: "Aprobado", color: "bg-yellow-50 text-yellow-800" },
  { letra: "D+", puntos: "1.3", porcentaje: "67–69 %", espana: "6,7–6,9", nivel: "Suspenso", color: "bg-orange-50 text-orange-800" },
  { letra: "D", puntos: "1.0", porcentaje: "63–66 %", espana: "6,3–6,6", nivel: "Suspenso", color: "bg-orange-50 text-orange-800" },
  { letra: "D-", puntos: "0.7", porcentaje: "60–62 %", espana: "6,0–6,2", nivel: "Suspenso", color: "bg-orange-50 text-orange-800" },
  { letra: "F", puntos: "0.0", porcentaje: "< 60 %", espana: "< 6,0", nivel: "Reprobado", color: "bg-red-50 text-red-800" },
];

// NUEVO: Conversión GPA ↔ escalas LATAM
const CONVERSION_LATAM = [
  { gpa: "4.0", espana: "10,0", colombia: "5,0", chile: "7,0", mexico: "10,0", nivel: "Sobresaliente / Excelente" },
  { gpa: "3.7", espana: "9,3", colombia: "4,6", chile: "6,6", mexico: "9,3", nivel: "Sobresaliente" },
  { gpa: "3.5", espana: "8,75", colombia: "4,4", chile: "6,3", mexico: "8,8", nivel: "Notable alto" },
  { gpa: "3.0", espana: "7,5", colombia: "3,75", chile: "5,5", mexico: "7,5", nivel: "Notable / Bueno" },
  { gpa: "2.5", espana: "6,25", colombia: "3,1", chile: "4,75", mexico: "6,3", nivel: "Aprobado" },
  { gpa: "2.0", espana: "5,0", colombia: "2,5", chile: "4,0", mexico: "5,0", nivel: "Mínimo aprobado (varía)" },
  { gpa: "1.0", espana: "2,5", colombia: "1,25", chile: "2,5", mexico: "2,5", nivel: "Reprobado" },
  { gpa: "0.0", espana: "0,0", colombia: "0,0", chile: "1,0", mexico: "0,0", nivel: "Reprobado" },
];

// NUEVO: ¿Qué GPA es bueno?
const QUE_GPA_BUENO = [
  { rango: "3.9 – 4.0+", clasificacion: "Excelente", descripcion: "Top académico. Elegible para honor roll y becas competitivas.", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  { rango: "3.5 – 3.89", clasificacion: "Muy bueno", descripcion: "Por encima del promedio. Elegible para la mayoría de programas de becas.", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { rango: "3.0 – 3.49", clasificacion: "Bueno", descripcion: "Promedio sólido. Cumple los requisitos mínimos de la mayoría de becas.", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
  { rango: "2.0 – 2.99", clasificacion: "Aceptable", descripcion: "Aprobado, pero puede ser insuficiente para ciertas becas o programas.", color: "bg-orange-50 border-orange-200 text-orange-800" },
  { rango: "< 2.0", clasificacion: "En riesgo", descripcion: "Riesgo de probation académica. Requiere acción inmediata.", color: "bg-red-50 border-red-200 text-red-800" },
];

// NUEVO: GPA ponderado AP/IB
const GPA_PONDERADO = [
  { tipo: "Clase regular", extra: "+0.0", ejemplo: "A = 4.0, B = 3.0", color: "bg-gray-50" },
  { tipo: "Clase Honores (Honor)", extra: "+0.5", ejemplo: "A = 4.5, B = 3.5", color: "bg-blue-50" },
  { tipo: "AP / IB / Doble inscripción", extra: "+1.0", ejemplo: "A = 5.0, B = 4.0", color: "bg-purple-50" },
];

const FAQS = [
  {
    q: "¿Cómo se calcula el GPA?",
    a: "Convierte cada calificación a puntos de grado (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0), multiplica por las horas crédito de la materia, suma todos los puntos de calidad y divide entre el total de créditos. GPA = Total Puntos de Calidad ÷ Total Horas Crédito.",
  },
  {
    q: "¿Qué GPA es bueno para la universidad?",
    a: "Un GPA de 3.5 a 4.0 se considera excelente. De 3.0 a 3.49 es bueno. De 2.0 a 2.99 es aceptable. Por debajo de 2.0 puede implicar probation académica. Para becas competitivas generalmente se requiere 3.0 o más.",
  },
  {
    q: "¿Cuánto equivale un GPA de 3.5 en nota española?",
    a: "Un GPA 3.5 equivale aproximadamente a un 8,75 sobre 10 (Notable alto). Conversión: GPA ÷ 4.0 × 10. GPA 4.0 = 10 (Sobresaliente), GPA 3.0 = 7.5 (Notable), GPA 2.0 = 5.0 (Aprobado mínimo en España).",
  },
  {
    q: "¿Cuál es la diferencia entre GPA semestral y GPA acumulado?",
    a: "El GPA semestral mide solo un período (un semestre o cuatrimestre). El GPA acumulado combina todos los semestres completados y refleja tu rendimiento académico general a lo largo de toda la carrera.",
  },
  {
    q: "¿Cuál es la diferencia entre GPA ponderado y no ponderado?",
    a: "El GPA no ponderado usa la escala estándar 4.0 para todas las clases. El GPA ponderado asigna puntos adicionales a clases avanzadas: AP/IB/Doble inscripción suman +1.0, Honores suman +0.5. El GPA ponderado puede superar 4.0.",
  },
  {
    q: "¿Cuánto GPA necesito para mantener una beca?",
    a: "La mayoría de becas universitarias requieren GPA mínimo de 2.0 a 3.0. Las becas competitivas o de honor suelen exigir 3.5 o más. Consulta los requisitos específicos de tu beca o institución.",
  },
  {
    q: "¿Qué es la probation académica y qué GPA la desencadena?",
    a: "La probation académica es una advertencia cuando el GPA cae por debajo del mínimo institucional. La mayoría de universidades la aplican con GPA acumulado inferior a 2.0 (equivalente a promedio C).",
  },
  {
    q: "¿Cómo se calcula el GPA acumulado incluyendo semestres anteriores?",
    a: "Fórmula: Nuevo GPA Acumulado = (GPA Anterior × Créditos Anteriores + Puntos de Calidad Actuales) ÷ Total de Créditos. Ejemplo: GPA anterior 3.2 con 30 créditos + semestre actual 12 puntos / 4 créditos → (96 + 12) ÷ 34 = 3.18.",
  },
  {
    q: "¿Por qué afectan las horas crédito al GPA?",
    a: "Las horas crédito funcionan como peso. Una materia de 4 créditos con A aporta 16 puntos de calidad (4.0 × 4). Una de 1 crédito con A solo aporta 4 puntos. Por eso las materias de más créditos impactan más el GPA.",
  },
  {
    q: "¿Cuánto GPA necesito en cursos futuros para subir mi promedio?",
    a: "Fórmula: GPA requerido = (GPA objetivo × Total créditos futuros − GPA actual × Créditos actuales) ÷ Créditos futuros. Esta calculadora incluye una sección de planificación que lo calcula automáticamente.",
  },
  {
    q: "¿Cómo se convierte el GPA a nota colombiana (0-5)?",
    a: "Conversión aproximada: Nota colombiana = GPA ÷ 4.0 × 5. Ejemplos: GPA 4.0 = 5.0 (Sobresaliente), GPA 3.6 = 4.5, GPA 2.4 = 3.0 (Aprobado mínimo Colombia), GPA 0.0 = 0.0.",
  },
  {
    q: "¿Cómo se convierte el GPA a nota chilena (1-7)?",
    a: "Conversión aproximada: Nota chilena = GPA ÷ 4.0 × 6 + 1. Ejemplos: GPA 4.0 = 7.0 (máximo Chile), GPA 3.0 = 5.5 (Bueno), GPA 1.2 = 4.0 (Aprobado mínimo Chile).",
  },
  {
    q: "¿Las materias de aprobado/reprobado (Pass/Fail) afectan el GPA?",
    a: "Generalmente no. Las materias P/NP suelen excluirse del cálculo GPA. Sin embargo, si se reprueba en algunas instituciones sí puede afectarlo. Siempre consulta la política de tu institución.",
  },
  {
    q: "¿Qué pasa con el GPA si repito una materia?",
    a: "Depende de la institución. Algunas aplican 'grade forgiveness' y reemplazan la nota original. Otras promedian ambas notas. Consulta el reglamento académico de tu universidad antes de repetir una materia.",
  },
  // ── GAP 6: SPECIAL-CASE FAQS ────────────────────────────────────────────
{
  q: "¿Cómo califico un examen si cada pregunta vale una cantidad diferente de puntos?",
  a: "No debes contar solamente las respuestas correctas. Suma los puntos obtenidos por el estudiante, compáralos con el total de puntos posibles y calcula: (Puntos obtenidos ÷ Puntos posibles) × 100.",
},
{
  q: "¿Cómo se calcula una nota cuando las respuestas incorrectas restan puntos?",
  a: "Primero aplica la penalización indicada por el examen. Por ejemplo, si cada error resta 0,25 puntos, multiplica los errores por 0,25 y resta ese resultado de los puntos obtenidos antes de convertir la puntuación a porcentaje.",
},
  {
    q: "¿Esta calculadora GPA es válida para bachillerato y universidad?",
    a: "Sí. Funciona para bachillerato, preparatoria, universidad y posgrado. El cálculo GPA en escala 4.0 es el mismo en todos los niveles. Los puntos adicionales para AP/IB solo aplican en bachillerato.",
  },
];

// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
export default function CalculadoraGPAPage() {
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
          <div className="grid lg:grid-cols-[1fr_280px] gap-6 items-center">
            <div>
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
                    <span itemProp="name" aria-current="page">Calculadora GPA</span>
                    <meta itemProp="position" content="2" />
                  </li>
                </ol>
              </nav>

              <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
                Calculadora GPA
              </h1>

              {/* AI Overview target */}
              <p
                data-ai-answer="true"
                className="max-w-[820px] text-[17px] leading-8 text-[#667085] mb-2"
              >
                Calcula tu <strong>GPA semestral</strong>,{" "}
                <strong>GPA acumulado</strong> y{" "}
                <strong>GPA ponderado</strong> en escala 4.0 al instante.
                Ingresa tus materias, calificaciones y horas crédito para
                obtener tu Grade Point Average. Incluye{" "}
                <strong>conversión a nota española (0-10)</strong>, colombiana
                (0-5) y chilena (1-7).
              </p>
              <p className="max-w-[820px] text-[15px] leading-7 text-[#8a94a6] mb-5">
                Compatible con clases regulares,{" "}
                <strong>AP, IB y Honores</strong>. Válida para bachillerato,
                preparatoria, universidad y posgrado. Gratuita y sin registro.
              </p>

              <div className="flex flex-wrap gap-3" role="list" aria-label="Características de la calculadora GPA">
                {[
                  "GPA Semestral",
                  "GPA Acumulado",
                  "GPA Ponderado AP/IB",
                  "Escala 4.0 completa",
                  "Conversión a nota 0-10",
                  "Planificación GPA futuro",
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

            {/* GPA visual badge */}
            <div className="hidden lg:block">
              <div className="bg-white border border-gray-200 rounded-[18px] p-6 shadow-sm text-center">
                <div className="w-[90px] h-[90px] mx-auto mb-4 rounded-[24px] bg-[#eff6ff] text-[#2563eb] grid place-items-center text-[36px] font-black" aria-hidden="true">
                  4.0
                </div>
                <strong className="block text-[18px] mb-1">Escala GPA</strong>
                <span className="text-[#667085] text-[14px]">
                  Calcula tu GPA al instante en escala 4.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULADORA + SIDEBAR ─────────────────────────────────────────── */}
      <section className="pb-8 pt-8" aria-label="Calculadora GPA semestral y acumulado">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start px-8">
          <GPACalculatorLab />
          <div className="space-y-6">
            <RightSidebar />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* ── CONTENIDO SEO / AEO ───────────────────────────────────────────── */}
      <section className="pb-14" aria-label="Guía completa calculadora GPA">
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
                  Respuesta directa: ¿qué es el GPA y cómo se calcula?
                </h2>
                <p className="text-gray-700 leading-8">
                  El <strong>GPA (Grade Point Average)</strong> es el promedio
                  ponderado de calificaciones de un estudiante en escala 4.0.
                  Se calcula con la fórmula:{" "}
                  <strong>GPA = Total de Puntos de Calidad ÷ Total de Horas Crédito</strong>,
                  donde los Puntos de Calidad = Puntos de Grado × Horas Crédito
                  de cada materia. Una A vale 4.0, B vale 3.0, C vale 2.0, D
                  vale 1.0 y F vale 0.0. Esta calculadora lo hace automáticamente
                  para cualquier combinación de materias y créditos.
                </p>
              </div>

              {/* ── CÓMO USAR ─────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="como-usar-heading">
                <h2 id="como-usar-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Cómo Usar la Calculadora GPA
                </h2>
                <p className="text-gray-700 leading-8 mb-6">
                  Ingresa el nombre de cada materia, elige la calificación en
                  letra y agrega las horas crédito. La calculadora convierte
                  cada calificación en puntos de grado, multiplica por los
                  créditos y divide el total entre todas las horas crédito.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { n: "1", titulo: "Agrega tus Materias", texto: "Ingresa cada clase o asignatura que quieres incluir en el cálculo del GPA semestral o acumulado." },
                    { n: "2", titulo: "Selecciona la Calificación en Letra", texto: "Elige la calificación que obtuviste o esperas obtener (A, B+, B, C, D, F)." },
                    { n: "3", titulo: "Ingresa las Horas Crédito", texto: "Agrega el valor en créditos de cada materia. Las de más créditos tienen mayor impacto en el GPA." },
                    { n: "4", titulo: "Lee tu GPA al Instante", texto: "La calculadora muestra tu GPA usando los puntos de calidad y horas crédito ingresadas." },
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
              </section>

              {/* ── QUÉ ES EL GPA ────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="que-es-heading">
                <h2 id="que-es-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  ¿Qué es el GPA?
                </h2>
                <div className="space-y-4 text-gray-700 leading-8">
                  <p>
                    GPA significa <strong>Grade Point Average</strong> o
                    Promedio de Puntos de Grado. Es el número que resume el
                    rendimiento académico de un estudiante en múltiples materias.
                    En lugar de mostrar cada calificación por separado, el GPA
                    combina calificaciones y horas crédito en un solo promedio
                    ponderado.
                  </p>
                  <p>
                    La mayoría de escuelas, preparatorias y universidades usan
                    el GPA para determinar estatus académico, requisitos de
                    graduación, becas, admisiones, programas de honor y
                    evaluaciones de transferencia. Un GPA más alto generalmente
                    refleja mejor rendimiento académico.
                  </p>
                  <p>
                    El sistema más extendido usa una{" "}
                    <strong>escala GPA de 4.0</strong>, donde A = 4.0, B = 3.0,
                    C = 2.0, D = 1.0 y F = 0.0. Algunas escuelas también usan
                    calificaciones con más/menos (A+, A-, B+...) y GPA
                    ponderado para clases avanzadas.
                  </p>
                </div>
              </section>

              {/* ── FÓRMULA ───────────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="formula-heading">
                <h2 id="formula-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Fórmula del GPA
                </h2>
                <p className="text-gray-700 leading-8 mb-4">
                  El GPA se calcula en dos pasos:
                </p>
                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-4">
                  Puntos de Calidad = Puntos de Grado × Horas Crédito
                </div>
                <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px] mb-6">
                  GPA = Total de Puntos de Calidad ÷ Total de Horas Crédito
                </div>

                {/* Example table */}
                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full min-w-[640px] border-collapse text-[14px]">
                    <caption className="sr-only">Ejemplo de cálculo de GPA con cuatro materias</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Materia</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Calificación</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Puntos de Grado</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Créditos</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Puntos de Calidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Matemáticas", "A", "4.0", "3", "12.0"],
                        ["Ciencias", "B", "3.0", "4", "12.0"],
                        ["Español", "A-", "3.7", "3", "11.1"],
                        ["Historia", "B+", "3.3", "2", "6.6"],
                      ].map(([m, c, p, cr, pc], i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 text-gray-700">{m}</td>
                          <td className="px-4 py-3 font-semibold text-gray-800">{c}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{p}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{cr}</td>
                          <td className="px-4 py-3 text-center font-bold text-blue-700">{pc}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-gray-300 bg-gray-50">
                        <td colSpan={3} className="px-4 py-3 font-bold text-gray-800">Total</td>
                        <td className="px-4 py-3 text-center font-bold">12</td>
                        <td className="px-4 py-3 text-center font-bold text-blue-700">41.7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-[14px] text-gray-700">
                  GPA = 41.7 ÷ 12 = <strong>3.48</strong> (equivale a un
                  <strong> 8,7 sobre 10</strong> en España — Notable alto)
                </div>
              </section>

              {/* ── ESCALA GPA COMPLETA ───────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="escala-heading">
                <h2 id="escala-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Escala GPA 4.0 completa con equivalencia española
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Tabla completa de puntos de grado para la escala estándar
                  con más y menos, con equivalencia a nota sobre 10 (España).
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[560px] border-collapse text-[14px]">
                    <caption className="sr-only">Escala GPA 4.0 con equivalencias en nota española</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Letra</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Puntos GPA</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Porcentaje</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Nota /10 España</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Nivel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ESCALA_GPA.map((row, i) => (
                        <tr key={i} className={`border-t border-gray-100 ${row.color}`}>
                          <td className="px-4 py-3 text-center font-bold text-[16px]">{row.letra}</td>
                          <td className="px-4 py-3 text-center font-semibold">{row.puntos}</td>
                          <td className="px-4 py-3 text-center">{row.porcentaje}</td>
                          <td className="px-4 py-3 text-center font-semibold">{row.espana}</td>
                          <td className="px-4 py-3">{row.nivel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── ¿QUÉ GPA ES BUENO? — NUEVO (Featured Snippet target) ── */}
              <section className="mb-12" aria-labelledby="gpa-bueno-heading">
                <h2 id="gpa-bueno-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  ¿Qué GPA es bueno? Rangos y lo que significan
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  El significado de cada rango de GPA según el contexto
                  académico: becas, honor roll, probation y admisiones.
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {QUE_GPA_BUENO.map((g) => (
                    <div key={g.rango} className={`rounded-2xl border p-5 ${g.color}`}>
                      <div className="font-bold text-[20px] mb-1">{g.rango}</div>
                      <div className="font-semibold text-[14px] mb-2">{g.clasificacion}</div>
                      <p className="text-[13px] leading-5">{g.descripcion}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CONVERSIÓN GPA ↔ LATAM — NUEVO (easy-win keyword) ────── */}
              <section className="mb-12" aria-labelledby="conversion-heading">
                <h2 id="conversion-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-2">
                  Conversión GPA a nota española, colombiana y chilena
                </h2>
                <p className="text-gray-600 text-[15px] leading-7 mb-5">
                  Tabla de equivalencias aproximadas entre GPA (escala 4.0) y
                  los sistemas de calificación más usados en el mundo
                  hispanohablante.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[620px] border-collapse text-[14px]">
                    <caption className="sr-only">Conversión de GPA a nota española, colombiana, chilena y mexicana</caption>
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th scope="col" className="px-4 py-3 text-center font-semibold">GPA</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">🇪🇸 España (0-10)</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">🇨🇴 Colombia (0-5)</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">🇨🇱 Chile (1-7)</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">🇲🇽 México (0-10)</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Nivel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONVERSION_LATAM.map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 text-center font-bold text-blue-700 text-[15px]">{row.gpa}</td>
                          <td className="px-4 py-3 text-center font-semibold text-gray-800">{row.espana}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{row.colombia}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{row.chile}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{row.mexico}</td>
                          <td className="px-4 py-3 text-gray-500 text-[12px]">{row.nivel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-gray-500 mt-2">
                  * Conversiones aproximadas. Las equivalencias oficiales pueden
                  variar según la institución.
                </p>
              </section>
{/* ── GAP 1: LIMITACIONES Y CASOS ESPECIALES ─────────────────────────── */}
<section className="mb-12" aria-labelledby="limitaciones-heading">
  <h2
    id="limitaciones-heading"
    className="text-[28px] font-bold tracking-[-0.02em] mb-5"
  >
    ¿Cuándo no debes usar la tabla de calificación estándar?
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">
    <p>
      El calificador rápido funciona mejor cuando todas las preguntas tienen
      el mismo valor y cada respuesta correcta suma el mismo número de puntos.
      Si el examen utiliza reglas especiales, el porcentaje debe calcularse
      primero con esas reglas antes de consultar una escala de notas.
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      {[
        {
          titulo: "Preguntas con diferente valor",
          texto:
            "Si una pregunta vale 5 puntos y otra vale 1 punto, contar ambas como una sola pregunta puede producir un porcentaje incorrecto. En este caso debes trabajar con puntos obtenidos y puntos posibles.",
        },
        {
          titulo: "Penalización por respuestas incorrectas",
          texto:
            "Si una respuesta incorrecta resta puntos, no basta con restar los fallos del total. Primero aplica la penalización establecida por el examen.",
        },
        {
          titulo: "Crédito parcial",
          texto:
            "Una respuesta puede recibir parte de los puntos aunque no sea completamente correcta. El resultado debe basarse en los puntos obtenidos, no simplemente en el número de preguntas acertadas.",
        },
        {
          titulo: "Bonificaciones o puntos extra",
          texto:
            "Los puntos adicionales deben aplicarse según las reglas de la evaluación. No asumas que todos los exámenes permiten superar el 100 %.",
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

    <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
      <p className="text-gray-700 text-[14px] leading-7">
        <strong>Regla práctica:</strong> si todas las preguntas valen lo mismo,
        puedes trabajar con el número de correctas e incorrectas. Si los
        puntos tienen valores diferentes, calcula primero los puntos obtenidos
        frente a los puntos posibles.
      </p>
    </div>
  </div>
</section>{/* ── GAP 2: CRÉDITO PARCIAL Y PREGUNTAS CON DIFERENTE VALOR ─────────── */}
<section className="mb-12" aria-labelledby="puntos-heading">
  <h2
    id="puntos-heading"
    className="text-[28px] font-bold tracking-[-0.02em] mb-5"
  >
    Cuando las preguntas tienen diferentes valores
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">
    <p>
      No todos los exámenes pueden calificarse contando únicamente respuestas
      correctas. En una evaluación con problemas de desarrollo, ejercicios
      matemáticos o preguntas con crédito parcial, cada actividad puede aportar
      una cantidad diferente de puntos.
    </p>

    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
      <h3 className="font-semibold text-gray-800 mb-3">
        Ejemplo con 10 puntos posibles
      </h3>

      <div className="space-y-2 text-[14px] font-mono text-gray-700">
        <p>Pregunta 1: 2 puntos → obtiene 2</p>
        <p>Pregunta 2: 3 puntos → obtiene 2</p>
        <p>Pregunta 3: 5 puntos → obtiene 4</p>
        <p>Total obtenido = <strong>8 puntos</strong></p>
        <p>Total posible = <strong>10 puntos</strong></p>
      </div>
    </div>

    <div className="bg-blue-600 text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px]">
      Porcentaje = (8 ÷ 10) × 100 = <strong>80 %</strong>
    </div>

    <p>
      En este caso, decir simplemente que el estudiante obtuvo 2 de 3
      preguntas correctas no representaría correctamente su rendimiento,
      porque cada pregunta tiene un peso diferente. Para evaluaciones de este
      tipo, utiliza el sistema de puntos definido por el profesor o la
      institución.
    </p>
  </div>
</section>{/* ── GAP 3: EJEMPLO DE PENALIZACIÓN POR RESPUESTAS INCORRECTAS ───────── */}
<section className="mb-12" aria-labelledby="penalizacion-heading">
  <h2
    id="penalizacion-heading"
    className="text-[28px] font-bold tracking-[-0.02em] mb-5"
  >
    Ejemplo de un examen con penalización por errores
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">
    <p>
      Algunos exámenes tipo test restan puntos por cada respuesta incorrecta.
      En ese caso, la fórmula básica de correctas sobre preguntas totales no
      representa el resultado real porque los errores tienen un efecto
      adicional sobre la puntuación.
    </p>

    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="font-semibold text-gray-800 mb-3">
        Ejemplo
      </h3>

      <div className="space-y-2 text-[14px] font-mono text-gray-700">
        <p>Total: 20 preguntas</p>
        <p>Correctas: 15</p>
        <p>Incorrectas: 5</p>
        <p>Penalización: −0,25 puntos por cada incorrecta</p>
        <p>Puntos por correctas: 15</p>
        <p>Puntos descontados: 5 × 0,25 = 1,25</p>
        <p>
          Puntuación final = 15 − 1,25 = <strong>13,75 puntos</strong>
        </p>
      </div>
    </div>

    <p>
      El porcentaje final dependerá de cómo el examen defina sus puntos
      máximos. Por eso, cuando existe penalización, debes seguir primero la
      fórmula oficial de esa evaluación y después convertir el resultado a la
      escala de notas correspondiente.
    </p>

    <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
      <p className="text-gray-700 text-[14px] leading-7">
        <strong>Importante:</strong> la tabla estándar de este calificador
        supone que una respuesta incorrecta simplemente no suma puntos. No
        debe utilizarse como sustituto de una fórmula específica de penalización.
      </p>
    </div>
  </div>
</section>{/* ── GAP 4: VERIFICACIÓN MANUAL DEL RESULTADO ───────────────────────── */}
<section className="mb-12" aria-labelledby="verificar-heading">
  <h2
    id="verificar-heading"
    className="text-[28px] font-bold tracking-[-0.02em] mb-5"
  >
    Cómo comprobar que una calificación es correcta
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">
    <p>
      Aunque la tabla ahorra tiempo, un profesor puede verificar cualquier
      resultado con una operación sencilla. Esto es especialmente útil cuando
      se están registrando muchas notas o cuando una calificación parece
      diferente de lo esperado.
    </p>

    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          titulo: "1. Cuenta las correctas",
          texto: "Comprueba cuántas respuestas obtuvo correctamente el estudiante.",
        },
        {
          titulo: "2. Divide entre el total",
          texto: "Divide las respuestas correctas entre el número total de preguntas.",
        },
        {
          titulo: "3. Multiplica por 100",
          texto: "El resultado de la división se multiplica por 100 para obtener el porcentaje.",
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

    <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[15px]">
      18 correctas ÷ 25 preguntas × 100 = <strong>72 %</strong>
    </div>

    <p>
      Si el resultado manual coincide con la fila correspondiente de la tabla,
      el porcentaje está correctamente calculado. Después solo necesitas
      aplicar la escala de notas utilizada por tu centro educativo.
    </p>
  </div>
</section>{/* ── GAP 5: FLUJO REAL DE CALIFICACIÓN EN CLASE ─────────────────────── */}
<section className="mb-12" aria-labelledby="flujo-heading">
  <h2
    id="flujo-heading"
    className="text-[28px] font-bold tracking-[-0.02em] mb-5"
  >
    Flujo rápido para corregir una pila de exámenes
  </h2>

  <div className="space-y-5">
    <p className="text-gray-700 leading-8">
      Cuando todos los estudiantes realizan el mismo examen, el profesor puede
      utilizar una única tabla como referencia para toda la clase. El proceso
      consiste en contar los fallos, localizar la fila correspondiente y
      registrar el resultado.
    </p>

    <div className="grid gap-4 md:grid-cols-4">
      {[
        ["1", "Cuenta", "Cuenta las respuestas incorrectas del examen."],
        ["2", "Busca", "Localiza ese número de fallos en la tabla."],
        ["3", "Comprueba", "Revisa correctas, porcentaje y nota."],
        ["4", "Registra", "Anota la calificación siguiendo la misma escala."],
      ].map(([num, titulo, texto]) => (
        <div
          key={num}
          className="rounded-2xl border border-gray-200 p-5 bg-white"
        >
          <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-3">
            {num}
          </div>

          <h3 className="font-semibold text-gray-800 mb-2">
            {titulo}
          </h3>

          <p className="text-gray-600 text-[13px] leading-6">
            {texto}
          </p>
        </div>
      ))}
    </div>

    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <p className="text-gray-700 text-[14px] leading-7">
        <strong>Consejo:</strong> utiliza la misma tabla y la misma política
        de redondeo para todos los estudiantes del mismo examen. Esto reduce
        errores y mantiene la calificación consistente.
      </p>
    </div>
  </div>
</section>
              {/* ── GPA SEMESTRAL VS ACUMULADO ────────────────────────────── */}
              <section className="mb-12" aria-labelledby="sem-vs-cum-heading">
                <h2 id="sem-vs-cum-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  GPA Semestral vs GPA Acumulado
                </h2>
                <div className="grid gap-5 md:grid-cols-2 mb-6">
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-[18px] font-semibold text-gray-800 mb-3">GPA Semestral</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Mide únicamente un período. Incluye las materias,
                      calificaciones y horas crédito de un solo semestre o
                      cuatrimestre. Es útil para ver el rendimiento reciente.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-[18px] font-semibold text-gray-800 mb-3">GPA Acumulado</h3>
                    <p className="text-gray-700 leading-7 text-[15px]">
                      Combina todos los períodos completados. Refleja el
                      rendimiento académico general a lo largo de toda la
                      carrera. Es el GPA que aparece en las transcripciones
                      oficiales.
                    </p>
                  </div>
                </div>
                <h3 className="text-[20px] font-semibold text-gray-800 mb-3">
                  Fórmula del GPA Acumulado
                </h3>
                <div className="bg-[#111827] text-white rounded-2xl px-6 py-5 font-mono text-center text-[14px] mb-4">
                  Nuevo GPA Acumulado = (GPA Anterior × Créditos Anteriores + Puntos de Calidad Actuales) ÷ Total de Créditos
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-[14px] text-gray-700">
                  <strong>Ejemplo:</strong> GPA anterior 3.2 con 30 créditos +
                  semestre actual (12 pts calidad / 4 créditos) →{" "}
                  <strong>(3.2 × 30 + 12) ÷ 34 = 3.18 GPA acumulado</strong>
                </div>
              </section>

              {/* ── GPA PONDERADO — NUEVO (competitor gap) ───────────────── */}
              <section className="mb-12" aria-labelledby="ponderado-heading">
                <h2 id="ponderado-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  GPA Ponderado vs No Ponderado: AP, IB y Honores
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  El GPA ponderado asigna puntos adicionales a las clases más
                  difíciles para reconocer el esfuerzo extra del estudiante.
                  Puede superar el límite de 4.0.
                </p>
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  {GPA_PONDERADO.map((g) => (
                    <div key={g.tipo} className={`rounded-2xl border border-gray-200 p-5 ${g.color}`}>
                      <h3 className="font-semibold text-gray-800 mb-2">{g.tipo}</h3>
                      <div className="text-[22px] font-bold text-blue-700 mb-1">{g.extra}</div>
                      <p className="text-gray-600 text-[13px] leading-5">{g.ejemplo}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-amber-100 bg-amber-50 p-4 text-[14px] text-gray-700">
                  <strong>Importante:</strong> Las reglas del GPA ponderado
                  varían por institución. Consulta la política oficial de tu
                  escuela antes de usar el GPA ponderado para admisiones o becas.
                </div>
              </section>


              {/* ── GPA PARA BECAS ───────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="becas-heading">
                <h2
                  id="becas-heading"
                  className="text-[28px] font-bold tracking-[-0.02em] mb-5"
                >
                  GPA para Becas Universitarias
                </h2>

                <div className="space-y-4 text-gray-700 leading-8">
                  <p>
                    El GPA es uno de los factores más importantes para obtener becas
                    académicas. Muchas universidades utilizan el promedio acumulado para
                    determinar si un estudiante cumple los requisitos mínimos para recibir
                    ayuda financiera o incentivos por mérito académico.
                  </p>

                  <p>
                    Cuanto más alto sea el GPA, mayores serán las posibilidades de acceder
                    a becas competitivas. Aunque algunas ayudas aceptan estudiantes con GPA
                    moderado, los programas más selectivos suelen exigir resultados
                    académicos sobresalientes.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 mt-6">
                  <table className="w-full min-w-[520px] border-collapse text-[14px]">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-4 py-3 text-left">Tipo de Beca</th>
                        <th className="px-4 py-3 text-center">GPA Recomendado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3">Beca universitaria básica</td>
                        <td className="px-4 py-3 text-center">2.0+</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3">Beca académica</td>
                        <td className="px-4 py-3 text-center">3.0+</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3">Beca de mérito</td>
                        <td className="px-4 py-3 text-center">3.5+</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3">Beca competitiva</td>
                        <td className="px-4 py-3 text-center">3.8+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── GPA PARA ADMISIONES ─────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="admisiones-heading">
                <h2
                  id="admisiones-heading"
                  className="text-[28px] font-bold tracking-[-0.02em] mb-5"
                >
                  GPA para Admisiones Universitarias
                </h2>

                <div className="space-y-4 text-gray-700 leading-8">
                  <p>
                    Las universidades utilizan el GPA para evaluar el rendimiento
                    académico de los estudiantes durante varios años. Un GPA elevado suele
                    reflejar consistencia, disciplina y capacidad para mantener buenos
                    resultados en diferentes materias.
                  </p>

                  <p>
                    Aunque el GPA no es el único criterio de admisión, suele tener un peso
                    importante junto con exámenes, actividades extracurriculares y cartas
                    de recomendación.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  {[
                    {
                      rango: "3.8 – 4.0",
                      titulo: "Muy competitivo",
                      texto: "Excelente perfil para universidades selectivas.",
                    },
                    {
                      rango: "3.5 – 3.79",
                      titulo: "Competitivo",
                      texto: "Cumple los requisitos de muchas universidades.",
                    },
                    {
                      rango: "3.0 – 3.49",
                      titulo: "Aceptable",
                      texto: "Adecuado para numerosos programas académicos.",
                    },
                    {
                      rango: "< 3.0",
                      titulo: "Limitado",
                      texto: "Puede requerir requisitos adicionales.",
                    },
                  ].map((item) => (
                    <div
                      key={item.rango}
                      className="rounded-2xl border border-gray-200 p-5 bg-white"
                    >
                      <div className="text-[22px] font-bold text-blue-700 mb-2">
                        {item.rango}
                      </div>
                      <h3 className="font-semibold mb-2">{item.titulo}</h3>
                      <p className="text-[14px] text-gray-600">{item.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── GPA Y HONOR ROLL ───────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="honor-roll-heading">
                <h2
                  id="honor-roll-heading"
                  className="text-[28px] font-bold tracking-[-0.02em] mb-5"
                >
                  GPA y Honor Roll
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Muchas instituciones reconocen a los estudiantes con mejor rendimiento
                  académico mediante listas de honor conocidas como Honor Roll o Dean's
                  List. Estas distinciones suelen basarse directamente en el GPA.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Honor Roll",
                      gpa: "3.0+",
                    },
                    {
                      title: "High Honor Roll",
                      gpa: "3.5+",
                    },
                    {
                      title: "Dean's List",
                      gpa: "3.7+",
                    },
                    {
                      title: "Highest Honors",
                      gpa: "3.9+",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200 p-5 bg-white"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <div className="text-[24px] font-bold text-blue-700">
                        {item.gpa}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── GPA PARA POSGRADO ─────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="posgrado-heading">
                <h2
                  id="posgrado-heading"
                  className="text-[28px] font-bold tracking-[-0.02em] mb-5"
                >
                  GPA para Programas de Posgrado
                </h2>

                <div className="space-y-4 text-gray-700 leading-8">
                  <p>
                    Las maestrías, especializaciones y programas de doctorado suelen
                    considerar el GPA acumulado obtenido durante la licenciatura.
                  </p>

                  <p>
                    En muchos casos, un GPA de 3.0 representa el requisito mínimo de
                    admisión, mientras que los programas más competitivos suelen buscar
                    candidatos con GPA de 3.5 o superior.
                  </p>

                  <p>
                    Además del GPA, las universidades también valoran experiencia
                    profesional, investigación, publicaciones y cartas de recomendación.
                  </p>
                </div>
              </section>

              {/* ── DIFERENCIA ENTRE GPA Y PROMEDIO ───────────────────────── */}
              <section className="mb-12" aria-labelledby="promedio-heading">
                <h2
                  id="promedio-heading"
                  className="text-[28px] font-bold tracking-[-0.02em] mb-5"
                >
                  Diferencia Entre GPA y Promedio Tradicional
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  Aunque ambos sistemas miden el rendimiento académico, el GPA y el
                  promedio tradicional utilizan escalas diferentes.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[520px] border-collapse text-[14px]">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-4 py-3 text-left">GPA</th>
                        <th className="px-4 py-3 text-left">Promedio Tradicional</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3">Escala 4.0</td>
                        <td className="px-4 py-3">Escala 0-10 o 0-100</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3">Usa puntos de grado</td>
                        <td className="px-4 py-3">Usa notas numéricas</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3">Común en EE.UU.</td>
                        <td className="px-4 py-3">Común en España y LATAM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── HORAS CRÉDITO ─────────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="creditos-heading">
                <h2 id="creditos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Por Qué Son Importantes las Horas Crédito
                </h2>
                <p className="text-gray-700 leading-8 mb-5">
                  Las horas crédito funcionan como peso en el cálculo del GPA.
                  Una materia de 4 créditos afecta más el GPA que una de 1
                  crédito porque aporta más puntos de calidad.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[520px] border-collapse text-[14px]">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700">
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Tipo de Materia</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Créditos</th>
                        <th scope="col" className="px-4 py-3 text-center font-semibold">Puntos de Calidad (A)</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold">Impacto en GPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Laboratorio / práctica", "1", "4.0", "Mínimo"],
                        ["Materia estándar", "3", "12.0", "Normal"],
                        ["Materia mayor / intensiva", "4", "16.0", "Alto"],
                        ["Materia de posgrado", "5+", "20.0+", "Muy alto"],
                      ].map(([tipo, cr, pts, imp], i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-4 py-3 text-gray-700">{tipo}</td>
                          <td className="px-4 py-3 text-center font-semibold text-gray-800">{cr}</td>
                          <td className="px-4 py-3 text-center text-blue-700 font-semibold">{pts}</td>
                          <td className="px-4 py-3 text-gray-500">{imp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── ERRORES COMUNES ───────────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="errores-heading">
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <h2 id="errores-heading" className="text-[26px] font-bold tracking-[-0.02em] mb-5 text-amber-900">
                    Errores comunes al calcular el GPA
                  </h2>
                  <ul className="space-y-3 text-gray-700 leading-8">
                    {[
                      "Ingresar las horas crédito incorrectas: una materia de 3 créditos ingresada como 4 distorsiona todo el GPA.",
                      "Usar una escala GPA que no coincide con la política de tu escuela (algunas no usan A+).",
                      "Confundir el GPA semestral con el GPA acumulado al comparar con requisitos de becas.",
                      "Incluir materias de aprobado/reprobado (P/NP) o retiros cuando no cuentan para el GPA.",
                      "Tratar todas las materias igual cuando los créditos son diferentes.",
                      "Olvidar las reglas de grade forgiveness en materias repetidas, que pueden cambiar el GPA acumulado.",
                    ].map((error, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-amber-600 font-bold flex-shrink-0">⚠</span>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* ── CONSEJOS MEJORAR GPA ──────────────────────────────────── */}
              <section className="mb-12" aria-labelledby="consejos-heading">
                <h2 id="consejos-heading" className="text-[28px] font-bold tracking-[-0.02em] mb-5">
                  Consejos para Mejorar tu GPA
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { titulo: "Enfócate en materias de alto crédito", texto: "Una A en una materia de 4 créditos sube más el GPA que la misma A en una de 1 crédito. Prioriza las materias de mayor peso." },
                    { titulo: "Revisa tu GPA al inicio del semestre", texto: "Calcular tu GPA al principio del semestre te ayuda a saber cuánto margen tienes y qué calificaciones necesitas para tu meta." },
                    { titulo: "Atiende las calificaciones bajas rápido", texto: "Si una materia está bajando tu GPA, busca ayuda o tutoría antes de que se publiquen las calificaciones finales." },
                    { titulo: "Planifica con la calculadora de GPA objetivo", texto: "Usa la sección de planificación para saber qué GPA necesitas en los próximos semestres para alcanzar tu meta acumulada." },
                  ].map((c) => (
                    <div key={c.titulo} className="rounded-2xl border border-gray-200 p-5 bg-white">
                      <h3 className="font-semibold text-gray-800 mb-2">{c.titulo}</h3>
                      <p className="text-gray-600 text-[14px] leading-6">{c.texto}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ — 15 preguntas ────────────────────────────────────── */}
              <section aria-labelledby="faq-heading">
                <div className="bg-gray-50 py-12 px-6 rounded-2xl border border-gray-200">
                  <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
                    <div>
                      <h2 id="faq-heading" className="text-[28px] font-bold text-gray-900 mb-4">
                        Preguntas frecuentes sobre el GPA
                      </h2>
                      <p className="text-gray-600 text-[15px] leading-7">
                        Dudas habituales sobre fórmulas del GPA, conversión a
                        nota española y LATAM, GPA ponderado, semestral vs
                        acumulado, becas y probation académica.
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
                          itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                        >
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