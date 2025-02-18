
import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ConfigSection } from "@/components/api-config/ConfigSection";
import { MarketConfigSection } from "@/components/api-config/MarketConfigSection";
import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { defaultConfigs, sectionFields } from "@/utils/api-config";
import { APIConfig } from "@/types/api-config";
import { useNavigate } from "react-router-dom";

export default function APIIndicePage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [configs, setConfigs] = useState<{
    dashboard: APIConfig;
    flow: APIConfig;
    markets: APIConfig;
    ai: APIConfig;
  }>(() => {
    const savedConfigs = localStorage.getItem('api-configs-indice');
    return savedConfigs ? JSON.parse(savedConfigs) : defaultConfigs;
  });

  const handleSave = (section: string, newConfig: APIConfig) => {
    const updatedConfigs = {
      ...configs,
      [section]: newConfig,
    };
    setConfigs(updatedConfigs);
    localStorage.setItem('api-configs-indice', JSON.stringify(updatedConfigs));
    toast({
      title: "Configurações salvas",
      description: `As configurações de ${section} foram atualizadas com sucesso.`,
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-trader-green">Configuração de APIs - Índice</h1>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => navigate('/api-base-config')}
          >
            <Settings2 className="h-4 w-4" />
          </Button>
        </div>
        
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
              activeFilter="indice"
              fields={sectionFields.dashboard}
              onSave={(newConfig) => handleSave("dashboard", newConfig)}
            />
          </TabsContent>

          <TabsContent value="flow">
            <ConfigSection
              title="Fluxo"
              config={configs.flow}
              activeFilter="indice"
              fields={sectionFields.flow}
              onSave={(newConfig) => handleSave("flow", newConfig)}
            />
          </TabsContent>

          <TabsContent value="markets">
            <MarketConfigSection
              config={configs.markets}
              activeFilter="indice"
              onSave={(newConfig) => handleSave("markets", newConfig)}
            />
          </TabsContent>

          <TabsContent value="ai">
            <ConfigSection
              title="Inteligência Artificial"
              config={configs.ai}
              activeFilter="indice"
              fields={sectionFields.ai}
              onSave={(newConfig) => handleSave("ai", newConfig)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
