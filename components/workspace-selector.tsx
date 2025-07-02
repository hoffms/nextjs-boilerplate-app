"use client";

import { Button } from "@/components/ui/button";
import { CustomAvatar } from "@/components/custom/custom-avatar";
import { ChevronDown, Plus, Settings, Search, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";

interface Workspace {
  id: string;
  name: string;
  type: string;
  avatar?: string;
}

interface WorkspaceSelectorProps {
  workspaces: Workspace[];
  currentWorkspace?: string;
  onWorkspaceChange: (workspaceId: string) => void;
  onCreateWorkspace?: () => void;
  onWorkspaceSettings?: () => void;
  isMobile?: boolean;
  className?: string;
}

export function WorkspaceSelector({
  workspaces,
  currentWorkspace,
  onWorkspaceChange,
  onCreateWorkspace,
  onWorkspaceSettings,
  isMobile = false,
  className = ""
}: WorkspaceSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Find current workspace
  const current = workspaces.find(w => w.id === currentWorkspace);
  
  // Filter workspaces based on search
  const filteredWorkspaces = workspaces.filter(workspace =>
    workspace.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workspace.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mobile version with collapsible
  if (isMobile) {
    return (
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full flex items-center justify-between gap-3 px-4 py-3 border-b border-border rounded-none text-left">
            <div className="flex items-center gap-3 min-w-0">
              <CustomAvatar value={current?.name || "Workspace"} size="sm" />
              <div className="flex flex-col min-w-0">
                <span className="truncate font-medium text-sm text-foreground">
                  {current?.name || "Select Workspace"}
                </span>
                <span className="text-xs text-muted-foreground capitalize">
                  {current?.type || "No workspace"}
                </span>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 text-muted-foreground flex-shrink-0" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pl-8 pr-4 py-2">
            {/* Search */}
            <div className="mb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search workspaces..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            
            {/* Workspace list */}
            <div className="space-y-1">
              {filteredWorkspaces.map((workspace) => (
                <Button
                  key={workspace.id}
                  variant={workspace.id === currentWorkspace ? "default" : "ghost"}
                  size="sm"
                  className={`w-full justify-start ${workspace.id === currentWorkspace ? 'text-foreground' : 'text-muted-foreground'}`}
                  onClick={() => onWorkspaceChange(workspace.id)}
                >
                  <div className="flex items-center gap-2 w-full">
                    <CustomAvatar value={workspace.name} size="sm" />
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium">{workspace.name}</div>
                      <div className="text-xs text-muted-foreground capitalize">{workspace.type}</div>
                    </div>
                    {workspace.id === currentWorkspace && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </Button>
              ))}
            </div>
            
            {/* Quick actions */}
            <div className="mt-3 pt-3 border-t border-border space-y-1">
              {onCreateWorkspace && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={onCreateWorkspace}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Workspace
                </Button>
              )}
              {onWorkspaceSettings && current && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={onWorkspaceSettings}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Workspace Settings
                </Button>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  // Desktop version with dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-9 px-3 flex items-center gap-2 hover:bg-accent">
          <CustomAvatar value={current?.name || "Workspace"} size="sm" />
          <div className="flex flex-col items-start min-w-0">
            <span className="truncate font-medium text-sm text-foreground">
              {current?.name || "Select Workspace"}
            </span>
            <span className="text-xs text-muted-foreground capitalize">
              {current?.type || "No workspace"}
            </span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80" sideOffset={8}>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Current Workspace</p>
            <p className="text-xs leading-none text-muted-foreground">
              {current?.name || "No workspace selected"}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {/* Search */}
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search workspaces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        
        <DropdownMenuSeparator />
        
        {/* Workspace list */}
        <DropdownMenuGroup>
          {filteredWorkspaces.map((workspace) => (
            <DropdownMenuItem
              key={workspace.id}
              onClick={() => onWorkspaceChange(workspace.id)}
              className="flex items-center gap-2"
            >
              <CustomAvatar value={workspace.name} size="sm" />
              <div className="flex-1 text-left">
                <div className="text-sm font-medium">{workspace.name}</div>
                <div className="text-xs text-muted-foreground capitalize">{workspace.type}</div>
              </div>
              {workspace.id === currentWorkspace && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        
        {/* Quick actions */}
        {(onCreateWorkspace || onWorkspaceSettings) && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {onCreateWorkspace && (
                <DropdownMenuItem onClick={onCreateWorkspace}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Workspace
                </DropdownMenuItem>
              )}
              {onWorkspaceSettings && current && (
                <DropdownMenuItem onClick={onWorkspaceSettings}>
                  <Settings className="h-4 w-4 mr-2" />
                  Workspace Settings
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 