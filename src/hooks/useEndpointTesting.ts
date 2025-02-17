
import { useToast } from "@/hooks/use-toast";

interface EndpointConfig {
  url: string;
  method: 'GET' | 'POST';
}

export const useEndpointTesting = () => {
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

    try {
      const baseUrl = localStorage.getItem('api-base-url') || 'http://api.traderbanqueiro.com.br/';
      console.log('Testando endpoint:', `${baseUrl}${endpoint.url}`);
      
      const response = await fetch(`${baseUrl}${endpoint.url}`, {
        method: endpoint.method,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Resposta da API:', data);
      
      if (endpoint.url.includes('detailedPosition')) {
        if (!Array.isArray(data)) {
          throw new Error('Resposta da API não é um array como esperado');
        }
      }
      
      toast({
        title: "Retorno do Endpoint",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    } catch (error) {
      console.error('Erro ao testar endpoint:', error);
      toast({
        title: "Erro ao testar endpoint",
        description: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
        variant: "destructive",
      });
    }
  };

  return { testEndpoint };
};
