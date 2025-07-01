"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CustomAvatar } from "@/components/custom/custom-avatar"
import { VerificationBadge } from "@/components/custom/verification-badge"
import { AvatarPattern } from "@/components/custom/avatar-pattern"
import { BadgeCheck } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SherryLogo } from "@/components/custom/sherry-logo"
import { Button } from "@/components/ui/button"
import { TemplateCard } from "@/components/custom"

const templates = [
  {
    href: "/templates/example",
    avatar: "DAO",
    pattern: "DAO",
    title: "DAO Voting",
    description: "Create and participate in decentralized governance proposals."
  },
  {
    href: "/templates/example",
    avatar: "Msg",
    pattern: "Message",
    title: "Message with a Tip",
    description: "Send onchain messages and attach a crypto tip to any address."
  },
  {
    href: "/templates/example",
    avatar: "Swap",
    pattern: "Swap",
    title: "Token Swap",
    description: "Swap tokens instantly using a decentralized exchange interface."
  },
  {
    href: "/templates/example",
    avatar: "Bridge",
    pattern: "Bridge",
    title: "Bridge Assets",
    description: "Move tokens between blockchains with a secure bridge UI."
  },
  {
    href: "/templates/example",
    avatar: "Drop",
    pattern: "Airdrop",
    title: "Airdrop Distribution",
    description: "Distribute tokens to your community with automated airdrops."
  },
  {
    href: "/templates/example",
    avatar: "Data",
    pattern: "Analytics",
    title: "Onchain Analytics",
    description: "Visualize blockchain transactions, trends, and wallet activity."
  },
  {
    href: "/templates/example",
    avatar: "NFT",
    pattern: "NFT",
    title: "NFT Minting",
    description: "Create and mint NFTs directly from your own interface."
  },
  {
    href: "/templates/example",
    avatar: "ENS",
    pattern: "ENS",
    title: "ENS Registration",
    description: "Register and manage Ethereum Name Service (ENS) domains."
  },
  {
    href: "/templates/example",
    avatar: "ETH",
    pattern: "ETH",
    title: "Send ETH",
    description: "Send ETH to any address with a simple, secure transaction UI."
  },
  // Add more templates here as needed
]

const TEMPLATES_PER_PAGE = 6

export default function TemplatesPage() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(templates.length / TEMPLATES_PER_PAGE)
  const paginatedTemplates = templates.slice((page-1)*TEMPLATES_PER_PAGE, page*TEMPLATES_PER_PAGE)

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
          <SherryLogo width={56} height={52} className="mb-8 mx-auto" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Verified Templates</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-2">
            Ready-to-publish templates from safe, verified providers. Each template is thoroughly reviewed and tested for quality and security.
          </p>
        </div>
      </section>
      {/* Templates Grid & Pagination */}
      <div className="w-full max-w-7xl px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {paginatedTemplates.map((tpl, i) => (
            <TemplateCard
              key={tpl.href}
              href={tpl.href}
              avatar={tpl.avatar}
              pattern={tpl.pattern}
              title={tpl.title}
              description={tpl.description}
            />
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page-1)}
              disabled={page === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <Button
                key={idx}
                variant={page === idx+1 ? "default" : "outline"}
                size="sm"
                onClick={() => setPage(idx+1)}
                className={page === idx+1 ? "bg-primary text-primary-foreground" : ""}
              >
                {idx+1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page+1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 