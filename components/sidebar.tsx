"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, X } from "lucide-react";
import { CustomAvatar } from "@/components/ui/custom-avatar";
import { sidebarSections } from "./sidebar-config";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "w-60" : "w-0"
      } hidden sm:block`}
    >
      <aside className="z-20 flex h-full flex-col rounded-lg rounded-l-none w-60">
        <div className="flex flex-col items-stretch pl-2 pt-2 pb-2 gap-3">
          {/* Navigation Items from config */}
          <div className="flex w-full min-w-0 flex-col items-stretch gap-4">
            {sidebarSections.map((section, i) => (
              <div key={i} className="flex w-full min-w-0 flex-col gap-0.5">
                {section.title && (
                  <div className="px-2 py-1">
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {section.title}
                    </h3>
                  </div>
                )}
                <ul className="flex w-full min-w-0 flex-col gap-0.5">
                  {section.items.map((item, j) => (
                    <li key={j} className="relative">
                      {item.label === "New" ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full h-8 justify-start px-2"
                        >
                          <Link
                            href={item.href || "#"}
                            onClick={() => {
                              if (window.innerWidth < 640) onToggle();
                            }}
                          >
                            {item.icon && item.icon()}
                            <span>{item.label}</span>
                          </Link>
                        </Button>
                      ) : (
                        <>
                          {item.href ? (
                            <Button
                              asChild
                              variant="ghost"
                              size="sm"
                              className="w-full h-8 justify-start px-2"
                            >
                              <Link
                                href={item.href}
                                onClick={() => {
                                  if (window.innerWidth < 640) onToggle();
                                }}
                              >
                                {item.icon && item.icon()}
                                <span>{item.label}</span>
                              </Link>
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full h-8 justify-start px-2"
                            >
                              {item.icon && item.icon()}
                              <span>{item.label}</span>
                            </Button>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 pl-2">
          <div className="flex flex-col items-stretch gap-4 py-2">
            <Separator />
            
            {/* Favorite Projects */}
            <Collapsible
              open={expandedSections.has('favorite-projects')}
              onOpenChange={() => toggleSection('favorite-projects')}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Favorite Projects
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      expandedSections.has('favorite-projects') ? 'rotate-180' : ''
                    }`} 
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-2">
                <div className="py-2 text-sm text-muted-foreground">
                  No favorite projects yet
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Favorite Chats */}
            <Collapsible
              open={expandedSections.has('favorite-chats')}
              onOpenChange={() => toggleSection('favorite-chats')}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Favorite Chats
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      expandedSections.has('favorite-chats') ? 'rotate-180' : ''
                    }`} 
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-2">
                <div className="py-2 text-sm text-muted-foreground">
                  No favorite chats yet
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Recents */}
            <Collapsible
              open={expandedSections.has('recents')}
              onOpenChange={() => toggleSection('recents')}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Recents
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      expandedSections.has('recents') ? 'rotate-180' : ''
                    }`} 
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-2">
                <div className="py-2 text-sm text-muted-foreground">
                  No recent items yet
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Separator />
          </div>
        </ScrollArea>

        {/* Feature Announcement */}
        <div className="flex-col items-stretch pl-2 gap-3 py-3 relative hidden w-full pb-2 pt-1 sm:flex">
          <section className="bg-card border border-border flex flex-col gap-1.5 rounded-lg p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-border/80 hover:shadow-md">
            <span className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-2">
                <CustomAvatar value="Demo User" size="sm" />
                <h5 className="text-[13px] font-medium">Custom Avatars</h5>
              </div>
              <span className="sr-only">Learn more</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </span>
            <div className="flex-1">
              <p className="text-sm">We built a custom avatar generator, why not? maybe it turns into an nft...</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-6 text-xs mt-1"
              >
                <Link href="/avatar-demo">
                  Check it out
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
} 