"use client";

import { useState } from "react";

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

  // GA4 EVENT TRACKING
  const trackEvent = (action, params = {}) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", action, {
        component_name: "SemesterGradeCalculatorLab",
        ...params,
      });
    }
  };

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

    trackEvent("semester_grade_type_change", {
      grade_type: type,
      grade_type_label: typeLabels[type],
    });
  };

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const addRow = () => {
    if (gradeType === "points") {
      setRows([
        ...rows,
        {
          name: "",
          earned: "",
          total: "",
          weight: "",
        },
      ]);
    } else {
      setRows([
        ...rows,
        {
          name: "",
          grade: "",
          weight: "",
        },
      ]);
    }

    trackEvent("semester_grade_add_evaluation", {
      grade_type: gradeType,
      evaluation_count: rows.length + 1,
    });
  };

  const removeRow = (index) => {
    if (rows.length === 1) return;

    setRows(rows.filter((_, i) => i !== index));

    trackEvent("semester_grade_remove_evaluation", {
      grade_type: gradeType,
      row_index: index,
      remaining_evaluations: rows.length - 1,
    });
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

        if (grade >= 0 && grade <= 100 && weight > 0) {
          gradePercent = grade;
        }
      }

      if (gradeType === "letters") {
        const grade = Number(row.grade || 0);

        if (grade > 0 && weight > 0) {
          gradePercent = grade;
        }
      }

      if (gradeType === "points") {
        const earned = Number(row.earned || 0);
        const total = Number(row.total || 0);

        if (
          total > 0 &&
          earned >= 0 &&
          earned <= total &&
          weight > 0
        ) {
          gradePercent = (earned / total) * 100;
        }
      }

      if (gradePercent !== null) {
        weightedSum += gradePercent * weight;
        totalWeight += weight;
        validRows++;
      }
    });

    if (validRows === 0) {
      trackEvent("semester_grade_calculation_error", {
        grade_type: gradeType,
        reason: "no_valid_evaluations",
      });

      return;
    }

    const finalGrade = weightedSum / totalWeight;
    const letter = getLetterGrade(finalGrade);
    const status = getStatus(finalGrade);

    setResult({
      percent: `${finalGrade.toFixed(2)}%`,
      letter,
      weight: `${totalWeight.toFixed(2)}%`,
      items: validRows,
      status,
      message: `Tu calificación actual es ${finalGrade.toFixed(
        2
      )}% con una letra de ${letter}.`,
      progress: Math.min(finalGrade, 100),
    });

    setFinalData((prev) => ({
      ...prev,
      current: finalGrade.toFixed(2),
    }));

    trackEvent("semester_grade_calculate", {
      grade_type: gradeType,
      final_grade: Number(finalGrade.toFixed(2)),
      letter_grade: letter,
      status,
      total_weight: Number(totalWeight.toFixed(2)),
      valid_evaluations: validRows,
    });
  };

  const calculateFinalNeeded = () => {
    const currentGrade = Number(finalData.current);
    const targetGrade = Number(finalData.target);
    const finalWeight = Number(finalData.finalWeight);

    if (
      currentGrade < 0 ||
      currentGrade > 100 ||
      targetGrade < 0 ||
      targetGrade > 100 ||
      finalWeight <= 0 ||
      finalWeight > 100
    ) {
      trackEvent("semester_final_exam_calculation_error", {
        reason: "invalid_input",
      });

      return;
    }

    const weightDecimal = finalWeight / 100;

    const neededGrade =
      (targetGrade -
        currentGrade * (1 - weightDecimal)) /
      weightDecimal;

    let message = `Necesitas ${neededGrade.toFixed(
      2
    )}% en el examen final para alcanzar tu calificación objetivo.`;

    if (neededGrade > 100) {
      message =
        "Necesitarías más del 100% en el examen final.";
    }

    if (neededGrade <= 0) {
      message =
        "Ya has asegurado tu calificación objetivo.";
    }

    setFinalData((prev) => ({
      ...prev,
      result: `${neededGrade.toFixed(2)}%`,
      message,
    }));

    trackEvent("semester_final_exam_calculate", {
      current_grade: currentGrade,
      target_grade: targetGrade,
      final_exam_weight: finalWeight,
      required_grade: Number(neededGrade.toFixed(2)),
    });
  };

  const resetAll = () => {
    setRows(defaultRows[gradeType]);

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

    setFinalData({
      current: "",
      target: "",
      finalWeight: "",
      result: "--%",
      message:
        "Ingresa tu calificación actual, calificación objetivo y el peso del examen final.",
    });

    trackEvent("semester_grade_reset", {
      grade_type: gradeType,
    });
  };

  const resetFinalCalculator = () => {
    setFinalData({
      current: "",
      target: "",
      finalWeight: "",
      result: "--%",
      message:
        "Ingresa tu calificación actual, calificación objetivo y el peso del examen final para ver la nota requerida.",
    });

    trackEvent("semester_final_exam_reset");
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
                <th className="p-3 text-left text-sm font-bold">
                  Evaluación
                </th>

                {gradeType === "percentage" && (
                  <>
                    <th className="p-3 text-left text-sm font-bold">
                      Nota %
                    </th>

                    <th className="p-3 text-left text-sm font-bold">
                      Peso
                    </th>
                  </>
                )}

                {gradeType === "letters" && (
                  <>
                    <th className="p-3 text-left text-sm font-bold">
                      Calificación Letra
                    </th>

                    <th className="p-3 text-left text-sm font-bold">
                      Peso
                    </th>
                  </>
                )}

                {gradeType === "points" && (
                  <>
                    <th className="p-3 text-left text-sm font-bold">
                      Obtenidos
                    </th>

                    <th className="p-3 text-left text-sm font-bold">
                      Total
                    </th>

                    <th className="p-3 text-left text-sm font-bold">
                      Peso
                    </th>
                  </>
                )}

                <th className="p-3"></th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-zinc-200"
                >
                  <td className="p-3">
                    <input
                      className={inputClass}
                      value={row.name}
                      onChange={(e) =>
                        updateRow(index, "name", e.target.value)
                      }
                      placeholder="Evaluación"
                    />
                  </td>

                  {gradeType === "percentage" && (
                    <>
                      <td className="p-3">
                        <input
                          type="number"
                          className={inputClass}
                          value={row.grade}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "grade",
                              e.target.value
                            )
                          }
                        />
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
                          className={inputClass}
                          value={row.weight}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "weight",
                              e.target.value
                            )
                          }
                        />
                      </td>
                    </>
                  )}

                  {gradeType === "letters" && (
                    <>
                      <td className="p-3">
                        <select
                          className={inputClass}
                          value={row.grade}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "grade",
                              e.target.value
                            )
                          }
                        >
                          <option value="">
                            Seleccionar
                          </option>

                          {LETTER_OPTIONS.map((item) => (
                            <option
                              key={item.label}
                              value={item.value}
                            >
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
                          className={inputClass}
                          value={row.weight}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "weight",
                              e.target.value
                            )
                          }
                        />
                      </td>
                    </>
                  )}

                  {gradeType === "points" && (
                    <>
                      <td className="p-3">
                        <input
                          type="number"
                          className={inputClass}
                          value={row.earned}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "earned",
                              e.target.value
                            )
                          }
                        />
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
                          className={inputClass}
                          value={row.total}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "total",
                              e.target.value
                            )
                          }
                        />
                      </td>

                      <td className="p-3">
                        <input
                          type="number"
                          className={inputClass}
                          value={row.weight}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "weight",
                              e.target.value
                            )
                          }
                        />
                      </td>
                    </>
                  )}

                  <td className="p-3">
                    <button
                      onClick={() => removeRow(index)}
                      className="rounded-lg bg-red-100 px-3 py-2 text-sm font-bold text-red-600"
                      aria-label="Eliminar evaluación"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={addRow}
            className="rounded-xl bg-zinc-100 px-5 py-3 text-sm font-bold text-zinc-700"
          >
            + Agregar Evaluación
          </button>

          <button
            onClick={calculateGrade}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
          >
            Calcular Calificación
          </button>

          <button
            onClick={resetAll}
            className="rounded-xl bg-zinc-100 px-5 py-3 text-sm font-bold text-zinc-700"
          >
            Restablecer
          </button>
        </div>

       

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="mb-5 flex items-center justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-zinc-500">
                Tu Calificación
              </p>

              <h3 className="mt-1 text-5xl font-black tracking-tight">
                {result.percent}
              </h3>
            </div>

            <div className="grid h-20 w-20 place-items-center rounded-2xl border border-zinc-200 bg-white text-3xl font-black text-blue-600">
              {result.letter}
            </div>
          </div>

          <div className="mb-5 h-3 overflow-hidden rounded-full bg-zinc-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{
                width: `${result.progress}%`,
              }}
            />
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold text-zinc-500">
                Peso Total
              </p>

              <strong className="text-lg">
                {result.weight}
              </strong>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold text-zinc-500">
                Evaluaciones
              </p>

              <strong className="text-lg">
                {result.items}
              </strong>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold text-zinc-500">
                Estado
              </p>

              <strong className="text-lg">
                {result.status}
              </strong>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-600">
            {result.message}
          </p>
        </div>

        {/* Nota Necesaria en el Examen Final */}
        <div className="mt-8 rounded-[14px] border border-zinc-200 bg-white p-5">
          <div className="mb-4">
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-zinc-900">
              Nota Necesaria en el Examen Final
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Descubre qué nota necesitas en tu examen final para
              alcanzar la calificación objetivo en la materia.
            </p>
          </div>

          <div className="mb-4 grid gap-4">
            {/* Calificación Actual */}
            <div>
              <label className="mb-2 block text-sm font-extrabold text-zinc-700">
                Tu Calificación Actual en la Materia
              </label>

              <div className="grid gap-2 md:grid-cols-[1fr_120px]">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="85"
                  value={finalData.current}
                  onChange={(e) =>
                    setFinalData({
                      ...finalData,
                      current: e.target.value,
                    })
                  }
                  className="w-full rounded-[9px] border border-zinc-200 bg-white px-3 py-[10px] text-[15px] outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <select
                  className="w-full rounded-[9px] border border-zinc-200 bg-white px-3 py-[10px] text-[15px] outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  onChange={(e) => {
                    if (e.target.value) {
                      setFinalData({
                        ...finalData,
                        current: e.target.value,
                      });

                      trackEvent(
                        "semester_current_grade_letter_select",
                        {
                          letter: e.target.options[e.target.selectedIndex].text,
                          value: Number(e.target.value),
                        }
                      );
                    }
                  }}
                >
                  <option value="">Letra</option>

                  {LETTER_OPTIONS.map((item) => (
                    <option
                      key={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calificación Objetivo */}
            <div>
              <label className="mb-2 block text-sm font-extrabold text-zinc-700">
                Calificación Objetivo que Deseas
              </label>

              <div className="grid gap-2 md:grid-cols-[1fr_120px]">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="90"
                  value={finalData.target}
                  onChange={(e) =>
                    setFinalData({
                      ...finalData,
                      target: e.target.value,
                    })
                  }
                  className="w-full rounded-[9px] border border-zinc-200 bg-white px-3 py-[10px] text-[15px] outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <select
                  className="w-full rounded-[9px] border border-zinc-200 bg-white px-3 py-[10px] text-[15px] outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  onChange={(e) => {
                    if (e.target.value) {
                      setFinalData({
                        ...finalData,
                        target: e.target.value,
                      });

                      trackEvent(
                        "semester_target_grade_letter_select",
                        {
                          letter: e.target.options[e.target.selectedIndex].text,
                          value: Number(e.target.value),
                        }
                      );
                    }
                  }}
                >
                  <option value="">Letra</option>

                  {LETTER_OPTIONS.map((item) => (
                    <option
                      key={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Peso del Examen Final */}
            <div>
              <label className="mb-2 block text-sm font-extrabold text-zinc-700">
                Peso del Examen Final
              </label>

              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="100"
                  placeholder="30"
                  value={finalData.finalWeight}
                  onChange={(e) =>
                    setFinalData({
                      ...finalData,
                      finalWeight: e.target.value,
                    })
                  }
                  className="w-full rounded-[9px] border border-zinc-200 bg-white px-3 py-[10px] pr-10 text-[15px] outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-extrabold text-zinc-500">
                  %
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-3">
            <button
              onClick={calculateFinalNeeded}
              className="rounded-[10px] bg-blue-600 px-4 py-3 text-[15px] font-extrabold text-white transition hover:bg-blue-700"
            >
              Calcular Nota del Examen Final
            </button>

            <button
              onClick={resetFinalCalculator}
              className="rounded-[10px] bg-zinc-100 px-4 py-3 text-[15px] font-extrabold text-zinc-700"
            >
              Restablecer
            </button>
          </div>

          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[12px] border border-green-200 bg-green-50 p-4 text-[16px] text-green-900">
            <strong>
              Nota necesaria en el examen final:
            </strong>

            <span className="text-[22px] font-black text-green-600">
              {finalData.result}
            </span>
          </div>

          <p className="text-sm font-medium text-zinc-700">
            {finalData.message}
          </p>
        </div>

       
      </div>
    </section>
  );
}