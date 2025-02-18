
import { useState, useCallback } from 'react';
import { useEndpointTesting } from './useEndpointTesting';
import { EndpointConfig } from '@/types/api-config';

export const useEndpointData = (displayLocation: string, autoFetch: boolean = true) => {
  const [data, setData] = useState<any>(null);
  const [lastCallTime, setLastCallTime] = useState<Date | null>(null);
  const { testEndpoint } = useEndpointTesting();

  const fetchData = useCallback(async () => {
    try {
      const activeFilter = displayLocation.includes('indice') ? 'indice' : 'dolar';
      const matchingEndpoint: EndpointConfig = {
        url: 'flow',
        method: 'GET',
        jsonPath: '',
        displayLocation,
        isEditing: false
      };
      
      console.log(`Buscando dados para ${displayLocation}...`);
      
      const result = await testEndpoint(matchingEndpoint);
      if (result !== null) {
        console.log(`Resultado para ${displayLocation}:`, result);
        setData(result);
        setLastCallTime(new Date());
      }
    } catch (error) {
      console.error('Erro ao buscar dados do endpoint:', error);
    }
  }, [displayLocation, testEndpoint]);

  return { data, fetchData, lastCallTime };
};
