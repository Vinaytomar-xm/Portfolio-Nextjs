import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export const metadata = {
  metadataBase: new URL("https://vtomar-portfolio.vercel.app"),
  title: "Vinay-Portfolio",
  description:
    "Portfolio of Vinay Singh Tomar, a B.Tech CSE student and a Web Developer.",
  openGraph: {
    title: "Vinay Singh Tomar - Portfolio",
    description:
      "Portfolio of Vinay Singh Tomar, a B.Tech CSE student and a Web Developer.",
    images: ["/vinay.jpeg"],
    url: "https://vtomar-portfolio.vercel.app/",
    type: "website",
  },
  icons: {
    icon: "/vinay2.png",
    apple: "/vinay2.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
