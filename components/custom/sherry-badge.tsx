import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const sherryBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        // Sherry Fluor (Lime) Brand Variants
        sherryfluor:
          "border-transparent bg-sherryfluor-600 text-sherryfluor-50 [a&]:hover:bg-sherryfluor-700",
        sherryfluorLight:
          "border-sherryfluor-200 bg-sherryfluor-50 text-sherryfluor-700 [a&]:hover:bg-sherryfluor-100",
        sherryfluorOutline:
          "border-sherryfluor-300 text-sherryfluor-700 [a&]:hover:bg-sherryfluor-50",
        sherryfluorSubtle:
          "border-transparent bg-sherryfluor-100 text-sherryfluor-800 [a&]:hover:bg-sherryfluor-200",
        // Sherry Purple Brand Variants
        sherrypurple:
          "border-transparent bg-sherrypurple-600 text-sherrypurple-50 [a&]:hover:bg-sherrypurple-700",
        sherrypurpleLight:
          "border-sherrypurple-200 bg-sherrypurple-50 text-sherrypurple-700 [a&]:hover:bg-sherrypurple-100",
        sherrypurpleOutline:
          "border-sherrypurple-300 text-sherrypurple-700 [a&]:hover:bg-sherrypurple-50",
        sherrypurpleSubtle:
          "border-transparent bg-sherrypurple-100 text-sherrypurple-800 [a&]:hover:bg-sherrypurple-200",
        // Standard variants for compatibility
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      },
    },
  }
)

interface SherryBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: VariantProps<typeof sherryBadgeVariants>["variant"]
  asChild?: boolean
}

function SherryBadge({
  className,
  variant,
  ...props
}: SherryBadgeProps) {
  return (
    <span
      className={cn(sherryBadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { SherryBadge, sherryBadgeVariants } 