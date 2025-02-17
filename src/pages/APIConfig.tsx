
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { DollarSign, TrendingUp } from "lucide-react";

type APIConfig = {
  [key: string]: {
    dolar: string;
    indice: string;
  };
};

type ActiveFilter = 'dolar' | 'indice';

export default function APIConfig() {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('dolar');
  const [configs, setConfigs] = useState<{
    dashboard: APIConfig;
    flow: APIConfig;
    markets: APIConfig;
    ai: APIConfig;
  }>(() => {
    const savedConfigs = localStorage.getItem('api-configs');
    return savedConfigs ? JSON.parse(savedConfigs) : {
      dashboard: {
        flowInstitutionalPosition: { dolar: '', indice: '' },
        flowInstitutional30Min: { dolar: '', indice: '' },
        flowRetailPosition: { dolar: '', indice: '' },
        flowRetail30Min: { dolar: '', indice: '' },
        priceMini: { dolar: '', indice: '' },
        priceFull: { dolar: '', indice: '' },
        priceGeneral: { dolar: '', indice: '' },
      },
      flow: {
        orderFlow: { dolar: '', indice: '' },
        pressureData: { dolar: '', indice: '' },
        volumeData: { dolar: '', indice: '' },
      },
      markets: {
        indices: { dolar: '', indice: '' },
        currencies: { dolar: '', indice: '' },
        commodities: { dolar: '', indice: '' },
      },
      ai: {
        suggestions: { dolar: '', indice: '' },
        analysis: { dolar: '', indice: '' },
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
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-trader-green">Configuração de APIs</h1>
          <div className="flex gap-2">
            <Button
              variant={activeFilter === 'dolar' ? 'default' : 'outline'}
              className={cn(
                "gap-2",
                activeFilter === 'dolar' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
              )}
              onClick={() => setActiveFilter('dolar')}
            >
              <DollarSign className="h-4 w-4" />
              Dólar
            </Button>
            <Button
              variant={activeFilter === 'indice' ? 'default' : 'outline'}
              className={cn(
                "gap-2",
                activeFilter === 'indice' ? 'bg-trader-green text-black hover:bg-trader-green/90' : ''
              )}
              onClick={() => setActiveFilter('indice')}
            >
              <TrendingUp className="h-4 w-4" />
              Índice
            </Button>
          </div>
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
              activeFilter={activeFilter}
              fields={{
                flowInstitutionalPosition: "Fluxo Institucional - Posição",
                flowInstitutional30Min: "Fluxo Institucional - 30 minutos",
                flowRetailPosition: "Fluxo Varejo - Posição",
                flowRetail30Min: "Fluxo Varejo - 30 minutos",
                priceMini: "Preço Médio - Mini",
                priceFull: "Preço Médio - Cheio",
                priceGeneral: "Preço Médio - Geral",
              }}
              onSave={(newConfig) => handleSave("dashboard", newConfig)}
            />
          </TabsContent>

          <TabsContent value="flow">
            <ConfigSection
              title="Fluxo"
              config={configs.flow}
              activeFilter={activeFilter}
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
              activeFilter={activeFilter}
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
              activeFilter={activeFilter}
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
  activeFilter: ActiveFilter;
  fields: { [key: string]: string };
  onSave: (config: APIConfig) => void;
};

const ConfigSection = ({ title, config, activeFilter, fields, onSave }: ConfigSectionProps) => {
  const [localConfig, setLocalConfig] = useState<APIConfig>(config);

  const handleChange = (key: string, value: string) => {
    setLocalConfig((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [activeFilter]: value,
      }
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
                API {label} - {activeFilter === 'dolar' ? 'Dólar' : 'Índice'}
              </Label>
              <Input
                id={key}
                value={localConfig[key]?.[activeFilter] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
                className="bg-black border-trader-gray text-white"
                placeholder={`Digite o endpoint para ${label} (${activeFilter === 'dolar' ? 'Dólar' : 'Índice'})`}
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

