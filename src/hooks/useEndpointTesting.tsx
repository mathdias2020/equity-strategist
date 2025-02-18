
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
      console.log('Mock endpoint test for:', endpoint.displayLocation);
      return null;
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

