import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CustomAvatar } from "@/components/ui/custom-avatar"
import { VerificationBadge } from "@/components/ui/verification-badge"
import { AvatarPattern } from "@/components/avatar-pattern"
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Zap, 
  Shield, 
  Smartphone,
  Github,
  Star,
  Users,
  Download,
  TrendingUp,
  Trophy,
  Coins,
  User,
  ExternalLink,
  Eye,
  Check,
  BadgeCheck,
  MessageCircle,
  Send
} from "lucide-react"
import { Section } from "@/components/section"
import Link from "next/link"
import { SherryLogo } from "@/components/sherry-logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
          <SherryLogo width={56} height={52} className="mb-8 mx-auto" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Which mini dApp do you want to publish today?</h1>
          <div className="w-full">
            <div className="flex flex-col items-center">
              <div className="w-full bg-background border rounded-xl shadow-sm flex items-center px-4 py-3 mb-4">
                <input
                  type="text"
                  placeholder="Describe your mini dApp idea…"
                  className="flex-1 bg-transparent outline-none text-base sm:text-lg placeholder:text-muted-foreground"
                />
                <button className="ml-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Send className="h-5 w-5 text-primary" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <button className="px-4 py-1 rounded-full bg-muted text-sm hover:bg-primary/10 transition">What can I publish?</button>
                <button className="px-4 py-1 rounded-full bg-muted text-sm hover:bg-primary/10 transition">Launch a token</button>
                <button className="px-4 py-1 rounded-full bg-muted text-sm hover:bg-primary/10 transition">Create a voting app</button>
                <button className="px-4 py-1 rounded-full bg-muted text-sm hover:bg-primary/10 transition">NFT gallery</button>
                <button className="px-4 py-1 rounded-full bg-muted text-sm hover:bg-primary/10 transition">Analytics dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Templates Section */}
      <Section
        title="Verified Templates"
        description="Ready-to-publish templates from safe, verified providers. Each template is thoroughly reviewed and tested for quality and security."
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <Link href="/templates/dashboard" className="block">
              <Card className="hover:border-primary hover:bg-muted/40 transition-all flex flex-col justify-between h-full cursor-pointer">
                {/* Logo/Image Section */}
                <AvatarPattern baseValue="Dashboard" size="sm" />
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CustomAvatar value="LFJ" size="sm" />
                      <div className="flex min-w-0 flex-1 items-center truncate text-start text-sm font-medium">
                        <div className="max-w-20 truncate">LFJ</div>
                      </div>
                      <VerificationBadge status="verified" />
                    </div>
                  </div>
                  <CardTitle>Dashboard Template</CardTitle>
                  <CardDescription>Complete dashboard with charts, tables, and analytics.</CardDescription>
                </CardHeader>
                <div className="flex-1" />
              </Card>
            </Link>

            <Link href="/templates/community" className="block">
              <Card className="hover:border-primary hover:bg-muted/40 transition-all flex flex-col justify-between h-full cursor-pointer">
                {/* Logo/Image Section */}
                <AvatarPattern baseValue="Community" size="sm" />
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CustomAvatar value="Sherry" size="sm" />
                      <div className="flex min-w-0 flex-1 items-center truncate text-start text-sm font-medium">
                        <div className="max-w-20 truncate">Sherry</div>
                      </div>
                      <VerificationBadge status="verified" />
                    </div>
                  </div>
                  <CardTitle>Community Template</CardTitle>
                  <CardDescription>Social platform with user profiles and interactions.</CardDescription>
                </CardHeader>
                <div className="flex-1" />
              </Card>
            </Link>

            <Link href="/templates/analytics" className="block">
              <Card className="hover:border-primary hover:bg-muted/50 transition-all flex flex-col justify-between h-full cursor-pointer">
                {/* Logo/Image Section */}
                <AvatarPattern baseValue="Analytics" size="sm" />
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CustomAvatar value="Wormhole" size="sm" />
                      <div className="flex min-w-0 flex-1 items-center truncate text-start text-sm font-medium">
                        <div className="max-w-20 truncate">Wormhole</div>
                      </div>
                      <VerificationBadge status="verified" />
                    </div>
                  </div>
                  <CardTitle>Analytics Template</CardTitle>
                  <CardDescription>Data visualization and reporting dashboard.</CardDescription>
                </CardHeader>
                <div className="flex-1" />
              </Card>
            </Link>
          </div>

          {/* See More Templates Button */}
          <div className="text-center mt-8">
            <Button size="lg" className="px-8" asChild>
              <a href="/templates">
                See More Templates
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Community Apps Section */}
      <Section
        title="Community Apps"
        description="Discover amazing apps built by our community."
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* 3-Row Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {/* Row 1 */}
            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Popular</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Crypto Tracker</CardTitle>
                <CardDescription>Real-time cryptocurrency tracking</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">New</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Task Manager</CardTitle>
                <CardDescription>Productivity app for teams</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Featured</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Weather App</CardTitle>
                <CardDescription>Beautiful weather forecasts</CardDescription>
              </CardHeader>
            </Card>

            {/* Row 2 */}
            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Trending</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Fitness Tracker</CardTitle>
                <CardDescription>Health and workout monitoring</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Top Rated</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Recipe Finder</CardTitle>
                <CardDescription>Discover delicious recipes</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Popular</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Budget Planner</CardTitle>
                <CardDescription>Personal finance management</CardDescription>
              </CardHeader>
            </Card>

            {/* Row 3 */}
            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Educational</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Language Learning</CardTitle>
                <CardDescription>Interactive language courses</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Entertainment</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Music Player</CardTitle>
                <CardDescription>Stream and organize music</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-primary hover:bg-muted/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Travel</Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardTitle>Travel Planner</CardTitle>
                <CardDescription>Plan your perfect trip</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* See More Button */}
          <div className="text-center">
            <Button size="lg" className="px-8" asChild>
              <a href="/community">
                See More Community Apps
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Leaderboards Section */}
      <Section
        title="Leaderboards"
        description="Top performers across protocols, tokens, and users."
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* 3 Side-by-Side Leaderboards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Protocols Leaderboard */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Top Protocols</CardTitle>
                    <CardDescription>By total value locked</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Uniswap", tvl: "$2.1B", change: "+12.5%" },
                  { name: "Aave", tvl: "$1.8B", change: "+8.2%" },
                  { name: "Compound", tvl: "$1.2B", change: "+5.7%" },
                  { name: "Curve", tvl: "$890M", change: "+3.1%" },
                  { name: "SushiSwap", tvl: "$650M", change: "-2.4%" },
                ].map((protocol, index) => (
                  <div key={protocol.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{protocol.name}</div>
                        <div className="text-sm text-muted-foreground">{protocol.tvl}</div>
                      </div>
                    </div>
                    <Badge variant={protocol.change.startsWith('+') ? "sherryfluorLight" : "destructive"}>
                      {protocol.change}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tokens Leaderboard */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Coins className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Top Tokens</CardTitle>
                    <CardDescription>By market cap</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Ethereum", symbol: "ETH", cap: "$450B", change: "+15.2%" },
                  { name: "Bitcoin", symbol: "BTC", cap: "$890B", change: "+8.7%" },
                  { name: "Cardano", symbol: "ADA", cap: "$45B", change: "+22.1%" },
                  { name: "Solana", symbol: "SOL", cap: "$38B", change: "+18.9%" },
                  { name: "Polkadot", symbol: "DOT", cap: "$28B", change: "-5.3%" },
                ].map((token, index) => (
                  <div key={token.symbol} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{token.name}</div>
                        <div className="text-sm text-muted-foreground">{token.symbol} • {token.cap}</div>
                      </div>
                    </div>
                    <Badge variant={token.change.startsWith('+') ? "sherryfluorLight" : "destructive"}>
                      {token.change}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Users Leaderboard */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Top Users</CardTitle>
                    <CardDescription>By activity score</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Alex Chen", score: "9,847", apps: 12 },
                  { name: "Sarah Kim", score: "8,923", apps: 8 },
                  { name: "Mike Johnson", score: "7,654", apps: 15 },
                  { name: "Emma Wilson", score: "6,789", apps: 6 },
                  { name: "David Lee", score: "5,432", apps: 9 },
                ].map((user, index) => (
                  <div key={user.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-2">
                        <CustomAvatar value={user.name} size="sm" />
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.apps} apps</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{user.score}</div>
                      <div className="text-sm text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
