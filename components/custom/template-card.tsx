import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CustomAvatar } from "@/components/custom/custom-avatar";
import { VerificationBadge } from "@/components/custom/verification-badge";
import { AvatarPattern } from "@/components/custom/avatar-pattern";
import Link from "next/link";
import React from "react";

export interface TemplateCardProps {
  href: string;
  avatar: string;
  pattern: string;
  title: string;
  description: string;
  verified?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function TemplateCard({
  href,
  avatar,
  pattern,
  title,
  description,
  verified = true,
  className = "",
  children,
}: TemplateCardProps) {
  return (
    <Link href={href} className="block">
      <Card className={`hover:border-primary hover:bg-muted/40 transition-all flex flex-col justify-between h-full cursor-pointer ${className}`.trim()}>
        <AvatarPattern baseValue={pattern} size="sm" />
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CustomAvatar value={avatar} size="sm" />
              <div className="flex min-w-0 flex-1 items-center truncate text-start text-sm font-medium">
                <div className="max-w-20 truncate">{avatar}</div>
              </div>
              {verified && <VerificationBadge status="verified" />}
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {children}
        <div className="flex-1" />
      </Card>
    </Link>
  );
} 