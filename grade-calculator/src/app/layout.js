import './globals.css';
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://calcunotas.com"),

  title: "CalcuNotas",
  description:
    "Calculadoras de notas gratuitas en línea para GPA, nota final, nota semestral, calificaciones de exámenes y tablas de calificación rápida.",

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: "BSDpppqt4ZVC2fn1zEG1TJQhVVhfR_TVwBr8R8PNAmg",
  },

  openGraph: {
    title: "CalcuNotas",
    description:
      "Calculadoras de notas gratuitas en línea para GPA, nota final, nota semestral, calificaciones de exámenes, notas ponderadas y tablas de calificación rápida.",
    url: "https://calcunotas.com",
    siteName: "CalcuNotas",
    type: "website",
    images: [
      {
        url: "/Logo.webp",
        width: 1200,
        height: 630,
        alt: "CalcuNotas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CalcuNotas",
    description:
      "Calculadoras de notas gratuitas en línea para GPA, nota final, nota semestral, calificaciones de exámenes y tablas de calificación rápida.",
    images: ["/Logo.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-black">

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="qat28EmknmEno13hJGEHsw"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HSSJ22GS14"
          strategy="afterInteractive"
        />
        {/* Google Adsence */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7312405592713142"
          crossorigin="anonymous"></script>


        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HSSJ22GS14');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}