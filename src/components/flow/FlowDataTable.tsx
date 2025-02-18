
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FlowData } from "@/types/dashboard";

interface FlowDataTableProps {
  flowData: FlowData[];
}

export const FlowDataTable = ({ flowData }: FlowDataTableProps) => {
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
  );
};
