"use client";

import { useState } from "react";

const COMPONENT_NAME = "FinalGradeCalculatorLab";

function trackEvent(action, params = {}) {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", action, {
      component: COMPONENT_NAME,
      ...params,
    });
  }
}

const gradeOptions = [
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

export default function FinalGradeCalculatorLab() {
  const [currentGrade, setCurrentGrade] = useState("");
  const [targetGrade, setTargetGrade] = useState("");
  const [finalWeight, setFinalWeight] = useState("");

  const [simpleResult, setSimpleResult] = useState("--%");
  const [simpleMessage, setSimpleMessage] = useState(
    "Ingresa tu nota actual, la nota que deseas obtener y el peso del examen final."
  );

  const [multiType, setMultiType] = useState("percentage");

  const [rows, setRows] = useState([
    { name: "Evaluación 1", grade: "85", weight: "30" },
    { name: "Evaluación 2", grade: "90", weight: "30" },
  ]);

  const [multiTargetGrade, setMultiTargetGrade] = useState("");
  const [multiFinalWeight, setMultiFinalWeight] = useState("40");

  const [multiResult, setMultiResult] = useState("--%");
  const [multiMessage, setMultiMessage] = useState(
    "Agrega tus evaluaciones, el peso del examen final y la nota objetivo para calcular el resultado."
  );

  const calculateSimpleFinal = () => {
    trackEvent("calculate_simple_final", {
      button: "Calcular",
      current_grade: currentGrade,
      target_grade: targetGrade,
      final_weight: finalWeight,
    });

    const current = Number(currentGrade);
    const target = Number(targetGrade);
    const weight = Number(finalWeight);

    if (!currentGrade || current < 0 || current > 100) {
      setSimpleMessage(
        "Por favor ingresa una nota actual válida entre 0 y 100."
      );
      return;
    }

    if (!targetGrade || target < 0 || target > 100) {
      setSimpleMessage(
        "Por favor ingresa una nota objetivo válida entre 0 y 100."
      );
      return;
    }

    if (!finalWeight || weight <= 0 || weight > 100) {
      setSimpleMessage(
        "Por favor ingresa un peso válido para el examen final entre 1 y 100."
      );
      return;
    }

    const w = weight / 100;
    const needed = (target - current * (1 - w)) / w;

    setSimpleResult(`${needed.toFixed(2)}%`);

    if (needed > 100) {
      setSimpleMessage(
        "Necesitas más del 100% en el examen final. Esta meta puede no ser posible sin crédito adicional."
      );
    } else if (needed <= 0) {
      setSimpleMessage(
        "Ya has asegurado tu nota objetivo según tu calificación actual y el peso del examen final."
      );
    } else {
      setSimpleMessage(
        `Necesitas ${needed.toFixed(
          2
        )}% en el examen final para alcanzar tu nota objetivo.`
      );
    }
  };

  const resetSimpleFinal = () => {
    trackEvent("reset_simple_final", {
      button: "Restablecer",
    });

    setCurrentGrade("");
    setTargetGrade("");
    setFinalWeight("");
    setSimpleResult("--%");
    setSimpleMessage(
      "Ingresa tu nota actual, la nota que deseas obtener y el peso del examen final."
    );
  };

  const addRow = () => {
    trackEvent("add_evaluation", {
      button: "Agregar Evaluación",
      evaluation_number: rows.length + 1,
    });

    setRows([
      ...rows,
      {
        name: `Evaluación ${rows.length + 1}`,
        grade: "",
        weight: "",
      },
    ]);
  };

  const removeRow = (index) => {
    if (rows.length <= 1) return;

    trackEvent("remove_evaluation", {
      button: "Remove Evaluation",
      evaluation_number: index + 1,
    });

    setRows(rows.filter((_, i) => i !== index));
  };

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const calculateMultiFinal = () => {
    trackEvent("calculate_multi_final", {
      button: "Calcular Nota Final Necesaria",
      evaluation_count: rows.length,
      grade_type: multiType,
      target_grade: multiTargetGrade,
      final_weight: multiFinalWeight,
    });

    let currentContribution = 0;
    let currentWeightTotal = 0;

    rows.forEach((row) => {
      const grade = Number(row.grade);
      const weight = Number(row.weight);

      if (!isNaN(grade) && !isNaN(weight)) {
        currentContribution += grade * (weight / 100);
        currentWeightTotal += weight;
      }
    });

    const target = Number(multiTargetGrade);
    const finalWeightNum = Number(multiFinalWeight);

    if (!multiTargetGrade) {
      setMultiMessage("Por favor ingresa una nota objetivo válida.");
      return;
    }

    if (!multiFinalWeight || finalWeightNum <= 0) {
      setMultiMessage(
        "Por favor ingresa un peso válido para el examen final."
      );
      return;
    }

    const needed =
      (target - currentContribution) / (finalWeightNum / 100);

    setMultiResult(`${needed.toFixed(2)}%`);

    let note = `Necesitas ${needed.toFixed(
      2
    )}% en el examen final para alcanzar tu nota objetivo.`;

    if (needed > 100) {
      note =
        "Necesitas más del 100% en el examen final. Esta meta puede no ser posible sin crédito adicional.";
    }

    if (needed <= 0) {
      note =
        "Ya has asegurado tu nota objetivo según los pesos de tus evaluaciones actuales.";
    }

    const totalWeight = currentWeightTotal + finalWeightNum;

    if (totalWeight !== 100) {
      note += ` El peso total ingresado es ${totalWeight.toFixed(
        2
      )}%, por favor verifica tus pesos.`;
    }

    setMultiMessage(note);
  };

  const resetMulti = () => {
    trackEvent("reset_multi_final", {
      button: "Restablecer",
    });

    setRows([
      { name: "Evaluación 1", grade: "85", weight: "30" },
      { name: "Evaluación 2", grade: "90", weight: "30" },
    ]);

    setMultiTargetGrade("");
    setMultiFinalWeight("40");

    setMultiResult("--%");
    setMultiMessage(
      "Agrega tus evaluaciones, el peso del examen final y la nota objetivo para calcular el resultado."
    );
  };

  return (
    <div className="space-y-8">
      {/* SIMPLE */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Nota Necesaria en el Examen Final
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Calcula la puntuación que necesitas en tu examen final para obtener
            la nota que deseas.
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-slate-700">
                Tu nota actual en la materia
              </label>

              <div className="grid gap-3 md:grid-cols-[1fr_150px]">
                <input
                  type="number"
                  value={currentGrade}
                  onChange={(e) =>
                    setCurrentGrade(e.target.value)
                  }
                  placeholder="85"
                  className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
                />

                <select
                  className="h-12 rounded-xl border border-slate-300 px-3 outline-none focus:border-blue-500"
                  onChange={(e) => {
                    const value = e.target.value;

                    trackEvent("simple_current_grade_letter", {
                      field: "current_grade",
                      value,
                    });

                    setCurrentGrade(value);
                  }}
                >
                  <option value="">Letra</option>

                  {gradeOptions.map((grade) => (
                    <option key={grade.label} value={grade.value}>
                      {grade.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-slate-700">
                Nota objetivo que deseas obtener
              </label>

              <div className="grid gap-3 md:grid-cols-[1fr_150px]">
                <input
                  type="number"
                  value={targetGrade}
                  onChange={(e) =>
                    setTargetGrade(e.target.value)
                  }
                  placeholder="90"
                  className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
                />

                <select
                  className="h-12 rounded-xl border border-slate-300 px-3 outline-none focus:border-blue-500"
                  onChange={(e) => {
                    const value = e.target.value;

                    trackEvent("simple_target_grade_letter", {
                      field: "target_grade",
                      value,
                    });

                    setTargetGrade(value);
                  }}
                >
                  <option value="">Letra</option>

                  {gradeOptions.map((grade) => (
                    <option key={grade.label} value={grade.value}>
                      {grade.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-slate-700">
                Peso del examen final (%)
              </label>

              <input
                type="number"
                value={finalWeight}
                onChange={(e) =>
                  setFinalWeight(e.target.value)
                }
                placeholder="30"
                className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={calculateSimpleFinal}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Calcular
            </button>

            <button
              onClick={resetSimpleFinal}
              className="rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Restablecer
            </button>
          </div>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <p className="text-sm font-semibold text-slate-700 mb-2">
              Nota necesaria en el examen final para alcanzar el objetivo:
            </p>

            <div className="text-4xl font-bold tracking-tight text-green-600">
              {simpleResult}
            </div>

            <p className="mt-3 text-sm text-slate-600">
              {simpleMessage}
            </p>
          </div>
        </div>
      </div>

    

      {/* MULTI */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Calculadora de Nota Final con Múltiples Evaluaciones
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Agrega tus evaluaciones actuales y el peso del examen final para
            calcular la puntuación que necesitas.
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Selecciona el tipo de calificación
            </p>

            <div className="flex flex-wrap gap-5">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="radio"
                  checked={multiType === "percentage"}
                  onChange={() => {
                    trackEvent("grade_type_change", {
                      value: "percentage",
                    });

                    setMultiType("percentage");
                  }}
                />
                Porcentaje
              </label>

              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="radio"
                  checked={multiType === "letters"}
                  onChange={() => {
                    trackEvent("grade_type_change", {
                      value: "letters",
                    });

                    setMultiType("letters");
                  }}
                />
                Letras
              </label>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold">
                    Evaluación
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-bold">
                    {multiType === "percentage"
                      ? "Nota (%)"
                      : "Letra"}
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-bold">
                    Peso
                  </th>

                  <th className="px-4 py-3"></th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-200"
                  >
                    <td className="p-3">
                      <input
                        type="text"
                        value={row.name}
                        onChange={(e) =>
                          updateRow(index, "name", e.target.value)
                        }
                        className="h-11 w-full rounded-xl border border-slate-300 px-3"
                      />
                    </td>

                    <td className="p-3">
                      {multiType === "percentage" ? (
                        <input
                          type="number"
                          value={row.grade}
                          onChange={(e) =>
                            updateRow(
                              index,
                              "grade",
                              e.target.value
                            )
                          }
                          className="h-11 w-full rounded-xl border border-slate-300 px-3"
                        />
                      ) : (
                        <select
                          value={row.grade}
                          onChange={(e) => {
                            const value = e.target.value;

                            trackEvent("evaluation_letter_change", {
                              evaluation_number: index + 1,
                              value,
                            });

                            updateRow(index, "grade", value);
                          }}
                          className="h-11 w-full rounded-xl border border-slate-300 px-3"
                        >
                          <option value="">Seleccionar</option>

                          {gradeOptions.map((grade) => (
                            <option
                              key={grade.label}
                              value={grade.value}
                            >
                              {grade.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </td>

                    <td className="p-3">
                      <input
                        type="number"
                        value={row.weight}
                        onChange={(e) =>
                          updateRow(
                            index,
                            "weight",
                            e.target.value
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-300 px-3"
                      />
                    </td>

                    <td className="p-3">
                      <button
                        onClick={() => removeRow(index)}
                        className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-600"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}

                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 font-bold">
                    Examen Final
                  </td>

                  <td className="p-4 text-sm text-slate-500">
                    Nota necesaria
                  </td>

                  <td className="p-4">
                    <input
                      type="number"
                      value={multiFinalWeight}
                      onChange={(e) =>
                        setMultiFinalWeight(e.target.value)
                      }
                      className="h-11 w-full rounded-xl border border-slate-300 px-3"
                    />
                  </td>

                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-700">
              Tu nota objetivo en la materia
            </label>

            <div className="grid gap-3 md:grid-cols-[1fr_150px]">
              <input
                type="number"
                value={multiTargetGrade}
                onChange={(e) =>
                  setMultiTargetGrade(e.target.value)
                }
                placeholder="90"
                className="h-12 rounded-xl border border-slate-300 px-4"
              />

              <select
                onChange={(e) => {
                  const value = e.target.value;

                  trackEvent("multi_target_grade_letter", {
                    value,
                  });

                  setMultiTargetGrade(value);
                }}
                className="h-12 rounded-xl border border-slate-300 px-3"
              >
                <option value="">Letra</option>

                {gradeOptions.map((grade) => (
                  <option key={grade.label} value={grade.value}>
                    {grade.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={addRow}
              className="rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-200"
            >
              + Agregar Evaluación
            </button>

            <button
              onClick={calculateMultiFinal}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Calcular Nota Final Necesaria
            </button>

            <button
              onClick={resetMulti}
              className="rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-200"
            >
              Restablecer
            </button>
          </div>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <p className="text-sm font-semibold text-slate-700 mb-2">
              Nota necesaria en el examen final para alcanzar el objetivo:
            </p>

            <div className="text-4xl font-bold tracking-tight text-green-600">
              {multiResult}
            </div>

            <p className="mt-3 text-sm text-slate-600">
              {multiMessage}
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
}