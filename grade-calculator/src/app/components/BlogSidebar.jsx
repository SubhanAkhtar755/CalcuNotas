import Link from "next/link";

const recentPosts = [
  {
    title: "Cómo Calcular el GPA Fácilmente",
    slug: "como-calcular-el-gpa",
    icon: "G",
    desc: "Guía paso a paso para calcular el GPA",
  },

  {
    title: "¿Qué Es un Calificador Rápido?",
    slug: "que-es-un-calificador-rapido",
    icon: "C",
    desc: "Tutorial de tabla de calificaciones para profesores",
  },
];

export default function BlogSidebar() {
  return (
    <aside className="space-y-4">
      {/* RECENT POSTS */}
      <div className="overflow-hidden bg-white border border-gray-200 rounded-[14px] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-[19px] font-bold mb-1">
            Entradas Recientes
          </h3>

          <p className="text-[13px] text-gray-500">
            Últimos artículos y tutoriales del blog.
          </p>
        </div>

        <div className="p-3 grid gap-2">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              prefetch={false}
              className="grid grid-cols-[38px_1fr] gap-3 items-center p-3 border border-gray-200 rounded-xl hover:border-green-200 hover:bg-green-50 transition"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-green-50 text-green-600 grid place-items-center font-black">
                {post.icon}
              </div>

              <div>
                <strong className="block text-sm leading-[1.2]">
                  {post.title}
                </strong>

                <span className="text-xs text-gray-500 font-semibold">
                  {post.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}