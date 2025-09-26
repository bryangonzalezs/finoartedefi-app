"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function NFTMarketplace() {
  const nfts = [
    {
      id: 1,
      name: "Crypto Punk #1234",
      image: "/api/placeholder/300/300",
      price: "2.5 ETH",
      rarity: "Legendary",
      collection: "CryptoPunks"
    },
    {
      id: 2,
      name: "Bored Ape #5678",
      image: "/api/placeholder/300/300",
      price: "15.2 ETH",
      rarity: "Epic",
      collection: "Bored Ape Yacht Club"
    },
    {
      id: 3,
      name: "Art Blocks #9012",
      image: "/api/placeholder/300/300",
      price: "0.8 ETH",
      rarity: "Rare",
      collection: "Art Blocks"
    },
    {
      id: 4,
      name: "World of Women #3456",
      image: "/api/placeholder/300/300",
      price: "1.2 ETH",
      rarity: "Common",
      collection: "World of Women"
    }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "text-yellow-500"
      case "Epic": return "text-purple-500"
      case "Rare": return "text-blue-500"
      case "Common": return "text-gray-500"
      default: return "text-gray-500"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">NFT Marketplace</h1>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button>Mint NFT</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <Card key={nft.id} className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                NFT Image
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold truncate">{nft.name}</h3>
                <p className="text-sm text-muted-foreground">{nft.collection}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${getRarityColor(nft.rarity)}`}>
                    {nft.rarity}
                  </span>
                  <span className="font-bold">{nft.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Buy</Button>
                  <Button size="sm" variant="outline" className="flex-1">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Trending Collections</CardTitle>
            <CardDescription>Most popular NFT collections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">CryptoPunks</p>
                <p className="text-sm text-muted-foreground">Floor: 45.2 ETH</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">+12.5%</p>
                <p className="text-sm text-muted-foreground">24h volume</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Bored Ape Yacht Club</p>
                <p className="text-sm text-muted-foreground">Floor: 12.8 ETH</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">+8.3%</p>
                <p className="text-sm text-muted-foreground">24h volume</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Art Blocks</p>
                <p className="text-sm text-muted-foreground">Floor: 2.1 ETH</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-red-600">-3.2%</p>
                <p className="text-sm text-muted-foreground">24h volume</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your NFTs</CardTitle>
            <CardDescription>Your NFT collection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Total NFTs</p>
                <p className="text-sm text-muted-foreground">Across all collections</p>
              </div>
              <div className="text-right">
                <p className="font-bold">12</p>
                <p className="text-sm text-muted-foreground">+3 this month</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Total Value</p>
                <p className="text-sm text-muted-foreground">Estimated value</p>
              </div>
              <div className="text-right">
                <p className="font-bold">$45,678.90</p>
                <p className="text-sm text-muted-foreground">+15.2%</p>
              </div>
            </div>
            <Button className="w-full">View Collection</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
