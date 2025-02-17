
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterType } from "@/types/dashboard";
import { marketData } from "@/mocks/data";

interface MarketIndicatorsProps {
  activeFilter: FilterType;
}

export const MarketIndicators = ({ activeFilter }: MarketIndicatorsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
      <Card className="bg-trader-navy border-trader-gray">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            {activeFilter === 'dolar' ? 'Índice' : 'Dólar'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-trader-green">
            {activeFilter === 'dolar' 
              ? marketData.indices.find(i => i.name === 'IBOV')?.value.toFixed(2)
              : marketData.currencies.find(c => c.name === 'USD/BRL')?.value.toFixed(2)
            }
          </div>
        </CardContent>
      </Card>
      <Card className="bg-trader-navy border-trader-gray">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Média DI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">13.15%</div>
        </CardContent>
      </Card>
      <Card className="bg-trader-navy border-trader-gray">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">EUA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4927.12</div>
        </CardContent>
      </Card>
      <Card className="bg-trader-navy border-trader-gray">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Europa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15982.34</div>
        </CardContent>
      </Card>
    </div>
  );
};
