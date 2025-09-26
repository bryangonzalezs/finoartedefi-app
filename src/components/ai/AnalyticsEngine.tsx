"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function AIAnalyticsEngine() {
  const predictions = [
    {
      asset: "ETH",
      currentPrice: "$2,345.67",
      prediction: "$2,456.78",
      confidence: 87,
      timeframe: "24h",
      trend: "up"
    },
    {
      asset: "BTC",
      currentPrice: "$43,567.89",
      prediction: "$44,123.45",
      confidence: 92,
      timeframe: "24h",
      trend: "up"
    },
    {
      asset: "SOL",
      currentPrice: "$98.45",
      prediction: "$95.23",
      confidence: 78,
      timeframe: "24h",
      trend: "down"
    }
  ]

  const riskFactors = [
    { factor: "Market Volatility", score: 65, status: "medium" },
    { factor: "Liquidity Risk", score: 23, status: "low" },
    { factor: "Smart Contract Risk", score: 45, status: "medium" },
    { factor: "Regulatory Risk", score: 78, status: "high" }
  ]

  const getRiskColor = (status: string) => {
    switch (status) {
      case "low": return "text-green-500"
      case "medium": return "text-yellow-500"
      case "high": return "text-red-500"
      default: return "text-gray-500"
    }
  }

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? "↗" : "↘"
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">AI Analytics Engine</h1>
        <div className="flex gap-2">
          <Button variant="outline">Export Report</Button>
          <Button>Generate Insights</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Confidence Score</CardTitle>
            <CardDescription>Overall prediction accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2%</div>
            <p className="text-xs text-muted-foreground">+2.3% this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Predictions</CardTitle>
            <CardDescription>Currently monitored assets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Across 8 categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Score</CardTitle>
            <CardDescription>Portfolio risk assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Medium</div>
            <p className="text-xs text-muted-foreground">Score: 52.8/100</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Sentiment</CardTitle>
            <CardDescription>AI-analyzed sentiment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Bullish</div>
            <p className="text-xs text-muted-foreground">Confidence: 76%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Price Predictions</CardTitle>
            <CardDescription>AI-powered market forecasts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{prediction.asset}</p>
                  <p className="text-sm text-muted-foreground">Current: {prediction.currentPrice}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold flex items-center gap-1">
                    {getTrendIcon(prediction.trend)} {prediction.prediction}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {prediction.confidence}% confidence
                  </p>
                </div>
              </div>
            ))}
            <Button className="w-full">View All Predictions</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>Comprehensive risk analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {riskFactors.map((risk, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{risk.factor}</span>
                  <span className={`font-bold ${getRiskColor(risk.status)}`}>
                    {risk.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      risk.status === "low" ? "bg-green-500" :
                      risk.status === "medium" ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    style={{ width: `${risk.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">Detailed Risk Report</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Insights & Recommendations</CardTitle>
          <CardDescription>Actionable insights from AI analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2">💡 Opportunity</h4>
              <p className="text-sm">Consider increasing ETH allocation by 15% based on strong technical indicators and positive sentiment analysis.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-yellow-600 mb-2">⚠️ Warning</h4>
              <p className="text-sm">High volatility detected in SOL. Consider reducing position size or implementing stop-loss orders.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">📊 Analysis</h4>
              <p className="text-sm">Market correlation analysis suggests diversification into DeFi tokens could reduce overall portfolio risk.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-purple-600 mb-2">🎯 Strategy</h4>
              <p className="text-sm">AI recommends implementing a DCA strategy for BTC with weekly purchases of $500 over the next 3 months.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
