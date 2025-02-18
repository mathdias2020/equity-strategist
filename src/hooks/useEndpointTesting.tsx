
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
      console.log('Usando jsonPath:', endpoint.jsonPath);
      
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
      
      if (endpoint.jsonPath) {
        // Suporta múltiplos caminhos separados por '+'
        const paths = endpoint.jsonPath.split('+').map(p => p.trim());
        if (paths.length > 1) {
          extractedValue = paths.reduce((acc, path) => {
            const pathValue = get(data, path);
            return acc !== undefined ? acc + Number(pathValue) : Number(pathValue);
          }, undefined);
        } else {
          extractedValue = get(data, endpoint.jsonPath);
        }
      } else {
        // Lógica padrão para extrair valores baseado no displayLocation
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
