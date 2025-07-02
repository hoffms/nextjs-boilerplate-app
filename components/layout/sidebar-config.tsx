// This file is now .tsx to support JSX in config
import React from "react";
import { 
  Plus, 
  LayoutDashboard, 
  AppWindow, 
  FileText, 
  Users, 
  TrendingUp, 
  Trophy
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
        label: "New Mini dApp",
        href: "/",
        icon: () => <Plus size={16} />,
      },
    ],
  },
  {
    items: [
      {
        label: "My Mini dApps",
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
        label: "Marketplace",
        href: "/community",
        icon: () => <Users size={16} />,
      },
      {
        label: "Templates",
        href: "/templates",
        icon: () => <FileText size={16} />,
      },
    ],
  },
  {
    title: "Podium",
    items: [
      {
        label: "Market Leaderboards",
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