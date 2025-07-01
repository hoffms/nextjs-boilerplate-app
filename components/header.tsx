"use client";

import { Button } from "@/components/ui/button";
import { CustomAvatar } from "@/components/custom/custom-avatar";
import { SherryBadge } from "@/components/custom/sherry-badge";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, User, Settings, LogOut, HelpCircle, Bell, Home, MessageCircle } from "lucide-react";
import { SherryLogo } from "@/components/custom/sherry-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { sidebarSections } from "@/components/sidebar-config";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

// Input sanitization utility
const sanitizeText = (text: string): string => {
  if (!text || typeof text !== 'string') return '';
  // Remove any HTML tags and limit length
  return text.replace(/<[^>]*>/g, '').slice(0, 100);
};

// URL validation utility
const isValidExternalUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname === 'docs.sherry.social';
  } catch {
    return false;
  }
};

// Header configuration types
export interface HeaderNavItem {
  label: string;
  href?: string;
  icon?: () => React.ReactElement;
  action?: () => void;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  // Security attributes for external links
  rel?: string;
  target?: string;
}

export interface HeaderConfig {
  showLogo?: boolean;
  showWorkspaceSelector?: boolean;
  showAuthButtons?: boolean;
  showThemeToggle?: boolean;
  showNotifications?: boolean;
  showSearch?: boolean;
  leftItems?: HeaderNavItem[];
  rightItems?: HeaderNavItem[];
  centerItems?: HeaderNavItem[];
}

// Guest header configuration - focused on conversion
const guestHeaderConfig: HeaderConfig = {
  showLogo: true,
  showWorkspaceSelector: false,
  showAuthButtons: true,
  showThemeToggle: true,
  showNotifications: false,
  showSearch: false,
  leftItems: [],
  rightItems: [
    {
      label: "Docs",
      href: "https://docs.sherry.social",
      variant: "outline",
      size: "sm",
      rel: "noopener noreferrer",
      target: "_blank"
    }
  ],
  centerItems: []
};

// Logged header configuration - full functionality
const loggedHeaderConfig: HeaderConfig = {
  showLogo: true,
  showWorkspaceSelector: true,
  showAuthButtons: false,
  showThemeToggle: true,
  showNotifications: true,
  showSearch: false,
  leftItems: [],
  rightItems: [
    {
      label: "Messages",
      icon: () => <MessageCircle size={16} />,
      href: "/messages",
      variant: "ghost",
      size: "sm"
    },
    {
      label: "Help",
      icon: () => <HelpCircle size={16} />,
      href: "/help",
      variant: "ghost",
      size: "sm"
    },
    {
      label: "Docs",
      href: "https://docs.sherry.social",
      variant: "outline",
      size: "sm",
      rel: "noopener noreferrer",
      target: "_blank"
    }
  ],
  centerItems: []
};

interface HeaderProps {
  // Auth state props
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  
  // App state props
  currentWorkspace?: string;
  workspaces?: Array<{ id: string; name: string; type: string }>;
  notificationCount?: number;
  
  // Action handlers
  onSignIn?: () => void;
  onSignUp?: () => void;
  onSignOut?: () => void;
  onWorkspaceChange?: (workspaceId: string) => void;
  onNotificationsClick?: () => void;
  
  // Configuration
  config?: HeaderConfig;
  className?: string;
}

export function Header({
  isAuthenticated = false,
  user,
  currentWorkspace = "Personal",
  workspaces = [],
  notificationCount = 0,
  onSignIn,
  onSignUp,
  onSignOut,
  onWorkspaceChange,
  onNotificationsClick,
  config = guestHeaderConfig,
  className = "",
}: HeaderProps) {
  const renderNavItem = (item: HeaderNavItem) => {
    if (!item || !item.label) {
      console.warn('Invalid navigation item:', item);
      return null;
    }

    const buttonContent = (
      <>
        {item.icon && item.icon()}
        <span className="hidden sm:inline">{sanitizeText(item.label)}</span>
      </>
    );

    if (item.href) {
      // Handle external links with security attributes
      const isExternal = item.href.startsWith('http');
      const linkProps = isExternal ? {
        rel: item.rel || "noopener noreferrer",
        target: item.target || "_blank"
      } : {};

      return (
        <Button
          key={item.label}
          asChild
          variant={item.variant || "ghost"}
          size={item.size || "sm"}
          className="h-8 px-2"
        >
          <Link href={item.href} {...linkProps}>
            {buttonContent}
          </Link>
        </Button>
      );
    }

    return (
      <Button
        key={item.label}
        variant={item.variant || "ghost"}
        size={item.size || "sm"}
        className="h-8 px-2"
        onClick={item.action}
      >
        {buttonContent}
      </Button>
    );
  };

  // Sanitize user data
  const sanitizedUserName = user?.name ? sanitizeText(user.name) : '';
  const sanitizedUserEmail = user?.email ? sanitizeText(user.email) : '';
  const sanitizedWorkspace = currentWorkspace ? sanitizeText(currentWorkspace) : 'Personal';

  // --- MOBILE HEADER ---
  // Only show on small screens
  // (Tailwind: block on sm and below, hidden on md+)
  // Desktop header: hidden on sm and below, block on md+
  return (
    <>
      {/* Mobile Header */}
      <div className="flex h-14 items-center justify-between px-2 sm:hidden w-full">
        {/* Hamburger menu (SheetTrigger) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-1">
              <span className="sr-only">Open menu</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-full h-full max-w-full">
            <SheetTitle className="sr-only">Main navigation</SheetTitle>
            {/* Drawer header row with close button */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b">
              <SherryLogo width={22} height={20} />
              <SheetClose className="ml-auto">
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>
            {/* Workspace selector (expandable/collapsible) */}
            {config.showWorkspaceSelector && (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full flex flex-row items-center justify-between gap-3 px-4 py-3 border-b border-border rounded-none text-left">
                    <div className="flex flex-row items-center gap-3 min-w-0">
                      <CustomAvatar value={sanitizedUserName || "Personal User"} size="sm" />
                      <div className="flex flex-col min-w-0">
                        <span className="truncate font-medium text-sm text-foreground">{sanitizedWorkspace}</span>
                        <span className="text-xs text-muted-foreground">Beta mode • 1 workspace</span>
                      </div>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 text-muted-foreground flex-shrink-0" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pl-8 pr-4 py-2">
                    <div className="text-xs text-muted-foreground mb-2">Current Workspace</div>
                    <div className="text-sm text-foreground mb-1">{sanitizedWorkspace}</div>
                    <div className="text-xs text-muted-foreground mb-2">Beta mode • 1 workspace limit</div>
                    <div className="text-xs text-muted-foreground mb-2 font-semibold">My Workspaces</div>
                    {workspaces && workspaces.length > 0 && (
                      <div className="mb-2">
                        {workspaces.map((workspace) => (
                          <Button
                            key={workspace.id}
                            variant={workspace.id === currentWorkspace ? "default" : "ghost"}
                            size="sm"
                            className={`w-full mb-1 justify-start ${workspace.id === currentWorkspace ? 'text-foreground' : 'text-muted-foreground'}`}
                            onClick={() => onWorkspaceChange?.(workspace.id)}
                          >
                            <div className="flex-1 text-left">
                              <div className="text-sm font-medium">{workspace.name}</div>
                              <div className="text-xs text-muted-foreground capitalize">{workspace.type}</div>
                            </div>
                            {workspace.id === currentWorkspace && (
                              <div className="w-2 h-2 bg-primary rounded-full ml-2" />
                            )}
                          </Button>
                        ))}
                      </div>
                    )}
                    <Button disabled variant="outline" size="sm" className="w-full justify-start mb-2">
                      <div className="w-4 h-4 rounded border-2 border-dashed border-muted-foreground flex items-center justify-center mr-2">
                        <span className="text-xs">+</span>
                      </div>
                      Create Workspace
                      <span className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded">Soon</span>
                    </Button>
                    <div className="px-2 py-2 bg-muted/50 rounded-sm mt-2">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Beta Mode:</span> You have access to 1 workspace during the beta period.
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
            {/* Sidebar nav (sidebarSections) */}
            <nav className="px-4 py-2 border-b border-border">
              {sidebarSections.map((section, i) => (
                <div key={i} className="mb-4">
                  {section.title && (
                    <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">{section.title}</div>
                  )}
                  <ul className="flex flex-col gap-1">
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <Button
                          asChild
                          variant={item.label === 'New' ? 'secondary' : (item.href === location?.pathname ? 'default' : 'ghost')}
                          size="sm"
                          className={`w-full justify-start ${(item.label === 'New') ? '' : (item.href === location?.pathname ? 'text-foreground' : 'text-muted-foreground')}`}
                        >
                          <Link href={item.href || "#"}>
                            {item.icon && item.icon()}<span className="ml-2">{item.label}</span>
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        {/* Center: Logo and context */}
        <div className="flex-1 flex justify-center items-center min-w-0">
          <a href="/" className="flex items-center gap-2" aria-label="Go to homepage">
            <SherryLogo width={22} height={20} />
          </a>
          {/* Optionally, add context (workspace/page) here */}
        </div>
        {/* Right: Home button and user avatar or connect button */}
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" className="mr-1">
            <Link href="/">
              <Home size={20} />
              <span className="sr-only">Home</span>
            </Link>
          </Button>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <CustomAvatar value={sanitizedUserName || "User"} size="sm" />
                  <span className="sr-only">Open user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56" sideOffset={8}>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{sanitizedUserName}</p>
                    <p className="text-xs leading-none text-muted-foreground">{sanitizedUserEmail}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <User size={16} />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center gap-2">
                      <User size={16} />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center gap-2">
                      <Settings size={16} />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/help" className="flex items-center gap-2">
                      <HelpCircle size={16} />
                      Help & Support
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={onSignOut}
                  className="flex items-center gap-2 text-destructive focus:text-destructive"
                >
                  <LogOut size={16} />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="default" 
              size="sm" 
              className="h-7 px-4 text-sm font-semibold"
              onClick={onSignIn}
              aria-label="Sign in to your account"
            >
              Connect
            </Button>
          )}
        </div>
      </div>

      {/* Desktop Header (unchanged) */}
      <header className="hidden sm:flex h-14 shrink-0 items-center justify-between gap-0 px-3 py-2 sm:h-11 sm:px-2 w-full ${className}">
        {/* Left Section - Logo */}
        <div className="flex min-w-0 flex-1 items-center">
          {config.showLogo && (
            <a href="/" className="mr-3" aria-label="Go to homepage">
              <SherryLogo width={20} height={20} />
            </a>
          )}

          {/* Left navigation items */}
          {config.leftItems && config.leftItems.length > 0 && (
            <div className="flex items-center gap-1 ml-2">
              {config.leftItems.map(renderNavItem)}
            </div>
          )}
        </div>
        
        {/* Right Section - Theme Toggle, Docs, and Auth Buttons */}
        <div className="flex justify-end p-2">
          <div className="flex gap-2 items-center">
            {config.showThemeToggle && <ThemeToggle />}
            
            {/* Right navigation items */}
            {config.rightItems && config.rightItems.length > 0 && (
              <>
                {config.rightItems.map(renderNavItem)}
              </>
            )}
            
            {/* Auth buttons */}
            {config.showAuthButtons && (
              <Button 
                variant="default" 
                size="sm" 
                className="h-7 px-4 text-sm font-semibold"
                onClick={onSignIn}
                aria-label="Sign in to your account"
              >
                Connect
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

// Export configurations for external use if needed
export { guestHeaderConfig, loggedHeaderConfig }; 