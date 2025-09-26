"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function DeFiDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">DeFi Dashboard</h1>
        <Button>Connect Wallet</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Portfolio Value</CardTitle>
            <CardDescription>Your total DeFi portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.67</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Positions</CardTitle>
            <CardDescription>Currently staked assets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Across 5 protocols</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>APY Earned</CardTitle>
            <CardDescription>Annual percentage yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gas Fees Saved</CardTitle>
            <CardDescription>Optimization savings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$234.56</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Yield Farming</CardTitle>
            <CardDescription>Active farming positions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">ETH-USDC Pool</p>
                <p className="text-sm text-muted-foreground">Uniswap V3</p>
              </div>
              <div className="text-right">
                <p className="font-bold">24.5% APY</p>
                <p className="text-sm text-muted-foreground">$1,234.56</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">WBTC-ETH Pool</p>
                <p className="text-sm text-muted-foreground">SushiSwap</p>
              </div>
              <div className="text-right">
                <p className="font-bold">18.7% APY</p>
                <p className="text-sm text-muted-foreground">$2,345.67</p>
              </div>
            </div>
            <Button className="w-full">Add Liquidity</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest DeFi activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Staked ETH</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">+2.5 ETH</p>
                <p className="text-sm text-muted-foreground">Lido</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Claimed Rewards</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">+$45.67</p>
                <p className="text-sm text-muted-foreground">Compound</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">View All</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
