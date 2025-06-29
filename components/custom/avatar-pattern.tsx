"use client";

import { CustomAvatar } from "@/components/custom/custom-avatar";
import { generateAvatar } from "@/lib/avatar-generator";

interface AvatarPatternProps {
  baseValue: string;
  count?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AvatarPattern({ baseValue, count = 12, size = "md", className = "" }: AvatarPatternProps) {
  // Generate multiple avatars with different values
  const avatars = Array.from({ length: count }, (_, i) => {
    const avatarValue = `${baseValue}-${i + 1}`;
    return {
      value: avatarValue,
      data: generateAvatar({ value: avatarValue })
    };
  });

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <div className={`relative h-32 overflow-hidden rounded-t-xl ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40"></div>
      
      {/* Avatar grid */}
      <div className="absolute inset-0 p-4">
        <div className="grid grid-cols-4 gap-2 h-full">
          {avatars.map((avatar, index) => (
            <div 
              key={index}
              className="flex items-center justify-center"
              style={{
                opacity: 0.3 + (index % 3) * 0.2, // Vary opacity for depth
                transform: `rotate(${(index % 4) * 5}deg)` // Slight rotation variation
              }}
            >
              <CustomAvatar 
                value={avatar.value}
                size={size}
                className="shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
    </div>
  );
} 