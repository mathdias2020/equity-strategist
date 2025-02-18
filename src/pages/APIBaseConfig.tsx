
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function APIBaseConfigPage() {
  const { toast } = useToast();
  const [baseUrls, setBaseUrls] = useState<{dolar: string; indice: string}>(() => ({
    dolar: localStorage.getItem('api-base-url-dolar') || 'http://api.traderbanqueiro.com.br/',
    indice: localStorage.getItem('api-base-url-indice') || 'http://api.traderbanqueiro.com.br/'
  }));

  const handleBaseUrlSave = (type: 'dolar' | 'indice') => {
    localStorage.setItem(`api-base-url-${type}`, baseUrls[type]);
    toast({
      title: "URL Base salva",
      description: `A URL base da API para ${type === 'dolar' ? 'Dólar' : 'Índice'} foi atualizada com sucesso.`,
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-trader-green">Configuração da URL Base</h1>
        
        <Card className="bg-trader-navy border-trader-gray mb-4">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-trader-green">
              URL Base da API - Dólar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                value={baseUrls.dolar}
                onChange={(e) => setBaseUrls(prev => ({ ...prev, dolar: e.target.value }))}
                className="bg-black border-trader-gray text-white flex-1"
                placeholder="Digite a URL base da API para Dólar"
              />
              <Button 
                onClick={() => handleBaseUrlSave('dolar')}
                className="bg-trader-green text-black hover:bg-trader-green/90"
              >
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-trader-green">
              URL Base da API - Índice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                value={baseUrls.indice}
                onChange={(e) => setBaseUrls(prev => ({ ...prev, indice: e.target.value }))}
                className="bg-black border-trader-gray text-white flex-1"
                placeholder="Digite a URL base da API para Índice"
              />
              <Button 
                onClick={() => handleBaseUrlSave('indice')}
                className="bg-trader-green text-black hover:bg-trader-green/90"
              >
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
