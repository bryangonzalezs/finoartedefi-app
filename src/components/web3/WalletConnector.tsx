"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function WalletConnector() {
  const wallets = [
    { name: "MetaMask", icon: "🦊", status: "connected", balance: "2.45 ETH" },
    { name: "WalletConnect", icon: "🔗", status: "available", balance: null },
    { name: "Coinbase Wallet", icon: "🔵", status: "available", balance: null },
    { name: "Trust Wallet", icon: "🛡️", status: "available", balance: null }
  ]

  const networks = [
    { name: "Ethereum", chainId: 1, status: "active", gasPrice: "23 gwei" },
    { name: "Polygon", chainId: 137, status: "available", gasPrice: "45 gwei" },
    { name: "BSC", chainId: 56, status: "available", gasPrice: "5 gwei" },
    { name: "Arbitrum", chainId: 42161, status: "available", gasPrice: "0.1 gwei" }
  ]

  const transactions = [
    {
      hash: "0x1234...5678",
      type: "Swap",
      amount: "1.5 ETH",
      status: "completed",
      time: "2 minutes ago"
    },
    {
      hash: "0x9876...5432",
      type: "Stake",
      amount: "0.5 ETH",
      status: "pending",
      time: "15 minutes ago"
    },
    {
      hash: "0xabcd...efgh",
      type: "Transfer",
      amount: "2.0 ETH",
      status: "completed",
      time: "1 hour ago"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "text-green-500"
      case "active": return "text-green-500"
      case "completed": return "text-green-500"
      case "available": return "text-blue-500"
      case "pending": return "text-yellow-500"
      default: return "text-gray-500"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Web3 Integration</h1>
        <Button>Connect New Wallet</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Connected Wallets</CardTitle>
            <CardDescription>Active wallet connections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">MetaMask connected</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
            <CardDescription>Across all wallets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.45 ETH</div>
            <p className="text-xs text-muted-foreground">≈ $5,678.90</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Network</CardTitle>
            <CardDescription>Current blockchain</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Ethereum</div>
            <p className="text-xs text-muted-foreground">Mainnet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gas Price</CardTitle>
            <CardDescription>Current network fee</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23 gwei</div>
            <p className="text-xs text-muted-foreground">Fast</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Management</CardTitle>
            <CardDescription>Connect and manage your wallets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {wallets.map((wallet, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{wallet.icon}</span>
                  <div>
                    <p className="font-medium">{wallet.name}</p>
                    {wallet.balance && (
                      <p className="text-sm text-muted-foreground">{wallet.balance}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${getStatusColor(wallet.status)}`}>
                    {wallet.status}
                  </span>
                  {wallet.status === "connected" ? (
                    <Button size="sm" variant="outline">Disconnect</Button>
                  ) : (
                    <Button size="sm">Connect</Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network Management</CardTitle>
            <CardDescription>Switch between blockchain networks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {networks.map((network, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{network.name}</p>
                  <p className="text-sm text-muted-foreground">Chain ID: {network.chainId}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{network.gasPrice}</span>
                  {network.status === "active" ? (
                    <Button size="sm" variant="outline" disabled>Active</Button>
                  ) : (
                    <Button size="sm">Switch</Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest blockchain transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">
                      {tx.type === "Swap" ? "🔄" : tx.type === "Stake" ? "🔒" : "📤"}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm text-muted-foreground">{tx.hash}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{tx.amount}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${getStatusColor(tx.status)}`}>
                      {tx.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{tx.time}</span>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">View All Transactions</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
