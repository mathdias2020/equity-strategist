
import { useState, useEffect } from 'react';
import { useEndpointTesting } from './useEndpointTesting';
import { EndpointConfig } from '@/types/api-config';

export const useEndpointData = (displayLocation: string) => {
  const [data, setData] = useState<any>(null);
  const { testEndpoint } = useEndpointTesting();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const matchingEndpoint: EndpointConfig = {
          url: 'flow',
          method: 'GET',
          jsonPath: '',
          displayLocation,
          isEditing: false
        };

        console.log(`Buscando dados para ${displayLocation}...`);
        const result = await testEndpoint(matchingEndpoint);
        console.log(`Resultado para ${displayLocation}:`, result);
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados do endpoint:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [displayLocation, testEndpoint]);

  return data;
};
