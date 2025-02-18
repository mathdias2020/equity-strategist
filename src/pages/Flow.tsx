
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { FilterType, ChartType, PositionFilter } from "@/types/flow";
import { FlowChart } from "@/components/flow/FlowChart";
import { FlowDataTable } from "@/components/flow/FlowDataTable";
import { PriceDataTable } from "@/components/flow/PriceDataTable";
import { generateMinuteData, generateBarData } from "@/utils/flow/data-generators";

export default function Flow() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('dolar');
  const [chartType, setChartType] = useState<ChartType>('line');
  const [positionFilter, setPositionFilter] = useState<PositionFilter>('both');
  const [date, setDate] = useState<Date>(new Date());
  
  const lineData = generateMinuteData();
  const barData = generateBarData();
  const chartData = chartType === 'line' ? lineData : barData;

  // Inicializa com arrays vazios para que os placeholders sejam exibidos
  const flowData = [];
  const priceData = {
    mini: { buy: null, sell: null },
    full: { buy: null, sell: null },
    general: { buy: null, sell: null },
    distance: null
  };

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
          <FlowDataTable flowData={flowData} />
          <PriceDataTable priceData={priceData} />
        </div>

        <div className="bg-trader-navy border-trader-gray p-6 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg font-bold text-trader-green">Evolução das Posições</div>
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
          <div className="flex justify-between items-center mb-6">
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
          <FlowChart 
            chartType={chartType}
            positionFilter={positionFilter}
            chartData={chartData}
          />
        </div>
      </div>
    </Layout>
  );
}
