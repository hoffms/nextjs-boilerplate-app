# Color Variables Guide

This document shows all the color variables used in the application and what they're used for.

## 🎨 **Primary Colors**

### **Sherry Fluor (Lime) - Primary Brand Color**
```css
--primary: var(--sherryfluor-600);           /* #C8E718 - Main primary color */
--primary-foreground: oklch(0.1 0.25 140);   /* Dark lime for text on primary */
```

**Used for:**
- Default buttons (`variant="default"`)
- Primary action buttons
- Focus rings and outlines
- Sidebar primary elements
- Links and interactive elements

### **Sherry Purple - Secondary Brand Color**
```css
--sherrypurple-50: #F1F0FA;   /* Lightest purple */
--sherrypurple-100: #E4E1F4;  /* Very light purple */
--sherrypurple-200: #C6C0E8;  /* Light purple */
--sherrypurple-300: #ABA2DD;  /* Medium light purple */
--sherrypurple-400: #8C80D1;  /* Medium purple */
--sherrypurple-500: #7162C6;  /* Base purple */
--sherrypurple-600: #5443B7;  /* Medium dark purple */
--sherrypurple-700: #41348E;  /* Dark purple */
--sherrypurple-800: #271F56;  /* Very dark purple */
--sherrypurple-900: #161231;  /* Darkest purple */
--sherrypurple-950: #0A0816;  /* Almost black purple */
```

**Used for:**
- Custom purple elements
- Available via `bg-sherrypurple-*`, `text-sherrypurple-*`, etc.

## 🌫️ **Neutral Colors (Background & Text)**

### **Background & Foreground**
```css
--background: oklch(1 0 0);                    /* Pure white */
--foreground: oklch(0.141 0.005 285.823);      /* Very dark gray (almost black) */
```

**Used for:**
- Main page background
- Primary text color
- Body background and text

### **Card & Popover**
```css
--card: oklch(1 0 0);                          /* White */
--card-foreground: oklch(0.141 0.005 285.823); /* Dark text */
--popover: oklch(1 0 0);                       /* White */
--popover-foreground: oklch(0.141 0.005 285.823); /* Dark text */
```

**Used for:**
- Card backgrounds
- Popover/dropdown backgrounds
- Modal backgrounds
- Feature announcement section

## 🎯 **Interactive Colors**

### **Secondary (Ghost Buttons)**
```css
--secondary: oklch(0.96 0.002 0);              /* Light neutral gray */
--secondary-foreground: oklch(0.21 0.006 285.885); /* Dark text */
```

**Used for:**
- Ghost buttons (`variant="ghost"`)
- Secondary action buttons
- Hover states for ghost buttons

### **Muted (Subtle Elements)**
```css
--muted: oklch(0.96 0.002 0);                  /* Light neutral gray */
--muted-foreground: oklch(0.45 0.01 0);        /* Medium neutral gray */
```

**Used for:**
- Muted text (section titles, descriptions)
- Disabled states
- Subtle background elements
- Placeholder text

### **Accent (Hover States)**
```css
--accent: oklch(0.96 0.002 0);                 /* Light neutral gray */
--accent-foreground: oklch(0.21 0.006 285.885); /* Dark text */
```

**Used for:**
- Hover states
- Focus states
- Interactive element backgrounds

## 🔗 **Border & Input Colors**

### **Borders & Inputs**
```css
--border: oklch(0.9 0.003 0);                  /* Medium neutral gray */
--input: oklch(0.9 0.003 0);                   /* Medium neutral gray */
```

**Used for:**
- Border colors
- Input field borders
- Divider lines
- Card borders

### **Ring (Focus States)**
```css
--ring: var(--sherryfluor-600);                /* Sherry Fluor lime */
```

**Used for:**
- Focus rings
- Outline states
- Keyboard navigation indicators

## 🚨 **Status Colors**

### **Destructive (Errors/Warnings)**
```css
--destructive: oklch(0.577 0.245 27.325);      /* Red */
```

**Used for:**
- Error messages
- Delete buttons
- Warning states
- Destructive actions

## 📊 **Chart Colors**

### **Chart Palette**
```css
--chart-1: oklch(0.646 0.222 41.116);          /* Orange */
--chart-2: oklch(0.6 0.118 184.704);           /* Blue */
--chart-3: oklch(0.398 0.07 227.392);          /* Purple */
--chart-4: oklch(0.828 0.189 84.429);          /* Yellow */
--chart-5: oklch(0.769 0.188 70.08);           /* Green */
```

**Used for:**
- Data visualizations
- Charts and graphs
- Progress indicators

## 🎨 **Sidebar Specific Colors**

### **Sidebar Theme**
```css
--sidebar: oklch(0.985 0 0);                   /* Very light gray */
--sidebar-foreground: oklch(0.141 0.005 285.823); /* Dark text */
--sidebar-primary: var(--sherryfluor-600);     /* Sherry Fluor lime */
--sidebar-primary-foreground: oklch(0.1 0.25 140); /* Dark lime */
--sidebar-accent: oklch(0.96 0.002 0);         /* Light neutral gray */
--sidebar-accent-foreground: oklch(0.21 0.006 285.885); /* Dark text */
--sidebar-border: oklch(0.9 0.003 0);          /* Medium neutral gray */
--sidebar-ring: var(--sherryfluor-600);        /* Sherry Fluor lime */
```

**Used for:**
- Sidebar background
- Sidebar navigation items
- Sidebar hover states
- Sidebar focus states

## 🌙 **Dark Mode Colors**

### **Dark Mode Overrides**
```css
--background: oklch(0.141 0.005 285.823);      /* Very dark gray */
--foreground: oklch(0.985 0 0);                /* White text */
--card: oklch(0.21 0.006 285.885);             /* Dark gray */
--card-foreground: oklch(0.985 0 0);           /* White text */
--primary: var(--sherryfluor-500);             /* Lighter lime for dark mode */
--secondary: oklch(0.25 0.003 0);              /* Dark neutral gray */
--muted: oklch(0.25 0.003 0);                  /* Dark neutral gray */
--muted-foreground: oklch(0.65 0.008 0);       /* Medium neutral gray */
--border: oklch(1 0 0 / 10%);                  /* White with opacity */
--input: oklch(1 0 0 / 15%);                   /* White with opacity */
```

## 🎯 **Usage Examples**

### **Button Variants**
```tsx
// Primary button (Sherry Fluor lime)
<Button variant="default">Primary Action</Button>

// Secondary button (Neutral gray)
<Button variant="secondary">Secondary Action</Button>

// Ghost button (Transparent with neutral hover)
<Button variant="ghost">Ghost Button</Button>

// Outline button (Sherry Fluor border)
<Button variant="outline">Outline Button</Button>

// Destructive button (Red)
<Button variant="destructive">Delete</Button>
```

### **Text Colors**
```tsx
// Primary text
<div className="text-foreground">Main text</div>

// Muted text
<div className="text-muted-foreground">Subtle text</div>

// Primary color text
<div className="text-primary">Lime text</div>
```

### **Background Colors**
```tsx
// Main background
<div className="bg-background">Page background</div>

// Card background
<div className="bg-card">Card background</div>

// Muted background
<div className="bg-muted">Subtle background</div>

// Primary background
<div className="bg-primary">Lime background</div>
```

### **Border Colors**
```tsx
// Default border
<div className="border">Border</div>

// Primary border
<div className="border-primary">Lime border</div>
```

## 🔧 **Custom Color Usage**

### **Sherry Purple**
```tsx
<div className="bg-sherrypurple-500 text-white">Purple background</div>
<div className="text-sherrypurple-600">Purple text</div>
<div className="border-sherrypurple-200">Purple border</div>
```

### **Sherry Fluor**
```tsx
<div className="bg-sherryfluor-500 text-black">Lime background</div>
<div className="text-sherryfluor-600">Lime text</div>
<div className="border-sherryfluor-200">Lime border</div>
```

## 📝 **Notes**

- **Sherry Fluor** is the primary brand color used throughout the app
- **Neutral grays** provide a clean, professional base
- **Sherry Purple** is available for custom purple elements
- **Dark mode** automatically adjusts all colors for better contrast
- **All colors** are defined using OKLCH color space for better perceptual uniformity 