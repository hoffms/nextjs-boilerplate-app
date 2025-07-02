import { CustomAvatar } from "@/components/shared/custom-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut, HelpCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface UserAvatarMenuProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onSignOut?: () => void;
  className?: string;
}

const sanitizeText = (text: string): string => {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/<[^>]*>/g, '').slice(0, 100);
};

const UserAvatarMenu: React.FC<UserAvatarMenuProps> = ({ user, onSignOut, className = "" }) => {
  const sanitizedUserName = user?.name ? sanitizeText(user.name) : '';
  const sanitizedUserEmail = user?.email ? sanitizeText(user.email) : '';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`rounded-full focus:outline-none ${className}`} type="button">
          <CustomAvatar value={sanitizedUserName || "User"} size="sm" />
          <span className="sr-only">Open user menu</span>
        </button>
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
  );
};

export default UserAvatarMenu; 