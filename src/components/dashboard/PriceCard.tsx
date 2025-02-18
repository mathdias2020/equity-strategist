
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEndpointData } from "@/hooks/useEndpointData";
import { FilterType } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface PriceCardProps {
  activeFilter: FilterType;
}

export const PriceCard = ({ activeFilter }: PriceCardProps) => {
  const miniPrice = useEndpointData(
    activeFilter === 'dolar' ? 'price-mini-dolar' : 'price-mini-indice'
  );
  const fullPrice = useEndpointData(
    activeFilter === 'dolar' ? 'price-full-dolar' : 'price-full-indice'
  );
  const generalPrice = useEndpointData(
    activeFilter === 'dolar' ? 'price-general-dolar' : 'price-general-indice'
  );

  const formatValue = (value: any) => {
    if (value === undefined || value === null) {
      return "ERRO";
    }
    if (value === 0) {
      return "0";
    }
    return value.toLocaleString('pt-BR');
  };

  // Temporary distance calculation - to be implemented with proper logic later
  const distance = 0;

  return (
    <Card className="bg-trader-navy border-trader-gray">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-trader-green">Preço Médio</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
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
              <TableCell className="py-2 text-gray-300">{formatValue(miniPrice)}</TableCell>
              <TableCell className="py-2 text-gray-300">{formatValue(fullPrice)}</TableCell>
              <TableCell className="py-2 text-gray-300">{formatValue(generalPrice)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className={cn(
          "mt-2 text-center text-sm",
          distance > 10 ? "text-trader-red animate-pulse" : "text-gray-300"
        )}>
          Distância do PM: {distance}
        </div>
      </CardContent>
    </Card>
  );
};
