
import { useState, useEffect } from 'react';
import { useEndpointTesting } from './useEndpointTesting';
import { EndpointConfig, FilterConfig } from '@/types/api-config';

export const useEndpointData = (displayLocation: string) => {
  const [data, setData] = useState<any>(null);
  const { testEndpoint } = useEndpointTesting();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Recuperar as configurações salvas
        const dolarConfigs = localStorage.getItem('api-configs-dolar');
        const indiceConfigs = localStorage.getItem('api-configs-indice');
        
        if (!dolarConfigs && !indiceConfigs) return;

        const dolarData = dolarConfigs ? JSON.parse(dolarConfigs) : {};
        const indiceData = indiceConfigs ? JSON.parse(indiceConfigs) : {};

        // Procurar endpoint com o displayLocation correspondente
        let matchingEndpoint: EndpointConfig | null = null;
        let configType: 'dolar' | 'indice' | null = null;

        for (const section of ['dashboard', 'flow', 'markets', 'ai']) {
          const dolarSection = dolarData[section];
          const indiceSection = indiceData[section];

          for (const key in dolarSection) {
            if (dolarSection[key]?.dolar?.displayLocation === displayLocation) {
              matchingEndpoint = dolarSection[key].dolar;
              configType = 'dolar';
              break;
            }
          }

          for (const key in indiceSection) {
            if (indiceSection[key]?.indice?.displayLocation === displayLocation) {
              matchingEndpoint = indiceSection[key].indice;
              configType = 'indice';
              break;
            }
          }

          if (matchingEndpoint) break;
        }

        if (matchingEndpoint) {
          console.log(`Encontrado endpoint para ${displayLocation}:`, matchingEndpoint);
          const result = await testEndpoint(matchingEndpoint);
          console.log(`Resultado para ${displayLocation}:`, result);
          setData(result);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do endpoint:', error);
      }
    };

    fetchData();
    // Atualizar a cada 30 segundos
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [displayLocation, testEndpoint]);

  return data;
};
