// Simple Gradient Avatar Generator
// Generates unique, deterministic gradient avatars from text input

import * as React from 'react'
import * as CustomShapes from '../src/shapes'

export interface AvatarConfig {
  value: string
  colors?: string[]
  backgroundColor?: string
}

export interface AvatarData {
  backgroundColor: string
  gradientColors: string[]
  gradientDirection: string
  shapeIndex: number
  shapeColor: string
  shapeRotation: number
}

// Default color palette using vivid Tailwind colors
const DEFAULT_COLORS = [
  "#EF4444", // red-500
  "#F97316", // orange-500
  "#EAB308", // yellow-500
  "#22C55E", // green-500
  "#06B6D4", // cyan-500
  "#3B82F6", // blue-500
  "#8B5CF6", // violet-500
  "#EC4899", // pink-500
  "#F59E0B", // amber-500
  "#10B981", // emerald-500
  "#14B8A6", // teal-500
  "#6366F1", // indigo-500
  "#A855F7", // purple-500
  "#F43F5E", // rose-500
  "#84CC16", // lime-500
  "#06B6D4", // sky-500
]

// Light colors for shapes to ensure good contrast against gradients
const SHAPE_COLORS = [
  "#FFFFFF", // white
  "#F8FAFC", // slate-50
  "#FEF2F2", // red-50
  "#FFF7ED", // orange-50
  "#FEFCE8", // yellow-50
  "#F0FDF4", // green-50
  "#ECFEFF", // cyan-50
  "#EFF6FF", // blue-50
  "#F5F3FF", // violet-50
  "#FDF2F8", // pink-50
  "#FFFBEB", // amber-50
  "#ECFDF5", // emerald-50
  "#F0FDFA", // teal-50
  "#EEF2FF", // indigo-50
  "#FAF5FF", // purple-50
  "#FFF1F2", // rose-50
  "#F7FEE7", // lime-50
  "#F0F9FF", // sky-50
]

// Background colors for variety
const BACKGROUND_COLORS = [
  "#FEF2F2", // red-50
  "#FFF7ED", // orange-50
  "#FEFCE8", // yellow-50
  "#F0FDF4", // green-50
  "#ECFEFF", // cyan-50
  "#EFF6FF", // blue-50
  "#F5F3FF", // violet-50
  "#FDF2F8", // pink-50
]

// Simple hash function to generate consistent numbers from text
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// Generate a number between 0 and max based on hash
function getNumberFromHash(hash: number, max: number): number {
  return hash % max
}

// Get all shape components as an array, filtering out non-function values
export const allCustomShapes = Object.values(CustomShapes).filter(
  (shape) => typeof shape === 'function'
) as Array<React.ComponentType<{ width: number; className?: string }>> 

// Generate avatar data from text input
export function generateAvatar(config: AvatarConfig): AvatarData {
  const { value, colors = DEFAULT_COLORS, backgroundColor: customBackground } = config
  
  const hash = hashString(value)
  const hash2 = hashString(value + "2")
  const hash3 = hashString(value + "3")
  
  // Select background color
  const bgIndex = getNumberFromHash(hash, BACKGROUND_COLORS.length)
  const backgroundColor = customBackground || BACKGROUND_COLORS[bgIndex]
  
  // Select 2-3 gradient colors
  const numColors = 2 + getNumberFromHash(hash2, 2) // 2 or 3 colors
  const gradientColors: string[] = []
  
  for (let i = 0; i < numColors; i++) {
    const colorIndex = getNumberFromHash(hash + hash2 + i, colors.length)
    gradientColors.push(colors[colorIndex])
  }
  
  // Select gradient direction
  const directions = [
    "to right",
    "to left", 
    "to bottom",
    "to top",
    "to bottom right",
    "to bottom left",
    "to top right",
    "to top left"
  ]
  const directionIndex = getNumberFromHash(hash3, directions.length)
  const gradientDirection = directions[directionIndex]
  
  // Select shape and its properties
  const shapeIndex = getNumberFromHash(hash + hash2, allCustomShapes.length)
  const shapeColorIndex = getNumberFromHash(hash3, SHAPE_COLORS.length)
  const shapeRotation = getNumberFromHash(hash + hash3, 360)
  
  return {
    backgroundColor,
    gradientColors,
    gradientDirection,
    shapeIndex,
    shapeColor: SHAPE_COLORS[shapeColorIndex],
    shapeRotation
  }
} 