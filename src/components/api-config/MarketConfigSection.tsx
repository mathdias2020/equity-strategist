
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { APIConfig, ActiveFilter } from "@/types/api-config";
import { marketTables } from "@/utils/api-config";
import { useMarketConfig } from "@/hooks/useMarketConfig";
import { MarketAccordionItem } from "./MarketAccordionItem";

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
  const {
    localConfig,
    handleUrlChange,
    handleMethodChange,
    toggleEditing,
    testEndpoint,
    handleSubmit,
  } = useMarketConfig(config, activeFilter, onSave);

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
              <MarketAccordionItem
                key={tableKey}
                tableKey={tableKey}
                table={table}
                config={localConfig}
                activeFilter={activeFilter}
                onUrlChange={handleUrlChange}
                onMethodChange={handleMethodChange}
                onToggleEdit={toggleEditing}
                onTest={testEndpoint}
              />
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
