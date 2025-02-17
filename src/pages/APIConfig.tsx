
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

type APIConfig = {
  [key: string]: string;
};

export default function APIConfig() {
  const { toast } = useToast();
  const [configs, setConfigs] = useState<{
    dashboard: APIConfig;
    flow: APIConfig;
    markets: APIConfig;
    ai: APIConfig;
  }>(() => {
    const savedConfigs = localStorage.getItem('api-configs');
    return savedConfigs ? JSON.parse(savedConfigs) : {
      dashboard: {
        priceData: '',
        portfolioData: '',
        flowData: '',
      },
      flow: {
        orderFlow: '',
        pressureData: '',
        volumeData: '',
      },
      markets: {
        indices: '',
        currencies: '',
        commodities: '',
      },
      ai: {
        suggestions: '',
        analysis: '',
      },
    };
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

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-trader-green">Configuração de APIs</h1>
        
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
              fields={{
                priceData: "Dados de Preços",
                portfolioData: "Dados do Portfólio",
                flowData: "Dados de Fluxo",
              }}
              onSave={(newConfig) => handleSave("dashboard", newConfig)}
            />
          </TabsContent>

          <TabsContent value="flow">
            <ConfigSection
              title="Fluxo"
              config={configs.flow}
              fields={{
                orderFlow: "Fluxo de Ordens",
                pressureData: "Dados de Pressão",
                volumeData: "Dados de Volume",
              }}
              onSave={(newConfig) => handleSave("flow", newConfig)}
            />
          </TabsContent>

          <TabsContent value="markets">
            <ConfigSection
              title="Mercados"
              config={configs.markets}
              fields={{
                indices: "Índices",
                currencies: "Moedas",
                commodities: "Commodities",
              }}
              onSave={(newConfig) => handleSave("markets", newConfig)}
            />
          </TabsContent>

          <TabsContent value="ai">
            <ConfigSection
              title="Inteligência Artificial"
              config={configs.ai}
              fields={{
                suggestions: "Sugestões",
                analysis: "Análise de Mercado",
              }}
              onSave={(newConfig) => handleSave("ai", newConfig)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

type ConfigSectionProps = {
  title: string;
  config: APIConfig;
  fields: { [key: string]: string };
  onSave: (config: APIConfig) => void;
};

const ConfigSection = ({ title, config, fields, onSave }: ConfigSectionProps) => {
  const [localConfig, setLocalConfig] = useState<APIConfig>(config);

  const handleChange = (key: string, value: string) => {
    setLocalConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(localConfig);
  };

  return (
    <Card className="bg-trader-navy border-trader-gray">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-trader-green">
          Configuração: {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(fields).map(([key, label]) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="text-gray-300">
                API {label}
              </Label>
              <Input
                id={key}
                value={localConfig[key] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
                className="bg-black border-trader-gray text-white"
                placeholder={`Digite o endpoint para ${label}`}
              />
            </div>
          ))}
          <Button 
            type="submit"
            className="w-full bg-trader-green text-black hover:bg-trader-green/90"
          >
            Salvar Configurações
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
