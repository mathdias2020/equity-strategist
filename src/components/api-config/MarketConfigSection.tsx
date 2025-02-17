
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APIConfig, ActiveFilter } from "@/types/api-config";
import { marketTables } from "@/utils/api-config";

interface MarketConfigSectionProps {
  config: APIConfig;
  activeFilter: ActiveFilter;
  onSave: (config: APIConfig) => void;
}

export const MarketConfigSection = ({
  config,
  activeFilter,
  onSave,
}: MarketConfigSectionProps) => {
  const [localConfig, setLocalConfig] = useState<APIConfig>(config);

  const handleChange = (key: string, value: string) => {
    setLocalConfig((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [activeFilter]: value,
      },
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
          Configuração: Mercados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {Object.entries(marketTables).map(([tableKey, table]) => (
              <AccordionItem
                key={tableKey}
                value={tableKey}
                className="border-trader-gray"
              >
                <AccordionTrigger className="text-trader-green hover:text-trader-green/90">
                  {table.name}
                </AccordionTrigger>
                <AccordionContent className="space-y-4 p-4">
                  {table.assets.map((asset) => (
                    <div key={asset.key} className="space-y-2">
                      <Label htmlFor={asset.key} className="text-gray-300">
                        API {asset.name} - {activeFilter === 'dolar' ? 'Dólar' : 'Índice'}
                      </Label>
                      <Input
                        id={asset.key}
                        value={localConfig[asset.key]?.[activeFilter] || ''}
                        onChange={(e) => handleChange(asset.key, e.target.value)}
                        className="bg-black border-trader-gray text-white"
                        placeholder={`Digite o endpoint para ${asset.name} (${activeFilter === 'dolar' ? 'Dólar' : 'Índice'})`}
                      />
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

