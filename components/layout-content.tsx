"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomAvatar } from "@/components/ui/custom-avatar";
import { Separator } from "@/components/ui/separator";
import { Menu, ChevronDown } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { SherryLogo } from "@/components/sherry-logo";
import { ThemeToggle } from "@/components/theme-toggle";

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
            className="mr-2 h-8 w-8 p-0 transition-transform duration-300 hover:scale-105"
          >
            <Menu size={16} className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
          </Button>

          <a href="/" className="mr-3">
            <SherryLogo width={20} height={20} />
          </a>

          <Separator orientation="vertical" className="h-6 mr-3" />

          {/* User Profile Section */}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2"
          >
            <CustomAvatar 
              value="Personal User" 
              size="sm" 
              className="mr-2"
            />
            <div className="flex min-w-0 flex-1 items-center truncate text-start text-sm font-medium">
              <div className="max-w-20 truncate">Personal</div>
              <Badge variant="sherrypurpleLight" className="ml-1.5 h-[16px] px-1.5 text-xs">
                Beta
              </Badge>
            </div>
            <ChevronDown className="ml-1 text-gray-500" size={14} />
          </Button>
        </div>
        
        <div className="flex justify-end p-2">
          <div className="flex gap-2 items-center">
            <ThemeToggle />
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
            className="fixed inset-0 bg-black/20 z-10 sm:hidden transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <div className="flex-1 h-full overflow-hidden p-2 pt-0 transition-all duration-300 ease-in-out">
          <main className="flex-1 bg-background overflow-auto h-full rounded-lg border transition-opacity duration-300 ease-in-out">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 