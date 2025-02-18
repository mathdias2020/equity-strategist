
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function APIBaseConfigPage() {
  const { toast } = useToast();
  const [dolarUrl, setDolarUrl] = useState<string>(() => 
    localStorage.getItem('api-base-url-dolar') || 'http://api.traderbanqueiro.com.br/'
  );
  const [indiceUrl, setIndiceUrl] = useState<string>(() => 
    localStorage.getItem('api-base-url-indice') || 'http://api.traderbanqueiro.com.br/'
  );

  const handleDolarUrlSave = () => {
    localStorage.setItem('api-base-url-dolar', dolarUrl);
    toast({
      title: "URL Base do Dólar salva",
      description: "A URL base da API para Dólar foi atualizada com sucesso.",
    });
  };

  const handleIndiceUrlSave = () => {
    localStorage.setItem('api-base-url-indice', indiceUrl);
    toast({
      title: "URL Base do Índice salva",
      description: "A URL base da API para Índice foi atualizada com sucesso.",
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
                value={dolarUrl}
                onChange={(e) => setDolarUrl(e.target.value)}
                className="bg-black border-trader-gray text-white flex-1"
                placeholder="Digite a URL base da API para Dólar"
              />
              <Button 
                onClick={handleDolarUrlSave}
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
                value={indiceUrl}
                onChange={(e) => setIndiceUrl(e.target.value)}
                className="bg-black border-trader-gray text-white flex-1"
                placeholder="Digite a URL base da API para Índice"
              />
              <Button 
                onClick={handleIndiceUrlSave}
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
