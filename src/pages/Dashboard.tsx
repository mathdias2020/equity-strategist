
import { useState, useCallback } from "react";
import Layout from "@/components/Layout";
import { marketData } from "@/mocks/data";
import { FilterType } from "@/types/dashboard";
import { PRICE_DATA } from "@/constants/dashboard";
import { FilterButtons } from "@/components/dashboard/FilterButtons";
import { FlowCard } from "@/components/dashboard/FlowCard";
import { PriceCard } from "@/components/dashboard/PriceCard";
import { MarketIndicators } from "@/components/dashboard/MarketIndicators";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('dolar');

  const getActiveData = useCallback(() => {
    if (activeFilter === 'dolar') {
      return marketData.currencies.find(c => c.name === 'USD/BRL');
    } else {
      return marketData.indices.find(i => i.name === 'IBOV');
    }
  }, [activeFilter]);

  const activeData = getActiveData();

  const handleFilterChange = useCallback((newFilter: FilterType) => {
    setActiveFilter(newFilter);
  }, []);

  return (
    <Layout>
      <div className="grid gap-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-4">
            <FilterButtons 
              activeFilter={activeFilter} 
              onFilterChange={handleFilterChange} 
            />
            <div className="text-lg font-bold">
              {activeData?.value.toFixed(2)}
              <span className={cn(
                "ml-2 text-sm",
                activeData?.change && activeData.change >= 0 ? "text-trader-green" : "text-trader-red"
              )}>
                {activeData?.change && activeData.change >= 0 ? "+" : ""}
                {activeData?.change}%
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <FlowCard />
          <div className="col-span-4 space-y-4">
            <PriceCard priceData={PRICE_DATA} />
            <Card className="bg-trader-navy border-trader-gray">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-trader-green">Termômetro</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xl font-bold text-center py-2 text-gray-300">
                  {activeFilter === 'dolar' ? 'Compra' : 'Neutro'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <MarketIndicators activeFilter={activeFilter} />
      </div>
    </Layout>
  );
}
