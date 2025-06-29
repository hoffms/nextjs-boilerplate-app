import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { BadgeCheck, X } from "lucide-react"
import { cn } from "@/lib/utils"

const verificationBadgeVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold font-mono leading-tight lowercase transition-colors",
  {
    variants: {
      status: {
        verified: "bg-sherryfluor-500 text-sherryfluor-950",
        "not-verified": "bg-orange-500 text-white",
      },
    },
    defaultVariants: {
      status: "not-verified",
    },
  }
)

export interface VerificationBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof verificationBadgeVariants> {
  status?: "verified" | "not-verified"
  showIcon?: boolean
}

const VerificationBadge = React.forwardRef<HTMLSpanElement, VerificationBadgeProps>(
  ({ className, status = "not-verified", showIcon = true, ...props }, ref) => {
    const Icon = status === "verified" ? BadgeCheck : X
    
    return (
      <span
        ref={ref}
        className={cn(verificationBadgeVariants({ status }), className)}
        {...props}
      >
        {showIcon && <Icon className="w-4 h-4" />}
        <span>{status === "verified" ? "verified" : "not verified"}</span>
      </span>
    )
  }
)
VerificationBadge.displayName = "VerificationBadge"

export { VerificationBadge, verificationBadgeVariants } 