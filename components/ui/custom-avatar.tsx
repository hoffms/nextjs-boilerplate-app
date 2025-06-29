import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { generateAvatar, allCustomShapes } from "@/lib/avatar-generator"

const customAvatarVariants = cva(
  "inline-block rounded-full overflow-hidden relative",
  {
    variants: {
      size: {
        sm: "w-6 h-6",
        md: "w-8 h-8", 
        lg: "w-12 h-12",
        xl: "w-16 h-16",
        "2xl": "w-20 h-20",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface CustomAvatarProps extends VariantProps<typeof customAvatarVariants> {
  value?: string
  displayValue?: string
  className?: string
  colors?: string[]
  backgroundColor?: string
  border?: boolean
  shadow?: boolean
}

const sizeMap = {
  sm: 24,  // matches w-6 h-6 (24px)
  md: 32,  // matches w-8 h-8 (32px)
  lg: 48,  // matches w-12 h-12 (48px)
  xl: 64,  // matches w-16 h-16 (64px)
  "2xl": 80, // matches w-20 h-20 (80px)
}

const CustomAvatar = React.forwardRef<HTMLDivElement, CustomAvatarProps>(
  (
    { className, size = "md", value, displayValue, colors, backgroundColor, border = false, shadow = false },
    ref
  ) => {
    const avatarValue = value || displayValue || "User"
    const avatarData = generateAvatar({ value: avatarValue, colors, backgroundColor })

    // Create gradient CSS
    const gradientColors = avatarData.gradientColors.join(", ")
    const gradientStyle = {
      background: `linear-gradient(${avatarData.gradientDirection}, ${gradientColors})`,
    }

    // Get the shape component and calculate size
    const ShapeComp = allCustomShapes[avatarData.shapeIndex] as React.ComponentType<{ width: number; className?: string }>
    const avatarSize = sizeMap[size as keyof typeof sizeMap] || 32
    const shapeSize = Math.max(8, Math.floor(avatarSize * 0.4)) // 40% of avatar size, minimum 8px

    return (
      <div
        ref={ref}
        className={cn(
          customAvatarVariants({ size }),
          border && "ring-2 ring-border",
          shadow && "shadow-md",
          className
        )}
        style={gradientStyle}
      >
        {/* Shape overlay with padding */}
        <div className="absolute inset-0 flex items-center justify-center p-1">
          <div
            style={{ 
              color: 'rgba(255, 255, 255, 0.5)', // Theme background color with 50% transparency
              transform: `rotate(${avatarData.shapeRotation}deg)`
            }}
          >
            <ShapeComp width={shapeSize} />
          </div>
        </div>
      </div>
    )
  }
)
CustomAvatar.displayName = "CustomAvatar"

export { CustomAvatar, customAvatarVariants } 