// This file is now .tsx to support JSX in config
import React from "react";
import { 
  Plus, 
  LayoutDashboard, 
  AppWindow, 
  FileText, 
  Users, 
  TrendingUp, 
  Trophy,
  Palette
} from "lucide-react";

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
        label: "New",
        href: "/",
        icon: () => <Plus size={16} />,
      },
    ],
  },
  {
    items: [
      {
        label: "My MiniApps",
        href: "/miniapps",
        icon: () => <AppWindow size={16} />,
      },
      {
        label: "My Dashboard",
        href: "/dashboard",
        icon: () => <LayoutDashboard size={16} />,
      },
    ],
  },
  {
    title: "Discover",
    items: [
      {
        label: "Community MiniApps",
        href: "/community",
        icon: () => <Users size={16} />,
      },
      {
        label: "Templates",
        href: "/templates",
        icon: () => <FileText size={16} />,
      },
      {
        label: "Avatar Demo",
        href: "/avatar-demo",
        icon: () => <Palette size={16} />,
      },
    ],
  },
  {
    title: "Podium",
    items: [
      {
        label: "Market Leaderboard",
        href: "/market-leaderboards",
        icon: () => <TrendingUp size={16} />,
      },
      {
        label: "Users Leaderboard",
        href: "/users-leaderboards",
        icon: () => <Trophy size={16} />,
      },
    ],
  },
]; 