
import { useState } from "react";
import { APIConfig, ActiveFilter } from "@/types/api-config";

export const useMarketConfig = (
  initialConfig: APIConfig,
  activeFilter: ActiveFilter,
  onSave: (config: APIConfig) => void
) => {
  const [localConfig, setLocalConfig] = useState<APIConfig>(initialConfig);

  const handleUrlChange = (key: string, value: string) => {
    setLocalConfig(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [activeFilter]: {
          ...prev[key]?.[activeFilter],
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
          ...prev[key]?.[activeFilter],
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
          ...prev[key]?.[activeFilter],
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
          ...prev[key]?.[activeFilter],
          isEditing: !prev[key]?.[activeFilter]?.isEditing
        }
      }
    }));
  };

  const testEndpoint = (key: string) => {
    console.log('Testing endpoint:', key);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(localConfig);
  };

  return {
    localConfig,
    handleUrlChange,
    handleJsonPathChange,
    handleMethodChange,
    toggleEditing,
    testEndpoint,
    handleSubmit,
  };
};
