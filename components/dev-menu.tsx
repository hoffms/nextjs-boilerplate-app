"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { 
  Settings, 
  User, 
  UserCheck, 
  UserX, 
  EyeOff,
  Shield,
  Key,
  X
} from "lucide-react";

interface DevMenuProps {
  onAuthStateChange: (isAuthenticated: boolean, user?: any) => void;
  currentAuthState: {
    isAuthenticated: boolean;
    user?: any;
  };
}

export function DevMenu({ onAuthStateChange, currentAuthState }: DevMenuProps) {
  const [isVisible, setIsVisible] = useState(true);

  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: undefined
  };

  // Keyboard shortcut to toggle dev menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const handleToggleAuth = () => {
    if (currentAuthState.isAuthenticated) {
      onAuthStateChange(false);
    } else {
      onAuthStateChange(true, mockUser);
    }
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setIsVisible(true)}
          className="h-9 w-9 shadow-lg border"
          title="Show Dev Menu (Ctrl+Shift+D)"
        >
          <Settings size={16} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 shadow-xl border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <CardHeader className="pt-4 pb-0">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold">
              Dev Menu
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVisible(false)}
              className="h-7 w-7"
              title="Close Dev Menu"
            >
              <X size={14} />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex flex-col items-stretch gap-4">
            {/* Auth State Section */}
            <div className="flex w-full min-w-0 flex-col gap-0.5">
              <div className="px-2 py-1">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                  <Shield size={12} />
                  Authentication State
                </Label>
              </div>
              
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-sm">Status</span>
                <Badge 
                  variant={currentAuthState.isAuthenticated ? "default" : "secondary"}
                  className="text-xs font-mono"
                >
                  {currentAuthState.isAuthenticated ? "AUTH" : "GUEST"}
                </Badge>
              </div>
              
              <Button
                onClick={handleToggleAuth}
                variant="outline"
                size="sm"
                className="w-full h-8 justify-start px-2 mx-2"
              >
                {currentAuthState.isAuthenticated ? (
                  <>
                    <UserX size={14} className="mr-2" />
                    Sign Out (Mock)
                  </>
                ) : (
                  <>
                    <UserCheck size={14} className="mr-2" />
                    Sign In (Mock)
                  </>
                )}
              </Button>
              
              {currentAuthState.isAuthenticated && currentAuthState.user && (
                <div className="mx-2 mt-1 p-2 rounded-md bg-muted/50 border text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <User size={12} className="text-muted-foreground" />
                    <span className="font-medium">{currentAuthState.user.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Key size={12} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{currentAuthState.user.email}</span>
                  </div>
                </div>
              )}
            </div>
            
            <Separator />
            
            {/* Quick Actions */}
            <div className="flex w-full min-w-0 flex-col gap-0.5">
              <div className="px-2 py-1">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Quick User Switches
                </Label>
              </div>
              <div className="flex flex-col gap-0.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full h-8 justify-start px-2"
                  onClick={() => onAuthStateChange(true, { ...mockUser, name: "Alice Smith", email: "alice@example.com" })}
                >
                  <User size={14} className="mr-2" />
                  Alice Smith
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full h-8 justify-start px-2"
                  onClick={() => onAuthStateChange(true, { ...mockUser, name: "Bob Johnson", email: "bob@example.com" })}
                >
                  <User size={14} className="mr-2" />
                  Bob Johnson
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 