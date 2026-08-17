import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Preguntas Frecuentes | CalcuNotas",
  description:
    "Encuentra respuestas a preguntas comunes sobre CalcuNotas, calculadoras de notas, calculadoras GPA, calculadoras de nota final, calculadoras de nota semestral, calculadoras de examen y herramientas de calificación rápida.",
  keywords: [
    "preguntas frecuentes calculadora de notas",
    "faq calculadora gpa",
    "faq calculadora nota final",
    "faq calculadora nota semestral",
    "faq calculadora de examen",
    "faq calificador rapido",
    "preguntas calculo de notas",
    "preguntas calculo gpa",
    "preguntas frecuentes calcunotas",
    "ayuda calculadora academica",
  ],

  // GAP FIX: robots + openGraph tags add kiye (pehle missing thay)
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Preguntas Frecuentes | CalcuNotas",
    description:
      "Respuestas a preguntas comunes sobre las calculadoras de notas, GPA, nota final y calificación rápida de CalcuNotas.",
    url: "https://calcunotas.com/faq/",
    type: "website",
  },

  alternates: {
    canonical: "https://calcunotas.com/faq/",
    languages: {
      "es": "https://calcunotas.com/faq/",
      "es-ES": "https://calcunotas.com/faq/",
      "es-MX": "https://calcunotas.com/faq/",
      "es-AR": "https://calcunotas.com/faq/",
      "es-CO": "https://calcunotas.com/faq/",
      "es-CL": "https://calcunotas.com/faq/",
      "es-PE": "https://calcunotas.com/faq/",
      "es-VE": "https://calcunotas.com/faq/",
      "es-EC": "https://calcunotas.com/faq/",
      "es-BO": "https://calcunotas.com/faq/",
      "es-PY": "https://calcunotas.com/faq/",
      "es-UY": "https://calcunotas.com/faq/",
      "es-GT": "https://calcunotas.com/faq/",
      "es-CU": "https://calcunotas.com/faq/",
      "es-DO": "https://calcunotas.com/faq/",
      "es-HN": "https://calcunotas.com/faq/",
      "es-SV": "https://calcunotas.com/faq/",
      "es-NI": "https://calcunotas.com/faq/",
      "es-PA": "https://calcunotas.com/faq/",
      "es-CR": "https://calcunotas.com/faq/",
    },
  },
};

// ────────────────────────────────────────────────────────────
// GAP FIX (biggest one on this page): 24 FAQs 6 sections me the,
// koi bhi FAQPage schema me nahi tha. Data ko arrays me nikala
// taake JSX render aur schema dono isi se banein — koi duplication nahi,
// aur agar kal koi FAQ edit ho to sirf ek jagah change karni hogi.
// ────────────────────────────────────────────────────────────
const generalFaqs = [
  {
    question: "¿Qué es CalcuNotas?",
    answer:
      "CalcuNotas es un sitio web gratuito de calculadoras educativas que ayuda a los usuarios a calcular notas, GPA, puntajes de examen final, notas semestrales, porcentajes de examen, promedios ponderados y tablas de calificación rápida.",
  },
  {
    question: "¿Quién puede usar estas calculadoras?",
    answer:
      "Los estudiantes pueden usarlas para hacer seguimiento de notas y GPA, los profesores pueden usarlas para calcular puntajes o crear tablas de calificación, y los padres pueden usarlas para entender el progreso académico y los objetivos de notas.",
  },
  {
    question: "¿Las calculadoras son gratuitas?",
    answer:
      "Sí. Las calculadoras de CalcuNotas son gratuitas para uso educativo e informativo.",
  },
  {
    question: "¿Los resultados de la calculadora son oficiales?",
    answer:
      "No. Los resultados son estimaciones basadas en los valores que ingresas. Las notas oficiales, registros de GPA, expedientes académicos y situación académica son determinados por tu profesor, escuela, colegio o universidad.",
  },
];

const gradeCalculatorFaqs = [
  {
    question: "¿Cómo funciona la calculadora de notas?",
    answer:
      "La calculadora combina tus notas de evaluación con sus pesos. Multiplica cada nota por su peso, suma las puntuaciones ponderadas y divide entre el peso total para estimar tu nota actual en la materia.",
  },
  {
    question: "¿Qué información necesito para calcular mi nota actual?",
    answer:
      "Generalmente necesitas las notas de tareas, cuestionarios, exámenes, proyectos y el peso de cada categoría. Si tu clase usa puntos en lugar de pesos, necesitas los puntos obtenidos y el total de puntos posibles.",
  },
  {
    question: "¿Qué es una nota ponderada?",
    answer:
      "Una nota ponderada significa que algunas tareas o exámenes cuentan más que otros. Por ejemplo, un examen final con valor del 40% tiene mayor impacto en tu nota que una tarea con valor del 10%.",
  },
  {
    question: "¿Puedo calcular notas usando puntos?",
    answer:
      "Sí. Para calificación por puntos, divide los puntos obtenidos entre el total de puntos posibles y multiplica por 100. Por ejemplo, 180 puntos obtenidos de 200 posibles equivale al 90%.",
  },
];

const gpaFaqs = [
  {
    question: "¿Cómo calculo el GPA?",
    answer:
      "Convierte cada calificación en puntos de nota, multiplica los puntos por los créditos, suma todos los puntos de calidad y divide entre el total de créditos. La fórmula básica es: GPA = Total de Puntos de Calidad ÷ Total de Créditos.",
  },
  {
    question: "¿Cuál es la diferencia entre el GPA semestral y el GPA acumulado?",
    answer:
      "El GPA semestral mide solo un período académico. El GPA acumulado combina todos los semestres completados y muestra tu promedio académico general a lo largo de tu programa.",
  },
  {
    question: "¿Por qué los créditos afectan el GPA?",
    answer:
      "Los créditos actúan como peso. Una materia de 4 créditos afecta más tu GPA que una de 1 crédito, porque aporta más puntos de calidad al cálculo final del GPA.",
  },
  {
    question: "¿La calculadora GPA soporta GPA ponderado?",
    answer:
      "Sí. El GPA ponderado puede estimarse cuando cursos avanzados como Honors, AP, IB o materias de doble inscripción reciben puntos de nota adicionales. Las reglas exactas dependen de tu institución.",
  },
];

const finalGradeFaqs = [
  {
    question: "¿Cómo calculo la nota que necesito en el examen final?",
    answer:
      "Ingresa tu nota actual, la nota objetivo y el peso del examen final. La calculadora estima el puntaje que necesitas en el examen final para alcanzar tu nota objetivo en la materia.",
  },
  {
    question: "¿Qué significa el peso del examen final?",
    answer:
      "El peso del examen final es el porcentaje de tu nota total del curso que controla el examen final. Un examen final del 30% significa que cuenta el 30% de tu nota final en la materia.",
  },
  {
    question: "¿Qué pasa si la nota requerida en el examen final supera el 100%?",
    answer:
      "Si la nota requerida supera el 100%, es posible que tu nota objetivo no sea alcanzable sin crédito extra, curva de calificación o puntos adicionales. Considera establecer un objetivo más realista o consultar con tu profesor.",
  },
  {
    question: "¿Puede la calculadora estimar mi nota final del curso?",
    answer:
      "Sí. Si conoces tu nota actual, la nota del examen final y el peso del examen final, puedes estimar tu nota final del curso después del examen.",
  },
];

const easyGraderFaqs = [
  {
    question: "¿Qué es un calificador rápido?",
    answer:
      "Un calificador rápido crea una tabla de notas a partir del total de preguntas. Muestra respuestas incorrectas, correctas, porcentajes y calificaciones de letras para cada puntaje posible.",
  },
  {
    question: "¿Cómo calculan los profesores las notas a partir de respuestas incorrectas?",
    answer:
      "Resta las respuestas incorrectas del total de preguntas para obtener las respuestas correctas. Luego divide las respuestas correctas entre el total de preguntas y multiplica por 100 para obtener el porcentaje.",
  },
  {
    question: "¿Se puede usar el calificador rápido para cuestionarios y tareas?",
    answer:
      "Sí. Los profesores pueden usarlo para cuestionarios, exámenes, hojas de trabajo, pruebas de ortografía, tareas, exámenes de práctica y trabajos de clase.",
  },
  {
    question: "¿El calificador rápido muestra calificaciones de letras?",
    answer:
      "Sí. El calificador rápido puede mostrar calificaciones de letras junto con porcentajes, según la escala de calificación que se esté usando.",
  },
];

const accuracyFaqs = [
  {
    question: "¿Por qué mi nota oficial puede diferir del resultado de la calculadora?",
    answer:
      "Las notas oficiales pueden diferir porque los profesores e instituciones pueden usar reglas de redondeo, crédito extra, curvas de calificación, notas eliminadas, pesos de categoría personalizados, penalizaciones por retraso o políticas especiales de calificación.",
  },
  {
    question: "¿Las escalas de calificación son iguales en todos lados?",
    answer:
      "No. Escuelas, colegios, universidades, profesores y países pueden usar diferentes cortes de porcentaje, escalas de GPA, sistemas de calificación por letras y políticas de calificación ponderada.",
  },
  {
    question: "¿Debo usar los resultados de la calculadora para decisiones académicas oficiales?",
    answer:
      "Los resultados son estimaciones útiles, pero las decisiones académicas importantes deben confirmarse con tu profesor, secretaría académica, asesor, programa del curso o portal oficial de notas.",
  },
  {
    question: "¿Qué hago si no estoy seguro de los pesos o las reglas de calificación?",
    answer:
      "Revisa el programa del curso, la política de calificación de tu institución, o pregunta a tu profesor. Los pesos y reglas precisas son importantes para obtener resultados confiables de la calculadora.",
  },
];

// Sab FAQs ek jagah combine kiye taake ek hi FAQPage schema me sab 24 questions jayein
const allFaqs = [
  ...generalFaqs,
  ...gradeCalculatorFaqs,
  ...gpaFaqs,
  ...finalGradeFaqs,
  ...easyGraderFaqs,
  ...accuracyFaqs,
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Preguntas Frecuentes", item: "https://calcunotas.com/faq/" },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main className=" min-h-screen bg-[#f7f9fc] text-[#111827]">
      {/* GAP FIX: schema script tag page me pehli baar add hua — 24 FAQs ab schema me hain */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b px-8 from-blue-50 to-[#f7f9fc]">
        <div className=" mx-auto">
          <div className="text-sm text-gray-500 mb-3">
            Inicio / Preguntas Frecuentes
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Preguntas Frecuentes
          </h1>

          <p className="max-w-[850px] text-gray-600 leading-8 text-[16px] md:text-[17px]">
            Encuentra respuestas a preguntas comunes sobre CalcuNotas, incluyendo
            calculadoras de notas, calculadoras GPA, calculadoras de nota final,
            herramientas de nota semestral, calculadoras de examen, notas ponderadas,
            calificación por puntos y herramientas de calificación rápida.
          </p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12 px-8">
        <div className=" mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

          {/* MAIN CONTENT */}
          <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden">

            {/* INTRO */}
            <section className="p-7 md:p-9 border-b border-gray-200">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                  Ayuda con el Cálculo de Notas y GPA
                </h2>

                <p className="text-gray-700 leading-8">
                  CalcuNotas ofrece calculadoras académicas gratuitas para
                  estudiantes, profesores, padres y educadores. Estas preguntas frecuentes explican
                  cómo funcionan nuestras calculadoras, qué información necesitas, cómo se
                  calculan las fórmulas de notas y por qué los resultados oficiales pueden diferir
                  de las estimaciones de la calculadora.
                </p>

                <p className="text-gray-700 leading-8 mt-4">
                  Los resultados de la calculadora están diseñados para planificación y aprendizaje. Para
                  notas oficiales, registros de GPA, expedientes académicos o decisiones académicas,
                  consulta siempre el portal de tu institución, las instrucciones del profesor, el
                  programa del curso o tu asesor académico.
                </p>
              </div>
            </section>

            <div className="p-7 md:p-9">

              {/* GENERAL FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas Generales
                </h2>

                <div className="bg-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                  {generalFaqs.map((faq, index) => (
                    <details
                      key={index}
                      className={`group ${index < generalFaqs.length - 1 ? "border-b border-slate-700 pb-4" : ""}`}
                    >
                      <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium gap-4">
                        <h3>{faq.question}</h3>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-slate-400 leading-7">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
{/* GAP #1: Step-by-step guide on how to use the academic calculators.
    PASTE: Después de la sección INTRO y antes de "Preguntas Generales". */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
    Cómo Usar una Calculadora de Notas
  </h2>

  <div className="grid md:grid-cols-2 gap-5">
    {[
      {
        number: "1",
        title: "Reúne tus datos",
        text:
          "Ten a mano tus calificaciones, puntos obtenidos, puntos posibles, créditos u otros datos que aparezcan en el sistema de evaluación de tu curso.",
      },
      {
        number: "2",
        title: "Elige la calculadora correcta",
        text:
          "Selecciona una herramienta según lo que quieras averiguar: nota actual, GPA, nota final necesaria, porcentaje de examen o tabla de calificaciones.",
      },
      {
        number: "3",
        title: "Introduce los valores",
        text:
          "Escribe los datos exactamente como aparecen en tu curso. Comprueba especialmente los pesos, créditos y puntos máximos antes de calcular.",
      },
      {
        number: "4",
        title: "Comprueba el resultado",
        text:
          "Utiliza el resultado como una estimación o comprobación. Si el resultado es inesperado, revisa primero los datos introducidos y después las reglas de calificación de tu curso.",
      },
    ].map((step) => (
      <div
        key={step.number}
        className="bg-white border border-gray-200 rounded-2xl p-6"
      >
        <div className="flex items-start gap-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
            {step.number}
          </span>

          <div>
            <h3 className="text-xl font-black text-gray-900 mb-2">
              {step.title}
            </h3>

            <p className="text-gray-700 leading-7">
              {step.text}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>{/* GAP #2: Worked examples for weighted grades, points, and GPA.
    PASTE: Después de "Cómo Usar una Calculadora de Notas" y antes de FAQ generales. */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
    Ejemplos de Cálculo de Notas y GPA
  </h2>

  <div className="space-y-5">
    <div className="bg-slate-800 rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-black text-white mb-3">
        Ejemplo 1: Nota por puntos
      </h3>

      <p className="text-slate-300 leading-7 mb-4">
        Si obtienes 180 puntos de un total de 200, el porcentaje se calcula
        dividiendo los puntos obtenidos entre los puntos posibles y
        multiplicando el resultado por 100.
      </p>

      <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
        180 ÷ 200 × 100 = 90%
      </div>

      <p className="text-slate-400 leading-7 mt-4">
        El resultado es un 90%. La letra correspondiente dependerá de la escala
        de calificación utilizada por tu curso o institución.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <h3 className="text-xl font-black text-gray-900 mb-3">
        Ejemplo 2: Nota ponderada
      </h3>

      <p className="text-gray-700 leading-7 mb-4">
        Supongamos que una tarea vale 20% y obtienes 80%, mientras que un examen
        vale 30% y obtienes 90%. La contribución de cada categoría se obtiene
        multiplicando la nota por su peso.
      </p>

      <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-gray-800 font-mono text-sm leading-7">
        (80 × 0.20) + (90 × 0.30) = 40.00 puntos
      </div>

      <p className="text-gray-600 leading-7 mt-4">
        Estos 40 puntos representan la contribución de esas dos categorías a
        la nota total del curso. Las categorías restantes deben incluirse para
        obtener la nota completa.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <h3 className="text-xl font-black text-gray-900 mb-3">
        Ejemplo 3: GPA con créditos
      </h3>

      <p className="text-gray-700 leading-7 mb-4">
        Si una materia aporta 4 puntos de calificación por cada uno de sus
        3 créditos, genera 12 puntos de calidad. Una segunda materia con
        3 puntos por 2 créditos genera 6 puntos de calidad.
      </p>

      <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-gray-800 font-mono text-sm leading-7">
        (4 × 3) + (3 × 2) = 18 puntos de calidad
        <br />
        18 ÷ 5 créditos = 3.60 GPA
      </div>

      <p className="text-gray-600 leading-7 mt-4">
        Este ejemplo utiliza una escala hipotética de puntos. Tu institución
        puede utilizar valores y reglas diferentes.
      </p>
    </div>
  </div>
</section>{/* GAP #3: Clarifies three commonly confused grading concepts.
    PASTE: Después de los ejemplos de cálculo y antes de FAQ generales. */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
    Puntos, Porcentajes y Pesos: ¿Cuál es la Diferencia?
  </h2>

  <div className="overflow-x-auto rounded-2xl border border-gray-200">
    <table className="w-full min-w-[650px] bg-white text-left">
      <thead className="bg-slate-800 text-white">
        <tr>
          <th className="px-5 py-4 font-black">Concepto</th>
          <th className="px-5 py-4 font-black">Qué significa</th>
          <th className="px-5 py-4 font-black">Ejemplo</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-5 py-4 font-bold text-gray-900">
            Puntos
          </td>
          <td className="px-5 py-4 text-gray-700">
            Cantidad de puntos obtenidos frente a los puntos posibles.
          </td>
          <td className="px-5 py-4 text-gray-700">
            45 de 50 puntos
          </td>
        </tr>

        <tr>
          <td className="px-5 py-4 font-bold text-gray-900">
            Porcentaje
          </td>
          <td className="px-5 py-4 text-gray-700">
            Representa el rendimiento como una proporción de 100.
          </td>
          <td className="px-5 py-4 text-gray-700">
            45 de 50 = 90%
          </td>
        </tr>

        <tr>
          <td className="px-5 py-4 font-bold text-gray-900">
            Peso
          </td>
          <td className="px-5 py-4 text-gray-700">
            Indica cuánto contribuye una categoría a la nota total.
          </td>
          <td className="px-5 py-4 text-gray-700">
            Examen = 30% de la nota
          </td>
        </tr>

        <tr>
          <td className="px-5 py-4 font-bold text-gray-900">
            Créditos
          </td>
          <td className="px-5 py-4 text-gray-700">
            Determinan el peso de una materia en determinados cálculos de GPA.
          </td>
          <td className="px-5 py-4 text-gray-700">
            Curso de 3 créditos
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-gray-600 leading-8 mt-4">
    Estos conceptos están relacionados, pero no son intercambiables. Una
    calculadora debe utilizar el tipo de dato que corresponde al sistema de
    evaluación de tu curso.
  </p>
</section>{/* GAP #4: Common input and calculation mistakes.
    PASTE: Después de la tabla de conceptos y antes de FAQ generales. */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
    Errores Comunes al Calcular una Nota
  </h2>

  <div className="grid md:grid-cols-2 gap-5">
    {[
      {
        title: "Confundir puntos con porcentajes",
        text:
          "Introducir 45 como si fuera 45% cuando realmente representa 45 puntos de 50 puede producir un resultado incorrecto.",
      },
      {
        title: "Usar pesos incorrectos",
        text:
          "Comprueba si una categoría vale 10%, 20%, 30% u otro porcentaje. Un peso equivocado puede cambiar significativamente la nota calculada.",
      },
      {
        title: "Olvidar una categoría",
        text:
          "Si el curso utiliza varias categorías de evaluación, asegúrate de incluir todas las que ya forman parte de tu nota.",
      },
      {
        title: "Usar una escala GPA diferente",
        text:
          "No todas las instituciones convierten las letras y los puntos de calificación de la misma manera. Utiliza la escala correspondiente a tu institución.",
      },
      {
        title: "Redondear demasiado pronto",
        text:
          "Redondear cada resultado intermedio puede introducir pequeñas diferencias. Cuando sea posible, conserva los decimales hasta el cálculo final.",
      },
      {
        title: "Ignorar reglas especiales del curso",
        text:
          "Crédito extra, exámenes reemplazados, tareas eliminadas, curvas o penalizaciones pueden hacer que una fórmula básica no coincida con la nota oficial.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl p-6"
      >
        <h3 className="text-lg font-black text-gray-900 mb-2">
          {item.title}
        </h3>

        <p className="text-gray-700 leading-7">
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>{/* GAP #5 + #6: Calculator selection guide + internal links.
    PASTE: Después de "Errores Comunes" y antes de FAQ generales. */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
    ¿Qué Calculadora Debo Usar?
  </h2>

  <div className="space-y-4">
    <a
      href="/calculadora-gpa/"
      className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-black text-gray-900 mb-2">
        Calculadora GPA
      </h3>

      <p className="text-gray-700 leading-7">
        Úsala cuando quieras calcular un promedio GPA a partir de tus
        calificaciones y créditos según la escala correspondiente.
      </p>

      <span className="inline-block mt-4 text-blue-600 font-bold text-sm">
        Ir a la Calculadora GPA →
      </span>
    </a>

    <a
      href="/calculadora-nota-final/"
      className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-black text-gray-900 mb-2">
        Calculadora de Nota Final
      </h3>

      <p className="text-gray-700 leading-7">
        Úsala cuando necesites saber qué nota necesitas en un examen final para
        alcanzar un objetivo determinado en el curso.
      </p>

      <span className="inline-block mt-4 text-blue-600 font-bold text-sm">
        Calcular la Nota Final →
      </span>
    </a>

    <a
      href="/calificador-rapido/"
      className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-black text-gray-900 mb-2">
        Calificador Rápido
      </h3>

      <p className="text-gray-700 leading-7">
        Úsalo para convertir rápidamente respuestas correctas e incorrectas en
        porcentajes y calificaciones según la escala que estés utilizando.
      </p>

      <span className="inline-block mt-4 text-blue-600 font-bold text-sm">
        Abrir Calificador Rápido →
      </span>
    </a>
  </div>
</section>{/* GAP #7: Quick-reference decision table for users scanning the FAQ page.
    PASTE: Después de "¿Qué Calculadora Debo Usar?" y antes de FAQ generales. */}
<section className="mb-12">
  <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
    Guía Rápida de Cálculo
  </h2>

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl p-5">
        <p className="text-sm text-gray-500 mb-1">
          Si conoces...
        </p>
        <p className="font-black text-gray-900 mb-2">
          Puntos obtenidos y puntos posibles
        </p>
        <p className="text-gray-600 leading-6 text-sm">
          Puedes calcular un porcentaje de rendimiento.
        </p>
      </div>

      <div className="bg-white rounded-xl p-5">
        <p className="text-sm text-gray-500 mb-1">
          Si conoces...
        </p>
        <p className="font-black text-gray-900 mb-2">
          Notas y pesos de categorías
        </p>
        <p className="text-gray-600 leading-6 text-sm">
          Puedes calcular una nota ponderada.
        </p>
      </div>

      <div className="bg-white rounded-xl p-5">
        <p className="text-sm text-gray-500 mb-1">
          Si conoces...
        </p>
        <p className="font-black text-gray-900 mb-2">
          Calificaciones y créditos
        </p>
        <p className="text-gray-600 leading-6 text-sm">
          Puedes calcular un GPA según la escala aplicable.
        </p>
      </div>

      <div className="bg-white rounded-xl p-5">
        <p className="text-sm text-gray-500 mb-1">
          Si conoces...
        </p>
        <p className="font-black text-gray-900 mb-2">
          Nota actual, objetivo y peso final
        </p>
        <p className="text-gray-600 leading-6 text-sm">
          Puedes estimar la nota necesaria en el examen final.
        </p>
      </div>
    </div>
  </div>
</section>
              {/* GRADE CALCULATOR FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre la Calculadora de Notas
                </h2>

                <div className="space-y-4">
                  {gradeCalculatorFaqs.map((faq, index) => (
                    <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-5">
                      <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                        <h3>{faq.question}</h3>
                        <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-gray-700 leading-8">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* GPA FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre la Calculadora GPA
                </h2>

                <div className="space-y-4">
                  {gpaFaqs.map((faq, index) => (
                    <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-5">
                      <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                        <h3>{faq.question}</h3>
                        <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-gray-700 leading-8">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* FINAL GRADE FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre la Calculadora de Nota Final
                </h2>

                <div className="space-y-4">
                  {finalGradeFaqs.map((faq, index) => (
                    <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-5">
                      <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                        <h3>{faq.question}</h3>
                        <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-gray-700 leading-8">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* EASY GRADER FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre el Calificador Rápido
                </h2>

                <div className="space-y-4">
                  {easyGraderFaqs.map((faq, index) => (
                    <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-5">
                      <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                        <h3>{faq.question}</h3>
                        <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-gray-700 leading-8">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* ACCURACY FAQ */}
              <section className="mb-12">
                <h2 className="text-[30px] font-black tracking-[-0.04em] mb-6">
                  Preguntas sobre Precisión y Políticas de Calificación
                </h2>

                <div className="space-y-4">
                  {accuracyFaqs.map((faq, index) => (
                    <details key={index} className="group rounded-2xl border border-gray-200 bg-white p-5">
                      <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-gray-900 gap-4">
                        <h3>{faq.question}</h3>
                        <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="mt-4 text-gray-700 leading-8">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CONTACT CTA */}
              <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                  ¿Tienes Más Preguntas?
                </h2>

                <p className="text-gray-700 leading-8">
                  Si tienes preguntas sobre CalcuNotas, resultados de calculadoras,
                  fórmulas de notas o comentarios sobre el sitio, puedes contactarnos en{" "}
                  <a
                    href="mailto:info@calcunotas.com"
                    className="text-blue-600 underline hover:text-blue-700 transition"
                  >
                    info@calcunotas.com
                  </a>
                  .
                </p>
              </section>

            </div>
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