// This file is now .tsx to support JSX in config
import React from "react";
import { MessageSquare, Search, Grid3X3, Clock, Users } from "lucide-react";

export interface SidebarNavItem {
  label: string;
  href?: string;
  icon?: () => React.ReactElement;
  children?: SidebarNavItem[];
}

export interface SidebarSection {
  title?: string;
  items: SidebarNavItem[];
}

export const sidebarSections: SidebarSection[] = [
  {
    items: [
      {
        label: "New Chat",
        href: "/chat",
        icon: () => <MessageSquare size={16} />,
      },
      {
        label: "Search",
        icon: () => <Search size={16} />,
      },
      {
        label: "Projects",
        href: "/chat/projects",
        icon: () => <Grid3X3 size={16} />,
      },
      {
        label: "Recents",
        href: "/chat/history",
        icon: () => <Clock size={16} />,
      },
      {
        label: "Community",
        href: "/community",
        icon: () => <Users size={16} />,
      },
    ],
  },
]; 