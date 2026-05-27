// app/components/RightSidebar.jsx

import Link from "next/link";

export default function RightSidebar() {
  return (
    <aside>
      <div className="overflow-hidden bg-white border border-gray-200 rounded-[14px] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-[19px] font-bold mb-1">
            Más Calculadoras
          </h3>

          <p className="text-[13px] text-gray-500">
            Herramientas de calificación para estudiantes y profesores.
          </p>
        </div>

        <div className="p-3 grid gap-2">
          {[
            [
              "C",
              "Calculadora de Notas",
              "Calcula la nota general del curso",
              "/calculadora-de-notas/",
            ],

            [
              "N",
              "Calculadora de Nota Final",
              "Encuentra la nota requerida en el examen final",
              "/nota-final/",
            ],

            [
              "C",
              "Calificador Rápido",
              "Tabla de calificación rápida para profesores",
              "/calificador-rapido/",
            ],

            [
              "G",
              "Calculadora GPA",
              "Calcula el GPA a partir de las notas",
              "/calculadora-gpa/",
            ],

            [
              "G",
              "GPA Acumulado",
              "Registra tu GPA acumulado total",
              "/gpa-acumulado/",
            ],

            [
              "N",
              "Nota Semestral",
              "Calcula las notas del semestre fácilmente",
              "/nota-semestral/",
            ],

            [
              "C",
              "Calculadora Profesores",
              "Califica tareas y exámenes",
              "/calculadora-profesores/",
            ],

            [
              "C",
              "Calculadora de Clase",
              "Calcula el rendimiento en el aula",
              "/calculadora-clase/",
            ],
          ].map((item, index) => (
            <Link
              key={index}
              href={item[3]}
              prefetch={false}
              className="grid grid-cols-[38px_1fr] gap-3 items-center p-3 border border-gray-200 rounded-xl hover:border-green-200 hover:bg-green-50 transition"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-green-50 text-green-600 grid place-items-center font-black">
                {item[0]}
              </div>

              <div>
                <strong className="block text-sm leading-[1.2]">
                  {item[1]}
                </strong>

                <span className="text-xs text-gray-500 font-semibold">
                  {item[2]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}