
import { useState } from "react";
import { APIConfig, ActiveFilter } from "@/types/api-config";

export const useConfigState = (initialConfig: APIConfig) => {
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

  const handleUrlChange = (key: string, activeFilter: ActiveFilter, value: string) => {
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

  const handleJsonPathChange = (key: string, activeFilter: ActiveFilter, value: string) => {
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

  const handleMethodChange = (key: string, activeFilter: ActiveFilter, value: 'GET' | 'POST') => {
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

  const toggleEditing = (key: string, activeFilter: ActiveFilter) => {
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

  const prepareConfigForSave = () => {
    const configToSave = { ...localConfig };
    Object.keys(configToSave).forEach(key => {
      configToSave[key].dolar.isEditing = false;
      configToSave[key].indice.isEditing = false;
    });
    setLocalConfig(configToSave);
    return configToSave;
  };

  return {
    localConfig,
    handleUrlChange,
    handleJsonPathChange,
    handleMethodChange,
    toggleEditing,
    prepareConfigForSave
  };
};
