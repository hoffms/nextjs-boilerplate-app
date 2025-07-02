# Component Organization Guide

## 📁 Simple Structure

```
components/
├── ui/                    # UI primitives (shadcn/ui components)
│   ├── button.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   └── ...
├── layout/               # Layout components
│   ├── header.tsx
│   ├── sidebar.tsx
│   ├── layout-content.tsx
│   └── sidebar-config.tsx
├── shared/               # Reusable business components
│   ├── custom-avatar.tsx
│   ├── sherry-logo.tsx
│   ├── sherry-badge.tsx
│   ├── verification-badge.tsx
│   ├── user-avatar-menu.tsx
│   ├── workspace-selector.tsx
│   ├── template-card.tsx
│   ├── footer.tsx
│   └── shapes.tsx
├── dev/                  # Development tools
│   ├── dev-menu.tsx
│   └── error-boundary.tsx
├── theme-toggle.tsx      # Theme component (can stay in root)
└── theme-provider.tsx    # Theme provider (can stay in root)
```

## 🎯 Simple Organization Principles

### **1. `/ui` - UI Primitives**
- **Purpose**: Reusable, unstyled UI components (shadcn/ui)
- **Examples**: Button, Input, Dialog, etc.
- **Rule**: No business logic, just UI

### **2. `/layout` - Layout Components**
- **Purpose**: Page structure and layout
- **Examples**: Header, Sidebar, LayoutContent
- **Rule**: Define how pages are structured

### **3. `/shared` - Shared Business Components**
- **Purpose**: Reusable components with business logic
- **Examples**: CustomAvatar, SherryLogo, WorkspaceSelector
- **Rule**: Used across multiple features

### **4. `/dev` - Development Tools**
- **Purpose**: Development and debugging
- **Examples**: DevMenu, ErrorBoundary
- **Rule**: Only used in development

### **5. Root Level**
- **Purpose**: Simple, standalone components
- **Examples**: ThemeToggle, ThemeProvider
- **Rule**: Keep it simple, don't over-organize

## 🚀 Benefits

- **Simple**: Easy to understand and navigate
- **Practical**: Fits most projects without over-engineering
- **Scalable**: Can grow without becoming complex
- **Team-Friendly**: New developers get it immediately

## 📋 Quick Migration

```bash
# Create directories
mkdir -p components/{layout,shared,dev}

# Move layout components
mv components/header.tsx components/layout/
mv components/sidebar.tsx components/layout/
mv components/layout-content.tsx components/layout/
mv components/sidebar-config.tsx components/layout/

# Move shared components
mv components/custom/* components/shared/
rmdir components/custom

# Move dev components
mv components/dev-menu.tsx components/dev/
mv components/error-boundary.tsx components/dev/

# Update imports (automated)
```

## 💡 Import Examples

```tsx
// Layout components
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

// Shared components
import { CustomAvatar } from "@/components/shared/custom-avatar";
import { SherryLogo } from "@/components/shared/sherry-logo";

// Dev components
import { DevMenu } from "@/components/dev/dev-menu";

// Root components
import { ThemeToggle } from "@/components/theme-toggle";
``` 