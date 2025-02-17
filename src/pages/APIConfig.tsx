
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function APIConfig() {
  const { toast } = useToast();
  const [apis, setApis] = useState({
    dashboard: {
      dolar: localStorage.getItem('api_dashboard_dolar') || '',
      indice: localStorage.getItem('api_dashboard_indice') || '',
    },
    flow: {
      dolar: localStorage.getItem('api_flow_dolar') || '',
      indice: localStorage.getItem('api_flow_indice') || '',
    },
    ai: {
      dolar: localStorage.getItem('api_ai_dolar') || '',
      indice: localStorage.getItem('api_ai_indice') || '',
    },
    averagePrice: localStorage.getItem('api_average_price') || '',
  });

  const handleSave = () => {
    // Dashboard APIs
    localStorage.setItem('api_dashboard_dolar', apis.dashboard.dolar);
    localStorage.setItem('api_dashboard_indice', apis.dashboard.indice);
    
    // Flow APIs
    localStorage.setItem('api_flow_dolar', apis.flow.dolar);
    localStorage.setItem('api_flow_indice', apis.flow.indice);
    
    // AI APIs
    localStorage.setItem('api_ai_dolar', apis.ai.dolar);
    localStorage.setItem('api_ai_indice', apis.ai.indice);
    
    // Average Price API
    localStorage.setItem('api_average_price', apis.averagePrice);

    toast({
      title: "Configuração salva",
      description: "As URLs das APIs foram atualizadas com sucesso.",
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle className="text-trader-green">Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dashboard-dolar">API Dólar</Label>
              <Input
                id="dashboard-dolar"
                value={apis.dashboard.dolar}
                onChange={(e) => setApis(prev => ({
                  ...prev,
                  dashboard: { ...prev.dashboard, dolar: e.target.value }
                }))}
                className="bg-trader-gray/20 border-trader-gray text-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dashboard-indice">API Índice</Label>
              <Input
                id="dashboard-indice"
                value={apis.dashboard.indice}
                onChange={(e) => setApis(prev => ({
                  ...prev,
                  dashboard: { ...prev.dashboard, indice: e.target.value }
                }))}
                className="bg-trader-gray/20 border-trader-gray text-gray-300"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle className="text-trader-green">Fluxo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="flow-dolar">API Dólar</Label>
              <Input
                id="flow-dolar"
                value={apis.flow.dolar}
                onChange={(e) => setApis(prev => ({
                  ...prev,
                  flow: { ...prev.flow, dolar: e.target.value }
                }))}
                className="bg-trader-gray/20 border-trader-gray text-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="flow-indice">API Índice</Label>
              <Input
                id="flow-indice"
                value={apis.flow.indice}
                onChange={(e) => setApis(prev => ({
                  ...prev,
                  flow: { ...prev.flow, indice: e.target.value }
                }))}
                className="bg-trader-gray/20 border-trader-gray text-gray-300"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle className="text-trader-green">Inteligência Artificial</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ai-dolar">API Dólar</Label>
              <Input
                id="ai-dolar"
                value={apis.ai.dolar}
                onChange={(e) => setApis(prev => ({
                  ...prev,
                  ai: { ...prev.ai, dolar: e.target.value }
                }))}
                className="bg-trader-gray/20 border-trader-gray text-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ai-indice">API Índice</Label>
              <Input
                id="ai-indice"
                value={apis.ai.indice}
                onChange={(e) => setApis(prev => ({
                  ...prev,
                  ai: { ...prev.ai, indice: e.target.value }
                }))}
                className="bg-trader-gray/20 border-trader-gray text-gray-300"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle className="text-trader-green">Preço Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="average-price">API</Label>
              <Input
                id="average-price"
                value={apis.averagePrice}
                onChange={(e) => setApis(prev => ({
                  ...prev,
                  averagePrice: e.target.value
                }))}
                className="bg-trader-gray/20 border-trader-gray text-gray-300"
              />
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={handleSave}
          className="w-full bg-trader-green text-black hover:bg-trader-green/90"
        >
          Salvar Configurações
        </Button>
      </div>
    </Layout>
  );
}

