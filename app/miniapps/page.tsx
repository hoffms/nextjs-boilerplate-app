import { Section } from "@/components/section"

export default function MiniAppsPage() {
  return (
    <Section title="My Mini dApps" className="flex flex-col items-center justify-center min-h-full p-8">
      <div className="text-center space-y-4">
        <p className="text-lg text-gray-600 max-w-md">
          Manage and organize your Mini dApps. Create, edit, and deploy your applications all in one place.
        </p>
      </div>
    </Section>
  );
} 