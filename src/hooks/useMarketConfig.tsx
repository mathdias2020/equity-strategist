
import { useState, ReactNode } from "react";
import { APIConfig, ActiveFilter } from "@/types/api-config";
import { useToast } from "@/components/ui/use-toast";

export const useMarketConfig = (
  initialConfig: APIConfig,
  activeFilter: ActiveFilter,
  onSave: (config: APIConfig) => void
) => {
  const { toast } = useToast();
  const [localConfig, setLocalConfig] = useState<APIConfig>(() => {
    const config = { ...initialConfig };
    Object.keys(config).forEach(key => {
      config[key] = {
        dolar: { 
          url: initialConfig[key]?.dolar?.url || '', 
          method: initialConfig[key]?.dolar?.method || 'GET',
          jsonPath: initialConfig[key]?.dolar?.jsonPath || '',
          isEditing: false 
        },
        indice: { 
          url: initialConfig[key]?.indice?.url || '', 
          method: initialConfig[key]?.indice?.method || 'GET',
          jsonPath: initialConfig[key]?.indice?.jsonPath || '',
          isEditing: false 
        }
      };
    });
    return config;
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

  const handleJsonPathChange = (key: string, value: string) => {
    setLocalConfig(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [activeFilter]: {
          ...prev[key][activeFilter],
          jsonPath: value
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
      const response = await fetch(`${baseUrl}${endpoint.url}`, {
        method: endpoint.method,
      });
      const data = await response.json();
      
      const toastDescription = (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      );
      
      toast({
        title: "Retorno do Endpoint",
        description: toastDescription,
      });
    } catch (error) {
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

  return {
    localConfig,
    handleUrlChange,
    handleJsonPathChange,
    handleMethodChange,
    toggleEditing,
    testEndpoint,
    handleSubmit
  };
};
