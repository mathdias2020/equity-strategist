
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ActiveFilter } from "@/types/api-config";

export default function APIBaseConfigPage() {
  const { toast } = useToast();
  const { filter } = useParams<{ filter: ActiveFilter }>();
  const navigate = useNavigate();
  const [baseUrl, setBaseUrl] = useState<string>(() => {
    return localStorage.getItem('api-base-url') || 'http://api.traderbanqueiro.com.br/';
  });

  useEffect(() => {
    if (filter && !['dolar', 'indice'].includes(filter)) {
      navigate('/api-base-config');
    }
  }, [filter, navigate]);

  const handleBaseUrlSave = () => {
    localStorage.setItem('api-base-url', baseUrl);
    toast({
      title: "URL Base salva",
      description: "A URL base da API foi atualizada com sucesso.",
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-trader-green">
          {filter 
            ? `Configuração da URL Base - ${filter === 'dolar' ? 'Dólar' : 'Índice'}`
            : 'Configuração da URL Base'
          }
        </h1>
        
        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-trader-green">
              URL Base da API
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="bg-black border-trader-gray text-white flex-1"
                placeholder="Digite a URL base da API (ex: https://api.exemplo.com)"
              />
              <Button 
                onClick={handleBaseUrlSave}
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
