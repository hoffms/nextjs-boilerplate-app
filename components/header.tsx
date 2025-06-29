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

  // Guest Header - Clean and focused on conversion
  if (!isAuthenticated) {
    return (
      <header className={`flex h-14 shrink-0 items-center justify-between gap-3 px-3 py-2 sm:h-11 sm:px-2 ${className}`}>
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
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 px-3 text-sm"
                  onClick={onSignIn}
                  aria-label="Sign in to your account"
                >
                  Connect to X
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    );
  }

  // Logged Header - Full functionality with user menu
  return (
    <header className={`flex h-14 shrink-0 items-center justify-between gap-0 px-3 py-2 sm:h-11 sm:px-2 ${className}`}>
      {/* Left Section - Logo and Workspace */}
      <div className="flex min-w-0 flex-1 items-center">
        {config.showLogo && (
          <>
            <a href="/" className="mr-3" aria-label="Go to homepage">
              <SherryLogo width={20} height={20} />
            </a>
            <Separator orientation="vertical" className="h-6 mr-3" />
          </>
        )}

        {/* Forward slash separator */}
        <span className="text-muted-foreground mx-1">/</span>

        {/* Left navigation items */}
        {config.leftItems && config.leftItems.length > 0 && (
          <div className="flex items-center gap-1 ml-2">
            {config.leftItems.map(renderNavItem)}
          </div>
        )}

        {/* Workspace/User Profile Section */}
        {config.showWorkspaceSelector && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2"
                aria-label="Open workspace menu"
              >
                <CustomAvatar 
                  value={sanitizedUserName || "Personal User"} 
                  size="sm" 
                  className="mr-2"
                />
                <div className="flex min-w-0 flex-1 items-center truncate text-start text-sm font-medium">
                  <div className="max-w-20 truncate">
                    {sanitizedWorkspace}
                  </div>
                  <SherryBadge variant="sherrypurpleLight" className="ml-1.5 h-[16px] px-1.5 text-xs">
                    Beta
                  </SherryBadge>
                </div>
                <ChevronDown className="ml-1 text-gray-500" size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[280px]" sideOffset={12}>
              <DropdownMenuLabel>
                Current Workspace
              </DropdownMenuLabel>
              
              {/* Current Workspace */}
              <div className="px-3 py-2">
                <div className="text-sm text-muted-foreground mt-1">{sanitizedWorkspace}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Beta mode • 1 workspace limit
                </div>
              </div>
              
              <DropdownMenuSeparator />
              
              {/* Workspace List */}
              {workspaces && workspaces.length > 0 && (
                <>
                  <DropdownMenuLabel className="text-xs text-muted-foreground px-3 py-1">
                    My Workspaces
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    {workspaces.map((workspace) => (
                      <div key={workspace.id}>
                        <DropdownMenuItem
                          onClick={() => onWorkspaceChange?.(workspace.id)}
                          className="flex items-center gap-2 px-3 py-2"
                        >
                          <div className="flex-1">
                            <div className="text-sm font-medium">{workspace.name}</div>
                            <div className="text-xs text-muted-foreground capitalize">{workspace.type}</div>
                          </div>
                          {workspace.id === currentWorkspace && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          disabled
                          className="flex items-center gap-2 text-muted-foreground cursor-not-allowed"
                        >
                          <div className="w-4 h-4 rounded border-2 border-dashed border-muted-foreground flex items-center justify-center">
                            <span className="text-xs">+</span>
                          </div>
                          <span>Create Workspace</span>
                          <span className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded">
                            Soon
                          </span>
                        </DropdownMenuItem>
                      </div>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </>
              )}
              
              {/* Beta Mode Notice */}
              <div className="px-3 py-2 bg-muted/50 rounded-sm mx-2">
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Beta Mode:</span> You have access to 1 workspace during the beta period.
                </div>
              </div>
              
              <DropdownMenuSeparator />
              

            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      
      {/* Center Section - Search and other center items */}
      {config.centerItems && config.centerItems.length > 0 && (
        <div className="flex items-center gap-2">
          {config.centerItems.map(renderNavItem)}
        </div>
      )}
      
      {/* Right Section - Notifications, Theme Toggle, and User Menu */}
      <div className="flex justify-end p-2">
        <div className="flex gap-2 items-center">
          {/* Notifications */}
          {config.showNotifications && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 relative"
              onClick={onNotificationsClick}
              aria-label="View notifications"
            >
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                {notificationCount}
              </span>
            </Button>
          )}
          
          {/* Right navigation items */}
          {config.rightItems && config.rightItems.length > 0 && (
            <>
              {config.rightItems.map(renderNavItem)}
            </>
          )}
          
          {config.showThemeToggle && <ThemeToggle />}
          
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full"
                aria-label="Open user menu"
              >
                <CustomAvatar 
                  value={sanitizedUserName || "User"} 
                  size="sm" 
                />
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
        </div>
      </div>
    </header>
  );
}

// Export configurations for external use if needed
export { guestHeaderConfig, loggedHeaderConfig }; 