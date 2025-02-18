
import { useState, useEffect, useCallback } from 'react';
import { useEndpointTesting } from './useEndpointTesting';
import { EndpointConfig } from '@/types/api-config';

export const useEndpointData = (displayLocation: string) => {
  const [data, setData] = useState<any>(null);
  const { testEndpoint } = useEndpointTesting();

  const fetchData = useCallback(async () => {
    try {
      // Buscar configurações do localStorage
      const activeFilter = displayLocation.includes('indice') ? 'indice' : 'dolar';
      const configKey = activeFilter === 'dolar' ? 'api-configs-dolar' : 'api-configs-indice';
      const savedConfigs = localStorage.getItem(configKey);
      const configs = savedConfigs ? JSON.parse(savedConfigs) : null;

      // Determinar qual seção (flow) e campo usar baseado no displayLocation
      let matchingEndpoint: EndpointConfig | null = null;

      if (configs?.flow) {
        const flowConfig = configs.flow;
        Object.entries(flowConfig).forEach(([key, value]: [string, any]) => {
          if (value[activeFilter]?.displayLocation === displayLocation) {
            matchingEndpoint = {
              url: value[activeFilter].url || 'flow',
              method: value[activeFilter].method || 'GET',
              jsonPath: value[activeFilter].jsonPath || '',
              displayLocation,
              isEditing: false
            };
          }
        });
      }

      // Se não encontrar configuração específica, usar a configuração padrão
      if (!matchingEndpoint) {
        matchingEndpoint = {
          url: 'flow',
          method: 'GET',
          jsonPath: '',
          displayLocation,
          isEditing: false
        };
      }

      console.log(`Buscando dados para ${displayLocation}...`);
      console.log('Usando configuração:', matchingEndpoint);
      
      const result = await testEndpoint(matchingEndpoint);
      if (result !== null) {
        console.log(`Resultado para ${displayLocation}:`, result);
        setData(result);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do endpoint:', error);
    }
  }, [displayLocation, testEndpoint]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return data;
};
