import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
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
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
