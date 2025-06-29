import React from "react";

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function Section({
  title,
  description,
  children,
  className = "",
  centered = true,
}: SectionProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`${centered ? "text-center" : ""} space-y-4 mb-8`}>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
} 