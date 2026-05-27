"use client";

import { useState } from "react";

const gradeOptions = [
  { label: "A+", value: 4.0 },
  { label: "A", value: 4.0 },
  { label: "A-", value: 3.7 },
  { label: "B+", value: 3.3 },
  { label: "B", value: 3.0 },
  { label: "B-", value: 2.7 },
  { label: "C+", value: 2.3 },
  { label: "C", value: 2.0 },
  { label: "C-", value: 1.7 },
  { label: "D+", value: 1.3 },
  { label: "D", value: 1.0 },
  { label: "F", value: 0 },
];

const weightOptions = [
  { label: "Regular", value: 0 },
  { label: "Honors +0.5", value: 0.5 },
  { label: "AP / IB +1.0", value: 1 },
];

const createCourse = () => ({
  name: "",
  grade: "",
  credits: "",
  weight: "0",
});

const createSemester = (id) => ({
  id,
  courses: Array.from({ length: 5 }, () => createCourse()),
  semesterGPA: "0.00",
});

export default function GpaCalculatorLab() {
  const [weighted, setWeighted] = useState(false);

  const [semesters, setSemesters] = useState([createSemester(1)]);

  const [result, setResult] = useState({
    cumulativeGPA: "0.00",
    totalCredits: "0",
    totalCourses: "0",
    gpaType: "Regular",
    message: "Ingresa tus materias y haz clic en calcular para ver tu GPA.",
  });

  const updateCourse = (semesterId, courseIndex, field, value) => {
    setSemesters((prev) =>
      prev.map((semester) => {
        if (semester.id !== semesterId) return semester;

        const updatedCourses = [...semester.courses];

        updatedCourses[courseIndex] = {
          ...updatedCourses[courseIndex],
          [field]: value,
        };

        return {
          ...semester,
          courses: updatedCourses,
        };
      })
    );
  };

  const addSemester = () => {
    setSemesters((prev) => [
      ...prev,
      createSemester(prev.length + 1),
    ]);
  };

  const removeSemester = (semesterId) => {
    if (semesters.length <= 1) {
      alert("Se requiere al menos un semestre.");
      return;
    }

    setSemesters((prev) =>
      prev.filter((semester) => semester.id !== semesterId)
    );
  };

  const addCourse = (semesterId) => {
    setSemesters((prev) =>
      prev.map((semester) => {
        if (semester.id !== semesterId) return semester;

        return {
          ...semester,
          courses: [...semester.courses, createCourse()],
        };
      })
    );
  };

  const removeCourse = (semesterId, courseIndex) => {
    setSemesters((prev) =>
      prev.map((semester) => {
        if (semester.id !== semesterId) return semester;

        if (semester.courses.length <= 1) {
          alert("Se requiere al menos una materia.");
          return semester;
        }

        return {
          ...semester,
          courses: semester.courses.filter(
            (_, index) => index !== courseIndex
          ),
        };
      })
    );
  };

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    let totalCourses = 0;

    const updatedSemesters = semesters.map((semester) => {
      let semesterGradePoints = 0;
      let semesterCredits = 0;

      semester.courses.forEach((course) => {
        if (course.grade !== "" && course.credits !== "") {
          const baseGrade = Number(course.grade);
          const credits = Number(course.credits);
          const weightBonus = weighted ? Number(course.weight) : 0;

          if (credits > 0) {
            let finalGradePoint = baseGrade + weightBonus;

            finalGradePoint = weighted
              ? Math.min(finalGradePoint, 5.0)
              : Math.min(finalGradePoint, 4.0);

            semesterGradePoints += finalGradePoint * credits;
            semesterCredits += credits;

            totalGradePoints += finalGradePoint * credits;
            totalCreditHours += credits;
            totalCourses++;
          }
        }
      });

      const semesterGPA =
        semesterCredits > 0
          ? (semesterGradePoints / semesterCredits).toFixed(2)
          : "0.00";

      return {
        ...semester,
        semesterGPA,
      };
    });

    setSemesters(updatedSemesters);

    const cumulative =
      totalCreditHours > 0
        ? (totalGradePoints / totalCreditHours).toFixed(2)
        : "0.00";

    setResult({
      cumulativeGPA: cumulative,
      totalCredits: totalCreditHours
        .toFixed(1)
        .replace(".0", ""),
      totalCourses,
      gpaType: weighted ? "Ponderado" : "Regular",
      message:
        totalCourses === 0
          ? "Ingresa tus materias y haz clic en calcular para ver tu GPA."
          : `Tu GPA acumulado ${
              weighted ? "ponderado" : "regular"
            } es ${cumulative}.`,
    });
  };

  const resetAll = () => {
    setWeighted(false);

    setSemesters([createSemester(1)]);

    setResult({
      cumulativeGPA: "0.00",
      totalCredits: "0",
      totalCourses: "0",
      gpaType: "Regular",
      message: "Ingresa tus materias y haz clic en calcular para ver tu GPA.",
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-[14px] shadow-[0_8px_24px_rgba(15,23,42,0.06)] overflow-hidden">
      <div className="px-5 py-[18px] border-b border-gray-200">
        <h2 className="text-2xl font-black tracking-[-0.03em] mb-1">
          Calcula tu GPA
        </h2>

        <p className="text-sm text-[#667085]">
          Agrega materias, elige calificaciones, ingresa créditos y calcula tu GPA.
        </p>
      </div>

      <div className="p-5">
        <div className="flex border-b border-gray-200 mb-[18px] gap-[22px] overflow-x-auto">
          <span className="py-3 text-sm font-extrabold text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
            Calculadora GPA
          </span>
        </div>

        <div className="flex justify-between items-center gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-2 rounded-full text-sm font-extrabold text-[#374151]">
            <input
              type="checkbox"
              checked={weighted}
              onChange={(e) => setWeighted(e.target.checked)}
            />

            <label>GPA Ponderado</label>
          </div>
        </div>

        <div className="space-y-[18px]">
          {semesters.map((semester) => (
            <div
              key={semester.id}
              className="border border-gray-200 rounded-[14px] overflow-hidden bg-white"
            >
              <div className="flex justify-between items-center gap-3 px-4 py-[14px] bg-[#f8fafc] border-b border-gray-200">
                <h3 className="text-[19px] font-black tracking-[-0.02em]">
                  Semestre {semester.id}
                </h3>

                <button
                  onClick={() => removeSemester(semester.id)}
                  className="border-0 bg-red-100 text-red-700 rounded-[9px] px-[10px] py-2 font-extrabold"
                >
                  Eliminar
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse bg-white">
                  <thead>
                    <tr>
                      <th className="border-b border-gray-200 p-[10px] text-left text-sm font-extrabold text-[#374151]">
                        Nombre de la Materia
                      </th>

                      <th className="border-b border-gray-200 p-[10px] text-left text-sm font-extrabold text-[#374151]">
                        Calificación
                      </th>

                      <th className="border-b border-gray-200 p-[10px] text-left text-sm font-extrabold text-[#374151]">
                        Créditos
                      </th>

                      <th className="border-b border-gray-200 p-[10px] text-left text-sm font-extrabold text-[#374151]">
                        Peso
                      </th>

                      <th className="border-b border-gray-200 p-[10px]" />
                    </tr>
                  </thead>

                  <tbody>
                    {semester.courses.map((course, index) => (
                      <tr key={index}>
                        <td className="border-b border-gray-200 p-[10px]">
                          <input
                            type="text"
                            value={course.name}
                            onChange={(e) =>
                              updateCourse(
                                semester.id,
                                index,
                                "name",
                                e.target.value
                              )
                            }
                            placeholder="Nombre de la materia"
                            className="w-full border border-gray-200 rounded-[9px] px-[10px] py-[10px] text-[15px] outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]"
                          />
                        </td>

                        <td className="border-b border-gray-200 p-[10px]">
                          <select
                            value={course.grade}
                            onChange={(e) =>
                              updateCourse(
                                semester.id,
                                index,
                                "grade",
                                e.target.value
                              )
                            }
                            className="w-full border border-gray-200 rounded-[9px] px-[10px] py-[10px] text-[15px] outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]"
                          >
                            <option value="">Calificación</option>

                            {gradeOptions.map((grade) => (
                              <option
                                key={grade.label}
                                value={grade.value}
                              >
                                {grade.label}
                              </option>
                            ))}
                          </select>
                        </td>

                        <td className="border-b border-gray-200 p-[10px]">
                          <input
                            type="number"
                            value={course.credits}
                            onChange={(e) =>
                              updateCourse(
                                semester.id,
                                index,
                                "credits",
                                e.target.value
                              )
                            }
                            placeholder="3"
                            min="0"
                            className="w-full border border-gray-200 rounded-[9px] px-[10px] py-[10px] text-[15px] outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]"
                          />
                        </td>

                        <td className="border-b border-gray-200 p-[10px]">
                          <select
                            value={course.weight}
                            disabled={!weighted}
                            onChange={(e) =>
                              updateCourse(
                                semester.id,
                                index,
                                "weight",
                                e.target.value
                              )
                            }
                            className="w-full border border-gray-200 rounded-[9px] px-[10px] py-[10px] text-[15px] outline-none disabled:bg-gray-100 disabled:text-gray-400 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]"
                          >
                            {weightOptions.map((weight) => (
                              <option
                                key={weight.label}
                                value={weight.value}
                              >
                                {weight.label}
                              </option>
                            ))}
                          </select>
                        </td>

                        <td className="border-b border-gray-200 p-[10px]">
                          <button
                            onClick={() =>
                              removeCourse(semester.id, index)
                            }
                            className="border-0 bg-red-100 text-red-700 rounded-lg px-[10px] py-[9px] font-extrabold"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center gap-3 p-[14px] flex-wrap">
                <button
                  onClick={() => addCourse(semester.id)}
                  className="border-0 cursor-pointer rounded-[10px] px-4 py-3 font-extrabold text-[15px] bg-[#eef2f7] text-[#374151]"
                >
                  + Agregar Materia
                </button>

                <div className="bg-[#f0fdf4] border border-[#bbf7d0] text-[#14532d] rounded-xl px-[14px] py-3 font-extrabold">
                  GPA del Semestre:{" "}
                  <span className="text-[#16a34a] text-xl font-black">
                    {semester.semesterGPA}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-[10px] my-[18px] flex-wrap">
          <button
            onClick={addSemester}
            className="border-0 cursor-pointer rounded-[10px] px-4 py-3 font-extrabold text-[15px] bg-[#eef2f7] text-[#374151]"
          >
            + Agregar Semestre
          </button>

          <button
            onClick={calculateGPA}
            className="flex-1 border-0 cursor-pointer rounded-[10px] px-4 py-3 font-extrabold text-[15px] bg-blue-600 text-white hover:bg-blue-700"
          >
            Calcular GPA
          </button>

          <button
            onClick={resetAll}
            className="border-0 cursor-pointer rounded-[10px] px-4 py-3 font-extrabold text-[15px] bg-[#eef2f7] text-[#374151]"
          >
            Restablecer
          </button>
        </div>

        <div className="border border-gray-200 bg-[#f8fafc] rounded-[14px] p-[18px] text-center">
          <div className="w-[132px] h-[132px] rounded-full border-[12px] border-gray-200 bg-white mx-auto my-[10px] grid place-items-center">
            <div>
              <strong className="text-[32px] leading-none tracking-[-0.04em] block">
                {result.cumulativeGPA}
              </strong>

              <span className="block text-xs text-[#667085] font-bold mt-1">
                GPA Acumulado
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-[10px] mt-[14px]">
            <div className="bg-white border border-gray-200 rounded-[10px] p-[10px]">
              <span className="block text-[#667085] text-xs font-bold mb-1">
                Créditos Totales
              </span>

              <strong className="text-[17px]">
                {result.totalCredits}
              </strong>
            </div>

            <div className="bg-white border border-gray-200 rounded-[10px] p-[10px]">
              <span className="block text-[#667085] text-xs font-bold mb-1">
                Materias Contadas
              </span>

              <strong className="text-[17px]">
                {result.totalCourses}
              </strong>
            </div>

            <div className="bg-white border border-gray-200 rounded-[10px] p-[10px]">
              <span className="block text-[#667085] text-xs font-bold mb-1">
                Tipo de GPA
              </span>

              <strong className="text-[17px]">
                {result.gpaType}
              </strong>
            </div>
          </div>

          <p className="mt-3 text-[#374151] font-semibold text-sm">
            {result.message}
          </p>
        </div>
      </div>
    </div>
  );
}