
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConfigSectionProps } from "@/types/api-config";
import { EndpointField } from "./EndpointField";
import { useConfigState } from "@/hooks/useConfigState";
import { useEndpointTesting } from "@/hooks/useEndpointTesting";

export const ConfigSection = ({ title, config, activeFilter, fields, onSave }: ConfigSectionProps) => {
  const { 
    localConfig, 
    handleUrlChange, 
    handleJsonPathChange, 
    handleMethodChange,
    handleDisplayLocationChange,
    toggleEditing, 
    prepareConfigForSave 
  } = useConfigState(config);
  const { testEndpoint } = useEndpointTesting();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const configToSave = prepareConfigForSave();
    onSave(configToSave);
  };

  const handleTestEndpoint = (key: string) => {
    const endpoint = localConfig[key][activeFilter];
    testEndpoint(endpoint);
  };

  const getSection = () => {
    if (title.toLowerCase().includes('dashboard')) return 'dashboard';
    if (title.toLowerCase().includes('fluxo')) return 'flow';
    if (title.toLowerCase().includes('mercados')) return 'markets';
    if (title.toLowerCase().includes('inteligência')) return 'ai';
    return 'dashboard';
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
            <EndpointField
              key={key}
              id={key}
              label={label}
              url={localConfig[key]?.[activeFilter]?.url || ''}
              jsonPath={localConfig[key]?.[activeFilter]?.jsonPath || ''}
              method={localConfig[key]?.[activeFilter]?.method || 'GET'}
              isEditing={localConfig[key]?.[activeFilter]?.isEditing || false}
              displayLocation={localConfig[key]?.[activeFilter]?.displayLocation}
              onUrlChange={(value) => handleUrlChange(key, activeFilter, value)}
              onJsonPathChange={(value) => handleJsonPathChange(key, activeFilter, value)}
              onMethodChange={(value) => handleMethodChange(key, activeFilter, value)}
              onDisplayLocationChange={(value) => handleDisplayLocationChange(key, activeFilter, value)}
              onToggleEdit={() => toggleEditing(key, activeFilter)}
              onTest={() => handleTestEndpoint(key)}
              filterType={activeFilter}
              section={getSection()}
            />
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

