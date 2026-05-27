import Link from "next/link";

import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";
import RightSidebar from "@/app/components/RightSidebar";
import BlogSidebar from "@/app/components/BlogSidebar";

const blogs = [
  {
    slug: "como-calcular-el-gpa",
    title: "Cómo Calcular el GPA Fácilmente",
    description:
      "Aprende paso a paso cómo calcular el GPA usando puntos de calificación y horas crédito. Entiende el GPA acumulado, semestral, ponderado y las escalas más comunes con ejemplos sencillos para estudiantes.",
    category: "Guía de GPA",
    date: "Mayo 2026",
  },
  {
    slug: "que-es-un-calificador-rapido",
    title: "Guía del Calificador Rápido para Profesores",
    description:
      "Aprende cómo funciona una calculadora de calificación rápida, cómo los profesores generan tablas de notas, calculan porcentajes y convierten puntajes en calificaciones de letras al instante.",
    category: "Herramientas para Profesores",
    date: "Mayo 2026",
  },
];

export const metadata = {
  title:
    "Blog de Calculadora de Notas | Guías de GPA, Calificador Rápido y Calculadoras Académicas",
  description:
    "Explora guías de calculadora GPA, tutoriales de calificador rápido, consejos sobre porcentaje de notas y recursos de calculadoras académicas para estudiantes y profesores. Aprende a calcular el GPA, notas, porcentajes y calificaciones finales fácilmente.",
  keywords: [
    "blog calculadora de notas",
    "guía calculadora gpa",
    "calificador rápido",
    "calculadora de porcentaje de notas",
    "guía gpa",
    "herramientas de calificación para profesores",
    "calculadora de nota final",
    "calculadora de notas ponderadas",
    "blog calculadoras académicas",
    "herramientas de notas para estudiantes",
    "cómo calcular el GPA",
    "tabla de calificaciones",
  ],

   alternates: {
    canonical: "https://calcunotas.com/blog/",
    languages: {
      "es": "https://calcunotas.com/blog/", // ✅ GENERIC - Pakistan, Canada, USA se koi bhi Spanish bolne wala
      "es-ES": "https://calcunotas.com/blog/", // Spain
      "es-MX": "https://calcunotas.com/blog/", // Mexico
      "es-AR": "https://calcunotas.com/blog/", // Argentina
      "es-CO": "https://calcunotas.com/blog/", // Colombia
      "es-CL": "https://calcunotas.com/blog/", // Chile
      "es-PE": "https://calcunotas.com/blog/", // Peru
      "es-VE": "https://calcunotas.com/blog/", // Venezuela
      "es-EC": "https://calcunotas.com/blog/", // Ecuador
      "es-BO": "https://calcunotas.com/blog/", // Bolivia
      "es-PY": "https://calcunotas.com/blog/", // Paraguay
      "es-UY": "https://calcunotas.com/blog/", // Uruguay
      "es-GT": "https://calcunotas.com/blog/", // Guatemala
      "es-CU": "https://calcunotas.com/blog/", // Cuba
      "es-DO": "https://calcunotas.com/blog/", // Dominican Republic
      "es-HN": "https://calcunotas.com/blog/", // Honduras
      "es-SV": "https://calcunotas.com/blog/", // El Salvador
      "es-NI": "https://calcunotas.com/blog/", // Nicaragua
      "es-PA": "https://calcunotas.com/blog/", // Panama
      "es-CR": "https://calcunotas.com/blog/", // Costa Rica
    },
  },

};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <InvisibleHeader />

      {/* HERO */}
      <section className="pt-10 pb-10 bg-gradient-to-b from-blue-50 to-[#f7f9fc]">
        <div className="w-[min(1120px,94%)] mx-auto">
          <div className="text-sm text-[#667085] mb-3">
            Inicio / Blog
          </div>

          <h1 className="text-[clamp(24px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            Blog de Calculadora de Notas
          </h1>

          <p className="max-w-[820px] text-[#667085] text-[17px] leading-8 mb-6">
            Explora guías útiles de <a href="/calculadora-gpa/" className="text-green-600 hover:text-green-700 font-semibold underline-offset-4 underline">calculadora GPA</a>, tutoriales de calificador rápido,
            consejos sobre porcentaje de notas y recursos de calculadoras académicas para
            estudiantes y profesores. Aprende a calcular el GPA, convertir
            porcentajes en calificaciones de letras y mejorar la corrección en el aula
            con guías paso a paso sencillas.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Guías de Calculadora GPA",
              "Tutoriales de Calificador Rápido",
              "Consejos de Porcentaje de Notas",
              "Herramientas para Profesores",
              "Recursos Académicos para Estudiantes",
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
      </section>

      {/* MAIN */}
      <section className="py-8">
        <div className="w-[min(1120px,94%)] mx-auto grid lg:grid-cols-[1fr_310px] gap-6 items-start">

          {/* LEFT BLOGS */}
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    {blog.category}
                  </span>

                  <span className="text-sm text-gray-500">
                    {blog.date}
                  </span>
                </div>

                <h2 className="text-[30px] font-black tracking-[-0.03em] leading-tight mb-4 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${blog.slug}`} prefetch={false}>
                    {blog.title}
                  </Link>
                </h2>

                <p className="text-gray-600 leading-8 mb-6 text-[16px]">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  prefetch={false}
                  className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  Leer Guía Completa →
                </Link>
              </article>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
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