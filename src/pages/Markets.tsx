
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marketData } from "@/mocks/data";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Markets() {
  return (
    <Layout>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...marketData.indices, ...marketData.currencies].map((item) => (
            <Card key={item.name} className="bg-trader-navy border-trader-gray">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value.toFixed(2)}</div>
                <p className="text-xs">
                  <span
                    className={cn(
                      "flex items-center",
                      item.change >= 0 ? "text-trader-green" : "text-trader-red"
                    )}
                  >
                    {item.change >= 0 ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
                    {Math.abs(item.change)}%
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle>Ações em Destaque</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {marketData.stocks.map((stock) => (
                <div
                  key={stock.symbol}
                  className="flex items-center justify-between p-4 bg-trader-gray/20 rounded-lg"
                >
                  <div>
                    <div className="font-bold">{stock.symbol}</div>
                    <div className="text-sm text-muted-foreground">{stock.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">R$ {stock.price.toFixed(2)}</div>
                    <div
                      className={cn(
                        "text-sm",
                        stock.change >= 0 ? "text-trader-green" : "text-trader-red"
                      )}
                    >
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
