
import { useState, useCallback, useEffect } from 'react';
import { useEndpointTesting } from './useEndpointTesting';
import { EndpointConfig } from '@/types/api-config';

export const useEndpointData = (displayLocation: string, autoFetch: boolean = true) => {
  const [data, setData] = useState<any>(null);
  const [lastCallTime, setLastCallTime] = useState<Date | null>(() => {
    const savedTime = localStorage.getItem('lastApiCallTime');
    return savedTime ? new Date(savedTime) : null;
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
        setLastCallTime(newTime);
        localStorage.setItem('lastApiCallTime', newTime.toISOString());
      }
    } catch (error) {
      console.error('Erro ao buscar dados do endpoint:', error);
    }
  }, [displayLocation, testEndpoint]);

  // Efeito para atualizar o lastCallTime quando mudar em outra instância do hook
  useEffect(() => {
    const handleStorageChange = () => {
      const savedTime = localStorage.getItem('lastApiCallTime');
      if (savedTime) {
        setLastCallTime(new Date(savedTime));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { data, fetchData, lastCallTime };
};
