
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { flowData } from "@/mocks/data";

type FilterType = 'dolar' | 'indice';

const priceData = {
  mini: { buy: 5478.50, sell: 5479.50 },
  full: { buy: 109570, sell: 109590 },
  general: { buy: 5478.00, sell: 5480.00 },
  distance: 12.5
};

// Dados simulados para o gráfico de evolução
const evolutionData = [
  { time: "09:00", institutional: 1500, retail: -800 },
  { time: "10:00", institutional: 2200, retail: -1200 },
  { time: "11:00", institutional: 2800, retail: -1500 },
  { time: "12:00", institutional: 3200, retail: -1800 },
  { time: "13:00", institutional: 2500, retail: -2100 },
  { time: "14:00", institutional: 1800, retail: -2400 },
  { time: "15:00", institutional: 1200, retail: -2800 },
  { time: "16:00", institutional: 800, retail: -3200 },
];

export default function Flow() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('dolar');

  return (
    <Layout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between h-12">
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
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Tabela de Fluxo */}
          <Card className="bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-trader-green">Fluxo</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2 border-trader-gray">
                    <TableHead className="text-trader-green font-medium py-3">Player</TableHead>
                    <TableHead className="text-trader-green font-medium py-3">Posição</TableHead>
                    <TableHead className="text-trader-green font-medium py-3">30 minutos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {flowData.map((flow, index) => (
                    <TableRow key={index} className="border-b border-trader-gray/20">
                      <TableCell className="py-2 text-gray-300">{flow.player}</TableCell>
                      <TableCell className="py-2 text-gray-300">{flow.position}</TableCell>
                      <TableCell className="py-2 text-gray-300">{flow.minutes30}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Preço Médio */}
          <Card className="bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-trader-green">Preço Médio</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2 border-trader-gray">
                    <TableHead className="text-trader-green font-medium text-sm h-8 py-0">Mini</TableHead>
                    <TableHead className="text-trader-green font-medium text-sm h-8 py-0">Cheio</TableHead>
                    <TableHead className="text-trader-green font-medium text-sm h-8 py-0">Geral</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="py-2 text-gray-300">{priceData.mini.buy}</TableCell>
                    <TableCell className="py-2 text-gray-300">{priceData.full.buy}</TableCell>
                    <TableCell className="py-2 text-gray-300">{priceData.general.buy}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className={cn(
                "mt-2 text-center text-sm",
                priceData.distance > 10 ? "text-trader-red animate-pulse" : "text-gray-300"
              )}>
                Distância do PM: {priceData.distance}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gráfico de Evolução */}
        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-trader-green">Evolução das Posições</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={evolutionData}>
                <XAxis dataKey="time" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip 
                  contentStyle={{ background: "#1A1F2C", border: "1px solid #2D3748" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="institutional" 
                  name="Institucional" 
                  stroke="#00FF88" 
                  strokeWidth={2} 
                />
                <Line 
                  type="monotone" 
                  dataKey="retail" 
                  name="Varejo" 
                  stroke="#FF4444" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
