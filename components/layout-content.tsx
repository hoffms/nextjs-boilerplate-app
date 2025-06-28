"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { SherryLogo } from "@/components/sherry-logo";

interface LayoutContentProps {
  children: React.ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  return (
    <div className="h-screen bg-background sm:bg-muted flex w-full flex-col overflow-hidden">
      {/* Header */}
      <header className="flex h-14 shrink-0 items-center justify-between gap-3 px-3 py-2 sm:h-11 sm:px-2">
        <div className="flex min-w-0 flex-1 items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-2 h-8 w-8 p-0 transition-transform duration-400 hover:scale-105"
          >
            <Menu size={16} className={`transition-transform duration-400 ${sidebarOpen ? 'rotate-180' : ''}`} />
          </Button>
          <a 
            className="focus-visible:ring-offset-background inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap text-nowrap border font-medium outline-none ring-blue-600 transition-[background,border-color,color,transform,opacity,box-shadow] focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:ring-0 has-[:focus-visible]:ring-2 aria-disabled:cursor-not-allowed aria-disabled:ring-0 [&>svg]:pointer-events-none [_svg]:shrink-0 border-transparent bg-transparent text-gray-900 hover:border-transparent focus:border-transparent focus-visible:border-transparent disabled:border-transparent disabled:bg-transparent disabled:text-gray-400 aria-disabled:border-transparent aria-disabled:bg-transparent aria-disabled:text-gray-400 h-10 px-4 text-sm has-[>kbd]:gap-3 has-[>kbd]:pr-[6px] rounded-lg border-none hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent has-[>svg]:p-0 [&>svg]:size-8 [&>svg]:w-7 mr-1" 
            href="/"
          >
            <div className="h-8 w-8 flex items-center justify-center">
              <SherryLogo width={32} height={32} />
            </div>
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

      {/* Main content with sidebar */}
      <div className="flex h-full overflow-hidden relative">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Backdrop overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-10 sm:hidden transition-opacity duration-400"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <div className={`flex-1 h-full overflow-hidden p-2 pt-0 transition-all duration-400 ease-in-out ${
          sidebarOpen ? 'sm:ml-0' : 'sm:ml-0'
        }`}>
          <main className={`flex-1 bg-background overflow-auto h-full rounded-lg border transition-opacity duration-400 ease-in-out ${
            sidebarOpen ? 'opacity-100' : 'opacity-100'
          }`} style={{
            transitionDelay: isInitialized && sidebarOpen ? '440ms' : '0ms'
          }}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 