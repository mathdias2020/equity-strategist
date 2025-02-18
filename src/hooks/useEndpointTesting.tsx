
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
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Dados completos da API:', data);
      
      let extractedValue = null;
      
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
        default:
          extractedValue = null;
      }
      
      console.log('Valor extraído:', extractedValue);
      return extractedValue;

    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
      toast({
        title: "Erro na Requisição",
        description: "Não foi possível obter os dados da API.",
        variant: "destructive",
      });
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
