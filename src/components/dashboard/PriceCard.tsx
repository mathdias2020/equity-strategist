
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEndpointData } from "@/hooks/useEndpointData";
import { FilterType } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface PriceCardProps {
  activeFilter: FilterType;
}

export const PriceCard = ({ activeFilter }: PriceCardProps) => {
  const { data: miniPrice } = useEndpointData();
  const { data: fullPrice } = useEndpointData();
  const { data: generalPrice } = useEndpointData();

  const formatValue = (value: any, placeholder: number) => {
    if (value === undefined || value === null) {
      return `[${placeholder}]`;
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
              <TableCell className="py-2 text-gray-300">{formatValue(miniPrice, 3)}</TableCell>
              <TableCell className="py-2 text-gray-300">{formatValue(fullPrice, 4)}</TableCell>
              <TableCell className="py-2 text-gray-300">{formatValue(generalPrice, 5)}</TableCell>
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

