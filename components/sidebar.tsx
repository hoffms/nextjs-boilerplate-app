"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";
import { sidebarSections } from "./sidebar-config";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [favoriteProjectsOpen, setFavoriteProjectsOpen] = useState(false);
  const [favoriteChatsOpen, setFavoriteChatsOpen] = useState(false);
  const [recentsOpen, setRecentsOpen] = useState(false);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "w-60" : "w-0"
      } hidden sm:block`}
      style={{ transitionProperty: "width, padding" }}
    >
      {isOpen && (
        <aside
          className={`z-20 flex h-full flex-col rounded-lg rounded-l-none border border-l-0 border-transparent bg-none transition-all duration-300 ease-in-out w-60 scale-100 translate-x-0`}
          style={{
            transitionProperty:
              "opacity, transform, border-color, background, box-shadow",
          }}
        >
          <div className="flex flex-col items-stretch p-2 gap-3">
            {/* User Profile Section */}
            <button
              className="inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap border font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:ring-0 border-transparent bg-transparent text-gray-900 hover:border-transparent focus:border-transparent focus-visible:border-transparent disabled:border-transparent disabled:bg-transparent disabled:text-gray-400 h-8 px-4 text-sm rounded-md w-fit min-w-32 max-w-[calc(100%-36px)] sm:hidden"
            >
              <span className="relative shrink-0 select-none items-center justify-center overflow-hidden rounded-full mr-1.5 block w-5 h-5">
                <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  U
                </div>
              </span>
              <div className="flex min-w-0 flex-1 items-center truncate text-start text-sm font-medium leading-[20px] text-gray-900">
                <div className="max-w-64 truncate">Personal</div>
                <div className="pointer-events-none inline-flex shrink-0 items-center justify-center whitespace-nowrap border font-medium outline-none border-gray-200 text-gray-900 bg-gray-100 ml-1.5 h-[18px] rounded-full border-none px-1.5 text-xs">
                  Free
                </div>
              </div>
              <ChevronDown className="mx-1 text-gray-500" size={16} />
            </button>

            {/* Navigation Items from config */}
            <div className="flex w-full min-w-0 flex-col items-stretch gap-0.5">
              {sidebarSections.map((section, i) => (
                <ul key={i} className="flex w-full min-w-0 flex-col gap-0.5">
                  {section.items.map((item, j) => (
                    <li key={j} className="hover:bg-gray-100 group relative flex h-8 list-none items-center rounded-md text-gray-600">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="rounded-md flex size-full min-w-0 items-center justify-start gap-2 px-2 text-sm font-normal outline-none text-gray-600 focus-within:text-gray-900 hover:text-gray-900 focus:text-gray-900 group-hover:text-gray-900 ring-blue-600 focus-visible:ring-2 focus-visible:ring-offset-1"
                        >
                          {item.icon && item.icon()}
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <button
                          className="rounded-md flex size-full min-w-0 items-center justify-start gap-2 px-2 text-sm font-normal outline-none text-gray-600 focus-within:text-gray-900 hover:text-gray-900 focus:text-gray-900 group-hover:text-gray-900 ring-blue-600 focus-visible:ring-2 focus-visible:ring-offset-1"
                        >
                          {item.icon && item.icon()}
                          <span>{item.label}</span>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex flex-col items-stretch p-2 flex-1 overflow-y-auto border-y border-transparent transition-[border-color]">
            <div className="relative flex h-fit w-full flex-col gap-4">
              <div className="absolute inset-x-0 top-0 h-px w-full"></div>
              
              {/* Favorite Projects */}
              <div className="flex w-full min-w-0 flex-col items-stretch gap-0.5">
                <div className="flex flex-col gap-0">
                  <button
                    onClick={() => setFavoriteProjectsOpen(!favoriteProjectsOpen)}
                    className="flex h-[1.875rem] content-center gap-1 px-2 text-xs font-medium text-gray-500 w-full cursor-pointer select-none justify-between transition-colors hover:text-gray-900"
                  >
                    Favorite Projects
                    <ChevronDown 
                      className={`h-4 w-4 translate-y-px transition-transform ${
                        favoriteProjectsOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div className={`transition-all duration-200 ${
                    favoriteProjectsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {/* Add favorite projects here */}
                  </div>
                </div>
              </div>

              {/* Favorite Chats */}
              <div className="flex w-full min-w-0 flex-col items-stretch gap-0.5">
                <div className="flex flex-col gap-0">
                  <button
                    onClick={() => setFavoriteChatsOpen(!favoriteChatsOpen)}
                    className="flex h-[1.875rem] content-center gap-1 px-2 text-xs font-medium text-gray-500 w-full cursor-pointer select-none justify-between transition-colors hover:text-gray-900"
                  >
                    Favorite Chats
                    <ChevronDown 
                      className={`h-4 w-4 translate-y-px transition-transform ${
                        favoriteChatsOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div className={`transition-all duration-200 ${
                    favoriteChatsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {/* Add favorite chats here */}
                  </div>
                </div>
              </div>

              {/* Recents */}
              <div className="flex w-full min-w-0 flex-col items-stretch gap-0.5">
                <div className="flex flex-col gap-0">
                  <button
                    onClick={() => setRecentsOpen(!recentsOpen)}
                    className="flex h-[1.875rem] content-center gap-1 px-2 text-xs font-medium text-gray-500 w-full cursor-pointer select-none justify-between transition-colors hover:text-gray-900"
                  >
                    Recents
                    <ChevronDown 
                      className={`h-4 w-4 translate-y-px transition-transform ${
                        recentsOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div className={`transition-all duration-200 ${
                    recentsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {/* Add recent items here */}
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px w-full"></div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-2 z-10 h-16 bg-gradient-to-t from-gray-100 via-white/75 transition-opacity opacity-0"></div>
          </div>

          {/* Feature Announcement */}
          <div className="flex-col items-stretch p-2 gap-3 py-3 relative hidden w-full pb-2 pt-1 sm:flex">
            <div className="pointer-events-none absolute -top-6 left-0 right-2 z-10 h-6 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_var(--popover,_white)_0%,_var(--muted,_#E4E4E7)_100%)]"></div>
            <section className="bg-white border border-gray-300 flex flex-col gap-1.5 rounded-lg p-3 drop-shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:drop-shadow-md">
              <span className="flex items-center justify-between text-gray-500">
                <h5 className="text-[13px] font-medium">New Feature</h5>
                <span className="sr-only">Learn more</span>
                <button className="inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap border font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed border-transparent bg-transparent hover:bg-gray-100 focus-visible:bg-gray-100 px-2 text-xs rounded-sm text-gray-500">
                  <X className="text-lg" />
                </button>
              </span>
              <p className="text-sm">v0 will now sync across tabs and browsers while messages stream in</p>
            </section>
          </div>

          {/* Resize Handle */}
          <button 
            className="absolute inset-y-0 right-[-4px] z-30 hidden w-[4px] transition-all after:absolute after:-inset-x-1.5 after:inset-y-0 after:opacity-20 hover:bg-gray-300 sm:flex" 
            style={{ cursor: 'w-resize' }} 
            aria-label="Toggle Sidebar" 
            tabIndex={-1}
          />
        </aside>
      )}
    </div>
  );
} 