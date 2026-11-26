import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olimjon Murtazoyev | Full-Stack Developer",
  description: "Portfolio of Olimjon Murtazoyev, a Full-Stack Developer (Node.js, React / Next.js, PostgreSQL) building education-sector products: EduCRM and StudyNext.",
  keywords: ["Olimjon Murtazoyev", "Full-Stack Developer", "Node.js", "React", "Next.js", "PostgreSQL", "EduCRM", "StudyNext", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
