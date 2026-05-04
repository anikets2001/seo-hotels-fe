import { Lato } from "next/font/google";
import "./globals.css";
import '../styles/custom.css';

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Yatra - Hotels SEO",
  description: "Yatra is a hotels SEO platform that allows you to book hotels all over the world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
