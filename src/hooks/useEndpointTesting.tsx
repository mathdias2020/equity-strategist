
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

    // Clean up the URL by removing any leading/trailing slashes
    const cleanUrl = endpoint.url.replace(/^\/+|\/+$/g, '');
    
    setIsLoading(true);
    try {
      // Get the correct base URL based on the endpoint type
      const baseUrlKey = endpoint.url.includes('dolar') ? 'api-base-url-dolar' : 'api-base-url-indice';
      const baseUrl = localStorage.getItem(baseUrlKey) || 'https://api.traderbanqueiro.com.br/';
      
      // Remove trailing slash from base URL and ensure clean concatenation
      const normalizedBaseUrl = baseUrl.replace(/\/+$/, '');
      const fullUrl = `${normalizedBaseUrl}/${cleanUrl}`;
      
      console.log('Tentando acessar:', fullUrl);
      console.log('Método:', endpoint.method);
      
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': window.location.origin,
      };

      const response = await fetch(fullUrl, {
        method: endpoint.method,
        headers,
        mode: 'cors',
        credentials: 'omit',
        cache: 'no-cache',
        redirect: 'follow',
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
          description: `Falha ao acessar o endpoint. ${response.statusText}\n
          URL: ${cleanUrl}\n
          Status: ${response.status}\n
          Mensagem: ${errorText || 'Sem mensagem de erro'}`,
          variant: "destructive",
        });
        return;
      }

      const data = await response.json();
      
      console.log('Dados completos da API:', data);
      console.log('JSON Path configurado:', endpoint.jsonPath);
      
      let extractedValue = data;
      if (endpoint.jsonPath) {
        const paths = endpoint.jsonPath.split('+').map(p => p.trim());
        
        for (const path of paths) {
          extractedValue = get(extractedValue, path);
          if (extractedValue === undefined) {
            console.log(`Valor não encontrado no caminho: ${path}`);
            if (Array.isArray(data) && data.length > 0) {
              extractedValue = get(data[0], path);
            }
            break;
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

      return extractedValue;

    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      
      toast({
        title: "Erro ao testar endpoint",
        description: `Erro ao acessar a API: ${errorMessage}\n
        Verifique:\n
        1. Se o servidor está online e respondendo\n
        2. Se a URL está correta: ${endpoint.url}\n
        3. Se o servidor permite requisições CORS de ${window.location.origin}`,
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
