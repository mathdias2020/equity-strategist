
import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ConfigSection } from "@/components/api-config/ConfigSection";
import { MarketConfigSection } from "@/components/api-config/MarketConfigSection";
import { FilterButtons } from "@/components/api-config/FilterButtons";
import { defaultConfigs, sectionFields } from "@/utils/api-config";
import { APIConfig, ActiveFilter, BaseUrlConfig } from "@/types/api-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function APIConfigPage() {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('dolar');
  const [baseUrl, setBaseUrl] = useState<string>(() => {
    return localStorage.getItem('api-base-url') || '';
  });
  const [configs, setConfigs] = useState<{
    dashboard: APIConfig;
    flow: APIConfig;
    markets: APIConfig;
    ai: APIConfig;
  }>(() => {
    const savedConfigs = localStorage.getItem('api-configs');
    return savedConfigs ? JSON.parse(savedConfigs) : defaultConfigs;
  });

  const handleSave = (section: string, newConfig: APIConfig) => {
    const updatedConfigs = {
      ...configs,
      [section]: newConfig,
    };
    setConfigs(updatedConfigs);
    localStorage.setItem('api-configs', JSON.stringify(updatedConfigs));
    toast({
      title: "Configurações salvas",
      description: `As configurações de ${section} foram atualizadas com sucesso.`,
    });
  };

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
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-trader-green">Configuração de APIs</h1>
          <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

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
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="flow">Fluxo</TabsTrigger>
            <TabsTrigger value="markets">Mercados</TabsTrigger>
            <TabsTrigger value="ai">IA</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <ConfigSection
              title="Dashboard"
              config={configs.dashboard}
              activeFilter={activeFilter}
              fields={sectionFields.dashboard}
              onSave={(newConfig) => handleSave("dashboard", newConfig)}
            />
          </TabsContent>

          <TabsContent value="flow">
            <ConfigSection
              title="Fluxo"
              config={configs.flow}
              activeFilter={activeFilter}
              fields={sectionFields.flow}
              onSave={(newConfig) => handleSave("flow", newConfig)}
            />
          </TabsContent>

          <TabsContent value="markets">
            <MarketConfigSection
              config={configs.markets}
              activeFilter={activeFilter}
              onSave={(newConfig) => handleSave("markets", newConfig)}
            />
          </TabsContent>

          <TabsContent value="ai">
            <ConfigSection
              title="Inteligência Artificial"
              config={configs.ai}
              activeFilter={activeFilter}
              fields={sectionFields.ai}
              onSave={(newConfig) => handleSave("ai", newConfig)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
