
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { flowData } from "@/mocks/data";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

type FilterType = 'dolar' | 'indice';
type ChartType = 'line' | 'bar';
type PositionFilter = 'institutional' | 'retail' | 'both';

const priceData = {
  mini: { buy: 5478.50, sell: 5479.50 },
  full: { buy: 109570, sell: 109590 },
  general: { buy: 5478.00, sell: 5480.00 },
  distance: 12.5
};

// Dados simulados para o gráfico de evolução (intervalo de 1 minuto)
const generateMinuteData = () => {
  const data = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      data.push({
        time,
        institutional: Math.random() * 4000 - 2000,
        retail: Math.random() * -3000 + 1500,
      });
    }
  }
  return data;
};

// Dados simulados para o gráfico de barras (intervalo de 5 minutos)
const generateBarData = () => {
  const data = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      data.push({
        time,
        institutional: Math.random() * 400 - 200,
        retail: Math.random() * -300 + 150,
      });
    }
  }
  return data;
};

export default function Flow() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('dolar');
  const [chartType, setChartType] = useState<ChartType>('line');
  const [positionFilter, setPositionFilter] = useState<PositionFilter>('both');
  const [date, setDate] = useState<Date>(new Date());
  
  const lineData = generateMinuteData();
  const barData = generateBarData();
  const chartData = chartType === 'line' ? lineData : barData;

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
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold text-trader-green">Evolução das Posições</CardTitle>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      {format(date, 'dd/MM/yyyy')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={(date) => date && setDate(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <Button
                  variant={positionFilter === 'institutional' ? 'default' : 'outline'}
                  onClick={() => setPositionFilter('institutional')}
                  className={cn(
                    positionFilter === 'institutional' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
                  )}
                >
                  Institucional
                </Button>
                <Button
                  variant={positionFilter === 'retail' ? 'default' : 'outline'}
                  onClick={() => setPositionFilter('retail')}
                  className={cn(
                    positionFilter === 'retail' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
                  )}
                >
                  Varejo
                </Button>
                <Button
                  variant={positionFilter === 'both' ? 'default' : 'outline'}
                  onClick={() => setPositionFilter('both')}
                  className={cn(
                    positionFilter === 'both' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
                  )}
                >
                  Ambos
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={chartType === 'line' ? 'default' : 'outline'}
                  onClick={() => setChartType('line')}
                  className={cn(
                    chartType === 'line' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
                  )}
                >
                  Linha
                </Button>
                <Button
                  variant={chartType === 'bar' ? 'default' : 'outline'}
                  onClick={() => setChartType('bar')}
                  className={cn(
                    chartType === 'bar' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
                  )}
                >
                  Barra
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              {chartType === 'line' ? (
                <LineChart data={chartData}>
                  <XAxis dataKey="time" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip 
                    contentStyle={{ background: "#1A1F2C", border: "1px solid #2D3748" }}
                    labelStyle={{ color: "#fff" }}
                  />
                  {(positionFilter === 'institutional' || positionFilter === 'both') && (
                    <Line 
                      type="monotone" 
                      dataKey="institutional" 
                      name="Institucional" 
                      stroke="#00FF88" 
                      strokeWidth={2} 
                    />
                  )}
                  {(positionFilter === 'retail' || positionFilter === 'both') && (
                    <Line 
                      type="monotone" 
                      dataKey="retail" 
                      name="Varejo" 
                      stroke="#FF4444" 
                      strokeWidth={2} 
                    />
                  )}
                </LineChart>
              ) : (
                <BarChart data={chartData}>
                  <XAxis dataKey="time" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip 
                    contentStyle={{ background: "#1A1F2C", border: "1px solid #2D3748" }}
                    labelStyle={{ color: "#fff" }}
                  />
                  {(positionFilter === 'institutional' || positionFilter === 'both') && (
                    <Bar 
                      dataKey="institutional" 
                      name="Institucional" 
                      fill="#00FF88" 
                    />
                  )}
                  {(positionFilter === 'retail' || positionFilter === 'both') && (
                    <Bar 
                      dataKey="retail" 
                      name="Varejo" 
                      fill="#FF4444" 
                    />
                  )}
                </BarChart>
              )}
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
