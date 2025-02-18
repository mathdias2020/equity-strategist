
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FlowData } from "@/types/dashboard";

interface FlowDataTableProps {
  flowData: FlowData[];
}

export const FlowDataTable = ({ flowData }: FlowDataTableProps) => {
  const formatValue = (value: any, placeholder: number) => {
    if (value === undefined || value === null || value === '') {
      return `[${placeholder}]`;
    }
    return value.toLocaleString('pt-BR');
  };

  // Se não houver dados, usar dados de placeholder
  const displayData = flowData.length ? flowData : [
    { player: "[1]", position: null, minutes30: null },
    { player: "[2]", position: null, minutes30: null }
  ];

  return (
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
            {displayData.map((flow, index) => (
              <TableRow key={index} className="border-b border-trader-gray/20">
                <TableCell className="py-2 text-gray-300">{formatValue(flow.player, (index + 1) * 3 - 2)}</TableCell>
                <TableCell className="py-2 text-gray-300">{formatValue(flow.position, (index + 1) * 3 - 1)}</TableCell>
                <TableCell className="py-2 text-gray-300">{formatValue(flow.minutes30, (index + 1) * 3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
