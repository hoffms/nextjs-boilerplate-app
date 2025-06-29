import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CustomAvatar } from "@/components/ui/custom-avatar"
import { VerificationBadge } from "@/components/ui/verification-badge"
import { 
  ArrowLeft, 
  Download, 
  Star, 
  Eye, 
  Code, 
  Palette, 
  Zap, 
  Shield,
  BadgeCheck,
  ExternalLink,
  Github,
  Globe,
  Calendar,
  Users
} from "lucide-react"
import Link from "next/link"

interface TemplateDetailsPageProps {
  params: Promise<{
    slug: string
  }>
}

// Template data - in a real app, this would come from a database
const templateData = {
  "dashboard": {
    title: "Dashboard Template",
    description: "Complete dashboard with charts, tables, and analytics.",
    longDescription: "A comprehensive dashboard template built with Next.js 15 and shadcn/ui. Features real-time data visualization, interactive charts, user management, and responsive design. Perfect for SaaS applications, admin panels, and business intelligence tools.",
    creator: "LFJ",
    downloads: "2.1k",
    rating: "4.8",
    stars: 156,
    lastUpdated: "2024-01-15",
    version: "2.1.0",
    license: "MIT",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
    features: [
      "Responsive dashboard layout",
      "Interactive data visualizations",
      "User authentication system",
      "Real-time data updates",
      "Dark/light mode support",
      "Mobile-first design",
      "SEO optimized",
      "Performance optimized"
    ],
    gradient: "from-sherrypurple-400 via-sherrypurple-500 to-sherrypurple-600"
  },
  "community": {
    title: "Community Template",
    description: "Social platform with user profiles and interactions.",
    longDescription: "A modern social platform template featuring user profiles, real-time messaging, community forums, and engagement tools. Built with cutting-edge technologies for scalability and performance.",
    creator: "Sherry",
    downloads: "856",
    rating: "4.6",
    stars: 89,
    lastUpdated: "2024-01-10",
    version: "1.8.2",
    license: "MIT",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Socket.io"],
    features: [
      "User profile system",
      "Real-time messaging",
      "Community forums",
      "Content moderation",
      "Notification system",
      "Search functionality",
      "Social interactions",
      "Analytics dashboard"
    ],
    gradient: "from-sherrypurple-400 via-sherrypurple-300 to-sherrypurple-600"
  },
  "analytics": {
    title: "Analytics Template",
    description: "Data visualization and reporting dashboard.",
    longDescription: "Advanced analytics and reporting template with comprehensive data visualization capabilities. Includes custom charts, data filtering, export functionality, and real-time monitoring.",
    creator: "Wormhole",
    downloads: "1.4k",
    rating: "4.9",
    stars: 234,
    lastUpdated: "2024-01-12",
    version: "3.0.1",
    license: "MIT",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "D3.js"],
    features: [
      "Advanced data visualization",
      "Custom chart components",
      "Data filtering & sorting",
      "Export functionality",
      "Real-time monitoring",
      "Performance metrics",
      "User behavior tracking",
      "Custom reporting"
    ],
    gradient: "from-sherrypurple-300 via-sherrypurple-400 to-sherrypurple-500"
  }
}

export default async function TemplateDetailsPage({ params }: TemplateDetailsPageProps) {
  const { slug } = await params
  const template = templateData[slug as keyof typeof templateData]
  
  if (!template) {
    return (
      <div className="container mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Template Not Found</h1>
          <p className="text-muted-foreground mt-4">The template you're looking for doesn't exist.</p>
          <Button asChild className="mt-6">
            <Link href="/templates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-32">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
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
              <CustomAvatar value={template.creator} size="lg" />
              <div className="flex-1">
                <h1 className="text-3xl font-bold">{template.title}</h1>
                <p className="text-muted-foreground">{template.longDescription}</p>
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
                {template.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
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
                {template.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Download Card */}
          <Card>
            <CardHeader>
              <CardTitle>Get Template</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Downloads</span>
                <span className="font-medium">{template.downloads}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{template.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Stars</span>
                <span className="font-medium">{template.stars}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Version</span>
                <span className="font-medium">{template.version}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">License</span>
                <span className="font-medium">{template.license}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Updated</span>
                <span className="font-medium">{template.lastUpdated}</span>
              </div>
              
              <div className="pt-4 space-y-3">
                <Button className="w-full" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
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
                <CustomAvatar value={template.creator} size="md" />
                <div>
                  <div className="font-medium">{template.creator}</div>
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