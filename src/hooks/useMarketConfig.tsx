
import { useState, ReactNode } from "react";
import { APIConfig, ActiveFilter } from "@/types/api-config";
import { useToast } from "@/components/ui/use-toast";
import get from "lodash/get";

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
      
      let value;
      if (endpoint.jsonPath) {
        const paths = endpoint.jsonPath.split('+').map(p => p.trim());
        if (paths.length > 1) {
          value = paths.reduce((acc, path) => {
            const pathValue = get(data, path);
            return acc !== undefined ? acc + Number(pathValue) : Number(pathValue);
          }, undefined);
        } else {
          value = get(data, endpoint.jsonPath);
        }
      } else {
        value = data;
      }

      console.log('API Response:', data);
      console.log('Extracted value:', value);
      console.log('JSON Path:', endpoint.jsonPath);
      
      const toastDescription = (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(value !== undefined ? value : data, null, 2)}</code>
        </pre>
      );
      
      toast({
        title: "Retorno do Endpoint",
        description: toastDescription as ReactNode,
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
    
    // Cria uma cópia profunda do estado atual
    const configToSave = JSON.parse(JSON.stringify(localConfig));
    
    // Reseta apenas o isEditing do filtro ativo
    Object.keys(configToSave).forEach(key => {
      configToSave[key][activeFilter].isEditing = false;
    });
    
    setLocalConfig(configToSave);
    
    // Mescla as configurações existentes com as novas
    const mergedConfig = { ...initialConfig };
    Object.keys(configToSave).forEach(key => {
      mergedConfig[key] = {
        ...initialConfig[key],
        [activeFilter]: configToSave[key][activeFilter]
      };
    });
    
    onSave(mergedConfig);

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
