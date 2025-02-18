
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
      const baseUrl = localStorage.getItem(baseUrlKey) || 'http://api.traderbanqueiro.com.br/';
      
      // Remove trailing slash from base URL and ensure clean concatenation
      const normalizedBaseUrl = baseUrl.replace(/\/+$/, '');
      const fullUrl = `${normalizedBaseUrl}/${cleanUrl}`;
      
      console.log('Tentando acessar:', fullUrl);
      console.log('Método:', endpoint.method);
      
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      const response = await fetch(fullUrl, {
        method: endpoint.method,
        headers,
        mode: 'cors',
        credentials: 'omit' // Changed from 'include' to 'omit'
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
          description: `Falha ao acessar o endpoint. Por favor, verifique:\n
          1. Se a URL está correta: ${cleanUrl}\n
          2. Se o servidor está online\n
          3. Se o método ${endpoint.method} é permitido\n
          4. Se o CORS está configurado corretamente no servidor`,
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
        description: `Erro ao acessar a API. Verifique:\n
        1. Se o servidor está online\n
        2. Se a URL está correta\n
        3. Se o CORS está configurado no servidor`,
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
