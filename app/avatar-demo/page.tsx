"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CustomAvatar } from "@/components/custom/custom-avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Dice1 } from "lucide-react"
import * as Shapes from "@/src/shapes"

export default function AvatarDemoPage() {
  const [avatarInput, setAvatarInput] = useState("John Doe")

  const generateRandomInput = () => {
    const randomOptions = [
      // Random names
      "Emma Rodriguez", "Marcus Chen", "Sophia Patel", "Lucas Thompson", "Isabella Kim",
      "Noah Garcia", "Olivia Johnson", "William Brown", "Ava Davis", "James Wilson",
      // Random emails
      "developer@startup.io", "user123@company.net", "test.user+random@gmail.com",
      "john.doe@enterprise.org", "alice.smith@tech.co", "bob.wilson@creative.agency",
      // Random usernames
      "creative_dev_2024", "tech_enthusiast", "design_master", "code_wizard", "pixel_artist",
      "digital_nomad", "startup_founder", "product_manager", "ux_designer", "fullstack_dev",
      // Random text
      "Random Text Generator", "Avatar Demo Test", "Unique Identifier", "Test User Account",
      "Sample Data Entry", "Demo Account 2024", "Test Environment", "Development User"
    ]
    
    const randomIndex = Math.floor(Math.random() * randomOptions.length)
    setAvatarInput(randomOptions[randomIndex])
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-8">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Avatar Demo</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful, unique avatars generated from text using vivid gradients and geometric shapes.
          </p>
        </div>

        {/* Live Testing */}
        <section className="space-y-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-80 sm:w-96 md:w-[28rem] flex flex-col items-center space-y-4 p-6 bg-muted rounded-lg border text-center">
                <CustomAvatar value={avatarInput} size="xl" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{avatarInput || "Enter your X name"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {avatarInput.startsWith('@') ? avatarInput : `@${avatarInput.toLowerCase().replace(/\s+/g, '')}`}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-md">
              <Label htmlFor="avatar-input" className="text-sm font-medium text-center block">
                Enter any text to see your unique avatar generated in real-time.
              </Label>
              <div className="flex gap-2 mt-2">
                <Input 
                  id="avatar-input" 
                  placeholder="e.g., John Doe, user@example.com, or any text"
                  value={avatarInput}
                  onChange={(e) => setAvatarInput(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={generateRandomInput}
                  variant="outline"
                  size="default"
                >
                  <Dice1 className="mr-2 h-4 w-4" />
                  Random
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Try different names, emails, or even random text to see unique avatars!
              </p>
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Size Variations</h2>
          <Card>
            <CardHeader>
              <CardTitle>All Available Sizes</CardTitle>
              <CardDescription>Custom avatars scale beautifully across all size variants.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <CustomAvatar value="Alice Johnson" size="sm" />
                  <span className="text-xs text-muted-foreground">Small</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CustomAvatar value="Bob Smith" size="md" />
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CustomAvatar value="Carol Davis" size="lg" />
                  <span className="text-xs text-muted-foreground">Large</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CustomAvatar value="David Wilson" size="xl" />
                  <span className="text-xs text-muted-foreground">Extra Large</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CustomAvatar value="Eva Brown" size="2xl" />
                  <span className="text-xs text-muted-foreground">2XL</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Examples Gallery */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Examples Gallery</h2>
          <Card>
            <CardHeader>
              <CardTitle>Different Input Types</CardTitle>
              <CardDescription>See how various text inputs create unique and beautiful avatars.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Names */}
              <div>
                <h3 className="text-lg font-medium mb-4">Names</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="Sarah Connor" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Sarah Connor</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="Alex Chen" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Alex Chen</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="Maria Garcia" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Maria Garcia</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="David Kim" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">David Kim</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="Emma Wilson" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Emma Wilson</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="Frank Miller" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Frank Miller</span>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div>
                <h3 className="text-lg font-medium mb-4">Email Addresses</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="user@example.com" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">user@example.com</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="test.user+tag@gmail.com" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">test.user+tag@gmail.com</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="john.doe@company.org" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">john.doe@company.org</span>
                  </div>
                </div>
              </div>

              {/* Usernames & Special Characters */}
              <div>
                <h3 className="text-lg font-medium mb-4">Usernames & Special Characters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="john_doe123" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">john_doe123</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="user-name" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">user-name</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="user.name" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">user.name</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="123456789" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">123456789</span>
                  </div>
                </div>
              </div>

              {/* Short vs Long Names */}
              <div>
                <h3 className="text-lg font-medium mb-4">Name Length Variations</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="A" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Single Letter</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="AB" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Two Letters</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="ABC" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Three Letters</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="Very Long Name Here" size="lg" />
                    <span className="text-xs text-muted-foreground text-center">Long Name</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CustomAvatar value="Dr. John Smith Jr." size="lg" />
                    <span className="text-xs text-muted-foreground text-center">With Titles</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Real-world Usage */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Real-world Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>A complete user profile with avatar integration.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <CustomAvatar value="Sarah Connor" size="xl" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Sarah Connor</h3>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Multiple team members with consistent avatars.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CustomAvatar value="Alex Chen" size="md" />
                  <div>
                    <p className="font-medium">Alex Chen</p>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CustomAvatar value="Maria Garcia" size="md" />
                  <div>
                    <p className="font-medium">Maria Garcia</p>
                    <p className="text-sm text-muted-foreground">UX Designer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CustomAvatar value="David Kim" size="md" />
                  <div>
                    <p className="font-medium">David Kim</p>
                    <p className="text-sm text-muted-foreground">Backend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Deterministic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Same input always generates the same avatar, ensuring consistency across your application.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vivid Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Uses bright, vibrant gradients with subtle shape overlays for modern, eye-catching designs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scalable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Perfect scaling across all size variants with responsive shape sizing and positioning.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Shapes Gallery */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Shapes Gallery</CardTitle>
              <CardDescription>All available shapes used in the avatar generator, for reference and inspiration.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {Object.entries(Shapes)
                  .filter(([key]) => key.startsWith("Shape"))
                  .map(([key, ShapeComp]) => (
                    <div
                      key={key}
                      className="flex flex-col items-center p-4 bg-muted/50 rounded-lg border border-border/50 shadow-sm"
                    >
                      <ShapeComp width={48} className="text-muted-foreground/60" />
                      <span className="text-xs text-muted-foreground/80 mt-2">{key}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Credits */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Credits & Inspiration</CardTitle>
              <CardDescription>Special thanks to the creators who inspired this avatar system.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="font-semibold">Avvvatars</h3>
                  <p className="text-sm text-muted-foreground">
                    Beautifully crafted unique avatar placeholder library that inspired this implementation.
                  </p>
                  <a 
                    href="https://github.com/nusu/avvvatars" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="font-semibold">Monika Michalczyk</h3>
                  <p className="text-sm text-muted-foreground">
                    Visual designer who created the beautiful SVG shapes used in this avatar system.
                  </p>
                  <a 
                    href="https://www.monikamichalczyk.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Visit Portfolio →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 