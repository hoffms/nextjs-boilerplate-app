import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Boilerplate - Modern UI",
  description: "A beautiful Next.js boilerplate with shadcn/ui, Tailwind CSS, and Radix UI components",
  keywords: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen bg-background sm:bg-muted flex w-full flex-col overflow-hidden">
          {/* Header */}
          <header className="flex h-14 shrink-0 items-center justify-between gap-3 px-3 py-2 sm:h-11 sm:px-2">
            <div className="flex min-w-0 flex-1 items-center">
              <a 
                className="focus-visible:ring-offset-background inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap text-nowrap border font-medium outline-none ring-blue-600 transition-[background,border-color,color,transform,opacity,box-shadow] focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:ring-0 has-[:focus-visible]:ring-2 aria-disabled:cursor-not-allowed aria-disabled:ring-0 [&>svg]:pointer-events-none [_svg]:shrink-0 border-transparent bg-transparent text-gray-900 hover:border-transparent focus:border-transparent focus-visible:border-transparent disabled:border-transparent disabled:bg-transparent disabled:text-gray-400 aria-disabled:border-transparent aria-disabled:bg-transparent aria-disabled:text-gray-400 h-10 px-4 text-sm has-[>kbd]:gap-3 has-[>kbd]:pr-[6px] rounded-lg border-none hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent has-[>svg]:p-0 [&>svg]:size-8 [&>svg]:w-7 mr-1" 
                href="/"
              >
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">N</span>
                </div>
                <span className="font-bold text-xl">NextBoiler</span>
              </a>
            </div>
            
            <div className="flex justify-end p-2">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-7 px-3 text-sm">
                  Sign In
                </Button>
                <Button size="sm" className="h-7 px-3 text-sm">
                  Sign Up
                </Button>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="h-full overflow-hidden p-2 pt-0">
            <main className="flex-1 bg-background
             overflow-auto h-full rounded-lg border">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
