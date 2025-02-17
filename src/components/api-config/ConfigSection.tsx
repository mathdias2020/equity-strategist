
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { APIConfig, ConfigSectionProps } from "@/types/api-config";

export const ConfigSection = ({ title, config, activeFilter, fields, onSave }: ConfigSectionProps) => {
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

