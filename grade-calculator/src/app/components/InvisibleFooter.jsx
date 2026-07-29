import Link from "next/link";

const SOCIALS = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/calcunotas?igsh=aDB4aTZ5aHdqYWR4",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 6.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 6.2A2.4 2.4 0 1 0 9.6 12 2.4 2.4 0 0 0 12 14.4zM18 6.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
      </svg>
    ),
  },

  {
    name: "Facebook",
    link: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 22v-8h3l1-4h-4V8c0-1 .4-2 2-2h2V2h-3c-3 0-5 2-5 5v3H6v4h3v8h4z" />
      </svg>
    ),
  },

  {
    name: "Pinterest",
    link: "https://pin.it/7zgRSo1nB",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 0 5.384 0 12.017c0 4.991 3.045 9.268 7.378 11.094-.102-.941-.194-2.386.041-3.414.215-.881 1.383-5.615 1.383-5.615s-.353-.706-.353-1.747c0-1.635.952-2.856 2.138-2.856 1.009 0 1.496.757 1.496 1.665 0 1.015-.645 2.53-.983 3.936-.276 1.168.584 2.118 1.735 2.118 2.082 0 3.681-2.194 3.681-5.361 0-2.805-2.015-4.766-4.891-4.766-3.332 0-5.287 2.498-5.287 5.078 0 1.008.389 2.092.875 2.679a.354.354 0 0 1 .082.338c-.09.372-.293 1.168-.334 1.332-.051.215-.174.256-.399.154-1.496-.696-2.43-2.887-2.43-4.645 0-3.783 2.753-7.258 7.94-7.258 4.163 0 7.401 2.968 7.401 6.936 0 4.142-2.611 7.474-6.239 7.474-1.219 0-2.366-.635-2.753-1.393l-.747 2.845c-.266 1.029-.993 2.325-1.485 3.116 1.117.348 2.296.533 3.526.533C18.624 24.034 24 18.65 24 12.017 24 5.384 18.624 0 12.017 0z" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  ["Sobre Nosotros", "/sobre-nosotros/"],
  ["Política de Privacidad", "/privacidad/"],
  ["Términos", "/terminos/"],
  ["Blog", "/blog/"],
  ["FAQ", "/faq/"],
  ["Contacto", "/contacto/"],
];

export default function InvisibleFooter() {
  const year = new Date().getFullYear();

  const title =
    "text-black font-bold mb-4 uppercase text-sm tracking-wider";

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-black">
      <div className="px-8 mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <Link
              href="/"
              prefetch={false}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 bg-[#2563eb] text-white rounded-lg flex items-center justify-center font-black text-lg">
                C
              </div>

              <span className="text-[28px] font-bold text-gray-900">
                CalcuNotas
              </span>
            </Link>

            <p className="text-sm text-gray-600 leading-7">
              Calculadoras de notas gratuitas en línea para estudiantes y profesores.
              Calcula GPA, notas finales, notas semestrales, GPA acumulado
              y puntajes de clase al instante con herramientas académicas fáciles de usar.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className={title}>Navegación</p>

            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    prefetch={false}
                    className="text-gray-600 font-medium hover:text-[#2563eb] transition hover:pl-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <p className={title}>Síguenos</p>

            <p className="text-sm text-gray-600 mb-4 leading-7">
              Síguenos para nuevas herramientas de calculadora, guías de GPA,
              tutoriales de calificación y recursos para estudiantes.
            </p>

            <div className="flex gap-3">
              {SOCIALS.map(({ name, link, icon }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-green-600 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className={title}>Contacto</p>

            <p className="text-sm text-gray-600 mb-3 leading-7">
              Consultas comerciales, colaboraciones y soporte:
            </p>

            <a
              href="mailto:info@calcunotas.com"
              className="text-green-600 hover:text-green-500 transition text-sm break-all font-semibold"
            >
              info@calcunotas.com
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-10 pt-5 text-center text-sm text-gray-500">
          © {year} CalcuNotas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}