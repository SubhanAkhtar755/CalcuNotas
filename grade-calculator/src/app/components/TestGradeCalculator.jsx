"use client";

import { useState } from "react";

const GA_EVENT = "TestGradeCalculator";

function trackGA4(action, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", GA_EVENT, {
      action,
      ...params,
    });
  }
}

export default function TestGradeCalculator() {
  const [currentMode, setCurrentMode] = useState("wrong");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [gradeScale, setGradeScale] = useState("standard");

  const [result, setResult] = useState({
    percent: "--%",
    letter: "--",
    correct: "--",
    wrong: "--",
    status: "--",
    message:
      "Ingresa los detalles de tu examen y haz clic en calcular para ver tu resultado.",
    progress: 0,
  });

  const getLabels = () => {
    if (currentMode === "correct") {
      return {
        labelOne: "Total de Preguntas",
        labelTwo: "Respuestas Correctas",
        placeholderOne: "Ejemplo: 50",
        placeholderTwo: "Ejemplo: 45",
      };
    }

    if (currentMode === "points") {
      return {
        labelOne: "Puntos Totales",
        labelTwo: "Puntos Obtenidos",
        placeholderOne: "Ejemplo: 100",
        placeholderTwo: "Ejemplo: 87",
      };
    }

    return {
      labelOne: "Total de Preguntas",
      labelTwo: "Respuestas Incorrectas",
      placeholderOne: "Ejemplo: 50",
      placeholderTwo: "Ejemplo: 5",
    };
  };

  const labels = getLabels();

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

  function getStatus(percent) {
    if (percent >= 90) return "Excelente";
    if (percent >= 80) return "Bueno";
    if (percent >= 70) return "Aprobado";
    if (percent >= 60) return "Necesita Mejorar";
    return "Revisar";
  }

  function getMessage(percent, letter) {
    if (percent >= 90) {
      return `Resultado excelente. Tu calificación es ${percent.toFixed(
        2
      )}% con letra ${letter}.`;
    }

    if (percent >= 80) {
      return `Buena puntuación. Tu calificación es ${percent.toFixed(
        2
      )}% con letra ${letter}.`;
    }

    if (percent >= 70) {
      return `Aprobado. Tu calificación es ${percent.toFixed(
        2
      )}% con letra ${letter}.`;
    }

    if (percent >= 60) {
      return "Tu puntuación está cerca, pero necesitas más práctica para mejorar.";
    }

    return "Esta puntuación necesita revisión. Estudia los temas fallados e inténtalo de nuevo.";
  }

  const calculateGrade = () => {
    trackGA4("calculate", {
      calculator_mode: currentMode,
      grade_scale: gradeScale,
    });

    const firstValue = Number(inputOne);
    const secondValue = Number(inputTwo);

    if (!firstValue || firstValue <= 0) {
      alert("Por favor ingresa un primer valor válido.");
      return;
    }

    if (secondValue < 0) {
      alert("El segundo valor no puede ser negativo.");
      return;
    }

    let correct = 0;
    let wrong = 0;
    let percent = 0;

    if (currentMode === "wrong") {
      if (secondValue > firstValue) {
        alert(
          "Las respuestas incorrectas no pueden ser más que el total de preguntas."
        );
        return;
      }

      correct = firstValue - secondValue;
      wrong = secondValue;
      percent = (correct / firstValue) * 100;
    }

    if (currentMode === "correct") {
      if (secondValue > firstValue) {
        alert(
          "Las respuestas correctas no pueden ser más que el total de preguntas."
        );
        return;
      }

      correct = secondValue;
      wrong = firstValue - secondValue;
      percent = (correct / firstValue) * 100;
    }

    if (currentMode === "points") {
      if (secondValue > firstValue) {
        alert(
          "Los puntos obtenidos no pueden ser más que el total de puntos."
        );
        return;
      }

      correct = `${secondValue} pts`;
      wrong = `${firstValue - secondValue} pts`;
      percent = (secondValue / firstValue) * 100;
    }

    const letter = getLetterGrade(percent);

    setResult({
      percent: `${percent.toFixed(2)}%`,
      letter,
      correct,
      wrong,
      status: getStatus(percent),
      message: getMessage(percent, letter),
      progress: Math.min(percent, 100),
    });
  };

  const resetCalculator = () => {
    trackGA4("reset", {
      calculator_mode: currentMode,
    });

    setInputOne("");
    setInputTwo("");

    setResult({
      percent: "--%",
      letter: "--",
      correct: "--",
      wrong: "--",
      status: "--",
      message:
        "Ingresa los detalles de tu examen y haz clic en calcular para ver tu resultado.",
      progress: 0,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-[14px] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-[24px] font-bold tracking-[-0.03em] mb-1">
          Calcula tu Nota del Examen
        </h2>

        <p className="text-sm text-gray-500">
          Selecciona el tipo de cálculo, ingresa los detalles del examen y
          obtén tu calificación al instante.
        </p>
      </div>

      <div className="p-5">
        <div className="grid md:grid-cols-3 gap-2 mb-5">
          {["wrong", "correct", "points"].map((mode) => (
            <button
              key={mode}
              onClick={() => {
                trackGA4("change_mode", {
                  calculator_mode: mode,
                });

                setCurrentMode(mode);
                resetCalculator();
              }}
              className={`rounded-[10px] px-3 py-3 text-[13px] font-bold border transition ${
                currentMode === mode
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-200"
              }`}
            >
              {mode === "wrong"
                ? "Respuestas Incorrectas"
                : mode === "correct"
                ? "Respuestas Correctas"
                : "Puntos"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              {labels.labelOne}
            </label>

            <input
              type="number"
              value={inputOne}
              onChange={(e) => setInputOne(e.target.value)}
              placeholder={labels.placeholderOne}
              className="w-full border border-gray-200 rounded-[10px] px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              {labels.labelTwo}
            </label>

            <input
              type="number"
              value={inputTwo}
              onChange={(e) => setInputTwo(e.target.value)}
              placeholder={labels.placeholderTwo}
              className="w-full border border-gray-200 rounded-[10px] px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold mb-2 text-gray-700">
              Escala de Calificación
            </label>

            <select
              value={gradeScale}
              onChange={(e) => {
                const newScale = e.target.value;

                trackGA4("change_grade_scale", {
                  grade_scale: newScale,
                  calculator_mode: currentMode,
                });

                setGradeScale(newScale);
              }}
              className="w-full border border-gray-200 rounded-[10px] px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="standard">
                Escala Estándar: A = 90%+
              </option>

              <option value="plusminus">
                Escala con Más/Menos: A-, B+, B-
              </option>

              <option value="easy">
                Escala Fácil: A = 85%+
              </option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 my-5">
          <button
            onClick={calculateGrade}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-[10px] px-4 py-3 font-extrabold"
          >
            Calcular
          </button>

          <button
            onClick={resetCalculator}
            className="bg-gray-100 text-gray-700 rounded-[10px] px-4 py-3 font-extrabold"
          >
            Restablecer
          </button>
        </div>


        <div className="border border-gray-200 bg-slate-50 rounded-[14px] p-4">
          <div className="grid md:grid-cols-[1fr_92px] gap-4 items-center mb-4">
            <div>
              <div className="text-xs text-gray-500 font-bold mb-1">
                Tu Porcentaje de Calificación
              </div>

              <div className="text-[42px] font-black tracking-[-0.05em] leading-none">
                {result.percent}
              </div>
            </div>

            <div className="w-[82px] h-[82px] rounded-2xl bg-white border border-gray-200 grid place-items-center text-[30px] font-black text-blue-600">
              {result.letter}
            </div>
          </div>

          <div className="h-[10px] bg-gray-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${result.progress}%` }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-3">
            <div className="bg-white border border-gray-200 rounded-[10px] p-3">
              <span className="block text-xs text-gray-500 font-bold">
                Correctas
              </span>

              <strong className="text-[17px]">{result.correct}</strong>
            </div>

            <div className="bg-white border border-gray-200 rounded-[10px] p-3">
              <span className="block text-xs text-gray-500 font-bold">
                Incorrectas
              </span>

              <strong className="text-[17px]">{result.wrong}</strong>
            </div>

            <div className="bg-white border border-gray-200 rounded-[10px] p-3">
              <span className="block text-xs text-gray-500 font-bold">
                Estado
              </span>

              <strong className="text-[17px]">{result.status}</strong>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-700">
            {result.message}
          </p>
        </div>

       
      </div>
    </div>
  );
}