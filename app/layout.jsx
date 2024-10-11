// import localFont from "next/font/local";
import "./globals.css";

import DockBar from "@/components/DockBar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "George Portfolio",
  description: "my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DockBar/>
        {children}
      </body>
    </html>
  );
}


