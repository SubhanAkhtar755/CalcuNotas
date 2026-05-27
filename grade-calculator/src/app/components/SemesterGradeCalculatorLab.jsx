"use client";

import { useMemo, useState } from "react";

const LETTER_OPTIONS = [
  { label: "A+", value: 98 },
  { label: "A", value: 95 },
  { label: "A-", value: 91 },
  { label: "B+", value: 88 },
  { label: "B", value: 85 },
  { label: "B-", value: 81 },
  { label: "C+", value: 78 },
  { label: "C", value: 75 },
  { label: "C-", value: 71 },
  { label: "D+", value: 68 },
  { label: "D", value: 65 },
  { label: "D-", value: 61 },
  { label: "F", value: 50 },
];

const defaultRows = {
  percentage: [
    { name: "Tarea", grade: "90", weight: "30" },
    { name: "Deberes", grade: "85", weight: "20" },
    { name: "Examen", grade: "80", weight: "50" },
  ],
  letters: [
    { name: "Tarea", grade: "95", weight: "30" },
    { name: "Deberes", grade: "85", weight: "20" },
    { name: "Examen", grade: "75", weight: "50" },
  ],
  points: [
    { name: "Tarea", earned: "45", total: "50", weight: "30" },
    { name: "Deberes", earned: "85", total: "100", weight: "20" },
    { name: "Examen", earned: "80", total: "100", weight: "50" },
  ],
};

const typeLabels = {
  percentage: "Porcentaje",
  letters: "Letras",
  points: "Puntos",
};

export default function SemesterGradeCalculatorLab() {
  const [gradeType, setGradeType] = useState("percentage");
  const [rows, setRows] = useState(defaultRows.percentage);

  const [result, setResult] = useState({
    percent: "--%",
    letter: "--",
    weight: "--",
    items: "--",
    status: "--",
    message:
      "Ingresa tus evaluaciones y haz clic en calcular para ver tu calificación.",
    progress: 0,
  });

  const [finalData, setFinalData] = useState({
    current: "",
    target: "",
    finalWeight: "",
    result: "--%",
    message:
      "Ingresa tu calificación actual, calificación objetivo y el peso del examen final.",
  });

  const changeType = (type) => {
    setGradeType(type);
    setRows(defaultRows[type]);

    setResult({
      percent: "--%",
      letter: "--",
      weight: "--",
      items: "--",
      status: "--",
      message:
        "Ingresa tus evaluaciones y haz clic en calcular para ver tu calificación.",
      progress: 0,
    });
  };

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const addRow = () => {
    if (gradeType === "points") {
      setRows([...rows, { name: "", earned: "", total: "", weight: "" }]);
    } else {
      setRows([...rows, { name: "", grade: "", weight: "" }]);
    }
  };

  const removeRow = (index) => {
    if (rows.length === 1) return;
    setRows(rows.filter((_, i) => i !== index));
  };

  const getLetterGrade = (percent) => {
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
  };

  const getStatus = (percent) => {
    if (percent >= 90) return "Excelente";
    if (percent >= 80) return "Bueno";
    if (percent >= 70) return "Aprobado";
    if (percent >= 60) return "Necesita Mejorar";
    return "Revisar";
  };

  const calculateGrade = () => {
    let weightedSum = 0;
    let totalWeight = 0;
    let validRows = 0;

    rows.forEach((row) => {
      let gradePercent = null;
      const weight = Number(row.weight || 0);

      if (gradeType === "percentage") {
        const grade = Number(row.grade || 0);
        if (grade >= 0 && grade <= 100 && weight > 0) gradePercent = grade;
      }

      if (gradeType === "letters") {
        const grade = Number(row.grade || 0);
        if (grade > 0 && weight > 0) gradePercent = grade;
      }

      if (gradeType === "points") {
        const earned = Number(row.earned || 0);
        const total = Number(row.total || 0);
        if (total > 0 && earned >= 0 && earned <= total && weight > 0)
          gradePercent = (earned / total) * 100;
      }

      if (gradePercent !== null) {
        weightedSum += gradePercent * weight;
        totalWeight += weight;
        validRows++;
      }
    });

    if (validRows === 0) return;

    const finalGrade = weightedSum / totalWeight;
    const letter = getLetterGrade(finalGrade);

    setResult({
      percent: `${finalGrade.toFixed(2)}%`,
      letter,
      weight: `${totalWeight.toFixed(2)}%`,
      items: validRows,
      status: getStatus(finalGrade),
      message: `Tu calificación actual es ${finalGrade.toFixed(2)}% con una letra de ${letter}.`,
      progress: Math.min(finalGrade, 100),
    });

    setFinalData((prev) => ({ ...prev, current: finalGrade.toFixed(2) }));
  };

  const calculateFinalNeeded = () => {
    const currentGrade = Number(finalData.current);
    const targetGrade = Number(finalData.target);
    const finalWeight = Number(finalData.finalWeight);

    if (
      currentGrade < 0 || currentGrade > 100 ||
      targetGrade < 0 || targetGrade > 100 ||
      finalWeight <= 0 || finalWeight > 100
    ) return;

    const weightDecimal = finalWeight / 100;
    const neededGrade =
      (targetGrade - currentGrade * (1 - weightDecimal)) / weightDecimal;

    let message = `Necesitas ${neededGrade.toFixed(2)}% en el examen final para alcanzar tu calificación objetivo.`;
    if (neededGrade > 100) message = "Necesitarías más del 100% en el examen final.";
    if (neededGrade <= 0) message = "Ya has asegurado tu calificación objetivo.";

    setFinalData((prev) => ({ ...prev, result: `${neededGrade.toFixed(2)}%`, message }));
  };

  const resetAll = () => {
    setRows(defaultRows[gradeType]);
    setResult({
      percent: "--%",
      letter: "--",
      weight: "--",
      items: "--",
      status: "--",
      message: "Ingresa tus evaluaciones y haz clic en calcular para ver tu calificación.",
      progress: 0,
    });
    setFinalData({
      current: "",
      target: "",
      finalWeight: "",
      result: "--%",
      message: "Ingresa tu calificación actual, calificación objetivo y el peso del examen final.",
    });
  };

  const inputClass =
    "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500";

  return (
    <section className="w-full rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 p-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Calculadora de Calificaciones Semestral
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Calcula calificaciones por porcentaje, letra o puntos.
        </p>
      </div>

      <div className="p-6">
        <div className="mb-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="mb-3 text-sm font-semibold text-zinc-700">
            Selecciona el Tipo de Calificación
          </p>
          <div className="flex flex-wrap gap-4">
            {["percentage", "letters", "points"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 text-sm font-medium text-zinc-700"
              >
                <input
                  type="radio"
                  checked={gradeType === type}
                  onChange={() => changeType(type)}
                />
                <span>{typeLabels[type]}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="min-w-full border-collapse">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left text-sm font-bold">Evaluación</th>
                {gradeType === "percentage" && (
                  <>
                    <th className="p-3 text-left text-sm font-bold">Nota %</th>
                    <th className="p-3 text-left text-sm font-bold">Peso</th>
                  </>
                )}
                {gradeType === "letters" && (
                  <>
                    <th className="p-3 text-left text-sm font-bold">Calificación Letra</th>
                    <th className="p-3 text-left text-sm font-bold">Peso</th>
                  </>
                )}
                {gradeType === "points" && (
                  <>
                    <th className="p-3 text-left text-sm font-bold">Obtenidos</th>
                    <th className="p-3 text-left text-sm font-bold">Total</th>
                    <th className="p-3 text-left text-sm font-bold">Peso</th>
                  </>
                )}
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-zinc-200">
                  <td className="p-3">
                    <input
                      className={inputClass}
                      value={row.name}
                      onChange={(e) => updateRow(index, "name", e.target.value)}
                      placeholder="Evaluación"
                    />
                  </td>
                  {gradeType === "percentage" && (
                    <>
                      <td className="p-3">
                        <input type="number" className={inputClass} value={row.grade}
                          onChange={(e) => updateRow(index, "grade", e.target.value)} />
                      </td>
                      <td className="p-3">
                        <input type="number" className={inputClass} value={row.weight}
                          onChange={(e) => updateRow(index, "weight", e.target.value)} />
                      </td>
                    </>
                  )}
                  {gradeType === "letters" && (
                    <>
                      <td className="p-3">
                        <select className={inputClass} value={row.grade}
                          onChange={(e) => updateRow(index, "grade", e.target.value)}>
                          <option value="">Seleccionar</option>
                          {LETTER_OPTIONS.map((item) => (
                            <option key={item.label} value={item.value}>{item.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-3">
                        <input type="number" className={inputClass} value={row.weight}
                          onChange={(e) => updateRow(index, "weight", e.target.value)} />
                      </td>
                    </>
                  )}
                  {gradeType === "points" && (
                    <>
                      <td className="p-3">
                        <input type="number" className={inputClass} value={row.earned}
                          onChange={(e) => updateRow(index, "earned", e.target.value)} />
                      </td>
                      <td className="p-3">
                        <input type="number" className={inputClass} value={row.total}
                          onChange={(e) => updateRow(index, "total", e.target.value)} />
                      </td>
                      <td className="p-3">
                        <input type="number" className={inputClass} value={row.weight}
                          onChange={(e) => updateRow(index, "weight", e.target.value)} />
                      </td>
                    </>
                  )}
                  <td className="p-3">
                    <button onClick={() => removeRow(index)}
                      className="rounded-lg bg-red-100 px-3 py-2 text-sm font-bold text-red-600">
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button onClick={addRow}
            className="rounded-xl bg-zinc-100 px-5 py-3 text-sm font-bold text-zinc-700">
            + Agregar Evaluación
          </button>
          <button onClick={calculateGrade}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white">
            Calcular Calificación
          </button>
          <button onClick={resetAll}
            className="rounded-xl bg-zinc-100 px-5 py-3 text-sm font-bold text-zinc-700">
            Restablecer
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="mb-5 flex items-center justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-zinc-500">Tu Calificación</p>
              <h3 className="mt-1 text-5xl font-black tracking-tight">{result.percent}</h3>
            </div>
            <div className="grid h-20 w-20 place-items-center rounded-2xl border border-zinc-200 bg-white text-3xl font-black text-blue-600">
              {result.letter}
            </div>
          </div>

          <div className="mb-5 h-3 overflow-hidden rounded-full bg-zinc-200">
            <div className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${result.progress}%` }} />
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold text-zinc-500">Peso Total</p>
              <strong className="text-lg">{result.weight}</strong>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold text-zinc-500">Evaluaciones</p>
              <strong className="text-lg">{result.items}</strong>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold text-zinc-500">Estado</p>
              <strong className="text-lg">{result.status}</strong>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-600">{result.message}</p>
        </div>
      </div>
    </section>
  );
}