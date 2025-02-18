
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
      };

      const response = await fetch(fullUrl, {
        method: endpoint.method,
        headers,
        mode: 'no-cors', // Changed from 'cors' to 'no-cors'
        credentials: 'omit',
        cache: 'no-cache',
      });

      // Due to 'no-cors' mode, we can't access the response data
      // We'll need to rely on the success of the request itself
      if (response.type === 'opaque') {
        console.log('Requisição feita em modo no-cors. Não é possível acessar os dados da resposta.');
        toast({
          title: "Aviso",
          description: "Requisição realizada, mas devido às restrições de CORS, não é possível visualizar a resposta. Verifique os logs do console para mais detalhes.",
          variant: "default",
        });
        return null;
      }

      if (!response.ok) {
        console.log('Erro na resposta:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        });

        const errorText = await response.text();
        console.log('Corpo do erro:', errorText);

        toast({
          title: "Erro na Requisição",
          description: `O servidor não está configurado para permitir requisições do frontend. Por favor:\n
          1. Verifique se o servidor está configurado com CORS\n
          2. Configure o servidor para aceitar requisições de: ${window.location.origin}\n
          3. Contate o administrador do sistema para habilitar CORS`,
          variant: "destructive",
        });
        return;
      }

      const data = await response.json();
      
      console.log('Dados completos da API:', data);
      
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
      
      toast({
        title: "Erro de CORS",
        description: `O servidor não está permitindo requisições do frontend (${window.location.origin}).\n
        Ações necessárias:\n
        1. Configure o servidor para aceitar requisições CORS\n
        2. Adicione ${window.location.origin} aos domínios permitidos\n
        3. Contate o administrador do sistema para suporte`,
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
