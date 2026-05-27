import Link from "next/link";
import InvisibleHeader from "@/app/components/InvisibleHeader";
import InvisibleFooter from "@/app/components/InvisibleFooter";

export const metadata = {
  title: "404 - Página No Encontrada | CalcuNotas",
  description:
    "¡Ups! La página que buscas no existe en CalcuNotas. Vuelve al inicio y encuentra tu calculadora de notas.",
};

export default function NotFoundPage() {
  return (
    <>
      <InvisibleHeader />
      <main className="bg-white flex items-center justify-center py-9 -mt-5">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-blue-600 mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">
            ¡Ups! Esta página no existe.
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            La página que buscas puede haber sido eliminada, renombrada o no
            está disponible temporalmente.
          </p>

          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </main>
      <InvisibleFooter />
    </>
  );
}