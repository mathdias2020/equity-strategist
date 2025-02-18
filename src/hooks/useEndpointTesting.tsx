
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { EndpointConfig } from '@/types/api-config';
import get from 'lodash/get';

export const useEndpointTesting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const testEndpoint = async (endpoint: EndpointConfig) => {
    if (!endpoint.url) {
      toast({
        title: "Erro",
        description: "URL do endpoint não configurada.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const baseUrl = 'https://api.traderbanqueiro.com.br/';
      const fullUrl = `${baseUrl}${endpoint.url}`;
      
      console.log('Tentando acessar:', fullUrl);
      
      const response = await fetch(fullUrl, {
        method: endpoint.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Dados completos da API:', data);
      
      let extractedValue = null;
      
      if (endpoint.displayLocation) {
        switch (endpoint.displayLocation) {
          case 'institutional-position':
            extractedValue = data.position?.daily?.foreignDolar;
            break;
          case 'institutional-indice':
            extractedValue = data.position?.daily?.foreignIndice;
            break;
          case 'retail-position':
            extractedValue = data.position?.daily?.localDolar;
            break;
          case 'retail-indice':
            extractedValue = data.position?.daily?.localIndice;
            break;
          case 'price-mini-dolar':
            extractedValue = data.averagePrice?.[0]?.averagePriceMiniDolar;
            break;
          case 'price-mini-indice':
            extractedValue = data.averagePrice?.[0]?.averagePriceMiniIndice;
            break;
          case 'price-full-dolar':
            extractedValue = data.averagePrice?.[0]?.averagePriceDolar;
            break;
          case 'price-full-indice':
            extractedValue = data.averagePrice?.[0]?.averagePriceIndice;
            break;
          case 'price-general-dolar':
            extractedValue = data.averagePrice?.[0]?.averagePriceGeneralDolar;
            break;
          case 'price-general-indice':
            extractedValue = data.averagePrice?.[0]?.averagePriceGeneralIndice;
            break;
          default:
            extractedValue = null;
        }
      }
      
      console.log('Valor extraído:', extractedValue);
      return extractedValue;

    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        console.warn('Erro de conexão com a API - tentando novamente em breve');
      } else {
        toast({
          title: "Erro na Requisição",
          description: "Não foi possível obter os dados da API.",
          variant: "destructive",
        });
      }
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    testEndpoint,
    isLoading
  };
};
