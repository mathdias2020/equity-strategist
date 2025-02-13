
export const marketData = {
  indices: [
    { name: "IBOV", value: 127842.51, change: 0.82 },
    { name: "S&P 500", value: 4927.12, change: -0.23 },
    { name: "NASDAQ", value: 15982.34, change: -0.41 },
  ],
  currencies: [
    { name: "USD/BRL", value: 4.9823, change: -0.15 },
    { name: "EUR/BRL", value: 5.4127, change: 0.32 },
    { name: "BTC/USD", value: 42981.00, change: 1.24 },
  ],
  stocks: [
    { symbol: "PETR4", name: "Petrobras", price: 35.82, change: 1.42 },
    { symbol: "VALE3", name: "Vale", price: 68.91, change: -0.85 },
    { symbol: "ITUB4", name: "Itaú", price: 32.45, change: 0.63 },
  ]
};

export const flowData = [
  { time: "09:30", buyers: 125, sells: 85 },
  { time: "10:00", buyers: 145, sells: 95 },
  { time: "10:30", buyers: 165, sells: 105 },
  { time: "11:00", buyers: 185, sells: 115 },
  { time: "11:30", buyers: 205, sells: 125 },
];

export const portfolioData = {
  totalValue: 1250000.00,
  dailyChange: 12500.00,
  positions: [
    { asset: "PETR4", quantity: 1000, avgPrice: 34.50, currentPrice: 35.82 },
    { asset: "VALE3", quantity: 500, avgPrice: 69.20, currentPrice: 68.91 },
    { asset: "ITUB4", quantity: 800, avgPrice: 31.75, currentPrice: 32.45 },
  ]
};

export const aiSuggestions = [
  {
    asset: "PETR4",
    action: "Compra",
    confidence: 0.85,
    reason: "Tendência de alta do petróleo e valuação atrativa"
  },
  {
    asset: "VALE3",
    action: "Neutro",
    confidence: 0.60,
    reason: "Preço do minério estável, mas riscos na China"
  },
  {
    asset: "ITUB4",
    action: "Venda",
    confidence: 0.75,
    reason: "Pressão nas margens devido a alta competição"
  }
];
