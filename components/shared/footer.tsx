import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2024 NextBoiler. Built with Next.js and shadcn/ui.</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
            <Button variant="ghost" size="sm">
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
} 