"use client";

import { useEffect, useState } from "react";

export default function EasyGradeCalculatorLab() {
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [gradeScale, setGradeScale] = useState("standard");
  const [decimals, setDecimals] = useState(2);

  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState(
    "Consejo: Los profesores pueden copiar esta tabla y pegarla en notas, hojas de cálculo o registros de clase."
  );

  function getLetterGrade(percent) {
    if (gradeScale === "easy") {
      if (percent >= 85) return "A";
      if (percent >= 75) return "B";
      if (percent >= 65) return "C";
      if (percent >= 55) return "D";
      return "F";
    }

    if (gradeScale === "plusminus") {
      if (percent >= 97) return "A+";
      if (percent >= 93) return "A";
      if (percent >= 90) return "A-";
      if (percent >= 87) return "B+";
      if (percent >= 83) return "B";
      if (percent >= 80) return "B-";
      if (percent >= 77) return "C+";
      if (percent >= 73) return "C";
      if (percent >= 70) return "C-";
      if (percent >= 67) return "D+";
      if (percent >= 63) return "D";
      if (percent >= 60) return "D-";
      return "F";
    }

    if (percent >= 90) return "A";
    if (percent >= 80) return "B";
    if (percent >= 70) return "C";
    if (percent >= 60) return "D";
    return "F";
  }

  function getGradeClass(letter) {
    if (letter.startsWith("A")) return "bg-green-600";
    if (letter.startsWith("B")) return "bg-blue-600";
    if (letter.startsWith("C")) return "bg-amber-500";
    if (letter.startsWith("D")) return "bg-orange-500";
    return "bg-red-600";
  }

  function formatPercent(value) {
    return Number(value).toFixed(decimals);
  }

  function generateChart() {
    if (!totalQuestions || totalQuestions <= 0) {
      setMessage("Por favor ingresa un número válido de preguntas.");
      return;
    }

    if (totalQuestions > 500) {
      setMessage(
        "Por favor ingresa 500 preguntas o menos para una tabla legible."
      );
      return;
    }

    const generatedRows = [];

    for (let right = totalQuestions; right >= 0; right--) {
      const wrong = totalQuestions - right;
      const percentage = (right / totalQuestions) * 100;
      const letter = getLetterGrade(percentage);

      generatedRows.push({
        right,
        wrong,
        percentage,
        letter,
      });
    }

    setRows(generatedRows);

    setMessage(
      "Tabla lista. Puedes copiarla o cambiar las opciones para actualizar la escala de calificaciones."
    );
  }

  function copyChart() {
    if (!rows.length) {
      setMessage("Por favor genera la tabla primero.");
      return;
    }

    let text = "Correctas\tPorcentaje\tCalificación\tIncorrectas\n";

    rows.forEach((row) => {
      text += `${row.right}\t${formatPercent(
        row.percentage
      )}%\t${row.letter}\t${row.wrong}\n`;
    });

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Tabla de calificaciones copiada correctamente.");
      })
      .catch(() => {
        setMessage(
          "Error al copiar. Puedes seleccionar la tabla y copiarla manualmente."
        );
      });
  }

  function resetChart() {
    setTotalQuestions("");
    setGradeScale("standard");
    setDecimals(2);
    setRows([]);

    setMessage(
      "Consejo: Los profesores pueden copiar esta tabla y pegarla en notas, hojas de cálculo o registros de clase."
    );
  }

  useEffect(() => {
    generateChart();
  }, [gradeScale, decimals]);

  return (
    <div className="bg-white border border-gray-200 rounded-[14px] shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden">
      <div className="p-5 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-[24px] font-black tracking-[-0.03em]">
            Tabla de Calificaciones
          </h2>

          <p className="text-[#667085] text-sm">
            {rows.length
              ? `Tabla generada para ${totalQuestions} preguntas.`
              : "Genera una tabla para ver todas las calificaciones."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={copyChart}
            className="bg-[#eef2f7] text-[#374151] px-4 py-3 rounded-xl font-extrabold text-sm"
          >
            Copiar Tabla
          </button>

          <button
            onClick={resetChart}
            className="bg-[#eef2f7] text-[#374151] px-4 py-3 rounded-xl font-extrabold text-sm"
          >
            Restablecer
          </button>
        </div>
      </div>

      <div className="p-5 border-b border-gray-200">
        <div className="grid md:grid-cols-[1fr_auto] gap-3">
          <div className="flex items-center overflow-hidden rounded-xl border border-gray-200">
            <span className="px-4 h-[52px] bg-[#f8fafc] border-r border-gray-200 grid place-items-center font-black text-[#374151]">
              #
            </span>

            <input
              type="number"
              min="1"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(Number(e.target.value))}
              placeholder="Ingresa el total de preguntas"
              className="w-full px-4 py-4 outline-none text-[18px]"
            />
          </div>

          <button
            onClick={generateChart}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-4 rounded-xl font-extrabold text-sm shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
          >
            Calcular
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-2 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <label className="text-[13px] font-extrabold text-[#374151]">
              Escala
            </label>

            <select
              value={gradeScale}
              onChange={(e) => setGradeScale(e.target.value)}
              className="border border-gray-200 rounded-lg px-2 py-2 outline-none"
            >
              <option value="standard">Estándar</option>
              <option value="plusminus">Más / Menos</option>
              <option value="easy">Fácil</option>
            </select>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-2 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <label className="text-[13px] font-extrabold text-[#374151]">
              Decimales
            </label>

            <select
              value={decimals}
              onChange={(e) => setDecimals(Number(e.target.value))}
              className="border border-gray-200 rounded-lg px-2 py-2 outline-none"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </div>
        </div>
      </div>

      {!rows.length ? (
        <div className="px-5 py-10 text-center text-[#667085]">
          Ingresa el número de preguntas y haz clic en Calcular para crear la
          tabla de calificaciones.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr>
                <th className="bg-[#2563eb] text-white px-4 py-4 text-center text-[16px] font-black">
                  Correctas
                </th>

                <th className="bg-[#2563eb] text-white px-4 py-4 text-center text-[16px] font-black">
                  Porcentaje
                </th>

                <th className="bg-[#2563eb] text-white px-4 py-4 text-center text-[16px] font-black">
                  Calificación
                </th>

                <th className="bg-[#2563eb] text-white px-4 py-4 text-center text-[16px] font-black">
                  Incorrectas
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}
                >
                  <td className="px-4 py-4 text-center border-b border-gray-200 text-[17px]">
                    {row.right}
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200 text-[17px]">
                    {formatPercent(row.percentage)}%
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200 text-[17px]">
                    <span
                      className={`${getGradeClass(
                        row.letter
                      )} inline-grid place-items-center min-w-[44px] px-3 py-[5px] rounded-full text-white font-black text-[15px]`}
                    >
                      {row.letter}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-center border-b border-gray-200 text-[17px]">
                    {row.wrong}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="px-5 py-4 border-t border-gray-200 bg-[#f8fafc] text-[#374151] font-semibold text-sm">
        {message}
      </div>
    </div>
  );
}