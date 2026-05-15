import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olimjon Murtazoyev | Full-Stack Developer",
  description: "Portfolio of Olimjon Murtazoyev, a passionate Node.js & React.js Full-Stack Developer experienced in building scalable applications, CRM systems, and LMS platforms.",
  keywords: ["Olimjon Murtazoyev", "Full-Stack Developer", "Node.js", "React.js", "PostgreSQL", "Portfolio"],
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
