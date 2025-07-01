import { Section } from "@/components/section"

export default function MarketLeaderboardsPage() {
  return (
    <Section title="Market Leaderboards" className="flex flex-col items-center justify-center min-h-full p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Market Leaderboards</h1>
        <p className="text-lg text-gray-600 max-w-md">
          See which Mini dApps are trending in the market. Track performance, popularity, and discover top-rated applications.
        </p>
      </div>
    </Section>
  );
} 