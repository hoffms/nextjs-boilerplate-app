"use client";

import { Button } from "@/components/ui/button";
import { CustomAvatar } from "@/components/custom/custom-avatar";
import { SherryLogo } from "@/components/custom/sherry-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { sidebarSections } from "@/components/sidebar-config";
import { usePathname } from "next/navigation";
import UserAvatarMenu from "@/components/custom/user-avatar-menu";
import { WorkspaceSelector } from "./workspace-selector";

interface HeaderProps {
  // Simple boolean props - much easier to understand
  showLogo?: boolean;
  showAuthButtons?: boolean;
  showUserMenu?: boolean;
  showNotifications?: boolean;
  showThemeToggle?: boolean;
  
  // User data
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  
  // Workspace data
  currentWorkspace?: string;
  workspaces?: Array<{ id: string; name: string; type: string }>;
  
  // Action handlers
  onSignIn?: () => void;
  onSignOut?: () => void;
  onWorkspaceChange?: (workspaceId: string) => void;
  onCreateWorkspace?: () => void;
  onWorkspaceSettings?: () => void;
  
  // Responsive behavior
  isMobile?: boolean;
  className?: string;
}

export function Header({
  showLogo = true,
  showAuthButtons = true,
  showUserMenu = false,
  showNotifications = false,
  showThemeToggle = true,
  user,
  currentWorkspace = "Personal",
  workspaces = [],
  onSignIn,
  onSignOut,
  onWorkspaceChange,
  onCreateWorkspace,
  onWorkspaceSettings,
  isMobile = false,
  className = "",
}: HeaderProps) {
  const pathname = usePathname();

  // Simple mobile header
  if (isMobile) {
    return (
      <div className="flex h-14 items-center justify-between px-2 w-full">
        {/* Left: Menu and Logo */}
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={20} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-full h-full max-w-full">
              <SheetClose className="ml-auto">
                <span className="sr-only">Close</span>
              </SheetClose>
              
              {/* Mobile Menu Content */}
              <div className="p-4">
                {showUserMenu && user && (
                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <CustomAvatar value={user.name} size="sm" />
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Workspace Selector */}
                {showUserMenu && workspaces.length > 0 && (
                  <div className="mb-4">
                    <WorkspaceSelector
                      workspaces={workspaces}
                      currentWorkspace={currentWorkspace}
                      onWorkspaceChange={onWorkspaceChange || (() => {})}
                      onCreateWorkspace={onCreateWorkspace}
                      onWorkspaceSettings={onWorkspaceSettings}
                      isMobile={true}
                    />
                  </div>
                )}
                
                {/* Navigation */}
                <nav className="space-y-1">
                  {sidebarSections.map((section, i) => (
                    <div key={i}>
                      {section.title && (
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          {section.title}
                        </div>
                      )}
                      {section.items.map((item, j) => (
                        <Button
                          key={j}
                          asChild
                          variant={item.href === pathname ? "default" : "ghost"}
                          size="sm"
                          className="w-full justify-start mb-1"
                        >
                          <Link href={item.href || "#"}>
                            {item.icon && item.icon()}
                            <span className="ml-2">{item.label}</span>
                          </Link>
                        </Button>
                      ))}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          {showLogo && (
            <Link href="/" className="flex items-center">
              <SherryLogo width={22} height={20} />
            </Link>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {showThemeToggle && <ThemeToggle />}
          
          {showUserMenu && user ? (
            <UserAvatarMenu user={user} onSignOut={onSignOut} />
          ) : showAuthButtons ? (
            <Button 
              variant="default" 
              size="sm" 
              onClick={onSignIn}
            >
              Connect
            </Button>
          ) : null}
        </div>
      </div>
    );
  }

  // Desktop header
  return (
    <header className={`flex h-14 items-center justify-between px-4 w-full ${className}`}>
      {/* Left: Logo and Workspace */}
      <div className="flex items-center gap-4">
        {showLogo && (
          <Link href="/" className="flex items-center">
            <SherryLogo width={20} height={20} />
          </Link>
        )}
        
        {showUserMenu && user && workspaces.length > 0 && (
          <WorkspaceSelector
            workspaces={workspaces}
            currentWorkspace={currentWorkspace}
            onWorkspaceChange={onWorkspaceChange || (() => {})}
            onCreateWorkspace={onCreateWorkspace}
            onWorkspaceSettings={onWorkspaceSettings}
            isMobile={false}
          />
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {showThemeToggle && <ThemeToggle />}
        
        {showUserMenu && user ? (
          <UserAvatarMenu user={user} onSignOut={onSignOut} />
        ) : showAuthButtons ? (
          <Button 
            variant="default" 
            size="sm" 
            onClick={onSignIn}
          >
            Connect
          </Button>
        ) : null}
      </div>
    </header>
  );
} 