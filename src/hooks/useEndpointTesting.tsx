
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { EndpointConfig } from '@/types/api-config';

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
        mode: 'cors', // Mudando para cors explícito
        credentials: 'omit' // Evita envio de cookies
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Dados completos da API:', data);
      
      let extractedValue = null;
      
      // Extrair valor baseado no jsonPath especificado no endpoint
      if (data.averagePrice && data.averagePrice.length > 0) {
        const currentPrice = data.averagePrice[0];
        
        switch (endpoint.displayLocation) {
          case 'price-mini-dolar':
            extractedValue = currentPrice.averagePriceMiniDolar;
            break;
          case 'price-mini-indice':
            extractedValue = currentPrice.averagePriceMiniIndice;
            break;
          case 'price-full-dolar':
            extractedValue = currentPrice.averagePriceDolar;
            break;
          case 'price-full-indice':
            extractedValue = currentPrice.averagePriceIndice;
            break;
          case 'price-general-dolar':
            extractedValue = currentPrice.averagePriceGeneralDolar;
            break;
          case 'price-general-indice':
            extractedValue = currentPrice.averagePriceGeneralIndice;
            break;
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
          default:
            extractedValue = null;
        }
      }
      
      console.log('Valor extraído:', extractedValue);
      return extractedValue;

    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
      // Não mostrar toast para cada erro de API para evitar spam
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
