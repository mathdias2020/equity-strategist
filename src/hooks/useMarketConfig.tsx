
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
    toast({
      title: "API Desabilitada",
      description: "As chamadas de API foram desabilitadas.",
      variant: "destructive",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const configToSave = JSON.parse(JSON.stringify(localConfig));
    Object.keys(configToSave).forEach(key => {
      configToSave[key][activeFilter].isEditing = false;
    });
    setLocalConfig(configToSave);
    onSave(configToSave);
    toast({
      title: "Configurações salvas",
      description: `Configurações para ${activeFilter === 'dolar' ? 'Dólar' : 'Índice'} foram salvas com sucesso.`,
    });
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
