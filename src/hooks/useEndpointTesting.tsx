
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
      const baseUrl = localStorage.getItem('api-base-url') || 'http://api.traderbanqueiro.com.br/';
      const response = await fetch(`${baseUrl}${endpoint.url}`, {
        method: endpoint.method,
      });
      const data = await response.json();
      
      // Tenta extrair o valor usando o jsonPath se especificado
      const extractedValue = endpoint.jsonPath ? get(data, endpoint.jsonPath) : data;
      
      const toastDescription = (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(extractedValue, null, 2)}</code>
        </pre>
      );
      
      toast({
        title: "Retorno do Endpoint",
        description: toastDescription,
      });

      // Adiciona log para debug
      console.log('Dados completos:', data);
      console.log('JSON Path:', endpoint.jsonPath);
      console.log('Valor extraído:', extractedValue);

    } catch (error) {
      toast({
        title: "Erro ao testar endpoint",
        description: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    testEndpoint,
    isLoading
  };
};

