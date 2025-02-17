
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain } from "lucide-react";

// Mock data for operations
const operations = [
  {
    tipo: "Compra",
    ativo: "Índice",
    modelo: "Fluxo",
    horario: "10:30",
    preco: 120500,
    alvo: 121000,
    resultado: "+500"
  },
  {
    tipo: "Venda",
    ativo: "Dólar",
    modelo: "AI",
    horario: "11:45",
    preco: 4.98,
    alvo: 4.95,
    resultado: ""
  }
];

// Mock data for analysis
const marketAnalysis = {
  title: "Análise de Mercado - 26/03/2024",
  content: `O mercado apresenta tendência de alta no curto prazo, com suporte importante próximo aos 127.000 pontos. O fluxo comprador institucional permanece forte, especialmente em papéis ligados ao setor financeiro e commodities.

Pontos de atenção:
- Resistência técnica em 129.500 pontos
- Vencimento de opções na próxima semana
- Dados de inflação dos EUA na quinta-feira

Recomendamos cautela nas operações de day trade, priorizando operações no sentido da tendência de alta com stops ajustados.`
};

export default function AI() {
  return (
    <Layout>
      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          <Brain className="h-8 w-8 text-trader-green" />
          <h1 className="text-2xl font-bold text-trader-green">Inteligência Artificial</h1>
        </div>

        <Tabs defaultValue="operations" className="space-y-4">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
            <TabsTrigger value="operations">Operações</TabsTrigger>
            <TabsTrigger value="analysis">Análise</TabsTrigger>
          </TabsList>

          <TabsContent value="operations">
            <Card className="bg-trader-navy border-trader-gray">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-trader-green">
                  Operações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-trader-gray">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-trader-gray/20">
                        <TableHead className="text-trader-green">Tipo</TableHead>
                        <TableHead className="text-trader-green">Ativo</TableHead>
                        <TableHead className="text-trader-green">Modelo</TableHead>
                        <TableHead className="text-trader-green">Horário</TableHead>
                        <TableHead className="text-trader-green">Preço</TableHead>
                        <TableHead className="text-trader-green">Alvo</TableHead>
                        <TableHead className="text-trader-green">Resultado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {operations.map((op, index) => (
                        <TableRow key={index} className="hover:bg-trader-gray/20">
                          <TableCell className={op.tipo === "Compra" ? "text-trader-green" : "text-trader-red"}>
                            {op.tipo}
                          </TableCell>
                          <TableCell className="text-gray-300">{op.ativo}</TableCell>
                          <TableCell className="text-gray-300">{op.modelo}</TableCell>
                          <TableCell className="text-gray-300">{op.horario}</TableCell>
                          <TableCell className="text-gray-300">{op.preco}</TableCell>
                          <TableCell className="text-gray-300">{op.alvo}</TableCell>
                          <TableCell className={op.resultado.startsWith("+") ? "text-trader-green" : "text-trader-red"}>
                            {op.resultado}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card className="bg-trader-navy border-trader-gray">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-trader-green">
                  {marketAnalysis.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-300 whitespace-pre-line">
                  {marketAnalysis.content}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
