"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

// All calculator pages (from sitemap)
const CALCULATOR_LINKS = [
  ["Calculadora de Notas", "/calculadora-de-notas/"],
  ["Calculadora de Nota Final", "/nota-final/"],
  ["Calculadora GPA", "/calculadora-gpa/"],
  ["GPA Acumulado", "/gpa-acumulado/"],
  ["Calificador Rápido", "/calificador-rapido/"],
  ["Calculadora de Clase", "/calculadora-clase/"],
  ["Calculadora Profesores", "/calculadora-profesores/"],
  ["Nota Semestral", "/nota-semestral/"],
];

// E-E-A-T trust pages, shown on the right of the header
const EEAT_LINKS = [
  ["Sobre Nosotros", "/sobre-nosotros/"],
  ["Privacidad", "/privacidad/"],
  ["Términos", "/terminos/"],
  ["Contacto", "/contacto/"],
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="bg-white border-b border-[#e5e7eb] shadow-sm sticky top-0 z-50">
      {/* E-E-A-T strip - top right, desktop only */}
      <div className="hidden md:flex items-center justify-end gap-5 px-8 pt-2 text-xs text-gray-500 border-b border-gray-100">
        {EEAT_LINKS.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            prefetch={false}
            className="hover:text-[#2563eb] transition pb-1"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="px-8 mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#2563eb] text-white rounded-lg flex items-center justify-center font-bold text-lg">
            C
          </div>
          <span className="text-[28px] font-bold text-gray-900">
            CalcuNotas
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-gray-800">
          {/* Dropdown */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="flex items-center gap-1 hover:text-[#2563eb] transition text-lg font-semibold">
              Calculadoras de Notas
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white border border-[#e5e7eb] rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
                dropdownOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              {CALCULATOR_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-3 hover:bg-[#f3f6fb]"
                  prefetch={false}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog/"
            prefetch={false}
            className="hover:text-[#2563eb] transition text-lg font-semibold"
          >
            Blog
          </Link>

          <Link
            href="/faq/"
            prefetch={false}
            className="hover:text-[#2563eb] transition text-lg font-semibold"
          >
            FAQ
          </Link>
        </nav>

        {/* Button */}
        <button
          onClick={scrollToCalculator}
          className="hidden md:block bg-[#2563eb] text-white px-5 py-2 rounded-lg font-bold hover:bg-[#1d4ed8] transition"
        >
          Calcular Nota
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 z-50"
        >
          {mobileOpen ? <FiX className="text-white" size={24} /> : <FiMenu  size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden fixed inset-0 bg-black/90 flex flex-col justify-center items-center gap-6 z-40 text-white overflow-y-auto py-10">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 text-2xl font-bold"
          >
            Calculadoras <FiChevronDown />
          </button>

          {dropdownOpen && (
            <div className="flex flex-col gap-2 mt-2 text-center">
              {CALCULATOR_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  prefetch={false}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/blog/"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold"
            prefetch={false}
          >
            Blog
          </Link>

          <Link
            href="/faq/"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold"
            prefetch={false}
          >
            FAQ
          </Link>

          {/* E-E-A-T links - mobile menu */}
          <div className="flex flex-col gap-2 mt-4 text-center text-sm text-gray-300">
            {EEAT_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                prefetch={false}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              scrollToCalculator();
            }}
            className="mt-4 bg-[#2563eb] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#1d4ed8]"
          >
            Calcular Nota
          </button>
        </nav>
      )}
    </header>
  );
}