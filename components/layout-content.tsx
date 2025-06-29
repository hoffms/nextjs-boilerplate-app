"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Header, guestHeaderConfig, loggedHeaderConfig } from "./header";
import { DevMenu } from "@/components/dev-menu";
import { ErrorBoundary } from "./error-boundary";

interface LayoutContentProps {
  children: React.ReactNode;
  // Auth state props that can be passed through
  authProps?: {
    isAuthenticated?: boolean;
    user?: {
      name: string;
      email: string;
      avatar?: string;
    };
    currentWorkspace?: string;
    workspaces?: Array<{ id: string; name: string; type: string }>;
    notificationCount?: number;
    onSignIn?: () => void;
    onSignUp?: () => void;
    onSignOut?: () => void;
    onWorkspaceChange?: (workspaceId: string) => void;
    onNotificationsClick?: () => void;
  };
}

export function LayoutContent({ children, authProps }: LayoutContentProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Dev auth state management
  const [devAuthState, setDevAuthState] = useState({
    isAuthenticated: false,
    user: undefined as any
  });

  // Mock auth handlers for dev testing
  const handleSignIn = () => {
    setDevAuthState({
      isAuthenticated: true,
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: undefined
      }
    });
  };

  const handleSignUp = () => {
    setDevAuthState({
      isAuthenticated: true,
      user: {
        name: "New User",
        email: "newuser@example.com",
        avatar: undefined
      }
    });
  };

  const handleSignOut = () => {
    setDevAuthState({
      isAuthenticated: false,
      user: undefined
    });
  };
  
  // Use dev auth state if no auth props provided, otherwise use provided props
  const finalAuthProps = authProps || {
    isAuthenticated: devAuthState.isAuthenticated,
    user: devAuthState.user,
    currentWorkspace: devAuthState.isAuthenticated ? devAuthState.user?.name || "Personal" : undefined,
    workspaces: devAuthState.isAuthenticated ? [
      { 
        id: "personal", 
        name: devAuthState.user?.name || "Personal", 
        type: "personal" 
      }
    ] : [],
    notificationCount: devAuthState.isAuthenticated ? 3 : 0,
    onSignIn: handleSignIn,
    onSignUp: handleSignUp,
    onSignOut: handleSignOut,
    onWorkspaceChange: (workspaceId: string) => {
      console.log('Switching to workspace:', workspaceId);
      // TODO: Implement actual workspace switching
    },
    onNotificationsClick: () => {
      // TODO: Implement notifications panel
      console.log('Notifications clicked');
    }
  };

  // Simple header configuration based on auth state
  const headerConfig = finalAuthProps.isAuthenticated ? loggedHeaderConfig : guestHeaderConfig;

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Handle auth state changes from dev menu
  const handleAuthStateChange = (isAuthenticated: boolean, user?: any) => {
    setDevAuthState({ isAuthenticated, user });
  };

  return (
    <div className="h-screen bg-background sm:bg-muted flex w-full flex-col overflow-hidden">
      {/* Header */}
      <ErrorBoundary>
        <Header 
          config={headerConfig}
          {...finalAuthProps}
        />
      </ErrorBoundary>

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
          <main className="flex-1 bg-background overflow-auto h-full rounded-lg border transition-opacity duration-300 ease-in-out relative">
            {/* Sidebar toggle button positioned at top left of content */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute top-3 left-3 z-10 h-8 w-8 p-0 transition-transform duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm border"
            >
              <Menu size={16} className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            {/* Content with top padding to account for the button */}
            <div className="pt-12">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Dev Menu - only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <DevMenu
          onAuthStateChange={handleAuthStateChange}
          currentAuthState={devAuthState}
        />
      )}
    </div>
  );
} 