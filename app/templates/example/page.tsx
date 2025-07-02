import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CustomAvatar } from "@/components/shared/custom-avatar"
import { VerificationBadge } from "@/components/shared/verification-badge"
import { Download, Star, Github, Globe, Users, Zap, Code, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExampleTemplatePage() {
  return (
    <div className="container mx-auto px-4 py-32">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/templates">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Templates
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="relative h-64 bg-gradient-to-br from-sherrypurple-400 via-sherrypurple-500 to-sherrypurple-600 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            <div className="flex items-center gap-4">
              <CustomAvatar value="Example" size="lg" />
              <div className="flex-1">
                <h1 className="text-3xl font-bold">Template Example</h1>
                <p className="text-muted-foreground">This is a placeholder for template details. Real data will be shown here soon.</p>
              </div>
              <div className="flex items-center gap-2">
                <VerificationBadge status="verified" />
              </div>
            </div>
          </div>
          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Feature 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Feature 2</span>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js 15</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Join Card */}
          <Card>
            <CardHeader>
              <CardTitle>Get Template</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Downloads</span>
                <span className="font-medium">-</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">-</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Stars</span>
                <span className="font-medium">-</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Version</span>
                <span className="font-medium">-</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">License</span>
                <span className="font-medium">-</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Updated</span>
                <span className="font-medium">-</span>
              </div>
              <div className="pt-4 space-y-3">
                <Button className="w-full" size="lg" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Open in Studio
                </Button>
                <Button variant="outline" className="w-full" asChild disabled>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild disabled>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Creator Info */}
          <Card>
            <CardHeader>
              <CardTitle>Creator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <CustomAvatar value="Example" size="md" />
                <div>
                  <div className="font-medium">Example</div>
                  <div className="text-sm text-muted-foreground">Verified Provider</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 