import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import { LanguageProvider } from "@/hooks/LanguageContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// this layout is used for all pages in the app.
export const metadata: Metadata = {
  title: "Ariel Navas | Software Developer Portfolio",
  description: "Explore the professional portfolio of Ariel Navas, a passionate software developer specializing in modern web technologies, clean code, and user-centric design.",
  icons: {
    icon: "/AN_favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        </LanguageProvider>
      </body>
    </html>
  );
}
