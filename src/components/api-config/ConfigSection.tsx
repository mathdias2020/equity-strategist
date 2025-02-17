
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { APIConfig, ConfigSectionProps } from "@/types/api-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Pencil } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ConfigSection = ({ title, config, activeFilter, fields, onSave }: ConfigSectionProps) => {
  const { toast } = useToast();
  const [localConfig, setLocalConfig] = useState<APIConfig>(() => {
    const initialConfig = { ...config };
    Object.keys(initialConfig).forEach(key => {
      initialConfig[key] = {
        dolar: { 
          url: config[key]?.dolar?.url || '', 
          method: config[key]?.dolar?.method || 'GET',
          isEditing: false 
        },
        indice: { 
          url: config[key]?.indice?.url || '', 
          method: config[key]?.indice?.method || 'GET',
          isEditing: false 
        }
      };
    });
    return initialConfig;
  });

  const handleUrlChange = (key: string, value: string) => {
    setLocalConfig(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [activeFilter]: {
          ...prev[key][activeFilter],
          url: value
        }
      }
    }));
  };

  const handleMethodChange = (key: string, value: 'GET' | 'POST') => {
    setLocalConfig(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [activeFilter]: {
          ...prev[key][activeFilter],
          method: value
        }
      }
    }));
  };

  const toggleEditing = (key: string) => {
    setLocalConfig(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [activeFilter]: {
          ...prev[key][activeFilter],
          isEditing: !prev[key][activeFilter].isEditing
        }
      }
    }));
  };

  const testEndpoint = async (key: string) => {
    const endpoint = localConfig[key][activeFilter];
    if (!endpoint.url) {
      toast({
        title: "Erro",
        description: "URL do endpoint não configurada.",
        variant: "destructive",
      });
      return;
    }

    try {
      const baseUrl = localStorage.getItem('api-base-url') || 'http://api.traderbanqueiro.com.br/';
      console.log('Testando endpoint:', `${baseUrl}${endpoint.url}`);
      
      const response = await fetch(`${baseUrl}${endpoint.url}`, {
        method: endpoint.method,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Resposta da API:', data);
      
      // Verificação específica para o endpoint detailedPosition
      if (endpoint.url.includes('detailedPosition')) {
        if (!Array.isArray(data)) {
          throw new Error('Resposta da API não é um array como esperado');
        }
      }
      
      toast({
        title: "Retorno do Endpoint",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    } catch (error) {
      console.error('Erro ao testar endpoint:', error);
      toast({
        title: "Erro ao testar endpoint",
        description: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const configToSave = { ...localConfig };
    Object.keys(configToSave).forEach(key => {
      configToSave[key].dolar.isEditing = false;
      configToSave[key].indice.isEditing = false;
    });
    setLocalConfig(configToSave);
    onSave(configToSave);
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
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    id={key}
                    value={localConfig[key]?.[activeFilter]?.url || ''}
                    onChange={(e) => handleUrlChange(key, e.target.value)}
                    className="bg-black border-trader-gray text-white"
                    placeholder={`Digite o endpoint para ${label} (${activeFilter === 'dolar' ? 'Dólar' : 'Índice'})`}
                    disabled={!localConfig[key]?.[activeFilter]?.isEditing}
                  />
                </div>
                <Select
                  value={localConfig[key]?.[activeFilter]?.method || 'GET'}
                  onValueChange={(value: 'GET' | 'POST') => handleMethodChange(key, value)}
                  disabled={!localConfig[key]?.[activeFilter]?.isEditing}
                >
                  <SelectTrigger className="w-[100px] bg-black border-trader-gray text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GET">GET</SelectItem>
                    <SelectItem value="POST">POST</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => toggleEditing(key)}
                  className="border-trader-gray text-trader-green hover:text-trader-green/90"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => testEndpoint(key)}
                  className="border-trader-gray text-trader-green hover:text-trader-green/90"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
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
