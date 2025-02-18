
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
      const fullUrl = `${baseUrl}${endpoint.url}`;
      
      console.log('Tentando acessar:', fullUrl);
      console.log('Método:', endpoint.method);
      
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      const response = await fetch(fullUrl, {
        method: endpoint.method,
        headers
      });

      if (!response.ok) {
        console.log('Erro na resposta:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        });

        const errorText = await response.text();
        console.log('Corpo do erro:', errorText);

        toast({
          title: `Erro ${response.status}`,
          description: `Não foi possível acessar o endpoint. Verifique se a URL está correta e se o servidor está respondendo. URL: ${endpoint.url}`,
          variant: "destructive",
        });
        return;
      }

      const data = await response.json();
      
      console.log('Dados completos da API:', data);
      console.log('JSON Path configurado:', endpoint.jsonPath);
      
      let extractedValue = data;
      if (endpoint.jsonPath) {
        extractedValue = get(data, endpoint.jsonPath);
        if (extractedValue === undefined) {
          console.log('Valor não encontrado no caminho especificado. Tentando primeiro elemento se for array...');
          if (Array.isArray(data) && data.length > 0) {
            extractedValue = get(data[0], endpoint.jsonPath);
          }
        }
      }
      
      console.log('Valor extraído:', extractedValue);
      
      if (extractedValue === undefined) {
        toast({
          title: "Aviso",
          description: "Valor não encontrado no caminho JSON especificado.",
          variant: "destructive",
        });
        return;
      }
      
      const toastDescription = (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(extractedValue, null, 2)}</code>
        </pre>
      );
      
      toast({
        title: "Retorno do Endpoint",
        description: toastDescription,
      });

      return extractedValue;

    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
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
