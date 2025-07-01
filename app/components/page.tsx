import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VerificationBadge } from "@/components/custom/verification-badge"
import { CustomAvatar } from "@/components/custom/custom-avatar"
import { SherryBadge } from "@/components/custom/sherry-badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { 
  Plus, 
  Settings, 
  User, 
  Mail, 
  Bell, 
  Search,
  ChevronDown,
  Copy,
  Check,
  Eye,
  EyeOff
} from "lucide-react"
import { SherryLogo } from "@/components/custom/sherry-logo"
import { Header, guestHeaderConfig, loggedHeaderConfig } from "@/components/header"
import { Footer } from "@/components/custom/footer"
import { Section } from "@/components/section"

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Component Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautiful, accessible, and customizable UI components built with shadcn/ui and Radix UI.
          </p>
        </div>

        {/* Custom Components Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Custom Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* VerificationBadge Demo */}
            <Card>
              <CardHeader>
                <CardTitle>VerificationBadge</CardTitle>
                <CardDescription>Shows verification status for users or items.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4 items-center">
                <VerificationBadge status="verified" />
                <VerificationBadge status="not-verified" />
                <VerificationBadge status="verified" showIcon={false} />
                <VerificationBadge status="not-verified" showIcon={false} />
              </CardContent>
            </Card>
            {/* CustomAvatar Demo */}
            <Card>
              <CardHeader>
                <CardTitle>CustomAvatar</CardTitle>
                <CardDescription>Personalized avatar with pattern and fallback.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4 items-center">
                <CustomAvatar value="Alice Smith" size="sm" />
                <CustomAvatar value="Bob Johnson" size="md" />
                <CustomAvatar value="Charlie" size="lg" />
              </CardContent>
            </Card>
            {/* SherryBadge Demo */}
            <Card>
              <CardHeader>
                <CardTitle>SherryBadge</CardTitle>
                <CardDescription>Special badge for Sherry app features.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4 items-center">
                <SherryBadge variant="sherrypurpleLight">Beta</SherryBadge>
                <SherryBadge variant="sherrypurple">Pro</SherryBadge>
                <SherryBadge variant="sherrypurpleOutline">Admin</SherryBadge>
              </CardContent>
            </Card>
            {/* SherryLogo Demo */}
            <Card>
              <CardHeader>
                <CardTitle>SherryLogo</CardTitle>
                <CardDescription>The Sherry app logo as an SVG component.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-6 items-center">
                <SherryLogo width={22} height={20} />
                <SherryLogo width={44} height={40} />
                <SherryLogo width={66} height={60} />
              </CardContent>
            </Card>
            {/* Header Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Header</CardTitle>
                <CardDescription>The main app/site header. Guest and logged-in variants shown below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="mb-2 font-semibold text-sm">Guest Header</div>
                  <div className="border rounded-lg overflow-hidden">
                    <Header config={guestHeaderConfig} />
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-sm">Logged-in Header</div>
                  <div className="border rounded-lg overflow-hidden">
                    <Header config={loggedHeaderConfig} isAuthenticated user={{ name: "Jane Doe", email: "jane@example.com" }} currentWorkspace="Jane's Workspace" workspaces={[{ id: "1", name: "Jane's Workspace", type: "personal" }]} notificationCount={2} />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Footer Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Footer</CardTitle>
                <CardDescription>The site footer component.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <Footer />
                </div>
              </CardContent>
            </Card>
            {/* Section Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Section</CardTitle>
                <CardDescription>A content section with title, description, and children.</CardDescription>
              </CardHeader>
              <CardContent>
                <Section title="Section Title" description="This is a description for the section component.">
                  <div className="text-muted-foreground">Section children go here.</div>
                </Section>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* shadcn/ui Components Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">shadcn/ui Components</h2>

          {/* Buttons Section */}
          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Buttons</h3>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different button styles and sizes available.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled</Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    With Icon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Elements Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Form Elements</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                  <CardDescription>Text inputs with different states and types.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input id="password" type="password" placeholder="Enter your password" />
                      <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="search">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="search" placeholder="Search..." className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="textarea">Textarea</Label>
                    <Textarea id="textarea" placeholder="Enter your message..." />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select & Dropdown</CardTitle>
                  <CardDescription>Selection components and dropdown menus.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Dropdown Menu</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Actions
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Messages
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Display Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Data Display</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Badges & Avatars</CardTitle>
                  <CardDescription>Status indicators and user avatars.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Verification Badges</Label>
                    <div className="flex flex-wrap gap-2">
                      <VerificationBadge status="verified" />
                      <VerificationBadge status="not-verified" />
                      <VerificationBadge status="verified" showIcon={false} />
                      <VerificationBadge status="not-verified" showIcon={false} />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Profile Card</CardTitle>
                  <CardDescription>A complete user profile example.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Software Engineer</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Pro</Badge>
                        <VerificationBadge status="verified" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Overlay Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Overlay Components</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                  <CardDescription>Modal dialogs for important actions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sheet</CardTitle>
                  <CardDescription>Side panels for additional content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                          Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <Button className="w-full">Save changes</Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interactive Examples Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Interactive Examples</h2>
            <Card>
              <CardHeader>
                <CardTitle>Copy to Clipboard</CardTitle>
                <CardDescription>Example of interactive components working together.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Input value="npm install @shadcn/ui" readOnly />
                  <Button size="icon" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </section>
      </div>
    </div>
  )
} 