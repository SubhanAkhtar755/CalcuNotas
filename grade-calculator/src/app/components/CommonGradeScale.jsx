// app/components/CommonGradeScale.jsx


export default function CommonGradeScale() {
  return (
    <div className="mt-4 p-[14px] bg-white border border-gray-200 rounded-[14px] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <h3 className="text-[17px] font-bold mb-3">
        Escala de Calificaciones Común
      </h3>

      {[
        ["90% - 100%", "A"],
        ["80% - 89%", "B"],
        ["70% - 79%", "C"],
        ["60% - 69%", "D"],
        ["Menos del 60%", "F"],
      ].map((item, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b border-gray-200 last:border-none text-sm"
        >
          <span>{item[0]}</span>

          <strong className="text-blue-600">
            {item[1]}
          </strong>
        </div>
      ))}

     
    </div>
  );
}