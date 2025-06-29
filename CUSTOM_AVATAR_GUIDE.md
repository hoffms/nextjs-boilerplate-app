# Custom Avatar Generator Guide

This document explains our custom avatar generation system that creates unique, deterministic avatars from text input.

## 🎨 **Overview**

Our custom avatar generator creates beautiful, unique avatars from any text input. It uses a deterministic algorithm, meaning the same text always generates the same avatar, making it perfect for user profiles and consistent branding.

## 🚀 **Features**

- **Deterministic**: Same input = same avatar every time
- **Brand Colors**: Uses Sherry Fluor and Sherry Purple palettes
- **Multiple Shapes**: Circles, squares, triangles, and diamonds
- **Customizable**: Size, style, colors, and background
- **No Dependencies**: Built from scratch with full control
- **TypeScript**: Fully typed for better developer experience

## 🎯 **Usage**

### Basic Usage
```tsx
import { CustomAvatar } from "@/components/ui/custom-avatar"

// Simple usage
<CustomAvatar value="John Doe" />

// With size and style
<CustomAvatar value="Jane Smith" size="lg" style="rounded" />
```

### Props
```tsx
interface CustomAvatarProps {
  value?: string              // Text to generate avatar from
  displayValue?: string       // Alternative to value
  size?: "sm" | "md" | "lg" | "xl" | "2xl"  // Avatar size
  style?: "default" | "rounded" | "square"  // Border style
  className?: string          // Additional CSS classes
  colors?: string[]           // Custom color palette
  backgroundColor?: string    // Custom background color
}
```

## 🎨 **Color System**

### Default Brand Colors
```typescript
const DEFAULT_COLORS = [
  "#C8E718", // sherryfluor-600
  "#5443B7", // sherrypurple-600
  "#D6ED51", // sherryfluor-500
  "#7162C6", // sherrypurple-500
  "#DEF174", // sherryfluor-400
  "#8C80D1", // sherrypurple-400
  "#E6F495", // sherryfluor-300
  "#ABA2DD", // sherrypurple-300
  "#EFF8BA", // sherryfluor-200
  "#C6C0E8", // sherrypurple-200
  "#F6FBDA", // sherryfluor-100
  "#E4E1F4", // sherrypurple-100
]

const BACKGROUND_COLORS = [
  "#FBFDED", // sherryfluor-50
  "#F1F0FA", // sherrypurple-50
  "#F6FBDA", // sherryfluor-100
  "#E4E1F4", // sherrypurple-100
]
```

### Custom Colors
```tsx
// Use custom colors
<CustomAvatar 
  value="Custom User" 
  colors={["#FF0000", "#00FF00", "#0000FF"]}
  backgroundColor="#F0F0F0"
/>
```

## 🔧 **Size Variants**

| Size | Dimensions | Use Case |
|------|------------|----------|
| `sm` | 24x24px | Headers, small lists |
| `md` | 32x32px | Default size |
| `lg` | 48x48px | User profiles |
| `xl` | 64x64px | Large profiles |
| `2xl` | 80x80px | Hero sections |

## 🎭 **Style Variants**

| Style | Description | Use Case |
|-------|-------------|----------|
| `default` | No border radius | Clean, modern look |
| `rounded` | Full border radius | Soft, friendly appearance |
| `square` | Small border radius | Professional, structured look |

## 🧮 **Algorithm Details**

### Hash Function
```typescript
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}
```

### Shape Generation
- **Number of shapes**: 3-5 shapes per avatar
- **Shape types**: Circle, square, triangle, diamond
- **Positioning**: Random but deterministic based on input
- **Sizing**: 15-40% of avatar size
- **Rotation**: 0-360 degrees for triangles and diamonds

### Color Selection
- Background color selected from predefined palette
- Shape colors selected from brand color palette
- All selections are deterministic based on input hash

## 📊 **Examples**

### Different Inputs
```tsx
// Each generates a unique avatar
<CustomAvatar value="John Doe" />
<CustomAvatar value="Jane Smith" />
<CustomAvatar value="Bob Johnson" />
<CustomAvatar value="Alice Brown" />
```

### Size Comparison
```tsx
<div className="flex gap-4">
  <CustomAvatar value="User" size="sm" />
  <CustomAvatar value="User" size="md" />
  <CustomAvatar value="User" size="lg" />
  <CustomAvatar value="User" size="xl" />
  <CustomAvatar value="User" size="2xl" />
</div>
```

### Style Comparison
```tsx
<div className="flex gap-4">
  <CustomAvatar value="User" style="default" />
  <CustomAvatar value="User" style="rounded" />
  <CustomAvatar value="User" style="square" />
</div>
```

## 🔧 **Advanced Usage**

### Custom Color Palette
```tsx
const customColors = [
  "#FF6B6B", // Red
  "#4ECDC4", // Teal
  "#45B7D1", // Blue
  "#96CEB4", // Green
  "#FFEAA7", // Yellow
]

<CustomAvatar 
  value="Custom User" 
  colors={customColors}
  backgroundColor="#2C3E50"
/>
```

### Integration with User Data
```tsx
// Use email as avatar source
<CustomAvatar value={user.email} />

// Use name as avatar source
<CustomAvatar value={user.name} />

// Use ID as avatar source
<CustomAvatar value={user.id.toString()} />
```

## 🎨 **Design Guidelines**

### Best Practices
1. **Consistent Input**: Use the same field (email, name, ID) across your app
2. **Appropriate Sizing**: Match avatar size to context and importance
3. **Style Consistency**: Choose one style variant for your app
4. **Color Harmony**: Use brand colors for consistency

### Accessibility
- Avatars are decorative and don't need alt text
- Ensure sufficient contrast with background
- Consider using larger sizes for better visibility

## 🔄 **Migration from External Libraries**

### From Avvvatars
```tsx
// Old (external library)
import { Avvvatars } from "@/components/ui/avvvatars"
<Avvvatars value="User" />

// New (custom implementation)
import { CustomAvatar } from "@/components/ui/custom-avatar"
<CustomAvatar value="User" />
```

### Benefits of Custom Implementation
- ✅ No external dependencies
- ✅ Full control over design
- ✅ Brand color integration
- ✅ Better performance
- ✅ TypeScript support
- ✅ Consistent with design system

## 🚀 **Performance**

- **Lightweight**: No external dependencies
- **Fast**: Simple hash-based generation
- **Cached**: Same input generates same result instantly
- **Scalable**: Works with any number of users

## 🔮 **Future Enhancements**

Potential improvements for the avatar generator:
- More shape types (stars, hexagons, etc.)
- Pattern overlays
- Gradient backgrounds
- Animation support
- Export to different formats
- Custom shape positioning algorithms 