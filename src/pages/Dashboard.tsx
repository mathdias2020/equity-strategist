import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { marketData, portfolioData, flowData } from "@/mocks/data";
import { ArrowDownIcon, ArrowUpIcon, DollarSign, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const priceData = {
  mini: { buy: 5478.50, sell: 5479.50 },
  full: { buy: 109570, sell: 109590 },
  general: { buy: 5478.00, sell: 5480.00 },
  distance: 12.5
};

type FilterType = 'dolar' | 'indice';

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('dolar');

  const getActiveData = () => {
    if (activeFilter === 'dolar') {
      return marketData.currencies.find(c => c.name === 'USD/BRL');
    } else {
      return marketData.indices.find(i => i.name === 'IBOV');
    }
  };

  const activeData = getActiveData();

  return (
    <Layout>
      <div className="grid gap-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-4">
            <div className="flex gap-2">
              <Button
                variant={activeFilter === 'dolar' ? 'default' : 'outline'}
                className={cn(
                  "gap-2",
                  activeFilter === 'dolar' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
                )}
                onClick={() => setActiveFilter('dolar')}
              >
                <DollarSign className="h-4 w-4" />
                Dólar
              </Button>
              <Button
                variant={activeFilter === 'indice' ? 'default' : 'outline'}
                className={cn(
                  "gap-2",
                  activeFilter === 'indice' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
                )}
                onClick={() => setActiveFilter('indice')}
              >
                <TrendingUp className="h-4 w-4" />
                Índice
              </Button>
            </div>
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
          <Card className="col-span-3 bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle>Fluxo</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Player</TableHead>
                    <TableHead>Posição</TableHead>
                    <TableHead>30 minutos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {flowData.map((flow, index) => (
                    <TableRow key={index}>
                      <TableCell>{flow.player}</TableCell>
                      <TableCell>{flow.position}</TableCell>
                      <TableCell>{flow.minutes30}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="col-span-4 space-y-4">
            <Card className="bg-trader-navy border-trader-gray">
              <CardHeader className="py-1">
                <CardTitle className="text-lg">Preço Médio</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-sm">Mini</TableHead>
                      <TableHead className="text-sm">Cheio</TableHead>
                      <TableHead className="text-sm">Geral</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>{priceData.mini.buy}</TableCell>
                      <TableCell>{priceData.full.buy}</TableCell>
                      <TableCell>{priceData.general.buy}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className={cn(
                  "mt-2 text-right text-sm",
                  priceData.distance > 10 ? "text-trader-red animate-pulse" : ""
                )}>
                  Distância do PM: {priceData.distance}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-trader-navy border-trader-gray">
              <CardHeader className="py-1">
                <CardTitle className="text-lg">Termômetro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-center">
                  {activeFilter === 'dolar' ? 'Compra' : 'Neutro'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

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
      </div>
    </Layout>
  );
}
