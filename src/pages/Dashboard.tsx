
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Layout from "@/components/Layout";
import { marketData, portfolioData } from "@/mocks/data";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";

const chartData = [
  { name: 'Jan', value: 1150000 },
  { name: 'Fev', value: 1180000 },
  { name: 'Mar', value: 1220000 },
  { name: 'Abr', value: 1250000 },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-trader-navy border-trader-gray">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Patrimônio Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-trader-green">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(portfolioData.totalValue)}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className={portfolioData.dailyChange >= 0 ? "text-trader-green" : "text-trader-red"}>
                  {portfolioData.dailyChange >= 0 ? "+" : "-"}
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Math.abs(portfolioData.dailyChange))}
                </span>{" "}
                hoje
              </p>
            </CardContent>
          </Card>
          {marketData.indices.map((index) => (
            <Card key={index.name} className="bg-trader-navy border-trader-gray">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{index.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{index.value.toFixed(2)}</div>
                <p className="text-xs">
                  <span
                    className={cn(
                      "flex items-center",
                      index.change >= 0 ? "text-trader-green" : "text-trader-red"
                    )}
                  >
                    {index.change >= 0 ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
                    {Math.abs(index.change)}%
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle>Evolução Patrimonial</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={chartData}>
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#00FF88" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-3 bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle>Posições Atuais</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[350px]">
                <div className="space-y-4">
                  {portfolioData.positions.map((position) => {
                    const currentValue = position.quantity * position.currentPrice;
                    const avgValue = position.quantity * position.avgPrice;
                    const profit = currentValue - avgValue;
                    const profitPercentage = (profit / avgValue) * 100;

                    return (
                      <div key={position.asset} className="flex items-center justify-between p-2 bg-trader-gray/20 rounded-lg">
                        <div>
                          <div className="font-bold">{position.asset}</div>
                          <div className="text-sm text-muted-foreground">
                            {position.quantity} units @ {position.avgPrice.toFixed(2)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentValue)}
                          </div>
                          <div className={cn(
                            "text-sm",
                            profitPercentage >= 0 ? "text-trader-green" : "text-trader-red"
                          )}>
                            {profitPercentage >= 0 ? "+" : ""}
                            {profitPercentage.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
