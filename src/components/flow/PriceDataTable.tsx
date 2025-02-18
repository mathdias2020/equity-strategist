
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PriceData } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface PriceDataTableProps {
  priceData: PriceData;
}

export const PriceDataTable = ({ priceData }: PriceDataTableProps) => {
  const formatValue = (value: any, placeholder: number) => {
    if (value === undefined || value === null) {
      return `[${placeholder}]`;
    }
    return value.toLocaleString('pt-BR');
  };

  return (
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
              <TableCell className="py-2 text-gray-300">{formatValue(priceData.mini.buy, 1)}</TableCell>
              <TableCell className="py-2 text-gray-300">{formatValue(priceData.full.buy, 2)}</TableCell>
              <TableCell className="py-2 text-gray-300">{formatValue(priceData.general.buy, 3)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className={cn(
          "mt-2 text-center text-sm",
          priceData.distance > 10 ? "text-trader-red animate-pulse" : "text-gray-300"
        )}>
          Distância do PM: {formatValue(priceData.distance, 4)}
        </div>
      </CardContent>
    </Card>
  );
};
