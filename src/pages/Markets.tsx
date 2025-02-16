
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

const MarketSection = ({ title, items }: MarketSectionProps) => (
  <Card className="bg-black border-trader-gray">
    <CardHeader className="flex flex-row items-center justify-between pb-2 border-b-2 border-trader-gray">
      <CardTitle className="text-lg font-bold text-trader-green">{title}</CardTitle>
      <span className={cn(
        "text-xs",
        items[0]?.change >= 0 ? "text-trader-green" : "text-trader-red"
      )}>
        {items[0]?.change >= 0 ? "+" : ""}{items[0]?.change}%
      </span>
    </CardHeader>
    <CardContent className="space-y-2">
      {items.map((item) => (
        <div key={item.name} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">{item.name}</span>
            <span className={cn(
              "text-xs",
              item.change >= 0 ? "text-trader-green" : "text-trader-red"
            )}>
              {item.value.toFixed(2)}
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
              {item.change >= 0 ? "+" : ""}{item.change}%
            </span>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

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
  ];

  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
