import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marketData } from "@/mocks/data";
import { cn } from "@/lib/utils";

type MarketSectionProps = {
  title: string;
  items: Array<{
    name: string;
    value: number;
    change: number;
    percentile?: number;
  }>;
};

const MarketSection = ({ title, items }: MarketSectionProps) => {
  const formatValue = (value: any, placeholder: number) => {
    if (value === undefined || value === null) {
      return `[${placeholder}]`;
    }
    return value.toLocaleString('pt-BR');
  };

  return (
    <Card className="bg-black border-trader-gray">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b-2 border-trader-gray">
        <CardTitle className="text-lg font-bold text-trader-green">{title}</CardTitle>
        <span className={cn(
          "text-xs",
          items[0]?.change >= 0 ? "text-trader-green" : "text-trader-red"
        )}>
          {items[0]?.change >= 0 ? "+" : ""}{formatValue(items[0]?.change, 1)}%
        </span>
      </CardHeader>
      <CardContent className="space-y-2 pt-4">
        {items.map((item, index) => (
          <div key={item.name} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">{item.name}</span>
              <span className={cn(
                "text-xs",
                item.change >= 0 ? "text-trader-green" : "text-trader-red"
              )}>
                {formatValue(item.value, index * 2 + 1)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 flex-grow bg-trader-gray/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-trader-green/50 rounded-full"
                  style={{ width: `${(item.percentile || 50)}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">
                {item.change >= 0 ? "+" : ""}{formatValue(item.change, index * 2 + 2)}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default function Markets() {
  const regions = [
    {
      title: "EUA",
      items: [
        { ...marketData.indices.find(i => i.name === "S&P 500"), percentile: 75 },
        { name: "NASDAQ", value: 22075.00, change: 1.24, percentile: 85 },
        { name: "DOW JONES", value: 44326.00, change: 0.82, percentile: 65 },
        { name: "VIX", value: 13.45, change: -0.34, percentile: 25 },
      ]
    },
    {
      title: "BRASIL",
      items: [
        { ...marketData.currencies.find(c => c.name === "USD/BRL"), percentile: 45 },
        { name: "INDFUT", value: 127.231, change: 0.47, percentile: 60 },
        { name: "BRL10Y", value: 10.95, change: -0.15, percentile: 40 },
      ]
    },
    {
      title: "EUROPA",
      items: [
        { name: "STOXX 600", value: 553.74, change: 1.09, percentile: 80 },
        { name: "DAX", value: 22571.9, change: 1.54, percentile: 70 },
        { name: "FTSE 100", value: 7845.2, change: 0.63, percentile: 55 },
      ]
    },
    {
      title: "COMMODITIES",
      items: [
        { name: "WTI OIL", value: 71.51, change: 0.20, percentile: 35 },
        { name: "GOLD", value: 2957.20, change: 0.97, percentile: 90 },
        { name: "COPPER", value: 4.7845, change: 1.70, percentile: 65 },
      ]
    },
    {
      title: "DX",
      items: [
        { name: "DX", value: 104.23, change: 0.45, percentile: 60 },
        { name: "USD/EUR", value: 0.9234, change: -0.32, percentile: 45 },
        { name: "USD/JPY", value: 151.23, change: 0.78, percentile: 75 },
        { name: "USD/GBP", value: 0.7923, change: -0.15, percentile: 40 },
        { name: "USD/CAD", value: 1.3545, change: 0.25, percentile: 55 },
        { name: "USD/SEK", value: 10.4523, change: 0.42, percentile: 65 },
        { name: "USD/CHF", value: 0.8823, change: -0.18, percentile: 35 },
      ]
    },
    {
      title: "EMERGENTES",
      items: [
        { name: "USD/BRL", value: 4.9823, change: -0.45, percentile: 35 },
        { name: "USD/MXN", value: 17.2345, change: -0.28, percentile: 40 },
        { name: "USD/ZAR", value: 18.9234, change: 0.65, percentile: 70 },
        { name: "USD/CNY", value: 7.2345, change: 0.15, percentile: 55 },
        { name: "USD/TRY", value: 31.2345, change: 1.23, percentile: 85 },
        { name: "USD/INR", value: 83.1234, change: 0.34, percentile: 60 },
        { name: "USD/RUB", value: 92.3456, change: 0.87, percentile: 75 },
        { name: "USD/HUF", value: 356.234, change: 0.45, percentile: 65 },
        { name: "USD/PLN", value: 4.0123, change: -0.23, percentile: 45 },
        { name: "USD/CZK", value: 23.1234, change: 0.12, percentile: 50 },
        { name: "USD/IDR", value: 15723.45, change: 0.56, percentile: 70 },
      ]
    },
    {
      title: "JUROS BR",
      items: [
        { name: "DIF27", value: 10.45, change: -0.15, percentile: 40 },
        { name: "DIF29", value: 10.78, change: -0.23, percentile: 35 },
        { name: "DIF31", value: 11.12, change: -0.18, percentile: 45 },
        { name: "DIF33", value: 11.45, change: -0.25, percentile: 30 },
        { name: "DIF35", value: 11.67, change: -0.20, percentile: 38 },
      ]
    },
    {
      title: "JUROS EUA",
      items: [
        { name: "US2Y", value: 4.45, change: 0.12, percentile: 65 },
        { name: "US10Y", value: 4.23, change: 0.08, percentile: 60 },
        { name: "US30Y", value: 4.35, change: 0.05, percentile: 55 },
      ]
    },
  ];

  return (
    <Layout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {regions.map((region) => (
          <MarketSection
            key={region.title}
            title={region.title}
            items={region.items}
          />
        ))}
      </div>
    </Layout>
  );
}
