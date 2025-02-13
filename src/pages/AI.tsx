
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aiSuggestions } from "@/mocks/data";
import { Brain } from "lucide-react";

export default function AI() {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return "text-trader-green";
    if (confidence >= 0.6) return "text-trader-yellow";
    return "text-trader-red";
  };

  const getActionColor = (action: string) => {
    if (action === "Compra") return "text-trader-green";
    if (action === "Venda") return "text-trader-red";
    return "text-trader-yellow";
  };

  return (
    <Layout>
      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          <Brain className="h-8 w-8 text-trader-green" />
          <h1 className="text-2xl font-bold">Análise de Inteligência Artificial</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiSuggestions.map((suggestion) => (
            <Card key={suggestion.asset} className="bg-trader-navy border-trader-gray">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{suggestion.asset}</span>
                  <span className={getActionColor(suggestion.action)}>
                    {suggestion.action}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Confiança</div>
                    <div className={`text-lg font-bold ${getConfidenceColor(suggestion.confidence)}`}>
                      {(suggestion.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Motivo</div>
                    <p className="text-sm">{suggestion.reason}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle>Análise de Mercado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                O mercado apresenta tendência de alta, com forte pressão compradora nos principais ativos do índice. 
                Os indicadores técnicos sugerem continuidade do movimento atual, com suporte próximo aos 127.000 pontos.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-trader-gray/20 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Tendência Geral</div>
                  <div className="text-lg font-bold text-trader-green">Alta</div>
                </div>
                <div className="bg-trader-gray/20 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Força Relativa</div>
                  <div className="text-lg font-bold text-trader-yellow">Neutra</div>
                </div>
                <div className="bg-trader-gray/20 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Volatilidade</div>
                  <div className="text-lg font-bold text-trader-red">Alta</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
