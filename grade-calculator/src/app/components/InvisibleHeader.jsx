"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

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
              <Link
                href="/calculadora-de-notas/"
                className="block px-4 py-3 hover:bg-[#f3f6fb]"
                prefetch={false}
              >
                Calculadora de Notas
              </Link>
              <Link
                href="/nota-final/"
                className="block px-4 py-3 hover:bg-[#f3f6fb]"
                prefetch={false}
              >
                Calculadora de Nota Final
              </Link>
              <Link
                href="/calculadora-gpa/"
                className="block px-4 py-3 hover:bg-[#f3f6fb]"
                prefetch={false}
              >
                Calculadora GPA
              </Link>
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
        <nav className="md:hidden fixed inset-0 bg-black/90 flex flex-col justify-center items-center gap-6 z-40 text-white">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 text-2xl font-bold"
          >
            Calculadoras <FiChevronDown />
          </button>

          {dropdownOpen && (
            <div className="flex flex-col gap-2 mt-2 text-center">
              <Link href="/calculadora-de-notas/" onClick={() => setMobileOpen(false)} prefetch={false}>
                Calculadora de Notas
              </Link>
              <Link href="/nota-final/" onClick={() => setMobileOpen(false)} prefetch={false}>
                Calculadora de Nota Final
              </Link>
              <Link href="/calculadora-gpa/" onClick={() => setMobileOpen(false)} prefetch={false}>
                Calculadora GPA
              </Link>
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