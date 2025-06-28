import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  Code, 
  Download, 
  Github, 
  Terminal,
  Copy,
  Check,
  ExternalLink
} from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how to use this Next.js boilerplate with shadcn/ui components effectively.
          </p>
        </div>

        {/* Quick Start */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Quick Start</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Installation
              </CardTitle>
              <CardDescription>
                Get started with the boilerplate in minutes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">1. Clone the repository</Label>
                <div className="flex items-center space-x-2">
                  <Input 
                    value="git clone https://github.com/your-username/nextjs-boilerplate-app.git" 
                    readOnly 
                    className="font-mono text-sm"
                  />
                  <Button size="icon" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">2. Install dependencies</Label>
                <div className="flex items-center space-x-2">
                  <Input 
                    value="npm install" 
                    readOnly 
                    className="font-mono text-sm"
                  />
                  <Button size="icon" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">3. Run the development server</Label>
                <div className="flex items-center space-x-2">
                  <Input 
                    value="npm run dev" 
                    readOnly 
                    className="font-mono text-sm"
                  />
                  <Button size="icon" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in Browser
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features & Technologies */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Features & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Next.js 15</CardTitle>
                <CardDescription>
                  Latest version with App Router, Server Components, and Turbopack for blazing fast development.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>
                  Beautiful, accessible, and customizable components built with Radix UI and Tailwind CSS.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>
                  Full TypeScript support for better developer experience and type safety.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Usage Guide</h2>
          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="styling">Styling</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="components" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Using shadcn/ui Components</CardTitle>
                  <CardDescription>
                    Learn how to import and use components in your pages.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Import a component</Label>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        {`import { Button } from "@/components/ui/button"`}
                      </code>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Use in your component</Label>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        {`export default function MyPage() {
  return (
    <Button variant="outline">
      Click me
    </Button>
  )
}`}
                      </code>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      View Component Examples
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="styling" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Customizing Styles</CardTitle>
                  <CardDescription>
                    Learn how to customize the design system and components.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">CSS Variables</Label>
                    <p className="text-sm text-muted-foreground">
                      The design system uses CSS variables for easy customization. 
                      You can modify colors, spacing, and other design tokens in <code>app/globals.css</code>.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Tailwind CSS</Label>
                    <p className="text-sm text-muted-foreground">
                      All components are built with Tailwind CSS classes. 
                      You can extend the configuration in <code>tailwind.config.js</code>.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Component Variants</Label>
                    <p className="text-sm text-muted-foreground">
                      Most components support multiple variants (default, secondary, outline, etc.) 
                      that you can use to match your design needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="deployment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Deploying Your App</CardTitle>
                  <CardDescription>
                    Deploy your Next.js application to various platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Vercel (Recommended)</Label>
                    <p className="text-sm text-muted-foreground">
                      Deploy to Vercel for the best Next.js experience with automatic deployments.
                    </p>
                    <Button variant="outline" size="sm">
                      Deploy to Vercel
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Netlify</Label>
                    <p className="text-sm text-muted-foreground">
                      Deploy to Netlify with their Next.js plugin for static site generation.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Self-hosted</Label>
                    <p className="text-sm text-muted-foreground">
                      Build and deploy to your own server or cloud provider.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        {`npm run build
npm start`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Best Practices */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Component Organization</CardTitle>
                <CardDescription>
                  Keep your components organized and maintainable.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use the <code>@/components/ui</code> alias for shadcn/ui components</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Create custom components in <code>@/components</code></span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Keep pages in <code>app/</code> directory</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Optimize your application for better performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use Next.js Image component for optimized images</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Implement proper loading states</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use React.memo for expensive components</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex-col items-start">
              <Github className="h-5 w-5 mb-2" />
              <span className="font-medium">GitHub Repository</span>
              <span className="text-sm text-muted-foreground">View source code</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex-col items-start">
              <BookOpen className="h-5 w-5 mb-2" />
              <span className="font-medium">shadcn/ui Docs</span>
              <span className="text-sm text-muted-foreground">Component documentation</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex-col items-start">
              <ExternalLink className="h-5 w-5 mb-2" />
              <span className="font-medium">Next.js Docs</span>
              <span className="text-sm text-muted-foreground">Framework documentation</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
} 