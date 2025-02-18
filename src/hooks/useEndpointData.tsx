
import { useState, useCallback, useEffect } from 'react';
import { useEndpointTesting } from './useEndpointTesting';
import { EndpointConfig } from '@/types/api-config';

// Criar uma variável global para armazenar o último timestamp
let globalLastCallTime: string | null = localStorage.getItem('lastApiCallTime');

export const useEndpointData = (displayLocation: string, autoFetch: boolean = true) => {
  const [data, setData] = useState<any>(null);
  const [lastCallTime, setLastCallTime] = useState<Date | null>(() => {
    return globalLastCallTime ? new Date(globalLastCallTime) : null;
  });
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
        const newTime = new Date();
        // Atualizar tanto o localStorage quanto a variável global
        globalLastCallTime = newTime.toISOString();
        localStorage.setItem('lastApiCallTime', globalLastCallTime);
        setLastCallTime(newTime);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do endpoint:', error);
    }
  }, [displayLocation, testEndpoint]);

  // Efeito para verificar mudanças na variável global
  useEffect(() => {
    const checkGlobalTime = () => {
      if (globalLastCallTime) {
        const currentLastCallTime = lastCallTime?.toISOString();
        if (currentLastCallTime !== globalLastCallTime) {
          setLastCallTime(new Date(globalLastCallTime));
        }
      }
    };

    // Verificar a cada segundo se houve mudança
    const interval = setInterval(checkGlobalTime, 1000);
    return () => clearInterval(interval);
  }, [lastCallTime]);

  return { data, fetchData, lastCallTime };
};
