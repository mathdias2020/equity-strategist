
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FlowCardProps {
  institutionalValue: string;
}

export const FlowCard = ({ institutionalValue }: FlowCardProps) => {
  return (
    <Card className="col-span-3 bg-trader-navy border-trader-gray">
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
            <TableRow className="border-b border-trader-gray/20">
              <TableCell className="py-2 text-gray-300">Institucional</TableCell>
              <TableCell className="py-2 text-gray-300">{institutionalValue || "-"}</TableCell>
              <TableCell className="py-2 text-gray-300">Vendedor</TableCell>
            </TableRow>
            <TableRow className="border-b border-trader-gray/20">
              <TableCell className="py-2 text-gray-300">Varejo</TableCell>
              <TableCell className="py-2 text-gray-300">Comprado</TableCell>
              <TableCell className="py-2 text-gray-300">Comprador</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
